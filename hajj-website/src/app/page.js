import Link from 'next/link';

export default function Home() {
  return (
    <div>
      {/* Hero Section - Dark */}
      <HeroSection />

      {/* News Ticker */}
      <NewsTicker />

      {/* Services Section - Light */}
      <ServicesSection />

      {/* About Section - Light */}
      <AboutSection />

      {/* Quick Access Section - Light */}
      <QuickAccessSection />

      {/* Important Links Section */}
      <ImportantLinksSection />

      {/* Statistics Section - Dark */}
      <StatisticsSection />

      {/* CTA Section - Light with gradient */}
      <CTASection />
    </div>
  );
}

function HeroSection() {
  return (
    <section style={{
      position: 'relative',
      padding: '80px 16px 100px',
      textAlign: 'center',
      background: 'linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 40%, #16213e 100%)',
      overflow: 'hidden',
    }}>
      {/* Background image overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'url(/assets/kaba_header.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.1,
      }} />

      {/* Gradient overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(180deg, rgba(15,15,26,0.7) 0%, rgba(15,15,26,0.5) 50%, rgba(15,15,26,0.9) 100%)',
      }} />

      {/* Bottom decorative wave */}
      <div style={{
        position: 'absolute',
        bottom: -2,
        left: 0,
        right: 0,
        height: '60px',
        background: '#FAF8F2',
        clipPath: 'ellipse(55% 100% at 50% 100%)',
      }} />

      <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Bismillah */}
        <p style={{
          color: '#e8d48b',
          fontSize: '20px',
          marginBottom: '20px',
          fontFamily: 'Amiri, serif',
          letterSpacing: '2px',
        }}>
          بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
        </p>

        {/* Quranic Verse */}
        <h1 style={{
          fontSize: 'clamp(2.2rem, 5vw, 4rem)',
          fontWeight: '700',
          color: 'white',
          marginBottom: '12px',
          lineHeight: '1.4',
          fontFamily: 'Amiri, serif',
        }}>
          وَلِلَّهِ عَلَى النَّاسِ حِجُّ الْبَيْتِ
        </h1>

        {/* Ornamental line */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '12px',
          marginBottom: '28px',
        }}>
          <span style={{ height: '1px', width: '80px', background: 'linear-gradient(90deg, transparent, #c9a227)' }} />
          <span style={{ width: '8px', height: '8px', background: '#c9a227', transform: 'rotate(45deg)' }} />
          <span style={{ height: '1px', width: '80px', background: 'linear-gradient(90deg, #c9a227, transparent)' }} />
        </div>

        {/* Subtitle */}
        <p style={{ fontSize: '22px', color: '#d1d5db', marginBottom: '8px', fontWeight: '600' }}>
          البوابة الرسمية لمؤسسة الحج والعمرة
        </p>

        <p style={{ color: '#9ca3af', marginBottom: '44px', fontSize: '15px' }}>
          مكتب سماحة المرجع الديني الشيخ محمد اليعقوبي (دام ظله)
        </p>

        {/* CTA Buttons */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px' }}>
          <Link href="/istiftaat" className="btn-primary">
            الاستفتاءات الشرعية
          </Link>
          <Link href="/manasik" className="btn-secondary-light">
            دليل المناسك
          </Link>
        </div>
      </div>
    </section>
  );
}

