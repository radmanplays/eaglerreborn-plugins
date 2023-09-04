PluginAPI.require("player");

PluginAPI.addEventListener("key", (event) => {
  if (event.key === 35) { // Key code for 'h'
    PluginAPI.player.motionY += 0.2;
    PluginAPI.updateComponent("player");
  }
});
