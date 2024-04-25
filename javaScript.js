const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const emailInput = document.querySelector(".email-input");
  const emailError = document.querySelector("#error-message");
  const confirmMessage = document.querySelector(".confirm");
  const illustration = document.querySelector(".illustration");
  const content = document.querySelector(".content");
  validateEmail(emailInput, emailError, confirmMessage, illustration, content);
});

function validateEmail(
  emailInput,
  emailError,
  confirmMessage,
  illustration,
  content
) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailInput.value.trim() === "" || !emailInput.value.match(pattern)) {
    event.preventDefault();
    emailError.style.display = "block";
    emailInput.classList.add("error");
  } else {
    emailInput.classList.remove("error");
    confirmMessage.style.display = "block";
    illustration.style.display = "none";
    content.style.display = "none";
  }
}
