/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/ticker.worker.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/const.js":
/*!**********************!*\
  !*** ./src/const.js ***!
  \**********************/
/*! exports provided: Const, Msg, TileType, EntityType, EntityState, ItemState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Const", function() { return Const; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Msg", function() { return Msg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TileType", function() { return TileType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityType", function() { return EntityType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityState", function() { return EntityState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemState", function() { return ItemState; });
var Const = {
	HOST_ID: 0,
	
	MAX_PLAYERS_ROOM: 5, 
	MAX_PEER_PACKETS: 20,
	
	TICS_PER_SECOND: 10,
	RENDER_PER_SECOND: 60,
	RENDERS_PER_TICK: 6, // RENDER_PER_SECOND / TICS_PER_SECOND
	TIMEOUT_GAME_START: 6000,
	
	PLAYER_NAME_CHARS: 16,
	BYTES_FOR_CHAR: 2, 
	
	//WORKER_TIMEOUT: 100,
	
	STAGE_SCALE: 2.0,
	TILE_SIZE: 16,	
	
	PLAYER_DEFAULT_VISION_RADIUS: 6,	
	PLAYER_ATACK_RADIUS: 32,
	MOB_ATACK_RADIUS: 24,
	//PLAYER_DEFAULT_HEALTH: 100,	
	
	CHAT_MESSAGE_MAX: 48	
};

/*var Signal = {	
	//сообщения от сигнального сервера
	RoomList: 	 0,
	PlayerList:  1,
	HostLeave: 	 2,
	ClientToken: 3,
	HostToken: 	 4,
	//сообщения для сигнального сервера
	CreateRoom:  5,	
	JoinRoom: 	 6,	
	LeaveRoom: 	 7,	
};*/

var Msg = {	
	Chat:  1,
	//пакеты хоста
	Start: 2,
	Leave: 3,
	Map:   4,
	HostState: 5,	  
	Pong: 6,
	//пакеты клиента
	ClientReady: 7,
	ClientAction: 8,
	Ping: 9			
};

var EntityState = {	
    Default: 0,
	Create: 1,
	Remove: 2, // == Dead
	Move: 3,
	SearchPlayer: 4		
};

var ItemState = {	
    Default: 0,
	Create: 1,
	Remove: 2, 
	Pickup: 3,
	Drop: 4,
	Equip: 5,
	Unequip: 6		
};

var EntityType = {
	Mouse: 0,
	Skeleton: 1,
	Zombie: 2,
	Mage: 3,
	
	// id > 99 projectile
	FireBall: 100	
};

var TileType = {
	Floor: 0,
	Empty: 1,	
	Wall: 3,
	Door: 4
};


 

/***/ }),

/***/ "./src/ticker.worker.js":
/*!******************************!*\
  !*** ./src/ticker.worker.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var const_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! const.js */ "./src/const.js");



var timeout = 1000 / const_js__WEBPACK_IMPORTED_MODULE_0__["Const"].TICS_PER_SECOND;

var wCycle = () => {				
	self.postMessage('tick');
	
	//console.log('worker');
	setTimeout(wCycle, timeout); 
}

