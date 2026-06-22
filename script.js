document.addEventListener("DOMContentLoaded", function() {
    // Lightbox Logic
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const captionText = document.getElementById("caption");
    const closeBtn = document.getElementsByClassName("close-btn")[0];

    // Lấy tất cả các item trong portfolio
    const portfolioItems = document.querySelectorAll(".portfolio-item");

    portfolioItems.forEach(item => {
        item.addEventListener("click", function() {
            // Lấy thẻ img và thẻ h3 bên trong item được click
            const img = this.querySelector("img");
            const title = this.querySelector("h3").innerText;

            // Hiển thị lightbox
            lightbox.style.display = "block";
            lightboxImg.src = img.src;
            captionText.innerHTML = title;
        });
    });

    // Đóng lightbox khi click vào nút X
    closeBtn.addEventListener("click", function() {
        lightbox.style.display = "none";
    });

    // Đóng lightbox khi click ra ngoài ảnh
    lightbox.addEventListener("click", function(e) {
        if (e.target !== lightboxImg) {
            lightbox.style.display = "none";
        }
    });

    // Cập nhật Active Link khi Scroll
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("header nav ul li a");

    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 60) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.style.color = "var(--text-color)";
            if (link.getAttribute("href").includes(current)) {
                link.style.color = "var(--accent-color)";
            }
        });
    });

    // Xử lý Form Liên hệ
    const collabForm = document.getElementById("collab-form");
    if (collabForm) {
        collabForm.addEventListener("submit", function(e) {
            e.preventDefault(); // Ngăn trang tự động reload
            
            // Ở đây bạn có thể tích hợp API gửi email thật (như EmailJS, Formspree)
            // Hiện tại sẽ hiển thị thông báo mô phỏng
            
            alert("Cảm ơn bạn! Thông tin hợp tác đã được gửi thành công. Tôi sẽ phản hồi sớm nhất có thể.");
            
            // Xóa rỗng các ô nhập liệu sau khi gửi
            collabForm.reset();
        });
    }
});