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
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	const Grid = __webpack_require__(2);

	const game = new Grid();

	$(document).ready(function () {
	  game.createGame();
	  setAllLightIds();

	  $('td').on('click', function () {
	    var lightId = $(this).data("id");
	    game.changeLightState(lightId);
	    var lightPos = game.key[lightId];
	    var currentLightState = game.game[lightPos[0]][lightPos[1]];
	    $(this).attr("id", this.id = `${ currentLightState.state }`);
	  });

	  $('td').on('click', function () {
	    var lightId = $(this).data("id");
	    var surroundingLightPos = game.surroundingKeys[lightId];
	    changeSurroundingLights(surroundingLightPos);
	    setAllLightIds();
	    if (checkGame()) alert("YOU WIN");
	  });
	});

	function setAllLightIds() {
	  $('td').each(function (index, light) {
	    var lightPos = game.key[index + 1];
	    var currentLightState = game.game[lightPos[0]][lightPos[1]];
	    $(this).attr('id', this.id = `${ currentLightState.state }`);
	  });
	}

	function changeSurroundingLights(surroundingLightPos) {
	  surroundingLightPos.forEach(function (lightNumber) {
	    game.changeLightState(lightNumber);
	  });
	}

	function checkGame() {
	  var lightStates = [];
	  game.game.forEach(function (row) {
	    row.forEach(function (light) {
	      if (!light.state) {
	        lightStates.push("off");
	      } else {
	        lightStates.push("on");
	      }
	    });
	  });
	  return lightStates.every(function (element) {
	    return element === "off";
	  });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	const games = __webpack_require__(3); // array of game arrays
	const key = __webpack_require__(4);
	const Light = __webpack_require__(5);
	const surroundingKeys = __webpack_require__(6);

	function Grid(gameId) {
	  if (gameId === undefined) gameId = Math.floor(Math.random() * (28 - 0 + 1)) + 0;
	  this.games = games;
	  this.game = this.games[gameId];
	  this.key = key;
	  this.surroundingKeys = surroundingKeys, this.rows = this.game;

	  this.createGame();
	}

	Grid.prototype.addLight = function (state) {
	  return new Light(state);
	};

	Grid.prototype.createGame = function () {
	  var game = this.game;
	  var addLight = this.addLight;

	  this.game.forEach(function (row) {
	    row.forEach(function (lightsToBe, index) {
	      if (lightsToBe === "on") {
	        row[index] = addLight(true);
	      } else if (lightsToBe === "off") {
	        row[index] = addLight(false);
	      }
	    });
	  });
	};

	Grid.prototype.changeLightState = function (dataId) {
	  lightRow = key[dataId][0]; // 0
	  lightColumn = key[dataId][1]; // 0
	  this.game[lightRow][lightColumn].flip();
	};

	Grid.prototype.checkForLightsOut = function () {
	  return this.rows.every(function (row) {
	    return row.every(function (light) {
	      return !light.state;
	    });
	  });
	};

	module.exports = Grid;

/***/ },
/* 3 */
/***/ function(module, exports) {

	const validGames = [[// game 0
	["on", "off", "on", "on", "off"], ["off", "on", "on", "on", "off"], ["on", "on", "on", "off", "off"], ["on", "on", "off", "on", "on"], ["off", "off", "off", "on", "on"]], [//game 1
	["off", "off", "off", "on", "on"], ["on", "on", "off", "on", "on"], ["on", "on", "on", "off", "off"], ["off", "on", "on", "on", "off"], ["on", "off", "on", "on", "off"]], [// game 2
	["off", "on", "on", "off", "on"], ["off", "on", "on", "on", "off"], ["off", "off", "on", "on", "off"], ["on", "on", "off", "on", "on"], ["on", "on", "off", "off", "off"]], [// game 3
	["on", "on", "off", "off", "off"], ["on", "on", "off", "on", "on"], ["off", "off", "on", "on", "on"], ["off", "on", "on", "on", "off"], ["off", "on", "on", "off", "on"]], [// game 4
	["on", "on", "on", "on", "on"], ["off", "on", "on", "on", "off"], ["off", "off", "on", "off", "off"], ["off", "on", "on", "on", "off"], ["on", "on", "on", "on", "on"]], [// game 5
	["on", "off", "on", "on", "on"], ["off", "off", "off", "on", "on"], ["on", "off", "off", "on", "on"], ["on", "off", "off", "off", "on"], ["on", "on", "off", "on", "on"]], [// game 6
	["on", "on", "on", "on", "on"], ["on", "on", "on", "on", "on"], ["on", "on", "on", "on", "on"], ["on", "off", "on", "off", "on"], ["off", "off", "on", "off", "off"]], [// game 7
	["on", "on", "on", "off", "on"], ["on", "on", "off", "on", "off"], ["on", "on", "off", "on", "off"], ["on", "on", "on", "off", "on"], ["on", "on", "on", "on", "on"]], [// game 8
	["on", "on", "on", "on", "on"], ["on", "on", "on", "on", "on"], ["off", "on", "on", "on", "on"], ["on", "off", "on", "on", "on"], ["on", "off", "on", "on", "on"]], [// game 9
	["on", "on", "on", "on", "on"], ["off", "on", "off", "on", "off"], ["off", "on", "off", "on", "off"], ["off", "on", "off", "on", "off"], ["on", "on", "on", "on", "on"]], [// game 10
	["on", "off", "off", "on", "off"], ["off", "on", "on", "on", "off"], ["on", "off", "off", "on", "off"], ["on", "on", "on", "on", "on"], ["on", "on", "on", "on", "on"]], [// game 11
	["on", "on", "on", "on", "on"], ["off", "on", "on", "on", "on"], ["on", "off", "on", "on", "on"], ["off", "off", "on", "on", "on"], ["on", "off", "on", "on", "on"]], [// game 12
	["on", "on", "on", "on", "on"], ["on", "on", "on", "on", "on"], ["on", "on", "on", "on", "on"], ["off", "on", "off", "on", "off"], ["off", "on", "off", "on", "off"]], [// game 13
	["on", "on", "off", "on", "on"], ["on", "on", "off", "off", "on"], ["on", "on", "on", "off", "off"], ["on", "on", "on", "on", "on"], ["on", "on", "on", "on", "on"]], [// game 14
	["on", "off", "on", "off", "on"], ["on", "off", "on", "off", "on"], ["on", "on", "on", "on", "on"], ["on", "off", "on", "off", "on"], ["on", "off", "on", "off", "on"]], [// game 15
	["on", "on", "off", "on", "on"], ["on", "on", "off", "on", "on"], ["off", "off", "on", "off", "off"], ["on", "on", "off", "on", "on"], ["on", "on", "off", "on", "on"]], [// game 16
	["on", "on", "on", "on", "on"], ["on", "on", "on", "on", "on"], ["on", "on", "on", "on", "on"], ["on", "off", "off", "off", "off"], ["off", "on", "off", "off", "on"]], [// game 17
	["on", "on", "on", "on", "on"], ["on", "off", "on", "on", "on"], ["on", "on", "off", "on", "on"], ["on", "on", "off", "on", "on"], ["on", "on", "off", "on", "on"]], [// game 18
	["on", "on", "on", "on", "on"], ["off", "on", "on", "on", "on"], ["on", "off", "on", "on", "on"], ["on", "on", "off", "on", "on"], ["on", "on", "on", "off", "on"]], [// game 19
	["on", "on", "on", "on", "off"], ["on", "on", "on", "off", "on"], ["on", "on", "off", "on", "on"], ["on", "off", "on", "on", "on"], ["off", "on", "on", "on", "on"]], [// game 20
	["on", "off", "off", "off", "on"], ["off", "off", "off", "off", "off"], ["on", "on", "on", "on", "on"], ["on", "on", "on", "on", "on"], ["on", "on", "on", "on", "on"]], [// game 21
	["on", "on", "on", "on", "on"], ["on", "off", "on", "off", "on"], ["on", "off", "off", "off", "on"], ["off", "off", "off", "off", "off"], ["off", "on", "off", "on", "off"]], [// game 22
	["off", "off", "on", "on", "on"], ["on", "on", "on", "on", "on"], ["off", "off", "on", "on", "on"], ["on", "on", "off", "on", "off"], ["off", "on", "off", "on", "off"]], [// game 23
	["on", "off", "off", "off", "off"], ["off", "off", "off", "off", "off"], ["on", "off", "off", "off", "off"], ["off", "off", "off", "off", "off"], ["off", "off", "off", "on", "on"]], [// game 24
	["off", "off", "on", "off", "off"], ["off", "off", "on", "off", "off"], ["off", "off", "on", "off", "off"], ["off", "off", "on", "off", "off"], ["off", "off", "on", "off", "off"]], [// game 25
	["on", "on", "off", "on", "off"], ["on", "on", "on", "on", "on"], ["off", "on", "on", "on", "off"], ["on", "on", "on", "on", "on"], ["off", "on", "off", "on", "on"]], [// game 26
	["on", "off", "on", "off", "on"], ["off", "on", "on", "on", "off"], ["off", "off", "on", "off", "off"], ["off", "on", "on", "on", "off"], ["on", "off", "on", "off", "on"]], [// game 27
	["on", "off", "off", "off", "on"], ["off", "on", "on", "on", "off"], ["off", "on", "on", "on", "off"], ["off", "off", "off", "off", "off"], ["off", "on", "on", "on", "off"]], [// game 28
	["off", "off", "off", "on", "on"], ["on", "off", "on", "off", "on"], ["off", "off", "on", "off", "off"], ["on", "off", "on", "off", "on"], ["on", "on", "off", "off", "off"]], [// test game
	["off", "off", "off", "off", "off"], ["off", "off", "off", "off", "off"], ["off", "off", "off", "off", "off"], ["off", "off", "off", "off", "on"], ["off", "off", "off", "on", "on"]]];

	module.exports = validGames;

/***/ },
/* 4 */
/***/ function(module, exports) {

	var key = {
	  1: [0, 0],
	  2: [0, 1],
	  3: [0, 2],
	  4: [0, 3],
	  5: [0, 4],
	  6: [1, 0],
	  7: [1, 1],
	  8: [1, 2],
	  9: [1, 3],
	  10: [1, 4],
	  11: [2, 0],
	  12: [2, 1],
	  13: [2, 2],
	  14: [2, 3],
	  15: [2, 4],
	  16: [3, 0],
	  17: [3, 1],
	  18: [3, 2],
	  19: [3, 3],
	  20: [3, 4],
	  21: [4, 0],
	  22: [4, 1],
	  23: [4, 2],
	  24: [4, 3],
	  25: [4, 4]
	};

	module.exports = key;

/***/ },
/* 5 */
/***/ function(module, exports) {


	function Light(state) {
	  this.state = state;
	};

	Light.prototype.flip = function () {
	  this.state = this.state ? false : true;
	  return this;
	};

	module.exports = Light;

/***/ },
/* 6 */
/***/ function(module, exports) {

	var surroundingKeys = {
	  0: [1, 5],
	  1: [0, 2, 6],
	  2: [1, 3, 7],
	  3: [2, 4, 8],
	  4: [3, 9],
	  5: [0, 6, 10],
	  6: [1, 5, 7, 11],
	  7: [2, 6, 8, 12],
	  8: [3, 7, 9, 13],
	  9: [4, 8, 14],
	  10: [5, 11, 15],
	  11: [6, 10, 12, 16],
	  12: [7, 11, 13, 17],
	  13: [8, 12, 14, 18],
	  14: [9, 13, 19],
	  15: [10, 16, 20],
	  16: [11, 15, 17, 21],
	  17: [12, 16, 18, 22],
	  18: [12, 17, 19, 23],
	  19: [14, 18, 24],
	  20: [15, 21],
	  21: [16, 20, 22],
	  22: [17, 21, 23],
	  23: [18, 22, 24],
	  24: [19, 23]
	}

	module.exports = surroundingKeys;

/***/ }
/******/ ]);
