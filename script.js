// --- 1. Hiệu ứng gõ chữ (Typing Effect) ---
const textElement = document.querySelector('.dynamic-text');
const words = ["Sinh viên Thiết kế", "Digital Artist", "Creative Thinker"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
        textElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        textElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    let typingSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        typingSpeed = 1500;
    } 
    else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typingSpeed = 500;
    }

    setTimeout(typeEffect, typingSpeed);
}

document.addEventListener('DOMContentLoaded', typeEffect);


// --- 2. Hiệu ứng xuất hiện khi cuộn trang (Scroll Reveal) ---
function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');

    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
        }
    }
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();


// --- 3. Xử lý Form Liên hệ & Hiệu ứng nút gửi ---
const contactForm = document.getElementById('contact-form');
const submitBtn = document.querySelector('.btn-submit');
const btnText = document.querySelector('.btn-text');
const btnIcon = submitBtn.querySelector('i');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); 

        submitBtn.classList.add('sending');
        btnText.textContent = "Đang gửi...";

        setTimeout(() => {
            btnIcon.classList.remove('fa-paper-plane');
            btnIcon.classList.add('fa-check');
            btnText.textContent = "Đã gửi thành công!";
            submitBtn.style.background = "#28a745"; 
            submitBtn.style.borderColor = "#28a745";
            submitBtn.style.color = "#fff";
        }, 400);

        setTimeout(() => {
            contactForm.reset(); 
            
            submitBtn.classList.remove('sending');
            btnIcon.classList.remove('fa-check');
            btnIcon.classList.add('fa-paper-plane');
            btnText.textContent = "Gửi Tin Nhắn";
            
            submitBtn.style.background = "";
            submitBtn.style.borderColor = "";
            submitBtn.style.color = "";
        }, 3000);
    });
}