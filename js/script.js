

// h1.addEventListener("click", function () {
//   h1.textContent = myName;
//   h1.style.backgroundColor = "red";
//   h1.style.padding = "5rem";
// });

///////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////
// Smooth scrolling animation



///////////////////////////////////////////////////////////

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

/*
.no-flexbox-gap .main-nav-list li:not(:last-child) {
  margin-right: 4.8rem;
}

.no-flexbox-gap .list-item:not(:last-child) {
  margin-bottom: 1.6rem;
}

.no-flexbox-gap .list-icon:not(:last-child) {
  margin-right: 1.6rem;
}

.no-flexbox-gap .delivered-faces {
  margin-right: 1.6rem;
}

.no-flexbox-gap .meal-attribute:not(:last-child) {
  margin-bottom: 2rem;
}

.no-flexbox-gap .meal-icon {
  margin-right: 1.6rem;
}

.no-flexbox-gap .footer-row div:not(:last-child) {
  margin-right: 6.4rem;
}

.no-flexbox-gap .social-links li:not(:last-child) {
  margin-right: 2.4rem;
}

.no-flexbox-gap .footer-nav li:not(:last-child) {
  margin-bottom: 2.4rem;
}

@media (max-width: 75em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 3.2rem;
  }
}

@media (max-width: 59em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 0;
    margin-bottom: 4.8rem;
  }
}
*/
const defaults = {
  spread: 360,
  ticks: 100,
  gravity: 0,
  decay: 0.94,
  startVelocity: 30,
  shapes: ["heart"],
  colors: ["90EE90", "347928", "73EC8B", "00FF9C"],
};

const start = () => {
  // First burst
  confetti({
    ...defaults,
    particleCount: 200,
    scalar: 2,
  });

  // Second burst after a delay
  setTimeout(() => {
    confetti({
      ...defaults,
      particleCount: 25,
      scalar: 3,
    });
  }, 200); // Delay of 200ms

  // Third burst after a longer delay
  setTimeout(() => {
    confetti({
      ...defaults,
      particleCount: 10,
      scalar: 4,
    });
  }, 400); // Delay of 400ms
};

let count = 0; // Counter to track the number of times start has run

const intervalId = setInterval(() => {
  if (count < 3) {
    start(); // Run the confetti effect
    count++; // Increment the count
  } else {
    clearInterval(intervalId); // Stop the interval after 3 runs
  }
}, 1000); // Run every 2 seconds

const duration = 40 * 1000,
  animationEnd = Date.now() + duration;

let skew = 1;

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

(function frame() {
  const timeLeft = animationEnd - Date.now(),
    ticks = Math.max(200, 500 * (timeLeft / duration));

  skew = Math.max(0.8, skew - 0.001);

  confetti({
    particleCount: 1,
    startVelocity: 0,
    ticks: ticks,
    origin: {
      x: Math.random(),
      // since particles fall down, skew start toward the top
      y: Math.random() * skew - 0.2,
    },
    colors: ["#90EE90"],
    shapes: ["heart"],
    gravity: randomInRange(0.4, 0.6),
    scalar: randomInRange(0.8, 3.5), // Increased scalar range for larger particles
    drift: randomInRange(-0.4, 0.4),
  });

  if (timeLeft > 0) {
    requestAnimationFrame(frame);
  }
})();


const colors = ["#FF69B4", "#FFD700", "#ADFF2F", "#00BFFF", "#FF1493", "#C71585"];
const screenWidth = window.innerWidth;

// Function to generate a balloon text element
function createBalloonText() {
  const balloon = document.createElement("div");
  balloon.classList.add("balloon-text");
  balloon.textContent = "Harshini";
  balloon.style.color = colors[Math.floor(Math.random() * colors.length)];
  balloon.style.left = `${Math.random() * screenWidth}px`;
  balloon.style.animationDuration = `${Math.random() * 5 + 5}s`; // Random duration for fall
  balloon.style.fontSize = `${Math.random() * 1 + 1.5}em`; // Random size
  document.body.appendChild(balloon);

  // Remove balloon after animation
  balloon.addEventListener("animationend", () => {
    balloon.remove();
  });
}

// Generate multiple balloon texts
setInterval(createBalloonText, 700)
