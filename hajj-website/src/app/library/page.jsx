'use client';

import { useState, useMemo } from 'react';

const books = [
  {
    id: 1,
    title: 'مناسك الحج',
    author: 'سماحة المرجع الشيخ محمد اليعقوبي',
    description: 'الرسالة العملية الشاملة لأحكام مناسك الحج والعمرة وفق فتاوى سماحة المرجع الديني الشيخ محمد اليعقوبي (دام ظله)',
    format: 'PDF',
    size: '1.7 MB',
    sizeBytes: 1785789,
    fileName: 'manasik-yaqoubi.pdf',
    accentColor: '#c9a227',
    featured: true,
  },
  {
    id: 2,
    title: 'مناسك الحج وملحقاتها',
    author: 'سماحة السيد علي السيستاني',
    description: 'رسالة مناسك الحج مع الملحقات التوضيحية وفق فتاوى سماحة المرجع الأعلى السيد علي السيستاني (دام ظله)',
    format: 'PDF',
    size: '2.0 MB',
    sizeBytes: 2074496,
    fileName: 'manasik-sistani.pdf',
    accentColor: '#0a8754',
    featured: true,
  },
  {
    id: 3,
    title: 'مناسك الحج',
    author: 'سماحة السيد محمد الصدر',
    description: 'رسالة مناسك الحج وفق فتاوى سماحة المرجع الديني السيد محمد الصدر (قدس سره)',
    format: 'PDF',
    size: '4.6 MB',
    sizeBytes: 4834297,
    fileName: 'manasik-sadr.pdf',
    accentColor: '#16213e',
  },
  {
    id: 4,
    title: 'مناسك الحج',
    author: 'سماحة السيد الزنجاني',
    description: 'رسالة مناسك الحج وفق فتاوى سماحة المرجع الديني السيد الزنجاني (دام ظله)',
    format: 'PDF',
    size: '2.1 MB',
    sizeBytes: 2212811,
    fileName: 'manasik-zanjani.pdf',
    accentColor: '#e94560',
  },
  {
    id: 5,
    title: 'مناسك الحج',
    author: 'سماحة السيد علي الخامنئي',
    description: 'رسالة مناسك الحج وفق فتاوى سماحة القائد السيد علي الخامنئي (دام ظله)',
    format: 'PDF',
    size: '336 KB',
    sizeBytes: 343980,
    fileName: 'manasik-khamenei.pdf',
    accentColor: '#4A148C',
  },
  {
    id: 6,
    title: 'مناسك الحج',
    author: 'سماحة السيد أبو القاسم الخوئي',
    description: 'رسالة مناسك الحج وفق فتاوى سماحة المرجع الأعلى السيد أبو القاسم الخوئي (قدس سره)',
    format: 'PDF',
    size: '894 KB',
    sizeBytes: 915838,
    fileName: 'manasik-khoei.pdf',
    accentColor: '#1B5E20',
  },
  {
    id: 7,
    title: 'مناسك الحج مع الهوامش',
    author: 'سماحة الشيخ محمد إسحاق الفياض',
    description: 'رسالة مناسك الحج مع الهوامش التوضيحية وفق فتاوى سماحة المرجع الشيخ محمد إسحاق الفياض (دام ظله)',
    format: 'PDF',
    size: '8.9 MB',
    sizeBytes: 9332683,
    fileName: 'manasik-fayyad.pdf',
    accentColor: '#9a7b1e',
  },
  {
    id: 8,
    title: 'مناسك الحج مطابق لفتاوى الإمام الخميني',
    author: 'سماحة الإمام روح الله الخميني',
    description: 'رسالة مناسك الحج مطابقة لفتاوى سماحة الإمام روح الله الخميني (قدس سره)',
    format: 'PDF',
    size: '6.1 MB',
    sizeBytes: 6362704,
    fileName: 'manasik-khomeini.pdf',
    accentColor: '#b71c1c',
  },
  {
    id: 9,
    title: 'أبعاد الحج',
    author: 'بحث في أبعاد الحج',
    description: 'دراسة في الأبعاد المعنوية والفقهية لفريضة الحج',
    format: 'PDF',
    size: '1.3 MB',
    sizeBytes: 1392534,
    fileName: 'أبعاد الحج.pdf',
    accentColor: '#6A1B9A',
  },
  {
    id: 10,
    title: 'أنوار الفقاهة - كتاب الحج',
    author: 'الشيخ ناصر مكارم الشيرازي',
    description: 'الجزء الرابع من أنوار الفقاهة المختص بأحكام الحج ومسائله الفقهية التفصيلية',
    format: 'PDF',
    size: '14.2 MB',
    sizeBytes: 14866709,
    fileName: 'أنوار الفقاهة ج04 - الحج.pdf',
    accentColor: '#00695C',
  },
  {
    id: 11,
    title: 'إجزاء الوقوف مع العامة في عرفة',
    author: 'الشيخ باقر الأيرواني',
    description: 'بحث فقهي في مسألة إجزاء الوقوف مع العامة في عرفات عند اختلاف تحديد يوم عرفة',
    format: 'PDF',
    size: '2.9 MB',
    sizeBytes: 3050161,
    fileName: 'إجزاء الوقوف مع العامة في عرفة - الشيخ باقر الأيرواني.pdf',
    accentColor: '#E65100',
  },
  {
    id: 12,
    title: 'الجمرات في الماضي والحاضر',
    author: 'بحث تاريخي فقهي',
    description: 'دراسة تاريخية وفقهية حول الجمرات ورميها في الماضي والحاضر',
    format: 'PDF',
    size: '544 KB',
    sizeBytes: 556829,
    fileName: 'الجمرات في الماضي والحاضر.PDF',
    accentColor: '#795548',
  },
  {
    id: 13,
    title: 'الحدائق الناضرة - الحج (ج14)',
    author: 'الشيخ يوسف البحراني',
    description: 'الجزء الرابع عشر من الحدائق الناضرة في أحكام العترة الطاهرة - كتاب الحج',
    format: 'PDF',
    size: '16.4 MB',
    sizeBytes: 17236319,
    fileName: 'الحدائق الناضرة ج14 - الحج.pdf',
    accentColor: '#1565C0',
  },
  {
    id: 14,
    title: 'الحدائق الناضرة - الحج (ج15)',
    author: 'الشيخ يوسف البحراني',
    description: 'الجزء الخامس عشر من الحدائق الناضرة في أحكام العترة الطاهرة - تتمة كتاب الحج',
    format: 'PDF',
    size: '17.1 MB',
    sizeBytes: 17924166,
    fileName: 'الحدائق الناضرة ج15 - الحج.pdf',
    accentColor: '#1565C0',
  },
  {
    id: 15,
    title: 'الحدائق الناضرة - الحج (ج16)',
    author: 'الشيخ يوسف البحراني',
    description: 'الجزء السادس عشر من الحدائق الناضرة في أحكام العترة الطاهرة - تتمة كتاب الحج',
    format: 'PDF',
    size: '15.0 MB',
    sizeBytes: 15747771,
    fileName: 'الحدائق الناضرة ج16 - الحج.pdf',
    accentColor: '#1565C0',
  },
  {
    id: 16,
    title: 'الحدائق الناضرة - الحج والمزار (ج17)',
    author: 'الشيخ يوسف البحراني',
    description: 'الجزء السابع عشر من الحدائق الناضرة في أحكام العترة الطاهرة - كتاب الحج والمزار',
    format: 'PDF',
    size: '14.7 MB',
    sizeBytes: 15431443,
    fileName: 'الحدائق الناضرة ج17 - الحج، المزار.pdf',
    accentColor: '#1565C0',
  },
  {
    id: 17,
    title: 'الفاصل الزماني بين عمرتين',
    author: 'بحث فقهي',
    description: 'بحث فقهي في مسألة الفاصل الزماني المعتبر بين عمرتين متتاليتين',
    format: 'PDF',
    size: '1.3 MB',
    sizeBytes: 1364148,
    fileName: 'الفاصل الزماني بين عمرتين.pdf',
    accentColor: '#AD1457',
  },
  {
    id: 18,
    title: 'المنجد في معالم مكة والمدينة',
    author: 'دليل المعالم',
    description: 'دليل شامل لمعالم مكة المكرمة والمدينة المنورة التاريخية والدينية',
    format: 'PDF',
    size: '296 KB',
    sizeBytes: 302947,
    fileName: 'المنجد في معالم مكة والمدينة.pdf',
    accentColor: '#2E7D32',
  },
  {
    id: 19,
    title: 'الوصايا الأربعون في الحج',
    author: 'الشيخ حبيب الكاظمي',
    description: 'أربعون وصية ونصيحة للحجاج والمعتمرين من الشيخ حبيب الكاظمي',
    format: 'PDF',
    size: '158 KB',
    sizeBytes: 161326,
    fileName: 'الوصايا الأربعون في الحج - شيخ حبيب الكاظمي.pdf',
    accentColor: '#FF6F00',
  },
  {
    id: 20,
    title: 'رمي الجمرات في بحث جديد',
    author: 'بحث فقهي',
    description: 'بحث فقهي جديد في أحكام رمي الجمرات ومسائله المستحدثة',
    format: 'PDF',
    size: '1.5 MB',
    sizeBytes: 1571874,
    fileName: 'رمي+الجمرات+في+بحث+جديد+_+الشيخ+.pdf',
    accentColor: '#C62828',
  },
  {
    id: 21,
    title: 'صحيح البخاري - كتاب الحج',
    author: 'الإمام محمد بن إسماعيل البخاري',
    description: 'كتاب الحج من صحيح البخاري - الجزء السابع والعشرون من أبواب مناسك الحج',
    format: 'PDF',
    size: '2.0 MB',
    sizeBytes: 2140239,
    fileName: 'صحيح البخاري ٢٧- كتاب الحج. (2).pdf',
    accentColor: '#37474F',
  },
  {
    id: 22,
    title: 'فقه الصادق - الحج (ج13)',
    author: 'السيد محمد صادق الروحاني',
    description: 'الجزء الثالث عشر من فقه الصادق - كتاب الحج',
    format: 'PDF',
    size: '11.5 MB',
    sizeBytes: 12083060,
    fileName: 'فقه الصادق ج13 - الحج.pdf',
    accentColor: '#4527A0',
  },
  {
    id: 23,
    title: 'فقه الصادق - الحج (ج14)',
    author: 'السيد محمد صادق الروحاني',
    description: 'الجزء الرابع عشر من فقه الصادق - تتمة كتاب الحج',
    format: 'PDF',
    size: '10.5 MB',
    sizeBytes: 10964588,
    fileName: 'فقه الصادق  ج14 - الحج.pdf',
    accentColor: '#4527A0',
  },
  {
    id: 24,
    title: 'فقه الصادق - الحج (ج15)',
    author: 'السيد محمد صادق الروحاني',
    description: 'الجزء الخامس عشر من فقه الصادق - تتمة كتاب الحج',
    format: 'PDF',
    size: '10.0 MB',
    sizeBytes: 10506242,
    fileName: 'فقه الصادق  ج15 - الحج.pdf',
    accentColor: '#4527A0',
  },
  {
    id: 25,
    title: 'فقه الصادق - الحج (ج16)',
    author: 'السيد محمد صادق الروحاني',
    description: 'الجزء السادس عشر من فقه الصادق - تتمة كتاب الحج',
    format: 'PDF',
    size: '10.5 MB',
    sizeBytes: 10971726,
    fileName: 'فقه الصادق  ج16 - الحج.pdf',
    accentColor: '#4527A0',
  },
  {
    id: 26,
    title: 'فقه الصادق - الحج (ج17)',
    author: 'السيد محمد صادق الروحاني',
    description: 'الجزء السابع عشر من فقه الصادق - تتمة كتاب الحج',
    format: 'PDF',
    size: '8.7 MB',
    sizeBytes: 9164688,
    fileName: 'فقه الصادق  ج17 - الحج.pdf',
    accentColor: '#4527A0',
  },
  {
    id: 27,
    title: 'فقه الصادق - الحج (ج18)',
    author: 'السيد محمد صادق الروحاني',
    description: 'الجزء الثامن عشر من فقه الصادق - تتمة كتاب الحج',
    format: 'PDF',
    size: '9.8 MB',
    sizeBytes: 10278967,
    fileName: 'فقه الصادق ج18 - الحج.pdf',
    accentColor: '#4527A0',
  },
  {
    id: 28,
    title: 'قداسة الحرم وأمنه',
    author: 'الشيخ عبد الله جوادي الآملي',
    description: 'بحث في قداسة الحرم المكي وأمنه من منظور فقهي وقرآني للشيخ جوادي الآملي',
    format: 'PDF',
    size: '2.4 MB',
    sizeBytes: 2473565,
    fileName: 'قداسة_الحرم_و_أمنه_الشيخ_عبد_الله_جوادي_الآملي.pdf',
    accentColor: '#00838F',
  },
  {
    id: 29,
    title: 'معجم ما كتب في الحج',
    author: 'معجم ببليوغرافي',
    description: 'معجم ببليوغرافي شامل لما كتب وألّف في موضوع الحج عبر التاريخ',
    format: 'PDF',
    size: '2.7 MB',
    sizeBytes: 2781983,
    fileName: 'معجم ما كتب في الحج.pdf',
    accentColor: '#5D4037',
  },
  {
    id: 30,
    title: 'مكان ذبح الهدي',
    author: 'بحث فقهي',
    description: 'بحث فقهي في تحديد مكان ذبح الهدي وما يتعلق به من أحكام شرعية',
    format: 'PDF',
    size: '1.2 MB',
    sizeBytes: 1302150,
    fileName: 'مكان ذبح الهدي.pdf',
    accentColor: '#880E4F',
  },
  {
    id: 31,
    title: 'منتهى المطلب - الحج (ج10)',
    author: 'العلامة الحلي',
    description: 'الجزء العاشر من منتهى المطلب في تحقيق المذهب - كتاب الحج',
    format: 'PDF',
    size: '15.7 MB',
    sizeBytes: 16496028,
    fileName: 'منتهى المطلب ج10 - الحج.pdf',
    accentColor: '#33691E',
  },
  {
    id: 32,
    title: 'منتهى المطلب - الحج (ج12)',
    author: 'العلامة الحلي',
    description: 'الجزء الثاني عشر من منتهى المطلب في تحقيق المذهب - تتمة كتاب الحج',
    format: 'PDF',
    size: '14.2 MB',
    sizeBytes: 14872579,
    fileName: 'منتهى المطلب ج12 - الحج.pdf',
    accentColor: '#33691E',
  },
  {
    id: 33,
    title: 'منتهى المطلب في تحقيق المذهب',
    author: 'العلامة الحلي الحسن بن يوسف بن المطهر',
    description: 'كتاب منتهى المطلب في تحقيق المذهب للعلامة الحلي - أبواب الحج',
    format: 'PDF',
    size: '12.1 MB',
    sizeBytes: 12698262,
    fileName: 'منتهى_المطلب_في_تحقيق_المذهب_العلامة_الحلي_الحسن_بن_يوسف_بن_المطهر.pdf',
    accentColor: '#33691E',
  },
  {
    id: 34,
    title: 'كتاب الحج - ج1',
    author: 'السيد النبوي',
    description: 'الجزء الأول من كتاب الحج للسيد النبوي - بحث فقهي استدلالي في أحكام الحج',
    format: 'PDF',
    size: '3.4 MB',
    sizeBytes: 3555459,
    fileName: 'کتاب الحج - ج ١ - السيد النبوي.pdf',
    accentColor: '#0D47A1',
  },
  {
    id: 35,
    title: 'كتاب الحج - ج2',
    author: 'السيد النبوي',
    description: 'الجزء الثاني من كتاب الحج للسيد النبوي - تتمة البحث الفقهي الاستدلالي',
    format: 'PDF',
    size: '3.6 MB',
    sizeBytes: 3758448,
    fileName: 'کتاب الحج - ج ٢ - السيد النبوي .pdf',
    accentColor: '#0D47A1',
  },
];

