export default function ContactPage() {
  const contactMethods = [
    {
      icon: (
        <svg style={{ width: '28px', height: '28px' }} fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      ),
      title: 'واتساب',
      subtitle: 'للاستفتاءات والتواصل السريع',
      value: '07782214488',
      link: 'https://wa.me/9647782214488',
      color: '#0a8754',
      primary: true,
    },
    {
      icon: (
        <svg style={{ width: '28px', height: '28px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'الهاتف',
      subtitle: 'للاتصال المباشر',
      value: '07782214488',
      link: 'tel:+9647782214488',
      color: '#c9a227',
    },
    {
      icon: (
        <svg style={{ width: '28px', height: '28px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'العنوان',
      subtitle: 'المقر الرئيسي',
      value: 'العراق - النجف الأشرف',
      link: null,
      color: '#e94560',
    },
  ];

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
          <span style={{ color: '#c9a227', fontWeight: '600', fontSize: '14px', letterSpacing: '2px', display: 'block', marginBottom: '16px' }}>
            تواصل معنا
          </span>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '700', color: 'white', marginBottom: '16px' }}>
            نحن هنا{' '}
            <span className="text-gradient-gold">لخدمتكم</span>
          </h1>
          <p style={{ color: '#d1d5db', fontSize: '16px', lineHeight: '1.7' }}>
            يسعدنا التواصل معكم والإجابة على استفساراتكم حول مناسك الحج والعمرة
          </p>
        </div>
      </section>

      {/* Contact Methods - Light */}
      <section style={{ padding: '64px 16px', backgroundColor: '#FAF8F2' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div className="responsive-grid-250">
            {contactMethods.map((method, index) => (
              <ContactCard key={index} method={method} />
            ))}
          </div>
        </div>
      </section>

      {/* Main WhatsApp CTA */}
      <section style={{ padding: '48px 16px 80px', backgroundColor: '#FAF8F2' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <div className="cta-box" style={{
            position: 'relative',
            borderRadius: '24px',
            background: 'linear-gradient(135deg, rgba(10, 135, 84, 0.06), rgba(10, 135, 84, 0.02))',
            border: '1px solid rgba(10, 135, 84, 0.15)',
            textAlign: 'center',
            overflow: 'hidden',
          }}>
            <div style={{
              width: '72px',
              height: '72px',
              margin: '0 auto 24px',
              borderRadius: '50%',
              backgroundColor: 'rgba(10, 135, 84, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <svg style={{ width: '36px', height: '36px', color: '#0a8754' }} fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </div>

            <h2 style={{ fontSize: 'clamp(1.3rem, 4vw, 1.75rem)', fontWeight: '700', color: '#2C2A25', marginBottom: '12px' }}>
              أرسل استفتاءك عبر واتساب
            </h2>
            <p style={{ color: '#7A7670', marginBottom: '28px', maxWidth: '500px', margin: '0 auto 28px', lineHeight: '1.7' }}>
              الطريقة الأسرع والأسهل للحصول على إجابات لأسئلتك الشرعية المتعلقة بالحج والعمرة
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
                fontSize: '17px',
                borderRadius: '14px',
                textDecoration: 'none',
                boxShadow: '0 6px 20px rgba(10, 135, 84, 0.3)',
              }}
            >
              <svg style={{ width: '22px', height: '22px' }} fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              ابدأ المحادثة الآن
            </a>

            <p style={{ color: '#9ca3af', fontSize: '13px', marginTop: '16px' }} dir="ltr">
              07782214488
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section - Slightly darker */}
      <section style={{ padding: '64px 16px', backgroundColor: '#F5F0E8' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(1.2rem, 4vw, 1.5rem)', fontWeight: '700', color: '#2C2A25', textAlign: 'center', marginBottom: '32px' }}>
            أسئلة شائعة حول التواصل
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              { q: 'ما هي أوقات الرد على الاستفتاءات؟', a: 'نسعى للرد على جميع الاستفتاءات في أسرع وقت ممكن. عادةً ما يتم الرد خلال 24-48 ساعة.' },
              { q: 'هل يمكنني إرسال استفتاء صوتي؟', a: 'نعم، يمكنك إرسال سؤالك كتابياً أو صوتياً عبر الواتساب.' },
              { q: 'هل الاستفتاءات مجانية؟', a: 'نعم، جميع الاستفتاءات الشرعية مجانية تماماً.' },
              { q: 'هل يمكنني الاتصال مباشرة؟', a: 'نعم، يمكنك الاتصال على الرقم المذكور، لكن نفضل الواتساب لتوثيق الأسئلة والإجابات.' },
            ].map((item, index) => (
              <div key={index} style={{
                padding: '20px 24px',
                borderRadius: '14px',
                backgroundColor: 'white',
                border: '1px solid rgba(0,0,0,0.06)',
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
              }}>
                <h3 style={{ color: '#2C2A25', fontWeight: '700', marginBottom: '6px', fontSize: '15px' }}>{item.q}</h3>
                <p style={{ color: '#7A7670', fontSize: '14px', lineHeight: '1.7' }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section style={{ padding: '64px 16px', backgroundColor: '#FAF8F2', textAlign: 'center' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(1.2rem, 4vw, 1.5rem)', fontWeight: '700', color: '#2C2A25', marginBottom: '16px' }}>
            عن مؤسسة الحج والعمرة
          </h2>
          <p style={{ color: '#7A7670', lineHeight: '1.9', fontSize: '15px' }}>
            مؤسسة الحج والعمرة هي إحدى المؤسسات التابعة لمكتب سماحة المرجع الديني
            الشيخ محمد اليعقوبي (دام ظله الوارف). تهدف المؤسسة إلى خدمة الحجاج والمعتمرين
            من خلال توفير الإرشاد الفقهي والمعنوي، والإجابة على الاستفتاءات الشرعية،
            وتقديم المحتوى التعليمي والتوجيهي الذي يساعدهم على أداء مناسكهم بأفضل صورة.
          </p>
        </div>
      </section>
    </div>
  );
}

function ContactCard({ method }) {
  const content = (
    <div style={{
      position: 'relative',
      padding: '28px 24px',
      borderRadius: '16px',
      backgroundColor: 'white',
      border: method.primary ? `2px solid ${method.color}30` : '1px solid rgba(0,0,0,0.06)',
      boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
      transition: 'all 0.3s ease',
      height: '100%',
    }}>
      {method.primary && (
        <div style={{
          position: 'absolute',
          top: '-10px',
          right: '16px',
          padding: '3px 12px',
          backgroundColor: method.color,
          color: 'white',
          fontSize: '11px',
          fontWeight: '700',
          borderRadius: '6px',
        }}>
          الأسرع
        </div>
      )}

      <div style={{
        width: '52px',
        height: '52px',
        borderRadius: '14px',
        backgroundColor: `${method.color}10`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: method.color,
        marginBottom: '16px',
      }}>
        {method.icon}
      </div>

      <h3 style={{ color: '#2C2A25', fontWeight: '700', fontSize: '17px', marginBottom: '4px' }}>{method.title}</h3>
      <p style={{ color: '#9ca3af', fontSize: '13px', marginBottom: '12px' }}>{method.subtitle}</p>
      <p style={{ color: method.color, fontWeight: '600', fontSize: '15px' }} dir={method.title === 'العنوان' ? 'rtl' : 'ltr'}>
        {method.value}
      </p>
    </div>
  );

  if (method.link) {
    return (
      <a href={method.link} target="_blank" rel="noopener noreferrer" style={{ display: 'block', textDecoration: 'none' }}>
        {content}
      </a>
    );
  }

  return content;
}
