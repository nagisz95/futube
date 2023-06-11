"use strict";

require("regenerator-runtime");
require("dotenv/config");
require("./db");
require("./models/Video");
require("./models/User");
require("./models/Comment");
var _server = _interopRequireDefault(require("./server"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var PORT = 4000;
var handelListening = function handelListening() {
  return console.log("\u2705 Server listening on port http://localhost:".concat(PORT));
};
_server["default"].listen(PORT, handelListening);