const lockBtn = document.getElementById("lockBtn");
const unlockBtn = document.getElementById("unlockBtn");

lockBtn.addEventListener("click", function() {
  lockScreen.classList.add("visible");
});

unlockBtn.addEventListener("click", function() {
  lockScreen.classList.remove("visible");
});

const lockScreen = document.getElementById("lockScreen");
const body = document.querySelector("body");

lockBtn.addEventListener("click", function() {
  body.appendChild(lockScreen);
  lockScreen.classList.add("visible");
});
