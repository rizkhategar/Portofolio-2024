document.addEventListener('DOMContentLoaded', function () {
    const observerOptions = {
        threshold: 0.1 // Memicu saat 10% elemen terlihat di viewport
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // Menambahkan kelas 'visible' saat elemen terlihat
            } else {
                entry.target.classList.remove('visible'); // Menghapus kelas 'visible' saat elemen keluar dari viewport
            }
        });
    }, observerOptions);

    // Pilih semua elemen dengan kelas fade-in-left dan fade-in-right
    const elements = document.querySelectorAll('.fade-in-left, .fade-in-right');
    elements.forEach(el => observer.observe(el));
});

document.addEventListener('DOMContentLoaded', function () {
    const skillItems = document.querySelectorAll('.skills-list li');

    // Fungsi untuk memeriksa apakah elemen berada di viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Fungsi untuk mengatur animasi
    function animateSkills() {
        skillItems.forEach((item, index) => {
            if (isInViewport(item)) {
                setTimeout(() => {
                    item.classList.add('show');
                }, index * 200); // Delay untuk animasi berurutan
            } else {
                // Hapus kelas show saat elemen keluar dari viewport
                item.classList.remove('show');
            }
        });
    }

    // Panggil fungsi animasi saat pertama kali dan saat menggulir
    animateSkills();
    window.addEventListener('scroll', animateSkills);
});

document.addEventListener('DOMContentLoaded', function () {
    const aboutElements = document.querySelectorAll('.about');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible'); // Hapus kelas ketika elemen keluar dari viewport
            }
        });
    }, { threshold: 0.1 });

    aboutElements.forEach(el => observer.observe(el));
});

document.addEventListener('DOMContentLoaded', () => {
    const preTitle = document.querySelector('.pre-title');
    const homeName = document.querySelector('.home-name');
    const homeButton = document.querySelector('.btn');

    // Tambahkan animasi fade-in dan slide-in
    function animateHomeSection() {
        preTitle.classList.add('fade-in-left');
        homeName.classList.add('slide-in-top');
        homeButton.classList.add('pulse');
    }

    // Panggil fungsi saat halaman dimuat
    animateHomeSection();

    // Pastikan animasi diulang saat halaman digulir
    window.addEventListener('scroll', () => {
        if (window.scrollY === 0) {
            animateHomeSection();
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const options = {
        threshold: 0.2
    };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, options);

    const homeElements = document.querySelectorAll('#home h3, #home h1, #home p');
    homeElements.forEach(el => observer.observe(el));
});

document.addEventListener('DOMContentLoaded', function () {
    const options = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            } else {
                entry.target.classList.remove('animated');
            }
        });
    }, options);

    const homeElements = document.querySelectorAll('#home h3, #home h1, #home p');
    homeElements.forEach(el => observer.observe(el));
});

document.addEventListener('DOMContentLoaded', function () {
    const options = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            } else {
                entry.target.classList.remove('animated');
            }
        });
    }, options);

    const homeElements = document.querySelectorAll('#home h3, #home h1, #home p, #home .btn'); // Tambahkan tombol .btn
    homeElements.forEach(el => observer.observe(el));
});
