// #NAVBAR
window.addEventListener('scroll',function(){
    const navbar=document.querySelector('.navbar');
    if(window.scrollY > 0){
        navbar.classList.add('scrolled');
    }
    else{
        navbar.classList.remove('scrolled');
    }
});

// Toggle dark mode
const toggleSwitch = document.getElementById("modeToggle");
const body = document.body;

// Check local storage for user preference
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
    toggleSwitch.checked = true;
}

// Toggle mode on switch change
toggleSwitch.addEventListener("change", () => {
    body.classList.toggle("dark-mode");

    // Save preference in local storage
    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});


// TRIAL

//HOME
// JavaScript for Typing Animation
  const dynamicText = document.querySelector(".dynamic-text");
  const words = ["Frontend Developer", "UI Designer", "Tech Enthusiast"];
  let wordIndex = 0;
  let letterIndex = 0;
  let isDeleting = false;

  function typeEffect() {
    let currentWord = words[wordIndex];
    let displayedText = isDeleting
      ? currentWord.substring(0, letterIndex--)
      : currentWord.substring(0, letterIndex++);
    
    dynamicText.textContent = displayedText;

    if (!isDeleting && letterIndex === currentWord.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1000);
    } else if (isDeleting && letterIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(typeEffect, 500);
    } else {
      setTimeout(typeEffect, isDeleting ? 50 : 100);
    }
  }

  document.addEventListener("DOMContentLoaded", typeEffect);
