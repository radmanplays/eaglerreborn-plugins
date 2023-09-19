PluginAPI.require("player");
PluginAPI.addEventListener("update", () => {
	var mx = PluginAPI.player.x;
	var my = PluginAPI.player.y;
	var mz = PluginAPI.player.z;
	PluginAPI.displayToChat({ msg: "the block under you:" + PluginAPI.constructors.BlockPos(mx, my-1, mz).getBlock() + "." });
});