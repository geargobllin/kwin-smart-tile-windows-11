var isLeft = function() {
  tileGeometry = workspace.activeWindow.tile?.relativeGeometry;
  return tileGeometry.x === 0 && tileGeometry.width === 0.5;
};

var isRight = function() {
  tileGeometry = workspace.activeWindow.tile?.relativeGeometry;
  return tileGeometry.x === 0.5 && tileGeometry.width === 0.5;
};

var isTop = function() {
  tileGeometry = workspace.activeWindow.tile?.relativeGeometry;
  return tileGeometry.y === 0 && tileGeometry.height === 0.5;
};

var isBottom = function() {
  tileGeometry = workspace.activeWindow.tile?.relativeGeometry;
  return tileGeometry.y === 0.5 && tileGeometry.height === 0.5;
};

var isHorizontallyMaximised = function () { 
  screenGeometry = workspace.clientArea(
        KWin.PlacementArea,
        workspace.activeScreen,
        workspace.currentDesktop
      );
  clientGeometry = workspace.activeWindow.frameGeometry;

  return clientGeometry.width === screenGeometry.width;
};

var isVerticallyMaximised = function () {
  screenGeometry = workspace.clientArea(
      KWin.PlacementArea,
      workspace.activeScreen,
      workspace.currentDesktop
    );
  clientGeometry = workspace.activeWindow.frameGeometry;
  
  return clientGeometry.height === screenGeometry.height;
};

var isMaximised = function () {
  return  isVerticallyMaximised() && isHorizontallyMaximised();
};

var SmartTileUp = function () {

};

var SmartTileDown = function () {

};

var SmartTileLeft = function () {
  if(isMaximised())
    workspace.slotWindowQuickTileLeft();
  else if(isRight())
  {
    if(isVerticallyMaximised())
      workspace.slotWindowQuickTileLeft();
    else if(isTop())
      workspace.slotWindowQuickTileTopLeft();
    else if(isBottom())
      workspace.slotWindowQuickTileBottomLeft();
    else
      workspace.slotWindowQuickTileLeft();
  }
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