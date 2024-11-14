var scrollingCardCheck = document.getElementById('scrolling-card-check')
var cardHeight = scrollingCardCheck.offsetHeight // Get card height
var maxScrollHeight = 1170
 // Set the maximum scroll height to 1333px

function moveCard () {
  var scrollY = window.scrollY // Get the Y offset of the page scroll
  var cardTopPosition = scrollY + 275 // Calculate new top position based on scroll

  // Ensure the card doesn't scroll past maxScrollHeight
  if (cardTopPosition + cardHeight <= maxScrollHeight) {
    scrollingCardCheck.style.top = cardTopPosition + 'px' // Move the card smoothly
    scrollingCardCheck.classList.remove('fixed') // Remove fixed class
  } else {
    scrollingCardCheck.style.top = maxScrollHeight - cardHeight + 'px' // Limit the card's position
    scrollingCardCheck.classList.add('fixed') // Add fixed class when limit is reached
  }
}


// Get required elements
// const scrollingCardCheck = document.getElementById('scrolling-card-check')
// const leftColumn = document.querySelector('.column-left.check-bookings')

// function moveCard () {
//   const scrollY = window.scrollY
//   const leftColumnBottom = leftColumn.offsetTop + leftColumn.offsetHeight
//   const cardHeight = scrollingCardCheck.offsetHeight

//   // Start fixing position after scrolling past initial position
//   if (scrollY > 275) {
//     scrollingCardCheck.style.position = 'fixed'
//     scrollingCardCheck.style.top = '20px' // Give some space from top

//     // Check if we need to stop the card at the bottom of left column
//     const cardBottom = scrollY + cardHeight + 20 // 20px is the top spacing
//     if (cardBottom > leftColumnBottom) {
//       // Switch to absolute positioning at the bottom
//       scrollingCardCheck.style.position = 'absolute'
//       scrollingCardCheck.style.top = leftColumnBottom - cardHeight + 'px'
//     }
//   } else {
//     // Reset to original position if scrolled to top
//     scrollingCardCheck.style.position = 'static'
//   }
// }

// // Add event listeners
// window.addEventListener('scroll', moveCard)
// window.addEventListener('resize', moveCard)

// // Initial position setup
// moveCard()
