PluginAPI.require("player");

window.addEventListener("keydown", (event) => {
  if (event.keyCode === 72) { // Key code for 'h'
    PluginAPI.player.motionY += 0.2;
    PluginAPI.updateComponent("player");
  }
});
