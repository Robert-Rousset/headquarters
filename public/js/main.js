window.onload = function () {
  let currentpage = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  if (currentpage === "") {
    currentpage = "hq";
  }
  const activeTab = document.querySelector(`#${currentpage}`).parentElement;
  activeTab.classList.add("is-active");
};

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

function toggleBurger(_event) {
  document.querySelector(".navbar-burger").classList.toggle("is-active");
  document.querySelector(".navbar-menu").classList.toggle("is-active");
}

function todo(_event) {
  document.location.replace("/todo");
}

function hq(_event) {
  document.location.replace("/");
}

function timer(_event) {
  document.location.replace("/timer");
}

function inspire(_event) {
  document.location.replace("/inspire");
}

document.querySelector("#hq").addEventListener("click", hq);
document.querySelector("#todo").addEventListener("click", todo);
document.querySelector("#timer").addEventListener("click", timer);
document.querySelector("#inspire").addEventListener("click", inspire);
document.querySelector("#logout").addEventListener("click", logout);
document
  .querySelector(".navbar-burger")
  .addEventListener("click", toggleBurger);
