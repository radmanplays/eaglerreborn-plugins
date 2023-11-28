// this plugin logs you packets and stores it in a txt file that you can download by doing .downloadpackets
// NOT COMPLETE
var date = new Date()
var properties
PluginAPI.addEventListener("event", (ev) => {
  if (ev.event.startsWith("sendpacket")) {
    date = new Date()
    properties = ev.event
    switch (ev.event) {
      case "sendpacketanimation":
        properties = null
        break;
      case "sendpacketentityaction":
        properties = "entityId: "+data.entityID+", action: "+data.action+", auxData: "+data.auxData+""
        break;
      case "sendpacketinput":
        properties = "strafeSpeed: "+data.strafeSpeed+", forwardSpeed: "+data.forwardSpeed+", jumping: "+data.jumping+", sneaking: "+data.sneaking+""
        break;
      case "sendpacketclosewindow":
        properties = null
        break;
      case "sendpacketclickwindow":
        PluginAPI.network.sendPacketClickWindow({
          windowId: data.windowId,
          slotId: data.slotId,
          usedButton: data.usedButton,
          mode: data.mode,
          clickedItemRef: data.clickedItem ? data.clickedItem.getRef() : {},
          actionNumber: data.actionNumber,
        });
        break;
      case "sendpacketconfirmtransaction":
        PluginAPI.network.sendPacketConfirmTransaction({
          windowId: data.windowId,
          uid: data.uid,
          accepted: data.accepted,
        });
        break;
      case "sendpacketchatmessage":
        PluginAPI.network.sendPacketConfirmTransaction({
          messageIn: data.message,
        });
        break;
      case "sendpacketuseentity":
        PluginAPI.network.sendPacketUseEntity({
          entityId: data.entityId,
          action: data.action,
        });
        break;
      case "sendpacketplayerposition":
        PluginAPI.network.sendPacketPlayerPosition({
          posX: data.x,
          posY: data.y,
          posZ: data.z,
          isOnGround: data.onGround,
        });
      case "sendpacketplayerlook":
        PluginAPI.network.sendPacketPlayerLook({
          playerYaw: data.yaw,
          playerPitch: data.pitch,
          isOnGround: data.onGround,
        });
        break;
      case "sendpacketplayerposlook":
        PluginAPI.network.sendPacketPlayerPosLook({
          playerX: data.x,
          playerY: data.y,
          playerZ: data.z,
          playerYaw: data.yaw,
          playerPitch: data.pitch,
          isOnGround: data.onGround,
        });
      case "sendpacketplayer":
        PluginAPI.network.sendPacketPlayer({
          isOnGround: data.onGround,
        });
        break;
      case "sendpacketplayerdigging":
        PluginAPI.network.sendPacketPlayerDigging({
          pos: data.position,
          facing: data.facing,
          action: data.status,
        });
        break;
      case "sendpacketplayerblockplacement":
        PluginAPI.network.sendPacketPlayerBlockPlacement({
          stackRef: data.stack.getRef(),
          posRef: data.position.getRef(),
          placedBlockDirectionIn: data.placedBlockDirection,
          facingXIn: data.facingX,
          facingYIn: data.facingY,
          facingZIn: data.facingZ,
        });
        break;
      case "sendpackethelditemchange":
        PluginAPI.network.sendPacketHeldItemChange({
          slotId: data.slotId,
        });
        break;
      case "sendpacketcreativeinventoryaction":
        PluginAPI.network.sendPacketCreativeInventoryAction({
          slotId: data.slotId,
          stackRef: data.stack.getRef(),
        });
        break;
      case "sendpacketenchantitem":
        PluginAPI.network.sendPacketEnchantItem({
          windowId: data.windowId,
          button: data.button,
        });
        break;
      case "sendpacketupdatesign":
        PluginAPI.network.sendPacketUpdateSign({
          pos: data.pos,
          lines: data.lines,
        });
        break;
      case "sendpacketplayerabilities":
        PluginAPI.network.sendPacketPlayerAbilities({
          capabilitiesRef: PluginAPI.player.capabilities.getRef(),
        });
        break;
      case "sendpackettabcomplete":
        PluginAPI.network.sendPacketTabComplete({
          msg: data.message,
          target: data.targetBlock,
        });
        break;
      case "sendpacketclientsettings":
        PluginAPI.network.sendPacketClientSettings({
          lang: data.lang,
          view: data.view,
          chatVisibility: data.chatVisibility,
          enableColors: data.enableColors,
          modelPartFlags: data.modelPartFlags,
        });
        break;
      case "sendpacketclientstatus":
        PluginAPI.network.sendPacketClientStatus({
          status: data.status,
        });
        break;
      case "sendpacketspectate":
        PluginAPI.network.sendPacketSpectate({
          uuid: data.id,
        });
        break;
      case "sendpacketresourcepackstatus":
        PluginAPI.network.sendPacketResourcePackStatus({
          hash: data.hash,
          status: data.status,
        });
        break;
      default:
        break;
    }
    if (properties !== null){
        console.log("[packetsent]["+ date +"] "+ev.event+ " properties= " + properties)
    } else {
        console.log("[packetsent]["+ date +"] "+ev.event)
    }
  }
});
