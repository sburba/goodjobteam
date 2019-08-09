window.addEventListener("beforeinstallprompt", async e => {
  if (
    document.readyState === "complete" ||
    document.readyState === "loaded" ||
    document.readyState === "interactive"
  ) {
    await revealAddToHomescreenBtn(e);
  } else {
    window.addEventListener("DOMContentLoaded", revealAddToHomescreenBtn);
  }
});

async function revealAddToHomescreenBtn(beforeInstallPromptEvent) {
  beforeInstallPromptEvent.preventDefault();
  let addToHomescreenBtn = document.getElementById("add-to-homescreen");
  addToHomescreenBtn.classList.remove("hidden");
  addToHomescreenBtn.addEventListener('click', async () => {
    addToHomescreenBtn.classList.add('hidden');
    beforeInstallPromptEvent.prompt();
  })
}
