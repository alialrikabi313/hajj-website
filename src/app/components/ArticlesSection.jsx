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

export default function ArticlesSection() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchArticles() {
      try {
        const q = query(
          collection(db, 'articles'),
          orderBy('createdAt', 'desc'),
          limit(4)
        );
        const snapshot = await getDocs(q);
        const items = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
          createdAt: doc.data().createdAt?.toDate?.() || null,
        }));
        setArticles(items);
      } catch (err) {
        console.error('Error fetching articles:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchArticles();
  }, []);

  if (!loading && articles.length === 0) return null;

  return (
    <section style={{ padding: '80px 16px', backgroundColor: '#FAF8F2' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <h2 className="section-title">مقالات المؤسسة</h2>

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

        {/* Articles Cards */}
        {!loading && articles.length > 0 && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
            marginTop: '48px',
          }}>
            {articles.map((article) => (
              <Link
                key={article.id}
                href="/articles"
                className="service-card"
                style={{ textDecoration: 'none' }}
              >
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '14px',
                  backgroundColor: 'rgba(27, 94, 32, 0.08)',
                  border: '1px solid rgba(27, 94, 32, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#1B5E20',
                  marginBottom: '20px',
                }}>
                  <svg style={{ width: '28px', height: '28px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>

                {article.createdAt && (
                  <span style={{ color: '#c9a227', fontSize: '12px', fontWeight: '600', display: 'block', marginBottom: '6px' }}>
                    {formatDate(article.createdAt)}
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
                  {article.title}
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
                  {article.content}
                </p>
              </Link>
            ))}
          </div>
        )}

        {/* View All Button */}
        {!loading && articles.length > 0 && (
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link
              href="/articles"
              className="btn-primary"
              style={{ textDecoration: 'none' }}
            >
              عرض جميع المقالات
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
