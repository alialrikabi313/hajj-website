'use client';

import { useState, useEffect, useCallback } from 'react';

function formatDuration(seconds) {
  if (!seconds || seconds <= 0) return '0:00';
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);
  if (h > 0) return `${h}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  return `${m}:${String(s).padStart(2, '0')}`;
}

function formatDate(dateStr) {
  if (!dateStr) return '';
  const date = new Date(dateStr);
  return date.toLocaleDateString('ar-IQ', { year: 'numeric', month: 'long', day: 'numeric' });
}

function formatViews(views) {
  if (!views && views !== 0) return '0';
  if (views >= 1000000) return `${(views / 1000000).toFixed(1)}M`;
  if (views >= 1000) return `${(views / 1000).toFixed(1)}K`;
  return views.toLocaleString('ar-IQ');
}

export default function VideosPage() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Debounce search
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchQuery);
    }, 400);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  const fetchVideos = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const params = new URLSearchParams();
      if (debouncedSearch) params.set('search', debouncedSearch);

      const res = await fetch(`/api/videos?${params.toString()}`);
      if (!res.ok) throw new Error('فشل في جلب الفيديوهات');
      const data = await res.json();
      setVideos(data.items || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [debouncedSearch]);

  useEffect(() => {
    fetchVideos();
  }, [fetchVideos]);

  return (
    <div style={{ minHeight: '100vh' }}>
      {/* Hero Section - Dark */}
      <section style={{
        position: 'relative',
        padding: '80px 16px',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 50%, #16213e 100%)',
        textAlign: 'center',
      }}>
        <div style={{
          position: 'absolute',
          bottom: -2,
          left: 0,
          right: 0,
          height: '50px',
          background: '#FAF8F2',
          clipPath: 'ellipse(55% 100% at 50% 100%)',
        }} />

        <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <span style={{ color: '#e94560', fontWeight: '600', fontSize: '14px', letterSpacing: '2px', display: 'block', marginBottom: '16px' }}>
            المكتبة المرئية
          </span>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '700', color: 'white', marginBottom: '16px' }}>
            محاضرات وتوجيهات{' '}
            <span className="text-gradient-gold">سماحة المرجع</span>
          </h1>
          <p style={{ color: '#d1d5db', fontSize: '16px', lineHeight: '1.7' }}>
            مجموعة من المحاضرات والتوجيهات والشروحات المرئية للحجاج والمعتمرين
          </p>
        </div>
      </section>

      {/* Videos Section - Light */}
      <section style={{ padding: '64px 16px', backgroundColor: '#FAF8F2' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <h2 className="section-title">الفيديوهات</h2>

          {/* Search Bar */}
          <div style={{
            maxWidth: '500px',
            margin: '48px auto 32px',
            position: 'relative',
          }}>
            <svg
              style={{
                position: 'absolute',
                right: '16px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '20px',
                height: '20px',
                color: '#9ca3af',
                pointerEvents: 'none',
              }}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ابحث في الفيديوهات..."
              style={{
                width: '100%',
                padding: '14px 48px 14px 16px',
                borderRadius: '12px',
                border: '1px solid rgba(0,0,0,0.08)',
                backgroundColor: 'white',
                fontSize: '15px',
                color: '#2C2A25',
                outline: 'none',
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                transition: 'border-color 0.3s, box-shadow 0.3s',
              }}
              onFocus={(e) => {
                e.target.style.borderColor = 'rgba(201, 162, 39, 0.4)';
                e.target.style.boxShadow = '0 2px 12px rgba(201, 162, 39, 0.1)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'rgba(0,0,0,0.08)';
                e.target.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)';
              }}
            />
          </div>

          {/* Loading State */}
          {loading && (
            <div className="responsive-grid-320" style={{
              marginTop: '32px',
            }}>
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} style={{
                  borderRadius: '16px',
                  overflow: 'hidden',
                  backgroundColor: 'white',
                  border: '1px solid rgba(0,0,0,0.06)',
                }}>
                  <div style={{
                    aspectRatio: '16/9',
                    background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
                    backgroundSize: '200% 100%',
                    animation: 'shimmer 1.5s infinite',
                  }} />
                  <div style={{ padding: '20px' }}>
                    <div style={{ height: '12px', background: '#f0f0f0', borderRadius: '6px', marginBottom: '12px', width: '40%' }} />
                    <div style={{ height: '16px', background: '#f0f0f0', borderRadius: '6px', marginBottom: '8px', width: '80%' }} />
                    <div style={{ height: '12px', background: '#f0f0f0', borderRadius: '6px', width: '100%' }} />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Error State */}
          {error && !loading && (
            <div style={{
              marginTop: '48px',
              textAlign: 'center',
              padding: '40px',
              borderRadius: '20px',
              backgroundColor: 'white',
              border: '1px solid rgba(233, 69, 96, 0.2)',
            }}>
              <svg style={{ width: '48px', height: '48px', margin: '0 auto 16px', color: '#e94560' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#2C2A25', marginBottom: '8px' }}>حدث خطأ</h3>
              <p style={{ color: '#7A7670', fontSize: '14px', marginBottom: '20px' }}>{error}</p>
              <button
                onClick={fetchVideos}
                style={{
                  padding: '10px 24px',
                  borderRadius: '10px',
                  backgroundColor: '#c9a227',
                  color: 'white',
                  border: 'none',
                  fontSize: '14px',
                  fontWeight: '600',
                  cursor: 'pointer',
                }}
              >
                إعادة المحاولة
              </button>
            </div>
          )}

          {/* Videos Grid */}
          {!loading && !error && videos.length > 0 && (
            <div className="responsive-grid-320" style={{
              marginTop: '32px',
            }}>
              {videos.map((video) => (
                <VideoCard
                  key={video.guid}
                  video={video}
                  onClick={() => setSelectedVideo(video)}
                />
              ))}
            </div>
          )}

          {/* Empty State */}
          {!loading && !error && videos.length === 0 && (
            <div style={{
              marginTop: '48px',
              textAlign: 'center',
              padding: '60px 40px',
              borderRadius: '20px',
              backgroundColor: 'white',
              border: '1px solid rgba(201, 162, 39, 0.1)',
              boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
            }}>
              <svg style={{ width: '48px', height: '48px', margin: '0 auto 16px', color: 'rgba(201, 162, 39, 0.4)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#2C2A25', marginBottom: '8px' }}>
                {debouncedSearch ? 'لا توجد نتائج' : 'لا توجد فيديوهات حالياً'}
              </h3>
              <p style={{ color: '#7A7670', fontSize: '14px' }}>
                {debouncedSearch
                  ? `لم يتم العثور على فيديوهات تطابق "${debouncedSearch}"`
                  : 'سيتم إضافة الفيديوهات قريباً'}
              </p>
            </div>
          )}

          {/* Coming Soon Notice */}
          {!loading && !error && videos.length > 0 && (
            <div style={{
              marginTop: '64px',
              textAlign: 'center',
              padding: '40px',
              borderRadius: '20px',
              backgroundColor: 'white',
              border: '1px solid rgba(201, 162, 39, 0.1)',
              boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
            }}>
              <svg style={{ width: '48px', height: '48px', margin: '0 auto 16px', color: 'rgba(201, 162, 39, 0.4)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#2C2A25', marginBottom: '8px' }}>المزيد من الفيديوهات قريباً</h3>
              <p style={{ color: '#7A7670', fontSize: '14px' }}>
                نعمل على إضافة المزيد من المحاضرات والشروحات المرئية
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Video Player Modal */}
      {selectedVideo && (
        <VideoModal
          video={selectedVideo}
          onClose={() => setSelectedVideo(null)}
        />
      )}
    </div>
  );
}

function VideoCard({ video, onClick }) {
  return (
    <div
      style={{
        borderRadius: '16px',
        overflow: 'hidden',
        backgroundColor: 'white',
        border: '1px solid rgba(0,0,0,0.06)',
        boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
      }}
      className="card"
      onClick={onClick}
    >
      {/* Thumbnail */}
      <div style={{
        position: 'relative',
        aspectRatio: '16/9',
        background: 'linear-gradient(135deg, #1a1a2e, #16213e)',
        overflow: 'hidden',
      }}>
        <img
          src={video.thumbnail}
          alt={video.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.4s ease',
          }}
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />

        {/* Play Overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'rgba(0,0,0,0.15)',
          opacity: 0,
          transition: 'opacity 0.3s',
        }}
        className="play-overlay"
        >
          <div style={{
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            backgroundColor: 'rgba(201, 162, 39, 0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
          }}>
            <svg style={{ width: '24px', height: '24px', color: 'white', marginRight: '-2px' }} fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>

        {/* Duration Badge */}
        <div style={{
          position: 'absolute',
          bottom: '8px',
          left: '8px',
          padding: '3px 8px',
          backgroundColor: 'rgba(0,0,0,0.75)',
          borderRadius: '6px',
          color: 'white',
          fontSize: '12px',
          fontWeight: '600',
        }}>
          {formatDuration(video.length)}
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
          <span style={{ color: '#c9a227', fontSize: '12px', fontWeight: '600' }}>
            {formatDate(video.dateUploaded)}
          </span>
          <span style={{ color: '#d1d5db' }}>|</span>
          <span style={{ color: '#9ca3af', fontSize: '12px' }}>
            {formatViews(video.views)} مشاهدة
          </span>
        </div>

        <h3 style={{ color: '#2C2A25', fontWeight: '700', fontSize: '16px', marginBottom: '8px', lineHeight: '1.5' }}>
          {video.title}
        </h3>

        {video.description && (
          <p style={{ color: '#7A7670', fontSize: '13px', lineHeight: '1.6' }} className="line-clamp-2">
            {video.description}
          </p>
        )}
      </div>

      <style jsx>{`
        .card:hover .play-overlay {
          opacity: 1 !important;
        }
        .card:hover img {
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
}

