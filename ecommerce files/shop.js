document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("menBtn").addEventListener("click", () => {
      document.body.classList.add("fade-out");
      setTimeout(() => window.location.href = "men.html", 500);
  });

  document.getElementById("womenBtn").addEventListener("click", () => {
      document.body.classList.add("fade-out");
      setTimeout(() => window.location.href = "women.html", 500);
  });
});
