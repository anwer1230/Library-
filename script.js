
// script.js
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // منع إرسال النموذج بشكل افتراضي

        const productName = document.getElementById("product-name").value;
        const price = document.getElementById("price").value;
        const category = document.getElementById("category").value;
        const description = document.getElementById("description").value;

        // يمكن إضافة الكود هنا لمعالجة البيانات أو إرسالها إلى الخادم
        alert(`Ürün Adı: ${productName}\nFiyat: ${price}\nKategori: ${category}\nAçıklama: ${description}`);
    });
});

