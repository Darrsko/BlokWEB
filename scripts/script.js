
// ADD CLASS ON SCROLL
let scrollpos = window.scrollY;
const header = document.querySelector("header nav");
const image_height = document.querySelector("main > section:first-of-type").offsetHeight;

window.addEventListener('scroll', function() { 
  scrollpos = window.scrollY;

// ALS MEER DAN SECTION 1 POSITIE IS GESCROLLED, GEEF CLASS MEE
  if (scrollpos >= image_height) {
    header.classList.add("scrolled");
  }
  else {
      header.classList.remove("scrolled");
  }

})