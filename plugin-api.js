const version = PluginAPI.version;

PluginAPI.addEventListener("sendchatmessage", function(event) {
  if (event.message === "/pluginapi version") {
    PluginAPI.displayToChat({ msg: "you are currently using the " + version + " version of plugin api." });
    event.preventDefault = true;
  }
  if (event.message === "/pluginapi") {
    PluginAPI.displayToChat({ msg: "plugin api is working!" });
    event.preventDefault = true;
  }
  if (event.message === "/pluginapi plugins") {
    PluginAPI.displayToChat({ msg: "Plugins (1): Plugin API" });
    event.preventDefault = true;
  }
});