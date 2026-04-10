'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function KafaratPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const kafaratTypes = [
    {
      title: 'كفارة التظليل',
      icon: (
        <svg style={{ width: '32px', height: '32px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      description: 'تجب على الرجل المحرم إذا استظل بمظلة أو سقف سيارة أثناء قطع المسافة، سواء كان مختاراً أو مضطراً أو مُجبراً من قبل السلطات.',
      ruling: 'الاضطرار يرفع الإثم فقط لا الكفّارة',
      amount: 'ذبح شاة',
      color: '#1565C0',
    },
    {
      title: 'كفارة ترك المبيت بمنى',
      icon: (
        <svg style={{ width: '32px', height: '32px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      ),
      description: 'من ترك المبيت بمنى عامداً وعالماً بالحكم وبدون عذر فحجه لم يبطل ولكن عليه إثم وكفارة دم شاة عن ترك المبيت في كل ليلة.',
      ruling: 'تجب عن كل ليلة يتركها',
      amount: 'شاة عن كل ليلة',
      color: '#5C6BC0',
    },
    {
      title: 'كفارات محرمات الإحرام',
      icon: (
        <svg style={{ width: '32px', height: '32px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
        </svg>
      ),
      description: 'تترتب كفارات على ارتكاب بعض المحظورات أثناء الإحرام، وتختلف الكفارة باختلاف نوع المخالفة وحالة المكلف.',
      ruling: 'لا تتعدد الكفارة ما دام في نفس الإحرام',
      amount: 'تختلف حسب المحظور',
      color: '#e94560',
    },
    {
      title: 'الهدي والذبح',
      icon: (
        <svg style={{ width: '32px', height: '32px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      description: 'الهدي واجب في حج التمتع، ومن لم يجد الهدي فعليه صيام عشرة أيام. ولا يُشترط في شاة الكفارة شروط الهدي.',
      ruling: 'الأحوط التصدق بالكفارة',
      amount: 'شاة أو صيام',
      color: '#0a8754',
    },
  ];

  const kafaratFaqs = [
    {
      id: 1,
      question: 'هل فقد ثمن الكفارة مع العلم بحصول موجبها يمنع من حصول الاستطاعة؟',
      answer: 'بسمه تعالى: لا يمنع، لجواز تأخيرها.',
    },
    {
      id: 2,
      question: 'هل تتعدد الكفارة بحصول الاستظلال مرات عديدة؟',
      answer: 'بسمه تعالى: لا تتعدد الكفارة ما دام في نفس الإحرام.',
    },
    {
      id: 3,
      question: 'هل تجب الكفارة على الرجال المحرمين المرافقين للنساء إذا ركبوا السيارة المسقفة؟',
      answer: 'بسمه تعالى: نعم تجب عليهم، والاضطرار يرفع الإثم فقط لا الكفّارة.',
    },
    {
      id: 4,
      question: 'إذا أُجبر المحرم من قبل السلطات على التظليل المحرم فهل عليه كفارة؟',
      answer: 'بسمه تعالى: نعم تجب عليه الكفارة، والاضطرار يرفع الإثم فقط لا الكفّارة.',
    },
    {
      id: 5,
      question: 'هل يعتبر في شاة الكفارة لإحرام الحج أو العمرة شروط الهدي؟',
      answer: 'بسمه تعالى: لا تعتبر شرائط الهدي في الكفارة.',
    },
    {
      id: 6,
      question: 'هل يجوز لمن وجب عليه شيء من كفارات الإحرام أن يأكل منها؟',
      answer: 'بسمه تعالى: الأحوط التصدق به مهما كان سبب الكفارة.',
    },
    {
      id: 7,
      question: 'المريض بداء السكر الذي يستعمل الأنسولين بزرقه تحت الجلد، كثيراً ما يخرج منه الدم، فإن كان محرماً فهل تجب عليه الكفارة؟',
      answer: 'بسمه تعالى: يجوز له ذلك لضرورة العلاج ولا كفارة عليه.',
    },
    {
      id: 8,
      question: 'العمارات التي ينزل بها الحجاج تحتوي على مرايا في المغاسل والحمامات والمصاعد، فكثيراً ما يتعرض المحرم للنظر إليها غفلة أو سهواً، فهل في ذلك كفارة؟',
      answer: 'بسمه تعالى: ليتجنب النظر في تلك المرايا ما أمكنه ذلك، ولا شيء عليه لو حصل ذلك النظر.',
    },
    {
      id: 9,
      question: 'لو خرج من مكة متوجهاً إلى منى فمنعه الزحام من الوصول مع عدم تقصيره فهل تجب عليه الكفارة؟',
      answer: 'بسمه تعالى: إذا كان ذلك في النصف الأول فليمكث النصف الثاني وإلا فالأحوط أن عليه الكفارة خصوصاً مع التقصير في حساب الأمور.',
    },
    {
      id: 10,
      question: 'إذا قصد الحاج المبيت في منى ثم دعت الضرورة إلى خروجه منها وترك المبيت فهل يلزمه شيء؟',
      answer: 'بسمه تعالى: عليه الكفارة.',
    },
    {
      id: 11,
      question: 'المتمتع إذا لم يملك ثمن الهدي ولا يستطيع الصوم فما هو حكمه؟',
      answer: 'بسمه تعالى: يُعلم الحاكم الشرعي بذلك.',
    },
    {
      id: 12,
      question: 'هل يجوز الاشتراك في هدي واحد إذا كان الحج مستحباً؟',
      answer: 'بسمه تعالى: إذا لم يتمكن من الهدي مستقلاً، انتقلت وظيفته إلى الصيام.',
    },
  ];

  const importantNotes = [
    'لا تعتبر شرائط الهدي في شاة الكفارة.',
    'الأحوط التصدق بلحم الكفارة وعدم الأكل منها.',
    'الاضطرار يرفع الإثم فقط ولا يرفع الكفارة.',
    'لا تتعدد كفارة التظليل ما دام المكلف في نفس الإحرام.',
    'كفارة ترك المبيت بمنى تتعدد بتعدد الليالي.',
    'يجوز تأخير أداء الكفارة ولا يمنع تأخيرها من الاستطاعة.',
    'فقد ثمن الهدي لا يمنع الاستطاعة لوجود البدل وهو الصوم.',
  ];

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
          bottom: -2,
          left: 0,
          right: 0,
          height: '50px',
          background: '#FAF8F2',
          clipPath: 'ellipse(55% 100% at 50% 100%)',
        }} />

        <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{
            width: '72px',
            height: '72px',
            margin: '0 auto 24px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, rgba(201, 162, 39, 0.2), rgba(201, 162, 39, 0.05))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <svg style={{ width: '36px', height: '36px', color: '#c9a227' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>

          <span style={{ color: '#c9a227', fontWeight: '600', fontSize: '14px', letterSpacing: '2px', display: 'block', marginBottom: '16px' }}>
            خدمات المؤسسة
          </span>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '700', color: 'white', marginBottom: '16px' }}>
            خدمة{' '}
            <span className="text-gradient-gold">الكفارات</span>
          </h1>
          <p style={{ color: '#d1d5db', fontSize: '16px', lineHeight: '1.7', maxWidth: '600px', margin: '0 auto' }}>
            خدمة ذبح الكفارات وأحكامها الشرعية في الحج والعمرة - مؤسسة الحج والعمرة في مكتب سماحة الشيخ اليعقوبي (دام ظله)
          </p>
        </div>
      </section>

      {/* Kafarat Service - Main CTA */}
      <section style={{ padding: '64px 16px', backgroundColor: '#FAF8F2' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{
            borderRadius: '24px',
            overflow: 'hidden',
            backgroundColor: 'white',
            border: '2px solid rgba(10, 135, 84, 0.15)',
            boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
          }}>
            {/* Video */}
            <div style={{ position: 'relative', backgroundColor: '#000' }}>
              <video
                src="https://firebasestorage.googleapis.com/v0/b/hajandomra-23c77.firebasestorage.app/o/news_videos%2Fo2HHon4QIL5PA7syyVIp%2F1772462199209_Facebook%20122115762663157025(720P_HD).mp4?alt=media&token=9eb24c43-dcc2-4a61-bb8a-4e40e61eab68"
                controls
                playsInline
                preload="metadata"
                style={{
                  width: '100%',
                  display: 'block',
                  maxHeight: '450px',
                  objectFit: 'contain',
                }}
              />
            </div>

            {/* Service Details */}
            <div style={{ padding: 'clamp(24px, 5vw, 40px)' }}>
              <div style={{
                display: 'inline-block',
                padding: '6px 16px',
                backgroundColor: 'rgba(10, 135, 84, 0.1)',
                color: '#0a8754',
                borderRadius: '20px',
                fontSize: '13px',
                fontWeight: '700',
                marginBottom: '16px',
              }}>
                خدمة ذبح الكفارات
              </div>

              <h2 style={{ fontSize: 'clamp(1.3rem, 4vw, 1.75rem)', fontWeight: '700', color: '#2C2A25', marginBottom: '16px', lineHeight: '1.6' }}>
                خدمة الكفارات في مؤسسة الحج والعمرة
              </h2>

              <p style={{ color: '#5A5650', fontSize: '16px', lineHeight: '2', marginBottom: '24px' }}>
                توفر مؤسسة الحج والعمرة في مكتب سماحة الشيخ اليعقوبي (دام ظله) خدمة ذبح الكفارات نيابة عن الحجاج والمعتمرين،
                بإشراف شرعي كامل وبأسعار مناسبة.
              </p>

              {/* Price Card */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '16px',
                marginBottom: '28px',
              }}>
                <div style={{
                  flex: '1 1 200px',
                  padding: '20px 24px',
                  borderRadius: '16px',
                  background: 'linear-gradient(135deg, rgba(201, 162, 39, 0.08), rgba(201, 162, 39, 0.03))',
                  border: '1px solid rgba(201, 162, 39, 0.2)',
                  textAlign: 'center',
                }}>
                  <p style={{ color: '#7A7670', fontSize: '13px', fontWeight: '600', marginBottom: '8px' }}>سعر كفارة الشاة حالياً</p>
                  <p style={{ color: '#c9a227', fontSize: '32px', fontWeight: '700', fontFamily: 'Amiri, serif' }}>70 <span style={{ fontSize: '18px' }}>دولار</span></p>
                </div>

                <div style={{
                  flex: '1 1 200px',
                  padding: '20px 24px',
                  borderRadius: '16px',
                  background: 'linear-gradient(135deg, rgba(10, 135, 84, 0.08), rgba(10, 135, 84, 0.03))',
                  border: '1px solid rgba(10, 135, 84, 0.2)',
                  textAlign: 'center',
                }}>
                  <p style={{ color: '#7A7670', fontSize: '13px', fontWeight: '600', marginBottom: '8px' }}>طريقة التواصل</p>
                  <p style={{ color: '#0a8754', fontSize: '18px', fontWeight: '700' }}>واتساب فقط</p>
                  <p style={{ color: '#5A5650', fontSize: '15px', fontWeight: '600', marginTop: '4px' }} dir="ltr">07882214488</p>
                </div>
              </div>

              {/* WhatsApp Button */}
              <a
                href="https://wa.me/9647882214488?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%D8%8C%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%AE%D8%AF%D9%85%D8%A9%20%D8%B0%D8%A8%D8%AD%20%D8%A7%D9%84%D9%83%D9%81%D8%A7%D8%B1%D8%A7%D8%AA"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '16px 36px',
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
                اطلب خدمة ذبح الكفارات
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section style={{ padding: '64px 16px', backgroundColor: '#F5F0E8' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{
            padding: '32px',
            borderRadius: '20px',
            background: 'linear-gradient(135deg, rgba(201, 162, 39, 0.08), rgba(201, 162, 39, 0.02))',
            border: '1px solid rgba(201, 162, 39, 0.15)',
            backgroundColor: 'white',
          }}>
            <h2 style={{ fontSize: 'clamp(1.2rem, 3vw, 1.5rem)', fontWeight: '700', color: '#2C2A25', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ color: '#c9a227' }}>
                <svg style={{ width: '24px', height: '24px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              ما هي الكفارات؟
            </h2>
            <p style={{ color: '#5A5650', lineHeight: '2', fontSize: '15px' }}>
              الكفارات في الحج والعمرة هي ما يجب على المكلف أداؤه تعويضاً عن ارتكاب بعض المحظورات أو ترك بعض الواجبات أثناء أداء المناسك.
              وتشمل الكفارات ذبح شاة أو صيام أيام بحسب نوع المخالفة.
            </p>
          </div>
        </div>
      </section>

      {/* Types of Kafarat */}
      <section style={{ padding: '0 16px 64px', backgroundColor: '#FAF8F2' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 className="section-title" style={{ marginBottom: '48px' }}>أنواع الكفارات</h2>

          <div className="responsive-grid-280">
            {kafaratTypes.map((type, index) => (
              <div key={index} style={{
                padding: '28px 24px',
                borderRadius: '20px',
                backgroundColor: 'white',
                border: '1px solid rgba(0,0,0,0.06)',
                boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
                transition: 'all 0.3s ease',
              }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '16px',
                  backgroundColor: `${type.color}10`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: type.color,
                  marginBottom: '20px',
                }}>
                  {type.icon}
                </div>

                <h3 style={{ color: '#2C2A25', fontWeight: '700', fontSize: '18px', marginBottom: '12px' }}>
                  {type.title}
                </h3>
                <p style={{ color: '#7A7670', fontSize: '14px', lineHeight: '1.8', marginBottom: '16px' }}>
                  {type.description}
                </p>

                <div style={{
                  padding: '12px 16px',
                  borderRadius: '12px',
                  backgroundColor: `${type.color}08`,
                  border: `1px solid ${type.color}20`,
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <span style={{ color: '#7A7670', fontSize: '12px', fontWeight: '600' }}>الحكم:</span>
                    <span style={{ color: type.color, fontSize: '13px', fontWeight: '700' }}>{type.ruling}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ color: '#7A7670', fontSize: '12px', fontWeight: '600' }}>المقدار:</span>
                    <span style={{ color: '#2C2A25', fontSize: '13px', fontWeight: '700' }}>{type.amount}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section style={{ padding: '64px 16px', backgroundColor: '#F5F0E8' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 className="section-title" style={{ marginBottom: '36px' }}>ملاحظات مهمة</h2>

          <div style={{
            padding: '28px',
            borderRadius: '20px',
            backgroundColor: 'white',
            border: '1px solid rgba(0,0,0,0.06)',
            boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
          }}>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {importantNotes.map((note, index) => (
                <li key={index} style={{ display: 'flex', alignItems: 'start', gap: '14px' }}>
                  <div style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(201, 162, 39, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '2px',
                  }}>
                    <span style={{ color: '#c9a227', fontSize: '14px', fontWeight: '700' }}>{index + 1}</span>
                  </div>
                  <p style={{ color: '#2C2A25', fontSize: '15px', lineHeight: '1.7', fontWeight: '500' }}>
                    {note}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: '64px 16px', backgroundColor: '#FAF8F2' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 className="section-title" style={{ marginBottom: '12px' }}>استفتاءات شرعية حول الكفارات</h2>
          <p style={{ textAlign: 'center', color: '#7A7670', marginBottom: '36px', fontSize: '15px' }}>
            أجوبة سماحة المرجع الديني الشيخ محمد اليعقوبي (دام ظله) على أسئلة الحجاج والمعتمرين
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {kafaratFaqs.map((faq) => (
              <div key={faq.id} style={{
                borderRadius: '14px',
                backgroundColor: 'white',
                border: openFaq === faq.id ? '1px solid rgba(201, 162, 39, 0.3)' : '1px solid rgba(0,0,0,0.06)',
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
              }}>
                <button
                  onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                  style={{
                    width: '100%',
                    padding: '18px 24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '16px',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'right',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1 }}>
                    <span style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      backgroundColor: openFaq === faq.id ? '#c9a227' : 'rgba(201, 162, 39, 0.1)',
                      color: openFaq === faq.id ? 'white' : '#c9a227',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '13px',
                      fontWeight: '700',
                      flexShrink: 0,
                      transition: 'all 0.3s ease',
                    }}>
                      س
                    </span>
                    <span style={{ color: '#2C2A25', fontWeight: '600', fontSize: '15px', lineHeight: '1.6' }}>
                      {faq.question}
                    </span>
                  </div>
                  <svg
                    style={{
                      width: '20px',
                      height: '20px',
                      color: '#c9a227',
                      flexShrink: 0,
                      transition: 'transform 0.3s ease',
                      transform: openFaq === faq.id ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {openFaq === faq.id && (
                  <div style={{
                    padding: '0 24px 20px',
                    borderTop: '1px solid rgba(0,0,0,0.04)',
                  }}>
                    <div style={{
                      marginTop: '16px',
                      padding: '16px 20px',
                      borderRadius: '12px',
                      backgroundColor: 'rgba(201, 162, 39, 0.04)',
                      borderRight: '3px solid #c9a227',
                    }}>
                      <p style={{ color: '#2C2A25', fontSize: '15px', lineHeight: '1.8', fontWeight: '500' }}>
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <section style={{ padding: '64px 16px', backgroundColor: '#F5F0E8' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 className="section-title" style={{ marginBottom: '36px' }}>أقسام ذات صلة</h2>

          <div className="responsive-grid-250">
            <Link href="/istiftaat" style={{ textDecoration: 'none' }}>
              <div style={{
                padding: '24px',
                borderRadius: '16px',
                backgroundColor: 'white',
                border: '1px solid rgba(0,0,0,0.06)',
                boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
                transition: 'all 0.3s ease',
                textAlign: 'center',
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  margin: '0 auto 14px',
                  borderRadius: '14px',
                  backgroundColor: 'rgba(10, 135, 84, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <svg style={{ width: '24px', height: '24px', color: '#0a8754' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 style={{ color: '#2C2A25', fontWeight: '700', fontSize: '16px', marginBottom: '6px' }}>الاستفتاءات الشرعية</h3>
                <p style={{ color: '#7A7670', fontSize: '13px' }}>جميع الاستفتاءات المتعلقة بالحج والعمرة</p>
              </div>
            </Link>

            <Link href="/manasik" style={{ textDecoration: 'none' }}>
              <div style={{
                padding: '24px',
                borderRadius: '16px',
                backgroundColor: 'white',
                border: '1px solid rgba(0,0,0,0.06)',
                boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
                transition: 'all 0.3s ease',
                textAlign: 'center',
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  margin: '0 auto 14px',
                  borderRadius: '14px',
                  backgroundColor: 'rgba(201, 162, 39, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <svg style={{ width: '24px', height: '24px', color: '#c9a227' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 style={{ color: '#2C2A25', fontWeight: '700', fontSize: '16px', marginBottom: '6px' }}>دليل المناسك</h3>
                <p style={{ color: '#7A7670', fontSize: '13px' }}>أحكام الحج والعمرة التفصيلية</p>
              </div>
            </Link>

            <Link href="/videos" style={{ textDecoration: 'none' }}>
              <div style={{
                padding: '24px',
                borderRadius: '16px',
                backgroundColor: 'white',
                border: '1px solid rgba(0,0,0,0.06)',
                boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
                transition: 'all 0.3s ease',
                textAlign: 'center',
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  margin: '0 auto 14px',
                  borderRadius: '14px',
                  backgroundColor: 'rgba(233, 69, 96, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <svg style={{ width: '24px', height: '24px', color: '#e94560' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 style={{ color: '#2C2A25', fontWeight: '700', fontSize: '16px', marginBottom: '6px' }}>المكتبة المرئية</h3>
                <p style={{ color: '#7A7670', fontSize: '13px' }}>محاضرات وتوجيهات سماحة المرجع</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section style={{ padding: '64px 16px', backgroundColor: '#FAF8F2' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <div style={{
            padding: 'clamp(28px, 5vw, 48px)',
            borderRadius: '24px',
            background: 'linear-gradient(135deg, rgba(10, 135, 84, 0.06), rgba(10, 135, 84, 0.02))',
            border: '1px solid rgba(10, 135, 84, 0.15)',
            textAlign: 'center',
          }}>
            <div style={{
              width: '64px',
              height: '64px',
              margin: '0 auto 20px',
              borderRadius: '50%',
              backgroundColor: 'rgba(10, 135, 84, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <svg style={{ width: '32px', height: '32px', color: '#0a8754' }} fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </div>

            <h2 style={{ fontSize: 'clamp(1.3rem, 4vw, 1.75rem)', fontWeight: '700', color: '#2C2A25', marginBottom: '12px' }}>
              لديك استفسار عن الكفارات؟
            </h2>
            <p style={{ color: '#7A7670', marginBottom: '28px', maxWidth: '500px', margin: '0 auto 28px', lineHeight: '1.7' }}>
              تواصل معنا مباشرة عبر الواتساب للاستفسار عن أحكام الكفارات وكيفية أدائها
            </p>

            <a
              href="https://wa.me/9647882214488?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%D8%8C%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%A7%D9%84%D9%83%D9%81%D8%A7%D8%B1%D8%A7%D8%AA..."
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
              تواصل معنا عبر واتساب
            </a>

            <p style={{ color: '#9ca3af', fontSize: '13px', marginTop: '16px' }} dir="ltr">
              07882214488
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
