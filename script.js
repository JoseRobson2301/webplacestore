const lockScreen = document.getElementById("lockScreen");
const lockBtn = document.getElementById("lockBtn");
const unlockBtn = document.getElementById("unlockBtn");

lockBtn.addEventListener("click", function() {
  lockScreen.classList.remove("hidden");
});

unlockBtn.addEventListener("click", function() {
  lockScreen.classList.add("hidden");
});
