/**
 * سكربت رفع أقسام الاستفتاءات إلى Firestore
 * التشغيل: node scripts/seed-categories.js
 */

import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBQW6x80bgP9p9Epu0Gg3v2va5_qf9oIiA",
  authDomain: "hajandomra-23c77.firebaseapp.com",
  projectId: "hajandomra-23c77",
  storageBucket: "hajandomra-23c77.firebasestorage.app",
  messagingSenderId: "1061371071299",
  appId: "1:1061371071299:web:f072d1cca5dffd5cbefdf6",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const categories = [
  { id: 'wujub',     name: 'وجوب الحج والاستطاعة', order: 1 },
  { id: 'niyaba',    name: 'النيابة والحج عن الغير', order: 2 },
  { id: 'ihram',     name: 'الإحرام والمواقيت',     order: 3 },
  { id: 'mahrumat',  name: 'محرمات الإحرام',        order: 4 },
  { id: 'tawaf',     name: 'الطواف وصلاته',         order: 5 },
  { id: 'saai',      name: 'السعي',                 order: 6 },
  { id: 'wuquf',     name: 'الوقوف والمشاعر',       order: 7 },
  { id: 'rami',      name: 'الرمي',                 order: 8 },
  { id: 'dhabh',     name: 'الذبح والهدي',          order: 9 },
  { id: 'halq',      name: 'الحلق والتقصير',        order: 10 },
  { id: 'tawafnisa', name: 'طواف النساء',           order: 11 },
  { id: 'mabit',     name: 'المبيت بمنى',           order: 12 },
  { id: 'aam',       name: 'أحكام عامة',            order: 13 },
];

async function seed() {
  console.log('جاري رفع الأقسام إلى Firestore...');
  for (const cat of categories) {
    await setDoc(doc(db, 'istiftaat_categories', cat.id), {
      id: cat.id,
      name: cat.name,
      order: cat.order,
    });
    console.log(`  ✓ ${cat.name} (${cat.id})`);
  }
  console.log(`\nتم رفع ${categories.length} قسم بنجاح!`);
  process.exit(0);
}

seed().catch(err => {
  console.error('خطأ:', err);
  process.exit(1);
});
