const logDiv = document.getElementById("log");
const stateDiv = document.getElementById("state");
const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");

startBtn.addEventListener("click", () => {
  document.addEventListener("keydown", handleDown);
  document.addEventListener("keydown", handleUp);
  startBtn.disabled = true;
  stopBtn.disabled = false;
});

stopBtn.addEventListener("click", () => {
  document.removeEventListener("keydown", handleDown);
  document.removeEventListener("keydown", handleUp);
  logDiv.textContent = "";
  stateDiv.textContent = " ";
});

function handleDown(e) {
  logDiv.textContent = `key ${e.key} pressed down`;
  stateDiv.textContent = "Key is down";
}

function handleUp(e) {
  logDiv.textContent = `key ${e.key} pressed up`;
  stateDiv.textContent = "Key is up";
}
