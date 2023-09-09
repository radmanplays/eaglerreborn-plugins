PluginAPI.require("player");

PluginAPI.addEventListener("keydown", (event) => {
  if (event.keyCode === 35) { // Key code for 'h'
    PluginAPI.player.motionY += 0.2;
    PluginAPI.updateComponent("player");
  }
});