const sortOptions = [
  { id: 'default', name: 'الترتيب الافتراضي' },
  { id: 'title', name: 'حسب العنوان' },
  { id: 'author', name: 'حسب المؤلف' },
  { id: 'size-asc', name: 'الحجم: من الأصغر' },
  { id: 'size-desc', name: 'الحجم: من الأكبر' },
];

/* ───────────── Icons ───────────── */
function SearchIcon() {
  return (
    <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  );
}
function GridIcon() {
  return (
    <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
    </svg>
  );
}
function ListIcon() {
  return (
    <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}
function DownloadIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
  );
}
function BookOpenIcon({ size = 48 }) {
  return (
    <svg width={size} height={size} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  );
}
function StarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}
function CloseIcon() {
  return (
    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}
function SortIcon() {
  return (
    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
    </svg>
  );
}
function BookStackIcon() {
  return (
    <svg width="64" height="64" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={0.8} style={{ color: '#c9a22740' }}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  );
}

/* ───────────── Main Page ───────────── */
export default function LibraryPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('default');
  const [showSortMenu, setShowSortMenu] = useState(false);

  const filteredBooks = useMemo(() => {
    let result = [...books];

    // Filter by search
    if (searchQuery.trim()) {
      const q = searchQuery.trim().toLowerCase();
      result = result.filter(b =>
        b.title.toLowerCase().includes(q) ||
        b.author.toLowerCase().includes(q) ||
        b.description.toLowerCase().includes(q)
      );
    }

    // Sort
    switch (sortBy) {
      case 'title':
        result.sort((a, b) => a.title.localeCompare(b.title, 'ar'));
        break;
      case 'author':
        result.sort((a, b) => a.author.localeCompare(b.author, 'ar'));
        break;
      case 'size-asc':
        result.sort((a, b) => a.sizeBytes - b.sizeBytes);
        break;
      case 'size-desc':
        result.sort((a, b) => b.sizeBytes - a.sizeBytes);
        break;
      default:
        result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    return result;
  }, [searchQuery, sortBy]);

  const clearSearch = () => {
    setSearchQuery('');
    setSortBy('default');
  };

  return (
    <div style={{ minHeight: '100vh' }}>
      {/* ─── Hero Section ─── */}
      <section style={{
        position: 'relative',
        padding: '80px 16px 100px',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 50%, #16213e 100%)',
        textAlign: 'center',
      }}>
        {/* Decorative pattern */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(201,162,39,0.06) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(201,162,39,0.04) 0%, transparent 50%)',
        }} />

        {/* Wave bottom */}
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
          {/* Ornamental line */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            marginBottom: '20px',
          }}>
            <div style={{ width: '40px', height: '1px', background: 'linear-gradient(to right, transparent, #c9a227)' }} />
            <span style={{ color: '#c9a227', fontWeight: '600', fontSize: '14px', letterSpacing: '2px' }}>
              المكتبة الإلكترونية
            </span>
            <div style={{ width: '40px', height: '1px', background: 'linear-gradient(to left, transparent, #c9a227)' }} />
          </div>

          <h1 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: '700',
            color: 'white',
            marginBottom: '16px',
            lineHeight: '1.4',
          }}>
            مكتبة الحج{' '}
            <span className="text-gradient-gold">والعمرة</span>
          </h1>

          <p style={{
            color: '#94a3b8',
            fontSize: '16px',
            lineHeight: '1.8',
            maxWidth: '600px',
            margin: '0 auto 40px',
          }}>
            مجموعة شاملة من رسائل مناسك الحج والعمرة
            <br />
            لأبرز المراجع الدينية - متاحة للتحميل المجاني بصيغة PDF
          </p>

          {/* Search Bar */}
          <div style={{
            maxWidth: '560px',
            margin: '0 auto',
            position: 'relative',
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              background: 'rgba(255,255,255,0.08)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(201,162,39,0.2)',
              borderRadius: '16px',
              padding: '4px',
              transition: 'all 0.3s ease',
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '48px',
                color: '#c9a227',
                flexShrink: 0,
              }}>
                <SearchIcon />
              </div>
              <input
                type="text"
                placeholder="ابحث عن كتاب بالعنوان أو المؤلف..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  flex: 1,
                  background: 'transparent',
                  border: 'none',
                  outline: 'none',
                  color: 'white',
                  fontSize: '15px',
                  padding: '12px 0',
                  fontFamily: 'inherit',
                }}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '36px',
                    height: '36px',
                    borderRadius: '10px',
                    border: 'none',
                    background: 'rgba(255,255,255,0.1)',
                    color: '#94a3b8',
                    cursor: 'pointer',
                    marginLeft: '4px',
                    marginRight: '4px',
                    flexShrink: 0,
                  }}
                >
                  <CloseIcon />
                </button>
              )}
            </div>
          </div>

          {/* Stats */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '32px',
            marginTop: '32px',
          }}>
            {[
              { value: books.length, label: 'كتاب متوفر' },
              { value: new Set(books.map(b => b.author)).size, label: 'مرجع ديني' },
              { value: 'PDF', label: 'تحميل مجاني' },
            ].map((stat, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ color: '#c9a227', fontWeight: '700', fontSize: '20px' }}>{stat.value}</div>
                <div style={{ color: '#64748b', fontSize: '12px', marginTop: '2px' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Controls Bar ─── */}
      <section style={{ padding: '0 16px', backgroundColor: '#FAF8F2' }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '24px 0 16px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
        }}>
          {/* Results Count */}
          <p style={{ color: '#7A7670', fontSize: '14px' }}>
            {filteredBooks.length === 0
              ? 'لم يتم العثور على نتائج'
              : <>عرض <span style={{ color: '#c9a227', fontWeight: '700' }}>{filteredBooks.length}</span> من أصل <span style={{ fontWeight: '600' }}>{books.length}</span> كتاب</>
            }
            {(searchQuery || sortBy !== 'default') && (
              <button
                onClick={clearSearch}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  padding: '4px 10px',
                  borderRadius: '8px',
                  border: 'none',
                  background: 'rgba(233,69,96,0.08)',
                  color: '#e94560',
                  fontSize: '12px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  marginRight: '10px',
                  verticalAlign: 'middle',
                }}
              >
                <CloseIcon />
                مسح الفلاتر
              </button>
            )}
          </p>

          {/* Sort + View Toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
            {/* Sort Dropdown */}
            <div style={{ position: 'relative' }}>
              <button
                onClick={() => setShowSortMenu(!showSortMenu)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '8px 14px',
                  borderRadius: '10px',
                  border: 'none',
                  background: 'white',
                  color: '#4B4640',
                  fontSize: '13px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
                  fontFamily: 'inherit',
                }}
              >
                <SortIcon />
                {sortOptions.find(s => s.id === sortBy)?.name}
              </button>
              {showSortMenu && (
                <>
                  <div
                    style={{ position: 'fixed', inset: 0, zIndex: 10 }}
                    onClick={() => setShowSortMenu(false)}
                  />
                  <div style={{
                    position: 'absolute',
                    top: 'calc(100% + 6px)',
                    left: 0,
                    right: 'auto',
                    minWidth: '200px',
                    background: 'white',
                    borderRadius: '12px',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
                    border: '1px solid rgba(0,0,0,0.06)',
                    overflow: 'hidden',
                    zIndex: 20,
                  }}>
                    {sortOptions.map((opt) => (
                      <button
                        key={opt.id}
                        onClick={() => { setSortBy(opt.id); setShowSortMenu(false); }}
                        style={{
                          display: 'block',
                          width: '100%',
                          padding: '10px 16px',
                          border: 'none',
                          background: sortBy === opt.id ? 'rgba(201,162,39,0.08)' : 'transparent',
                          color: sortBy === opt.id ? '#c9a227' : '#4B4640',
                          fontSize: '13px',
                          fontWeight: sortBy === opt.id ? '600' : '400',
                          cursor: 'pointer',
                          textAlign: 'right',
                          fontFamily: 'inherit',
                          transition: 'background 0.15s ease',
                        }}
                      >
                        {opt.name}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Divider */}
            <div style={{ width: '1px', height: '24px', background: '#e5e1d8' }} />

            {/* View Toggle */}
            {['grid', 'list'].map((mode) => (
              <button
                key={mode}
                onClick={() => setViewMode(mode)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  background: viewMode === mode ? '#c9a227' : 'white',
                  color: viewMode === mode ? 'white' : '#7A7670',
                  boxShadow: viewMode === mode ? '0 4px 12px rgba(201,162,39,0.3)' : '0 1px 4px rgba(0,0,0,0.06)',
                }}
              >
                {mode === 'grid' ? <GridIcon /> : <ListIcon />}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Books Section ─── */}
      <section style={{ padding: '0 16px 64px', backgroundColor: '#FAF8F2' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          {filteredBooks.length === 0 ? (
            /* Empty State */
            <div style={{
              textAlign: 'center',
              padding: '80px 24px',
              background: 'white',
              borderRadius: '20px',
              border: '1px solid rgba(0,0,0,0.04)',
            }}>
              <BookStackIcon />
              <h3 style={{ color: '#2C2A25', fontSize: '20px', fontWeight: '700', marginTop: '16px', marginBottom: '8px' }}>
                لم يتم العثور على كتب
              </h3>
              <p style={{ color: '#7A7670', fontSize: '14px', marginBottom: '24px' }}>
                جرب تغيير كلمة البحث أو مسح الفلاتر
              </p>
              <button
                onClick={clearSearch}
                className="btn-primary"
                style={{
                  padding: '10px 28px',
                  borderRadius: '12px',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: '600',
                  fontFamily: 'inherit',
                }}
              >
                عرض جميع الكتب
              </button>
            </div>
          ) : viewMode === 'grid' ? (
            /* Grid View */
            <div className="responsive-grid-280">
              {filteredBooks.map((book, index) => (
                <BookCardGrid key={book.id} book={book} index={index} />
              ))}
            </div>
          ) : (
            /* List View */
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {filteredBooks.map((book, index) => (
                <BookCardList key={book.id} book={book} index={index} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ─── How to Read Section ─── */}
      <section style={{ padding: '64px 16px', backgroundColor: '#F5F0E8' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '24px',
            fontWeight: '700',
            color: '#2C2A25',
            textAlign: 'center',
            marginBottom: '12px',
          }}>
            كيف تقرأ الكتب؟
          </h2>
          <p style={{
            textAlign: 'center',
            color: '#7A7670',
            fontSize: '14px',
            marginBottom: '48px',
            maxWidth: '500px',
            margin: '0 auto 48px',
            lineHeight: '1.7',
          }}>
            الكتب متوفرة بصيغة PDF - اتبع هذه الخطوات البسيطة
          </p>

          <div className="responsive-grid-250">
            {[
              {
                step: '1',
                title: 'حمّل الكتاب',
                description: 'اضغط على زر التحميل لحفظ ملف PDF على جهازك',
                icon: <DownloadIcon size={28} />,
              },
              {
                step: '2',
                title: 'افتح بقارئ PDF',
                description: 'استخدم أي تطبيق قارئ PDF متوفر على جهازك',
                icon: (
                  <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                ),
              },
              {
                step: '3',
                title: 'استمتع بالقراءة',
                description: 'اقرأ الكتاب في أي وقت ومن أي مكان بسهولة',
                icon: (
                  <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div key={item.step} style={{
                textAlign: 'center',
                padding: '32px 24px',
                background: 'white',
                borderRadius: '16px',
                border: '1px solid rgba(201, 162, 39, 0.1)',
                boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
                position: 'relative',
              }}>
                {/* Step number */}
                <div style={{
                  position: 'absolute',
                  top: '-14px',
                  right: '50%',
                  transform: 'translateX(50%)',
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #c9a227, #e8d48b)',
                  color: 'white',
                  fontSize: '13px',
                  fontWeight: '700',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 2px 8px rgba(201,162,39,0.3)',
                }}>
                  {item.step}
                </div>
                <div style={{
                  width: '56px',
                  height: '56px',
                  margin: '8px auto 16px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(201, 162, 39, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#c9a227',
                }}>
                  {item.icon}
                </div>
                <h3 style={{ color: '#2C2A25', fontWeight: '700', fontSize: '17px', marginBottom: '8px' }}>
                  {item.title}
                </h3>
                <p style={{ color: '#7A7670', fontSize: '14px', lineHeight: '1.7' }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

/* ───────────── Grid Book Card ───────────── */
function BookCardGrid({ book, index }) {
  return (
    <div
      className="card"
      style={{
        borderRadius: '18px',
        overflow: 'hidden',
        backgroundColor: 'white',
        border: '1px solid rgba(0,0,0,0.05)',
        boxShadow: '0 2px 16px rgba(0,0,0,0.04)',
        transition: 'all 0.35s ease',
        animation: `fadeInUp 0.4s ease ${index * 0.06}s both`,
      }}
    >
      {/* Cover */}
      <div style={{
        position: 'relative',
        aspectRatio: '4/3',
        background: `linear-gradient(145deg, ${book.accentColor}18, ${book.accentColor}06)`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}>
        {/* Decorative circles */}
        <div style={{
          position: 'absolute',
          top: '-20%',
          left: '-20%',
          width: '60%',
          height: '60%',
          borderRadius: '50%',
          background: `${book.accentColor}08`,
        }} />
        <div style={{
          position: 'absolute',
          bottom: '-10%',
          right: '-10%',
          width: '40%',
          height: '40%',
          borderRadius: '50%',
          background: `${book.accentColor}06`,
        }} />

        {/* Book visual */}
        <div style={{
          width: '120px',
          height: '160px',
          borderRadius: '4px 12px 12px 4px',
          background: `linear-gradient(135deg, ${book.accentColor}dd, ${book.accentColor}99)`,
          boxShadow: `8px 8px 24px ${book.accentColor}30, -2px 0 8px ${book.accentColor}15`,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '16px 12px',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Spine effect */}
          <div style={{
            position: 'absolute',
            right: 0,
            top: 0,
            bottom: 0,
            width: '6px',
            background: 'rgba(0,0,0,0.15)',
          }} />
          {/* Decorative lines */}
          <div style={{
            position: 'absolute',
            top: '12px',
            left: '14px',
            right: '18px',
            height: '1px',
            background: 'rgba(255,255,255,0.2)',
          }} />
          <div style={{
            position: 'absolute',
            bottom: '12px',
            left: '14px',
            right: '18px',
            height: '1px',
            background: 'rgba(255,255,255,0.2)',
          }} />

          <BookOpenIcon size={32} />
          <p style={{
            color: 'white',
            fontSize: '11px',
            fontWeight: '700',
            textAlign: 'center',
            lineHeight: '1.6',
            marginTop: '8px',
            textShadow: '0 1px 2px rgba(0,0,0,0.2)',
          }}>
            {book.title.length > 30 ? book.title.substring(0, 30) + '...' : book.title}
          </p>
        </div>

        {/* Badges */}
        <div style={{
          position: 'absolute',
          top: '12px',
          left: '12px',
          display: 'flex',
          gap: '6px',
        }}>
          <span style={{
            padding: '4px 10px',
            backgroundColor: 'rgba(255,255,255,0.95)',
            color: book.accentColor,
            borderRadius: '8px',
            fontSize: '11px',
            fontWeight: '700',
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
          }}>
            {book.format}
          </span>
          {book.featured && (
            <span style={{
              padding: '4px 10px',
              background: 'linear-gradient(135deg, #c9a227, #e8d48b)',
              color: 'white',
              borderRadius: '8px',
              fontSize: '11px',
              fontWeight: '700',
              display: 'flex',
              alignItems: 'center',
              gap: '3px',
              boxShadow: '0 2px 8px rgba(201,162,39,0.3)',
            }}>
              <StarIcon />
              مميز
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '20px' }}>
        <h3 style={{
          color: '#2C2A25',
          fontWeight: '700',
          fontSize: '16px',
          marginBottom: '6px',
          lineHeight: '1.6',
        }}>
          {book.title}
        </h3>

        <p style={{
          color: '#c9a227',
          fontSize: '13px',
          fontWeight: '500',
          marginBottom: '10px',
        }}>
          {book.author}
        </p>

        <p style={{
          color: '#7A7670',
          fontSize: '13px',
          lineHeight: '1.7',
          marginBottom: '16px',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}>
          {book.description}
        </p>

        {/* Meta */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontSize: '12px',
          color: '#9ca3af',
          marginBottom: '16px',
        }}>
          <span style={{
            padding: '3px 8px',
            background: '#f1f5f9',
            borderRadius: '6px',
          }}>
            {book.size}
          </span>
          <span style={{
            padding: '3px 8px',
            background: '#f1f5f9',
            borderRadius: '6px',
          }}>
            {book.format}
          </span>
        </div>

        {/* Download Button */}
        <a
          href={`/books/${book.fileName}`}
          download
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            padding: '12px 16px',
            background: `linear-gradient(135deg, ${book.accentColor}12, ${book.accentColor}06)`,
            border: `1px solid ${book.accentColor}30`,
            color: book.accentColor,
            borderRadius: '12px',
            fontWeight: '600',
            fontSize: '14px',
            textDecoration: 'none',
            transition: 'all 0.3s ease',
            fontFamily: 'inherit',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = book.accentColor;
            e.currentTarget.style.color = 'white';
            e.currentTarget.style.boxShadow = `0 4px 16px ${book.accentColor}40`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = `linear-gradient(135deg, ${book.accentColor}12, ${book.accentColor}06)`;
            e.currentTarget.style.color = book.accentColor;
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          <DownloadIcon />
          تحميل الكتاب
        </a>
      </div>
    </div>
  );
}

/* ───────────── List Book Card ───────────── */
function BookCardList({ book, index }) {
  return (
    <div
      className="card"
      style={{
        display: 'flex',
        alignItems: 'stretch',
        borderRadius: '16px',
        overflow: 'hidden',
        backgroundColor: 'white',
        border: '1px solid rgba(0,0,0,0.05)',
        boxShadow: '0 2px 12px rgba(0,0,0,0.03)',
        transition: 'all 0.35s ease',
        animation: `fadeInUp 0.3s ease ${index * 0.04}s both`,
      }}
    >
      {/* Side accent */}
      <div style={{
        width: '100px',
        minHeight: '100%',
        background: `linear-gradient(145deg, ${book.accentColor}20, ${book.accentColor}08)`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        position: 'relative',
      }}>
        <div style={{
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: '4px',
          background: book.accentColor,
        }} />
        <div style={{
          width: '56px',
          height: '72px',
          borderRadius: '2px 6px 6px 2px',
          background: `linear-gradient(135deg, ${book.accentColor}cc, ${book.accentColor}88)`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: `4px 4px 12px ${book.accentColor}25`,
        }}>
          <BookOpenIcon size={24} />
        </div>
      </div>

      {/* Content */}
      <div style={{
        flex: 1,
        padding: '20px 24px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: '6px',
        minWidth: 0,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
          <h3 style={{
            color: '#2C2A25',
            fontWeight: '700',
            fontSize: '16px',
            lineHeight: '1.5',
          }}>
            {book.title}
          </h3>
          {book.featured && (
            <span style={{
              padding: '2px 8px',
              background: 'linear-gradient(135deg, #c9a227, #e8d48b)',
              color: 'white',
              borderRadius: '6px',
              fontSize: '10px',
              fontWeight: '700',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '3px',
            }}>
              <StarIcon />
              مميز
            </span>
          )}
        </div>

        <p style={{ color: '#c9a227', fontSize: '13px', fontWeight: '500' }}>
          {book.author}
        </p>

        <p style={{
          color: '#7A7670',
          fontSize: '13px',
          lineHeight: '1.6',
          display: '-webkit-box',
          WebkitLineClamp: 1,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}>
          {book.description}
        </p>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: '#9ca3af', marginTop: '2px' }}>
          <span style={{ padding: '2px 8px', background: '#f1f5f9', borderRadius: '5px' }}>{book.format}</span>
          <span style={{ padding: '2px 8px', background: '#f1f5f9', borderRadius: '5px' }}>{book.size}</span>
        </div>
      </div>

      {/* Download */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        padding: '20px',
        flexShrink: 0,
      }}>
        <a
          href={`/books/${book.fileName}`}
          download
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '10px 20px',
            background: `linear-gradient(135deg, ${book.accentColor}12, ${book.accentColor}06)`,
            border: `1px solid ${book.accentColor}30`,
            color: book.accentColor,
            borderRadius: '12px',
            fontWeight: '600',
            fontSize: '13px',
            textDecoration: 'none',
            transition: 'all 0.3s ease',
            whiteSpace: 'nowrap',
            fontFamily: 'inherit',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = book.accentColor;
            e.currentTarget.style.color = 'white';
            e.currentTarget.style.boxShadow = `0 4px 16px ${book.accentColor}40`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = `linear-gradient(135deg, ${book.accentColor}12, ${book.accentColor}06)`;
            e.currentTarget.style.color = book.accentColor;
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          <DownloadIcon size={16} />
          تحميل
        </a>
      </div>
    </div>
  );
}
