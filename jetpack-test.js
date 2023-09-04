let uiVisible = false;
let jetpackKey = 'h';

function createUI() {
  const uiContainer = document.createElement('div');
  uiContainer.style.position = 'fixed';
  uiContainer.style.top = '10px';
  uiContainer.style.right = '10px';
  uiContainer.style.padding = '10px';
  uiContainer.style.backgroundColor = 'white';
  uiContainer.style.border = '1px solid black';

  const changeKeybindButton = document.createElement('button');
  changeKeybindButton.innerText = 'Change Jetpack Keybind';
  changeKeybindButton.addEventListener('click', () => {
    const newKey = prompt('Choose keybind (1 character only)');
    if (newKey && newKey.length === 1) {
      jetpackKey = newKey;
    } else if (newKey && newKey.length > 1) {
      alert('1 CHARACTER ONLY');
    }
  });

  uiContainer.appendChild(changeKeybindButton);
  document.body.appendChild(uiContainer);
}

PluginAPI.addEventListener('key', (event) => {
  if (event.key === 16) { // Key code for right Shift
    if (!uiVisible) {
      createUI();
      uiVisible = true;
    } else {
      const uiContainer = document.querySelector('div');
      uiContainer.remove();
      uiVisible = false;
    }
  }

  if (event.key === jetpackKey.charCodeAt(0)) {
    PluginAPI.player.motionY += 0.5;
    PluginAPI.updateComponent('player');
  }
});
