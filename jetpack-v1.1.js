PluginAPI.require("player");
var jetpackActive = false;
window.addEventListener("keydown", (event) => {
  if (event.key.toLowerCase() === "h") {
    jetpackActive = true;
    PluginAPI.player.speedInAir = 0.2;
  }
});
window.addEventListener("keyup", (event) => {
  if (event.key.toLowerCase() === "h") {
    jetpackActive = false;
    PluginAPI.player.speedInAir = 0;
  }
});
PluginAPI.addEventListener("update", ()=>{
if(!jetpackActive){
return;
}
PluginAPI.player.motionY += 0.2;
PluginAPI.updateComponent("player");
});
