const LIBRARY_ID = '604413';
const API_KEY = '93a86f5d-24bb-4257-b89818175481-aa18-4db2';
const BASE_URL = `https://video.bunnycdn.com/library/${LIBRARY_ID}`;

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const search = searchParams.get('search') || '';

  try {
    // Fetch all videos (up to 500) in a single request
    const allVideos = [];
    let page = 1;
    let hasMore = true;

    while (hasMore) {
      const url = new URL(`${BASE_URL}/videos`);
      url.searchParams.set('page', String(page));
      url.searchParams.set('itemsPerPage', '100');
      url.searchParams.set('orderBy', 'date');

      if (search) {
        url.searchParams.set('search', search);
      }

      const res = await fetch(url.toString(), {
        headers: {
          AccessKey: API_KEY,
          Accept: 'application/json',
        },
        next: { revalidate: 60 },
      });

      if (!res.ok) {
        return Response.json(
          { error: 'Failed to fetch videos' },
          { status: res.status }
        );
      }

      const data = await res.json();
      const items = data.items || [];
      allVideos.push(...items);

      hasMore = allVideos.length < data.totalItems && items.length > 0;
      page++;
    }

    const readyVideos = allVideos.filter(
      (video) => video.status === 3 || video.status === 4
    );

    return Response.json({
      totalItems: readyVideos.length,
      items: readyVideos.map((video) => ({
        guid: video.guid,
        title: video.title,
        description: video.description || '',
        length: video.length,
        dateUploaded: video.dateUploaded,
        views: video.views,
        thumbnail: `https://vz-4b21b4c2-cf0.b-cdn.net/${video.guid}/thumbnail.jpg`,
      })),
    });
  } catch {
    return Response.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
