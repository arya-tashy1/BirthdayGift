document.addEventListener("DOMContentLoaded", () => {
  // ======== Music Play Button (for index page) ========
  const song = document.getElementById("birthdaySong");
  const playButton = document.getElementById("playButton");
  if (playButton && song) {
    playButton.addEventListener("click", () => {
      song.play();
      playButton.textContent = "Playing... 🎧";
    });
  }

  // ======== Lightbox (for gallery page) ========
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.querySelector(".close");

  if (lightbox && lightboxImg && closeBtn) {
    document.querySelectorAll(".gallery img").forEach(image => {
      image.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImg.src = image.src;
      });
    });

    closeBtn.addEventListener("click", () => {
      lightbox.style.display = "none";
    });

    lightbox.addEventListener("click", e => {
      if (e.target === lightbox) lightbox.style.display = "none";
    });
  }

  // ======== Falling Flowers / Hearts ========
  function createFallingEmoji() {
    const emoji = document.createElement("div");
    emoji.classList.add("falling-emoji");
    const emojis = ["💖", "🌸", "🌹", "💞", "🌷", "💕"];
    emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.style.left = Math.random() * 100 + "vw";
    emoji.style.fontSize = Math.random() * 20 + 30 + "px";
    emoji.style.animationDuration = Math.random() * 3 + 4 + "s";
    document.body.appendChild(emoji);
    setTimeout(() => emoji.remove(), 7000);
  }

  setInterval(createFallingEmoji, 400);
});
