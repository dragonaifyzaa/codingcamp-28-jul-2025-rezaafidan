console.log("Script loaded successfully!");

// Smooth scroll handling
document.addEventListener('DOMContentLoaded', () => {
    // Get all navigation links
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                    inline: 'nearest'
                });
            }
        });
    });
});

welcomeMessage();

function validateForm() {
    const nameinput = document.getElementById("name");

    console.log(nameinput.value);
    if (nameinput.value === "") {
        alert("Please fill the form.");
    
    }
    else {
        const result = document.getElementById("result-form");
        result.textContent = `Thank you for your message, ${nameinput.value}! We will get back to you soon.`;
    }
}

function welcomeMessage() {
    const popup = prompt("Please enter your name:");
    if (popup) {    
        const welcomeUsername = document.getElementById("welcome-username");
        welcomeUsername.textContent = popup;
    }
}