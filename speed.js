PluginAPI.require("player");
PluginAPI.addEventListener("update", () => {
  PluginAPI.player.speedOnGround = 2; // Set the player's ground speed to 2
  PluginAPI.player.speedInAir = 2; // Set the player's speed in the air to 2
  PluginAPI.updateComponent("player");
});
