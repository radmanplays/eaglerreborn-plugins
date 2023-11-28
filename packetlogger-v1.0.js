// this plugin logs you packets and stores it in a txt file that you can download by doing .downloadpackets
var date = new Date()
var properties
PluginAPI.addEventListener("event", (ev) => {
  if (ev.event.startsWith("sendpacket")) {
    date = new Date()
    properties = ev.data
    console.log("[packetsent]["+ date +"] "+ev.event+ " with properties: " + properties)
  }
});
