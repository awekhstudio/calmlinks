(function () {
  "use strict";

  var year = document.querySelector("[data-current-year]");
  var copyButton = document.querySelector("[data-copy-email]");
  var copyStatus = document.querySelector(".copy-status");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  if (!copyButton || !copyStatus) return;

  copyButton.addEventListener("click", function () {
    var email = copyButton.getAttribute("data-copy-email");

    if (!navigator.clipboard || !email) {
      window.location.href = "mailto:" + email;
      return;
    }

    navigator.clipboard.writeText(email).then(function () {
      copyStatus.textContent = "Email copied: " + email;
    }).catch(function () {
      window.location.href = "mailto:" + email;
    });
  });
}());
