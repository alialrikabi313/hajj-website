'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: '/', label: 'الرئيسية' },
    { href: '/istiftaat', label: 'الاستفتاءات' },
    { href: '/manasik', label: 'المناسك' },
    { href: '/articles', label: 'المقالات' },
    { href: '/news', label: 'الأخبار' },
    { href: '/videos', label: 'المرئيات' },
    { href: '/library', label: 'المكتبة' },
    { href: '/prayer-times', label: 'مواقيت الصلاة' },
    { href: '/kafarat', label: 'الكفارات' },
    { href: '/contact', label: 'تواصل معنا' },
  ];

  const isActive = (href) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 9999,
          backgroundColor: isScrolled ? 'rgba(15, 15, 26, 0.98)' : 'rgba(15, 15, 26, 0.92)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(201, 162, 39, 0.15)',
          transition: 'all 0.3s ease',
          padding: isScrolled ? '6px 0' : '12px 0',
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            {/* Logo - Text Based */}
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '14px', textDecoration: 'none' }}>
              {/* Decorative icon */}
              <div
                style={{
                  width: isScrolled ? '42px' : '50px',
                  height: isScrolled ? '42px' : '50px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #9a7b1e 0%, #c9a227 50%, #e8d48b 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                  flexShrink: 0,
                }}
              >
                <span style={{
                  fontFamily: 'Amiri, serif',
                  fontSize: isScrolled ? '20px' : '24px',
                  fontWeight: '700',
                  color: '#0f0f1a',
                  lineHeight: 1,
                  transition: 'all 0.3s ease',
                }}>
                  حج
                </span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0px' }}>
                <span style={{
                  fontFamily: 'Amiri, serif',
                  color: 'white',
                  fontWeight: '700',
                  fontSize: isScrolled ? '17px' : '20px',
                  lineHeight: '1.2',
                  transition: 'all 0.3s ease',
                }}>
                  مؤسسة الحج والعمرة
                </span>
                <span style={{
                  color: '#c9a227',
                  fontSize: '11px',
                  letterSpacing: '0.5px',
                  lineHeight: '1.3',
                }}>
                  مكتب المرجع الديني الشيخ محمد اليعقوبي
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div style={{ display: 'none' }} className="lg:flex lg:items-center lg:gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    padding: '8px 16px',
                    color: isActive(link.href) ? '#c9a227' : '#d1d5db',
                    fontWeight: isActive(link.href) ? '700' : '500',
                    fontSize: '14px',
                    textDecoration: 'none',
                    borderRadius: '8px',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    borderBottom: isActive(link.href) ? '2px solid #c9a227' : '2px solid transparent',
                  }}
                  className="hover:text-white hover:bg-white/10"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '5px',
                width: '40px',
                height: '40px',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
              }}
              className="lg:hidden"
              aria-label="القائمة"
            >
              <span
                style={{
                  display: 'block',
                  width: '24px',
                  height: '2px',
                  backgroundColor: '#c9a227',
                  transition: 'all 0.3s ease',
                  transform: isMobileMenuOpen ? 'rotate(45deg) translateY(7px)' : 'none',
                }}
              />
              <span
                style={{
                  display: 'block',
                  width: '24px',
                  height: '2px',
                  backgroundColor: '#c9a227',
                  transition: 'all 0.3s ease',
                  opacity: isMobileMenuOpen ? 0 : 1,
                }}
              />
              <span
                style={{
                  display: 'block',
                  width: '24px',
                  height: '2px',
                  backgroundColor: '#c9a227',
                  transition: 'all 0.3s ease',
                  transform: isMobileMenuOpen ? 'rotate(-45deg) translateY(-7px)' : 'none',
                }}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 9998,
            backgroundColor: 'rgba(15, 15, 26, 0.98)',
            backdropFilter: 'blur(20px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '20px',
          }}
        >
          {/* Mobile Logo */}
          <div style={{ marginBottom: '24px', textAlign: 'center' }}>
            <p style={{
              fontFamily: 'Amiri, serif',
              fontSize: '28px',
              fontWeight: '700',
              color: '#c9a227',
              marginBottom: '4px',
            }}>
              مؤسسة الحج والعمرة
            </p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
              <span style={{ height: '1px', width: '40px', background: 'linear-gradient(90deg, transparent, #c9a227)' }} />
              <span style={{ width: '6px', height: '6px', background: '#c9a227', transform: 'rotate(45deg)' }} />
              <span style={{ height: '1px', width: '40px', background: 'linear-gradient(90deg, #c9a227, transparent)' }} />
            </div>
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                fontSize: 'clamp(16px, 3.5vw, 22px)',
                fontWeight: isActive(link.href) ? '700' : '500',
                color: isActive(link.href) ? '#c9a227' : 'white',
                textDecoration: 'none',
                padding: '6px 20px',
                borderRadius: '8px',
                transition: 'all 0.3s ease',
              }}
            >
              {link.label}
            </Link>
          ))}

          <a
            href="https://wa.me/9647782214488"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              marginTop: '24px',
              padding: '12px 32px',
              backgroundColor: '#0a8754',
              color: 'white',
              fontWeight: '700',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              textDecoration: 'none',
            }}
          >
            <svg style={{ width: '20px', height: '20px' }} fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            تواصل عبر واتساب
          </a>
        </div>
      )}
    </>
  );
}