setTimeout(wCycle, timeout); 

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0LmpzIiwid2VicGFjazovLy8uL3NyYy90aWNrZXIud29ya2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsZ0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUYsVztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZGZ0I7OztBQUdoQjs7QUFFQSxvQjtBQUNBOztBQUVBO0FBQ0EsNkI7QUFDQTs7QUFFQSw0QiIsImZpbGUiOiJ0aWNrZXIud29ya2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvdGlja2VyLndvcmtlci5qc1wiKTtcbiIsInZhciBDb25zdCA9IHtcclxuXHRIT1NUX0lEOiAwLFxyXG5cdFxyXG5cdE1BWF9QTEFZRVJTX1JPT006IDUsIFxyXG5cdE1BWF9QRUVSX1BBQ0tFVFM6IDIwLFxyXG5cdFxyXG5cdFRJQ1NfUEVSX1NFQ09ORDogMTAsXHJcblx0UkVOREVSX1BFUl9TRUNPTkQ6IDYwLFxyXG5cdFJFTkRFUlNfUEVSX1RJQ0s6IDYsIC8vIFJFTkRFUl9QRVJfU0VDT05EIC8gVElDU19QRVJfU0VDT05EXHJcblx0VElNRU9VVF9HQU1FX1NUQVJUOiA2MDAwLFxyXG5cdFxyXG5cdFBMQVlFUl9OQU1FX0NIQVJTOiAxNixcclxuXHRCWVRFU19GT1JfQ0hBUjogMiwgXHJcblx0XHJcblx0Ly9XT1JLRVJfVElNRU9VVDogMTAwLFxyXG5cdFxyXG5cdFNUQUdFX1NDQUxFOiAyLjAsXHJcblx0VElMRV9TSVpFOiAxNixcdFxyXG5cdFxyXG5cdFBMQVlFUl9ERUZBVUxUX1ZJU0lPTl9SQURJVVM6IDYsXHRcclxuXHRQTEFZRVJfQVRBQ0tfUkFESVVTOiAzMixcclxuXHRNT0JfQVRBQ0tfUkFESVVTOiAyNCxcclxuXHQvL1BMQVlFUl9ERUZBVUxUX0hFQUxUSDogMTAwLFx0XHJcblx0XHJcblx0Q0hBVF9NRVNTQUdFX01BWDogNDhcdFxyXG59O1xyXG5cclxuLyp2YXIgU2lnbmFsID0ge1x0XHJcblx0Ly/RgdC+0L7QsdGJ0LXQvdC40Y8g0L7RgiDRgdC40LPQvdCw0LvRjNC90L7Qs9C+INGB0LXRgNCy0LXRgNCwXHJcblx0Um9vbUxpc3Q6IFx0IDAsXHJcblx0UGxheWVyTGlzdDogIDEsXHJcblx0SG9zdExlYXZlOiBcdCAyLFxyXG5cdENsaWVudFRva2VuOiAzLFxyXG5cdEhvc3RUb2tlbjogXHQgNCxcclxuXHQvL9GB0L7QvtCx0YnQtdC90LjRjyDQtNC70Y8g0YHQuNCz0L3QsNC70YzQvdC+0LPQviDRgdC10YDQstC10YDQsFxyXG5cdENyZWF0ZVJvb206ICA1LFx0XHJcblx0Sm9pblJvb206IFx0IDYsXHRcclxuXHRMZWF2ZVJvb206IFx0IDcsXHRcclxufTsqL1xyXG5cclxudmFyIE1zZyA9IHtcdFxyXG5cdENoYXQ6ICAxLFxyXG5cdC8v0L/QsNC60LXRgtGLINGF0L7RgdGC0LBcclxuXHRTdGFydDogMixcclxuXHRMZWF2ZTogMyxcclxuXHRNYXA6ICAgNCxcclxuXHRIb3N0U3RhdGU6IDUsXHQgIFxyXG5cdFBvbmc6IDYsXHJcblx0Ly/Qv9Cw0LrQtdGC0Ysg0LrQu9C40LXQvdGC0LBcclxuXHRDbGllbnRSZWFkeTogNyxcclxuXHRDbGllbnRBY3Rpb246IDgsXHJcblx0UGluZzogOVx0XHRcdFxyXG59O1xyXG5cclxudmFyIEVudGl0eVN0YXRlID0ge1x0XHJcbiAgICBEZWZhdWx0OiAwLFxyXG5cdENyZWF0ZTogMSxcclxuXHRSZW1vdmU6IDIsIC8vID09IERlYWRcclxuXHRNb3ZlOiAzLFxyXG5cdFNlYXJjaFBsYXllcjogNFx0XHRcclxufTtcclxuXHJcbnZhciBJdGVtU3RhdGUgPSB7XHRcclxuICAgIERlZmF1bHQ6IDAsXHJcblx0Q3JlYXRlOiAxLFxyXG5cdFJlbW92ZTogMiwgXHJcblx0UGlja3VwOiAzLFxyXG5cdERyb3A6IDQsXHJcblx0RXF1aXA6IDUsXHJcblx0VW5lcXVpcDogNlx0XHRcclxufTtcclxuXHJcbnZhciBFbnRpdHlUeXBlID0ge1xyXG5cdE1vdXNlOiAwLFxyXG5cdFNrZWxldG9uOiAxLFxyXG5cdFpvbWJpZTogMixcclxuXHRNYWdlOiAzLFxyXG5cdFxyXG5cdC8vIGlkID4gOTkgcHJvamVjdGlsZVxyXG5cdEZpcmVCYWxsOiAxMDBcdFxyXG59O1xyXG5cclxudmFyIFRpbGVUeXBlID0ge1xyXG5cdEZsb29yOiAwLFxyXG5cdEVtcHR5OiAxLFx0XHJcblx0V2FsbDogMyxcclxuXHREb29yOiA0XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IHsgQ29uc3QsIE1zZywgVGlsZVR5cGUsIEVudGl0eVR5cGUsIEVudGl0eVN0YXRlLCBJdGVtU3RhdGUgfTsgIiwiaW1wb3J0IHsgQ29uc3QgfSBmcm9tICdjb25zdC5qcydcclxuXHJcblxyXG52YXIgdGltZW91dCA9IDEwMDAgLyBDb25zdC5USUNTX1BFUl9TRUNPTkQ7XHJcblxyXG52YXIgd0N5Y2xlID0gKCkgPT4ge1x0XHRcdFx0XHJcblx0c2VsZi5wb3N0TWVzc2FnZSgndGljaycpO1xyXG5cdFxyXG5cdC8vY29uc29sZS5sb2coJ3dvcmtlcicpO1xyXG5cdHNldFRpbWVvdXQod0N5Y2xlLCB0aW1lb3V0KTsgXHJcbn1cclxuXHJcbnNldFRpbWVvdXQod0N5Y2xlLCB0aW1lb3V0KTsgIl0sInNvdXJjZVJvb3QiOiIifQ==