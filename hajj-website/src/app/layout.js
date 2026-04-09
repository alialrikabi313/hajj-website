import './globals.css';
import { Cairo, Amiri } from 'next/font/google';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-cairo',
  display: 'swap',
});

const amiri = Amiri({
  subsets: ['arabic', 'latin'],
  weight: ['400', '700'],
  variable: '--font-amiri',
  display: 'swap',
});

export const metadata = {
  title: 'مؤسسة الحج والعمرة | مكتب سماحة المرجع الديني الشيخ محمد اليعقوبي',
  description: 'البوابة الرسمية لمؤسسة الحج والعمرة - مكتب سماحة المرجع الديني الشيخ محمد اليعقوبي (دام ظله). استفتاءات شرعية، مناسك الحج والعمرة، المكتبة، والمزيد.',
  keywords: 'الحج، العمرة، المرجع اليعقوبي، استفتاءات، مناسك، فقه',
  authors: [{ name: 'مؤسسة الحج والعمرة' }],
  openGraph: {
    title: 'مؤسسة الحج والعمرة | الشيخ اليعقوبي',
    description: 'البوابة الرسمية لمؤسسة الحج والعمرة',
    type: 'website',
    locale: 'ar_IQ',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} ${amiri.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#0f0f1a" />
      </head>
      <body className={`${cairo.className} antialiased`}>
        {/* Islamic Pattern Background */}
        <div className="islamic-pattern" aria-hidden="true" />

        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main style={{ paddingTop: '80px', minHeight: '100vh', position: 'relative', zIndex: 1 }}>
          {children}
        </main>

        {/* Footer */}
        <Footer />

        {/* WhatsApp Floating Button */}
        <WhatsAppButton />
      </body>
    </html>
  );
}
