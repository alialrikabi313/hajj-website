'use client';

import { useState, useEffect } from 'react';
import prayerData from './prayerData.json';

const monthNames = [
  'يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو',
  'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'
];

const prayerNames = [
  { key: 'fajr', label: 'الفجر' },
  { key: 'sunrise', label: 'الشروق' },
  { key: 'dhuhr', label: 'الظهر' },
  { key: 'maghrib', label: 'المغرب' },
  { key: 'midnight', label: 'منتصف الليل' },
];

export default function PrayerTimesPage() {
  const [today, setToday] = useState(null);
  const [selectedCity, setSelectedCity] = useState('mecca');

  useEffect(() => {
    setToday(new Date());
  }, []);

  if (!today) return null;

  const month = today.getMonth() + 1;
  const day = today.getDate();
  const monthData = prayerData[selectedCity]?.[String(month)];
  const todayData = monthData?.find(d => d.day === day);

  const cities = [
    { key: 'mecca', label: 'مكة المكرمة' },
    { key: 'medina', label: 'المدينة المنورة' },
  ];

  return (
    <div style={{ backgroundColor: '#FAF8F2', minHeight: '100vh' }}>
      {/* Header */}
      <section style={{
        background: 'linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 40%, #16213e 100%)',
        padding: '60px 16px 80px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/assets/kaba_header.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.07,
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

        <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px', margin: '0 auto' }}>
          <div style={{
            width: '70px',
            height: '70px',
            margin: '0 auto 20px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, rgba(201, 162, 39, 0.2), rgba(201, 162, 39, 0.05))',
            border: '2px solid rgba(201, 162, 39, 0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <svg style={{ width: '32px', height: '32px', color: '#c9a227' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>

          <h1 style={{
            fontFamily: 'Amiri, serif',
            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
            fontWeight: '700',
            color: 'white',
            marginBottom: '12px',
          }}>
            مواقيت الصلاة
          </h1>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            marginBottom: '16px',
          }}>
            <span style={{ height: '1px', width: '60px', background: 'linear-gradient(90deg, transparent, #c9a227)' }} />
            <span style={{ width: '6px', height: '6px', background: '#c9a227', transform: 'rotate(45deg)' }} />
            <span style={{ height: '1px', width: '60px', background: 'linear-gradient(90deg, #c9a227, transparent)' }} />
          </div>

          <p style={{ color: '#d1d5db', fontSize: '16px' }}>
            {day} {monthNames[month - 1]} {today.getFullYear()}م
          </p>
        </div>
      </section>

      {/* Content */}
      <section style={{ padding: '40px 16px 80px', maxWidth: '900px', margin: '0 auto' }}>
        {/* City Tabs */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '12px',
          marginBottom: '40px',
        }}>
          {cities.map(city => (
            <button
              key={city.key}
              onClick={() => setSelectedCity(city.key)}
              className="city-btn"
              style={{
                borderRadius: '12px',
                border: selectedCity === city.key ? '2px solid #c9a227' : '2px solid rgba(201, 162, 39, 0.2)',
                backgroundColor: selectedCity === city.key ? '#c9a227' : 'white',
                color: selectedCity === city.key ? 'white' : '#4B4640',
                fontWeight: '700',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: selectedCity === city.key ? '0 4px 16px rgba(201, 162, 39, 0.3)' : '0 2px 8px rgba(0,0,0,0.05)',
              }}
            >
              {city.label}
            </button>
          ))}
        </div>

        {/* Today's Prayer Times Card */}
        {todayData ? (
          <div
            className="prayer-content-card"
            style={{
              background: 'white',
              borderRadius: '20px',
              boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
              border: '1px solid rgba(201, 162, 39, 0.12)',
            }}
          >
            <div style={{ textAlign: 'center', marginBottom: '24px' }}>
              <h2 style={{
                fontFamily: 'Amiri, serif',
                fontSize: '22px',
                fontWeight: '700',
                color: '#2C2A25',
                marginBottom: '4px',
              }}>
                {selectedCity === 'mecca' ? 'مكة المكرمة' : 'المدينة المنورة'}
              </h2>
              <p style={{ color: '#7A7670', fontSize: '14px' }}>
                أوقات الصلاة ليوم {day} {monthNames[month - 1]}
              </p>
            </div>

            <div className="prayer-cards-grid">
              {prayerNames.map(prayer => (
                <PrayerCard
                  key={prayer.key}
                  label={prayer.label}
                  time={todayData[prayer.key]}
                  prayerKey={prayer.key}
                />
              ))}
            </div>
          </div>
        ) : (
          <div style={{
            textAlign: 'center',
            padding: '48px',
            background: 'white',
            borderRadius: '20px',
            color: '#7A7670',
          }}>
            لا تتوفر بيانات لهذا اليوم
          </div>
        )}

        {/* Full Month Table */}
        {monthData && (
          <div
            className="prayer-table-card"
            style={{
              marginTop: '40px',
              background: 'white',
              borderRadius: '20px',
              boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
              border: '1px solid rgba(201, 162, 39, 0.12)',
              overflowX: 'auto',
            }}
          >
            <h3 style={{
              fontFamily: 'Amiri, serif',
              fontSize: '20px',
              fontWeight: '700',
              color: '#2C2A25',
              marginBottom: '24px',
              textAlign: 'center',
            }}>
              جدول شهر {monthNames[month - 1]} كاملاً
            </h3>

            <table className="prayer-table" style={{
              width: '100%',
              borderCollapse: 'collapse',
              textAlign: 'center',
              fontSize: '14px',
            }}>
              <thead>
                <tr style={{ backgroundColor: '#0f0f1a' }}>
                  <th style={thStyle}>اليوم</th>
                  <th style={thStyle}>الفجر</th>
                  <th style={thStyle}>الشروق</th>
                  <th style={thStyle}>الظهر</th>
                  <th style={thStyle}>المغرب</th>
                  <th style={thStyle}>منتصف الليل</th>
                </tr>
              </thead>
              <tbody>
                {monthData.map(row => (
                  <tr
                    key={row.day}
                    style={{
                      backgroundColor: row.day === day ? 'rgba(201, 162, 39, 0.12)' : 'transparent',
                      borderBottom: '1px solid #f0ede5',
                      fontWeight: row.day === day ? '700' : '400',
                    }}
                  >
                    <td style={{
                      ...tdStyle,
                      color: row.day === day ? '#c9a227' : '#4B4640',
                      fontWeight: row.day === day ? '700' : '500',
                    }}>{row.day}</td>
                    <td style={tdStyle}>{row.fajr}</td>
                    <td style={tdStyle}>{row.sunrise}</td>
                    <td style={tdStyle}>{row.dhuhr}</td>
                    <td style={tdStyle}>{row.maghrib}</td>
                    <td style={tdStyle}>{row.midnight}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Note */}
        <div style={{
          marginTop: '32px',
          padding: '16px 20px',
          background: 'rgba(201, 162, 39, 0.08)',
          border: '1px solid rgba(201, 162, 39, 0.25)',
          borderRadius: '12px',
          textAlign: 'center',
        }}>
          <p style={{
            color: '#4B4640',
            fontSize: '14px',
            lineHeight: '1.8',
            margin: 0,
          }}>
            <strong style={{ color: '#c9a227' }}>ملاحظة:</strong>{' '}
            الوقت الحالي مأخوذ فيه الاحتياط ربع ساعة، فمن يريد الصوم فليمسك قبل وقت الفجر المثبت في الجدول بثلث ساعة تقريباً.
          </p>
        </div>
      </section>
    </div>
  );
}

function PrayerCard({ label, time, prayerKey }) {
  const colors = {
    fajr: { bg: '#1a1a2e', text: '#e8d48b', accent: '#c9a227' },
    sunrise: { bg: '#FFF8E1', text: '#F57F17', accent: '#FF8F00' },
    dhuhr: { bg: '#E3F2FD', text: '#1565C0', accent: '#1976D2' },
    maghrib: { bg: '#FBE9E7', text: '#BF360C', accent: '#D84315' },
    midnight: { bg: '#0f0f1a', text: '#d1d5db', accent: '#c9a227' },
  };

  const c = colors[prayerKey] || colors.dhuhr;

  return (
    <div
      className="prayer-card-item"
      style={{
        background: c.bg,
        borderRadius: '16px',
        padding: '20px 16px',
        textAlign: 'center',
      }}
    >
      <p className="prayer-card-label" style={{
        fontSize: '13px',
        fontWeight: '600',
        color: c.accent,
        marginBottom: '8px',
      }}>
        {label}
      </p>
      <p className="prayer-card-time" style={{
        fontSize: '24px',
        fontWeight: '700',
        color: c.text,
        fontFamily: 'Amiri, serif',
        direction: 'ltr',
      }}>
        {time || '--:--'}
      </p>
    </div>
  );
}

const thStyle = {
  padding: '12px 8px',
  color: '#c9a227',
  fontWeight: '600',
  fontSize: '13px',
  whiteSpace: 'nowrap',
};

const tdStyle = {
  padding: '10px 8px',
  color: '#4B4640',
  whiteSpace: 'nowrap',
};
