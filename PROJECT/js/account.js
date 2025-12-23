document.addEventListener("DOMContentLoaded", () => {
  const loggedInEmail = localStorage.getItem("loggedInUser");

  // Block account page if not logged in
  if (!loggedInEmail) {
    window.location.href = "signin.html";
    return;
  }

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const currentUser = users.find(u => u.email === loggedInEmail);

  if (!currentUser) return;

  const username = currentUser.email
    .replace(/@gmail\.com$/i, "")
    .toUpperCase();

  currentUser.name = username;

  document.getElementById("welcomeU").innerText =
    `Welcome back, ${currentUser.name}!`;

  document.getElementById("userName").innerHTML =
    `<strong>Name:</strong> ${currentUser.name}`;

  document.getElementById("userEmail").innerHTML =
    `<strong>Email:</strong> ${currentUser.email}`;

  // Logout button
  const logoutBtn = document.getElementById("logout");
  if (logoutBtn) {
    logoutBtn.onclick = () => {
      localStorage.removeItem("loggedInUser");
      window.location.href = "home.html"; // 👈 go back as guest
    };
  }
});
