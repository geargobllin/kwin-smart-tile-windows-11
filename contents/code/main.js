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

var isNotTiled = function () {
  return workspace.activeWindow.tile === null;
}

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
  if(isBottom())
  {
    if(isLeft())
      workspace.slotWindowQuickTileLeft();
    else if(isRight())
      workspace.slotWindowQuickTileRight();
  }
  else if(isVerticallyMaximised())
  {
    if(isLeft())
      workspace.slotWindowQuickTileTopLeft();
    else if(isRight())
      workspace.slotWindowQuickTileTopRight();
  }
  else if(isTop())
    workspace.slotWindowMaximize();
};

var SmartTileDown = function () {
  if(isTop())
  {
    if(isLeft())
      workspace.slotWindowQuickTileLeft();
    else if(isRight())
      workspace.slotWindowQuickTileRight();
  }
  else if(isVerticallyMaximised())
  {
    if(isLeft())
      workspace.slotWindowQuickTileBottomLeft();
    else if(isRight())
      workspace.slotWindowQuickTileBottomRight();
  }
};

var SmartTileLeft = function () {
  if(isNotTiled())
    workspace.slotWindowQuickTileLeft();
  else if(isMaximised())
    workspace.slotWindowQuickTileLeft();
  else if(isRight())
  {
    if(isVerticallyMaximised())
      workspace.slotWindowQuickTileLeft();
    else if(isTop())
      workspace.slotWindowQuickTileTopLeft();
    else if(isBottom())
      workspace.slotWindowQuickTileBottomLeft();
  }
};

var SmartTileRight = function () {
  if(isNotTiled())
    workspace.slotWindowQuickTileRight();
  else if(isMaximised())
    workspace.slotWindowQuickTileRight();
  else if(isLeft())
  {
    if(isVerticallyMaximised())
      workspace.slotWindowQuickTileRight();
    else if(isTop())
      workspace.slotWindowQuickTileTopRight();
    else if(isBottom())
      workspace.slotWindowQuickTileBottomRight();
  }
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