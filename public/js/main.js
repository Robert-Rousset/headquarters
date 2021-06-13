const logout = async () => {
  const response = await fetch("/api/users/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert("Failed to log out. YOU MUST NEVER LEAVE");
  }
};

document.querySelector("#logout").addEventListener("click", logout);
document
  .querySelector(".navbar-burger")
  .addEventListener("click", toggleBurger);

function toggleBurger(_event) {
  document.querySelector(".navbar-burger").classList.toggle("is-active");
  document.querySelector(".navbar-menu").classList.toggle("is-active");
}
