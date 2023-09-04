PluginAPI.require("player");
PluginAPI.addEventListener("update", () => {
  PluginAPI.player.speedOnGround = 2; // Set the player's ground speed to 2
  PluginAPI.updateComponent("player");
});
