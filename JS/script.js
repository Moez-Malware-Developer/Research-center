// إدارة القوائم المنسدلة (Dropdown)
function toggleDropdown(id) {
    // إغلاق جميع القوائم المفتوحة ما عدا المطلوبة
    document.querySelectorAll('.dropdown-content').forEach(content => {
        if (content.id !== id) {
            content.classList.add("hidden");
        }
    });

    // فتح القائمة المطلوبة
    document.getElementById(id).classList.toggle("hidden");
}

// إغلاق القوائم عند النقر خارجها
window.onclick = function(event) {
    // تحقق إذا كان العنصر الذي تم النقر عليه ليس من ضمن القائمة أو الأزرار
    if (!event.target.closest('.relative')) {
        document.querySelectorAll('.dropdown-content').forEach(content => {
            content.classList.add("hidden");
        });
    }
}

// إدارة الكاروسيل (Carousel)
let currentSlide = 0;
const slides = document.querySelectorAll(".carousel-item");
const carouselButtons = document.querySelectorAll(".carousel-buttons button");

// عرض الشريحة بناءً على الفهرس المحدد
function showSlide(index) {
    currentSlide = index;
    slides.forEach((slide, i) => {
        slide.style.opacity = i === index ? "1" : "0";
    });
    updateButtons();
}

// تحديث الأزرار لجعل الزر النشط مميز
function updateButtons() {
    carouselButtons.forEach((button, i) => {
        button.classList.toggle("bg-blue-500", i === currentSlide); // الزر النشط
        button.classList.toggle("bg-gray-500", i !== currentSlide); // الأزرار غير النشطة
    });
}

// تغيير الشريحة تلقائيًا كل 3 ثوانٍ
setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}, 3000);
