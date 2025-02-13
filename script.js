// NAVBAR
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
