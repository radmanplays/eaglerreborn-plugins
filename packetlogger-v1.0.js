// this plugin logs you packets and stores it in a txt file that you can download by doing .downloadpacket
PluginAPI.addEventListener("event", (ev) => {
  if (
    ev.event.startsWith("sendpacket")
  ) {
    console.log("[packetlogger] "+ev.event)
  }
});
