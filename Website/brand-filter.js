document.addEventListener("DOMContentLoaded", function () {
  // Filter buttons
  document.querySelectorAll(".filter-btn").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      const selectedLetter = button.getAttribute("data-letter");
      const brands = document.querySelectorAll(".brand-list li");

      brands.forEach((brand) => {
        const brandLetter = brand.getAttribute("data-brand");
        brand.style.display = selectedLetter === "all" || brandLetter === selectedLetter ? "block" : "none";
      });
    });
  });

  // Counter animatie
  const counters = document.querySelectorAll(".number");
  if (counters.length > 0) {
    const formatNumber = (number) => "+" + Math.floor(number).toLocaleString("nl-NL");

    const animateCount = (el) => {
      const target = parseInt(el.getAttribute("data-target"), 10);
      let current = 0;
      const duration = 2000;
      const steps = 60;
      const increment = target / steps;
      const intervalTime = duration / steps;

      const update = () => {
        current += increment;
        if (current < target) {
          el.innerText = formatNumber(current);
          setTimeout(update, intervalTime);
        } else {
          el.innerText = formatNumber(target);
        }
      };
      update();
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach((counter) => observer.observe(counter));
  }

  // Horizontaal scrollen + drag/swipe
  const container = document.querySelector(".scroll-container");
  const btnPrev = document.querySelector(".scroll-prev");
  const btnNext = document.querySelector(".scroll-next");

  if (container && btnPrev && btnNext) {
    btnPrev.addEventListener("click", () => {
      container.scrollBy({ left: -container.clientWidth, behavior: "smooth" });
    });

    btnNext.addEventListener("click", () => {
      container.scrollBy({ left: container.clientWidth, behavior: "smooth" });
    });

    function updateButtons() {
      const scrollLeft = container.scrollLeft;
      const maxScrollLeft = container.scrollWidth - container.clientWidth;
      btnPrev.style.display = scrollLeft > 0 ? "block" : "none";
      btnNext.style.display = scrollLeft < maxScrollLeft - 1 ? "block" : "none";
    }

    container.addEventListener("scroll", updateButtons);
    setTimeout(updateButtons, 100);

    // Drag / Swipe support
    let isDown = false;
    let startX;
    let scrollLeftStart;

    container.addEventListener("mousedown", (e) => {
      isDown = true;
      container.classList.add("dragging");
      startX = e.pageX - container.offsetLeft;
      scrollLeftStart = container.scrollLeft;
    });

    container.addEventListener("mouseleave", () => {
      isDown = false;
      container.classList.remove("dragging");
    });

    container.addEventListener("mouseup", () => {
      isDown = false;
      container.classList.remove("dragging");
    });

    container.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 1.5;
      container.scrollLeft = scrollLeftStart - walk;
    });

    container.addEventListener("touchstart", (e) => {
      startX = e.touches[0].pageX;
      scrollLeftStart = container.scrollLeft;
    });

    container.addEventListener("touchmove", (e) => {
      const x = e.touches[0].pageX;
      const walk = (x - startX) * 1.5;
      container.scrollLeft = scrollLeftStart - walk;
    });
  }
});