function VideoModal({ video, onClose }) {
  // Close on Escape
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 10000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
        animation: 'fadeIn 0.2s ease',
      }}
      onClick={onClose}
    >
      {/* Backdrop */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundColor: 'rgba(0,0,0,0.85)',
        backdropFilter: 'blur(8px)',
      }} />

      {/* Modal Content */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '1000px',
          animation: 'fadeInUp 0.3s ease',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="modal-close-btn"
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            border: 'none',
            backgroundColor: 'rgba(255,255,255,0.15)',
            color: 'white',
            fontSize: '20px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background-color 0.3s',
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255,255,255,0.25)'}
          onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(255,255,255,0.15)'}
        >
          ✕
        </button>

        {/* Video iframe */}
        <div style={{
          borderRadius: '16px',
          overflow: 'hidden',
          backgroundColor: '#000',
          boxShadow: '0 25px 60px rgba(0,0,0,0.5)',
        }}>
          <iframe
            src={`https://iframe.mediadelivery.net/embed/604413/${video.guid}?autoplay=false&preload=true`}
            loading="lazy"
            style={{
              border: 'none',
              width: '100%',
              aspectRatio: '16/9',
              display: 'block',
            }}
            allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Video Info */}
        <div style={{
          padding: '20px 4px',
          color: 'white',
        }}>
          <h2 style={{
            fontSize: '18px',
            fontWeight: '700',
            marginBottom: '8px',
            lineHeight: '1.5',
          }}>
            {video.title}
          </h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <span style={{ color: '#c9a227', fontSize: '13px', fontWeight: '600' }}>
              {formatDate(video.dateUploaded)}
            </span>
            <span style={{ color: 'rgba(255,255,255,0.3)' }}>|</span>
            <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '13px' }}>
              {formatViews(video.views)} مشاهدة
            </span>
            <span style={{ color: 'rgba(255,255,255,0.3)' }}>|</span>
            <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '13px' }}>
              {formatDuration(video.length)}
            </span>
          </div>
          {video.description && (
            <p style={{
              color: 'rgba(255,255,255,0.6)',
              fontSize: '14px',
              lineHeight: '1.7',
              marginTop: '12px',
            }}>
              {video.description}
            </p>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
