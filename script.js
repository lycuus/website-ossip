let slideIndex = 0;

function moveSlide(n) {
    const slides = document.querySelectorAll('.gallery-item');
    slideIndex += n;

    // Jika sudah di slide terakhir, kembali ke awal
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    // Jika di slide pertama, pindah ke slide terakhir
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }

    // Pindahkan slide secara horizontal
    const slider = document.querySelector('.gallery-slider');
    const slideWidth = slides[0].clientWidth + 20; // Ditambah margin
    slider.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
}

function toggleText(button) {
    const parentItem = button.parentElement;
    parentItem.classList.toggle('active');
    
    // Ubah teks tombol
    if (parentItem.classList.contains('active')) {
        button.textContent = 'sembunyikan';
    } else {
        button.textContent = 'selanjutnya';
    }
}

document.addEventListener('DOMContentLoaded', function () {
  const readMoreButtons = document.querySelectorAll('.read-more');

  readMoreButtons.forEach(button => {
      button.addEventListener('click', function (e) {
          e.preventDefault(); // Mencegah tautan mengarah ke halaman lain
          const moreInfo = this.nextElementSibling;

          if (moreInfo.style.display === 'none' || moreInfo.style.display === '') {
              moreInfo.style.display = 'block';
              this.textContent = 'Read Less';
          } else {
              moreInfo.style.display = 'none';
              this.textContent = 'Read More';
          }
      });
  });
});











