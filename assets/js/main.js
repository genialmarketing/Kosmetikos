document.addEventListener("DOMContentLoaded", function () {
  var header = document.querySelector(".site-header");
  var toggle = document.querySelector(".nav-toggle");

  if (toggle && header) {
    toggle.addEventListener("click", function () {
      var isOpen = header.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }

  var modalBackdrop = document.querySelector(".team-modal-backdrop");
  if (modalBackdrop) {
    var modalPhoto = modalBackdrop.querySelector(".team-modal__photo img");
    var modalName = modalBackdrop.querySelector(".team-modal__name");
    var modalRole = modalBackdrop.querySelector(".team-modal__role");
    var modalBody = modalBackdrop.querySelector(".team-modal__body");
    var modalCloseBtn = modalBackdrop.querySelector(".team-modal__close");
    var lastTrigger = null;

    var openModal = function (trigger) {
      var card = trigger.closest(".team-card");
      var bio = card.querySelector(".team-bio");
      if (!bio) return;
      var img = card.querySelector(".team-card__portrait img");
      var name = card.querySelector("h3");
      var role = card.querySelector(".role");

      lastTrigger = trigger;
      modalPhoto.src = img ? img.src : "";
      modalPhoto.alt = img ? img.alt : "";
      modalName.textContent = name ? name.textContent : "";
      modalRole.textContent = role ? role.textContent : "";
      modalBody.innerHTML = bio.innerHTML;
      modalBackdrop.classList.add("open");
      document.body.style.overflow = "hidden";
      modalCloseBtn.focus();
    };

    var closeModal = function () {
      modalBackdrop.classList.remove("open");
      document.body.style.overflow = "";
      if (lastTrigger) lastTrigger.focus();
    };

    document.querySelectorAll(".team-card__more").forEach(function (btn) {
      btn.addEventListener("click", function () { openModal(btn); });
    });

    document.querySelectorAll(".team-card__portrait").forEach(function (portrait) {
      var card = portrait.closest(".team-card");
      if (!card.querySelector(".team-bio")) return;
      portrait.classList.add("has-bio");
      portrait.setAttribute("role", "button");
      portrait.setAttribute("tabindex", "0");
      portrait.setAttribute("aria-haspopup", "dialog");
      portrait.addEventListener("click", function () { openModal(portrait); });
      portrait.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openModal(portrait);
        }
      });
    });

    modalCloseBtn.addEventListener("click", closeModal);
    modalBackdrop.addEventListener("click", function (e) {
      if (e.target === modalBackdrop) closeModal();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && modalBackdrop.classList.contains("open")) closeModal();
    });
  }
});
