var SmartTileUp = function () {

};

var SmartTileDown = function () {

};

var SmartTileLeft = function () {

};

var SmartTileRight = function () {

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
