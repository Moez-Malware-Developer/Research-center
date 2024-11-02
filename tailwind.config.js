// tailwind.config.js
module.exports = {
  content: [
    "./HTML/**/*.html", // يشمل جميع ملفات HTML داخل مجلد HTML
    "./CSS/**/*.css",   // يشمل جميع ملفات CSS داخل مجلد CSS
    "./JS/**/*.js",     // يشمل جميع ملفات جافاسكريبت داخل مجلد JS
  ],
  theme: {
    extend: {
      colors: {
        customTeal: '#00A991', // يمكنك تسمية اللون بأي اسم ترغب به
      },
    },
  },
  plugins: [],
};
