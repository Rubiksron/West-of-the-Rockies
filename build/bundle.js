/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\n__webpack_require__(1);\n\nvar angular = __webpack_require__(5);\n\nangular.module('ngAdventure', []);\n\n__webpack_require__(7);\n__webpack_require__(8);\n\n__webpack_require__(9);\n__webpack_require__(11);\n__webpack_require__(13);\n\n//////////////////\n// WEBPACK FOOTER\n// ./app/entry.js\n// module id = 0\n// module chunks = 0\n//# sourceURL=webpack:///./app/entry.js?");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	eval("// removed by extract-text-webpack-plugin\n\n//////////////////\n// WEBPACK FOOTER\n// ./app/scss/main.scss\n// module id = 1\n// module chunks = 0\n//# sourceURL=webpack:///./app/scss/main.scss?");

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	eval("__webpack_require__(6);\nmodule.exports = angular;\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./~/angular/index.js\n// module id = 5\n// module chunks = 0\n//# sourceURL=webpack:///./~/angular/index.js?");

/***/ }),
/* 6 */
/***/ (function(module, exports) {


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar angular = __webpack_require__(5);\nvar ngAdventure = angular.module('ngAdventure');\n\nngAdventure.factory('mapService', ['$log', mapService]);\n\nfunction mapService($log) {\n  $log.debug('map service');\n\n  var service = {};\n\n  service.mapData = {\n    Washington: {\n      desc: \"You are in the Evergreen State, visit Seattle The Emerald City\",\n      east: \"NorthernIdaho\",\n      south: \"Oregon\"\n    },\n    Oregon: {\n      desc: \"Welcome to the Beaver State, visit Portland The City of Roses.\",\n      north: \"Washington\",\n      east: \"SouthernIdaho\",\n      south: \"NorthernCalifornia\"\n    },\n    NorthernIdaho: {\n      desc: \"You are in Northern Idaho, enjoy the Rockies.\",\n      east: \"Montana\",\n      south: \"SouthernIdaho\",\n      west: \"Washington\"\n    },\n    Montana: {\n      desc: \"Welcome to Montana, you are in Big Sky Country.\",\n      south: \"Wyoming\",\n      west: \"NorthernIdaho\"\n    },\n    SouthernIdaho: {\n      desc: \"You are in Southern Idaho, visit the capital city of Boise.\",\n      east: \"Wyoming\",\n      south: \"Nevada\",\n      north: \"SouthernIdaho\"\n    },\n    Wyoming: {\n      desc: \"Welcome to Wyoming, see the Tetons.\",\n      south: \"Colorado\",\n      north: \"Montana\",\n      west: \"SouthernIdaho\"\n    },\n    NorthernCalifornia: {\n      desc: \"Welcome to the Sunshine State.\",\n      east: \"Nevada\",\n      north: \"Oregon\",\n      south: \"SouthernCalifornia\"\n    },\n    Nevada: {\n      desc: \"Welcome to Nevada, remember what happens in Vegas stays in Vegas\",\n      west: \"NorthernCalifornia\",\n      south: \"SouthernCalifornia\",\n      east: \"Utah\",\n      north: \"Oregon\"\n    },\n    SouthernCalifornia: {\n      desc: \"Welocome to Southern California, enjoy the beaches.\",\n      east: \"Arizona\",\n      north: \"NorthernCalifornia\"\n    },\n    Arizona: {\n      desc: \"Welcome to Arizona, our Universities are okay.\",\n      east: \"NewMexico\",\n      north: \"Utah\",\n      west: \"SouthernCalifornia\"\n    },\n    Utah: {\n      desc: \"Welcome to Utah, the Beehive State.\",\n      south: \"Arizona\",\n      north: \"SouthernIdaho\",\n      west: \"Nevada\",\n      east: \"Colorado\"\n    },\n    NewMexico: {\n      desc: \"Welcome to New Mexico the land of enchantment\",\n      north: \"Colorado\",\n      west: \"Arizona\"\n    },\n    Colorado: {\n      desc: \"Welcome to Colorado, The Centennial State. You have reached the highest point in the Rockies, Congratulations! Mount Elbert is 14,440 feet tall, enjoy the view.\",\n      south: \"NewMexico\",\n      north: \"Wyoming\",\n      west: \"Utah\"\n    }\n  };\n\n  return service;\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./app/service/map-service.js\n// module id = 7\n// module chunks = 0\n//# sourceURL=webpack:///./app/service/map-service.js?");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar angular = __webpack_require__(5);\nvar ngAdventure = angular.module('ngAdventure');\n\nngAdventure.factory('playerService', ['$q', '$log', 'mapService', playerService]);\n\nfunction playerService($q, $log, mapService) {\n  $log.debug('player service');\n\n  var service = {};\n\n  var turn = 0;\n  var player = service.player = {\n    name: 'Wanderer',\n    location: 'Washington',\n    hp: 100\n  };\n\n  var history = service.history = [{\n    turn: turn,\n    desc: 'West of The Rockies',\n    location: 'Washington',\n    hp: player.hp\n  }];\n\n  service.movePlayer = function (direction) {\n    return new $q(function (resolve, reject) {\n      turn++;\n\n      var current = player.location;\n      var newLocation = mapService.mapData[current][direction];\n\n      if (!newLocation) {\n        history.unshift({\n          turn: turn,\n          desc: 'There is no path this direction.',\n          location: player.location,\n          hp: player.hp\n        });\n        return reject('no room in that direction');\n      };\n\n      history.unshift({\n        turn: turn,\n        location: player.location,\n        desc: mapService.mapData[newLocation].desc,\n        hp: player.hp\n      });\n\n      player.location = newLocation;\n      return resolve(player.location);\n    });\n  };\n\n  return service;\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./app/service/player-service.js\n// module id = 8\n// module chunks = 0\n//# sourceURL=webpack:///./app/service/player-service.js?");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar angular = __webpack_require__(5);\nvar ngAdventure = angular.module('ngAdventure');\n\nngAdventure.component('gamePad', {\n  template: __webpack_require__(10),\n  controller: 'GamePadController',\n  controllerAs: 'gamePadCtrl'\n});\n\nngAdventure.controller('GamePadController', ['$log', 'playerService', GamePadController]);\n\nfunction GamePadController($log, playerService) {\n  $log.debug('GamePadController');\n\n  this.directions = ['north', 'south', 'east', 'west'];\n  this.moveDirection = this.directions[0];\n\n  this.movePlayer = function () {\n    playerService.movePlayer(this.moveDirection).then(function (location) {\n      $log.log('player currently at: ' + location);\n    }).catch(function (err) {\n      $log.error(err);\n    });\n  };\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./app/component/game-pad/game-pad.js\n// module id = 9\n// module chunks = 0\n//# sourceURL=webpack:///./app/component/game-pad/game-pad.js?");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	eval("module.exports = \"<section class=\\\"gamepad\\\">\\n  <form name=\\\"gamepad\\\" novalidate class=\\\"flex-container\\\">\\n    <label for=\\\"direction\\\">Choose Which Direction to Travel:</label>\\n    <select ng-model=\\\"gamePadCtrl.moveDirection\\\">\\n      <option ng-repeat=\\\"direction in gamePadCtrl.directions\\\" value=\\\"{{ direction }}\\\">\\n      {{ direction }}\\n      </option>\\n    </select>\\n    <button type=\\\"button\\\" ng-click=\\\"gamePadCtrl.movePlayer()\\\">move player</button>\\n  </form>\\n</section>\\n\";\n\n//////////////////\n// WEBPACK FOOTER\n// ./app/component/game-pad/game-pad.html\n// module id = 10\n// module chunks = 0\n//# sourceURL=webpack:///./app/component/game-pad/game-pad.html?");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar angular = __webpack_require__(5);\nvar ngAdventure = angular.module('ngAdventure');\n\nngAdventure.component('playerInfo', {\n  template: __webpack_require__(12),\n  controller: 'PlayerInfoController',\n  controllerAs: 'playerInfoCtrl'\n});\n\nngAdventure.controller('PlayerInfoController', ['$log', 'playerService', PlayerInfoController]);\n\nfunction PlayerInfoController($log, playerService) {\n  $log.debug('PlayerInfoController');\n  this.player = playerService.player;\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./app/component/player-info/player-info.js\n// module id = 11\n// module chunks = 0\n//# sourceURL=webpack:///./app/component/player-info/player-info.js?");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	eval("module.exports = \"<section class=\\\"player-info\\\">\\n  <h2>stats:</h2>\\n\\n  <ul>\\n    <li>\\n      <span>name:</span>\\n      <span>{{ playerInfoCtrl.player.name }}</span>\\n    </li>\\n    <li>\\n      <span>hp:</span>\\n      <span>{{ playerInfoCtrl.player.hp }}</span>\\n    </li>\\n    <li>\\n      <span>current location:</span>\\n      <span>{{ playerInfoCtrl.player.location }}</span>\\n    </li>\\n  </ul>\\n</section>\\n\";\n\n//////////////////\n// WEBPACK FOOTER\n// ./app/component/player-info/player-info.html\n// module id = 12\n// module chunks = 0\n//# sourceURL=webpack:///./app/component/player-info/player-info.html?");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar angular = __webpack_require__(5);\nvar ngAdventure = angular.module('ngAdventure');\n\nngAdventure.component('gameHistory', {\n  template: __webpack_require__(14),\n  controller: 'GameHistoryController',\n  controllerAs: 'gameHistoryCtrl'\n});\n\nngAdventure.controller('GameHistoryController', ['$log', 'playerService', GameHistoryController]);\n\nfunction GameHistoryController($log, playerService) {\n  $log.debug('GameHistoryController');\n  this.history = playerService.history;\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./app/component/game-history/game-history.js\n// module id = 13\n// module chunks = 0\n//# sourceURL=webpack:///./app/component/game-history/game-history.js?");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	eval("module.exports = \"<section class=\\\"history\\\">\\n  <h2>history</h2>\\n\\n  <ul ng-repeat=\\\"stat in gameHistoryCtrl.history\\\">\\n    <li>\\n      <span>turn:</span>\\n      <span>{{ stat.turn }}</span>\\n    </li>\\n    <li>\\n      <span>last location:</span>\\n      <span>{{ stat.location }}</span>\\n    </li>\\n    <li>\\n      <span>current location:</span>\\n      <span>{{ stat.desc }}</span>\\n    </li>\\n  </ul>\\n</section>\\n\";\n\n//////////////////\n// WEBPACK FOOTER\n// ./app/component/game-history/game-history.html\n// module id = 14\n// module chunks = 0\n//# sourceURL=webpack:///./app/component/game-history/game-history.html?");

/***/ })
/******/ ]);