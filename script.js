// Thay đổi style của thanh điều hướng khi cuộn trang
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) {
        nav.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        nav.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        nav.style.boxShadow = 'none';
        nav.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});

// Xử lý sự kiện khi gửi form liên hệ
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(event) {
    // Ngăn chặn trang tự động reload
    event.preventDefault();

    // Lấy dữ liệu từ form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Hiển thị thông báo đơn giản (có thể thay bằng API gửi mail thật sau này)
    alert(`Cảm ơn ${name}! Lời nhắn của bạn đã được ghi nhận. Tôi sẽ phản hồi qua email ${email} sớm nhất có thể.`);
    
    // Reset form
    contactForm.reset();
});