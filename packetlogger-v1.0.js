// this plugin logs you packets and stores it in a txt file that you can download by doing .downloadpackets
// NOT COMPLETE
var date = new Date()
var properties
PluginAPI.addEventListener("event", (ev) => {
  if (ev.event.startsWith("sendpacket")) {
    date = new Date()
    data = ev.data
    switch (ev.event) {
        case "sendpacketanimation":
          properties = "null";
          break;
        case "sendpacketentityaction":
          properties = "entityId: " + data.entityID + ", action: " + data.action + ", auxData: " + data.auxData;
          break;
        case "sendpacketinput":
          properties = "strafeSpeed: " + data.strafeSpeed + ", forwardSpeed: " + data.forwardSpeed + ", jumping: " + data.jumping + ", sneaking: " + data.sneaking;
          break;
        case "sendpacketclosewindow":
          properties = "null";
          break;
        case "sendpacketclickwindow":
          properties = "windowId: " + data.windowId + ", slotId: " + data.slotId + ", usedButton: " + data.usedButton + ", mode: " + data.mode + ", clickedItemRef: " + (data.clickedItem ? data.clickedItem.getRef() : "{}") + ", actionNumber: " + data.actionNumber;
          break;
        case "sendpacketconfirmtransaction":
          properties = "windowId: " + data.windowId + ", uid: " + data.uid + ", accepted: " + data.accepted;
          break;
        case "sendpacketchatmessage":
          properties = "messageIn: " + data.message;
          break;
        case "sendpacketuseentity":
          properties = "entityId: " + data.entityId + ", action: " + data.action;
          break;
        case "sendpacketplayerposition":
          properties = "posX: " + data.x + ", posY: " + data.y + ", posZ: " + data.z + ", isOnGround: " + data.onGround;
          break;
        case "sendpacketplayerlook":
          properties = "playerYaw: " + data.yaw + ", playerPitch: " + data.pitch + ", isOnGround: " + data.onGround;
          break;
        case "sendpacketplayerposlook":
          properties = "playerX: " + data.x + ", playerY: " + data.y + ", playerZ: " + data.z + ", playerYaw: " + data.yaw + ", playerPitch: " + data.pitch + ", isOnGround: " + data.onGround;
          break;
        case "sendpacketplayer":
          properties = "isOnGround: " + data.onGround;
          break;
        case "sendpacketplayerdigging":
          properties = "pos: " + data.position + ", facing: " + data.facing + ", action: " + data.status;
          break;
        case "sendpacketplayerblockplacement":
          properties = "stackRef: " + data.stack.getRef() + ", posRef: " + data.position.getRef() + ", placedBlockDirectionIn: " + data.placedBlockDirection + ", facingXIn: " + data.facingX + ", facingYIn: " + data.facingY + ", facingZIn: " + data.facingZ;
          break;
        case "sendpackethelditemchange":
          properties = "slotId: " + data.slotId;
          break;
        case "sendpacketcreativeinventoryaction":
          properties = "slotId: " + data.slotId + ", stackRef: " + data.stack.getRef();
          break;
        case "sendpacketenchantitem":
          properties = "windowId: " + data.windowId + ", button: " + data.button;
          break;
        case "sendpacketupdatesign":
          properties = "pos: " + data.pos + ", lines: " + data.lines;
          break;
        case "sendpacketplayerabilities":
          properties = "capabilitiesRef: " + PluginAPI.player.capabilities.getRef();
          break;
        case "sendpackettabcomplete":
          properties = "msg: " + data.message + ", target: " + data.targetBlock;
          break;
        case "sendpacketclientsettings":
          properties = "lang: " + data.lang + ", view: " + data.view + ", chatVisibility: " + data.chatVisibility + ", enableColors: " + data.enableColors + ", modelPartFlags: " + data.modelPartFlags;
          break;
        case "sendpacketclientstatus":
          properties = "status: " + data.status;
          break;
        case "sendpacketspectate":
          properties = "uuid: " + data.id;
          break;
        case "sendpacketresourcepackstatus":
          properties = "hash: " + data.hash + ", status: " + data.status;
          break;
        default:
          properties = "null";
          break;
      }      
    if (properties !== null){
        console.log("[packetsent]["+ date +"] "+ev.event+ " properties= " + properties)
    } else {
        console.log("[packetsent]["+ date +"] "+ev.event)
    }
  }
});
