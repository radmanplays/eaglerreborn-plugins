PluginAPI.require("player");
PluginAPI.addEventListener("update", () => {
  PluginAPI.player.motionY = 0.9; //Default ladder speed
  PluginAPI.updateComponent("player"); //Tell api that player needs updating
  }
});
