const navbar = document.querySelector('.navbar')
let lastScrollTop = 0 // Variabel untuk menyimpan posisi scroll terakhir
const delta = 5 // Jumlah piksel untuk deteksi scroll

window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY

  // Menangani navbar blur saat di-scroll
  if (currentScroll > 50) {
    navbar.classList.add('scrolled')

    // Menyembunyikan navbar saat menggulir ke bawah
    if (Math.abs(currentScroll - lastScrollTop) >= delta) {
      if (currentScroll > lastScrollTop) {
        navbar.style.transform = 'translateY(-100%)' // Menyembunyikan navbar
      } else {
        navbar.style.transform = 'translateY(0)' // Menampilkan navbar
      }
    }
  } else {
    navbar.classList.remove('scrolled')
    navbar.style.transform = 'translateY(0)' // Pastikan navbar terlihat saat di atas
  }

  lastScrollTop = currentScroll // Update posisi scroll terakhir
})

document.addEventListener('DOMContentLoaded', function () {
  var faqCards = document.querySelectorAll('.faq-card')

  faqCards.forEach(function (card) {
    card.addEventListener('click', function () {
      var answer = this.querySelector('.faq-answer')

      if (this.classList.contains('active')) {
        this.classList.remove('active')
        answer.style.maxHeight = null
      } else {
        this.classList.add('active')
        answer.style.maxHeight = answer.scrollHeight + 'px'
      }
    })
  })
})


// scroll button details car
document.addEventListener('DOMContentLoaded', function () {
  const leftButton = document.querySelector('.scroll-button.left')
  const rightButton = document.querySelector('.scroll-button.right')
  const scrollContainer = document.querySelector('.grid-images')

  leftButton.addEventListener('click', function () {
    scrollContainer.scrollBy({
      left: -200 /* Adjust this value to control the scroll distance */,
      behavior: 'smooth'
    })
  })

  rightButton.addEventListener('click', function () {
    scrollContainer.scrollBy({
      left: 200 /* Adjust this value to control the scroll distance */,
      behavior: 'smooth'
    })
  })
})
// Modal functions
function openModal (imageSrc) {
  document.getElementById('imageModal').style.display = 'flex' // Changed to 'flex' for centering
  document.getElementById('modalImage').src = imageSrc
}

function closeModal () {
  document.getElementById('imageModal').style.display = 'none'
}

// Close modal when clicking anywhere outside of the image
window.onclick = function (event) {
  if (event.target == document.getElementById('imageModal')) {
    closeModal()
  }
}


// JavaScript for tab switching
document.addEventListener("DOMContentLoaded", function() {
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  // Ensure the first tab content is visible by default
  tabContents[0].style.display = 'block';

  tabButtons.forEach(button => {
      button.addEventListener('click', function() {
          // Remove active class from all buttons
          tabButtons.forEach(btn => btn.classList.remove('active'));

          // Add active class to the clicked button
          this.classList.add('active');

          // Hide all content
          tabContents.forEach(content => content.style.display = 'none');

          // Show the corresponding content
          const tabId = this.getAttribute('data-tab');
          document.getElementById(tabId).style.display = 'block';
      });
  });
});
