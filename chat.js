PluginAPI.addEventListener("sendchatmessage", function (event) {
  // Access the chat message
  var message = event.message;

  // Modify the chat message
  var modifiedMessage = "hhh " + message + " hhh";

  // Prevent the default action (cancels sending the packet) if needed
  // event.preventDefault();

  // Update the modified message
  event.message = modifiedMessage;
});
