const fs = require('fs');
const path = require('path');

const API_KEY = '9a9f7cae-5e28-40f3-8cd1-d1b1be578dadea8c3e6b-6a21-4727-98e7-b4f4ea575616';
const LIBRARY_ID = '604413';

async function fetchVideos() {
  try {
    const res = await fetch(`https://video.bunnycdn.com/library/${LIBRARY_ID}/videos?page=1&itemsPerPage=100&orderBy=date`, {
      headers: { 'AccessKey': API_KEY }
    });
    const data = await res.json();

    console.log('API Response keys:', Object.keys(data));
    console.log('Full response:', JSON.stringify(data).substring(0, 500));

    const videoList = data.items || data.Items || data.videos || data;
    const items = Array.isArray(videoList) ? videoList : [];

    const videos = items.map(v => ({
      guid: v.guid || v.Guid,
      title: v.title || v.Title,
      description: v.metaTags?.find(t => t.property === 'description')?.value || '',
      length: v.length || v.Length || 0,
      views: v.views || v.Views || 0,
      dateUploaded: v.dateUploaded || v.DateUploaded,
      thumbnail: `https://vz-4b21b4c2-cf0.b-cdn.net/${v.guid || v.Guid}/thumbnail.jpg`,
    }));

    const outputDir = path.join(__dirname, '..', 'public', 'data');
    if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

    fs.writeFileSync(path.join(outputDir, 'videos.json'), JSON.stringify({ items: videos }, null, 2));
    console.log(`Fetched ${videos.length} videos successfully`);
  } catch (err) {
    console.error('Error fetching videos:', err);
    process.exit(1);
  }
}

fetchVideos();