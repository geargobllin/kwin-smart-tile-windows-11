var isMaximised = function () {
  screenGeometry = workspace.clientArea(
      KWin.PlacementArea,
      workspace.activeScreen,
      workspace.currentDesktop
    );
  clientGeometry = workspace.activeWindow.frameGeometry;
  return  clientGeometry.height === screenGeometry.height && clientGeometry.width === screenGeometry.width;
};

var SmartTileUp = function () {

};

var SmartTileDown = function () {

};

var SmartTileLeft = function () {
  if(isMaximised())
    workspace.slotWindowQuickTileLeft();
};

var SmartTileRight = function () {
  if(isMaximised())
    workspace.slotWindowQuickTileRight();
};

var HelloWorld = function () {
    console.info("Hello world");
};

var shortcutPrefix = "Smart Tile ";
registerShortcut(
  shortcutPrefix + "Up",
  shortcutPrefix + "Up",
  "Meta+Up",
  SmartTileUp
);
registerShortcut(
  shortcutPrefix + "Down",
  shortcutPrefix + "Down",
  "Meta+Down",
  SmartTileDown
);
registerShortcut(
  shortcutPrefix + "Left",
  shortcutPrefix + "Left",
  "Meta+Left",
  SmartTileLeft
);
registerShortcut(
  shortcutPrefix + "Right",
  shortcutPrefix + "Right",
  "Meta+Right",
  SmartTileRight
);

registerShortcut(
    shortcutPrefix + "Hello World!",
    shortcutPrefix + "Hello World!",
    "Meta + A",
    HelloWorld
);