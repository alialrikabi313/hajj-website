import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBQW6x80bgP9p9Epu0Gg3v2va5_qf9oIiA",
  authDomain: "hajandomra-23c77.firebaseapp.com",
  projectId: "hajandomra-23c77",
  storageBucket: "hajandomra-23c77.firebasestorage.app",
  messagingSenderId: "1061371071299",
  appId: "1:1061371071299:web:f072d1cca5dffd5cbefdf6",
  measurementId: "G-EK1CXL94BZ"
};

// التأكد من عدم تهيئة التطبيق مرتين (Best Practice for Next.js)
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);

// Analytics تعمل فقط في المتصفح
const analytics = typeof window !== "undefined" ? await isSupported().then(yes => yes ? getAnalytics(app) : null) : null;

export { db, analytics };