'use client';

import { useState, useEffect } from 'react';
import { collection, query, orderBy, getDocs } from 'firebase/firestore';
import { db } from '../lib/firebase';

function formatDate(date) {
  if (!date) return '';
  return new Date(date).toLocaleDateString('ar-IQ', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function NewsPage() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedNews, setSelectedNews] = useState(null);

  useEffect(() => {
    async function fetchNews() {
      try {
        const q = query(
          collection(db, 'news'),
          orderBy('createdAt', 'desc')
        );
        const snapshot = await getDocs(q);
        const items = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
          createdAt: doc.data().createdAt?.toDate?.() || null,
        }));
        setNews(items);
      } catch (err) {
        console.error('Error fetching news:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchNews();
  }, []);

  // Full-screen reader mode
  if (selectedNews) {
    return <NewsReader item={selectedNews} onBack={() => setSelectedNews(null)} />;
  }

  return (
    <div style={{ minHeight: '100vh' }}>
      {/* Hero Section */}
      <section style={{
        position: 'relative',
        padding: '80px 16px',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 50%, #16213e 100%)',
        textAlign: 'center',
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/assets/kaba_header.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.06,
        }} />
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
          <span style={{ color: '#c9a227', fontWeight: '600', fontSize: '14px', letterSpacing: '2px', display: 'block', marginBottom: '16px' }}>
            أخبار ونشاطات
          </span>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '700', color: 'white', marginBottom: '16px' }}>
            أخبار ونشاطات{' '}
            <span className="text-gradient-gold">المؤسسة</span>
          </h1>
          <p style={{ color: '#d1d5db', fontSize: '16px', lineHeight: '1.7' }}>
            آخر الأخبار والنشاطات والفعاليات المتعلقة بمؤسسة الحج والعمرة
          </p>
        </div>
      </section>

      {/* News Section */}
      <section style={{ padding: '64px 16px', backgroundColor: '#FAF8F2' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <h2 className="section-title">جميع الأخبار</h2>

          {/* Loading State */}
          {loading && (
            <div className="responsive-grid-280" style={{
              marginTop: '48px',
            }}>
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="service-card" style={{ padding: '28px' }}>
                  <div style={{ width: '60px', height: '60px', borderRadius: '14px', background: '#f0f0f0', marginBottom: '20px' }} />
                  <div style={{ height: '14px', background: '#f0f0f0', borderRadius: '6px', marginBottom: '10px', width: '80%' }} />
                  <div style={{ height: '10px', background: '#f0f0f0', borderRadius: '6px', marginBottom: '6px', width: '100%' }} />
                  <div style={{ height: '10px', background: '#f0f0f0', borderRadius: '6px', width: '60%' }} />
                </div>
              ))}
            </div>
          )}

          {/* News Grid */}
          {!loading && news.length > 0 && (
            <div className="responsive-grid-280" style={{
              marginTop: '48px',
            }}>
              {news.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedNews(item)}
                  className="service-card"
                  style={{ cursor: 'pointer', textDecoration: 'none', padding: '28px' }}
                >
                  {/* Icon */}
                  <div style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '14px',
                    backgroundColor: item.videoUrl ? 'rgba(233, 69, 96, 0.08)' : 'rgba(201, 162, 39, 0.08)',
                    border: item.videoUrl ? '1px solid rgba(233, 69, 96, 0.15)' : '1px solid rgba(201, 162, 39, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: item.videoUrl ? '#e94560' : '#c9a227',
                    marginBottom: '20px',
                  }}>
                    {item.videoUrl ? (
                      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    ) : (
                      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                      </svg>
                    )}
                  </div>

                  {/* Date badge */}
                  {item.createdAt && (
                    <span style={{
                      color: '#c9a227',
                      fontSize: '12px',
                      fontWeight: '600',
                      display: 'block',
                      marginBottom: '8px',
                    }}>
                      {formatDate(item.createdAt)}
                    </span>
                  )}

                  {/* Title */}
                  <h3 style={{
                    fontSize: '17px',
                    fontWeight: '700',
                    color: '#2C2A25',
                    marginBottom: '10px',
                    lineHeight: '1.6',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  }}>
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p style={{
                    color: '#7A7670',
                    fontSize: '14px',
                    lineHeight: '1.7',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  }}>
                    {item.content}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Empty State */}
          {!loading && news.length === 0 && (
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
              <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#2C2A25', marginBottom: '8px' }}>
                لا توجد أخبار حالياً
              </h3>
              <p style={{ color: '#7A7670', fontSize: '14px' }}>
                سيتم إضافة الأخبار والنشاطات قريباً إن شاء الله
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

/* ─── Image Lightbox ─── */
function ImageLightbox({ src, alt, onClose }) {
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
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 10000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
        backgroundColor: 'rgba(0,0,0,0.9)',
        backdropFilter: 'blur(8px)',
        cursor: 'zoom-out',
      }}
    >
      <button
        onClick={onClose}
        style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          width: '44px',
          height: '44px',
          borderRadius: '50%',
          border: 'none',
          backgroundColor: 'rgba(255,255,255,0.15)',
          color: 'white',
          fontSize: '22px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 10001,
        }}
      >
        ✕
      </button>
      <img
        src={src}
        alt={alt}
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: '95vw',
          maxHeight: '90vh',
          objectFit: 'contain',
          borderRadius: '8px',
          cursor: 'default',
        }}
      />
    </div>
  );
}

