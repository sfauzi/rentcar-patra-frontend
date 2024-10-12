const navbar = document.querySelector('.navbar');
let lastScrollTop = 0; // Variabel untuk menyimpan posisi scroll terakhir
const delta = 5; // Jumlah piksel untuk deteksi scroll

window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;

    // Menangani navbar blur saat di-scroll
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');

        // Menyembunyikan navbar saat menggulir ke bawah
        if (Math.abs(currentScroll - lastScrollTop) >= delta) {
            if (currentScroll > lastScrollTop) {
                navbar.style.transform = 'translateY(-100%)'; // Menyembunyikan navbar
            } else {
                navbar.style.transform = 'translateY(0)'; // Menampilkan navbar
            }
        }
    } else {
        navbar.classList.remove('scrolled');
        navbar.style.transform = 'translateY(0)'; // Pastikan navbar terlihat saat di atas
    }

    lastScrollTop = currentScroll; // Update posisi scroll terakhir
});