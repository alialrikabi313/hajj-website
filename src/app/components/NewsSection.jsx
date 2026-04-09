'use client';

import { useState, useEffect } from 'react';
import { collection, query, orderBy, limit, getDocs } from 'firebase/firestore';
import { db } from '../lib/firebase';
import Link from 'next/link';

function formatDate(date) {
  if (!date) return '';
  return new Date(date).toLocaleDateString('ar-IQ', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function NewsSection() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNews() {
      try {
        const q = query(
          collection(db, 'news'),
          orderBy('createdAt', 'desc'),
          limit(4)
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

  if (!loading && news.length === 0) return null;

  return (
    <section style={{ padding: '80px 16px', backgroundColor: '#FAF8F2' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <h2 className="section-title">أخبار ونشاطات المؤسسة</h2>

        {/* Loading Skeleton */}
        {loading && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
            marginTop: '48px',
          }}>
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="service-card" style={{ padding: '28px' }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '14px', background: '#f0f0f0', marginBottom: '20px' }} />
                <div style={{ height: '14px', background: '#f0f0f0', borderRadius: '6px', marginBottom: '10px', width: '70%' }} />
                <div style={{ height: '10px', background: '#f0f0f0', borderRadius: '6px', marginBottom: '6px', width: '100%' }} />
                <div style={{ height: '10px', background: '#f0f0f0', borderRadius: '6px', width: '50%' }} />
              </div>
            ))}
          </div>
        )}

        {/* News Cards */}
        {!loading && news.length > 0 && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
            marginTop: '48px',
          }}>
            {news.map((item) => (
              <Link
                key={item.id}
                href="/news"
                className="service-card"
                style={{ textDecoration: 'none' }}
              >
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '14px',
                  backgroundColor: item.videoUrl ? '#e9456012' : '#c9a22712',
                  border: item.videoUrl ? '1px solid #e9456025' : '1px solid #c9a22725',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: item.videoUrl ? '#e94560' : '#c9a227',
                  marginBottom: '20px',
                }}>
                  {item.videoUrl ? (
                    <svg style={{ width: '28px', height: '28px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  ) : (
                    <svg style={{ width: '28px', height: '28px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                  )}
                </div>

                {item.createdAt && (
                  <span style={{ color: '#c9a227', fontSize: '12px', fontWeight: '600', display: 'block', marginBottom: '6px' }}>
                    {formatDate(item.createdAt)}
                  </span>
                )}

                <h3 style={{
                  fontSize: '18px',
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
              </Link>
            ))}
          </div>
        )}

        {/* View All Button */}
        {!loading && news.length > 0 && (
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link
              href="/news"
              className="btn-primary"
              style={{ textDecoration: 'none' }}
            >
              عرض جميع الأخبار
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