/* ─── Full-Screen News Reader ─── */
function NewsReader({ item, onBack }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#FAF8F2' }}>
      {/* Top Bar */}
      <div style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backgroundColor: 'rgba(250, 248, 242, 0.95)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(201, 162, 39, 0.1)',
        padding: '12px 24px',
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <button
            onClick={onBack}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 20px',
              borderRadius: '10px',
              border: '1px solid rgba(201, 162, 39, 0.2)',
              backgroundColor: 'white',
              color: '#c9a227',
              fontWeight: '600',
              fontSize: '14px',
              cursor: 'pointer',
              fontFamily: 'inherit',
              transition: 'all 0.2s ease',
            }}
          >
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ transform: 'scaleX(-1)' }}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            العودة للأخبار
          </button>

          <span style={{ color: '#7A7670', fontSize: '13px' }}>أخبار ونشاطات المؤسسة</span>
        </div>
      </div>

      {/* Article Header */}
      <header style={{
        padding: '60px 24px 40px',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {item.createdAt && (
            <span style={{
              display: 'inline-block',
              padding: '6px 16px',
              backgroundColor: 'rgba(201, 162, 39, 0.1)',
              color: '#c9a227',
              borderRadius: '20px',
              fontSize: '13px',
              fontWeight: '600',
              marginBottom: '20px',
            }}>
              {formatDate(item.createdAt)}
            </span>
          )}

          <h1 style={{
            fontSize: 'clamp(1.6rem, 4vw, 2.5rem)',
            fontWeight: '700',
            color: '#2C2A25',
            lineHeight: '1.6',
            fontFamily: 'Amiri, serif',
            marginBottom: '20px',
          }}>
            {item.title}
          </h1>

          {/* Ornamental line */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
            <span style={{ height: '1px', width: '60px', background: 'linear-gradient(90deg, transparent, rgba(201,162,39,0.4))' }} />
            <span style={{ width: '8px', height: '8px', background: '#c9a227', transform: 'rotate(45deg)' }} />
            <span style={{ height: '1px', width: '60px', background: 'linear-gradient(90deg, rgba(201,162,39,0.4), transparent)' }} />
          </div>
        </div>
      </header>

      {/* Media Section */}
      {(item.videoUrl || item.imageUrl) && (
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 24px 40px' }}>
          {item.videoUrl && (
            <video
              src={item.videoUrl}
              controls
              playsInline
              preload="metadata"
              style={{
                width: '100%',
                borderRadius: '16px',
                marginBottom: item.imageUrl ? '20px' : '0',
                backgroundColor: '#000',
                boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
              }}
            />
          )}
          {item.imageUrl && (
            <img
              src={item.imageUrl}
              alt={item.title}
              onClick={() => setLightboxOpen(true)}
              style={{
                width: '100%',
                borderRadius: '16px',
                objectFit: 'cover',
                maxHeight: '500px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
                cursor: 'zoom-in',
              }}
            />
          )}
        </div>
      )}

      {/* Content */}
      <article style={{
        maxWidth: '750px',
        margin: '0 auto',
        padding: '0 24px 80px',
      }}>
        <div style={{
          backgroundColor: 'white',
          borderRadius: '20px',
          padding: 'clamp(24px, 5vw, 48px)',
          border: '1px solid rgba(0,0,0,0.04)',
          boxShadow: '0 2px 16px rgba(0,0,0,0.04)',
        }}>
          <div style={{
            color: '#3a3835',
            fontSize: 'clamp(16px, 2vw, 18px)',
            lineHeight: '2.2',
            whiteSpace: 'pre-wrap',
            fontFamily: 'Cairo, sans-serif',
          }}>
            {item.content}
          </div>
        </div>

        {/* Back button at bottom */}
        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <button
            onClick={onBack}
            className="btn-secondary"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              cursor: 'pointer',
              fontFamily: 'inherit',
            }}
          >
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ transform: 'scaleX(-1)' }}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            العودة لجميع الأخبار
          </button>
        </div>
      </article>

      {lightboxOpen && item.imageUrl && (
        <ImageLightbox
          src={item.imageUrl}
          alt={item.title}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </div>
  );
}