function NewsTicker() {
  const news = [
    'بدء التسجيل لموسم العمرة الرجبية لعام 1446هـ',
    'كلمة سماحة المرجع اليعقوبي للحجاج والمعتمرين',
    'صدور الطبعة الجديدة من دليل الحاج المصور',
    'فتح باب الاستفتاءات الشرعية على مدار الساعة',
  ];

  return (
    <div style={{
      backgroundColor: 'white',
      borderBottom: '1px solid rgba(201, 162, 39, 0.15)',
      padding: '12px 0',
      overflow: 'hidden',
      boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', maxWidth: '1280px', margin: '0 auto', padding: '0 16px' }}>
        <div style={{
          backgroundColor: '#c9a227',
          color: 'white',
          padding: '5px 18px',
          borderRadius: '8px',
          fontSize: '13px',
          fontWeight: '700',
          flexShrink: 0,
          marginLeft: '16px',
        }}>
          آخر الأخبار
        </div>
        <div style={{ overflow: 'hidden', flex: 1 }}>
          <div className="animate-ticker" style={{ whiteSpace: 'nowrap' }}>
            {news.map((item, index) => (
              <span key={index} style={{ color: '#4B4640', marginLeft: '32px', marginRight: '32px', fontSize: '14px' }}>
                {item}
                <span style={{ margin: '0 16px', color: '#c9a227' }}>&#9670;</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ServicesSection() {
  const services = [
    {
      icon: (
        <svg style={{ width: '28px', height: '28px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'الاستفتاءات الشرعية',
      description: 'أرسل سؤالك الشرعي مباشرة عبر الواتساب واحصل على الإجابة من اللجنة العلمية',
      href: '/istiftaat',
      color: '#0a8754',
    },
    {
      icon: (
        <svg style={{ width: '28px', height: '28px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: 'دليل المناسك',
      description: 'أحكام الحج والعمرة التفصيلية وفق فتاوى سماحة المرجع اليعقوبي (دام ظله)',
      href: '/manasik',
      color: '#c9a227',
    },
    {
      icon: (
        <svg style={{ width: '28px', height: '28px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      title: 'المكتبة المرئية',
      description: 'محاضرات وتوجيهات سماحة المرجع للحجاج والمعتمرين',
      href: '/videos',
      color: '#e94560',
    },
    {
      icon: (
        <svg style={{ width: '28px', height: '28px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: 'المكتبة',
      description: 'الكتب والرسائل العملية وأدعية الحج والعمرة بصيغة PDF',
      href: '/library',
      color: '#1B5E20',
    },
    {
      icon: (
        <svg style={{ width: '28px', height: '28px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
        </svg>
      ),
      title: 'أخبار ونشاطات المؤسسة',
      description: 'آخر الأخبار والنشاطات والفعاليات المتعلقة بالمؤسسة',
      href: '/news',
      color: '#c9a227',
    },
    {
      icon: (
        <svg style={{ width: '28px', height: '28px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: 'المقالات',
      description: 'مقالات وكتابات متنوعة حول مناسك الحج والعمرة وأحكامها الشرعية',
      href: '/articles',
      color: '#5C6BC0',
    },
    {
      icon: (
        <svg style={{ width: '28px', height: '28px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'الكفارات',
      description: 'دليل شامل لأحكام الكفارات في الحج والعمرة وأنواعها ومقاديرها الشرعية',
      href: '/kafarat',
      color: '#8E24AA',
    },
    {
      icon: (
        <svg style={{ width: '28px', height: '28px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'مواقيت الصلاة',
      description: 'أوقات الصلاة اليومية في مكة المكرمة والمدينة المنورة لجميع أيام السنة',
      href: '/prayer-times',
      color: '#1565C0',
    },
  ];

  return (
    <section style={{ padding: '80px 16px', backgroundColor: '#FAF8F2' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <h2 className="section-title">خدماتنا</h2>

        <div className="responsive-grid-280" style={{
          marginTop: '48px',
        }}>
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className="service-card"
              style={{ textDecoration: 'none' }}
            >
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '14px',
                backgroundColor: `${service.color}12`,
                border: `1px solid ${service.color}25`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: service.color,
                marginBottom: '20px',
              }}>
                {service.icon}
              </div>

              <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#2C2A25', marginBottom: '10px' }}>
                {service.title}
              </h3>
              <p style={{ color: '#7A7670', fontSize: '14px', lineHeight: '1.7' }}>
                {service.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section style={{ padding: '80px 16px', backgroundColor: '#F5F0E8' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div className="responsive-grid-300">
          {/* Image Side */}
          <div style={{ textAlign: 'center' }}>
            <div className="about-circle" style={{
              width: '220px',
              height: '220px',
              margin: '0 auto',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, rgba(201, 162, 39, 0.15), rgba(201, 162, 39, 0.05))',
              border: '3px solid rgba(201, 162, 39, 0.25)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 10px 40px rgba(201, 162, 39, 0.1)',
            }}>
              <div style={{ textAlign: 'center' }}>
                <span className="about-circle-text" style={{
                  fontFamily: 'Amiri, serif',
                  fontSize: '48px',
                  color: '#c9a227',
                  fontWeight: '700',
                  lineHeight: 1,
                  display: 'block',
                }}>
                  حج
                </span>
                <span style={{
                  fontSize: '12px',
                  color: '#9a7b1e',
                  letterSpacing: '2px',
                }}>
                  والعمرة
                </span>
              </div>
            </div>
            <h3 style={{ color: '#2C2A25', fontSize: '22px', fontWeight: '700', marginTop: '20px' }}>
              مؤسسة الحج والعمرة
            </h3>
            <p style={{ color: '#c9a227', fontSize: '14px' }}>
              مكتب المرجع الديني الشيخ اليعقوبي
            </p>
          </div>

          {/* Content Side */}
          <div>
            <span style={{ color: '#c9a227', fontSize: '14px', letterSpacing: '2px', fontWeight: '600' }}>
              عن المؤسسة
            </span>
            <h2 style={{ color: '#2C2A25', fontSize: 'clamp(1.5rem, 4vw, 2rem)', fontWeight: '700', margin: '12px 0 24px', lineHeight: '1.3' }}>
              نحو حج مبرور
              <span className="text-gradient-gold"> وعمرة مقبولة</span>
            </h2>

            <p style={{ color: '#4B4640', lineHeight: '1.9', marginBottom: '16px', fontSize: '15px' }}>
              تأسست مؤسسة الحج والعمرة التابعة لمكتب سماحة المرجع الديني الشيخ محمد اليعقوبي (دام ظله)
              لتكون منارة للحجاج والمعتمرين، توفر لهم الإرشاد الفقهي والمعنوي اللازم لأداء مناسكهم
              على أكمل وجه.
            </p>
            <p style={{ color: '#7A7670', lineHeight: '1.9', fontSize: '15px' }}>
              نسعى من خلال هذه البوابة الإلكترونية لتقديم خدمات متكاملة تشمل الاستفتاءات الشرعية،
              والدليل المصور للمناسك، والمحاضرات التوجيهية، إضافة إلى المكتبة الإلكترونية الشاملة.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginTop: '32px' }}>
              <Link href="/manasik" className="btn-primary">تعرف على المناسك</Link>
              <Link href="/contact" className="btn-secondary">تواصل معنا</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function QuickAccessSection() {
  const items = [
    { title: 'الاحرام', icon: '1' },
    { title: 'الطواف', icon: '2' },
    { title: 'السعي', icon: '3' },
    { title: 'الوقوف بعرفة', icon: '4' },
    { title: 'المبيت بمزدلفة', icon: '5' },
    { title: 'رمي الجمرات', icon: '6' },
  ];

  return (
    <section style={{ padding: '80px 16px', backgroundColor: '#FAF8F2' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <h2 className="section-title">أحكام الحج</h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: '16px',
          marginTop: '48px',
        }}>
          {items.map((item, index) => (
            <Link
              key={index}
              href="/manasik"
              className="card"
              style={{
                padding: '28px 16px',
                textAlign: 'center',
                textDecoration: 'none',
              }}
            >
              <div style={{
                width: '50px',
                height: '50px',
                margin: '0 auto 16px',
                borderRadius: '50%',
                backgroundColor: 'rgba(201, 162, 39, 0.1)',
                border: '1px solid rgba(201, 162, 39, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#c9a227',
                fontWeight: '700',
                fontSize: '18px',
                fontFamily: 'Amiri, serif',
              }}>
                {item.icon}
              </div>
              <h3 style={{ color: '#2C2A25', fontSize: '14px', fontWeight: '600' }}>{item.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function ImportantLinksSection() {
  const links = [
    {
      title: 'تطبيق دليل المرشد والحاج',
      description: 'أوسع تطبيق إلكتروني يخص الحج، يعمل على أجهزة الموبايل الذكية، يحتوي على مزايا مفيدة جداً للمرشدين والمتعهدين والحجاج. يتضمن القرآن الكريم، مواقيت الصلاة، جامع فتاوى الحج والعمرة، حدود المشاعر، الزيارات، معالم مكة والمدينة، المكتبة، وأقسام أخرى مفيدة.',
      icon: (
        <svg style={{ width: '28px', height: '28px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      buttons: [
        { label: 'تحميل للأندرويد', href: 'https://play.google.com/store/apps/details?id=com.telco.alhaj' },
        { label: 'تحميل للآيفون', href: 'https://itunes.apple.com/us/app/%D8%AF%D9%84%D9%8A%D9%84-%D8%A7%D9%84%D9%85%D8%B1%D8%B4%D8%AF-%D9%88%D8%A7%D9%84%D8%AD%D8%A7%D8%AC/id1292276289?ls=1&mt=8' },
      ],
      color: '#0a8754',
    },
    {
      title: 'حساب المؤسسة على التيك توك',
      description: 'تابعونا على التيك توك للاطلاع على آخر المقاطع والمحتوى المرئي المتعلق بالحج والعمرة',
      icon: (
        <svg style={{ width: '28px', height: '28px' }} fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.73a8.19 8.19 0 004.76 1.52v-3.4a4.85 4.85 0 01-1-.16z" />
        </svg>
      ),
      buttons: [
        { label: 'زيارة الحساب', href: 'https://www.tiktok.com/@alhajwalumrah?_r=1&_t=ZS-94xoTR5VRYd' },
      ],
      color: '#000000',
    },
    {
      title: 'حساب المؤسسة على الفيسبوك',
      description: 'تابعونا على الفيسبوك للاطلاع على آخر الأخبار والنشاطات والفعاليات',
      icon: (
        <svg style={{ width: '28px', height: '28px' }} fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
      buttons: [
        { label: 'زيارة الصفحة', href: 'https://www.facebook.com/share/1AmFNBb6Xa/' },
      ],
      color: '#1877F2',
    },
  ];

  return (
    <section style={{ padding: '80px 16px', backgroundColor: '#F5F0E8' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <h2 className="section-title">روابط مهمة</h2>

        <div className="responsive-grid-280" style={{
          marginTop: '48px',
        }}>
          {links.map((link, index) => (
            <div
              key={index}
              className="service-card"
              style={{ padding: '28px' }}
            >
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '14px',
                backgroundColor: `${link.color}12`,
                border: `1px solid ${link.color}25`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: link.color,
                marginBottom: '20px',
              }}>
                {link.icon}
              </div>

              <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#2C2A25', marginBottom: '10px' }}>
                {link.title}
              </h3>
              <p style={{ color: '#7A7670', fontSize: '14px', lineHeight: '1.7', marginBottom: '20px' }}>
                {link.description}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {link.buttons.map((btn, btnIndex) => (
                  <a
                    key={btnIndex}
                    href={btn.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-block',
                      padding: '8px 20px',
                      borderRadius: '10px',
                      backgroundColor: link.color,
                      color: 'white',
                      fontSize: '13px',
                      fontWeight: '600',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                      boxShadow: `0 4px 12px ${link.color}30`,
                    }}
                  >
                    {btn.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatisticsSection() {
  const stats = [
    { number: '10,000+', label: 'استفتاء مُجاب' },
    { number: '50+', label: 'محاضرة مرئية' },
    { number: '25+', label: 'كتاب ورسالة' },
    { number: '24/7', label: 'خدمة الاستفتاءات' },
  ];

  return (
    <section style={{
      padding: '72px 16px',
      background: 'linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 50%, #16213e 100%)',
      position: 'relative',
    }}>
      {/* Top curve */}
      <div style={{
        position: 'absolute',
        top: -2,
        left: 0,
        right: 0,
        height: '40px',
        background: '#FAF8F2',
        clipPath: 'ellipse(55% 100% at 50% 0%)',
      }} />
      {/* Bottom curve */}
      <div style={{
        position: 'absolute',
        bottom: -2,
        left: 0,
        right: 0,
        height: '40px',
        background: '#FAF8F2',
        clipPath: 'ellipse(55% 100% at 50% 100%)',
      }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '32px',
          textAlign: 'center',
        }}>
          {stats.map((stat, index) => (
            <div key={index}>
              <div style={{
                fontSize: '40px',
                fontWeight: '700',
                color: '#c9a227',
                marginBottom: '8px',
                fontFamily: 'Amiri, serif',
              }}>
                {stat.number}
              </div>
              <div style={{ color: '#d1d5db', fontSize: '15px' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section style={{ padding: '80px 16px', textAlign: 'center', backgroundColor: '#FAF8F2' }}>
      <div className="cta-box" style={{
        maxWidth: '700px',
        margin: '0 auto',
        borderRadius: '24px',
        background: 'linear-gradient(135deg, rgba(201, 162, 39, 0.06), rgba(201, 162, 39, 0.02))',
        border: '1px solid rgba(201, 162, 39, 0.15)',
      }}>
        <h2 style={{ color: '#2C2A25', fontSize: 'clamp(1.4rem, 4vw, 1.875rem)', fontWeight: '700', marginBottom: '16px' }}>
          لديك سؤال شرعي؟
        </h2>
        <p style={{ color: '#7A7670', fontSize: '16px', marginBottom: '32px', lineHeight: '1.7' }}>
          يمكنك إرسال استفتائك مباشرة عبر الواتساب وسيتم الرد عليك من قبل اللجنة العلمية في المؤسسة
        </p>

        <a
          href="https://wa.me/9647782214488?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%D8%8C%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%AA%D8%A7%D8%A1%20%D8%B9%D9%86..."
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            padding: 'clamp(12px, 3vw, 16px) clamp(24px, 5vw, 36px)',
            backgroundColor: '#0a8754',
            color: 'white',
            fontWeight: '700',
            fontSize: 'clamp(15px, 3vw, 18px)',
            borderRadius: '14px',
            textDecoration: 'none',
            transition: 'all 0.3s ease',
            boxShadow: '0 6px 20px rgba(10, 135, 84, 0.3)',
          }}
        >
          <svg style={{ width: '24px', height: '24px' }} fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          أرسل استفتاءك الآن
        </a>

        <p style={{ color: '#9ca3af', fontSize: '14px', marginTop: '16px' }}>
          رقم الواتساب: <span dir="ltr">07782214488</span>
        </p>
      </div>
    </section>
  );
}
