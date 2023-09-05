PluginAPI.require("BlockData");

PluginAPI.addEventListener("update", () => {
  // Get the block under the player's feet
  const blockUnderPlayer = PluginAPI.world.getBlock(PluginAPI.player.x, PluginAPI.player.y - 1, PluginAPI.player.z);

  // Check if the block has slipperiness property
  if (blockUnderPlayer instanceof BlockData) {
    const slipperiness = blockUnderPlayer.slipperiness;

    // Apply slipperiness to player's movement
    PluginAPI.player.motionX *= slipperiness;
    PluginAPI.player.motionZ *= slipperiness;

    // Update the player's motion
    PluginAPI.updateComponent("player");
  }
});
