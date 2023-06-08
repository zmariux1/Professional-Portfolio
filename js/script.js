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
  // reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(".home-img, .services-container, .portfolio-box, contract form", { origin: "bottom" });
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });


// ===================== typed js ===================== 
const strings = ["Web Developer ", "Frontend Dev ", "Backend Dev "];
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
      }, 250); // Delay of 1 second before removing the word
    }
  }, 250); // Delay of 1 second between letters
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
      }, 100); // Delay of 1 second before displaying the next word
    }
  }, 100); // Delay of 1 second between letters
}

displayWordByLetter();
