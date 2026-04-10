import Link from 'next/link';

export default function Footer() {
  const quickLinks = [
    { href: '/', label: 'الرئيسية' },
    { href: '/istiftaat', label: 'الاستفتاءات' },
    { href: '/manasik', label: 'المناسك' },
    { href: '/videos', label: 'الفيديوهات' },
    { href: '/library', label: 'المكتبة' },
    { href: '/kafarat', label: 'الكفارات' },
  ];

  const resources = [
    { href: '/manasik', label: 'أحكام الحج' },
    { href: '/manasik', label: 'أحكام العمرة' },
    { href: '/library', label: 'الكتب والرسائل' },
    { href: '/istiftaat', label: 'الأسئلة الشائعة' },
  ];

  return (
    <footer style={{
      position: 'relative',
      background: 'linear-gradient(180deg, #0f0f1a 0%, #1a1a2e 100%)',
      borderTop: '1px solid rgba(201, 162, 39, 0.15)',
    }}>
      {/* Decorative Top Border */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '3px',
        background: 'linear-gradient(90deg, transparent 0%, #c9a227 50%, transparent 100%)',
      }} />

      {/* Main Footer Content */}
      <div className="footer-main" style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div className="footer-grid">
          {/* About Section */}
          <div>
            {/* Text Logo */}
            <div style={{ marginBottom: '24px' }}>
              <h3 style={{
                fontFamily: 'Amiri, serif',
                color: 'white',
                fontWeight: '700',
                fontSize: '24px',
                marginBottom: '4px',
              }}>
                مؤسسة الحج والعمرة
              </h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <span style={{ height: '1px', width: '30px', background: 'linear-gradient(90deg, #c9a227, transparent)' }} />
                <span style={{ width: '5px', height: '5px', background: '#c9a227', transform: 'rotate(45deg)' }} />
                <span style={{ height: '1px', width: '30px', background: 'linear-gradient(90deg, transparent, #c9a227)' }} />
              </div>
              <span style={{ color: '#c9a227', fontSize: '12px' }}>
                مكتب المرجع الديني الشيخ محمد اليعقوبي
              </span>
            </div>
            <p style={{ color: '#9ca3af', fontSize: '14px', lineHeight: '1.8', marginBottom: '24px' }}>
              مؤسسة تعنى بخدمة حجاج بيت الله الحرام والمعتمرين، وتوفير الزاد الفقهي والمعنوي
              وفق توجيهات سماحة المرجع الديني الشيخ محمد اليعقوبي (دام ظله الوارف).
            </p>

            {/* Social Links */}
            <div style={{ display: 'flex', gap: '10px' }}>
              <SocialLink href="#" icon="facebook" />
              <SocialLink href="#" icon="youtube" />
              <SocialLink href="#" icon="telegram" />
              <SocialLink href="https://wa.me/9647882214488" icon="whatsapp" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{
              color: 'white',
              fontWeight: '700',
              fontSize: '18px',
              marginBottom: '24px',
              position: 'relative',
              paddingBottom: '12px',
            }}>
              روابط سريعة
              <span style={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                width: '40px',
                height: '2px',
                background: '#c9a227',
                borderRadius: '2px',
              }} />
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {quickLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    style={{
                      color: '#9ca3af',
                      fontSize: '14px',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      transition: 'color 0.3s ease',
                    }}
                    className="hover:text-gold"
                  >
                    <span style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(201, 162, 39, 0.4)',
                      flexShrink: 0,
                    }} />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 style={{
              color: 'white',
              fontWeight: '700',
              fontSize: '18px',
              marginBottom: '24px',
              position: 'relative',
              paddingBottom: '12px',
            }}>
              المصادر
              <span style={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                width: '40px',
                height: '2px',
                background: '#c9a227',
                borderRadius: '2px',
              }} />
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {resources.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    style={{
                      color: '#9ca3af',
                      fontSize: '14px',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      transition: 'color 0.3s ease',
                    }}
                    className="hover:text-gold"
                  >
                    <span style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(201, 162, 39, 0.4)',
                      flexShrink: 0,
                    }} />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 style={{
              color: 'white',
              fontWeight: '700',
              fontSize: '18px',
              marginBottom: '24px',
              position: 'relative',
              paddingBottom: '12px',
            }}>
              تواصل معنا
              <span style={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                width: '40px',
                height: '2px',
                background: '#c9a227',
                borderRadius: '2px',
              }} />
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <li style={{ display: 'flex', alignItems: 'start', gap: '12px' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <svg style={{ width: '18px', height: '18px', color: '#c9a227' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <span style={{ color: '#d1d5db', fontSize: '14px' }}>العراق - النجف الأشرف</span>
                  <p style={{ color: '#6b7280', fontSize: '12px', marginTop: '2px' }}>المقر العام للمؤسسة</p>
                </div>
              </li>
              <li style={{ display: 'flex', alignItems: 'start', gap: '12px' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <svg style={{ width: '18px', height: '18px', color: '#c9a227' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <span style={{ color: '#d1d5db', fontSize: '14px' }} dir="ltr">07882214488</span>
                  <p style={{ color: '#6b7280', fontSize: '12px', marginTop: '2px' }}>واتساب - للاستفتاءات والتواصل</p>
                </div>
              </li>
            </ul>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/9647882214488"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                marginTop: '20px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 20px',
                backgroundColor: 'rgba(10, 135, 84, 0.15)',
                border: '1px solid rgba(10, 135, 84, 0.3)',
                color: '#10b76e',
                borderRadius: '10px',
                fontSize: '14px',
                fontWeight: '600',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
              }}
            >
              <svg style={{ width: '16px', height: '16px' }} fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              أرسل استفتاءك
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
        <div className="footer-bottom" style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
        }}>
          <p style={{ color: '#6b7280', fontSize: '13px' }}>
            جميع الحقوق محفوظة &copy; {new Date().getFullYear()} مؤسسة الحج والعمرة
          </p>
          <p style={{ color: '#4b5563', fontSize: '12px' }}>
            مكتب سماحة المرجع الديني الشيخ محمد اليعقوبي (دام ظله)
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon }) {
  const icons = {
    facebook: (
      <svg style={{ width: '18px', height: '18px' }} fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    youtube: (
      <svg style={{ width: '18px', height: '18px' }} fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
    telegram: (
      <svg style={{ width: '18px', height: '18px' }} fill="currentColor" viewBox="0 0 24 24">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
      </svg>
    ),
    whatsapp: (
      <svg style={{ width: '18px', height: '18px' }} fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        width: '40px',
        height: '40px',
        borderRadius: '10px',
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#9ca3af',
        textDecoration: 'none',
        transition: 'all 0.3s ease',
      }}
      className="hover:text-gold hover:bg-white/10"
    >
      {icons[icon]}
    </a>
  );
}
