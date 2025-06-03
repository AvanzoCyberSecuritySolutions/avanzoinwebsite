const contactToggle = document.getElementById("contactToggle");
const contactOptions = document.getElementById("contactOptions");
const helpText = document.getElementById("helpText");
const toggleIcon = document.getElementById("toggleIcon");
let isOpen = false;

contactToggle.addEventListener("click", function () {
    isOpen = !isOpen;

    if (isOpen) {
        // Hide help text
        helpText.classList.remove("opacity-100");
        helpText.classList.add("opacity-0", "pointer-events-none");

        // Show contact options
        contactOptions.classList.remove(
            "opacity-0",
            "translate-y-4",
            "pointer-events-none"
        );
        contactOptions.classList.add(
            "opacity-100",
            "translate-y-0",
            "pointer-events-auto"
        );

        // Rotate icon
        toggleIcon.style.transform = "rotate(45deg)";

        // Change button color
        contactToggle.classList.remove("bg-[#5d1966]");
        contactToggle.classList.add("bg-purple-800", "hover:bg-purple-900");
    } else {
        // Show help text
        helpText.classList.remove("opacity-0", "pointer-events-none");
        helpText.classList.add("opacity-100");

        // Hide contact options
        contactOptions.classList.remove(
            "opacity-100",
            "translate-y-0",
            "pointer-events-auto"
        );
        contactOptions.classList.add(
            "opacity-0",
            "translate-y-4",
            "pointer-events-none"
        );

        // Reset icon rotation
        toggleIcon.style.transform = "rotate(0deg)";

        // Reset button color
        contactToggle.classList.remove("bg-purple-800", "hover:bg-purple-900");
        contactToggle.classList.add("bg-[#5d1966]");
    }
});

// Close contact options when clicking outside
document.addEventListener("click", function (event) {
    if (
        isOpen &&
        !contactToggle.contains(event.target) &&
        !contactOptions.contains(event.target) &&
        !helpText.contains(event.target)
    ) {
        contactToggle.click();
    }
});

// Image Slider Functionality
const slider = document.getElementById('slider');
const dots = document.querySelectorAll('.slider-dot');

let currentSlide = 0;
const totalSlides = dots.length;

function updateSlider() {
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;
  
  // Update dots
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentSlide);
    dot.classList.toggle('bg-white', index === currentSlide);
    dot.classList.toggle('bg-white/50', index !== currentSlide);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateSlider();
}

// Dot navigation
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentSlide = index;
    updateSlider();
  });
});

// Auto slide every 5 seconds
setInterval(nextSlide, 5000);

// Achievement Slider Functionality
const achievementSlider = document.getElementById('achievementSlider');
const achievementDots = document.querySelectorAll('.achievement-dot');
let currentAchievementSlide = 0;
const totalAchievementSlides = 2; 

function updateAchievementSlider() {
  achievementSlider.style.transform = `translateX(-${currentAchievementSlide * 100}%)`;
  
  // Update dots
  achievementDots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentAchievementSlide);
    dot.classList.toggle('bg-white', index === currentAchievementSlide);
    dot.classList.toggle('bg-white/50', index !== currentAchievementSlide);
  });
}

function nextAchievementSlide() {
  currentAchievementSlide = (currentAchievementSlide + 1) % totalAchievementSlides;
  updateAchievementSlider();
}

// Dot navigation for achievements
achievementDots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentAchievementSlide = index;
    updateAchievementSlider();
  });
});

// Auto slide every 3 seconds
setInterval(nextAchievementSlide, 3000);

// Mobile Menu Functionality
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const closeMenuBtn = document.getElementById('closeMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const body = document.body;

function openMobileMenu() {
  mobileMenu.classList.remove('translate-x-full');
  body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeMobileMenu() {
  mobileMenu.classList.add('translate-x-full');
  body.style.overflow = ''; // Restore scrolling
}

mobileMenuBtn.addEventListener('click', openMobileMenu);
closeMenuBtn.addEventListener('click', closeMobileMenu);

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
    closeMobileMenu();
  }
});

// Close menu on window resize if open
window.addEventListener('resize', () => {
  if (window.innerWidth >= 1024) { // lg breakpoint
    closeMobileMenu();
  }
});

// Web3Forms Appointment Form Script
document.getElementById("appointmentForm").addEventListener("submit", async function(event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);
  const formMessage = document.getElementById("appointmentFormMessage");

  formMessage.className = "text-sm mt-2 hidden"; // Hide previous messages

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const result = await response.json();

    if (result.success) {
      formMessage.textContent = "Message sent successfully!";
      formMessage.className = "text-sm mt-2 text-green-500 text-center";
      form.reset();
    } else {
      console.error("Web3Forms error:", result);
      formMessage.textContent = "Failed to send message. " + (result.message || "Please try again.");
      formMessage.className = "text-sm mt-2 text-red-500 text-center";
    }
  } catch (error) {
    console.error("Submission error:", error);
    formMessage.textContent = "An error occurred. Please try again later.";
    formMessage.className = "text-sm mt-2 text-red-500 text-center";
  }
});

// Web3Forms Contact Form Script
document.getElementById("contactForm").addEventListener("submit", async function (event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);
  const formMessage = document.getElementById("contactFormMessage");

  formMessage.className = "text-sm mt-2 hidden"; // Hide previous messages

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    if (result.success) {
      formMessage.textContent = "Message sent successfully!";
      formMessage.className = "text-sm mt-2 text-green-500 text-center";
      form.reset();
    } else {
      console.error("Web3Forms error:", result);
      formMessage.textContent =
        "Failed to send message. " + (result.message || "Please try again.");
      formMessage.className = "text-sm mt-2 text-red-500 text-center";
    }
  } catch (error) {
    console.error("Submission error:", error);
    formMessage.textContent =
      "An error occurred. Please try again later.";
    formMessage.className = "text-sm mt-2 text-red-500 text-center";
  }
});

// Web3Forms Newsletter Form Script
document.getElementById("newsletterForm").addEventListener("submit", async function (event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);
  const formMessage = document.getElementById("newsletterFormMessage");

  formMessage.className = "text-sm mt-2 hidden"; // Hide previous messages

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    if (result.success) {
      formMessage.textContent = "Subscription successful!";
      formMessage.className = "text-sm mt-2 text-green-500 text-center";
      form.reset();
    } else {
      console.error("Web3Forms error:", result);
      formMessage.textContent = "Failed to subscribe. " + (result.message || "Please try again.");
      formMessage.className = "text-sm mt-2 text-red-500 text-center";
    }
  } catch (error) {
    console.error("Submission error:", error);
    formMessage.textContent = "An error occurred. Please try again later.";
    formMessage.className = "text-sm mt-2 text-red-500 text-center";
  }
});