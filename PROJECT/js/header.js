document.addEventListener("DOMContentLoaded", () => {
  const loggedInEmail = localStorage.getItem("loggedInUser");
  const accountLink = document.getElementById("accountLink");

  if (!accountLink) return;

  if (loggedInEmail) {
    accountLink.textContent = "Account";
    accountLink.href = "account.html";
  } else {
    accountLink.textContent = "Sign In";
    accountLink.href = "signin.html";
  }
});
