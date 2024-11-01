document.addEventListener('DOMContentLoaded', function () {
    // Pengaturan untuk animasi masuk dengan threshold 10%
    const observerOptions = {
      threshold: 0.2
    };
  
    // Fungsi untuk menjalankan animasi saat elemen masuk ke viewport
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible'); // Menambahkan kelas 'visible'
          entry.target.classList.add('animated'); // Tambahan kelas 'animated'
        } else {
          entry.target.classList.remove('visible'); // Menghapus kelas saat keluar dari viewport
          entry.target.classList.remove('animated'); // Hapus kelas saat keluar
        }
      });
    }, observerOptions);
  
    // Seleksi elemen-elemen yang akan diamati
    const fadeInElements = document.querySelectorAll('.fade-in-left, .fade-in-right, .about');
    fadeInElements.forEach(el => observer.observe(el));
  
    const homeElements = document.querySelectorAll('#home h3, #home h1, #home p, #home .btn');
    homeElements.forEach(el => observer.observe(el));
  
    // Animasi untuk daftar keterampilan di bagian Skills
    const skillItems = document.querySelectorAll('.skills-list li');
  
    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    function animateSkills() {
      skillItems.forEach((item, index) => {
        if (isInViewport(item)) {
          setTimeout(() => {
            item.classList.add('show');
          }, index * 200); // Delay untuk animasi berurutan
        } else {
          item.classList.remove('show'); // Hapus kelas saat elemen keluar dari viewport
        }
      });
    }
  
    // Panggil fungsi animasi saat pertama kali dan saat menggulir
    animateSkills();
    window.addEventListener('scroll', animateSkills);
  
    // Fungsi untuk bagian home agar animasi berulang saat halaman digulir ke atas
    const preTitle = document.querySelector('.pre-title');
    const homeName = document.querySelector('.home-name');
    const homeButton = document.querySelector('.btn');
  
    function animateHomeSection() {
      preTitle.classList.add('fade-in-left');
      homeName.classList.add('slide-in-top');
      homeButton.classList.add('pulse');
    }
  
    animateHomeSection();
  
    window.addEventListener('scroll', () => {
      if (window.scrollY === 0) {
        animateHomeSection();
      }
    });
  
    // Pengaturan animasi fade-in untuk elemen dengan kelas .fade-in
    const faders = document.querySelectorAll('.fade-in');
  
    const appearOptions = {
      threshold: 0.3,
      rootMargin: "0px 0px -50px 0px"
    };
  
    const appearOnScroll = new IntersectionObserver(function (entries) {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('fade-in-visible');
          }, index * 200); // Delay antar elemen
        } else {
          entry.target.classList.remove('fade-in-visible');
        }
      });
    }, appearOptions);
  
    faders.forEach(fader => appearOnScroll.observe(fader));
  });
  
