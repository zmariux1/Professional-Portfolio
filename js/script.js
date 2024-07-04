// ===================== toggle icon navbar ===================== 
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
}

// ===================== scroll section active link ===================== 
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");
    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove("active");
        document.querySelector("header nav a[href*=" + id + "]").classList.add("active");
      });
    };
  });
  // ===================== Sticky nav bar ===================== 
  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100)

  // ===================== REMOVE taggle Icon & NavBar when clicked NavBar link ===================== 
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active")
};


// ===================== Scroll Reveal ===================== 


ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(".home-img, .services-container, .portfolio-box, contract form", { origin: "bottom" });
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });



// portfolio delay presentation  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 600
});
ScrollReveal().reveal(".contact_trigger1", { origin: "bottom" });


ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 800
});
ScrollReveal().reveal(".contact_trigger2", { origin: "bottom" });


ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 900
});
ScrollReveal().reveal(".contact_trigger3", { origin: "bottom" });






// ===================== typed js ===================== 
const strings = ["what do you sell  ", "how would you describe your clients  ", "what do the clients know about you  "];
const outputElement = document.getElementById('output');
let currentIndex = 0;

function displayWordByLetter() {
  const word = strings[currentIndex];
  let i = 0;
  let intervalId = setInterval(() => {
    const currentLetters = word.slice(0, i + 1);
    outputElement.textContent = currentLetters;
    i++;

    if (i >= word.length) {
      clearInterval(intervalId);
      setTimeout(() => {
        removeWordByLetter(word);
      }, 2000); // Delay of xx second before removing the word
    }
  }, 70); // Delay of xx second between letters
}

function removeWordByLetter(word) {
  let i = word.length;
  let intervalId = setInterval(() => {
    const currentLetters = word.slice(0, i);
    outputElement.textContent = currentLetters;
    i--;

    if (i < 0) {
      clearInterval(intervalId);
      currentIndex++;

      if (currentIndex >= strings.length) {
        currentIndex = 0; // Restart from the beginning if all words are displayed
      }

      setTimeout(() => {
        displayWordByLetter();
      }, 15); // Delay of 1 second before displaying the next word
    }
  }, 30); // Delay of 1 second between letters
}

displayWordByLetter();




// Animate the text after the Read More is clicked inside the Services 
$(document).ready(function() {
  function animateElements(elements, parentBox) {
      let topPosition = 0;
      const interval = setInterval(function() {
          if (!parentBox.is(':hover')) {
              clearInterval(interval);
            } else if (topPosition <= -9999) {
              clearInterval(interval);
          } else {
              topPosition -= 1;
              elements.css('top', topPosition + 'px');
          }
      }, 17); // Adjust the interval speed as needed (in milliseconds)
  }
  
  $('.js_boxTrigger').on('click', function(event) {
      event.preventDefault();
      // Find the closest parent with the class .services-box
      var parentBox = $(this).closest('.services-box');
      // Find all .js_moveMeUp elements within this parent
      var elementsToMoveUp = parentBox.find('.js_moveMeUp');
      
      // Start the animation immediately
      animateElements(elementsToMoveUp, parentBox);

      // Handle mouseenter to resume animation if needed
      parentBox.on('mouseenter', function() {
          animateElements(elementsToMoveUp, parentBox);
      }).on('mouseleave', function() {
        elementsToMoveUp.css('top', '0'); // Reset position if needed
      });
  });
});




// Footer effect over the contacts 
document.addEventListener("DOMContentLoaded", function() {
  const validationHeader = document.querySelector(".validation");
  const contactDetailsList = document.querySelectorAll(".contact_details p");

  validationHeader.addEventListener("mouseover", function() {
      contactDetailsList.forEach(function(contactDetails) {
          contactDetails.classList.add("hovered");
      });
  });

  validationHeader.addEventListener("mouseout", function() {
      contactDetailsList.forEach(function(contactDetails) {
          contactDetails.classList.remove("hovered");
      });
  });
});

// About - 1 detail open at a time 
document.addEventListener('DOMContentLoaded', () => {
  const detailsElements = document.querySelectorAll('.js_seeMore details');

  detailsElements.forEach(detail => {
    detail.addEventListener('toggle', () => {
      if (detail.open) {
        detailsElements.forEach(otherDetail => {
          if (otherDetail !== detail && otherDetail.open) {
            otherDetail.open = false;
          }
        });
      }
    });
  });
});

document.querySelector('.js_btn').addEventListener('click', () => {
  const originalContent = document.querySelector('.js_original');
  const seeMoreContent = document.querySelector('.js_seeMore');
  const aboutBTN = document.querySelector('.js_btn');

  if (originalContent.style.display === 'block' || originalContent.style.display === '') {
    originalContent.style.opacity = '0';
    setTimeout(() => {
      originalContent.style.display = 'none';
      seeMoreContent.style.display = 'block';
      seeMoreContent.style.opacity = '1';
      aboutBTN.textContent = 'Return to Summary'; 
    }, 500); // Wait for 2 seconds before changing the display
  } else {
    seeMoreContent.style.opacity = '0';
    setTimeout(() => {
      seeMoreContent.style.display = 'none';
      originalContent.style.display = 'block';
      originalContent.style.opacity = '1';
      aboutBTN.textContent = 'Read More'; 
    }, 500); // Wait for 2 seconds before changing the display
  }
});