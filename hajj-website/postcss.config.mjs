/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    '@tailwindcss/postcss': {}, // <--- لاحظ: تم تغيير الاسم هنا كما طلب الخطأ
    autoprefixer: {},
  },
};

export default config;