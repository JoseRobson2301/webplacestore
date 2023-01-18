const lockBtn = document.getElementById("lockBtn");
const unlockBtn = document.getElementById("unlockBtn");

lockBtn.addEventListener("click", function() {
  lockScreen.classList.add("visible");
});

unlockBtn.addEventListener("click", function() {
  lockScreen.classList.remove("visible");
});
