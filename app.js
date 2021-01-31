/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/main.js","vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
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

/***/ "./src/entity/entity.js":
/*!******************************!*\
  !*** ./src/entity/entity.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var const_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! const.js */ "./src/const.js");
/* harmony import */ var entity_inventory_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! entity/inventory.js */ "./src/entity/inventory.js");




function Entity(game, id) {
	this.game = game;	
	this.render = game.render;
	this.world = game.world;	
	this.id = id;	
	this.type = 0;		
	this.x = 0;
	this.y = 0;		
	this.lastX = 0;
	this.lastY = 0;	
	this.activeSpeed = 1.0;	
	this.motionX = 0;	
	this.motionY = 0;		
	//направление
	this.dir = 1; //[-1;1]
	//
	this.state;
	this.inventory = new entity_inventory_js__WEBPACK_IMPORTED_MODULE_1__["default"](this);
		
	this.container = null;	
	//активный спрайт
	this.sprite = null;	
	this.spriteW = 16;
	this.spriteH = 16;
	
	this.health = 100;
	this.healthMax = 100;
	
	this.lastAttckCount = 0;
	this.attackCooldown = 10;
	this.attackDamage = 20;
	this.hurted = 0;
	//
	this.spellcast = null;
	this.lastCastCount = 0;
	this.castCooldown = 10;
}
		
// @Render
Entity.prototype.initSprites = function() {		
	this.sprites = this.render.sprites;
}

Entity.prototype.isInEntitySprite = function(x, y) {
	var x2 = this.spriteW * 0.5,
		y1 = this.y - 0.85*this.spriteH,
		y2 = this.y + 0.15*this.spriteH;
	if(x>this.x-x2 && x<this.x+x2 && y>y1 && y<y2) return true;
	return false;
}

Entity.prototype.pointIntersectTile = function(x, y, ti, tj) {
	var x0,x1,y0,y1;
	x0 = ti * const_js__WEBPACK_IMPORTED_MODULE_0__["Const"].TILE_SIZE; x1 = x0 + const_js__WEBPACK_IMPORTED_MODULE_0__["Const"].TILE_SIZE;
	y0 = tj * const_js__WEBPACK_IMPORTED_MODULE_0__["Const"].TILE_SIZE; y1 = y0 + const_js__WEBPACK_IMPORTED_MODULE_0__["Const"].TILE_SIZE;
	
	if(x>=x0&&x<=x1 && y>=y0&&y<=y1) return true;
	return false;
}

Entity.prototype.dirFromMotion = function() {
	if(this.motionX > 0) {
		this.dir = 1;			
	} else if(this.motionX < 0) {
		this.dir = -1;		
	} 
}

Entity.prototype.updateContainer = function() {	
	//this.dirFromMotion();
	
	if(!this.container) return;
	
	//flip спрайта
	if(this.dir == -1) {
		this.sprite.scale.x = 1;	
	} else if (this.dir == 1) {
		this.sprite.scale.x = -1;
	}
}

Entity.prototype.predict = function() {}
	
Entity.prototype.using = function() { 
	this.activate = null;
	return false; 
}

// @Host
Entity.prototype.cast = function(count) { 
	if(count - this.lastCastCount > this.castCooldown) {
		this.lastCastCount = count;
		return true;
	}
	return false; 
}

// @Host
Entity.prototype.attack = function(target, count) {
	if(count - this.lastAttckCount > this.attackCooldown) {
		this.lastAttckCount = count;
		target.hurt(this.attackDamage, this);	
		//поворот к цели
		this.dir = (target.x > this.x) ? 1 : -1; 
	}
}

// @Host
Entity.prototype.attacked = function(entity) {}

Entity.prototype.hurt = function(damage, entity) {
	if(damage == 0) return;
	
	this.hurted += damage;		
	// @Client
	if(this.container) {
		this.sprite.tint = 0xFF0000;
		
		setTimeout(() => {
			this.sprite.tint = 0xFFFFFF;			
		}, 150); 
	}	
	// @Host
	if(entity) {
		this.attacked(entity);
	}	
	
	this.health -= damage;
	if(this.health <= 0) {
		this.health = 0;
		this.kill();
	}
}

Entity.prototype.kill = function() {
	this.dead = true;
	// @Client
	if(this.container) {
		console.log("client kill");
		this.game.entityDie(this.i, this.j);
		return;
	}	
	// @Host
	this.game.entitylist.remove(this.id);
}

Entity.prototype.isHurted = function() {
	var hurted = this.hurted;
	this.hurted = 0;
	return hurted;
}

// @Client
Entity.prototype.isVisible = function() {	
	if(!this.container) return;
			
	if(this.i>0 && this.j>0 && this.world.map[this.i][this.j].visible) {
		this.container.visible = true;	
		return;	
	}
	this.container.visible = false;	
}

Entity.prototype.setPosition = function(x, y) {	
	this.x = x;
	this.y = y;		
	this.lastX = x;
	this.lastY = y;	
	this.i = ~~(this.x / const_js__WEBPACK_IMPORTED_MODULE_0__["Const"].TILE_SIZE);
	this.j = ~~(this.y / const_js__WEBPACK_IMPORTED_MODULE_0__["Const"].TILE_SIZE);	
}

// @Render
Entity.prototype.moving = function(delta) {	
	this.x += this.motionX;// * delta;
	this.y += this.motionY;// * delta;	
}

// @Client
Entity.prototype.updateClient = function() {		
	this.i = ~~(this.x / const_js__WEBPACK_IMPORTED_MODULE_0__["Const"].TILE_SIZE);
	this.j = ~~(this.y / const_js__WEBPACK_IMPORTED_MODULE_0__["Const"].TILE_SIZE);	
	
	this.move();	
}
// @Host
Entity.prototype.updateHost = function(count) {
	this.updateClient();
}

Entity.prototype.move = function() {	
	//вычислить скорость по новой позиции от хоста
	this.motionX = (this.targetX - this.lastX) / const_js__WEBPACK_IMPORTED_MODULE_0__["Const"].RENDERS_PER_TICK;	
	this.motionY = (this.targetY - this.lastY) / const_js__WEBPACK_IMPORTED_MODULE_0__["Const"].RENDERS_PER_TICK;	
	
	/*this.targetX = this.lastX;
	this.targetY = this.lastY;*/
	
	this.updateContainer();		
}

Entity.prototype.setHostState = function(timeStamp, x, y) {	
	this.lastX = this.x;
	this.lastY = this.y;
	this.targetX = x;
	this.targetY = y;
}


/* harmony default export */ __webpack_exports__["default"] = (Entity);

/***/ }),

/***/ "./src/entity/inventory.js":
/*!*********************************!*\
  !*** ./src/entity/inventory.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var const_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! const.js */ "./src/const.js");



function Inventory(entity) {
	this.entity = entity;
	this.items = [];
	this.equiped = [];
}

Inventory.prototype.getFreeSlot = function() {
	var index = 0;
	return index;
}

Inventory.prototype.put = function(item) {
	return false;
}
Inventory.prototype.putToIndex = function(item, index) {
	return false;
}

Inventory.prototype.drop = function(item) {
	
}

Inventory.prototype.equip = function(item) {
	
}

Inventory.prototype.unequip = function(item) {
	
}


/* harmony default export */ __webpack_exports__["default"] = (Inventory);

/***/ }),

/***/ "./src/entity/mage.js":
/*!****************************!*\
  !*** ./src/entity/mage.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var const_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! const.js */ "./src/const.js");
/* harmony import */ var entity_mob_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! entity/mob.js */ "./src/entity/mob.js");




var Mage = function(game, id) {
	entity_mob_js__WEBPACK_IMPORTED_MODULE_1__["default"].call(this, game, id);
	
	this.activeSpeed = 0.6; // 0.6/0.8/1.3		
	this.type = 3; //EntityType.Mage	
	this.health = 100;
	
	this.castCooldown = 15;
	this.radius = 5;
}

Mage.prototype = Object.create(entity_mob_js__WEBPACK_IMPORTED_MODULE_1__["default"].prototype);
Mage.prototype.constructor = Mage;

// @Render
Mage.prototype.initSprites = function() {
	entity_mob_js__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.initSprites.call(this);	
	
	this.sprite = this.sprites.newAnimatedSprite('mage');
	this.sprite.anchor.x = 0.5;	
	this.sprite.play();
	this.sprite.position.y -= 0.85 * this.sprite.height;	
	
	this.container.addChild(this.sprite);
	//this.container.addChild(this.graphics);	//TEST
}

// @Host
Mage.prototype.aiMove = function(count) {	
	
	if(this.steps == 0) { //центр клетки
	
		//TODO переход в ближний бой при малом расстоянии
		if(this.game.mobInRadius(this, this.target, const_js__WEBPACK_IMPORTED_MODULE_0__["Const"].MOB_ATACK_RADIUS)) {
			this.stop();
			
			this.attack(this.target, count);
			return;
		}

		if(this.buildSighline(this.world.map, this.x, this.y, this.target.x, this.target.y, this.radius)) {		
			this.stop();
		
			if(this.cast(count)) {			
				var dir = this.game.projectileDir(this.x, this.y, this.target.x, this.target.y);
				if(dir)
					this.game.spawnProjectile(this, dir[0], dir[1]);
			}
			return;
		}
	}		
			
	if(!this.path && !this._buildPath(this.target)) {
		//console.log("нет пути");
		this.countLost++;
		if(this.countLost > 5) {
			this.countLost = 0;
			this.clearTarget();					
			this.state = const_js__WEBPACK_IMPORTED_MODULE_0__["EntityState"].Default;				
		}
		return;
	}			
						
	this.moveToPlayer(this.target);					
}

//TEST
/*
Mage.prototype.updateClient = function() {		
	Mob.prototype.updateClient.call(this);
	
	this.buildSighline(this.world.map, this.x, this.y, 
		this.game.players[0].x, this.game.players[0].y, 
		this.radius);
}
Mage.prototype.isVisible = function() { return true; }
*/

/* harmony default export */ __webpack_exports__["default"] = (Mage);

/***/ }),

/***/ "./src/entity/mob.js":
/*!***************************!*\
  !*** ./src/entity/mob.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var const_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! const.js */ "./src/const.js");
/* harmony import */ var entity_entity_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! entity/entity.js */ "./src/entity/entity.js");
/* harmony import */ var rot_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rot-js */ "./node_modules/rot-js/dist/rot.js");
/* harmony import */ var rot_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rot_js__WEBPACK_IMPORTED_MODULE_2__);






var Mob = function(game, id) {
	entity_entity_js__WEBPACK_IMPORTED_MODULE_1__["default"].call(this, game, id);
	
	this.activeSpeed = 0.8; // 0.6/0.8/1.3		
	this.type = 0; 
	//счетчик потери игрока
	this.countLost = 0;
	
	this.lastI = 0;
	this.lastJ = 0;	
	this.targetI = 0;
	this.targetJ = 0;
	
	this.targets = [];
	this.target = null;
	//агр моба(переключение на атакующего)
	this.aggress = false;
	this.radius = 6;
	
	this.tile_size = const_js__WEBPACK_IMPORTED_MODULE_0__["Const"].TILE_SIZE;
	this.tile_size1 = 1 / this.tile_size;
}

Mob.prototype = Object.create(entity_entity_js__WEBPACK_IMPORTED_MODULE_1__["default"].prototype);
Mob.prototype.constructor = Mob;


Mob.prototype.ai = function(count) {	
	switch(this.state) {
		case const_js__WEBPACK_IMPORTED_MODULE_0__["EntityState"].Default:
			if(count % 10 == 0)
				this.state = const_js__WEBPACK_IMPORTED_MODULE_0__["EntityState"].SearchPlayer;
			break;
		case const_js__WEBPACK_IMPORTED_MODULE_0__["EntityState"].SearchPlayer:
			//
			this.targets = [];
			this.game.players.forEach((player) => {
				if(player) {
					var L2 = (player.i - this.i) * (player.i - this.i) + (player.j - this.j) * (player.j - this.j);
					if(L2 < this.radius * this.radius) {
						this.targets.push([player, L2]);
					}
				}
			});
			if(this.targets.length > 0) {
				this.targets.sort((p1, p2) => {
					return p1[1] - p2[1];
				});
				
				this.target = this.targets[0][0];
				this.state = const_js__WEBPACK_IMPORTED_MODULE_0__["EntityState"].Move;
				break;								
			} 
			this.state = const_js__WEBPACK_IMPORTED_MODULE_0__["EntityState"].Default;													
			break;
		case const_js__WEBPACK_IMPORTED_MODULE_0__["EntityState"].Move:	
			if(!this.target || this.target.dead) {
				this.clearTarget();	
				this.stop();
				this.state = const_js__WEBPACK_IMPORTED_MODULE_0__["EntityState"].Default;
				break;
			}		
				
			this.aiMove(count);
			break;
	}			
}

Mob.prototype.aiMove = function(count) {	
	if(this.game.mobInRadius(this, this.target, const_js__WEBPACK_IMPORTED_MODULE_0__["Const"].MOB_ATACK_RADIUS)) {
		//this.stop();
		this.attack(this.target, count);			
		//return;
	}					
			
	if(!this.path && !this._buildPath(this.target)) {
		//console.log("нет пути");
		this.countLost++;
		if(this.countLost > 5) {
			this.countLost = 0;	
			this.clearTarget();			
			this.state = const_js__WEBPACK_IMPORTED_MODULE_0__["EntityState"].Default;				
		}
		return;
	} 			
						
	this.moveToPlayer(this.target);		
}

Mob.prototype.clearTarget = function() {
	this.target = null;
	this.aggress = false;
}
	
/*Mob.prototype.buildSighline = function(map, si, sj, ti, tj, radius) {	
	//Bresenham's line algorithm	
	var deltaX = Math.abs(ti - si),
    	deltaY = Math.abs(tj - sj);
    var signX = si < ti ? 1 : -1,
    	signY = sj < tj ? 1 : -1;   
    var error = deltaX - deltaY,
		count = 0;
    
    while(si != ti || sj != tj) {
        if(!map[si][sj].trans || count > radius) {
			//console.log("не вижу");
			return false; 
		}
		count++;		
		
        var error2 = error * 2;        
        if(error2 > -deltaY) {
            error -= deltaY;
            si += signX;
        }
        if(error2 < deltaX) {
            error += deltaX;
            sj += signY;
        }
    }
	return true;
}*/	

//TEST
Mob.prototype.line = function(x0, y0, x, y) {
	if(!this.graphics) return;
	this.graphics.clear();
	
	this.graphics.lineStyle(1, 0x969696);
	this.graphics.moveTo(0, 0);	
	this.graphics.lineTo(x-x0, y-y0);
	this.graphics.closePath();
	
	this.graphics._x0 = x0;
	this.graphics._y0 = y0;
}
Mob.prototype.point = function(x, y, color) {
	if(!this.graphics) return;
	this.graphics.lineStyle(0); 
	this.graphics.beginFill(color, 1);
	this.graphics.drawCircle(x-this.graphics._x0, y-this.graphics._y0, 1);
	this.graphics.endFill();
}

Mob.prototype.isSightBlocked = function(map, x, y, offsetX, offsetY) {
	var ni = ~~((x - offsetX) * this.tile_size1),
		nj = ~~((y - offsetY) * this.tile_size1),
		pi = ~~((x + offsetX) * this.tile_size1),
		pj = ~~((y + offsetY) * this.tile_size1);
	
	return !(map[ni][nj].trans && map[pi][pj].trans);
}

Mob.prototype.buildSighline = function(map, x0, y0, x, y, radius) {	
	var dx = x - x0,
    	dy = y - y0,	 
    	k = dy / dx,		
		size = this.tile_size,
		len2 = dx*dx + dy*dy;
	var swap,
		_x = x,
		_y = y;
			
	//this.line(x0, y0, x, y); //TEST
	
	radius *= size;
	if(len2 > radius*radius) return false;
			
	if(Math.abs(dy) > Math.abs(dx) && dx != 0) {
		if(y0 > y) {			
			var tmp = y;
			y = y0;			
			y0 = tmp;			
			swap = true;
		} 
		var i = size * (~~(y0 / size) + 1),
			intx;		
		for(; i < y; i += size) {
       		intx = (i - (_y - k * x)) / k;			
				
			/*if(swap) {
				this.point(intx, i, 0xDE0000); //TEST	
			} else {
				this.point(intx, i, 0x00DE00); //TEST	
			}*/	
			
			if(this.isSightBlocked(map, intx, i, 0, 4)) return false;
    	} 
    } else {
		if(dx == 0) k = 0;	
		
		if(x0 > x) {			
			var tmp = x;
			x = x0;
			x0 = tmp;
			swap = true;
		} 
		var i = size * (~~(x0 / size) + 1),
			inty;
		for(; i < x; i += size) {
       		inty = k * i + y - k * _x;
			
			/*if(swap) {
				this.point(i, inty, 0xDE0000); //TEST	
			} else {
				this.point(i, inty, 0x00DE00); //TEST	
			}*/
								
			if(this.isSightBlocked(map, i, inty, 4, 0)) return false;
    	}      
	}		
	return true;
}	

// @Host
Mob.prototype.buildPath = function(map, si, sj, ti, tj, alternative) {	
	if(alternative) {
		this.astar = new rot_js__WEBPACK_IMPORTED_MODULE_2__["Path"].AStar(ti, tj, (i, j) => {	
			if(map[i][j].id && map[i][j].id != this.id) return false;	
			return map[i][j].pass;
		});
	} else {
		this.astar = new rot_js__WEBPACK_IMPORTED_MODULE_2__["Path"].AStar(ti, tj, (i, j) => {		
			return map[i][j].pass;
		});
	}	
	this.path = [];
	this.astar.compute(si, sj, (i, j) => {
		this.path.push([i, j]);
	});
}	
	
Mob.prototype.moveToPlayer = function(player) {			
	if(this.steps == 0) {	
		//конец пути
		if(this.node == this.path.length-1) {
			this._buildPath(player);
		}
		this.node++;
		
		//проверяем клетку		
		var point = this.path[this.node];
		if(!point || this.node >= this.path.length || 
			!this.world.map[point[0]][point[1]].pass) { //клетка стала непроходима(дверь)				
			this.stop();			
			return;
		}		
		var id = this.world.map[point[0]][point[1]].id;
		if(id && id != this.id) { //клетка занята entity
			this.node--;
			this.motionX = 0;
			this.motionY = 0;
			
			this.path.count++;
			if(this.path.count > 5)
				this._buildPath(player, true);
			return;
		}
						
		//коррекция позиции
		if(this.node > 0) {
			this.x = this.path[this.node-1][0] * 16 + 8;
			this.y = this.path[this.node-1][1] * 16 + 8;
		}				
						
		var dx = point[0] - this.i,
			dy = point[1] - this.j;	
		
		//занимаем клетку
		this.targetI = point[0];
		this.targetJ = point[1];
		this.world.map[this.targetI][this.targetJ].id = this.id;
											
		if(dx != 0)	{				
			dx /= Math.abs(dx);
		}							
		if(dy != 0)	{				
			dy /= Math.abs(dy);
		}	
		
		this.steps = Math.round(const_js__WEBPACK_IMPORTED_MODULE_0__["Const"].TILE_SIZE / (this.activeSpeed * const_js__WEBPACK_IMPORTED_MODULE_0__["Const"].RENDERS_PER_TICK));
		var speed = const_js__WEBPACK_IMPORTED_MODULE_0__["Const"].TILE_SIZE / (this.steps * const_js__WEBPACK_IMPORTED_MODULE_0__["Const"].RENDERS_PER_TICK);
			
		this.motionX = dx * speed;
		this.motionY = dy * speed;
	} 
	this.steps--;		
}

Mob.prototype.stop = function() {	
	this.path = null;
	this.motionX = 0;
	this.motionY = 0;
}

Mob.prototype._buildPath = function(player, alter) {	
	if(Math.abs(player.i - this.i) > 1 || Math.abs(player.j - this.j) > 1) {	
		this.buildPath(this.world.map, this.i, this.j, player.i, player.j, alter);
		this.node = 0;	
		this.steps = 0;
		this.path.count = 0;
		return this.path.length;			
	}	
	return false;
}

// @Host
Mob.prototype.updateHost = function(count) {
	if(this.dead) {
		//console.log("dead update");
		return;
	}	
	
	this.i = ~~(this.x / const_js__WEBPACK_IMPORTED_MODULE_0__["Const"].TILE_SIZE);
	this.j = ~~(this.y / const_js__WEBPACK_IMPORTED_MODULE_0__["Const"].TILE_SIZE);	
		
	if(this.lastI != this.i || this.lastJ != this.j) {
		this.world.map[this.i][this.j].id = this.id;
		this.world.map[this.lastI][this.lastJ].id = null;	
		
		this.lastI = this.i;
		this.lastJ = this.j;
	}	
	
	this.ai(count);
	this.dirFromMotion();	
}

// @Host
Mob.prototype.attacked = function(entity) {
	if(!this.target || !this.aggress) {
		this.target = entity;
		this.aggress = true;
		this.state = const_js__WEBPACK_IMPORTED_MODULE_0__["EntityState"].Move;
	}
}

Mob.prototype.kill = function() {
	entity_entity_js__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.kill.call(this);	
	
	this.stop();
	this.world.map[this.i][this.j].id = null;
	this.world.map[this.lastI][this.lastJ].id = null;
	this.world.map[this.targetI][this.targetJ].id = null;	
}


/* harmony default export */ __webpack_exports__["default"] = (Mob);



/***/ }),

/***/ "./src/entity/mouse.js":
/*!*****************************!*\
  !*** ./src/entity/mouse.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var const_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! const.js */ "./src/const.js");
/* harmony import */ var entity_mob_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! entity/mob.js */ "./src/entity/mob.js");




var Mouse = function(game, id) {
	entity_mob_js__WEBPACK_IMPORTED_MODULE_1__["default"].call(this, game, id);
	
	this.activeSpeed = 0.6; // 0.6/0.8/1.3		
	this.type = 0; //EntityType.Mouse
	this.health = 40;
	this.attackDamage = 15;
	this.radius = 4;
}

Mouse.prototype = Object.create(entity_mob_js__WEBPACK_IMPORTED_MODULE_1__["default"].prototype);
Mouse.prototype.constructor = Mouse;

// @Render
Mouse.prototype.initSprites = function() {
	entity_mob_js__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.initSprites.call(this);	
	
	this.sprite = this.sprites.newAnimatedSprite('mouse');
	this.sprite.anchor.x = 0.5;	
	this.sprite.play();
	this.sprite.position.y -= 0.85 * this.sprite.height;	
	
	this.container.addChild(this.sprite);	
}


/* harmony default export */ __webpack_exports__["default"] = (Mouse);

/***/ }),

/***/ "./src/entity/mplayer.js":
/*!*******************************!*\
  !*** ./src/entity/mplayer.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var const_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! const.js */ "./src/const.js");
/* harmony import */ var entity_entity_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! entity/entity.js */ "./src/entity/entity.js");
/* harmony import */ var entity_player_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! entity/player.js */ "./src/entity/player.js");





function MPlayer(game, id, name) {		
	entity_player_js__WEBPACK_IMPORTED_MODULE_2__["default"].call(this, game, id, name);
	
	this.targetX = 0;
	this.targetY = 0;
}

MPlayer.prototype = Object.create(entity_player_js__WEBPACK_IMPORTED_MODULE_2__["default"].prototype);
MPlayer.prototype.constructor = MPlayer;

/*MPlayer.prototype.updateContainer = function() {
	if(!this.container) return;
	
	//flip контейнера
	if(this.dir == 1) {
		this.container.scale.x = 1;	
	} else if (this.dir == -1) {
		this.container.scale.x = -1;
	}
}*/

MPlayer.prototype.setMovement = function(dx, dy) {}

MPlayer.prototype.predict = function() {}

MPlayer.prototype.move = function() {		
	entity_entity_js__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.move.call(this);
}	

MPlayer.prototype.setHostState = function(timeStamp, x, y) {	
	entity_entity_js__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.setHostState.call(this, timeStamp, x, y);
}


/* harmony default export */ __webpack_exports__["default"] = (MPlayer);


/***/ }),

/***/ "./src/entity/player.js":
/*!******************************!*\
  !*** ./src/entity/player.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var const_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! const.js */ "./src/const.js");
/* harmony import */ var entity_entity_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! entity/entity.js */ "./src/entity/entity.js");




function Player(game, id, name) {	
	entity_entity_js__WEBPACK_IMPORTED_MODULE_1__["default"].call(this, game, id);
	
	this.name = name;		
	//ввод игрока
	this.dx = 0;
	this.dy = 0;	
	this.activeSpeed = 0.9;	
	
	this.health = 10000;	//TEST
	this.healthMax = 10000;
	//радиус видимости
	this.r = 6;
	this.flipContainer = null;		
	//камера прикреплена
	this.attached = false;
	//
	this.index = 0;
	//действие
	this.activate = null;
	//id атакуемого моба
	this.attackMob = null;
	//штамп времени отправки действий игрока
	this.timeStamp = 0;	
	
	this.hoststateBuffer = [];
	this.positionBuffer = [];
	
	//this.currPosition = {};
	this.lastPosition = {};	
	
	this.attackCooldown = 6;
}

Player.prototype = Object.create(entity_entity_js__WEBPACK_IMPORTED_MODULE_1__["default"].prototype);
Player.prototype.constructor = Player;

// @Render
Player.prototype.initSprites = function() {	
	entity_entity_js__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.initSprites.call(this);	

	this.sprite = this.sprites.newAnimatedSprite('warrior');
	this.sprite.anchor.x = 0.5;		
	this.sprite.play();	
	this.sprite.position.y -= 0.85 * this.sprite.height;	
	
	this.container.addChild(this.sprite);		
}

Player.prototype.addNameLabel = function() {		
	if(this.container) {		
		var text = this.sprites.createText(this.name, 9);
		text.x -= text.width / 2;
		text.y -= 25;
		this.container.addChild(text);
	}
}	

// @Host
Player.prototype.using = function() {
	if(!this.activate) return false;
				
	var i = this.activate[0],
		j = this.activate[1]; 			
	this.activate = null;
	
	if(Math.abs(this.i - i) <= 1 && 
	   Math.abs(this.j - j) <= 1) {
		
		var item = this.world.getItem(i, j);
		if(item) {
			if(this.inventory.put(item)) {
				this.game.pickupItem(item, this.id);
			}						
		} else {
			this.game.activateObj(this, i, j);
		}		
		return true;	
	}		
	return false;
}

Player.prototype.dirFromMotion = function() {}

Player.prototype.setMovement = function(dx, dy) {
	this.dx = dx;
	this.dy = dy;
}

Player.prototype.pointToTile = function(coord) {
	return Math.floor(coord / const_js__WEBPACK_IMPORTED_MODULE_0__["Const"].TILE_SIZE);
}

Player.prototype.move = function() {	
	this.motionX = this.dx * this.activeSpeed;	
	this.motionY = this.dy * this.activeSpeed;
	
	//урезаем скорость движения по диагоналям
	if(this.dx!=0 && this.dy!=0) {
		this.motionX *= 0.75;
		this.motionY *= 0.75;		
	}
	
	//проверка столкновений
	var x = Math.round((this.x + Number.EPSILON) * 10) * 0.1,
		y = Math.round((this.y + Number.EPSILON) * 10) * 0.1;		
		
	//console.log("client:", this.x, this.y);	
		
	var ticks = const_js__WEBPACK_IMPORTED_MODULE_0__["Const"].RENDERS_PER_TICK;
		
	if(!this.world.map[this.i + this.dx][this.j].pass && 
		this.pointIntersectTile(x + this.motionX * ticks, y, this.i + this.dx, this.j)) {			
			
			this.motionX = 0;
		}		
	if(!this.world.map[this.i][this.j + this.dy].pass && 
		this.pointIntersectTile(x, y + this.motionY * ticks, this.i, this.j + this.dy)) {			
			
			this.motionY = 0;
		}
	if(!this.world.map[this.i + this.dx][this.j + this.dy].pass && 
		this.pointIntersectTile(x + this.motionX * ticks, 
								y + this.motionY * ticks, this.i + this.dx, this.j + this.dy)) {			
			this.motionX = 0;
			this.motionY = 0;
		}		
		
	this.updateContainer();											
}	

// @Client 
Player.prototype.predict = function() {		

	this.hoststateBuffer.forEach((hostPrediction, timeStamp) => {
		if(hostPrediction) {
			this.lastPosition = this.positionBuffer[timeStamp];
			if(this.lastPosition) {
				//console.log("prediction"); 
				
				this.motionX += (hostPrediction.x - this.lastPosition.x) / const_js__WEBPACK_IMPORTED_MODULE_0__["Const"].RENDERS_PER_TICK;
				this.motionY += (hostPrediction.y - this.lastPosition.y) / const_js__WEBPACK_IMPORTED_MODULE_0__["Const"].RENDERS_PER_TICK;
				
				this.hoststateBuffer = [];
				this.positionBuffer = [];		
			}			
		}
	});	
	
	this.timeStamp++;
	this.timeStamp = this.timeStamp % 10;
	
	this.positionBuffer[this.timeStamp] = { x: this.x + this.motionX * const_js__WEBPACK_IMPORTED_MODULE_0__["Const"].RENDERS_PER_TICK, 
											y: this.y + this.motionY * const_js__WEBPACK_IMPORTED_MODULE_0__["Const"].RENDERS_PER_TICK };
}

// @Client
Player.prototype.setHostState = function(timeStamp, x, y) {
	//console.log(timeStamp);	
	this.hoststateBuffer[timeStamp % 10] = { x: x, 
											 y: y };
}


/* harmony default export */ __webpack_exports__["default"] = (Player);


/***/ }),

/***/ "./src/entity/projectile.js":
/*!**********************************!*\
  !*** ./src/entity/projectile.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var const_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! const.js */ "./src/const.js");
/* harmony import */ var entity_entity_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! entity/entity.js */ "./src/entity/entity.js");
/* harmony import */ var entity_player_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! entity/player.js */ "./src/entity/player.js");





var Projectile = function(game, id) {
	entity_entity_js__WEBPACK_IMPORTED_MODULE_1__["default"].call(this, game, id);
			
	this.caster = null;
	this.activeSpeed = 2.0;
	this.type = 100;	
	this.damage = 35;	
}

Projectile.prototype = Object.create(entity_entity_js__WEBPACK_IMPORTED_MODULE_1__["default"].prototype);
Projectile.prototype.constructor = Projectile;


Projectile.prototype.init = function(dx, dy, entity) {
	this._dx = dx;
	this._dy = dy;	
	this.caster = entity
}

Projectile.prototype.initSprites = function() {
	entity_entity_js__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.initSprites.call(this);	
	
	this.sprite = this.sprites.newAnimatedSprite('fireball', 0.06);
	this.sprite.anchor.x = 0.5;	
	this.sprite.anchor.y = 0.5;	
	this.sprite.play();	
	
	this.container.addChild(this.sprite);	
}

Projectile.prototype.dirFromMotion = function() {}

Projectile.prototype.updateContainer = function() {}	

Projectile.prototype.hurt = function(damage) {}

// @Host
Projectile.prototype.updateHost = function(count) {				
	this.motionX = (this._dx * 0.01) * this.activeSpeed;
	this.motionY = (this._dy * 0.01) * this.activeSpeed;
	
	//столкновения c уровнем
	this.i = Math.floor(this.x / const_js__WEBPACK_IMPORTED_MODULE_0__["Const"].TILE_SIZE);
	this.j = Math.floor(this.y / const_js__WEBPACK_IMPORTED_MODULE_0__["Const"].TILE_SIZE);	
	
	var ticks = const_js__WEBPACK_IMPORTED_MODULE_0__["Const"].RENDERS_PER_TICK,
		dx = 0,
		dy = 0,
		x = this.x + this.motionX * ticks,
		y = this.y + this.motionY * ticks;
		
	if(this._dx != 0) 
		dx = this._dx / Math.abs(this._dx);
	if(this._dy != 0) 
		dy = this._dy / Math.abs(this._dy);	
	
	//FIXME
	
	if(!this.world.map[this.i + dx][this.j].pass && 
		this.pointIntersectTile(x, this.y, this.i + dx, this.j)) {
			this.kill();
			return;
		}		
	if(!this.world.map[this.i][this.j + dy].pass && 
		this.pointIntersectTile(this.x, y, this.i, this.j + dy)) {
			this.kill();
			return;
		}
			
	//столкновения с мобами
	this.game.entitylist.pool().forEach( (entity) => {
		if(entity instanceof Projectile) return;		
						
		if(this.game.mobInRadius(this, entity, const_js__WEBPACK_IMPORTED_MODULE_0__["Const"].PLAYER_ATACK_RADIUS)) { 	
			//дружественный огонь
			if(entity instanceof entity_player_js__WEBPACK_IMPORTED_MODULE_2__["default"] && this.caster instanceof entity_player_js__WEBPACK_IMPORTED_MODULE_2__["default"]) return; 
								
			if(entity.isInEntitySprite(x, y)) {		
				if(entity == this.caster) return;		
				entity.hurt(this.damage, this.caster);
				this.kill();	
			} 					
		}
	});
}

Projectile.prototype.kill = function() {	
	this.game.entitylist.remove(this.id);
}



/* harmony default export */ __webpack_exports__["default"] = (Projectile);

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var const_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! const.js */ "./src/const.js");
/* harmony import */ var entity_player_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! entity/player.js */ "./src/entity/player.js");
/* harmony import */ var entity_mplayer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! entity/mplayer.js */ "./src/entity/mplayer.js");
/* harmony import */ var world_list_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! world/list.js */ "./src/world/list.js");
/* harmony import */ var input_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! input.js */ "./src/input.js");
/* harmony import */ var render_render_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! render/render.js */ "./src/render/render.js");
/* harmony import */ var render_gui_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! render/gui.js */ "./src/render/gui.js");
/* harmony import */ var world_world_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! world/world.js */ "./src/world/world.js");
/* harmony import */ var entity_mouse_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! entity/mouse.js */ "./src/entity/mouse.js");
/* harmony import */ var entity_mage_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! entity/mage.js */ "./src/entity/mage.js");
/* harmony import */ var entity_projectile_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! entity/projectile.js */ "./src/entity/projectile.js");









//entities






var Game = function() {			
	this.controls = {	
		up        : ["W"],
		down      : ["S"],
		left      : ["A"],
		right     : ["D"],           
        inventory : ["E"], 
        cast      : ["F"]                   
	};				
	this.SCALE = const_js__WEBPACK_IMPORTED_MODULE_0__["Const"].STAGE_SCALE;	
		
	this.activePlayer = null;	
	this.id = -1;	
	this.players = [];	
	
		//TODO перенести это в activePlayer ?
	
		//взаимодейсвие с окружением(тайл)
		this.activate = null;
		//ид атакуемого моба
		this.attack = null;
		//каст заклинания
		this.cast = null
	
	//список всех подвижных игровых объектов (и игроков)
	this.entitylist = new world_list_js__WEBPACK_IMPORTED_MODULE_3__["default"](this, const_js__WEBPACK_IMPORTED_MODULE_0__["Const"].MAX_PLAYERS_ROOM);	
	this.itemlist = new world_list_js__WEBPACK_IMPORTED_MODULE_3__["default"](this);
	//игрок сделал действие
	this.needUpdatePlayerControls = false;
	this.needRebuild = false;
	
	this.spawnX = 0;
	this.spawnY = 0;
		
	this.world = new world_world_js__WEBPACK_IMPORTED_MODULE_7__["default"]();		
}

Game.prototype.init = function() {	
	this.input = new input_js__WEBPACK_IMPORTED_MODULE_4__["default"]();	
	this.gui = new render_gui_js__WEBPACK_IMPORTED_MODULE_6__["default"](this);
	this.render = new render_render_js__WEBPACK_IMPORTED_MODULE_5__["default"](this);
	this.render.init();		
	this.camera = this.render.getCamera();	
	this.input.setupKeyAndMouseListeners();	
	
	this.genConstructorMap();
}

Game.prototype.free = function() {
	this.input.free();
	this.render.free();	
	this.gui.free();
	this.camera = null;	
	
	this.activePlayer = null;
	this.entitylist.free();
	this.players = [];
	this.needUpdatePlayerControls = false;
}

Game.prototype.startGame = function(players, callback) {
	this.world.generateMap();
	
	this.addPlayers(players);
	this.camera.attach(this.activePlayer);
		
	this.render.preloadTextures(() => {		
		this.addPlayersToStage(players);		
		this.render.startRender();	
		callback();
	});		
}

Game.prototype.mobInRadius = function(player, entity, radius) {
	var L2 = (player.x - entity.x) * (player.x - entity.x) + (player.y - entity.y) * (player.y - entity.y); 
	if(L2 < radius * radius) return true;
	return false;
}
Game.prototype.projectileDir = function(x, y, tx, ty) {
	var dx = tx - x,
		dy = ty - y,
		len = Math.sqrt(dx*dx+dy*dy);
	if(len == 0) return null;
			
	dx = ~~(100 * dx / len);
	dy = ~~(100 * dy / len);
	return [dx, dy];
}

Game.prototype.updatePlayerControls = function() {	
	if(!this.activePlayer) return;
	
		
	//направление спрайта от позиции мышки
	if(this.input.getMouseX() > this.camera.width2) {
		this.activePlayer.dir = 1;
	} else {
		this.activePlayer.dir = -1;
	}
	
	//инвентарь
	if(this.input.checkPressed(this.controls.inventory)) {
		this.gui.openInventory();		
	}	
	if(this.gui.isOpen()) {
		this.activePlayer.setMovement(0, 0);
		return;
	}	
	
	//правый клик по карте(взаимодействие)
	if(this.input.rmbDown) {
		var i = ~~((this.camera.posX * this.SCALE - this.camera.width2 + this.input.getLastRightClick()[0]) / 
				(const_js__WEBPACK_IMPORTED_MODULE_0__["Const"].TILE_SIZE * this.SCALE)), 
			j = ~~((this.camera.posY * this.SCALE - this.camera.height2 + this.input.getLastRightClick()[1]) / 
				(const_js__WEBPACK_IMPORTED_MODULE_0__["Const"].TILE_SIZE * this.SCALE));
		if(i < 0) i = 0;
		if(j < 0) j = 0;		
		
		this.activate = [i, j];
		
	} else if(this.input.lmbDown) { //левый клик по мобу(атака) 
		var x = (this.camera.posX * this.SCALE - this.camera.width2 + this.input.getLastLeftClick()[0]) / this.SCALE,
			y = (this.camera.posY * this.SCALE - this.camera.height2 + this.input.getLastLeftClick()[1]) / this.SCALE;
			
		//TODO анимация атаки
				
		this.entitylist.pool().forEach( (entity) => {
			if(entity instanceof entity_player_js__WEBPACK_IMPORTED_MODULE_1__["default"] || entity instanceof entity_projectile_js__WEBPACK_IMPORTED_MODULE_10__["default"]) return;
						
			if(this.mobInRadius(this.activePlayer, entity, const_js__WEBPACK_IMPORTED_MODULE_0__["Const"].PLAYER_ATACK_RADIUS)) { 							
				if(entity.isInEntitySprite(x, y)) 					
					this.attack = entity.id;
			}
		});
	} else if(this.input.checkPressed(this.controls.cast)) { //каст 			
		//if(this.activePlayer.cast()) 
		{
			var x = (this.camera.posX * this.SCALE - this.camera.width2 + this.input.getMouseX()) / this.SCALE,
				y = (this.camera.posY * this.SCALE - this.camera.height2 + this.input.getMouseY()) / this.SCALE,
				dir = this.projectileDir(this.activePlayer.x, this.activePlayer.y, x, y);
			if(!dir) return;
			
			this.cast = { type:100, dx: dir[0], dy: dir[1] };
			//console.log("client cast");
		}
	}
		
	var dx = 0,
		dy = 0;
			
	if(this.input.checkKey(this.controls.up)) {			
		dy -= 1;			
		this.needUpdatePlayerControls = true;	
	} 
	if (this.input.checkKey(this.controls.down)) {		
		dy += 1;		
		this.needUpdatePlayerControls = true;
	}
	if(this.input.checkKey(this.controls.right)) {		
		dx += 1;		
		this.needUpdatePlayerControls = true;			
	} 
	if(this.input.checkKey(this.controls.left)) {		
		dx -= 1;
		this.needUpdatePlayerControls = true;
	}		
	
	this.activePlayer.setMovement(dx, dy);
}

Game.prototype.addPlayers = function(players) {
	//this.players = players;
	
	var playerObj = null;
	players.forEach((player) => {			
		//находим нашего игрока
		if(player.id == this.id) {
			playerObj = new entity_player_js__WEBPACK_IMPORTED_MODULE_1__["default"](this, player.id, player.name);
			this.activePlayer = playerObj;
		} else {
			playerObj = new entity_mplayer_js__WEBPACK_IMPORTED_MODULE_2__["default"](this, player.id, player.name);
		}	
		playerObj.setPosition(this.spawnX * const_js__WEBPACK_IMPORTED_MODULE_0__["Const"].TILE_SIZE, 
							  this.spawnY * const_js__WEBPACK_IMPORTED_MODULE_0__["Const"].TILE_SIZE);
							
		this.players[player.id] = playerObj;
		
		//добавляем в списки		
		this.entitylist.addToId(playerObj, player.id);
	});	
}

Game.prototype.addPlayersToStage = function(players) {
	var playerObj = null;
	players.forEach((player) => {
		playerObj = this.entitylist.getObjectById(player.id);
		this.render.addToStageEntity(playerObj);	
	});	
}

Game.prototype.activateObj = function(entity, i, j, host) {	
	//активировать объект(сундук,рычаг,дверь)
	var obj = this.world.getObj(i, j); 
	if(obj && obj.activate(host)) {		
		//перестраиваем меш уровня	
		this.needRebuild = true;
		return true;		
	}	
	return false;
}

Game.prototype.runTick = function(packet) {	
	this.gui.update();
	this.updatePlayerControls();	
	
	//TODO обновить состояния объектов по данным от хоста
	
	if(this.needRebuild) {
		this.needRebuild = false;
		this.render.forcedRebuildMesh();		
	} 		
	
	this.entitylist.pool().forEach((entity, id) => {		
		entity.updateClient(); 		
						
		entity.isVisible();			
		entity.predict();
	});	
}

Game.prototype.genConstructorMap = function() {
	this.constructorMap = [];		
	this.constructorMap[const_js__WEBPACK_IMPORTED_MODULE_0__["EntityType"].Mouse] = entity_mouse_js__WEBPACK_IMPORTED_MODULE_8__["default"];
	this.constructorMap[const_js__WEBPACK_IMPORTED_MODULE_0__["EntityType"].Mage] = entity_mage_js__WEBPACK_IMPORTED_MODULE_9__["default"];
	//this.constructorMap[EntityType.Skeleton] = Skeleton;
	
	this.constructorMap[const_js__WEBPACK_IMPORTED_MODULE_0__["EntityType"].FireBall] = entity_projectile_js__WEBPACK_IMPORTED_MODULE_10__["default"];
}

Game.prototype.createObjectByType = function(type, id) {
	if(type != null) {		
		var e = new this.constructorMap[type](this, id);		
		//console.log("type:", type, e);
		return e;
	}
	return null;
}

Game.prototype.entityDie = function(i, j) {
	this.world.getMap()[i][j].blood = true;
	//перестраиваем меш уровня	
	this.needRebuild = true;
}

Game.prototype.addEntity = function(entity, id) {		
	this.entitylist.addToId(entity, id);
	this.render.addToStageEntity(entity);
}

Game.prototype.removeEntity = function(id) {	
	var entity = this.entitylist.getObjectById(id);	
	if(entity) {
		if(this.render)
			this.render.removeFromStageEntity(entity);
		if(entity instanceof entity_player_js__WEBPACK_IMPORTED_MODULE_1__["default"])
			this.players[entity.id] = null;
	}		
	this.entitylist.remove(id);
}

Game.prototype.dropItem = function(i, j, item, id) {		
	item.drop(i, j);
	this.world.setItem(i, j, item);	
	this.itemlist.setState(id, const_js__WEBPACK_IMPORTED_MODULE_0__["ItemState"].Drop);
}

Game.prototype.pickupItem = function(item, owner) {	
	//var item = this.itemlist.getObjectById(id);	
	if(item) {
		item.pickup(this.entitylist.getObjectById(owner));
		this.world.setItem(item.i, item.j, null);
		this.itemlist.setState(item.id, const_js__WEBPACK_IMPORTED_MODULE_0__["ItemState"].Pickup);
	}			
}


/* harmony default export */ __webpack_exports__["default"] = (Game);

/***/ }),

/***/ "./src/hostgame.js":
/*!*************************!*\
  !*** ./src/hostgame.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var const_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! const.js */ "./src/const.js");
/* harmony import */ var entity_player_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! entity/player.js */ "./src/entity/player.js");
/* harmony import */ var world_listhost_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! world/listhost.js */ "./src/world/listhost.js");
/* harmony import */ var game_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! game.js */ "./src/game.js");
/* harmony import */ var entity_mouse_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! entity/mouse.js */ "./src/entity/mouse.js");
/* harmony import */ var entity_mage_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! entity/mage.js */ "./src/entity/mage.js");
/* harmony import */ var entity_projectile_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! entity/projectile.js */ "./src/entity/projectile.js");










var HostGame = function() {	
	game_js__WEBPACK_IMPORTED_MODULE_3__["default"].call(this);		
		
	//отдельный массив игроков
	this.players = [];
	//список всех подвижных игровых объектов (и игроков)
	this.entitylist = new world_listhost_js__WEBPACK_IMPORTED_MODULE_2__["default"](this, const_js__WEBPACK_IMPORTED_MODULE_0__["Const"].MAX_PLAYERS_ROOM);		
	this.itemlist = new world_listhost_js__WEBPACK_IMPORTED_MODULE_2__["default"](this);
	this.updatelist	= [];
	
	this.count = 0;
}

HostGame.prototype = Object.create(game_js__WEBPACK_IMPORTED_MODULE_3__["default"].prototype);
HostGame.prototype.constructor = HostGame;


HostGame.prototype.init = function() {}

HostGame.prototype.free = function() {
	this.entitylist.free();
	this.players = [];
	this.count = 0;
}

HostGame.prototype.startGame = function(players, callback) {
	this.world.generateSeed();
	this.world.generateMap();	
	this.setSpawnPoint();
	
	//console.log("точка спавна[i,j]:",this.world.spawnPoint);
		
	this.addPlayers(players);	
}

HostGame.prototype.setSpawnPoint = function(x, y) {
	if(x == null || y == null) {
		this.spawnX = this.world.spawnPoint[0];
		this.spawnY = this.world.spawnPoint[1];
		return;
	}
	this.spawnX = x;
	this.spawnY = y;
}

HostGame.prototype.addPlayers = function(players) {
	var playerObj;
	players.forEach((player) => {
		playerObj = new entity_player_js__WEBPACK_IMPORTED_MODULE_1__["default"](this, player.id, player.name);			
		playerObj.setPosition(this.spawnX * const_js__WEBPACK_IMPORTED_MODULE_0__["Const"].TILE_SIZE, 
							  this.spawnY * const_js__WEBPACK_IMPORTED_MODULE_0__["Const"].TILE_SIZE);
							
		this.players[player.id] = playerObj;	
						
		//добавляем в списки		
		this.entitylist.addToId(playerObj, player.id);					
	});	
}

HostGame.prototype.activateObj = function(entity, i, j) {	
	if(game_js__WEBPACK_IMPORTED_MODULE_3__["default"].prototype.activateObj.call(this, entity, i, j, true))	
		this.updatelist.push([i, j]);	
}

// @Host
HostGame.prototype.runTick = function() {
	this.count++;
	
	//TODO обновление мира
	
	//TEST
	if(!this.once) {
		this.once = true;
		console.log("spawn entity");
		var entity;
		for(var m = 0; m < 3; m++) {
			entity = new entity_mouse_js__WEBPACK_IMPORTED_MODULE_4__["default"](this, 0);		
			entity.setPosition((this.spawnX + m) * 16 + 8, 
					  	   	   (this.spawnY) * 16 + 8);
			
			this.entitylist.add(entity);
		}
		for(var m = 0; m < 1; m++) {
			entity = new entity_mage_js__WEBPACK_IMPORTED_MODULE_5__["default"](this, 0);		
			entity.setPosition((this.spawnX - 2) * 16 + 8, 
					  	   	   (this.spawnY + m) * 16 + 8);
			
			this.entitylist.add(entity);
		}
	}
		
	this.entitylist.pool().forEach((entity) => {
		if(entity instanceof entity_player_js__WEBPACK_IMPORTED_MODULE_1__["default"]) {
			//использовать объект
			entity.using();				
								
			//атака моба
			if(entity.attackMob) {
				var target = this.entitylist.getObjectById(entity.attackMob);
				if(this.mobInRadius(entity, target, const_js__WEBPACK_IMPORTED_MODULE_0__["Const"].PLAYER_ATACK_RADIUS)) {
					//console.log("attack entity:", entity.attack);
					entity.attack(target, this.count);
				}
				entity.attackMob = null;
			}				
				
			//каст заклинания
			if(entity.spellcast && entity.cast(this.count)) {	
				//								
				this.spawnProjectile(entity, entity.spellcast.dx, entity.spellcast.dy);					
				entity.spellcast = null;
			}				
		}			
			
		//симуляция и ИИ
		entity.updateHost(this.count);							
			
		entity.x += entity.motionX * const_js__WEBPACK_IMPORTED_MODULE_0__["Const"].RENDERS_PER_TICK;
		entity.y += entity.motionY * const_js__WEBPACK_IMPORTED_MODULE_0__["Const"].RENDERS_PER_TICK;
						
		//@Player
		entity.dx = 0;
		entity.dy = 0;				
	});	
}

HostGame.prototype.updatePlayerControls = function() {}

HostGame.prototype.addPlayersToStage = function(players) {}

HostGame.prototype.addEntity = function(entity, id) {		
	this.entitylist.addToId(entity, id);
}

HostGame.prototype.removeEntity = function(id) {			
	var entity = this.entitylist.getObjectById(id);	
	if(entity instanceof entity_player_js__WEBPACK_IMPORTED_MODULE_1__["default"])
		this.players[entity.id] = null;
		
	this.entitylist.remove(id);
}

HostGame.prototype.spawnProjectile = function(entity, dx, dy) {
	var p = new entity_projectile_js__WEBPACK_IMPORTED_MODULE_6__["default"](this, 0);
	p.init(dx, dy, entity);
	p.setPosition(entity.x, entity.y);
	this.entitylist.add(p);	
}


/* harmony default export */ __webpack_exports__["default"] = (HostGame);

/***/ }),

/***/ "./src/input.js":
/*!**********************!*\
  !*** ./src/input.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var KEYS = {
		LEFT    : 37, 	UP      : 38,	RIGHT   : 39,  	DOWN    : 40,  	ENTER   : 13,  	SPACE   : 32,  	SHIFT   : 16,  	CTRL    : 17,
    	ALT     : 18,  	ESC     : 27,  	SLASH   : 111,  PERIOD  : 190, 	1       : 49,  	2       : 50,  	3       : 51,  	4       : 52,
   		5       : 53,  	6       : 54,  	7       : 55,  	8       : 56,  	9       : 57,  	0       : 58,  	A       : 65,  	B       : 66,
    	C       : 67,  	D       : 68,  	E       : 69,  	F       : 70,  	G       : 71,  	H       : 72,  	I       : 73,  	J       : 74,
    	K       : 75,  	L       : 76,  	M       : 77,  	N       : 78,  	O       : 79,  	P       : 80,  	Q       : 81,  	R       : 82,
    	S       : 83,  	T       : 84,  	U       : 85,  	V       : 86,  	W       : 87,  	X       : 88,  	Y       : 89,  	Z       : 90,
    	F1      : 112, 	F2      : 113, 	F3      : 114, 	F4      : 115, 	F5      : 116, 	F6      : 117, 	F7      : 118, 	F8      : 119,
    	F9      : 120, 	F10     : 121, 	F11     : 122, 	F12     : 123    
};
	
	
var Input = function() {	
	this.keys = [];
	this.pressed = null; 
	this.lmbDown = false;
	this.rmbDown = false;
	this.grab = false,	
	this.hasFocus = true;
	this.pointerLocked = false;
	this.mouseX = -1;
	this.mouseY = -1;
	//this.mouseMoveX = 0;
	//this.mouseMoveY = 0;
	this.click = null;
	
	
	this.canvas = document.getElementById('game-canvas');
	
	//this.onMouseUp = this.onMouseUp.bind(this);
	this.onMouseDown = this.onMouseDown.bind(this);	
	//this.onMouseClick = this.onMouseClick.bind(this);
	this.onMouseMove = this.onMouseMove.bind(this);
}	

Input.prototype.free = function() {
	this.keys = []; 
	this.pressed = [];
	this.lmbDown = false;
	this.rmbDown = false;
	this.grab = false;
	this.pointerLocked = false;
	if(this.canvas) {
		//this.canvas.removeEventListener('click', this.onMouseClick, false);
		this.canvas.removeEventListener('mousedown', this.onMouseDown, false);
		//this.canvas.removeEventListener('mouseup', this.onMouseUp, false);
		this.canvas.removeEventListener('mousemove', this.onMouseMove, false);
	}
	
	//document.removeEventListener('pointerlockchange', this.onPointerLockChange, false);
	//document.removeEventListener('mozpointerlockchange', this.onPointerLockChange, false);
}

Input.prototype.setupKeyAndMouseListeners = function() {
	
	window.addEventListener('focus', (e) => {
		this.hasFocus = true;   
	}, false);
	window.addEventListener('unfocus', (e) => {
		this.hasFocus = false;	
		this.clearAllKey();	
	}, false);
		
	document.addEventListener('keydown', (e) => {
		//e.preventDefault();
		this.keys[e.keyCode] = true;
		this.pressed = e.keyCode;		
	}, false);
	document.addEventListener('keyup', (e) => {
		//e.preventDefault();
		this.keys[e.keyCode] = false;
	}, false);	
	
	/*document.addEventListener('pointerlockchange', (e) => {
		this.onPointerLockChange();
	}, false);*/
	
		
	if(this.canvas) {
		//this.canvas.addEventListener('click', this.onMouseClick, false);
		this.canvas.addEventListener('mousedown', this.onMouseDown, false);
		//this.canvas.addEventListener('mouseup', this.onMouseUp, false);
		this.canvas.addEventListener('mousemove', this.onMouseMove, false);
	}	
}

/*Input.prototype.drag = function() {
	this.grab = true;
}

Input.prototype.drop = function() {
	this.grab = false;
	this.mouseMoveX = 0;
	this.mouseMoveY = 0;
}*/	

Input.prototype.onMouseClick = function(e) {	
	this.click = [e.pageX, e.pageY];
	
	//console.log("click", this.click);
	e.preventDefault();
}

Input.prototype.onMouseDown = function(e) {
	if (this.hasFocus) {
		if (e.which == 1) {
			this.lmbDown = true;
		} else if (e.which == 3) {
			this.rmbDown = true;			
		}
		//this.lockPointer(this.canvas);
		this.click = [e.pageX, e.pageY];	
		//console.log("click", this.click);
		
	} else {
		window.focus();
	}						
	e.preventDefault();
}

Input.prototype.onMouseUp = function(e) {
	if (this.hasFocus) {
		if (e.which == 1) {
			this.lmbDown = false;			
		} else if (e.which == 3) {
			this.rmbDown = false;
		}
	}
	e.preventDefault();
}

Input.prototype.onMouseMove = function(e) {
	this.mouseX = e.pageX;
	this.mouseY = e.pageY;	
		
	/*if (this.isPointerLocked()) {
		this.mouseMoveX += e.movementX;// || e.mozMovementX || e.webkitMovementX || 0;
		this.mouseMoveY += e.movementY;// || e.mozMovementY || e.webkitMovementY || 0;		
	}*/			
	e.preventDefault();
}

/*
Input.prototype.getMouseMovementX = function() {
	var x = this.mouseMoveX;
	this.mouseMoveX = 0;	
	return x;
}

Input.prototype.getMouseMovementY = function() {
	var y = this.mouseMoveY;	
	this.mouseMoveY = 0;		
	return y;
}*/

Input.prototype.getMouseX = function() {		
	return this.mouseX;
}

Input.prototype.getMouseY = function() {
	return this.mouseY;
}

Input.prototype.getLastRightClick = function() {
	this.rmbDown = false;
	return this.click;
}
Input.prototype.getLastLeftClick = function() {
	this.lmbDown = false;
	return this.click;
}

Input.prototype.getLastClickPos = function() {
	return this.click;
}

Input.prototype.checkPressed = function(ckey) { 		
	if(this.pressed == KEYS[ckey]) {
		this.pressed = null;
		return true;
	}        
    return false;
}   

Input.prototype.getPressed = function() { 		
	return this.pressed;
}   
	
Input.prototype.checkKey = function(ckey) { 		
	if(!!this.keys[KEYS[ckey]]) {
		return true;
	}        
    return false;
}   
Input.prototype.clearKey = function(ckey) {      
    this.keys[KEYS[ckey]] = false;         
}
Input.prototype.clearAllKey = function() {      
    this.keys = []; 
	this.pressed = [];        
}

/* harmony default export */ __webpack_exports__["default"] = (Input);


/***/ }),

/***/ "./src/lobby.js":
/*!**********************!*\
  !*** ./src/lobby.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var simple_peer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! simple-peer */ "./node_modules/simple-peer/index.js");
/* harmony import */ var simple_peer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(simple_peer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var const_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! const.js */ "./src/const.js");
/* harmony import */ var network_client_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! network/client.js */ "./src/network/client.js");
/* harmony import */ var network_host_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! network/host.js */ "./src/network/host.js");







var Lobby = (function() {
	 
	var socket = null,		
		client = new network_client_js__WEBPACK_IMPORTED_MODULE_2__["default"](),
		host = new network_host_js__WEBPACK_IMPORTED_MODULE_3__["default"](),
		isHost = false,					
		playerName = "",
		id = null,
		players = [];	
	
	var container_lobby,		
		container_room,
		container_menu,		
		room_menu_chat,
		room_opts,
		
		container_game,
		container_game_menu;				
	
	
 	function getPlayerSelfName() {
		var input = document.getElementById('player-name-input');
		input.addEventListener("focusout", (e) => {		
			playerName = input.value.substring(0, 16);				
		})		
	}
	
	function validateName() {
		if(playerName == "") {
			var input = document.getElementById('player-name-input');
			playerName = input.value.substring(0, 16);
		}				
		
		if(playerName == "") {
			playerName = "Player"
			if(isHost) playerName = "Host";			
		}
		playerName = playerName.substring(0, 16);
	}
	
	function getPlayers() {
		return players;
	}
	
	function safelyParseJSON (json) { 
 	 	try {
    		return JSON.parse(json);
  		} catch (e) {
    		return {};
  		}  
	}
	
	function closeSocket() {		
		if(socket) {
			socket.onclose = function () {}; 
    		socket.close();
		}		
	}
	
	function sendJSON(msg) {
		if(socket && socket.readyState == socket.OPEN){							
			socket.send(JSON.stringify(msg));
		}	
	}

	function tryToConnect() {	
		if(socket && socket.readyState == socket.OPEN) {
			closeSocket();
		}
	
		//socket = new WebSocket("ws://localhost:8080/ws");
		socket = new WebSocket("wss://deep-sea.herokuapp.com/ws");
		
		socket.onopen = function (event) {
			console.log("Соединение!");	
		};
		socket.onclose = function(event) {
  			if (event.wasClean) {
    			console.log('Соединение закрыто');
  			} else {
    			//console.log('Обрыв соединения');
  			}  
			clearRoomList();
			//showMenuWindow();
		};		
		socket.onmessage = function (event) {
			//console.log(event.data);
  			onNetworkMessage(safelyParseJSON(event.data));
		}	
		socket.onerror = function(error) {
  			//console.log("Ошибка :" + error.message);
		};		
	}
	
	function onNetworkMessage(msg) {
		try {
			if(msg.type) {		
				switch(msg.type){			
					case "RoomList":
						updateRoomList(msg.rooms);
						break;
					case "PlayerList":
						players = msg.players;
						id = msg.id;
						updatePlayersInRoom(msg.players, msg.id);						
						break;
					case "HostLeave":						
						//showWarningMessage("Host leave room", 2000);
						client.destroy();
						showMenuWindow();
						break;	
					case "ClientToken":
						//клиентский токен для хоста
						var id = msg.webrtc.clientID;						
						host.addNewClient(msg.webrtc, msg.name, (token) => {
							if(socket != null && socket.readyState == socket.OPEN){	
								token.clientID = id;							
								socket.send(JSON.stringify({ type: "WebRTCToken", webrtc: token }));
							}	
						});
						break
					case "HostToken":
						//ответный токен хоста									
						client.signal(msg.webrtc);						
						break;	
									
					default:
						console.log("Undefined type: " + msg.type);
						break;			
				}
			}
		} catch(e) {
			console.error(e);
		}
	}			
	
	function clearRoomList() {		
		while (room_opts.firstChild) {
    		room_opts.removeChild(room_opts.firstChild);
		}
	}
	
	function updateRoomList(rooms) {			
		clearRoomList();
		
		var i, opt,
        len = rooms.length;   
    	
    	for (i = 0; i < len; ++i) {
        	opt = document.createElement('OPTION');
        	opt.textContent = "#" + rooms[i].id + " ["+ rooms[i].count +"/"+ const_js__WEBPACK_IMPORTED_MODULE_1__["Const"].MAX_PLAYERS_ROOM +"]";
        	opt.value = rooms[i].id;
        	room_opts.appendChild(opt);
    	} 			
	}
	
	function clearPlayersInRoom() {
		updatePlayersInRoom([], -1);
	}
	
	function updatePlayersInRoom(players, roomId) {			
		var div_id = document.getElementById('room-id');
		div_id.textContent = "\xa0" + "#" + roomId;
		
		var member_list = document.getElementById('team-menu-member-list');
		var divs = Array.prototype.slice.call(member_list.querySelectorAll("*"), 0);
		var div, index = 0, len = players.length;
		divs.forEach(function(div) {
			if(div.className.includes("name-text")) {	
				div.className = "name-text";
				div.textContent = "";
				for(; index < len; index++) {
					if(players[index]) {
						//нашли свой ник/ид
						if(playerName == players[index]) {
							div.className = "name-text name-self";
							//id = index;
						}						
						div.textContent = players[index]; 						
						index++
						break						
					}	
				}
			} 		 	
		});						
	}
	
	function createRoom() {
		clearPlayersInRoom();
		isHost = true;		
		clearChat();	
		validateName();
		host.self.name = playerName;	
		host.createRoom();
		sendJSON({ type: "CreateRoom", name: playerName });
		showRoomWindow();	
	}
	
	function joinRoom() {	
		clearPlayersInRoom();
		isHost = false;		
		clearChat();	
		validateName();		
		
		var select = document.getElementById('room-select-main');		
		var roomId = parseInt(select.value);		
		if(!roomId || roomId < 0) return;			
		
		if(socket && socket.readyState == socket.OPEN){	
			client.create((token) => {				
				sendJSON({ type: "JoinRoom", name: playerName, id: roomId, webrtc: token});				
			});			
			client.joinRoom();	
		}			
		showRoomWindow();	
	}
	
	function leaveRoom() {
		if(isHost) {
			host.leaveRoom();
			isHost = false;
		} else {
			client.leaveRoom();
		}	
		playerName = "";		
		sendJSON({ type: "LeaveRoom" });	
		showMenuWindow();				
	}		
	
	//Host
	function startGame() {			
		showGameWindow();
		window.addEventListener("beforeunload", beforeunload);
	}
	
	function leaveGame() {			
		tryToConnect();	
		hideGameMenu();		
		showMenuWindow();
		window.removeEventListener("beforeunload", beforeunload);
		//location.reload();		
	}

	function DOMContentLoaded(event) {		
		if (!simple_peer__WEBPACK_IMPORTED_MODULE_0___default.a.WEBRTC_SUPPORT) { 		
			alert("WebRTC not support!");
			return;
		}
		
		tryToConnect();	
		getPlayerSelfName();
	
		container_lobby = document.getElementById('container-lobby');
			container_menu = document.getElementById('container-menu');
			room_opts = document.getElementById('room-opts');				
			container_room = document.getElementById('container-room');	
			room_menu_chat = document.getElementById('chat-lobby');
		
		container_game = document.getElementById('container-game');
			container_game_menu = document.getElementById('container-game-menu');		
			
		//ESC в меню	
		window.addEventListener("keydown", (e) => {
			if (e.which == 27 || e.keyCode == 27) { //ESC	
				//меню уже вызванно			
				if(container_game_menu.style.display == "block") {
					hide(container_game_menu);
				} else {
					show(container_game_menu);					
				}
			}
		});		
			
		document.getElementById('btn-create').addEventListener("click", createRoom);
		document.getElementById('btn-join').addEventListener("click", joinRoom);		
		document.getElementById('btn-room-leave').addEventListener("click", leaveRoom);	
		
		//начать игру
		document.getElementById('btn-room-start').addEventListener("click", () => {
			if(isHost) {
				console.log("### Start game ###");				
				sendJSON({ type: "StartGame" });			
				host.startGame();						
			}  
		});	
		//выйти из игры
		document.getElementById('btn-game-leave').addEventListener("click", () => {
			if(isHost) {
				host.leaveGame();
				isHost = false;
			} else {
				client.leaveGame();				
			}	
			playerName = "";		
		});		
		
		//чат
		var chat_input = document.getElementById('chat-input');
		chat_input.addEventListener("keydown", (e) => {
			if (chat_input.value && (e.which == 13 || e.keyCode == 13)) { //Enter	
				if(chat_input.value == "") return true;
					
				if(isHost) {
					host.self.sendChatMsg(chat_input.value);					
				} else {
					client.sendChatMsg(chat_input.value);
				}
				chat_input.value = "";
				//scroll to bottom messages
				room_menu_chat.scrollTop = room_menu_chat.scrollHeight;
        		return false;
    		}
    		return true;
		});			
		
		//перед закрытием 
		window.addEventListener("unload", (e) => { 			
			closeSocket();	
			client.destroy();
		});
		//не показывать меню на правый клик
		window.oncontextmenu = function() {
    		return false; 
		}
			
	}		
	
	function beforeunload(e) {
		var confirmationMessage = true;
  		(e || window.event).returnValue = confirmationMessage; //Gecko + IE
  		return confirmationMessage;                            //Webkit, Safari, Chrome
	}
	
	function clearChat() {		
		room_menu_chat.textContent = "";
	}
	
	function showWarningMessage(msg, timout) {		
	}	
	
	function showRoomWindow() {
		show(container_lobby);
		show(container_room);
		hide(container_menu);	
		hide(container_game);
		if(isHost) {
			show(document.getElementById('btn-room-start'));
		}
	}
	function showMenuWindow() {
		show(container_lobby);
		show(container_menu);
		hide(container_game);
		hide(container_room);		
		hide(document.getElementById('btn-room-start'));
	}
	function showGameWindow() {
		show(container_game);
		hide(container_lobby);		
	}
	function showGameMenu() {
		show(container_game_menu);
	}
	function hideGameMenu() {
		hide(container_game_menu);
	}
	
	function show(e){ e.style.display = "block"; }
	function hide(e){ e.style.display = "none"; }
	
	
	return {
		DOMContentLoaded: DOMContentLoaded,
		clearChat: clearChat,
		startGame: startGame,
		leaveGame: leaveGame,
		
		showGameWindow: showGameWindow,
		showMenuWindow: showMenuWindow,		
		
		showGameMenu: showGameMenu,
		hideGameMenu: hideGameMenu,		
		getPlayers : getPlayers,
	}		

})();


/* harmony default export */ __webpack_exports__["default"] = (Lobby); 


/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lobby_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lobby.js */ "./src/lobby.js");


document.addEventListener("DOMContentLoaded", lobby_js__WEBPACK_IMPORTED_MODULE_0__["default"].DOMContentLoaded);

/***/ }),

/***/ "./src/network/client.js":
/*!*******************************!*\
  !*** ./src/network/client.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var simple_peer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! simple-peer */ "./node_modules/simple-peer/index.js");
/* harmony import */ var simple_peer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(simple_peer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var const_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! const.js */ "./src/const.js");
/* harmony import */ var network_packet_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! network/packet.js */ "./src/network/packet.js");
/* harmony import */ var lobby_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lobby.js */ "./src/lobby.js");
/* harmony import */ var game_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! game.js */ "./src/game.js");








var Client = function() {	
	this.id = -1;
	this.name = "";	
	
	//this.players = [];
	
	this.peer = null;
	this.connected = false;	
	//пакеты от хоста
	this.packetBuffer = [];
	this.lastPacketID = 0;	
	//
	this.packetsToSend = [];
		
	this.chatText = "";
	this.chatOffset = "\xa0"; //Space	
	this.chatPacket = [];
	
	this.game = new game_js__WEBPACK_IMPORTED_MODULE_4__["default"]();	
	this.packetManager = new network_packet_js__WEBPACK_IMPORTED_MODULE_2__["default"](this, this.game);
	//игра в процессе
	this.playing = false;
	//активый главный цикл
	this.active = false;	
	this.hCycle = 0;	
	this.mSecondPerTic = 1000 / const_js__WEBPACK_IMPORTED_MODULE_1__["Const"].TICS_PER_SECOND;
	
	this.index = 0;
}

Client.prototype.create = function(callback) {	
	//p2p соединение	
	this.peer = new simple_peer__WEBPACK_IMPORTED_MODULE_0___default.a({ 
		initiator: true, 
		trickle: false,
		reconnectTimer: 100,
		config: {
       		//iceTransportPolicy: "relay",
			iceServers: [
				{ urls: 'stun:stun.l.google.com:19302' },
				{ urls: 'stun:stun4.l.google.com:19302' },
			]
		}
	});
	this.listen();	
	
	this.packetBuffer = [];
	this.lastPacketID = 0;
	
	//токен для хоста
	this.peer.on('signal', (data) => {
  		//console.log('SIGNAL', JSON.stringify(data))
  		callback(data);
	});		
}

Client.prototype.listen = function() {
	this.peer.on('connect', () => {
  		console.log('CONNECT', this.id) 			
		this.onConnect();	
	});		
	this.peer.on('close', () => {
  		console.log('CLOSE', this.id)			
		this.onClose();		
	});
	this.peer.on('data', (data) => {
		this.onMessage(data);
	});
	
	this.peer.on('error', function (err) { 
		console.log(err) 
	});
}

/*Client.prototype.safelyParseJSON = function(json) { 
 	 try {
    	return JSON.parse(json);
  	} catch (e) {
    	return null;
  	}  
}*/

Client.prototype.onMessage = function(packet) {
	if(this.lastPacketID >= const_js__WEBPACK_IMPORTED_MODULE_1__["Const"].MAX_PEER_PACKETS) {		
		console.log("Error: max peer packets");		
		this.packetBuffer = [];
		this.lastPacketID = 0;
	}		
	if(!packet) return;
	//console.log(packet);	
	
	//TODO проверить размер пакета	
		
	this.packetBuffer[this.lastPacketID] = packet.buffer;
	this.lastPacketID++;
}

Client.prototype.onConnect = function() {		
}

Client.prototype.onClose = function() {	
	this.leaveGame();
}

Client.prototype.signal = function(token) {
	if(!this.peer) {
		return;
	}
	this.id = token.clientID;
	this.peer.signal(token);	
}

Client.prototype.destroy = function() {
	if(this.peer) {		
		this.peer.destroy();
		this.peer = null;
	}
	this.packetBuffer = [];
	this.lastPacketID = 0;	
}

Client.prototype.setId = function(id) {
	this.id = id;
}

Client.prototype.isConnected = function() {
	return this.peer && this.peer.connected && !this.peer.destroyed;
}

Client.prototype.sendPacket = function(packet) {
	if(this.isConnected()) {		
		this.peer.send(packet);	
		packet = null;
	}
}

Client.prototype.sendChatMsg = function(msg) {
	var _msg = msg.substring(0, const_js__WEBPACK_IMPORTED_MODULE_1__["Const"].CHAT_MESSAGE_MAX);	
	//console.log(_msg.length, _msg);
	
	this.chatPacket = [{
		id: this.id,		
		msg: _msg,
		len: _msg.length
	}];
}

Client.prototype.addChatMsg = function(msg) {
	var chat = document.getElementById('chat-lobby');
	if(this.playing)
		chat = document.getElementById('chat-game');
	this.chatText += this.chatOffset + msg + "\n";
    chat.textContent = this.chatText;		
}

Client.prototype.clearChat = function() {
	this.chatText = "";
}

//---------------------------------------------------------------------------------
Client.prototype.joinRoom = function() {	
	if(this.playing || this.active) return;
	
	this.clearChat();	
	this.startLoop();
}

Client.prototype.leaveRoom = function() {	
	this.id = -1;	
	this.destroy();
	this.active = false;
}

Client.prototype.leaveGame = function() {	
	if(!this.playing) return;
	
	this.playing = false;	
	this.active = false;
	
	this.destroy();	
	this.game.free();	
	lobby_js__WEBPACK_IMPORTED_MODULE_3__["default"].leaveGame();
}

Client.prototype.startGame = function() {
	if(!this.isConnected()) {
		lobby_js__WEBPACK_IMPORTED_MODULE_3__["default"].showMenuWindow();
		console.log("Ошибка при старте");
		return;
	}
		
	this._startGame();
}

Client.prototype._startGame = function() {
	if(this.playing) return;
	
	this.game.init();	
	this.game.id = this.id;	
	//this.playing = true;
	lobby_js__WEBPACK_IMPORTED_MODULE_3__["default"].startGame();
}
//---------------------------------------------------------------------------------
Client.prototype.startLoop = function() {
	if (this.hCycle) {
        clearTimeout(this.hCycle);
        this.hCycle = 0;
    }	
	
	var clientCycle = () => {
		if(!this.active) {
			console.log("### Cycle stop ###");
        	return;
    	}  		
		this.run();
		
		this.hCycle = setTimeout(clientCycle, this.mSecondPerTic); 
	}
	
	this.active = true;    
    clientCycle();
}

Client.prototype.run = function() {
	
	//console.log("**** CLIENT CYCLE ***");	
	
	//1.обработать пакеты от хоста	
	this.packetBuffer.forEach((packet) => {		
		if(packet) {				
			//console.log("Пакет клиента", packet);
			switch(this.packetManager.getPacketID(packet)) {	
				case const_js__WEBPACK_IMPORTED_MODULE_1__["Msg"].HostState:	
					if(this.playing) {
						this.packetManager.dHostStatePacket(packet);
					}															
					break;		
				case const_js__WEBPACK_IMPORTED_MODULE_1__["Msg"].Chat:	
					var messages = this.packetManager.dChatPacket(packet);
					//console.log(messages);
					messages.forEach((msg) => {
						this.addChatMsg(lobby_js__WEBPACK_IMPORTED_MODULE_3__["default"].getPlayers()[msg.id] + ":" + this.chatOffset + msg.msg);
					});			
					break;								
				case const_js__WEBPACK_IMPORTED_MODULE_1__["Msg"].Start:
					if(!this.playing) {
						var players = this.packetManager.dHostStartPacket(packet);
						//console.log("Список игроков:", players);
						this.startGame();	
						this.game.startGame(players, ()=> {
							this.playing = true;
							console.log("client start");
						});
					}
					break;	
				case const_js__WEBPACK_IMPORTED_MODULE_1__["Msg"].Leave:		
					var playerID = this.packetManager.dHostLeavePacket(packet);
					console.log("Вышел игрок:", playerID);	
					this.game.removeEntity(playerID);	
					//хост вышел
					if(playerID == const_js__WEBPACK_IMPORTED_MODULE_1__["Const"].HOST_ID) {
						this.leaveGame();
					}
					break;										
				default:
					break;	
			}
		}		
	});
	this.packetBuffer = [];
	this.lastPacketID = 0;
	
	
	//сообщения чата
	if(this.chatPacket.length > 0) {
		this.sendPacket(this.packetManager.sChatPacket(this.chatPacket));	
		this.chatPacket = [];
	}	
	
	
	if(this.playing) {
		//2.обновить состояние игрока и мира		
		this.game.runTick();			
		
		//3.сформировать пакет для хоста и отослать
		//if(this.game.needUpdatePlayerControls) 
		{
			this.game.needUpdatePlayerControls = false;
			this.sendPacket(this.packetManager.sClientActionPacket(this.game.activePlayer));
		}					
	}	
}


/* harmony default export */ __webpack_exports__["default"] = (Client);

/***/ }),

/***/ "./src/network/host.js":
/*!*****************************!*\
  !*** ./src/network/host.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var simple_peer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! simple-peer */ "./node_modules/simple-peer/index.js");
/* harmony import */ var simple_peer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(simple_peer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var const_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! const.js */ "./src/const.js");
/* harmony import */ var network_client_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! network/client.js */ "./src/network/client.js");
/* harmony import */ var network_packet_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! network/packet.js */ "./src/network/packet.js");
/* harmony import */ var hostgame_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hostgame.js */ "./src/hostgame.js");
/* harmony import */ var ticker_worker_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ticker.worker.js */ "./src/ticker.worker.js");
/* harmony import */ var ticker_worker_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ticker_worker_js__WEBPACK_IMPORTED_MODULE_5__);








//--------------------------------------------------------------------------
var MClient = function(host) {
	network_client_js__WEBPACK_IMPORTED_MODULE_2__["default"].call(this, null);	
	this.host = host;
}

MClient.prototype = Object.create(network_client_js__WEBPACK_IMPORTED_MODULE_2__["default"].prototype);
MClient.prototype.constructor = MClient;


MClient.prototype.create = function(token, name, callback) {	
	this.peer = new simple_peer__WEBPACK_IMPORTED_MODULE_0___default.a({ 
		initiator: false, 
		trickle: false,
		reconnectTimer: 100,
		config: {
       		//iceTransportPolicy: "relay",
			iceServers: [
				{ urls: 'stun:stun.l.google.com:19302' },
				{ urls: 'stun:stun4.l.google.com:19302' },
			]
		}
	});
	//this.peer._debug = console.log;
	this.listen();		
	
	this.name = name;
	//пакеты от клиента
	this.packetBuffer = [];
	this.lastPacketID = 0;	
	
	//клиентский токен для хоста	
	this.signal(token);
	//ответный токен хоста
	this.peer.on('signal', (data) => {	  		
  		callback(data);
	});	
}

MClient.prototype.onConnect = function() {	
}

MClient.prototype.onClose = function() {	
	//CLIENT.prototype.onClose.call(this);	
	this.host.clientLeave(this.id);
}

MClient.prototype.startGame = function() {}

MClient.prototype.startLoop = function() {}

MClient.prototype.sendLastPacket = function() {}

//--------------------------------------------------------------------------
var Host = function() {		
	//клиент хоста
	this.createSelfClient();
	
	//список всех клиентов
	this.clients = [];		
	this.clientsCount = 0;
	
	this.game = new hostgame_js__WEBPACK_IMPORTED_MODULE_4__["default"]();
	//
	this.packetManager = new network_packet_js__WEBPACK_IMPORTED_MODULE_3__["default"](this, this.game);
	//игра в процессе
	this.playing = false;
	//активый главный цикл
	this.active = false;
	
	//сетевые переменные 
	this.chatPackets = [];	
	//this.clientPackets = [];
}

Host.prototype.createSelfClient = function() {
	this.self = new MClient(this);			
	//	
	this.self.sendPacket = function(packet) {		 	
		this.onMessage(packet);
	};
	//
	this.self.startGame = function() {		 	
		this._startGame();
	};
}

Host.prototype.addSelfClient = function() {
	this.self.id = const_js__WEBPACK_IMPORTED_MODULE_1__["Const"].HOST_ID;	
	//добавляем хост-клиент в список всех клиентов
	this.clients.push(this.self);
	this.clientsCount++;	
}

Host.prototype.addNewClient = function(token, name, callback) {	
	if(this.clientsCount >= const_js__WEBPACK_IMPORTED_MODULE_1__["Const"].MAX_PLAYERS_ROOM) {
		return;
	}
	var clientId = token.clientID;
	//ид клиента занят
	if(this.clients[clientId]) return;	
	
	var client = new MClient(this);	
	this.clients[clientId] = client;
	this.clientsCount++;	
	
	client.create(token, name, callback);	
}

Host.prototype.removeClient = function(clientId) {	
	var client = this.clients[clientId];
	if(clientId > 0 && client) {			
		client.destroy();
		client = null;			
		this.clients[clientId] = null;
		this.clientsCount--;	
	}	
}

Host.prototype.removeAllClients = function() {
	this.clients.forEach((client) => {
		if(client) {			
			client.destroy();
			client = null;
		}  		
	});
	this.clients = [];	
	this.clientsCount = 0;
}

Host.prototype.getClientMsgBuffer = function(id) {
	if(id >= 0 && this.clients[id]) {
		return this.clients[id].packetBuffer;
	}	
	return [];	
}

Host.prototype.getClientById = function(id) {
	if(id >= 0 && this.clients[id]) {
		return this.clients[id];		
	}		
	return null;
}

Host.prototype.broadcastPacket = function(packet) {	
	//всем игрокам включая себя
	this.clients.forEach((client) => {
		if(client) {
			client.sendPacket(packet);
		}  		
	});
}

Host.prototype.getPlayers = function() {
  	var	players = [];
	
	//все игроки включая себя
	this.clients.forEach((client) => {
		if(client) {
			players.push({
				id:   client.id,
				name: client.name,
			});
		}  		
	});	
	return players;
}

//---------------------------------------------------------------------------------
Host.prototype.createRoom = function() {	
	if(this.playing || this.active) return;
	
	//добавим себя в список клиентов	
	this.addSelfClient();
	//this.game.setHost(true);
	this.startLoop();
}

Host.prototype.leaveRoom = function() {		
	this.removeAllClients();
	this.active = false;
	this.freeWorker();
}

Host.prototype.leaveGame = function() {	
	if(!this.playing) return;
	
	this.active = false;
	this.playing = false;
	
	//this.game.setHost(false);	
	this.broadcastPacket(this.packetManager.sHostLeavePacket(this.self.id));
	this.game.free();
	this.removeAllClients();
	this.freeWorker();
	this.self.leaveGame();	
	
	//убираем таймер принудительного старта
	clearTimeout(this.startTimerId);
}

Host.prototype.startGame = function() {		
	var	players = this.getPlayers();
	this.game.init();	
	this.game.startGame(players);	
	this.broadcastPacket(this.packetManager.sHostStartPacket(this.game.spawnX, this.game.spawnY, 
															 players,
															 this.game.world.seed));	
	this.readyClients = [];
	
	//старт через время независимо от готовности														
	this.startTimerId = setTimeout(()=>{ 
		if(!this.playing) {
			this.playing = true; 
			console.log("timeout forced start");
		}
	}, const_js__WEBPACK_IMPORTED_MODULE_1__["Const"].TIMEOUT_GAME_START);
}

Host.prototype.clientLeave = function(id) {
	this.removeClient(id);
	this.game.removeEntity(id);	
	this.broadcastPacket(this.packetManager.sHostLeavePacket(id));
}
//---------------------------------------------------------------------------------
Host.prototype.startLoop = function() {
	if(window.Worker){
		this.active = true;	
		
		if(!this.worker) {				
        	this.worker = new ticker_worker_js__WEBPACK_IMPORTED_MODULE_5___default.a(); 
		
        	this.worker.onmessage = (e) => {
				if(this.active) {
					this.run();
				}             
        	}  
			
			this.worker.onerror = function (e) {
 				console.log(e.message, e);
 			}
		}		
    } else {
        alert("Your browser do not support Worker");
    }
}
Host.prototype.freeWorker = function() {
	if(!this.worker) return;
				
	this.worker.terminate();		
    this.worker = null; 	
}

Host.prototype.run = function() {	
	
	//console.log("host tick: ", Date.now() - this.lastTime);	
	   
    //1.состояние клиента хоста   
	this.self.run();
		
	//2.обработать клиентские пакеты 	
	this.clients.forEach((client) => {
		if(client) {
			client.packetBuffer.forEach((packet) => {
				if(packet) {					
					//console.log(packet);					
				
					switch(this.packetManager.getPacketID(packet)) {
						case const_js__WEBPACK_IMPORTED_MODULE_1__["Msg"].ClientReady:
							break;	
						case const_js__WEBPACK_IMPORTED_MODULE_1__["Msg"].ClientAction:
							//проверка на готовность клиентов после старта	
							if(!this.playing) {
								this.readyClients[client.id] = true;
								if(this.readyClients.length == this.clientsCount) {
									this.playing = true;
									console.log("host start");
								}
							}						
							this.packetManager.dClientActionPacket(client.id);							
							break;		
						case const_js__WEBPACK_IMPORTED_MODULE_1__["Msg"].Chat:								
							var message = this.packetManager.dChatPacket(packet);							
							message = message[0];
							//обрезаем сообщение
							message.msg = message.msg.substring(0, const_js__WEBPACK_IMPORTED_MODULE_1__["Const"].CHAT_MESSAGE_MAX);
							this.chatPackets.push(message);				
							break;														
						default:
							break;	
					}
				}
			});			
			client.packetBuffer = [];
			client.lastPacketID = 0;							
		}		
	});  
	
	//рассылка чат сообщений
	if(this.chatPackets.length > 0) {
		this.broadcastPacket(this.packetManager.sChatPacket(this.chatPackets));	
		this.chatPackets = [];	
	}	
	
	if(this.playing) {
		//3.обновить состояние мира и игроков		
		this.game.runTick();    	
	
		//4.сформировать для каждого клиента пакет и отослать	
		this.broadcastPacket(this.packetManager.sHostStatePacket());
	}	
		
	//this.lastTime = Date.now();
}


/* harmony default export */ __webpack_exports__["default"] = (Host);

/***/ }),

/***/ "./src/network/packet.js":
/*!*******************************!*\
  !*** ./src/network/packet.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var const_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! const.js */ "./src/const.js");



var PacketManager = function(parent, game) {
	this.parent = parent;
	this.game = game;
	this.entitylist = game.entitylist;		
	this.itemlist = game.itemlist;	
	
	this.view = null;
	this.index = 0;	
}	

PacketManager.prototype.getPacketID = function(packet) {		
	this.view = new DataView(packet);	
	return this.view.getUint8(0);
}
//SET
PacketManager.prototype.setUint8 = function(view, data) {	
	view.setUint8(this.index, data);
	this.index++;
}
PacketManager.prototype.setInt32 = function(view, data) {	
	view.setInt32(this.index, data);
	this.index+=4;
}
PacketManager.prototype.setFloat32 = function(view, data) {
	view.setFloat32(this.index, data);
	this.index+=4;
}
//GET
PacketManager.prototype.getUint8 = function() {	
	this.index++;
	return this.view.getUint8(this.index - 1);	
}
PacketManager.prototype.getInt32 = function() {	
	this.index+=4;
	return this.view.getInt32(this.index - 4);
	
}
PacketManager.prototype.getFloat32 = function() {
	this.index+=4;
	return this.view.getFloat32(this.index - 4);
}

//------- HOST --------------------------------------------------------------------

//пакет старт игры
//packetID playerCount spawnX spawnY <playerID strLen [name], ... playerID strLen [name]>
PacketManager.prototype.sHostStartPacket = function(spawnX, spawnY, players, seed) {	
	if(!players) return null;
	
	var playersCount = players.length;	
	var buffer = new ArrayBuffer(4 + 4 + playersCount * (2 + (const_js__WEBPACK_IMPORTED_MODULE_0__["Const"].PLAYER_NAME_CHARS+1) * const_js__WEBPACK_IMPORTED_MODULE_0__["Const"].BYTES_FOR_CHAR));
	var view = new DataView(buffer);	
	var buf16 = new Uint16Array(buffer);
	var index = 0,
		offset = 0;
	
	//ид пакета
	view.setUint8(0, const_js__WEBPACK_IMPORTED_MODULE_0__["Msg"].Start);
	view.setUint8(1, playersCount);
	//точка спавна
	view.setUint8(2, spawnX);  
	view.setUint8(3, spawnY); 	
	//сид мира
	view.setInt32(4, seed);
	
	players.forEach((player) => {
		view.setUint8(index + 10, player.id);			
		view.setUint8(index + 11, player.name.length);
		//байтовый массив имени
		buf16.set(this.stringToArrayBuffer(player.name), offset + 6); //16*2 байт
		offset += 17;
		index += 34;
	});
	
	return new Uint8Array(buffer);
}
PacketManager.prototype.dHostStartPacket = function(packet) {		
	var buf16 = new Uint16Array(packet); 	   
  	var players = [];
  	var index = 0,
  		offset = 0,
		len = 0;  
	//точка спавна
	this.game.spawnX = this.view.getUint8(2);
	this.game.spawnY = this.view.getUint8(3);
	//сид мира
	this.game.world.setSeed(this.view.getInt32(4));
	
	var playersCount = this.view.getUint8(1);	
	while(playersCount--) {  
		//длинна имени в символах
  		len = this.view.getUint8(index + 11);		
  		players.push({
    		id: this.view.getUint8(index + 10),
      		name: this.arrayBufferToString(buf16.slice(offset + 6, len + offset + 6))
    	});
    	offset += 17;
		index += 34;
  	}	
	
  	return players;
}

//пакет игрок вышел
//packetID playerID
PacketManager.prototype.sHostLeavePacket = function(playerID) {
	var buf8 = new Uint8Array(2);
	buf8[0] = const_js__WEBPACK_IMPORTED_MODULE_0__["Msg"].Leave;
	buf8[1] = playerID;
	return buf8;
}
PacketManager.prototype.dHostLeavePacket = function(packet) {	
	return this.view.getUint8(1);
}

//пакет состояний объектов
//packetID objectCount <objType objID ... >, ... <objType objID ... >
/*PacketManager.prototype.sHostStatePacket = function() {	
	var entityCount = this.entitylist.size(),
		updateCount = this.game.updatelist.length,
		projectileCount = this.projectilelist.updatedSize(),
		itemCount = this.itemlist.updatedSize();	
		
	var buffer = new ArrayBuffer(5 + entityCount * 17 + updateCount * 2);
	var view = new DataView(buffer);	
	
	var tileObj, index = 0;
	
	view.setUint8(0, Msg.HostState);
	view.setUint8(1, entityCount);	
	view.setUint8(2, updateCount);	
		
	this.entitylist.pool().forEach((entity) => {
		if(entity) {					
			view.setInt32(index + 5, entity.id + 1); //[0...] -> [1...]
			view.setUint8(index + 9, entity.state);
			view.setUint8(index + 10, entity.type);	
			view.setUint8(index + 11, entity.timeStamp); //timeStamp				
			if(entity.type > 99) { //projectile
				view.setUint8(index + 12, entity._dx + 100); // projectile dx
				view.setUint8(index + 13, entity._dy + 100); // projectile dy
			} else {
				view.setUint8(index + 12, entity.dir + 1); //[-1,1] -> [0,2]	
				view.setUint8(index + 13, entity.isAttacked());	//damage	
			}					
			view.setFloat32(index + 14, entity.x); 
			view.setFloat32(index + 18, entity.y); 				
		}		
		index += 17;
	});	
	index -= 17;
		
	while(updateCount--) {
		tileObj = this.game.updatelist[updateCount];
		view.setUint8(index + 22, tileObj[0]);
		view.setUint8(index + 23, tileObj[1]);
		
		index += 2;
	}
	
	
	this.game.updatelist = [];
	this.entitylist.removeAllMarked();
	
	return new Uint8Array(buffer);
}*/
/*PacketManager.prototype.dHostStatePacket = function(packet) {  
  	var index = 0;		
	var entityCount = this.view.getUint8(1),
		updateCount = this.view.getUint8(2);
	var id, entity, 
		state, type;
		
	this.index = 5;
	
	while(entityCount--) {			
		id = this.view.getInt32(index + 5) - 1; //[1...] -> [0...]
		entity = this.entitylist.getObjectById(id);		
		
		state = this.view.getUint8(index + 9); 
		switch(state) {
			case EntityState.Create:
				if(!entity) {
					type = this.view.getUint8(index + 10);
					entity = this.game.createEntityByType(type, id);
					if(entity) {	
						if(type > 99) { //projectile
							entity.init(this.view.getUint8(index + 12) - 100,  // projectile dx
										this.view.getUint8(index + 13) - 100); // projectile dy	
						}						
						entity.setPosition(this.view.getFloat32(index + 14),  //x
										   this.view.getFloat32(index + 18)); //y
						this.game.addEntity(entity, id);
					}						
				}
				state = EntityState.Default;
				break;
				
			case EntityState.Remove:									
				if(entity)				
					entity.hurt(this.view.getUint8(index + 13));	
				this.game.removeEntity(id);
			
				index += 17;    
				continue;			
		}
		
		if(entity) {
			entity.state = state;
			entity.type =  type;
			entity.dir 	= this.view.getUint8(index + 12) - 1;  //dir [0,2] -> [-1,1]
			entity.hurt(this.view.getUint8(index + 13));	   //attacked											
			entity.setHostState(this.view.getUint8(index + 11),     //timeStamp
								this.view.getFloat32(index + 14),  //x
								this.view.getFloat32(index + 18)); //y
		} 					
		index += 17;    		
	} 	
	index -= 17;
	
	while(updateCount--) {	
		this.game.activateObj(null, 
							  this.view.getUint8(index + 22), //i
							  this.view.getUint8(index + 23), //j	
							  false);	//host
		index += 2;
	}
}*/


PacketManager.prototype.sHostStatePacket = function() {	
	let entityCount = this.entitylist.size(),
		updateCount = this.game.updatelist.length,		
		itemCount = this.itemlist.updatedSize();	
		
	let buffer = new ArrayBuffer(5 + entityCount * 17 + updateCount * 2 + itemCount * 8);
	let view = new DataView(buffer);
	let tileObj;
	
	view.setUint8(0, const_js__WEBPACK_IMPORTED_MODULE_0__["Msg"].HostState);
	view.setUint8(1, entityCount);	
	view.setUint8(2, updateCount);		
	view.setUint8(3, itemCount);	
	
	this.index = 4;
		
	this.entitylist.pool().forEach((entity) => {								
		this.setInt32(view, entity.id + 1); //[0...] -> [1...]
		this.setUint8(view, entity.state);
		this.setUint8(view, entity.type);	
		this.setFloat32(view, entity.x); 
		this.setFloat32(view, entity.y);
		if(entity.type > 99) { //projectile
			this.setUint8(view, entity._dx + 100); 	
			this.setUint8(view, entity._dy + 100); 
		} else {
			this.setUint8(view, entity.isHurted());	//damage
			this.setUint8(view, entity.dir + 1); //[-1,1] -> [0,2]	
		}	
		this.setUint8(view, entity.timeStamp);
	});		
		
	while(updateCount--) {
		tileObj = this.game.updatelist[updateCount];
		this.setUint8(view, tileObj[0]);
		this.setUint8(view, tileObj[1]);			
	}	
	
	this.itemlist.forEachUpdated((item) => {
		this.setInt32(view, item.id + 1); //[0...] -> [1...]
		this.setUint8(view, item.state);
		this.setUint8(view, item.type);		
		this.setUint8(view, item.i);
		this.setUint8(view, item.j);
		this.setInt32(view, item.owner + 1); //[0...] -> [1...]
	});
	
	this.game.updatelist = [];
	this.entitylist.removeAllMarked();
	this.itemlist.removeAllMarked();	
	
	return new Uint8Array(buffer);
}
PacketManager.prototype.dHostStatePacket = function(packet) {    		
	let entityCount = this.view.getUint8(1),
		updateCount = this.view.getUint8(2),		
		itemCount = this.view.getUint8(3);
	let id, object,	state, type, x, y, arg1, arg2;
		
	this.index = 4;
	
	while(entityCount--) {			
		id = this.getInt32() - 1; //[1...] -> [0...]			
		state = this.getUint8(); 
		type = this.getUint8();
		x = this.getFloat32();
		y = this.getFloat32();	
		arg1 = this.getUint8(); //damage or dx
		arg2 = this.getUint8(); //dir or dy
		
		object = this.entitylist.getObjectById(id);	
				
		switch(state) {
			case const_js__WEBPACK_IMPORTED_MODULE_0__["EntityState"].Create:
				if(!object) {					
					object = this.game.createObjectByType(type, id);
					if(object) {
						if(type > 99) { //projectile
							object.init(arg1 - 100,  //dx
										arg2 - 100); //dy	
						}																
						object.setPosition(x, y); 
						this.game.addEntity(object, id);
					}						
				}
				state = const_js__WEBPACK_IMPORTED_MODULE_0__["EntityState"].Default;
				break;
				
			case const_js__WEBPACK_IMPORTED_MODULE_0__["EntityState"].Remove:									
				if(object)				
					object.hurt(arg1);	
				this.game.removeEntity(id);
				this.index++;
				continue;			
		}		
		if(object) {
			object.state = state;
			object.type =  type;
			object.hurt(arg1);	    //damage		
			object.dir = arg2 - 1;  //dir [0,2] -> [-1,1]			
			object.setHostState(this.getUint8(), //timeStamp
								x,  
								y); 			
		} else {
			this.index++;
		}		   		
	} 	
	
	
	while(updateCount--) {	
		this.game.activateObj(null, 
							  this.getUint8(), //i
							  this.getUint8(), //j	
							  false);	//host		
	}
		
	while(itemCount--) {	
		id = this.getInt32() - 1; //[1...] -> [0...]
		state = this.getUint8();
		type = this.getUint8();
		x = this.getUint8(); //i
		y = this.getUint8(); //j
		arg1 = this.getInt32() - 1; //[1...] -> [0...]
		
		object = this.itemlist.getObjectById(id);	
		
		switch(state) {
			/*case ItemState.Create:
				break;
			case ItemState.Remove:
				break;*/
			case const_js__WEBPACK_IMPORTED_MODULE_0__["ItemState"].Drop:
				this.game.dropItem(x, y, object, id);
				this.game.needRebuild = true;
				break;
			case const_js__WEBPACK_IMPORTED_MODULE_0__["ItemState"].Pickup:
				this.game.pickupItem(object, arg1);
				this.game.needRebuild = true;
				break;
			case const_js__WEBPACK_IMPORTED_MODULE_0__["ItemState"].Equip:
				break;
			case const_js__WEBPACK_IMPORTED_MODULE_0__["ItemState"].Unequip:
				break;
		}		
	}
}

PacketManager.prototype.sHostPongPacket = function() {	
}
PacketManager.prototype.dHostPongPacket = function(packet) {		
}

//------- CLIENT ------------------------------------------------------------------

//пакет готовности клиента начать игру
PacketManager.prototype.sClientReadyPacket = function(id) {
	var buf8 = new Uint8Array(8);	
	buf8[0] = const_js__WEBPACK_IMPORTED_MODULE_0__["Msg"].ClientReady;
	buf8[1] = id;
	return buf8;
}
PacketManager.prototype.dClientReadyPacket = function(packet) {	
	return this.view.getUint8(1); //id	
}

//пакет действий клиента
PacketManager.prototype.sClientActionPacket = function(player) {	
	if(player) {
		var buf8 = new Uint8Array(12);
		buf8[0] = const_js__WEBPACK_IMPORTED_MODULE_0__["Msg"].ClientAction;
		buf8[1] = player.timeStamp;
		buf8[2] = player.state;
		buf8[3] = player.dx + 1;  //[-1,0,1] -> [0,1,2]
		buf8[4] = player.dy + 1;  //[-1,0,1] -> [0,1,2]
		buf8[5] = player.dir + 1; //[-1,1] -> [0,2] 
		if(this.game.attack) {
			buf8[6] = this.game.attack; //mob id
			this.game.attack = null;
		}						
		if(this.game.activate) { //взаимодейсвие с окружением
			buf8[7] = this.game.activate[0];
			buf8[8] = this.game.activate[1];
			this.game.activate = null;
		}	
		if(this.game.cast) { //каст заклинания
			var cast = this.game.cast;
			buf8[9] = cast.type;
			buf8[10] = cast.dx + 100; 
			buf8[11] = cast.dy + 100;
			this.game.cast = null;
		}		
		return buf8;
	}
	return null;
}
PacketManager.prototype.dClientActionPacket = function(playerID) {	
	var player = this.entitylist.getObjectById(playerID);
	
	//TODO валидация данных от игрока
	
	if(player) {
		//player.needStateUpdate = true;
		player.timeStamp = this.view.getUint8(1);
		player.state =	   this.view.getUint8(2),	
		player.setMovement(this.view.getUint8(3) - 1,  //dx  [0,1,2] -> [-1,0,1] 
						   this.view.getUint8(4) - 1); //dy  [0,1,2] -> [-1,0,1] 
		player.dir = 	   this.view.getUint8(5) - 1;  //dir [0,2] -> [-1,1] 
		
		if(this.view.getUint8(6)) {
			player.attackMob = this.view.getUint8(6);      //mob id
		}		
		if(this.view.getUint8(7)) { //взаимодейсвие с окружением
			player.activate = [this.view.getUint8(7),
						       this.view.getUint8(8)];
		}		
		if(this.view.getUint8(9)) { //каст заклинания
			var cast = {};			
			cast.type = this.view.getUint8(9);
			cast.dx = this.view.getUint8(10) - 100; 
			cast.dy = this.view.getUint8(11) - 100;	
			player.spellcast = cast;	
		}	
	}
}


PacketManager.prototype.sClientPingPacket = function() {	
}
PacketManager.prototype.dClientPingPacket = function(packet) {		
}

//-------- CHAT -------------------------------------------------------------------

//packetID msgCount <playerID buffSize [buffer]>, ... <playerID buffSize [buffer]>
PacketManager.prototype.sChatPacket = function(messages) {
	var buffer = new ArrayBuffer(2 + messages.length * (2 + (const_js__WEBPACK_IMPORTED_MODULE_0__["Const"].CHAT_MESSAGE_MAX+1) * const_js__WEBPACK_IMPORTED_MODULE_0__["Const"].BYTES_FOR_CHAR));
	var view = new DataView(buffer);
	var buf16 = new Uint16Array(buffer);
	
	var index = 0,
		offset = 0;
	
	view.setUint8(0, const_js__WEBPACK_IMPORTED_MODULE_0__["Msg"].Chat);
	view.setUint8(1, messages.length);
	
	messages.forEach((msg) => {				
		view.setUint8(index+2, msg.id); //ид игрока
		view.setUint8(index+3, msg.len); //размер сообщения
		buf16.set(this.stringToArrayBuffer(msg.msg), offset+3); //сообщение
		
		index += 2 + 2 * const_js__WEBPACK_IMPORTED_MODULE_0__["Const"].CHAT_MESSAGE_MAX;
		offset += 1 + const_js__WEBPACK_IMPORTED_MODULE_0__["Const"].CHAT_MESSAGE_MAX;
	});	
	return new Uint8Array(buffer);
}
PacketManager.prototype.dChatPacket = function(packet) {
	var buf16 = new Uint16Array(packet); 	 
	var messages = [];
	var count = this.view.getUint8(1),
		len = 0,
		index = 0,
		offset = 0;
	
	while(count--) {
		len = this.view.getUint8(index+3);
		
		messages.push({			
			id: this.view.getUint8(index+2),
			len: len,			
			msg: this.arrayBufferToString(buf16.slice(offset + 3, len + offset + 3))
		})
				
		index += 2 + 2 * const_js__WEBPACK_IMPORTED_MODULE_0__["Const"].CHAT_MESSAGE_MAX;
		offset += 1 + const_js__WEBPACK_IMPORTED_MODULE_0__["Const"].CHAT_MESSAGE_MAX;
	}	
	return messages;
}

//------- STRING ------------------------------------------------------------------

PacketManager.prototype.arrayBufferToString = function(buf) {
 	return String.fromCharCode.apply(null, buf);
}
PacketManager.prototype.stringToArrayBuffer = function(str) { 	
  	var bufView = new Uint16Array(str.length); // 2 bytes for each char
  	for (var i=0, strLen = str.length; i < strLen; i++) {
    	bufView[i] = str.charCodeAt(i);
  	}
  	return bufView;
}


/* harmony default export */ __webpack_exports__["default"] = (PacketManager);

/***/ }),

/***/ "./src/render/camera.js":
/*!******************************!*\
  !*** ./src/render/camera.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var const_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! const.js */ "./src/const.js");



var Camera = function(game) {
	this.game = game;	
	this.attached = null;
	
	this.posX = 0;
	this.posY = 0;	
	this.offsetX = 0;
	this.offsetY = 0;
	this.width2 = 0;
	this.height2 = 0;
}

Camera.prototype.attach = function(player) {
	this.dettach();
	
	player.attached = true;
	this.attached = player;
}
Camera.prototype.dettach = function() {
	if(this.attached) {
		this.attached.attached = false;
	}	
	this.attached = null;
}

Camera.prototype.resize = function(width, height) {
	this.width2 = Math.floor(width * 0.5);
	this.height2 = Math.floor(height * 0.5);
}

Camera.prototype.update = function(container) {
	if(!this.attached) return;
	
	this.posX = this.attached.x;
	this.posY = this.attached.y;
	
	//костыль от полос между текстурами
	this.posX = Math.round((this.posX + Number.EPSILON) * 10) * 0.1;
	this.posY = Math.round((this.posY + Number.EPSILON) * 10) * 0.1;
	
	//центрируем камеру на игроке
	this.offsetX = -const_js__WEBPACK_IMPORTED_MODULE_0__["Const"].STAGE_SCALE * this.posX + this.width2;
	this.offsetY = -const_js__WEBPACK_IMPORTED_MODULE_0__["Const"].STAGE_SCALE * this.posY + this.height2;	
	container.x = this.offsetX;	
	container.y = this.offsetY;
}

Camera.prototype.getPosX = function() {	
	return this.posX;
}
Camera.prototype.getPosY = function() {
	return this.posY;
}


/* harmony default export */ __webpack_exports__["default"] = (Camera);

/***/ }),

/***/ "./src/render/gui.js":
/*!***************************!*\
  !*** ./src/render/gui.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pixi.js */ "./node_modules/pixi.js/dist/pixi.min.js");
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pixi_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var const_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! const.js */ "./src/const.js");





var CELL_SIZE = 48;

var InventoryWindow = function () {		
	this.container = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Container"]();		
	this.cellW = 10;
	
	//this.CELL_SIZE = 48;
	this.OFFSET_TOP = 20;
}
InventoryWindow.prototype.build = function(cellW, cellH) {		
	this.cellW = cellW;

	const graphics = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Graphics"]();
	//rectangle
	graphics.beginFill(0x2A2C37);
	graphics.drawRect(0, 0, cellW*CELL_SIZE, cellH*CELL_SIZE);
	graphics.endFill();

	graphics.lineStyle(1, 0x969696, 1);	
	//vertical
	for(var i = 0; i <= cellW; i++) {
		graphics.moveTo(i * CELL_SIZE, 0);
		graphics.lineTo(i * CELL_SIZE, cellH * CELL_SIZE);
	}	
	//horizontal
	for(var j = 0; j <= cellH; j++) {
		graphics.moveTo(0, j * CELL_SIZE);
		graphics.lineTo(cellW * CELL_SIZE, j * CELL_SIZE);
	}
	
	graphics.closePath();
	graphics.endFill();
	
	this.container.addChild(graphics);	
	this.container.visible = false;
}	
InventoryWindow.prototype.resize = function(width, height) {
	this.container.x = Math.floor(width * 0.5 - (this.cellW * CELL_SIZE) * 0.5);
	this.container.y = this.OFFSET_TOP;
}

//----------------------------------------------------------------------------------------------

var HotBar = function (style) {
	this.style = style;
	this.container = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Container"]();	
	this.graphics = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Graphics"]();
	this.selected = 0;
	this.BETWEEN_CELLS = 5;
	this.OFFSET_BOTTOM = 20;
}
HotBar.prototype.build = function() {
	const graphics = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Graphics"]();
	graphics.lineStyle(1, 0x969696);
	graphics.beginFill(0x2A2C37, 0.2); //alpha	
			
	var i, x, text, index;	
	for(i = 0; i < 10; i++) {	
		x = i * (CELL_SIZE + this.BETWEEN_CELLS);
		
		graphics.drawRect(x, 0, CELL_SIZE, CELL_SIZE);
		
		//подпись клеток
		index = i + 1;
		if(index == 10)	index = 0;
		index = index.toString();
		
		text = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Text"](index, this.style);
		text.x = x;
		text.y = -2;		
		this.container.addChild(text);
	}
	graphics.endFill();		
	
	this.container.addChild(graphics);
	this.container.addChild(this.graphics); 
}
HotBar.prototype.select = function(index) {	
	index--;
	if(index < 0) index = 9;
	//if(index > 9) index = 0;
	this.selected = index;
	
	this.graphics.clear();
	this.graphics.lineStyle(1, 0xA8A105);
	this.graphics.drawRect(index * (CELL_SIZE + this.BETWEEN_CELLS), 0, CELL_SIZE, CELL_SIZE);
}
HotBar.prototype.resize = function(width, height) {
	this.container.x = Math.floor(width * 0.5 - (10 * (CELL_SIZE + this.BETWEEN_CELLS) * 0.5 ));
	this.container.y = Math.floor(height - CELL_SIZE - this.OFFSET_BOTTOM);	
}

//----------------------------------------------------------------------------------------------

var StateBar = function (style, colorbg, color, right) {	
	this.style = style;
	this.colorbg = colorbg;
	this.color = color;
	this.right = right;
	this.graphics = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Graphics"]();
	this.LENGTH = 154;
	this.HEIGHT = 20;		
	this.OFFSET_BOTTOM = 45;
	
	this.lastpar = null;
	this.lastmax = null;
}
StateBar.prototype.update = function(curr, max) {
	if(this.lastpar == curr && this.lastmax == max) return;
	this.lastpar = curr;
	this.lastmax = max;
	
	this.graphics.clear();
	this.graphics.lineStyle(1, 0x969696);
	this.graphics.beginFill(this.colorbg); 		
	this.graphics.drawRect(0, 0, this.LENGTH, this.HEIGHT);
	this.graphics.endFill();
	//this.graphics.closePath();
		
	this.graphics.lineStyle(0, 0x969696);
	this.graphics.beginFill(this.color); 	
	var len = Math.floor(this.LENGTH * curr / max) - 1;
	if(this.right) {
		this.graphics.drawRect(this.LENGTH - len - 1, 1, len, this.HEIGHT-1);
	} else {			
		this.graphics.drawRect(0, 1, len, this.HEIGHT-1);
	}		
	this.graphics.endFill();
}
StateBar.prototype.resize = function(width, height) {
	var bc = 5, //BETWEEN_CELLS
		len = 10 * (CELL_SIZE + bc) * 0.5;
	if(this.right) {
		this.graphics.x = Math.floor(width * 0.5 + len - this.LENGTH - bc);
	} else {
		this.graphics.x = Math.floor(width * 0.5 - len);
	}	
	this.graphics.y = Math.floor(height - CELL_SIZE - this.OFFSET_BOTTOM);	
}

//----------------------------------------------------------------------------------------------

var Gui = function(game) {
	this.game = game;	
	this.player = null;
	this.opened = false;	
	
	const style = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["TextStyle"]({
   		fill: "white",
    	fontFamily: "Verdana",
    	fontSize: 12,    	
    	strokeThickness: 2
	});	
	
	this.inventory = new InventoryWindow();	
	this.hotBar = new HotBar(style);
	this.healthBar = new StateBar(style, 0x4D0000, 0xFF0000, false);
	this.manaBar = new StateBar(style, 0x00004D, 0x0000FF, true);
	
	this.container = null;
}

// @Render
Gui.prototype.init = function(container) {
	this.player = this.game.activePlayer;	
	this.input = this.game.input;	

	var w = 10,
		h = 3;		
		
	this.inventory.build(w, h);	
	this.hotBar.build();
	this.healthBar.update(50, 100);
	this.manaBar.update(22, 100);
	
	this.container = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Container"]();
	this.container.addChild(this.inventory.container);
	this.container.addChild(this.hotBar.container);	
	this.container.addChild(this.healthBar.graphics);
	this.container.addChild(this.manaBar.graphics);
	
	container.addChild(this.container);	
}

Gui.prototype.free = function() {}

Gui.prototype.update = function() {
	if(!this.player) return;
	
	this.healthBar.update(this.player.health, this.player.healthMax);
	//this.manaBar.update(
	
	//hot bar
	//keys 0-9 --> code 48-57 --> 0-9
	var key = this.input.getPressed();
	if(key > 47 && key < 58) {
		key -= 48;		
		this.hotBar.select(key);
		this.input.pressed = null;
	}	
	
	if(this.opened) {
		//TODO обработка input в инвентаре
	}
}

// @Render
Gui.prototype.resize = function(width, height) {
	this.inventory.resize(width, height);
	this.hotBar.resize(width, height);	
	this.healthBar.resize(width, height);
	this.manaBar.resize(width, height);
}

Gui.prototype.isOpen = function() { return this.opened; }

Gui.prototype.openInventory = function(inventory) {
	if(!this.container) {
		this.opened = false;
		return;
	}
	this.opened = !this.opened;		
	this.inventory.container.visible = this.opened;
}

Gui.prototype.openChest = function(inventory) {}

Gui.prototype.close = function() {
	this.opened = false;
}

/*circle.mouseover = function(mouseData) {   
  	message.x = mouseData.data.global.x;
  	message.y = mouseData.data.global.y;
}
circle.mouseout = function(mouseData) {
}*/



/* harmony default export */ __webpack_exports__["default"] = (Gui);

/***/ }),

/***/ "./src/render/render.js":
/*!******************************!*\
  !*** ./src/render/render.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pixi.js */ "./node_modules/pixi.js/dist/pixi.min.js");
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pixi_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var stats_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! stats-js */ "./node_modules/stats-js/build/stats.min.js");
/* harmony import */ var stats_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(stats_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var const_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! const.js */ "./src/const.js");
/* harmony import */ var render_sprites_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! render/sprites.js */ "./src/render/sprites.js");
/* harmony import */ var entity_player_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! entity/player.js */ "./src/entity/player.js");
/* harmony import */ var entity_mob_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! entity/mob.js */ "./src/entity/mob.js");
/* harmony import */ var render_camera_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! render/camera.js */ "./src/render/camera.js");
/* harmony import */ var render_visibility_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! render/visibility.js */ "./src/render/visibility.js");












var Render = function(game) {	
	this.game = game;
	this.gui = game.gui;
	this.entitylist = game.entitylist;
	
	this.view = document.getElementById('game-canvas');
	this.hRender = 0;  
	this.renderer = null;	
	this.camera = null;
	//контейнеры
	this.stage = null;
	this.worldContainer = null;	
	this.screenContainer = null;
	//
	this.mesh = null;	
			
    this.rendering = false;			
	this.initialize = false;	 
	//вся игро графика
	this.sprites = new render_sprites_js__WEBPACK_IMPORTED_MODULE_3__["default"](this);
	this.texadded = false;
	this.texloaded = false;	
		
    this.rndPerMsecond = const_js__WEBPACK_IMPORTED_MODULE_2__["Const"].RENDER_PER_SECOND / 1000;  
	this.now = 0;
	this.lastTime = 0; 		
	this.delta = 0;
	this.lastDelta = 0;	
	
	this.resize = this.resize.bind(this);
	this.loseContext = this.loseContext.bind(this);
}

Render.prototype.getDelta = function() {	
	this.now = Date.now();
	this.delta = (this.now - this.lastTime) * this.rndPerMsecond;
	this.delta = (this.delta + this.lastDelta) * 0.5;
	
	this.lastTime = this.now;	
	this.lastDelta = this.delta;
	return this.delta;
}

Render.prototype.preloadTextures = function(callback) {
	var afterLoad = () => {
		console.log("Текстуры загружены")
		
		if(this.spradded) return;
		this.spradded = true;			
		//загрузка анимаций		
		this.sprites.createAnimationFrames();		
		//console.log("after sprites load");			
	}
	//гобальный window костыль для self/client
	if(window.texloaded) {
		afterLoad();
		callback();
		return;
	}	
	
	pixi_js__WEBPACK_IMPORTED_MODULE_0__["loader"].add([	
		'img/mobs.json',		
		'img/tiles.json',  
		'img/projectiles.json' 	  	
  	])	
  	.load((loader) => {		
		window.texloaded = true;		
		afterLoad();
		callback();						
	})
	.onError.add((e) => {
		window.texloaded = false;
		pixi_js__WEBPACK_IMPORTED_MODULE_0__["loader"].destroy();
		console.log(e);		
	});
}

Render.prototype.compileShader = function() {	
	//вершинный шейдер 	
	var vrt = `precision mediump float;

    	attribute vec2 aVertexPosition;
    	attribute vec2 aUvs;

    	uniform mat3 translationMatrix;
    	uniform mat3 projectionMatrix;

    	varying vec2 vUvs;

    	void main() {
        	vUvs = aUvs;
        	gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    	}`;
	
	//фрагментный шейдер
	var frag = `precision mediump float;

    	varying vec2 vUvs;
    	uniform sampler2D uSamplerTexture;

    	void main() {
        	gl_FragColor = texture2D(uSamplerTexture, vUvs);
    	}
	`;
	
	
	const program = pixi_js__WEBPACK_IMPORTED_MODULE_0__["Program"].from(vrt, frag, "base-shader");
	this.program = program;
}

	
Render.prototype.init = function() {	
	console.log("render init");
	
	pixi_js__WEBPACK_IMPORTED_MODULE_0__["utils"].skipHello();    
	pixi_js__WEBPACK_IMPORTED_MODULE_0__["settings"].SCALE_MODE = pixi_js__WEBPACK_IMPORTED_MODULE_0__["SCALE_MODES"].NEAREST;
			
	if(!this.renderer) {
		this.renderer = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["WebGLRenderer"](800, 600, {				
			view: this.view,	
			transparent: false,
			antialias: false,
			ratio: 2.0
		});
	}		
	
	this.renderer.backgroundColor = 0x000000;	
	//главный контейнер
	this.stage = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Container"]();	
	//entity, world контейнер
	this.worldContainer = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Container"]();
	this.worldContainer.scale.set(const_js__WEBPACK_IMPORTED_MODULE_2__["Const"].STAGE_SCALE);	
	//		
	//this.compileShader();	
	
	//gui контейнер
	this.screenContainer = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Container"]();
	//this.screenContainer.scale.set(Const.STAGE_SCALE);
		
			
	this.stage.addChild(this.worldContainer);
	this.stage.addChild(this.screenContainer);
	//камерa
	this.camera = new render_camera_js__WEBPACK_IMPORTED_MODULE_6__["default"](this.game);		
	
	this.resize();				
	window.addEventListener('resize', this.resize, false);	
	window.addEventListener('unload', this.loseContext, false);
	
	//счетчик fps
	this.stats = new stats_js__WEBPACK_IMPORTED_MODULE_1___default.a();
	this.stats.setMode(0); // 0: fps, 1: ms	
	this.stats.domElement.style.position = 'absolute';
	this.stats.domElement.style.right = '0px';
	this.stats.domElement.style.top = '0px'; 
	document.body.appendChild(this.stats.domElement);
	
	this.initialize = true;
}

Render.prototype.free = function() {
	if(this.initialize) {
		console.log("render free");
		this.rendering = false; 
		this.clearStage();	
		this.stage.destroy();
				
		window.removeEventListener('resize', this.resize, false);
		window.removeEventListener('unload', this.loseContext, false);
		//счетчик fps
		document.body.removeChild(this.stats.domElement);
	}  
}

Render.prototype.preRender = function() {
	//gui
	this.gui.init(this.screenContainer);	
	
	this.mesh = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["mesh"].Mesh(pixi_js__WEBPACK_IMPORTED_MODULE_0__["Texture"].fromFrame('tiles.png'), null, null, null,								
								   pixi_js__WEBPACK_IMPORTED_MODULE_0__["mesh"].Mesh.DRAW_MODES.TRIANGLES);		
	this.visibility = new render_visibility_js__WEBPACK_IMPORTED_MODULE_7__["default"](this.game.world.getMap(), this.mesh);	
	this.worldContainer.addChildAt(this.mesh, 0);
}

Render.prototype.startRender = function() {
	// cancel existing render cycle
	if (this.hRender) {
        cancelAnimationFrame(this.hRender);
        this.hRender = 0;
    }	
	
	this.preRender();
			
	var renderCycle = () => {
		if(!this.rendering) {
			return;
		}			
		this.hRender = requestAnimationFrame(renderCycle);
		
		this.entitylist.render();
		this.camera.update(this.worldContainer);
			
		this.visibility.compute(this.game.activePlayer);
		
		this.renderer.render(this.stage);			
		this.stats.update();			
	}	
	
	console.log("### Render start ###");	
	this.rendering = true;
	this.lastTime = Date.now();
	renderCycle();	
}

Render.prototype.forcedRebuildMesh = function() {
	this.visibility.compute(this.game.activePlayer, true);
}

Render.prototype.addToStageEntity = function(entity) {
	if(!this.worldContainer) {
		return;
	}
				
	//создать контейнер и спрайты
	if(!entity.container) {		
		entity.container = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Container"]();
		/*if(entity instanceof Mob) { //TEST
			entity.graphics = new PIXI.Graphics();
		}*/								
		entity.initSprites();
		if(entity instanceof entity_player_js__WEBPACK_IMPORTED_MODULE_4__["default"]) {				
			entity.addNameLabel();
		}
	} 
	//добавить контейнер
	if(!entity.container.added) {
		entity.container.added = true;
		this.worldContainer.addChild(entity.container);
	}	
}

Render.prototype.removeFromStageEntity = function(entity) {
	if(entity.container.added)
		this.worldContainer.removeChild(entity.container);
}

Render.prototype.clearStage = function() {
	if(this.stage) {
		this.stage.children.forEach((children) => {	
			this.stage.removeChild(children);
		});
	}	
}

Render.prototype.loseContext = function() {
	if(this.renderer) {
		//force lose context
		var ext = this.renderer.gl.getExtension('WEBGL_lose_context');	
		if(ext) {
			ext.loseContext();
		}
	}	
}

Render.prototype.resize = function() {	
	var w = window.innerWidth;    
	var h = window.innerHeight;
	this.renderer.view.style.width = w + "px";    
	this.renderer.view.style.height = h + "px";
	this.renderer.resize(w, h);
	this.camera.resize(w, h);	
	this.gui.resize(w, h);
}

/*Render.prototype.getStageContainer = function() {
	return this.stage;
}*/


Render.prototype.getCamera = function() {
	return this.camera;
}


/* harmony default export */ __webpack_exports__["default"] = (Render);

/***/ }),

/***/ "./src/render/sprites.js":
/*!*******************************!*\
  !*** ./src/render/sprites.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pixi.js */ "./node_modules/pixi.js/dist/pixi.min.js");
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pixi_js__WEBPACK_IMPORTED_MODULE_0__);



var Sprites = function(render) {
	this.render = render;
	this._sprite = null;
	
	this.frames = [];
}

Sprites.prototype.createText = function(string, size) {
	return new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Text"](string, { fontFamily : 'Arial', fill: 'white', fontSize: size, align: 'center' });
}

Sprites.prototype.create = function(spriteFrameName, frameCount, type) {
	var frames = [];	
	for (var i = 1; i <= frameCount; i++) {
		if(type) {
			frames.push(pixi_js__WEBPACK_IMPORTED_MODULE_0__["Texture"].fromFrame(spriteFrameName + '_' + type + '_' + i + '.png'));
		} else {
			frames.push(pixi_js__WEBPACK_IMPORTED_MODULE_0__["Texture"].fromFrame(spriteFrameName + '_' + i + '.png'));
		}
		
	}
	return frames;
}

Sprites.prototype.createAnimationFrames = function() {	
	//entity	
	this.frames['warrior'] = this.create('warrior', 2);	
	this.frames['mouse'] = this.create('mouse', 2);	
	this.frames['mage'] = this.create('mage', 2);	
	
	//projectiles
	this.frames['fireball'] = this.create('fireball', 2);	
}

//------------------------------------------------------------------------------------------------------
Sprites.prototype.newAnimatedSprite = function(key, animationSpeed) {	
	var sprite = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["extras"].AnimatedSprite(this.frames[key]);
	sprite.animationSpeed = animationSpeed;
	if(!animationSpeed)
		sprite.animationSpeed = 0.035;
	return sprite;
}

//------------------------------------------------------------------------------------------------------





/* harmony default export */ __webpack_exports__["default"] = (Sprites);

/***/ }),

/***/ "./src/render/visibility.js":
/*!**********************************!*\
  !*** ./src/render/visibility.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var const_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! const.js */ "./src/const.js");
/* harmony import */ var rot_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rot-js */ "./node_modules/rot-js/dist/rot.js");
/* harmony import */ var rot_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rot_js__WEBPACK_IMPORTED_MODULE_1__);





var Visibility = function(map, mesh) {
	this.map = map;	
	this.mesh = mesh; 	
	this.fov = new rot_js__WEBPACK_IMPORTED_MODULE_1__["FOV"].PreciseShadowcasting((i, j) => {
		return this.lightPasses(i , j);
	});
		
	this.last_visible_map = [];	
			
	this.lastI = -1000;
	this.lastJ = -1000;	
}

Visibility.prototype.lightPasses = function(i, j) {	
	if(this.map[i] && this.map[i][j] && this.map[i][j].trans) return true;
	return false;
}

Visibility.prototype.meshRawReset = function(mesh) {
	mesh.raw_vertices = [];
	mesh.raw_uv = [];
	mesh.raw_indices = [];		
	mesh._n = 0;
}

Visibility.prototype.meshRefresh = function(mesh) {
	mesh.vertices = new Float32Array(mesh.raw_vertices);
	mesh.uvs = new Float32Array(mesh.raw_uv);		
	mesh.indices = new Uint16Array(mesh.raw_indices);
		
	mesh.vertexDirty++;
	mesh.dirty++;
	mesh.indexDirty++;
	mesh.refresh();	
}

Visibility.prototype.buildQuad = function(mesh, i, j, u, v) {
	let ts = const_js__WEBPACK_IMPORTED_MODULE_0__["Const"].TILE_SIZE; 		
	let uv_min = 0.03125;
		
	mesh.raw_vertices.push(i*ts,  ts+j*ts,
					   		i*ts,  j*ts,
					   		ts+i*ts, ts+j*ts,
					   		ts+i*ts, j*ts);
			
	mesh.raw_uv.push(uv_min * u, uv_min * v + uv_min, 
            	 	uv_min * u, uv_min * v, 
            	 	uv_min * u + uv_min,  uv_min * v + uv_min,
				 	uv_min * u + uv_min,  uv_min * v);	
			
			
	mesh.raw_indices.push(mesh._n, mesh._n+1, mesh._n+2, mesh._n+2, mesh._n+1, mesh._n+3);
	mesh._n+=4;		
}

Visibility.prototype.compute = function(player, forced) {
	//player i,j	
	var pi = ~~(player.x / const_js__WEBPACK_IMPORTED_MODULE_0__["Const"].TILE_SIZE),
		pj = ~~(player.y / const_js__WEBPACK_IMPORTED_MODULE_0__["Const"].TILE_SIZE);
		
	if(forced || this.lastI != pi || this.lastJ != pj) {			
		this.lastI = pi;
		this.lastJ = pj;
		
		//this.now = Date.now();
		
		//костыль от багов столкновений
		if(!this.map[pi] || !this.map[pi][pj] || !this.map[pi][pj].pass) return;		
				
		//сброс старой видимости для entity		
		this.last_visible_map.forEach((ti) => {
			this.map[ti.i][ti.j].visible = null;	
		});			
		this.last_visible_map = [];		
		
		this.meshRawReset(this.mesh);
		
		//перестройка видимого меша
		var tile, tti;
		this.fov.compute(pi, pj, player.r, (i, j, r, visibile) => {	
			if(i<0 || j<0) return;	
				
			//видимость для entity			
			tile = this.map[i][j];
			tile.visible = true;
			this.last_visible_map.push({i:i, j:j});		
			
			tti = tile.index;
			
			if(tile.type == const_js__WEBPACK_IMPORTED_MODULE_0__["TileType"].Empty) return;	
			if(tile.type == const_js__WEBPACK_IMPORTED_MODULE_0__["TileType"].Wall) tti+= 16;		
						
			this.buildQuad(this.mesh, i, j, tti, 0);	
										
			if(tile.obj) {
				this.buildQuad(this.mesh, i, j, tile.obj.ui, tile.obj.vi);	
			} else if(tile.blood != null) {
				this.buildQuad(this.mesh, i, j, 31, 31);
			} else if(tile.trash != null) {
				this.buildQuad(this.mesh, i, j, tile.trash, 29);	
			} else if(tile.torch != null)		
				this.buildQuad(this.mesh, i, j, tile.torch, 30);
				
			if(tile.item)		
				this.buildQuad(this.mesh, i, j, tile.item.ui, tile.item.vi);	
		});				
		
		this.meshRefresh(this.mesh);
		
		//console.log("visibility time:", Date.now() - this.now);
	}	
}


/* harmony default export */ __webpack_exports__["default"] = (Visibility);

/***/ }),

/***/ "./src/ticker.worker.js":
/*!******************************!*\
  !*** ./src/ticker.worker.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function() {
  return new Worker(__webpack_require__.p + "ticker.worker.js");
};

/***/ }),

/***/ "./src/world/list.js":
/*!***************************!*\
  !*** ./src/world/list.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var const_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! const.js */ "./src/const.js");
/* harmony import */ var entity_player_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! entity/player.js */ "./src/entity/player.js");




var List = function(game, startId) {
	this.game = game;		
	
	this.lastId = 0;
	this.startId = 0;
	if(startId) {
		this.startId = startId;
		this.lastId = startId;
	}
	
	this.list = new Map();
	//this.projeclist = new Map();
}

List.prototype.free = function() {
	this.list.clear();	
	this.lastId = this.startId;
}

List.prototype.getId = function() {
	return this.lastId++;
}

List.prototype.pool = function() {
	return this.list;
}

List.prototype.size = function() {
	return this.list.size;
}

List.prototype.add = function(entity) {	
	entity.id = this.getId();
	this.addToId(entity, entity.id);		
}

List.prototype.addToId = function(entity, id) {		
	this.list.set(id, entity);		
}

List.prototype.remove = function(id) {	
	if(!this.list.has(id)) return;
	this.list.delete(id);		
}

List.prototype.setState = function(id, state) {
	if(!this.list.has(id)) return;
	
	var entity = this.getObjectById(id);
	if(entity.state != state)
		entity.state = state;			
}

List.prototype.getObjectById = function(id) {
	return this.list.get(id);	
}

// @Render
List.prototype.render = function() {
	this.list.forEach((entity) => {				
		entity.moving();
				
		entity.container.x = entity.x; 
		entity.container.y = entity.y;	
	});	
}


/* harmony default export */ __webpack_exports__["default"] = (List);

/***/ }),

/***/ "./src/world/listhost.js":
/*!*******************************!*\
  !*** ./src/world/listhost.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var const_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! const.js */ "./src/const.js");
/* harmony import */ var world_list_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! world/list.js */ "./src/world/list.js");




var ListHost = function(game, startId) {
	world_list_js__WEBPACK_IMPORTED_MODULE_1__["default"].call(this, game, startId);	
	
	this.updatelist = [];
		this.createdlist = [];
		this.removedlist = [];	
}

ListHost.prototype = Object.create(world_list_js__WEBPACK_IMPORTED_MODULE_1__["default"].prototype);
ListHost.prototype.constructor = ListHost;


ListHost.prototype._add = function(entity) {
	entity.id = this.getId();			
	this.list.set(id, entity);
}

ListHost.prototype.addToId = function(entity, id) {
	world_list_js__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.addToId.call(this, entity, id);
	
	entity.state = const_js__WEBPACK_IMPORTED_MODULE_0__["EntityState"].Create;
	this.updatelist.push(entity);
	this.createdlist.push(entity);
}

ListHost.prototype.remove = function(id) {
	if(!this.list.has(id)) return;
	
	var entity = this.getObjectById(id);
	entity.state = const_js__WEBPACK_IMPORTED_MODULE_0__["EntityState"].Remove;
	this.updatelist.push(entity);
	this.removedlist.push(entity);
}

ListHost.prototype.setState = function(id, state) {
	if(!this.list.has(id)) return;
	
	var entity = this.getObjectById(id);
	if(entity.state != state) {
		entity.state = state;	
		this.updatelist.push(entity);
	}		
}

ListHost.prototype.forEachUpdated = function(callback) {
	this.updatelist.forEach(callback);	
}

ListHost.prototype.updatedSize = function() {
	return this.updatelist.length;
}

ListHost.prototype.removeAllMarked = function() {
	this.updatelist = [];
	
	this.createdlist.forEach((entity) => {
		entity.state = const_js__WEBPACK_IMPORTED_MODULE_0__["EntityState"].Default;
	});
	this.createdlist = [];
	
	this.removedlist.forEach((entity) => {
		world_list_js__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.remove.call(this, entity.id);
	});
	this.removedlist = [];
}


/* harmony default export */ __webpack_exports__["default"] = (ListHost);

/***/ }),

/***/ "./src/world/object.js":
/*!*****************************!*\
  !*** ./src/world/object.js ***!
  \*****************************/
/*! exports provided: Door */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Door", function() { return Door; });
/* harmony import */ var const_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! const.js */ "./src/const.js");



var TObject = function(world, i, j) {
	this.world = world;
	this.map = world.getMap();
 	this.i = i;
	this.j = j;
	//uv текстурные индексы в атласе тайлов
	this.ui = 0;
	this.vi = 0;
	//проходимость
	//this.pass = true;
}

TObject.prototype.activate = function(host) {}

TObject.prototype.stepon = function() {}

//---------------------------------------------------

var Door = function(world, i, j) {
	TObject.call(this, world, i, j);
	
	this.ui = 0;
	this.vi = 31;
	this.map[i][j].pass = false;
	this.map[i][j].trans = false;
	this.open = false;
}

Door.prototype = Object.create(TObject.prototype);
Door.prototype.constructor = Door;


Door.prototype.activate = function(host) {	
	//в проходе entity
	if(host && this.map[this.i][this.j].id) return false;
	
	this.open = !this.open;
	if(this.open) {
		this.map[this.i][this.j].trans = true;
		this.map[this.i][this.j].pass = true;
		this.ui = 1;
	} else {
		this.map[this.i][this.j].trans = false;
		this.map[this.i][this.j].pass = false;
		this.ui = 0;
	}	
	return true;	
}

//---------------------------------------------------




/***/ }),

/***/ "./src/world/world.js":
/*!****************************!*\
  !*** ./src/world/world.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var const_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! const.js */ "./src/const.js");
/* harmony import */ var world_object_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! world/object.js */ "./src/world/object.js");
/* harmony import */ var rot_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rot-js */ "./node_modules/rot-js/dist/rot.js");
/* harmony import */ var rot_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rot_js__WEBPACK_IMPORTED_MODULE_2__);

//import Floor from 'world/floor.js'




//import { RNG, Digger } from 'rot-js'


var Tile = function(type, pass, trans) {
	this.type = type;
	this.index = 0;
	this.pass = pass;
	this.trans = trans;
}
Tile.prototype.set = function(type, pass, trans) {
	this.type = type;	
	this.pass = pass;
	this.trans = trans;
}


var World = function(game) {
	this.game = game;	
	
	this.sizeX = 64;
	this.sizeY = 64;
	
	this.spawnPoint = [];	
	
	this.map = null;
	//this.chunklist = [];
	this.seed = 43764;	
}

World.prototype.setSeed = function(seed) {
	rot_js__WEBPACK_IMPORTED_MODULE_2__["RNG"].setSeed(seed);
    this.seed = seed;
}

World.prototype.getMap = function() {
    return this.map;
}

//@Host
World.prototype.generateSeed = function() {
	this.seed = Math.floor(1000000 * Math.random() + 100000 * Math.random());
	rot_js__WEBPACK_IMPORTED_MODULE_2__["RNG"].setSeed(this.seed);
	return this.seed;
}

World.prototype.get2DArray = function() { 
	var map = [];
    for (var i = 0; i < this.sizeX; i++) {
        map.push([]);
        for (var j = 0; j < this.sizeY; j++) {
            map[i].push(new Tile(const_js__WEBPACK_IMPORTED_MODULE_0__["TileType"].Empty, true, true));
        }
    }    
    return map;   
}

World.prototype.autoTilingAndDecor = function(map) {
	var x_len = map.length;
	var y_len = map[0].length;
		
	var top,down,left,right;
	var tti; //tile texture index [0-15]	
	
	var tile, type;	
	var i,j,n=0;	
	for(i=0; i < x_len; i++) {
		for(j=0; j < y_len; j++) {	
			tile = map[i][j];	
			type = tile.type;
			if(type == const_js__WEBPACK_IMPORTED_MODULE_0__["TileType"].Empty) continue;			
		
			top=0;down=0;right=0;left=0;						
								
			if(j-1>=0 	 && map[i][j-1].type == type) top = 1;
			if(j+1<y_len && map[i][j+1].type == type) down = 1;			
			if(i+1<x_len && map[i+1][j].type == type) right = 1;
			if(i-1>=0 	 && map[i-1][j].type == type) left = 1;
			//tile texture index
			tti = top + 2*right + 4*down + 8*left; //0-15
							
			tile.index = tti;
									
			//пол
			if(type == const_js__WEBPACK_IMPORTED_MODULE_0__["TileType"].Floor) {
				if(!tile.obj) {
					//мусор	
					if(rot_js__WEBPACK_IMPORTED_MODULE_2__["RNG"].getPercentage() < 4) tile.trash = Math.round(3 * rot_js__WEBPACK_IMPORTED_MODULE_2__["RNG"].getUniform());
				}		
			//стены		
			} else if(tti == 0 || tti == 1 || tti == 10) {
			  	//факелы
				if(rot_js__WEBPACK_IMPORTED_MODULE_2__["RNG"].getPercentage() < 8) tile.torch = 0;
			}
		}
	}	
}

World.prototype.generateMap = function() { 
	
	var digger = new rot_js__WEBPACK_IMPORTED_MODULE_2__["Map"].Digger(this.sizeX, this.sizeY, {
		roomWidth: [6, 11],
        roomHeight: [6, 8],
        corridorLength: [3, 4],
	});
   	
    this.map = this.get2DArray();
	
	var checkNeighborTiles = (digger, x, y, map, oldTile, newTile) => {		
		if(digger._map[x+1][y] == oldTile) map[x+1][y].set(newTile, false, false); 
		if(digger._map[x-1][y] == oldTile) map[x-1][y].set(newTile, false, false);
		if(digger._map[x][y+1] == oldTile) map[x][y+1].set(newTile, false, false);
		if(digger._map[x][y-1] == oldTile) map[x][y-1].set(newTile, false, false);
		if(digger._map[x+1][y+1] == oldTile) map[x+1][y+1].set(newTile, false, false);
		if(digger._map[x+1][y-1] == oldTile) map[x+1][y-1].set(newTile, false, false);
		if(digger._map[x-1][y+1] == oldTile) map[x-1][y+1].set(newTile, false, false);
		if(digger._map[x-1][y-1] == oldTile) map[x-1][y-1].set(newTile, false, false);
	}		
	
	//var once = true;	
    digger.create((x, y, value) => {				
		//поиск видимых стен
		if(value == const_js__WEBPACK_IMPORTED_MODULE_0__["TileType"].Floor) {			
			checkNeighborTiles(digger, x, y, this.map, const_js__WEBPACK_IMPORTED_MODULE_0__["TileType"].Empty, const_js__WEBPACK_IMPORTED_MODULE_0__["TileType"].Wall);
			this.map[x][y].type = value;		
		}		
    });
		
	//console.log(this.map);	
		
	var room, rooms = digger.getRooms();
	var spawnRoom, lastX = Number.MAX_SAFE_INTEGER; 
	var n,i,j;
	for(n=0; n < rooms.length; n++) {
		room = rooms[n];
		//выбираем крайнюю слева комнату для спавна
		if(room._x1 < lastX) {
			lastX = room._x1;
			spawnRoom = room;
		} 
		//двери
		room.getDoors((x, y) => {
			if(rot_js__WEBPACK_IMPORTED_MODULE_2__["RNG"].getPercentage() > 30) {
				this.map[x][y].obj = new world_object_js__WEBPACK_IMPORTED_MODULE_1__["Door"](this, x, y);				
			}				
		});
	}
	
	this.autoTilingAndDecor(this.map);
	this.spawnPoint = spawnRoom.getCenter();
}

World.prototype.getItem = function(i, j) { 
	return this.map[i][j].item;
}
World.prototype.setItem = function(i, j, item) { 
	this.map[i][j].item = item;
}
World.prototype.getObj = function(i, j) {
	if(i<0 || j<0 || i>this.sizeX || j>this.sizeY) return null;
    return this.map[i][j].obj;
}



/* harmony default export */ __webpack_exports__["default"] = (World);

/***/ }),

/***/ 0:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0LmpzIiwid2VicGFjazovLy8uL3NyYy9lbnRpdHkvZW50aXR5LmpzIiwid2VicGFjazovLy8uL3NyYy9lbnRpdHkvaW52ZW50b3J5LmpzIiwid2VicGFjazovLy8uL3NyYy9lbnRpdHkvbWFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZW50aXR5L21vYi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZW50aXR5L21vdXNlLmpzIiwid2VicGFjazovLy8uL3NyYy9lbnRpdHkvbXBsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZW50aXR5L3BsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZW50aXR5L3Byb2plY3RpbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvc3RnYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9pbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbG9iYnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL25ldHdvcmsvY2xpZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9uZXR3b3JrL2hvc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL25ldHdvcmsvcGFja2V0LmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvY2FtZXJhLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvZ3VpLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvcmVuZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvc3ByaXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL3Zpc2liaWxpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RpY2tlci53b3JrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dvcmxkL2xpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dvcmxkL2xpc3Rob3N0LmpzIiwid2VicGFjazovLy8uL3NyYy93b3JsZC9vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dvcmxkL3dvcmxkLmpzIiwid2VicGFjazovLy91dGlsIChpZ25vcmVkKSIsIndlYnBhY2s6Ly8vdXRpbCAoaWdub3JlZCk/YTA0ZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBUSxvQkFBb0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBaUIsNEJBQTRCO0FBQzdDO0FBQ0E7QUFDQSwwQkFBa0IsMkJBQTJCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBZ0IsdUJBQXVCO0FBQ3ZDOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RKQTtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxnQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRixXO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZGNkI7QUFDN0I7OztBQUdBO0FBQ0Esa0I7QUFDQTtBQUNBLHlCO0FBQ0EsYztBQUNBLGU7QUFDQTtBQUNBLFk7QUFDQTtBQUNBLGdCO0FBQ0Esd0I7QUFDQSxrQjtBQUNBLGtCO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckI7QUFDQTtBQUNBOztBQUVBLHVCO0FBQ0E7QUFDQSxvQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9FQUEyQjtBQUMzQixvRUFBMkI7O0FBRTNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZTtBQUNBLEVBQUU7QUFDRixnQjtBQUNBLEU7QUFDQTs7QUFFQSwrQztBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSwwQjtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUM7QUFDQTtBQUNBLGM7QUFDQTs7QUFFQTtBQUNBLHlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QztBQUNBO0FBQ0EsMEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx1QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLCtCO0FBQ0EsR0FBRyxPO0FBQ0gsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EseUM7QUFDQTs7QUFFQTtBQUNBLGdDO0FBQ0EsUztBQUNBO0FBQ0EsZ0M7QUFDQTs7QUFFQSwrQztBQUNBO0FBQ0EsWTtBQUNBO0FBQ0EsZ0I7QUFDQTtBQUNBLGdGO0FBQ0E7O0FBRUE7QUFDQSwyQztBQUNBLHdCQUF3QjtBQUN4Qix3QkFBd0IsVztBQUN4Qjs7QUFFQTtBQUNBLDRDO0FBQ0E7QUFDQSxnRjs7QUFFQSxhO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQztBQUNBO0FBQ0EsOEc7QUFDQSw4Rzs7QUFFQTtBQUNBLDJCQUEyQjs7QUFFM0Isd0I7QUFDQTs7QUFFQSwyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLHFFOzs7Ozs7Ozs7Ozs7OztBQ3JOZ0I7OztBQUdoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0Esd0U7Ozs7Ozs7Ozs7Ozs7OztBQ2xDNkI7QUFDN0I7OztBQUdBO0FBQ0E7O0FBRUEsd0JBQXdCO0FBQ3hCLGVBQWU7QUFDZjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0Y7O0FBRUE7QUFDQSw0QjtBQUNBO0FBQ0EscUQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7QUFDQSx5Qzs7QUFFQSxzQkFBc0I7O0FBRXRCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEscUc7QUFDQTs7QUFFQSx5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCO0FBQ0EsNkU7QUFDQTtBQUNBO0FBQ0EsRTs7QUFFQSxnQztBQUNBOztBQUVBO0FBQ0E7QUFDQSwwQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLGFBQWE7QUFDcEQ7O0FBRUEsbUU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEY2QjtBQUM3Qjs7QUFFQTs7O0FBR0E7QUFDQTs7QUFFQSx3QkFBd0I7QUFDeEIsZTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0Esb0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsVTtBQUNBLEk7QUFDQSw2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSTs7QUFFQTtBQUNBO0FBQ0EsRTtBQUNBOztBQUVBLHdDO0FBQ0E7QUFDQTtBQUNBLGtDO0FBQ0E7QUFDQSxFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0I7QUFDQSxzQjtBQUNBLDZFO0FBQ0E7QUFDQTtBQUNBLEU7O0FBRUEsZ0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCO0FBQ0E7QUFDQSxVOztBQUVBLCtCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxtRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCOztBQUUzQjtBQUNBOztBQUVBO0FBQ0EsYztBQUNBO0FBQ0EsVTtBQUNBLFk7QUFDQTtBQUNBLEc7QUFDQTtBQUNBLFE7QUFDQSxPQUFPLE9BQU87QUFDZCx1Qzs7QUFFQTtBQUNBLGtDQUFrQztBQUNsQyxJQUFJO0FBQ0osa0NBQWtDO0FBQ2xDLElBQUk7O0FBRUo7QUFDQSxNO0FBQ0EsS0FBSztBQUNMLG9COztBQUVBLGM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7QUFDQTtBQUNBO0FBQ0EsT0FBTyxPQUFPO0FBQ2Q7O0FBRUE7QUFDQSxrQ0FBa0M7QUFDbEMsSUFBSTtBQUNKLGtDQUFrQztBQUNsQyxJQUFJOztBQUVKO0FBQ0EsTTtBQUNBLEU7QUFDQTtBQUNBLEM7O0FBRUE7QUFDQSxzRTtBQUNBO0FBQ0Esd0Y7QUFDQSw0RDtBQUNBO0FBQ0EsR0FBRztBQUNILEVBQUU7QUFDRix3RjtBQUNBO0FBQ0EsR0FBRztBQUNILEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0YsQzs7QUFFQSwrQztBQUNBLHNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEM7QUFDOUMsZTtBQUNBO0FBQ0EsRztBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRzs7QUFFQTtBQUNBLDBCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGU7QUFDQTtBQUNBLEc7QUFDQSxlO0FBQ0E7QUFDQSxHOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEU7QUFDQSxjO0FBQ0E7O0FBRUEsaUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvRDtBQUNBLHlFO0FBQ0E7QUFDQSxnQjtBQUNBO0FBQ0E7QUFDQSwwQjtBQUNBLEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOztBQUVBO0FBQ0EsZ0Y7O0FBRUE7QUFDQTtBQUNBLG1EOztBQUVBO0FBQ0E7QUFDQSxFOztBQUVBO0FBQ0Esc0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0Q7QUFDQTs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDalc2QjtBQUM3Qjs7O0FBR0E7QUFDQTs7QUFFQSx3QkFBd0I7QUFDeEIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdGOztBQUVBO0FBQ0EsNEI7QUFDQTtBQUNBLHFEOztBQUVBLHNDO0FBQ0E7OztBQUdBLG9FOzs7Ozs7Ozs7Ozs7Ozs7O0FDOUJnQjtBQUNoQjtBQUNBOzs7QUFHQSxrQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDZCO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBOztBQUVBLHFDO0FBQ0E7QUFDQSxDOztBQUVBLDREO0FBQ0E7QUFDQTs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QzBCO0FBQzFCOzs7QUFHQSxpQztBQUNBOztBQUVBLGtCO0FBQ0E7QUFDQTtBQUNBLGE7QUFDQSx3Qjs7QUFFQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0EsMkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esd0I7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsMkM7QUFDQSwyRjs7QUFFQTtBQUNBLDRCO0FBQ0Esb0I7QUFDQSxxRDs7QUFFQSxzQztBQUNBOztBQUVBLDRDO0FBQ0EscUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJO0FBQ0EsR0FBRztBQUNIO0FBQ0EsRztBQUNBLGM7QUFDQSxFO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsb0M7QUFDQSwyQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEOztBQUVBLDBDOztBQUVBOztBQUVBO0FBQ0EsbUY7O0FBRUE7QUFDQSxHO0FBQ0E7QUFDQSxtRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdFO0FBQ0E7QUFDQTtBQUNBLEc7O0FBRUEsd0I7QUFDQSxDOztBQUVBO0FBQ0EsdUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsNkI7QUFDQSxJO0FBQ0E7QUFDQSxFQUFFLEU7O0FBRUY7QUFDQTs7QUFFQSx3Q0FBd0M7QUFDeEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMEI7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEtnQjtBQUNoQjtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQjtBQUNBLGtCO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLGU7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkY7O0FBRUE7QUFDQSw0QjtBQUNBLDRCO0FBQ0Esb0I7O0FBRUEsc0M7QUFDQTs7QUFFQTs7QUFFQSxvRDs7QUFFQTs7QUFFQTtBQUNBLG1EO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQzs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwQzs7QUFFQSwrRztBQUNBO0FBQ0EsNEs7O0FBRUEsc0M7QUFDQSxxQztBQUNBO0FBQ0EsZ0I7QUFDQSxJO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUEsd0M7QUFDQTtBQUNBOzs7O0FBSUEseUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pHdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQSx1QjtBQUNBLGtCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRztBQUNBLHlFOztBQUVBLDBCO0FBQ0EsYztBQUNBLG1COztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9KO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSwyRTtBQUNBOztBQUVBLGtDO0FBQ0EscUU7QUFDQTtBQUNBO0FBQ0Esb0I7QUFDQSx1QztBQUNBLHdDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CO0FBQ0E7QUFDQSxvQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxvQztBQUNBLGtDO0FBQ0EsNEI7QUFDQTtBQUNBLEVBQUUsRTtBQUNGOztBQUVBO0FBQ0Esd0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtEO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBO0FBQ0E7QUFDQSwyQjtBQUNBLEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0I7O0FBRUE7O0FBRUEsRUFBRSw4QkFBOEI7QUFDaEM7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLHdIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILEVBQUUsdURBQXVEO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsNEM7QUFDQSxVO0FBQ0EsdUM7QUFDQSxFO0FBQ0EsK0M7QUFDQSxVO0FBQ0E7QUFDQTtBQUNBLCtDO0FBQ0EsVTtBQUNBLHVDO0FBQ0EsRTtBQUNBLDhDO0FBQ0E7QUFDQTtBQUNBLEU7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsOEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEc7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxFQUFFLEU7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDO0FBQ0EsRUFBRSxFO0FBQ0Y7O0FBRUEsMkQ7QUFDQTtBQUNBLG1DO0FBQ0EsZ0M7QUFDQTtBQUNBO0FBQ0EsYztBQUNBLEU7QUFDQTtBQUNBOztBQUVBLDJDO0FBQ0E7QUFDQSw2Qjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0Esa0M7QUFDQSxFOztBQUVBLGlEO0FBQ0Esd0I7O0FBRUEscUI7QUFDQTtBQUNBLEVBQUUsRTtBQUNGOztBQUVBO0FBQ0EsMEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1CO0FBQ0Esa0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNEM7QUFDQSxnRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFO0FBQ0E7QUFDQTs7QUFFQSxvRDtBQUNBO0FBQ0EsZ0M7QUFDQTtBQUNBOztBQUVBLG1EO0FBQ0EsOEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7QUFDQTs7O0FBR0EsbUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOVNnQjtBQUNoQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQSwyQjtBQUNBLDREOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBCO0FBQ0E7O0FBRUE7O0FBRUEsMEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseUc7QUFDQTtBQUNBOztBQUVBLHNDOztBQUVBO0FBQ0EsZ0Q7QUFDQSxFQUFFLEU7QUFDRjs7QUFFQSx5RDtBQUNBO0FBQ0EsK0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCLGlGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCLE9BQU87QUFDdkIsZ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSTs7QUFFQTtBQUNBLG9EO0FBQ0E7QUFDQSwyRTtBQUNBO0FBQ0EsSTtBQUNBLEc7O0FBRUE7QUFDQSxnQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQjtBQUNBLEVBQUUsRTtBQUNG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O0FBRUEsd0M7QUFDQSx1QztBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSx1QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsK0I7QUFDQTtBQUNBLDBDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1RTtBQUNBO0FBQ0E7QUFDQSxxQjtBQUNBOztBQUVBLCtEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DOztBQUVBLGdDO0FBQ0E7QUFDQSxxQjs7QUFFQSxzQztBQUNBOztBQUVBLGtEO0FBQ0E7QUFDQSw2QjtBQUNBO0FBQ0EsZ0I7QUFDQTtBQUNBLHNCO0FBQ0EsRTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjO0FBQ0E7QUFDQTtBQUNBLEc7QUFDQSxFQUFFO0FBQ0YsbUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEU7QUFDQSxXO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBCO0FBQ0EsRTtBQUNBO0FBQ0E7O0FBRUEsbUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osRztBQUNBLEVBQUUsRTtBQUNGO0FBQ0E7O0FBRUE7QUFDQSx3QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1QztBQUNBOztBQUVBO0FBQ0E7O0FBRUEsNEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx1QztBQUNBO0FBQ0Esa0I7QUFDQSw4QjtBQUNBO0FBQ0E7QUFDQSx1QztBQUNBOztBQUVBO0FBQ0EscUM7QUFDQTtBQUNBLHVCO0FBQ0E7QUFDQTtBQUNB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QSxpRztBQUNBO0FBQ0EsbUI7QUFDQTtBQUNBLG9COztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx3QztBQUNBO0FBQ0E7QUFDQTs7QUFFQSwwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1QjtBQUNBO0FBQ0EsdUM7QUFDQSxzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCO0FBQ0EsMEI7QUFDQTtBQUNBLGE7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EsaUI7QUFDQSxFQUFFO0FBQ0Y7O0FBRUEsNkM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNOztBQUVOO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQSxvQztBQUNBOztBQUVBLDJEO0FBQ0E7O0FBRUE7QUFDQSx1RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILEU7O0FBRUEsMEM7QUFDQTtBQUNBLHNFO0FBQ0E7QUFDQTtBQUNBLDJGO0FBQ0E7QUFDQSx3Qjs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLHVGOztBQUVBLGU7QUFDQSx1RDtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBLHlDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5QjtBQUNBLG9CO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFDOztBQUVBO0FBQ0EsbUY7QUFDQSx5SDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEs7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsbUM7QUFDQSxzQjtBQUNBLEU7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RUEsU0FBUyxPQUFPLFFBQVEsTzs7QUFFeEI7QUFDQSxzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5Qzs7QUFFekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEs7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7QUFDQTs7QUFFQSwwQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7O0FBRUEsb0U7QUFDQSw0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7QUFFQSxtQjtBQUNBLG9DO0FBQ0E7QUFDQSx3RTtBQUNBO0FBQ0EsK0I7QUFDQSxHO0FBQ0EsS0FBSzs7QUFFTCx5Qjs7QUFFQTtBQUNBLGdEO0FBQ0E7QUFDQSxTQUFTLGtCQUFrQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRztBQUNBO0FBQ0E7QUFDQTtBQUNBLDhGO0FBQ0EsSTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsMEM7QUFDQTtBQUNBO0FBQ0EsZ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQSxvRTs7Ozs7Ozs7Ozs7QUMxS0EsZTs7Ozs7Ozs7Ozs7QUNBQSxlIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpblwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL21haW4uanNcIixcInZlbmRvcnN+bWFpblwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsInZhciBDb25zdCA9IHtcclxuXHRIT1NUX0lEOiAwLFxyXG5cdFxyXG5cdE1BWF9QTEFZRVJTX1JPT006IDUsIFxyXG5cdE1BWF9QRUVSX1BBQ0tFVFM6IDIwLFxyXG5cdFxyXG5cdFRJQ1NfUEVSX1NFQ09ORDogMTAsXHJcblx0UkVOREVSX1BFUl9TRUNPTkQ6IDYwLFxyXG5cdFJFTkRFUlNfUEVSX1RJQ0s6IDYsIC8vIFJFTkRFUl9QRVJfU0VDT05EIC8gVElDU19QRVJfU0VDT05EXHJcblx0VElNRU9VVF9HQU1FX1NUQVJUOiA2MDAwLFxyXG5cdFxyXG5cdFBMQVlFUl9OQU1FX0NIQVJTOiAxNixcclxuXHRCWVRFU19GT1JfQ0hBUjogMiwgXHJcblx0XHJcblx0Ly9XT1JLRVJfVElNRU9VVDogMTAwLFxyXG5cdFxyXG5cdFNUQUdFX1NDQUxFOiAyLjAsXHJcblx0VElMRV9TSVpFOiAxNixcdFxyXG5cdFxyXG5cdFBMQVlFUl9ERUZBVUxUX1ZJU0lPTl9SQURJVVM6IDYsXHRcclxuXHRQTEFZRVJfQVRBQ0tfUkFESVVTOiAzMixcclxuXHRNT0JfQVRBQ0tfUkFESVVTOiAyNCxcclxuXHQvL1BMQVlFUl9ERUZBVUxUX0hFQUxUSDogMTAwLFx0XHJcblx0XHJcblx0Q0hBVF9NRVNTQUdFX01BWDogNDhcdFxyXG59O1xyXG5cclxuLyp2YXIgU2lnbmFsID0ge1x0XHJcblx0Ly/RgdC+0L7QsdGJ0LXQvdC40Y8g0L7RgiDRgdC40LPQvdCw0LvRjNC90L7Qs9C+INGB0LXRgNCy0LXRgNCwXHJcblx0Um9vbUxpc3Q6IFx0IDAsXHJcblx0UGxheWVyTGlzdDogIDEsXHJcblx0SG9zdExlYXZlOiBcdCAyLFxyXG5cdENsaWVudFRva2VuOiAzLFxyXG5cdEhvc3RUb2tlbjogXHQgNCxcclxuXHQvL9GB0L7QvtCx0YnQtdC90LjRjyDQtNC70Y8g0YHQuNCz0L3QsNC70YzQvdC+0LPQviDRgdC10YDQstC10YDQsFxyXG5cdENyZWF0ZVJvb206ICA1LFx0XHJcblx0Sm9pblJvb206IFx0IDYsXHRcclxuXHRMZWF2ZVJvb206IFx0IDcsXHRcclxufTsqL1xyXG5cclxudmFyIE1zZyA9IHtcdFxyXG5cdENoYXQ6ICAxLFxyXG5cdC8v0L/QsNC60LXRgtGLINGF0L7RgdGC0LBcclxuXHRTdGFydDogMixcclxuXHRMZWF2ZTogMyxcclxuXHRNYXA6ICAgNCxcclxuXHRIb3N0U3RhdGU6IDUsXHQgIFxyXG5cdFBvbmc6IDYsXHJcblx0Ly/Qv9Cw0LrQtdGC0Ysg0LrQu9C40LXQvdGC0LBcclxuXHRDbGllbnRSZWFkeTogNyxcclxuXHRDbGllbnRBY3Rpb246IDgsXHJcblx0UGluZzogOVx0XHRcdFxyXG59O1xyXG5cclxudmFyIEVudGl0eVN0YXRlID0ge1x0XHJcbiAgICBEZWZhdWx0OiAwLFxyXG5cdENyZWF0ZTogMSxcclxuXHRSZW1vdmU6IDIsIC8vID09IERlYWRcclxuXHRNb3ZlOiAzLFxyXG5cdFNlYXJjaFBsYXllcjogNFx0XHRcclxufTtcclxuXHJcbnZhciBJdGVtU3RhdGUgPSB7XHRcclxuICAgIERlZmF1bHQ6IDAsXHJcblx0Q3JlYXRlOiAxLFxyXG5cdFJlbW92ZTogMiwgXHJcblx0UGlja3VwOiAzLFxyXG5cdERyb3A6IDQsXHJcblx0RXF1aXA6IDUsXHJcblx0VW5lcXVpcDogNlx0XHRcclxufTtcclxuXHJcbnZhciBFbnRpdHlUeXBlID0ge1xyXG5cdE1vdXNlOiAwLFxyXG5cdFNrZWxldG9uOiAxLFxyXG5cdFpvbWJpZTogMixcclxuXHRNYWdlOiAzLFxyXG5cdFxyXG5cdC8vIGlkID4gOTkgcHJvamVjdGlsZVxyXG5cdEZpcmVCYWxsOiAxMDBcdFxyXG59O1xyXG5cclxudmFyIFRpbGVUeXBlID0ge1xyXG5cdEZsb29yOiAwLFxyXG5cdEVtcHR5OiAxLFx0XHJcblx0V2FsbDogMyxcclxuXHREb29yOiA0XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IHsgQ29uc3QsIE1zZywgVGlsZVR5cGUsIEVudGl0eVR5cGUsIEVudGl0eVN0YXRlLCBJdGVtU3RhdGUgfTsgIiwiaW1wb3J0IHsgQ29uc3QsIEVudGl0eVN0YXRlIH0gZnJvbSAnY29uc3QuanMnXHJcbmltcG9ydCBJbnZlbnRvcnkgZnJvbSAnZW50aXR5L2ludmVudG9yeS5qcydcclxuXHJcblxyXG5mdW5jdGlvbiBFbnRpdHkoZ2FtZSwgaWQpIHtcclxuXHR0aGlzLmdhbWUgPSBnYW1lO1x0XHJcblx0dGhpcy5yZW5kZXIgPSBnYW1lLnJlbmRlcjtcclxuXHR0aGlzLndvcmxkID0gZ2FtZS53b3JsZDtcdFxyXG5cdHRoaXMuaWQgPSBpZDtcdFxyXG5cdHRoaXMudHlwZSA9IDA7XHRcdFxyXG5cdHRoaXMueCA9IDA7XHJcblx0dGhpcy55ID0gMDtcdFx0XHJcblx0dGhpcy5sYXN0WCA9IDA7XHJcblx0dGhpcy5sYXN0WSA9IDA7XHRcclxuXHR0aGlzLmFjdGl2ZVNwZWVkID0gMS4wO1x0XHJcblx0dGhpcy5tb3Rpb25YID0gMDtcdFxyXG5cdHRoaXMubW90aW9uWSA9IDA7XHRcdFxyXG5cdC8v0L3QsNC/0YDQsNCy0LvQtdC90LjQtVxyXG5cdHRoaXMuZGlyID0gMTsgLy9bLTE7MV1cclxuXHQvL1xyXG5cdHRoaXMuc3RhdGU7XHJcblx0dGhpcy5pbnZlbnRvcnkgPSBuZXcgSW52ZW50b3J5KHRoaXMpO1xyXG5cdFx0XHJcblx0dGhpcy5jb250YWluZXIgPSBudWxsO1x0XHJcblx0Ly/QsNC60YLQuNCy0L3Ri9C5INGB0L/RgNCw0LnRglxyXG5cdHRoaXMuc3ByaXRlID0gbnVsbDtcdFxyXG5cdHRoaXMuc3ByaXRlVyA9IDE2O1xyXG5cdHRoaXMuc3ByaXRlSCA9IDE2O1xyXG5cdFxyXG5cdHRoaXMuaGVhbHRoID0gMTAwO1xyXG5cdHRoaXMuaGVhbHRoTWF4ID0gMTAwO1xyXG5cdFxyXG5cdHRoaXMubGFzdEF0dGNrQ291bnQgPSAwO1xyXG5cdHRoaXMuYXR0YWNrQ29vbGRvd24gPSAxMDtcclxuXHR0aGlzLmF0dGFja0RhbWFnZSA9IDIwO1xyXG5cdHRoaXMuaHVydGVkID0gMDtcclxuXHQvL1xyXG5cdHRoaXMuc3BlbGxjYXN0ID0gbnVsbDtcclxuXHR0aGlzLmxhc3RDYXN0Q291bnQgPSAwO1xyXG5cdHRoaXMuY2FzdENvb2xkb3duID0gMTA7XHJcbn1cclxuXHRcdFxyXG4vLyBAUmVuZGVyXHJcbkVudGl0eS5wcm90b3R5cGUuaW5pdFNwcml0ZXMgPSBmdW5jdGlvbigpIHtcdFx0XHJcblx0dGhpcy5zcHJpdGVzID0gdGhpcy5yZW5kZXIuc3ByaXRlcztcclxufVxyXG5cclxuRW50aXR5LnByb3RvdHlwZS5pc0luRW50aXR5U3ByaXRlID0gZnVuY3Rpb24oeCwgeSkge1xyXG5cdHZhciB4MiA9IHRoaXMuc3ByaXRlVyAqIDAuNSxcclxuXHRcdHkxID0gdGhpcy55IC0gMC44NSp0aGlzLnNwcml0ZUgsXHJcblx0XHR5MiA9IHRoaXMueSArIDAuMTUqdGhpcy5zcHJpdGVIO1xyXG5cdGlmKHg+dGhpcy54LXgyICYmIHg8dGhpcy54K3gyICYmIHk+eTEgJiYgeTx5MikgcmV0dXJuIHRydWU7XHJcblx0cmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5FbnRpdHkucHJvdG90eXBlLnBvaW50SW50ZXJzZWN0VGlsZSA9IGZ1bmN0aW9uKHgsIHksIHRpLCB0aikge1xyXG5cdHZhciB4MCx4MSx5MCx5MTtcclxuXHR4MCA9IHRpICogQ29uc3QuVElMRV9TSVpFOyB4MSA9IHgwICsgQ29uc3QuVElMRV9TSVpFO1xyXG5cdHkwID0gdGogKiBDb25zdC5USUxFX1NJWkU7IHkxID0geTAgKyBDb25zdC5USUxFX1NJWkU7XHJcblx0XHJcblx0aWYoeD49eDAmJng8PXgxICYmIHk+PXkwJiZ5PD15MSkgcmV0dXJuIHRydWU7XHJcblx0cmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5FbnRpdHkucHJvdG90eXBlLmRpckZyb21Nb3Rpb24gPSBmdW5jdGlvbigpIHtcclxuXHRpZih0aGlzLm1vdGlvblggPiAwKSB7XHJcblx0XHR0aGlzLmRpciA9IDE7XHRcdFx0XHJcblx0fSBlbHNlIGlmKHRoaXMubW90aW9uWCA8IDApIHtcclxuXHRcdHRoaXMuZGlyID0gLTE7XHRcdFxyXG5cdH0gXHJcbn1cclxuXHJcbkVudGl0eS5wcm90b3R5cGUudXBkYXRlQ29udGFpbmVyID0gZnVuY3Rpb24oKSB7XHRcclxuXHQvL3RoaXMuZGlyRnJvbU1vdGlvbigpO1xyXG5cdFxyXG5cdGlmKCF0aGlzLmNvbnRhaW5lcikgcmV0dXJuO1xyXG5cdFxyXG5cdC8vZmxpcCDRgdC/0YDQsNC50YLQsFxyXG5cdGlmKHRoaXMuZGlyID09IC0xKSB7XHJcblx0XHR0aGlzLnNwcml0ZS5zY2FsZS54ID0gMTtcdFxyXG5cdH0gZWxzZSBpZiAodGhpcy5kaXIgPT0gMSkge1xyXG5cdFx0dGhpcy5zcHJpdGUuc2NhbGUueCA9IC0xO1xyXG5cdH1cclxufVxyXG5cclxuRW50aXR5LnByb3RvdHlwZS5wcmVkaWN0ID0gZnVuY3Rpb24oKSB7fVxyXG5cdFxyXG5FbnRpdHkucHJvdG90eXBlLnVzaW5nID0gZnVuY3Rpb24oKSB7IFxyXG5cdHRoaXMuYWN0aXZhdGUgPSBudWxsO1xyXG5cdHJldHVybiBmYWxzZTsgXHJcbn1cclxuXHJcbi8vIEBIb3N0XHJcbkVudGl0eS5wcm90b3R5cGUuY2FzdCA9IGZ1bmN0aW9uKGNvdW50KSB7IFxyXG5cdGlmKGNvdW50IC0gdGhpcy5sYXN0Q2FzdENvdW50ID4gdGhpcy5jYXN0Q29vbGRvd24pIHtcclxuXHRcdHRoaXMubGFzdENhc3RDb3VudCA9IGNvdW50O1xyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG5cdHJldHVybiBmYWxzZTsgXHJcbn1cclxuXHJcbi8vIEBIb3N0XHJcbkVudGl0eS5wcm90b3R5cGUuYXR0YWNrID0gZnVuY3Rpb24odGFyZ2V0LCBjb3VudCkge1xyXG5cdGlmKGNvdW50IC0gdGhpcy5sYXN0QXR0Y2tDb3VudCA+IHRoaXMuYXR0YWNrQ29vbGRvd24pIHtcclxuXHRcdHRoaXMubGFzdEF0dGNrQ291bnQgPSBjb3VudDtcclxuXHRcdHRhcmdldC5odXJ0KHRoaXMuYXR0YWNrRGFtYWdlLCB0aGlzKTtcdFxyXG5cdFx0Ly/Qv9C+0LLQvtGA0L7RgiDQuiDRhtC10LvQuFxyXG5cdFx0dGhpcy5kaXIgPSAodGFyZ2V0LnggPiB0aGlzLngpID8gMSA6IC0xOyBcclxuXHR9XHJcbn1cclxuXHJcbi8vIEBIb3N0XHJcbkVudGl0eS5wcm90b3R5cGUuYXR0YWNrZWQgPSBmdW5jdGlvbihlbnRpdHkpIHt9XHJcblxyXG5FbnRpdHkucHJvdG90eXBlLmh1cnQgPSBmdW5jdGlvbihkYW1hZ2UsIGVudGl0eSkge1xyXG5cdGlmKGRhbWFnZSA9PSAwKSByZXR1cm47XHJcblx0XHJcblx0dGhpcy5odXJ0ZWQgKz0gZGFtYWdlO1x0XHRcclxuXHQvLyBAQ2xpZW50XHJcblx0aWYodGhpcy5jb250YWluZXIpIHtcclxuXHRcdHRoaXMuc3ByaXRlLnRpbnQgPSAweEZGMDAwMDtcclxuXHRcdFxyXG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdHRoaXMuc3ByaXRlLnRpbnQgPSAweEZGRkZGRjtcdFx0XHRcclxuXHRcdH0sIDE1MCk7IFxyXG5cdH1cdFxyXG5cdC8vIEBIb3N0XHJcblx0aWYoZW50aXR5KSB7XHJcblx0XHR0aGlzLmF0dGFja2VkKGVudGl0eSk7XHJcblx0fVx0XHJcblx0XHJcblx0dGhpcy5oZWFsdGggLT0gZGFtYWdlO1xyXG5cdGlmKHRoaXMuaGVhbHRoIDw9IDApIHtcclxuXHRcdHRoaXMuaGVhbHRoID0gMDtcclxuXHRcdHRoaXMua2lsbCgpO1xyXG5cdH1cclxufVxyXG5cclxuRW50aXR5LnByb3RvdHlwZS5raWxsID0gZnVuY3Rpb24oKSB7XHJcblx0dGhpcy5kZWFkID0gdHJ1ZTtcclxuXHQvLyBAQ2xpZW50XHJcblx0aWYodGhpcy5jb250YWluZXIpIHtcclxuXHRcdGNvbnNvbGUubG9nKFwiY2xpZW50IGtpbGxcIik7XHJcblx0XHR0aGlzLmdhbWUuZW50aXR5RGllKHRoaXMuaSwgdGhpcy5qKTtcclxuXHRcdHJldHVybjtcclxuXHR9XHRcclxuXHQvLyBASG9zdFxyXG5cdHRoaXMuZ2FtZS5lbnRpdHlsaXN0LnJlbW92ZSh0aGlzLmlkKTtcclxufVxyXG5cclxuRW50aXR5LnByb3RvdHlwZS5pc0h1cnRlZCA9IGZ1bmN0aW9uKCkge1xyXG5cdHZhciBodXJ0ZWQgPSB0aGlzLmh1cnRlZDtcclxuXHR0aGlzLmh1cnRlZCA9IDA7XHJcblx0cmV0dXJuIGh1cnRlZDtcclxufVxyXG5cclxuLy8gQENsaWVudFxyXG5FbnRpdHkucHJvdG90eXBlLmlzVmlzaWJsZSA9IGZ1bmN0aW9uKCkge1x0XHJcblx0aWYoIXRoaXMuY29udGFpbmVyKSByZXR1cm47XHJcblx0XHRcdFxyXG5cdGlmKHRoaXMuaT4wICYmIHRoaXMuaj4wICYmIHRoaXMud29ybGQubWFwW3RoaXMuaV1bdGhpcy5qXS52aXNpYmxlKSB7XHJcblx0XHR0aGlzLmNvbnRhaW5lci52aXNpYmxlID0gdHJ1ZTtcdFxyXG5cdFx0cmV0dXJuO1x0XHJcblx0fVxyXG5cdHRoaXMuY29udGFpbmVyLnZpc2libGUgPSBmYWxzZTtcdFxyXG59XHJcblxyXG5FbnRpdHkucHJvdG90eXBlLnNldFBvc2l0aW9uID0gZnVuY3Rpb24oeCwgeSkge1x0XHJcblx0dGhpcy54ID0geDtcclxuXHR0aGlzLnkgPSB5O1x0XHRcclxuXHR0aGlzLmxhc3RYID0geDtcclxuXHR0aGlzLmxhc3RZID0geTtcdFxyXG5cdHRoaXMuaSA9IH5+KHRoaXMueCAvIENvbnN0LlRJTEVfU0laRSk7XHJcblx0dGhpcy5qID0gfn4odGhpcy55IC8gQ29uc3QuVElMRV9TSVpFKTtcdFxyXG59XHJcblxyXG4vLyBAUmVuZGVyXHJcbkVudGl0eS5wcm90b3R5cGUubW92aW5nID0gZnVuY3Rpb24oZGVsdGEpIHtcdFxyXG5cdHRoaXMueCArPSB0aGlzLm1vdGlvblg7Ly8gKiBkZWx0YTtcclxuXHR0aGlzLnkgKz0gdGhpcy5tb3Rpb25ZOy8vICogZGVsdGE7XHRcclxufVxyXG5cclxuLy8gQENsaWVudFxyXG5FbnRpdHkucHJvdG90eXBlLnVwZGF0ZUNsaWVudCA9IGZ1bmN0aW9uKCkge1x0XHRcclxuXHR0aGlzLmkgPSB+fih0aGlzLnggLyBDb25zdC5USUxFX1NJWkUpO1xyXG5cdHRoaXMuaiA9IH5+KHRoaXMueSAvIENvbnN0LlRJTEVfU0laRSk7XHRcclxuXHRcclxuXHR0aGlzLm1vdmUoKTtcdFxyXG59XHJcbi8vIEBIb3N0XHJcbkVudGl0eS5wcm90b3R5cGUudXBkYXRlSG9zdCA9IGZ1bmN0aW9uKGNvdW50KSB7XHJcblx0dGhpcy51cGRhdGVDbGllbnQoKTtcclxufVxyXG5cclxuRW50aXR5LnByb3RvdHlwZS5tb3ZlID0gZnVuY3Rpb24oKSB7XHRcclxuXHQvL9Cy0YvRh9C40YHQu9C40YLRjCDRgdC60L7RgNC+0YHRgtGMINC/0L4g0L3QvtCy0L7QuSDQv9C+0LfQuNGG0LjQuCDQvtGCINGF0L7RgdGC0LBcclxuXHR0aGlzLm1vdGlvblggPSAodGhpcy50YXJnZXRYIC0gdGhpcy5sYXN0WCkgLyBDb25zdC5SRU5ERVJTX1BFUl9USUNLO1x0XHJcblx0dGhpcy5tb3Rpb25ZID0gKHRoaXMudGFyZ2V0WSAtIHRoaXMubGFzdFkpIC8gQ29uc3QuUkVOREVSU19QRVJfVElDSztcdFxyXG5cdFxyXG5cdC8qdGhpcy50YXJnZXRYID0gdGhpcy5sYXN0WDtcclxuXHR0aGlzLnRhcmdldFkgPSB0aGlzLmxhc3RZOyovXHJcblx0XHJcblx0dGhpcy51cGRhdGVDb250YWluZXIoKTtcdFx0XHJcbn1cclxuXHJcbkVudGl0eS5wcm90b3R5cGUuc2V0SG9zdFN0YXRlID0gZnVuY3Rpb24odGltZVN0YW1wLCB4LCB5KSB7XHRcclxuXHR0aGlzLmxhc3RYID0gdGhpcy54O1xyXG5cdHRoaXMubGFzdFkgPSB0aGlzLnk7XHJcblx0dGhpcy50YXJnZXRYID0geDtcclxuXHR0aGlzLnRhcmdldFkgPSB5O1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRW50aXR5IiwiaW1wb3J0IHsgQ29uc3QgfSBmcm9tICdjb25zdC5qcydcclxuXHJcblxyXG5mdW5jdGlvbiBJbnZlbnRvcnkoZW50aXR5KSB7XHJcblx0dGhpcy5lbnRpdHkgPSBlbnRpdHk7XHJcblx0dGhpcy5pdGVtcyA9IFtdO1xyXG5cdHRoaXMuZXF1aXBlZCA9IFtdO1xyXG59XHJcblxyXG5JbnZlbnRvcnkucHJvdG90eXBlLmdldEZyZWVTbG90ID0gZnVuY3Rpb24oKSB7XHJcblx0dmFyIGluZGV4ID0gMDtcclxuXHRyZXR1cm4gaW5kZXg7XHJcbn1cclxuXHJcbkludmVudG9yeS5wcm90b3R5cGUucHV0ID0gZnVuY3Rpb24oaXRlbSkge1xyXG5cdHJldHVybiBmYWxzZTtcclxufVxyXG5JbnZlbnRvcnkucHJvdG90eXBlLnB1dFRvSW5kZXggPSBmdW5jdGlvbihpdGVtLCBpbmRleCkge1xyXG5cdHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuSW52ZW50b3J5LnByb3RvdHlwZS5kcm9wID0gZnVuY3Rpb24oaXRlbSkge1xyXG5cdFxyXG59XHJcblxyXG5JbnZlbnRvcnkucHJvdG90eXBlLmVxdWlwID0gZnVuY3Rpb24oaXRlbSkge1xyXG5cdFxyXG59XHJcblxyXG5JbnZlbnRvcnkucHJvdG90eXBlLnVuZXF1aXAgPSBmdW5jdGlvbihpdGVtKSB7XHJcblx0XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbnZlbnRvcnkiLCJpbXBvcnQgeyBDb25zdCwgRW50aXR5U3RhdGUgfSBmcm9tICdjb25zdC5qcydcclxuaW1wb3J0IE1vYiBmcm9tICdlbnRpdHkvbW9iLmpzJ1xyXG5cclxuXHJcbnZhciBNYWdlID0gZnVuY3Rpb24oZ2FtZSwgaWQpIHtcclxuXHRNb2IuY2FsbCh0aGlzLCBnYW1lLCBpZCk7XHJcblx0XHJcblx0dGhpcy5hY3RpdmVTcGVlZCA9IDAuNjsgLy8gMC42LzAuOC8xLjNcdFx0XHJcblx0dGhpcy50eXBlID0gMzsgLy9FbnRpdHlUeXBlLk1hZ2VcdFxyXG5cdHRoaXMuaGVhbHRoID0gMTAwO1xyXG5cdFxyXG5cdHRoaXMuY2FzdENvb2xkb3duID0gMTU7XHJcblx0dGhpcy5yYWRpdXMgPSA1O1xyXG59XHJcblxyXG5NYWdlLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoTW9iLnByb3RvdHlwZSk7XHJcbk1hZ2UucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gTWFnZTtcclxuXHJcbi8vIEBSZW5kZXJcclxuTWFnZS5wcm90b3R5cGUuaW5pdFNwcml0ZXMgPSBmdW5jdGlvbigpIHtcclxuXHRNb2IucHJvdG90eXBlLmluaXRTcHJpdGVzLmNhbGwodGhpcyk7XHRcclxuXHRcclxuXHR0aGlzLnNwcml0ZSA9IHRoaXMuc3ByaXRlcy5uZXdBbmltYXRlZFNwcml0ZSgnbWFnZScpO1xyXG5cdHRoaXMuc3ByaXRlLmFuY2hvci54ID0gMC41O1x0XHJcblx0dGhpcy5zcHJpdGUucGxheSgpO1xyXG5cdHRoaXMuc3ByaXRlLnBvc2l0aW9uLnkgLT0gMC44NSAqIHRoaXMuc3ByaXRlLmhlaWdodDtcdFxyXG5cdFxyXG5cdHRoaXMuY29udGFpbmVyLmFkZENoaWxkKHRoaXMuc3ByaXRlKTtcclxuXHQvL3RoaXMuY29udGFpbmVyLmFkZENoaWxkKHRoaXMuZ3JhcGhpY3MpO1x0Ly9URVNUXHJcbn1cclxuXHJcbi8vIEBIb3N0XHJcbk1hZ2UucHJvdG90eXBlLmFpTW92ZSA9IGZ1bmN0aW9uKGNvdW50KSB7XHRcclxuXHRcclxuXHRpZih0aGlzLnN0ZXBzID09IDApIHsgLy/RhtC10L3RgtGAINC60LvQtdGC0LrQuFxyXG5cdFxyXG5cdFx0Ly9UT0RPINC/0LXRgNC10YXQvtC0INCyINCx0LvQuNC20L3QuNC5INCx0L7QuSDQv9GA0Lgg0LzQsNC70L7QvCDRgNCw0YHRgdGC0L7Rj9C90LjQuFxyXG5cdFx0aWYodGhpcy5nYW1lLm1vYkluUmFkaXVzKHRoaXMsIHRoaXMudGFyZ2V0LCBDb25zdC5NT0JfQVRBQ0tfUkFESVVTKSkge1xyXG5cdFx0XHR0aGlzLnN0b3AoKTtcclxuXHRcdFx0XHJcblx0XHRcdHRoaXMuYXR0YWNrKHRoaXMudGFyZ2V0LCBjb3VudCk7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHRpZih0aGlzLmJ1aWxkU2lnaGxpbmUodGhpcy53b3JsZC5tYXAsIHRoaXMueCwgdGhpcy55LCB0aGlzLnRhcmdldC54LCB0aGlzLnRhcmdldC55LCB0aGlzLnJhZGl1cykpIHtcdFx0XHJcblx0XHRcdHRoaXMuc3RvcCgpO1xyXG5cdFx0XHJcblx0XHRcdGlmKHRoaXMuY2FzdChjb3VudCkpIHtcdFx0XHRcclxuXHRcdFx0XHR2YXIgZGlyID0gdGhpcy5nYW1lLnByb2plY3RpbGVEaXIodGhpcy54LCB0aGlzLnksIHRoaXMudGFyZ2V0LngsIHRoaXMudGFyZ2V0LnkpO1xyXG5cdFx0XHRcdGlmKGRpcilcclxuXHRcdFx0XHRcdHRoaXMuZ2FtZS5zcGF3blByb2plY3RpbGUodGhpcywgZGlyWzBdLCBkaXJbMV0pO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHR9XHRcdFxyXG5cdFx0XHRcclxuXHRpZighdGhpcy5wYXRoICYmICF0aGlzLl9idWlsZFBhdGgodGhpcy50YXJnZXQpKSB7XHJcblx0XHQvL2NvbnNvbGUubG9nKFwi0L3QtdGCINC/0YPRgtC4XCIpO1xyXG5cdFx0dGhpcy5jb3VudExvc3QrKztcclxuXHRcdGlmKHRoaXMuY291bnRMb3N0ID4gNSkge1xyXG5cdFx0XHR0aGlzLmNvdW50TG9zdCA9IDA7XHJcblx0XHRcdHRoaXMuY2xlYXJUYXJnZXQoKTtcdFx0XHRcdFx0XHJcblx0XHRcdHRoaXMuc3RhdGUgPSBFbnRpdHlTdGF0ZS5EZWZhdWx0O1x0XHRcdFx0XHJcblx0XHR9XHJcblx0XHRyZXR1cm47XHJcblx0fVx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcclxuXHR0aGlzLm1vdmVUb1BsYXllcih0aGlzLnRhcmdldCk7XHRcdFx0XHRcdFxyXG59XHJcblxyXG4vL1RFU1RcclxuLypcclxuTWFnZS5wcm90b3R5cGUudXBkYXRlQ2xpZW50ID0gZnVuY3Rpb24oKSB7XHRcdFxyXG5cdE1vYi5wcm90b3R5cGUudXBkYXRlQ2xpZW50LmNhbGwodGhpcyk7XHJcblx0XHJcblx0dGhpcy5idWlsZFNpZ2hsaW5lKHRoaXMud29ybGQubWFwLCB0aGlzLngsIHRoaXMueSwgXHJcblx0XHR0aGlzLmdhbWUucGxheWVyc1swXS54LCB0aGlzLmdhbWUucGxheWVyc1swXS55LCBcclxuXHRcdHRoaXMucmFkaXVzKTtcclxufVxyXG5NYWdlLnByb3RvdHlwZS5pc1Zpc2libGUgPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRydWU7IH1cclxuKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1hZ2UiLCJpbXBvcnQgeyBDb25zdCwgRW50aXR5U3RhdGUgfSBmcm9tICdjb25zdC5qcydcclxuaW1wb3J0IEVudGl0eSBmcm9tICdlbnRpdHkvZW50aXR5LmpzJ1xyXG5cclxuaW1wb3J0ICogYXMgUk9UIGZyb20gJ3JvdC1qcydcclxuXHJcblxyXG52YXIgTW9iID0gZnVuY3Rpb24oZ2FtZSwgaWQpIHtcclxuXHRFbnRpdHkuY2FsbCh0aGlzLCBnYW1lLCBpZCk7XHJcblx0XHJcblx0dGhpcy5hY3RpdmVTcGVlZCA9IDAuODsgLy8gMC42LzAuOC8xLjNcdFx0XHJcblx0dGhpcy50eXBlID0gMDsgXHJcblx0Ly/RgdGH0LXRgtGH0LjQuiDQv9C+0YLQtdGA0Lgg0LjQs9GA0L7QutCwXHJcblx0dGhpcy5jb3VudExvc3QgPSAwO1xyXG5cdFxyXG5cdHRoaXMubGFzdEkgPSAwO1xyXG5cdHRoaXMubGFzdEogPSAwO1x0XHJcblx0dGhpcy50YXJnZXRJID0gMDtcclxuXHR0aGlzLnRhcmdldEogPSAwO1xyXG5cdFxyXG5cdHRoaXMudGFyZ2V0cyA9IFtdO1xyXG5cdHRoaXMudGFyZ2V0ID0gbnVsbDtcclxuXHQvL9Cw0LPRgCDQvNC+0LHQsCjQv9C10YDQtdC60LvRjtGH0LXQvdC40LUg0L3QsCDQsNGC0LDQutGD0Y7RidC10LPQvilcclxuXHR0aGlzLmFnZ3Jlc3MgPSBmYWxzZTtcclxuXHR0aGlzLnJhZGl1cyA9IDY7XHJcblx0XHJcblx0dGhpcy50aWxlX3NpemUgPSBDb25zdC5USUxFX1NJWkU7XHJcblx0dGhpcy50aWxlX3NpemUxID0gMSAvIHRoaXMudGlsZV9zaXplO1xyXG59XHJcblxyXG5Nb2IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShFbnRpdHkucHJvdG90eXBlKTtcclxuTW9iLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IE1vYjtcclxuXHJcblxyXG5Nb2IucHJvdG90eXBlLmFpID0gZnVuY3Rpb24oY291bnQpIHtcdFxyXG5cdHN3aXRjaCh0aGlzLnN0YXRlKSB7XHJcblx0XHRjYXNlIEVudGl0eVN0YXRlLkRlZmF1bHQ6XHJcblx0XHRcdGlmKGNvdW50ICUgMTAgPT0gMClcclxuXHRcdFx0XHR0aGlzLnN0YXRlID0gRW50aXR5U3RhdGUuU2VhcmNoUGxheWVyO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgRW50aXR5U3RhdGUuU2VhcmNoUGxheWVyOlxyXG5cdFx0XHQvL1xyXG5cdFx0XHR0aGlzLnRhcmdldHMgPSBbXTtcclxuXHRcdFx0dGhpcy5nYW1lLnBsYXllcnMuZm9yRWFjaCgocGxheWVyKSA9PiB7XHJcblx0XHRcdFx0aWYocGxheWVyKSB7XHJcblx0XHRcdFx0XHR2YXIgTDIgPSAocGxheWVyLmkgLSB0aGlzLmkpICogKHBsYXllci5pIC0gdGhpcy5pKSArIChwbGF5ZXIuaiAtIHRoaXMuaikgKiAocGxheWVyLmogLSB0aGlzLmopO1xyXG5cdFx0XHRcdFx0aWYoTDIgPCB0aGlzLnJhZGl1cyAqIHRoaXMucmFkaXVzKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMudGFyZ2V0cy5wdXNoKFtwbGF5ZXIsIEwyXSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdFx0aWYodGhpcy50YXJnZXRzLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0XHR0aGlzLnRhcmdldHMuc29ydCgocDEsIHAyKSA9PiB7XHJcblx0XHRcdFx0XHRyZXR1cm4gcDFbMV0gLSBwMlsxXTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHR0aGlzLnRhcmdldCA9IHRoaXMudGFyZ2V0c1swXVswXTtcclxuXHRcdFx0XHR0aGlzLnN0YXRlID0gRW50aXR5U3RhdGUuTW92ZTtcclxuXHRcdFx0XHRicmVhaztcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdH0gXHJcblx0XHRcdHRoaXMuc3RhdGUgPSBFbnRpdHlTdGF0ZS5EZWZhdWx0O1x0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBFbnRpdHlTdGF0ZS5Nb3ZlOlx0XHJcblx0XHRcdGlmKCF0aGlzLnRhcmdldCB8fCB0aGlzLnRhcmdldC5kZWFkKSB7XHJcblx0XHRcdFx0dGhpcy5jbGVhclRhcmdldCgpO1x0XHJcblx0XHRcdFx0dGhpcy5zdG9wKCk7XHJcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IEVudGl0eVN0YXRlLkRlZmF1bHQ7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cdFx0XHJcblx0XHRcdFx0XHJcblx0XHRcdHRoaXMuYWlNb3ZlKGNvdW50KTtcclxuXHRcdFx0YnJlYWs7XHJcblx0fVx0XHRcdFxyXG59XHJcblxyXG5Nb2IucHJvdG90eXBlLmFpTW92ZSA9IGZ1bmN0aW9uKGNvdW50KSB7XHRcclxuXHRpZih0aGlzLmdhbWUubW9iSW5SYWRpdXModGhpcywgdGhpcy50YXJnZXQsIENvbnN0Lk1PQl9BVEFDS19SQURJVVMpKSB7XHJcblx0XHQvL3RoaXMuc3RvcCgpO1xyXG5cdFx0dGhpcy5hdHRhY2sodGhpcy50YXJnZXQsIGNvdW50KTtcdFx0XHRcclxuXHRcdC8vcmV0dXJuO1xyXG5cdH1cdFx0XHRcdFx0XHJcblx0XHRcdFxyXG5cdGlmKCF0aGlzLnBhdGggJiYgIXRoaXMuX2J1aWxkUGF0aCh0aGlzLnRhcmdldCkpIHtcclxuXHRcdC8vY29uc29sZS5sb2coXCLQvdC10YIg0L/Rg9GC0LhcIik7XHJcblx0XHR0aGlzLmNvdW50TG9zdCsrO1xyXG5cdFx0aWYodGhpcy5jb3VudExvc3QgPiA1KSB7XHJcblx0XHRcdHRoaXMuY291bnRMb3N0ID0gMDtcdFxyXG5cdFx0XHR0aGlzLmNsZWFyVGFyZ2V0KCk7XHRcdFx0XHJcblx0XHRcdHRoaXMuc3RhdGUgPSBFbnRpdHlTdGF0ZS5EZWZhdWx0O1x0XHRcdFx0XHJcblx0XHR9XHJcblx0XHRyZXR1cm47XHJcblx0fSBcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHJcblx0dGhpcy5tb3ZlVG9QbGF5ZXIodGhpcy50YXJnZXQpO1x0XHRcclxufVxyXG5cclxuTW9iLnByb3RvdHlwZS5jbGVhclRhcmdldCA9IGZ1bmN0aW9uKCkge1xyXG5cdHRoaXMudGFyZ2V0ID0gbnVsbDtcclxuXHR0aGlzLmFnZ3Jlc3MgPSBmYWxzZTtcclxufVxyXG5cdFxyXG4vKk1vYi5wcm90b3R5cGUuYnVpbGRTaWdobGluZSA9IGZ1bmN0aW9uKG1hcCwgc2ksIHNqLCB0aSwgdGosIHJhZGl1cykge1x0XHJcblx0Ly9CcmVzZW5oYW0ncyBsaW5lIGFsZ29yaXRobVx0XHJcblx0dmFyIGRlbHRhWCA9IE1hdGguYWJzKHRpIC0gc2kpLFxyXG4gICAgXHRkZWx0YVkgPSBNYXRoLmFicyh0aiAtIHNqKTtcclxuICAgIHZhciBzaWduWCA9IHNpIDwgdGkgPyAxIDogLTEsXHJcbiAgICBcdHNpZ25ZID0gc2ogPCB0aiA/IDEgOiAtMTsgICBcclxuICAgIHZhciBlcnJvciA9IGRlbHRhWCAtIGRlbHRhWSxcclxuXHRcdGNvdW50ID0gMDtcclxuICAgIFxyXG4gICAgd2hpbGUoc2kgIT0gdGkgfHwgc2ogIT0gdGopIHtcclxuICAgICAgICBpZighbWFwW3NpXVtzal0udHJhbnMgfHwgY291bnQgPiByYWRpdXMpIHtcclxuXHRcdFx0Ly9jb25zb2xlLmxvZyhcItC90LUg0LLQuNC20YNcIik7XHJcblx0XHRcdHJldHVybiBmYWxzZTsgXHJcblx0XHR9XHJcblx0XHRjb3VudCsrO1x0XHRcclxuXHRcdFxyXG4gICAgICAgIHZhciBlcnJvcjIgPSBlcnJvciAqIDI7ICAgICAgICBcclxuICAgICAgICBpZihlcnJvcjIgPiAtZGVsdGFZKSB7XHJcbiAgICAgICAgICAgIGVycm9yIC09IGRlbHRhWTtcclxuICAgICAgICAgICAgc2kgKz0gc2lnblg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGVycm9yMiA8IGRlbHRhWCkge1xyXG4gICAgICAgICAgICBlcnJvciArPSBkZWx0YVg7XHJcbiAgICAgICAgICAgIHNqICs9IHNpZ25ZO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHRyZXR1cm4gdHJ1ZTtcclxufSovXHRcclxuXHJcbi8vVEVTVFxyXG5Nb2IucHJvdG90eXBlLmxpbmUgPSBmdW5jdGlvbih4MCwgeTAsIHgsIHkpIHtcclxuXHRpZighdGhpcy5ncmFwaGljcykgcmV0dXJuO1xyXG5cdHRoaXMuZ3JhcGhpY3MuY2xlYXIoKTtcclxuXHRcclxuXHR0aGlzLmdyYXBoaWNzLmxpbmVTdHlsZSgxLCAweDk2OTY5Nik7XHJcblx0dGhpcy5ncmFwaGljcy5tb3ZlVG8oMCwgMCk7XHRcclxuXHR0aGlzLmdyYXBoaWNzLmxpbmVUbyh4LXgwLCB5LXkwKTtcclxuXHR0aGlzLmdyYXBoaWNzLmNsb3NlUGF0aCgpO1xyXG5cdFxyXG5cdHRoaXMuZ3JhcGhpY3MuX3gwID0geDA7XHJcblx0dGhpcy5ncmFwaGljcy5feTAgPSB5MDtcclxufVxyXG5Nb2IucHJvdG90eXBlLnBvaW50ID0gZnVuY3Rpb24oeCwgeSwgY29sb3IpIHtcclxuXHRpZighdGhpcy5ncmFwaGljcykgcmV0dXJuO1xyXG5cdHRoaXMuZ3JhcGhpY3MubGluZVN0eWxlKDApOyBcclxuXHR0aGlzLmdyYXBoaWNzLmJlZ2luRmlsbChjb2xvciwgMSk7XHJcblx0dGhpcy5ncmFwaGljcy5kcmF3Q2lyY2xlKHgtdGhpcy5ncmFwaGljcy5feDAsIHktdGhpcy5ncmFwaGljcy5feTAsIDEpO1xyXG5cdHRoaXMuZ3JhcGhpY3MuZW5kRmlsbCgpO1xyXG59XHJcblxyXG5Nb2IucHJvdG90eXBlLmlzU2lnaHRCbG9ja2VkID0gZnVuY3Rpb24obWFwLCB4LCB5LCBvZmZzZXRYLCBvZmZzZXRZKSB7XHJcblx0dmFyIG5pID0gfn4oKHggLSBvZmZzZXRYKSAqIHRoaXMudGlsZV9zaXplMSksXHJcblx0XHRuaiA9IH5+KCh5IC0gb2Zmc2V0WSkgKiB0aGlzLnRpbGVfc2l6ZTEpLFxyXG5cdFx0cGkgPSB+figoeCArIG9mZnNldFgpICogdGhpcy50aWxlX3NpemUxKSxcclxuXHRcdHBqID0gfn4oKHkgKyBvZmZzZXRZKSAqIHRoaXMudGlsZV9zaXplMSk7XHJcblx0XHJcblx0cmV0dXJuICEobWFwW25pXVtual0udHJhbnMgJiYgbWFwW3BpXVtwal0udHJhbnMpO1xyXG59XHJcblxyXG5Nb2IucHJvdG90eXBlLmJ1aWxkU2lnaGxpbmUgPSBmdW5jdGlvbihtYXAsIHgwLCB5MCwgeCwgeSwgcmFkaXVzKSB7XHRcclxuXHR2YXIgZHggPSB4IC0geDAsXHJcbiAgICBcdGR5ID0geSAtIHkwLFx0IFxyXG4gICAgXHRrID0gZHkgLyBkeCxcdFx0XHJcblx0XHRzaXplID0gdGhpcy50aWxlX3NpemUsXHJcblx0XHRsZW4yID0gZHgqZHggKyBkeSpkeTtcclxuXHR2YXIgc3dhcCxcclxuXHRcdF94ID0geCxcclxuXHRcdF95ID0geTtcclxuXHRcdFx0XHJcblx0Ly90aGlzLmxpbmUoeDAsIHkwLCB4LCB5KTsgLy9URVNUXHJcblx0XHJcblx0cmFkaXVzICo9IHNpemU7XHJcblx0aWYobGVuMiA+IHJhZGl1cypyYWRpdXMpIHJldHVybiBmYWxzZTtcclxuXHRcdFx0XHJcblx0aWYoTWF0aC5hYnMoZHkpID4gTWF0aC5hYnMoZHgpICYmIGR4ICE9IDApIHtcclxuXHRcdGlmKHkwID4geSkge1x0XHRcdFxyXG5cdFx0XHR2YXIgdG1wID0geTtcclxuXHRcdFx0eSA9IHkwO1x0XHRcdFxyXG5cdFx0XHR5MCA9IHRtcDtcdFx0XHRcclxuXHRcdFx0c3dhcCA9IHRydWU7XHJcblx0XHR9IFxyXG5cdFx0dmFyIGkgPSBzaXplICogKH5+KHkwIC8gc2l6ZSkgKyAxKSxcclxuXHRcdFx0aW50eDtcdFx0XHJcblx0XHRmb3IoOyBpIDwgeTsgaSArPSBzaXplKSB7XHJcbiAgICAgICBcdFx0aW50eCA9IChpIC0gKF95IC0gayAqIHgpKSAvIGs7XHRcdFx0XHJcblx0XHRcdFx0XHJcblx0XHRcdC8qaWYoc3dhcCkge1xyXG5cdFx0XHRcdHRoaXMucG9pbnQoaW50eCwgaSwgMHhERTAwMDApOyAvL1RFU1RcdFxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMucG9pbnQoaW50eCwgaSwgMHgwMERFMDApOyAvL1RFU1RcdFxyXG5cdFx0XHR9Ki9cdFxyXG5cdFx0XHRcclxuXHRcdFx0aWYodGhpcy5pc1NpZ2h0QmxvY2tlZChtYXAsIGludHgsIGksIDAsIDQpKSByZXR1cm4gZmFsc2U7XHJcbiAgICBcdH0gXHJcbiAgICB9IGVsc2Uge1xyXG5cdFx0aWYoZHggPT0gMCkgayA9IDA7XHRcclxuXHRcdFxyXG5cdFx0aWYoeDAgPiB4KSB7XHRcdFx0XHJcblx0XHRcdHZhciB0bXAgPSB4O1xyXG5cdFx0XHR4ID0geDA7XHJcblx0XHRcdHgwID0gdG1wO1xyXG5cdFx0XHRzd2FwID0gdHJ1ZTtcclxuXHRcdH0gXHJcblx0XHR2YXIgaSA9IHNpemUgKiAofn4oeDAgLyBzaXplKSArIDEpLFxyXG5cdFx0XHRpbnR5O1xyXG5cdFx0Zm9yKDsgaSA8IHg7IGkgKz0gc2l6ZSkge1xyXG4gICAgICAgXHRcdGludHkgPSBrICogaSArIHkgLSBrICogX3g7XHJcblx0XHRcdFxyXG5cdFx0XHQvKmlmKHN3YXApIHtcclxuXHRcdFx0XHR0aGlzLnBvaW50KGksIGludHksIDB4REUwMDAwKTsgLy9URVNUXHRcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR0aGlzLnBvaW50KGksIGludHksIDB4MDBERTAwKTsgLy9URVNUXHRcclxuXHRcdFx0fSovXHJcblx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0aWYodGhpcy5pc1NpZ2h0QmxvY2tlZChtYXAsIGksIGludHksIDQsIDApKSByZXR1cm4gZmFsc2U7XHJcbiAgICBcdH0gICAgICBcclxuXHR9XHRcdFxyXG5cdHJldHVybiB0cnVlO1xyXG59XHRcclxuXHJcbi8vIEBIb3N0XHJcbk1vYi5wcm90b3R5cGUuYnVpbGRQYXRoID0gZnVuY3Rpb24obWFwLCBzaSwgc2osIHRpLCB0aiwgYWx0ZXJuYXRpdmUpIHtcdFxyXG5cdGlmKGFsdGVybmF0aXZlKSB7XHJcblx0XHR0aGlzLmFzdGFyID0gbmV3IFJPVC5QYXRoLkFTdGFyKHRpLCB0aiwgKGksIGopID0+IHtcdFxyXG5cdFx0XHRpZihtYXBbaV1bal0uaWQgJiYgbWFwW2ldW2pdLmlkICE9IHRoaXMuaWQpIHJldHVybiBmYWxzZTtcdFxyXG5cdFx0XHRyZXR1cm4gbWFwW2ldW2pdLnBhc3M7XHJcblx0XHR9KTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0dGhpcy5hc3RhciA9IG5ldyBST1QuUGF0aC5BU3Rhcih0aSwgdGosIChpLCBqKSA9PiB7XHRcdFxyXG5cdFx0XHRyZXR1cm4gbWFwW2ldW2pdLnBhc3M7XHJcblx0XHR9KTtcclxuXHR9XHRcclxuXHR0aGlzLnBhdGggPSBbXTtcclxuXHR0aGlzLmFzdGFyLmNvbXB1dGUoc2ksIHNqLCAoaSwgaikgPT4ge1xyXG5cdFx0dGhpcy5wYXRoLnB1c2goW2ksIGpdKTtcclxuXHR9KTtcclxufVx0XHJcblx0XHJcbk1vYi5wcm90b3R5cGUubW92ZVRvUGxheWVyID0gZnVuY3Rpb24ocGxheWVyKSB7XHRcdFx0XHJcblx0aWYodGhpcy5zdGVwcyA9PSAwKSB7XHRcclxuXHRcdC8v0LrQvtC90LXRhiDQv9GD0YLQuFxyXG5cdFx0aWYodGhpcy5ub2RlID09IHRoaXMucGF0aC5sZW5ndGgtMSkge1xyXG5cdFx0XHR0aGlzLl9idWlsZFBhdGgocGxheWVyKTtcclxuXHRcdH1cclxuXHRcdHRoaXMubm9kZSsrO1xyXG5cdFx0XHJcblx0XHQvL9C/0YDQvtCy0LXRgNGP0LXQvCDQutC70LXRgtC60YNcdFx0XHJcblx0XHR2YXIgcG9pbnQgPSB0aGlzLnBhdGhbdGhpcy5ub2RlXTtcclxuXHRcdGlmKCFwb2ludCB8fCB0aGlzLm5vZGUgPj0gdGhpcy5wYXRoLmxlbmd0aCB8fCBcclxuXHRcdFx0IXRoaXMud29ybGQubWFwW3BvaW50WzBdXVtwb2ludFsxXV0ucGFzcykgeyAvL9C60LvQtdGC0LrQsCDRgdGC0LDQu9CwINC90LXQv9GA0L7RhdC+0LTQuNC80LAo0LTQstC10YDRjClcdFx0XHRcdFxyXG5cdFx0XHR0aGlzLnN0b3AoKTtcdFx0XHRcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVx0XHRcclxuXHRcdHZhciBpZCA9IHRoaXMud29ybGQubWFwW3BvaW50WzBdXVtwb2ludFsxXV0uaWQ7XHJcblx0XHRpZihpZCAmJiBpZCAhPSB0aGlzLmlkKSB7IC8v0LrQu9C10YLQutCwINC30LDQvdGP0YLQsCBlbnRpdHlcclxuXHRcdFx0dGhpcy5ub2RlLS07XHJcblx0XHRcdHRoaXMubW90aW9uWCA9IDA7XHJcblx0XHRcdHRoaXMubW90aW9uWSA9IDA7XHJcblx0XHRcdFxyXG5cdFx0XHR0aGlzLnBhdGguY291bnQrKztcclxuXHRcdFx0aWYodGhpcy5wYXRoLmNvdW50ID4gNSlcclxuXHRcdFx0XHR0aGlzLl9idWlsZFBhdGgocGxheWVyLCB0cnVlKTtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdC8v0LrQvtGA0YDQtdC60YbQuNGPINC/0L7Qt9C40YbQuNC4XHJcblx0XHRpZih0aGlzLm5vZGUgPiAwKSB7XHJcblx0XHRcdHRoaXMueCA9IHRoaXMucGF0aFt0aGlzLm5vZGUtMV1bMF0gKiAxNiArIDg7XHJcblx0XHRcdHRoaXMueSA9IHRoaXMucGF0aFt0aGlzLm5vZGUtMV1bMV0gKiAxNiArIDg7XHJcblx0XHR9XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHJcblx0XHR2YXIgZHggPSBwb2ludFswXSAtIHRoaXMuaSxcclxuXHRcdFx0ZHkgPSBwb2ludFsxXSAtIHRoaXMuajtcdFxyXG5cdFx0XHJcblx0XHQvL9C30LDQvdC40LzQsNC10Lwg0LrQu9C10YLQutGDXHJcblx0XHR0aGlzLnRhcmdldEkgPSBwb2ludFswXTtcclxuXHRcdHRoaXMudGFyZ2V0SiA9IHBvaW50WzFdO1xyXG5cdFx0dGhpcy53b3JsZC5tYXBbdGhpcy50YXJnZXRJXVt0aGlzLnRhcmdldEpdLmlkID0gdGhpcy5pZDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0aWYoZHggIT0gMClcdHtcdFx0XHRcdFxyXG5cdFx0XHRkeCAvPSBNYXRoLmFicyhkeCk7XHJcblx0XHR9XHRcdFx0XHRcdFx0XHRcclxuXHRcdGlmKGR5ICE9IDApXHR7XHRcdFx0XHRcclxuXHRcdFx0ZHkgLz0gTWF0aC5hYnMoZHkpO1xyXG5cdFx0fVx0XHJcblx0XHRcclxuXHRcdHRoaXMuc3RlcHMgPSBNYXRoLnJvdW5kKENvbnN0LlRJTEVfU0laRSAvICh0aGlzLmFjdGl2ZVNwZWVkICogQ29uc3QuUkVOREVSU19QRVJfVElDSykpO1xyXG5cdFx0dmFyIHNwZWVkID0gQ29uc3QuVElMRV9TSVpFIC8gKHRoaXMuc3RlcHMgKiBDb25zdC5SRU5ERVJTX1BFUl9USUNLKTtcclxuXHRcdFx0XHJcblx0XHR0aGlzLm1vdGlvblggPSBkeCAqIHNwZWVkO1xyXG5cdFx0dGhpcy5tb3Rpb25ZID0gZHkgKiBzcGVlZDtcclxuXHR9IFxyXG5cdHRoaXMuc3RlcHMtLTtcdFx0XHJcbn1cclxuXHJcbk1vYi5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uKCkge1x0XHJcblx0dGhpcy5wYXRoID0gbnVsbDtcclxuXHR0aGlzLm1vdGlvblggPSAwO1xyXG5cdHRoaXMubW90aW9uWSA9IDA7XHJcbn1cclxuXHJcbk1vYi5wcm90b3R5cGUuX2J1aWxkUGF0aCA9IGZ1bmN0aW9uKHBsYXllciwgYWx0ZXIpIHtcdFxyXG5cdGlmKE1hdGguYWJzKHBsYXllci5pIC0gdGhpcy5pKSA+IDEgfHwgTWF0aC5hYnMocGxheWVyLmogLSB0aGlzLmopID4gMSkge1x0XHJcblx0XHR0aGlzLmJ1aWxkUGF0aCh0aGlzLndvcmxkLm1hcCwgdGhpcy5pLCB0aGlzLmosIHBsYXllci5pLCBwbGF5ZXIuaiwgYWx0ZXIpO1xyXG5cdFx0dGhpcy5ub2RlID0gMDtcdFxyXG5cdFx0dGhpcy5zdGVwcyA9IDA7XHJcblx0XHR0aGlzLnBhdGguY291bnQgPSAwO1xyXG5cdFx0cmV0dXJuIHRoaXMucGF0aC5sZW5ndGg7XHRcdFx0XHJcblx0fVx0XHJcblx0cmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG4vLyBASG9zdFxyXG5Nb2IucHJvdG90eXBlLnVwZGF0ZUhvc3QgPSBmdW5jdGlvbihjb3VudCkge1xyXG5cdGlmKHRoaXMuZGVhZCkge1xyXG5cdFx0Ly9jb25zb2xlLmxvZyhcImRlYWQgdXBkYXRlXCIpO1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cdFxyXG5cdFxyXG5cdHRoaXMuaSA9IH5+KHRoaXMueCAvIENvbnN0LlRJTEVfU0laRSk7XHJcblx0dGhpcy5qID0gfn4odGhpcy55IC8gQ29uc3QuVElMRV9TSVpFKTtcdFxyXG5cdFx0XHJcblx0aWYodGhpcy5sYXN0SSAhPSB0aGlzLmkgfHwgdGhpcy5sYXN0SiAhPSB0aGlzLmopIHtcclxuXHRcdHRoaXMud29ybGQubWFwW3RoaXMuaV1bdGhpcy5qXS5pZCA9IHRoaXMuaWQ7XHJcblx0XHR0aGlzLndvcmxkLm1hcFt0aGlzLmxhc3RJXVt0aGlzLmxhc3RKXS5pZCA9IG51bGw7XHRcclxuXHRcdFxyXG5cdFx0dGhpcy5sYXN0SSA9IHRoaXMuaTtcclxuXHRcdHRoaXMubGFzdEogPSB0aGlzLmo7XHJcblx0fVx0XHJcblx0XHJcblx0dGhpcy5haShjb3VudCk7XHJcblx0dGhpcy5kaXJGcm9tTW90aW9uKCk7XHRcclxufVxyXG5cclxuLy8gQEhvc3RcclxuTW9iLnByb3RvdHlwZS5hdHRhY2tlZCA9IGZ1bmN0aW9uKGVudGl0eSkge1xyXG5cdGlmKCF0aGlzLnRhcmdldCB8fCAhdGhpcy5hZ2dyZXNzKSB7XHJcblx0XHR0aGlzLnRhcmdldCA9IGVudGl0eTtcclxuXHRcdHRoaXMuYWdncmVzcyA9IHRydWU7XHJcblx0XHR0aGlzLnN0YXRlID0gRW50aXR5U3RhdGUuTW92ZTtcclxuXHR9XHJcbn1cclxuXHJcbk1vYi5wcm90b3R5cGUua2lsbCA9IGZ1bmN0aW9uKCkge1xyXG5cdEVudGl0eS5wcm90b3R5cGUua2lsbC5jYWxsKHRoaXMpO1x0XHJcblx0XHJcblx0dGhpcy5zdG9wKCk7XHJcblx0dGhpcy53b3JsZC5tYXBbdGhpcy5pXVt0aGlzLmpdLmlkID0gbnVsbDtcclxuXHR0aGlzLndvcmxkLm1hcFt0aGlzLmxhc3RJXVt0aGlzLmxhc3RKXS5pZCA9IG51bGw7XHJcblx0dGhpcy53b3JsZC5tYXBbdGhpcy50YXJnZXRJXVt0aGlzLnRhcmdldEpdLmlkID0gbnVsbDtcdFxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9iXHJcblxyXG4iLCJpbXBvcnQgeyBDb25zdCwgRW50aXR5U3RhdGUgfSBmcm9tICdjb25zdC5qcydcclxuaW1wb3J0IE1vYiBmcm9tICdlbnRpdHkvbW9iLmpzJ1xyXG5cclxuXHJcbnZhciBNb3VzZSA9IGZ1bmN0aW9uKGdhbWUsIGlkKSB7XHJcblx0TW9iLmNhbGwodGhpcywgZ2FtZSwgaWQpO1xyXG5cdFxyXG5cdHRoaXMuYWN0aXZlU3BlZWQgPSAwLjY7IC8vIDAuNi8wLjgvMS4zXHRcdFxyXG5cdHRoaXMudHlwZSA9IDA7IC8vRW50aXR5VHlwZS5Nb3VzZVxyXG5cdHRoaXMuaGVhbHRoID0gNDA7XHJcblx0dGhpcy5hdHRhY2tEYW1hZ2UgPSAxNTtcclxuXHR0aGlzLnJhZGl1cyA9IDQ7XHJcbn1cclxuXHJcbk1vdXNlLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoTW9iLnByb3RvdHlwZSk7XHJcbk1vdXNlLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IE1vdXNlO1xyXG5cclxuLy8gQFJlbmRlclxyXG5Nb3VzZS5wcm90b3R5cGUuaW5pdFNwcml0ZXMgPSBmdW5jdGlvbigpIHtcclxuXHRNb2IucHJvdG90eXBlLmluaXRTcHJpdGVzLmNhbGwodGhpcyk7XHRcclxuXHRcclxuXHR0aGlzLnNwcml0ZSA9IHRoaXMuc3ByaXRlcy5uZXdBbmltYXRlZFNwcml0ZSgnbW91c2UnKTtcclxuXHR0aGlzLnNwcml0ZS5hbmNob3IueCA9IDAuNTtcdFxyXG5cdHRoaXMuc3ByaXRlLnBsYXkoKTtcclxuXHR0aGlzLnNwcml0ZS5wb3NpdGlvbi55IC09IDAuODUgKiB0aGlzLnNwcml0ZS5oZWlnaHQ7XHRcclxuXHRcclxuXHR0aGlzLmNvbnRhaW5lci5hZGRDaGlsZCh0aGlzLnNwcml0ZSk7XHRcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vdXNlIiwiaW1wb3J0IHsgQ29uc3QgfSBmcm9tICdjb25zdC5qcydcclxuaW1wb3J0IEVudGl0eSBmcm9tICdlbnRpdHkvZW50aXR5LmpzJ1xyXG5pbXBvcnQgUGxheWVyIGZyb20gJ2VudGl0eS9wbGF5ZXIuanMnXHJcblxyXG5cclxuZnVuY3Rpb24gTVBsYXllcihnYW1lLCBpZCwgbmFtZSkge1x0XHRcclxuXHRQbGF5ZXIuY2FsbCh0aGlzLCBnYW1lLCBpZCwgbmFtZSk7XHJcblx0XHJcblx0dGhpcy50YXJnZXRYID0gMDtcclxuXHR0aGlzLnRhcmdldFkgPSAwO1xyXG59XHJcblxyXG5NUGxheWVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoUGxheWVyLnByb3RvdHlwZSk7XHJcbk1QbGF5ZXIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gTVBsYXllcjtcclxuXHJcbi8qTVBsYXllci5wcm90b3R5cGUudXBkYXRlQ29udGFpbmVyID0gZnVuY3Rpb24oKSB7XHJcblx0aWYoIXRoaXMuY29udGFpbmVyKSByZXR1cm47XHJcblx0XHJcblx0Ly9mbGlwINC60L7QvdGC0LXQudC90LXRgNCwXHJcblx0aWYodGhpcy5kaXIgPT0gMSkge1xyXG5cdFx0dGhpcy5jb250YWluZXIuc2NhbGUueCA9IDE7XHRcclxuXHR9IGVsc2UgaWYgKHRoaXMuZGlyID09IC0xKSB7XHJcblx0XHR0aGlzLmNvbnRhaW5lci5zY2FsZS54ID0gLTE7XHJcblx0fVxyXG59Ki9cclxuXHJcbk1QbGF5ZXIucHJvdG90eXBlLnNldE1vdmVtZW50ID0gZnVuY3Rpb24oZHgsIGR5KSB7fVxyXG5cclxuTVBsYXllci5wcm90b3R5cGUucHJlZGljdCA9IGZ1bmN0aW9uKCkge31cclxuXHJcbk1QbGF5ZXIucHJvdG90eXBlLm1vdmUgPSBmdW5jdGlvbigpIHtcdFx0XHJcblx0RW50aXR5LnByb3RvdHlwZS5tb3ZlLmNhbGwodGhpcyk7XHJcbn1cdFxyXG5cclxuTVBsYXllci5wcm90b3R5cGUuc2V0SG9zdFN0YXRlID0gZnVuY3Rpb24odGltZVN0YW1wLCB4LCB5KSB7XHRcclxuXHRFbnRpdHkucHJvdG90eXBlLnNldEhvc3RTdGF0ZS5jYWxsKHRoaXMsIHRpbWVTdGFtcCwgeCwgeSk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBNUGxheWVyXHJcbiIsImltcG9ydCB7IENvbnN0LCBUaWxlVHlwZSB9IGZyb20gJ2NvbnN0LmpzJ1xyXG5pbXBvcnQgRW50aXR5IGZyb20gJ2VudGl0eS9lbnRpdHkuanMnXHJcblxyXG5cclxuZnVuY3Rpb24gUGxheWVyKGdhbWUsIGlkLCBuYW1lKSB7XHRcclxuXHRFbnRpdHkuY2FsbCh0aGlzLCBnYW1lLCBpZCk7XHJcblx0XHJcblx0dGhpcy5uYW1lID0gbmFtZTtcdFx0XHJcblx0Ly/QstCy0L7QtCDQuNCz0YDQvtC60LBcclxuXHR0aGlzLmR4ID0gMDtcclxuXHR0aGlzLmR5ID0gMDtcdFxyXG5cdHRoaXMuYWN0aXZlU3BlZWQgPSAwLjk7XHRcclxuXHRcclxuXHR0aGlzLmhlYWx0aCA9IDEwMDAwO1x0Ly9URVNUXHJcblx0dGhpcy5oZWFsdGhNYXggPSAxMDAwMDtcclxuXHQvL9GA0LDQtNC40YPRgSDQstC40LTQuNC80L7RgdGC0LhcclxuXHR0aGlzLnIgPSA2O1xyXG5cdHRoaXMuZmxpcENvbnRhaW5lciA9IG51bGw7XHRcdFxyXG5cdC8v0LrQsNC80LXRgNCwINC/0YDQuNC60YDQtdC/0LvQtdC90LBcclxuXHR0aGlzLmF0dGFjaGVkID0gZmFsc2U7XHJcblx0Ly9cclxuXHR0aGlzLmluZGV4ID0gMDtcclxuXHQvL9C00LXQudGB0YLQstC40LVcclxuXHR0aGlzLmFjdGl2YXRlID0gbnVsbDtcclxuXHQvL2lkINCw0YLQsNC60YPQtdC80L7Qs9C+INC80L7QsdCwXHJcblx0dGhpcy5hdHRhY2tNb2IgPSBudWxsO1xyXG5cdC8v0YjRgtCw0LzQvyDQstGA0LXQvNC10L3QuCDQvtGC0L/RgNCw0LLQutC4INC00LXQudGB0YLQstC40Lkg0LjQs9GA0L7QutCwXHJcblx0dGhpcy50aW1lU3RhbXAgPSAwO1x0XHJcblx0XHJcblx0dGhpcy5ob3N0c3RhdGVCdWZmZXIgPSBbXTtcclxuXHR0aGlzLnBvc2l0aW9uQnVmZmVyID0gW107XHJcblx0XHJcblx0Ly90aGlzLmN1cnJQb3NpdGlvbiA9IHt9O1xyXG5cdHRoaXMubGFzdFBvc2l0aW9uID0ge307XHRcclxuXHRcclxuXHR0aGlzLmF0dGFja0Nvb2xkb3duID0gNjtcclxufVxyXG5cclxuUGxheWVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRW50aXR5LnByb3RvdHlwZSk7XHJcblBsYXllci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBQbGF5ZXI7XHJcblxyXG4vLyBAUmVuZGVyXHJcblBsYXllci5wcm90b3R5cGUuaW5pdFNwcml0ZXMgPSBmdW5jdGlvbigpIHtcdFxyXG5cdEVudGl0eS5wcm90b3R5cGUuaW5pdFNwcml0ZXMuY2FsbCh0aGlzKTtcdFxyXG5cclxuXHR0aGlzLnNwcml0ZSA9IHRoaXMuc3ByaXRlcy5uZXdBbmltYXRlZFNwcml0ZSgnd2FycmlvcicpO1xyXG5cdHRoaXMuc3ByaXRlLmFuY2hvci54ID0gMC41O1x0XHRcclxuXHR0aGlzLnNwcml0ZS5wbGF5KCk7XHRcclxuXHR0aGlzLnNwcml0ZS5wb3NpdGlvbi55IC09IDAuODUgKiB0aGlzLnNwcml0ZS5oZWlnaHQ7XHRcclxuXHRcclxuXHR0aGlzLmNvbnRhaW5lci5hZGRDaGlsZCh0aGlzLnNwcml0ZSk7XHRcdFxyXG59XHJcblxyXG5QbGF5ZXIucHJvdG90eXBlLmFkZE5hbWVMYWJlbCA9IGZ1bmN0aW9uKCkge1x0XHRcclxuXHRpZih0aGlzLmNvbnRhaW5lcikge1x0XHRcclxuXHRcdHZhciB0ZXh0ID0gdGhpcy5zcHJpdGVzLmNyZWF0ZVRleHQodGhpcy5uYW1lLCA5KTtcclxuXHRcdHRleHQueCAtPSB0ZXh0LndpZHRoIC8gMjtcclxuXHRcdHRleHQueSAtPSAyNTtcclxuXHRcdHRoaXMuY29udGFpbmVyLmFkZENoaWxkKHRleHQpO1xyXG5cdH1cclxufVx0XHJcblxyXG4vLyBASG9zdFxyXG5QbGF5ZXIucHJvdG90eXBlLnVzaW5nID0gZnVuY3Rpb24oKSB7XHJcblx0aWYoIXRoaXMuYWN0aXZhdGUpIHJldHVybiBmYWxzZTtcclxuXHRcdFx0XHRcclxuXHR2YXIgaSA9IHRoaXMuYWN0aXZhdGVbMF0sXHJcblx0XHRqID0gdGhpcy5hY3RpdmF0ZVsxXTsgXHRcdFx0XHJcblx0dGhpcy5hY3RpdmF0ZSA9IG51bGw7XHJcblx0XHJcblx0aWYoTWF0aC5hYnModGhpcy5pIC0gaSkgPD0gMSAmJiBcclxuXHQgICBNYXRoLmFicyh0aGlzLmogLSBqKSA8PSAxKSB7XHJcblx0XHRcclxuXHRcdHZhciBpdGVtID0gdGhpcy53b3JsZC5nZXRJdGVtKGksIGopO1xyXG5cdFx0aWYoaXRlbSkge1xyXG5cdFx0XHRpZih0aGlzLmludmVudG9yeS5wdXQoaXRlbSkpIHtcclxuXHRcdFx0XHR0aGlzLmdhbWUucGlja3VwSXRlbShpdGVtLCB0aGlzLmlkKTtcclxuXHRcdFx0fVx0XHRcdFx0XHRcdFxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5nYW1lLmFjdGl2YXRlT2JqKHRoaXMsIGksIGopO1xyXG5cdFx0fVx0XHRcclxuXHRcdHJldHVybiB0cnVlO1x0XHJcblx0fVx0XHRcclxuXHRyZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcblBsYXllci5wcm90b3R5cGUuZGlyRnJvbU1vdGlvbiA9IGZ1bmN0aW9uKCkge31cclxuXHJcblBsYXllci5wcm90b3R5cGUuc2V0TW92ZW1lbnQgPSBmdW5jdGlvbihkeCwgZHkpIHtcclxuXHR0aGlzLmR4ID0gZHg7XHJcblx0dGhpcy5keSA9IGR5O1xyXG59XHJcblxyXG5QbGF5ZXIucHJvdG90eXBlLnBvaW50VG9UaWxlID0gZnVuY3Rpb24oY29vcmQpIHtcclxuXHRyZXR1cm4gTWF0aC5mbG9vcihjb29yZCAvIENvbnN0LlRJTEVfU0laRSk7XHJcbn1cclxuXHJcblBsYXllci5wcm90b3R5cGUubW92ZSA9IGZ1bmN0aW9uKCkge1x0XHJcblx0dGhpcy5tb3Rpb25YID0gdGhpcy5keCAqIHRoaXMuYWN0aXZlU3BlZWQ7XHRcclxuXHR0aGlzLm1vdGlvblkgPSB0aGlzLmR5ICogdGhpcy5hY3RpdmVTcGVlZDtcclxuXHRcclxuXHQvL9GD0YDQtdC30LDQtdC8INGB0LrQvtGA0L7RgdGC0Ywg0LTQstC40LbQtdC90LjRjyDQv9C+INC00LjQsNCz0L7QvdCw0LvRj9C8XHJcblx0aWYodGhpcy5keCE9MCAmJiB0aGlzLmR5IT0wKSB7XHJcblx0XHR0aGlzLm1vdGlvblggKj0gMC43NTtcclxuXHRcdHRoaXMubW90aW9uWSAqPSAwLjc1O1x0XHRcclxuXHR9XHJcblx0XHJcblx0Ly/Qv9GA0L7QstC10YDQutCwINGB0YLQvtC70LrQvdC+0LLQtdC90LjQuVxyXG5cdHZhciB4ID0gTWF0aC5yb3VuZCgodGhpcy54ICsgTnVtYmVyLkVQU0lMT04pICogMTApICogMC4xLFxyXG5cdFx0eSA9IE1hdGgucm91bmQoKHRoaXMueSArIE51bWJlci5FUFNJTE9OKSAqIDEwKSAqIDAuMTtcdFx0XHJcblx0XHRcclxuXHQvL2NvbnNvbGUubG9nKFwiY2xpZW50OlwiLCB0aGlzLngsIHRoaXMueSk7XHRcclxuXHRcdFxyXG5cdHZhciB0aWNrcyA9IENvbnN0LlJFTkRFUlNfUEVSX1RJQ0s7XHJcblx0XHRcclxuXHRpZighdGhpcy53b3JsZC5tYXBbdGhpcy5pICsgdGhpcy5keF1bdGhpcy5qXS5wYXNzICYmIFxyXG5cdFx0dGhpcy5wb2ludEludGVyc2VjdFRpbGUoeCArIHRoaXMubW90aW9uWCAqIHRpY2tzLCB5LCB0aGlzLmkgKyB0aGlzLmR4LCB0aGlzLmopKSB7XHRcdFx0XHJcblx0XHRcdFxyXG5cdFx0XHR0aGlzLm1vdGlvblggPSAwO1xyXG5cdFx0fVx0XHRcclxuXHRpZighdGhpcy53b3JsZC5tYXBbdGhpcy5pXVt0aGlzLmogKyB0aGlzLmR5XS5wYXNzICYmIFxyXG5cdFx0dGhpcy5wb2ludEludGVyc2VjdFRpbGUoeCwgeSArIHRoaXMubW90aW9uWSAqIHRpY2tzLCB0aGlzLmksIHRoaXMuaiArIHRoaXMuZHkpKSB7XHRcdFx0XHJcblx0XHRcdFxyXG5cdFx0XHR0aGlzLm1vdGlvblkgPSAwO1xyXG5cdFx0fVxyXG5cdGlmKCF0aGlzLndvcmxkLm1hcFt0aGlzLmkgKyB0aGlzLmR4XVt0aGlzLmogKyB0aGlzLmR5XS5wYXNzICYmIFxyXG5cdFx0dGhpcy5wb2ludEludGVyc2VjdFRpbGUoeCArIHRoaXMubW90aW9uWCAqIHRpY2tzLCBcclxuXHRcdFx0XHRcdFx0XHRcdHkgKyB0aGlzLm1vdGlvblkgKiB0aWNrcywgdGhpcy5pICsgdGhpcy5keCwgdGhpcy5qICsgdGhpcy5keSkpIHtcdFx0XHRcclxuXHRcdFx0dGhpcy5tb3Rpb25YID0gMDtcclxuXHRcdFx0dGhpcy5tb3Rpb25ZID0gMDtcclxuXHRcdH1cdFx0XHJcblx0XHRcclxuXHR0aGlzLnVwZGF0ZUNvbnRhaW5lcigpO1x0XHRcdFx0XHRcdFx0XHRcdFx0XHRcclxufVx0XHJcblxyXG4vLyBAQ2xpZW50IFxyXG5QbGF5ZXIucHJvdG90eXBlLnByZWRpY3QgPSBmdW5jdGlvbigpIHtcdFx0XHJcblxyXG5cdHRoaXMuaG9zdHN0YXRlQnVmZmVyLmZvckVhY2goKGhvc3RQcmVkaWN0aW9uLCB0aW1lU3RhbXApID0+IHtcclxuXHRcdGlmKGhvc3RQcmVkaWN0aW9uKSB7XHJcblx0XHRcdHRoaXMubGFzdFBvc2l0aW9uID0gdGhpcy5wb3NpdGlvbkJ1ZmZlclt0aW1lU3RhbXBdO1xyXG5cdFx0XHRpZih0aGlzLmxhc3RQb3NpdGlvbikge1xyXG5cdFx0XHRcdC8vY29uc29sZS5sb2coXCJwcmVkaWN0aW9uXCIpOyBcclxuXHRcdFx0XHRcclxuXHRcdFx0XHR0aGlzLm1vdGlvblggKz0gKGhvc3RQcmVkaWN0aW9uLnggLSB0aGlzLmxhc3RQb3NpdGlvbi54KSAvIENvbnN0LlJFTkRFUlNfUEVSX1RJQ0s7XHJcblx0XHRcdFx0dGhpcy5tb3Rpb25ZICs9IChob3N0UHJlZGljdGlvbi55IC0gdGhpcy5sYXN0UG9zaXRpb24ueSkgLyBDb25zdC5SRU5ERVJTX1BFUl9USUNLO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHRoaXMuaG9zdHN0YXRlQnVmZmVyID0gW107XHJcblx0XHRcdFx0dGhpcy5wb3NpdGlvbkJ1ZmZlciA9IFtdO1x0XHRcclxuXHRcdFx0fVx0XHRcdFxyXG5cdFx0fVxyXG5cdH0pO1x0XHJcblx0XHJcblx0dGhpcy50aW1lU3RhbXArKztcclxuXHR0aGlzLnRpbWVTdGFtcCA9IHRoaXMudGltZVN0YW1wICUgMTA7XHJcblx0XHJcblx0dGhpcy5wb3NpdGlvbkJ1ZmZlclt0aGlzLnRpbWVTdGFtcF0gPSB7IHg6IHRoaXMueCArIHRoaXMubW90aW9uWCAqIENvbnN0LlJFTkRFUlNfUEVSX1RJQ0ssIFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0eTogdGhpcy55ICsgdGhpcy5tb3Rpb25ZICogQ29uc3QuUkVOREVSU19QRVJfVElDSyB9O1xyXG59XHJcblxyXG4vLyBAQ2xpZW50XHJcblBsYXllci5wcm90b3R5cGUuc2V0SG9zdFN0YXRlID0gZnVuY3Rpb24odGltZVN0YW1wLCB4LCB5KSB7XHJcblx0Ly9jb25zb2xlLmxvZyh0aW1lU3RhbXApO1x0XHJcblx0dGhpcy5ob3N0c3RhdGVCdWZmZXJbdGltZVN0YW1wICUgMTBdID0geyB4OiB4LCBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCB5OiB5IH07XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXJcclxuIiwiaW1wb3J0IHsgQ29uc3QgfSBmcm9tICdjb25zdC5qcydcclxuaW1wb3J0IEVudGl0eSBmcm9tICdlbnRpdHkvZW50aXR5LmpzJ1xyXG5pbXBvcnQgUGxheWVyIGZyb20gJ2VudGl0eS9wbGF5ZXIuanMnXHJcblxyXG5cclxudmFyIFByb2plY3RpbGUgPSBmdW5jdGlvbihnYW1lLCBpZCkge1xyXG5cdEVudGl0eS5jYWxsKHRoaXMsIGdhbWUsIGlkKTtcclxuXHRcdFx0XHJcblx0dGhpcy5jYXN0ZXIgPSBudWxsO1xyXG5cdHRoaXMuYWN0aXZlU3BlZWQgPSAyLjA7XHJcblx0dGhpcy50eXBlID0gMTAwO1x0XHJcblx0dGhpcy5kYW1hZ2UgPSAzNTtcdFxyXG59XHJcblxyXG5Qcm9qZWN0aWxlLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRW50aXR5LnByb3RvdHlwZSk7XHJcblByb2plY3RpbGUucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gUHJvamVjdGlsZTtcclxuXHJcblxyXG5Qcm9qZWN0aWxlLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oZHgsIGR5LCBlbnRpdHkpIHtcclxuXHR0aGlzLl9keCA9IGR4O1xyXG5cdHRoaXMuX2R5ID0gZHk7XHRcclxuXHR0aGlzLmNhc3RlciA9IGVudGl0eVxyXG59XHJcblxyXG5Qcm9qZWN0aWxlLnByb3RvdHlwZS5pbml0U3ByaXRlcyA9IGZ1bmN0aW9uKCkge1xyXG5cdEVudGl0eS5wcm90b3R5cGUuaW5pdFNwcml0ZXMuY2FsbCh0aGlzKTtcdFxyXG5cdFxyXG5cdHRoaXMuc3ByaXRlID0gdGhpcy5zcHJpdGVzLm5ld0FuaW1hdGVkU3ByaXRlKCdmaXJlYmFsbCcsIDAuMDYpO1xyXG5cdHRoaXMuc3ByaXRlLmFuY2hvci54ID0gMC41O1x0XHJcblx0dGhpcy5zcHJpdGUuYW5jaG9yLnkgPSAwLjU7XHRcclxuXHR0aGlzLnNwcml0ZS5wbGF5KCk7XHRcclxuXHRcclxuXHR0aGlzLmNvbnRhaW5lci5hZGRDaGlsZCh0aGlzLnNwcml0ZSk7XHRcclxufVxyXG5cclxuUHJvamVjdGlsZS5wcm90b3R5cGUuZGlyRnJvbU1vdGlvbiA9IGZ1bmN0aW9uKCkge31cclxuXHJcblByb2plY3RpbGUucHJvdG90eXBlLnVwZGF0ZUNvbnRhaW5lciA9IGZ1bmN0aW9uKCkge31cdFxyXG5cclxuUHJvamVjdGlsZS5wcm90b3R5cGUuaHVydCA9IGZ1bmN0aW9uKGRhbWFnZSkge31cclxuXHJcbi8vIEBIb3N0XHJcblByb2plY3RpbGUucHJvdG90eXBlLnVwZGF0ZUhvc3QgPSBmdW5jdGlvbihjb3VudCkge1x0XHRcdFx0XHJcblx0dGhpcy5tb3Rpb25YID0gKHRoaXMuX2R4ICogMC4wMSkgKiB0aGlzLmFjdGl2ZVNwZWVkO1xyXG5cdHRoaXMubW90aW9uWSA9ICh0aGlzLl9keSAqIDAuMDEpICogdGhpcy5hY3RpdmVTcGVlZDtcclxuXHRcclxuXHQvL9GB0YLQvtC70LrQvdC+0LLQtdC90LjRjyBjINGD0YDQvtCy0L3QtdC8XHJcblx0dGhpcy5pID0gTWF0aC5mbG9vcih0aGlzLnggLyBDb25zdC5USUxFX1NJWkUpO1xyXG5cdHRoaXMuaiA9IE1hdGguZmxvb3IodGhpcy55IC8gQ29uc3QuVElMRV9TSVpFKTtcdFxyXG5cdFxyXG5cdHZhciB0aWNrcyA9IENvbnN0LlJFTkRFUlNfUEVSX1RJQ0ssXHJcblx0XHRkeCA9IDAsXHJcblx0XHRkeSA9IDAsXHJcblx0XHR4ID0gdGhpcy54ICsgdGhpcy5tb3Rpb25YICogdGlja3MsXHJcblx0XHR5ID0gdGhpcy55ICsgdGhpcy5tb3Rpb25ZICogdGlja3M7XHJcblx0XHRcclxuXHRpZih0aGlzLl9keCAhPSAwKSBcclxuXHRcdGR4ID0gdGhpcy5fZHggLyBNYXRoLmFicyh0aGlzLl9keCk7XHJcblx0aWYodGhpcy5fZHkgIT0gMCkgXHJcblx0XHRkeSA9IHRoaXMuX2R5IC8gTWF0aC5hYnModGhpcy5fZHkpO1x0XHJcblx0XHJcblx0Ly9GSVhNRVxyXG5cdFxyXG5cdGlmKCF0aGlzLndvcmxkLm1hcFt0aGlzLmkgKyBkeF1bdGhpcy5qXS5wYXNzICYmIFxyXG5cdFx0dGhpcy5wb2ludEludGVyc2VjdFRpbGUoeCwgdGhpcy55LCB0aGlzLmkgKyBkeCwgdGhpcy5qKSkge1xyXG5cdFx0XHR0aGlzLmtpbGwoKTtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVx0XHRcclxuXHRpZighdGhpcy53b3JsZC5tYXBbdGhpcy5pXVt0aGlzLmogKyBkeV0ucGFzcyAmJiBcclxuXHRcdHRoaXMucG9pbnRJbnRlcnNlY3RUaWxlKHRoaXMueCwgeSwgdGhpcy5pLCB0aGlzLmogKyBkeSkpIHtcclxuXHRcdFx0dGhpcy5raWxsKCk7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdFx0XHJcblx0Ly/RgdGC0L7Qu9C60L3QvtCy0LXQvdC40Y8g0YEg0LzQvtCx0LDQvNC4XHJcblx0dGhpcy5nYW1lLmVudGl0eWxpc3QucG9vbCgpLmZvckVhY2goIChlbnRpdHkpID0+IHtcclxuXHRcdGlmKGVudGl0eSBpbnN0YW5jZW9mIFByb2plY3RpbGUpIHJldHVybjtcdFx0XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0aWYodGhpcy5nYW1lLm1vYkluUmFkaXVzKHRoaXMsIGVudGl0eSwgQ29uc3QuUExBWUVSX0FUQUNLX1JBRElVUykpIHsgXHRcclxuXHRcdFx0Ly/QtNGA0YPQttC10YHRgtCy0LXQvdC90YvQuSDQvtCz0L7QvdGMXHJcblx0XHRcdGlmKGVudGl0eSBpbnN0YW5jZW9mIFBsYXllciAmJiB0aGlzLmNhc3RlciBpbnN0YW5jZW9mIFBsYXllcikgcmV0dXJuOyBcclxuXHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRpZihlbnRpdHkuaXNJbkVudGl0eVNwcml0ZSh4LCB5KSkge1x0XHRcclxuXHRcdFx0XHRpZihlbnRpdHkgPT0gdGhpcy5jYXN0ZXIpIHJldHVybjtcdFx0XHJcblx0XHRcdFx0ZW50aXR5Lmh1cnQodGhpcy5kYW1hZ2UsIHRoaXMuY2FzdGVyKTtcclxuXHRcdFx0XHR0aGlzLmtpbGwoKTtcdFxyXG5cdFx0XHR9IFx0XHRcdFx0XHRcclxuXHRcdH1cclxuXHR9KTtcclxufVxyXG5cclxuUHJvamVjdGlsZS5wcm90b3R5cGUua2lsbCA9IGZ1bmN0aW9uKCkge1x0XHJcblx0dGhpcy5nYW1lLmVudGl0eWxpc3QucmVtb3ZlKHRoaXMuaWQpO1xyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2plY3RpbGUiLCJpbXBvcnQgeyBDb25zdCwgRW50aXR5VHlwZSwgSXRlbVN0YXRlIH0gZnJvbSAnY29uc3QuanMnXHJcbmltcG9ydCBQbGF5ZXIgZnJvbSAnZW50aXR5L3BsYXllci5qcydcclxuaW1wb3J0IE1QbGF5ZXIgZnJvbSAnZW50aXR5L21wbGF5ZXIuanMnXHJcbmltcG9ydCBMaXN0IGZyb20gJ3dvcmxkL2xpc3QuanMnXHJcbmltcG9ydCBJbnB1dCBmcm9tICdpbnB1dC5qcydcclxuaW1wb3J0IFJlbmRlciBmcm9tICdyZW5kZXIvcmVuZGVyLmpzJ1xyXG5pbXBvcnQgR3VpIGZyb20gJ3JlbmRlci9ndWkuanMnXHJcbmltcG9ydCBXb3JsZCBmcm9tICd3b3JsZC93b3JsZC5qcydcclxuXHJcbi8vZW50aXRpZXNcclxuaW1wb3J0IE1vdXNlIGZyb20gJ2VudGl0eS9tb3VzZS5qcydcclxuaW1wb3J0IE1hZ2UgZnJvbSAnZW50aXR5L21hZ2UuanMnXHJcbmltcG9ydCBQcm9qZWN0aWxlIGZyb20gJ2VudGl0eS9wcm9qZWN0aWxlLmpzJ1xyXG5cclxuXHJcblxyXG52YXIgR2FtZSA9IGZ1bmN0aW9uKCkge1x0XHRcdFxyXG5cdHRoaXMuY29udHJvbHMgPSB7XHRcclxuXHRcdHVwICAgICAgICA6IFtcIldcIl0sXHJcblx0XHRkb3duICAgICAgOiBbXCJTXCJdLFxyXG5cdFx0bGVmdCAgICAgIDogW1wiQVwiXSxcclxuXHRcdHJpZ2h0ICAgICA6IFtcIkRcIl0sICAgICAgICAgICBcclxuICAgICAgICBpbnZlbnRvcnkgOiBbXCJFXCJdLCBcclxuICAgICAgICBjYXN0ICAgICAgOiBbXCJGXCJdICAgICAgICAgICAgICAgICAgIFxyXG5cdH07XHRcdFx0XHRcclxuXHR0aGlzLlNDQUxFID0gQ29uc3QuU1RBR0VfU0NBTEU7XHRcclxuXHRcdFxyXG5cdHRoaXMuYWN0aXZlUGxheWVyID0gbnVsbDtcdFxyXG5cdHRoaXMuaWQgPSAtMTtcdFxyXG5cdHRoaXMucGxheWVycyA9IFtdO1x0XHJcblx0XHJcblx0XHQvL1RPRE8g0L/QtdGA0LXQvdC10YHRgtC4INGN0YLQviDQsiBhY3RpdmVQbGF5ZXIgP1xyXG5cdFxyXG5cdFx0Ly/QstC30LDQuNC80L7QtNC10LnRgdCy0LjQtSDRgSDQvtC60YDRg9C20LXQvdC40LXQvCjRgtCw0LnQuylcclxuXHRcdHRoaXMuYWN0aXZhdGUgPSBudWxsO1xyXG5cdFx0Ly/QuNC0INCw0YLQsNC60YPQtdC80L7Qs9C+INC80L7QsdCwXHJcblx0XHR0aGlzLmF0dGFjayA9IG51bGw7XHJcblx0XHQvL9C60LDRgdGCINC30LDQutC70LjQvdCw0L3QuNGPXHJcblx0XHR0aGlzLmNhc3QgPSBudWxsXHJcblx0XHJcblx0Ly/RgdC/0LjRgdC+0Log0LLRgdC10YUg0L/QvtC00LLQuNC20L3Ri9GFINC40LPRgNC+0LLRi9GFINC+0LHRitC10LrRgtC+0LIgKNC4INC40LPRgNC+0LrQvtCyKVxyXG5cdHRoaXMuZW50aXR5bGlzdCA9IG5ldyBMaXN0KHRoaXMsIENvbnN0Lk1BWF9QTEFZRVJTX1JPT00pO1x0XHJcblx0dGhpcy5pdGVtbGlzdCA9IG5ldyBMaXN0KHRoaXMpO1xyXG5cdC8v0LjQs9GA0L7QuiDRgdC00LXQu9Cw0Lsg0LTQtdC50YHRgtCy0LjQtVxyXG5cdHRoaXMubmVlZFVwZGF0ZVBsYXllckNvbnRyb2xzID0gZmFsc2U7XHJcblx0dGhpcy5uZWVkUmVidWlsZCA9IGZhbHNlO1xyXG5cdFxyXG5cdHRoaXMuc3Bhd25YID0gMDtcclxuXHR0aGlzLnNwYXduWSA9IDA7XHJcblx0XHRcclxuXHR0aGlzLndvcmxkID0gbmV3IFdvcmxkKCk7XHRcdFxyXG59XHJcblxyXG5HYW1lLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oKSB7XHRcclxuXHR0aGlzLmlucHV0ID0gbmV3IElucHV0KCk7XHRcclxuXHR0aGlzLmd1aSA9IG5ldyBHdWkodGhpcyk7XHJcblx0dGhpcy5yZW5kZXIgPSBuZXcgUmVuZGVyKHRoaXMpO1xyXG5cdHRoaXMucmVuZGVyLmluaXQoKTtcdFx0XHJcblx0dGhpcy5jYW1lcmEgPSB0aGlzLnJlbmRlci5nZXRDYW1lcmEoKTtcdFxyXG5cdHRoaXMuaW5wdXQuc2V0dXBLZXlBbmRNb3VzZUxpc3RlbmVycygpO1x0XHJcblx0XHJcblx0dGhpcy5nZW5Db25zdHJ1Y3Rvck1hcCgpO1xyXG59XHJcblxyXG5HYW1lLnByb3RvdHlwZS5mcmVlID0gZnVuY3Rpb24oKSB7XHJcblx0dGhpcy5pbnB1dC5mcmVlKCk7XHJcblx0dGhpcy5yZW5kZXIuZnJlZSgpO1x0XHJcblx0dGhpcy5ndWkuZnJlZSgpO1xyXG5cdHRoaXMuY2FtZXJhID0gbnVsbDtcdFxyXG5cdFxyXG5cdHRoaXMuYWN0aXZlUGxheWVyID0gbnVsbDtcclxuXHR0aGlzLmVudGl0eWxpc3QuZnJlZSgpO1xyXG5cdHRoaXMucGxheWVycyA9IFtdO1xyXG5cdHRoaXMubmVlZFVwZGF0ZVBsYXllckNvbnRyb2xzID0gZmFsc2U7XHJcbn1cclxuXHJcbkdhbWUucHJvdG90eXBlLnN0YXJ0R2FtZSA9IGZ1bmN0aW9uKHBsYXllcnMsIGNhbGxiYWNrKSB7XHJcblx0dGhpcy53b3JsZC5nZW5lcmF0ZU1hcCgpO1xyXG5cdFxyXG5cdHRoaXMuYWRkUGxheWVycyhwbGF5ZXJzKTtcclxuXHR0aGlzLmNhbWVyYS5hdHRhY2godGhpcy5hY3RpdmVQbGF5ZXIpO1xyXG5cdFx0XHJcblx0dGhpcy5yZW5kZXIucHJlbG9hZFRleHR1cmVzKCgpID0+IHtcdFx0XHJcblx0XHR0aGlzLmFkZFBsYXllcnNUb1N0YWdlKHBsYXllcnMpO1x0XHRcclxuXHRcdHRoaXMucmVuZGVyLnN0YXJ0UmVuZGVyKCk7XHRcclxuXHRcdGNhbGxiYWNrKCk7XHJcblx0fSk7XHRcdFxyXG59XHJcblxyXG5HYW1lLnByb3RvdHlwZS5tb2JJblJhZGl1cyA9IGZ1bmN0aW9uKHBsYXllciwgZW50aXR5LCByYWRpdXMpIHtcclxuXHR2YXIgTDIgPSAocGxheWVyLnggLSBlbnRpdHkueCkgKiAocGxheWVyLnggLSBlbnRpdHkueCkgKyAocGxheWVyLnkgLSBlbnRpdHkueSkgKiAocGxheWVyLnkgLSBlbnRpdHkueSk7IFxyXG5cdGlmKEwyIDwgcmFkaXVzICogcmFkaXVzKSByZXR1cm4gdHJ1ZTtcclxuXHRyZXR1cm4gZmFsc2U7XHJcbn1cclxuR2FtZS5wcm90b3R5cGUucHJvamVjdGlsZURpciA9IGZ1bmN0aW9uKHgsIHksIHR4LCB0eSkge1xyXG5cdHZhciBkeCA9IHR4IC0geCxcclxuXHRcdGR5ID0gdHkgLSB5LFxyXG5cdFx0bGVuID0gTWF0aC5zcXJ0KGR4KmR4K2R5KmR5KTtcclxuXHRpZihsZW4gPT0gMCkgcmV0dXJuIG51bGw7XHJcblx0XHRcdFxyXG5cdGR4ID0gfn4oMTAwICogZHggLyBsZW4pO1xyXG5cdGR5ID0gfn4oMTAwICogZHkgLyBsZW4pO1xyXG5cdHJldHVybiBbZHgsIGR5XTtcclxufVxyXG5cclxuR2FtZS5wcm90b3R5cGUudXBkYXRlUGxheWVyQ29udHJvbHMgPSBmdW5jdGlvbigpIHtcdFxyXG5cdGlmKCF0aGlzLmFjdGl2ZVBsYXllcikgcmV0dXJuO1xyXG5cdFxyXG5cdFx0XHJcblx0Ly/QvdCw0L/RgNCw0LLQu9C10L3QuNC1INGB0L/RgNCw0LnRgtCwINC+0YIg0L/QvtC30LjRhtC40Lgg0LzRi9GI0LrQuFxyXG5cdGlmKHRoaXMuaW5wdXQuZ2V0TW91c2VYKCkgPiB0aGlzLmNhbWVyYS53aWR0aDIpIHtcclxuXHRcdHRoaXMuYWN0aXZlUGxheWVyLmRpciA9IDE7XHJcblx0fSBlbHNlIHtcclxuXHRcdHRoaXMuYWN0aXZlUGxheWVyLmRpciA9IC0xO1xyXG5cdH1cclxuXHRcclxuXHQvL9C40L3QstC10L3RgtCw0YDRjFxyXG5cdGlmKHRoaXMuaW5wdXQuY2hlY2tQcmVzc2VkKHRoaXMuY29udHJvbHMuaW52ZW50b3J5KSkge1xyXG5cdFx0dGhpcy5ndWkub3BlbkludmVudG9yeSgpO1x0XHRcclxuXHR9XHRcclxuXHRpZih0aGlzLmd1aS5pc09wZW4oKSkge1xyXG5cdFx0dGhpcy5hY3RpdmVQbGF5ZXIuc2V0TW92ZW1lbnQoMCwgMCk7XHJcblx0XHRyZXR1cm47XHJcblx0fVx0XHJcblx0XHJcblx0Ly/Qv9GA0LDQstGL0Lkg0LrQu9C40Log0L/QviDQutCw0YDRgtC1KNCy0LfQsNC40LzQvtC00LXQudGB0YLQstC40LUpXHJcblx0aWYodGhpcy5pbnB1dC5ybWJEb3duKSB7XHJcblx0XHR2YXIgaSA9IH5+KCh0aGlzLmNhbWVyYS5wb3NYICogdGhpcy5TQ0FMRSAtIHRoaXMuY2FtZXJhLndpZHRoMiArIHRoaXMuaW5wdXQuZ2V0TGFzdFJpZ2h0Q2xpY2soKVswXSkgLyBcclxuXHRcdFx0XHQoQ29uc3QuVElMRV9TSVpFICogdGhpcy5TQ0FMRSkpLCBcclxuXHRcdFx0aiA9IH5+KCh0aGlzLmNhbWVyYS5wb3NZICogdGhpcy5TQ0FMRSAtIHRoaXMuY2FtZXJhLmhlaWdodDIgKyB0aGlzLmlucHV0LmdldExhc3RSaWdodENsaWNrKClbMV0pIC8gXHJcblx0XHRcdFx0KENvbnN0LlRJTEVfU0laRSAqIHRoaXMuU0NBTEUpKTtcclxuXHRcdGlmKGkgPCAwKSBpID0gMDtcclxuXHRcdGlmKGogPCAwKSBqID0gMDtcdFx0XHJcblx0XHRcclxuXHRcdHRoaXMuYWN0aXZhdGUgPSBbaSwgal07XHJcblx0XHRcclxuXHR9IGVsc2UgaWYodGhpcy5pbnB1dC5sbWJEb3duKSB7IC8v0LvQtdCy0YvQuSDQutC70LjQuiDQv9C+INC80L7QsdGDKNCw0YLQsNC60LApIFxyXG5cdFx0dmFyIHggPSAodGhpcy5jYW1lcmEucG9zWCAqIHRoaXMuU0NBTEUgLSB0aGlzLmNhbWVyYS53aWR0aDIgKyB0aGlzLmlucHV0LmdldExhc3RMZWZ0Q2xpY2soKVswXSkgLyB0aGlzLlNDQUxFLFxyXG5cdFx0XHR5ID0gKHRoaXMuY2FtZXJhLnBvc1kgKiB0aGlzLlNDQUxFIC0gdGhpcy5jYW1lcmEuaGVpZ2h0MiArIHRoaXMuaW5wdXQuZ2V0TGFzdExlZnRDbGljaygpWzFdKSAvIHRoaXMuU0NBTEU7XHJcblx0XHRcdFxyXG5cdFx0Ly9UT0RPINCw0L3QuNC80LDRhtC40Y8g0LDRgtCw0LrQuFxyXG5cdFx0XHRcdFxyXG5cdFx0dGhpcy5lbnRpdHlsaXN0LnBvb2woKS5mb3JFYWNoKCAoZW50aXR5KSA9PiB7XHJcblx0XHRcdGlmKGVudGl0eSBpbnN0YW5jZW9mIFBsYXllciB8fCBlbnRpdHkgaW5zdGFuY2VvZiBQcm9qZWN0aWxlKSByZXR1cm47XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRpZih0aGlzLm1vYkluUmFkaXVzKHRoaXMuYWN0aXZlUGxheWVyLCBlbnRpdHksIENvbnN0LlBMQVlFUl9BVEFDS19SQURJVVMpKSB7IFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0aWYoZW50aXR5LmlzSW5FbnRpdHlTcHJpdGUoeCwgeSkpIFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdHRoaXMuYXR0YWNrID0gZW50aXR5LmlkO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9IGVsc2UgaWYodGhpcy5pbnB1dC5jaGVja1ByZXNzZWQodGhpcy5jb250cm9scy5jYXN0KSkgeyAvL9C60LDRgdGCIFx0XHRcdFxyXG5cdFx0Ly9pZih0aGlzLmFjdGl2ZVBsYXllci5jYXN0KCkpIFxyXG5cdFx0e1xyXG5cdFx0XHR2YXIgeCA9ICh0aGlzLmNhbWVyYS5wb3NYICogdGhpcy5TQ0FMRSAtIHRoaXMuY2FtZXJhLndpZHRoMiArIHRoaXMuaW5wdXQuZ2V0TW91c2VYKCkpIC8gdGhpcy5TQ0FMRSxcclxuXHRcdFx0XHR5ID0gKHRoaXMuY2FtZXJhLnBvc1kgKiB0aGlzLlNDQUxFIC0gdGhpcy5jYW1lcmEuaGVpZ2h0MiArIHRoaXMuaW5wdXQuZ2V0TW91c2VZKCkpIC8gdGhpcy5TQ0FMRSxcclxuXHRcdFx0XHRkaXIgPSB0aGlzLnByb2plY3RpbGVEaXIodGhpcy5hY3RpdmVQbGF5ZXIueCwgdGhpcy5hY3RpdmVQbGF5ZXIueSwgeCwgeSk7XHJcblx0XHRcdGlmKCFkaXIpIHJldHVybjtcclxuXHRcdFx0XHJcblx0XHRcdHRoaXMuY2FzdCA9IHsgdHlwZToxMDAsIGR4OiBkaXJbMF0sIGR5OiBkaXJbMV0gfTtcclxuXHRcdFx0Ly9jb25zb2xlLmxvZyhcImNsaWVudCBjYXN0XCIpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRcdFxyXG5cdHZhciBkeCA9IDAsXHJcblx0XHRkeSA9IDA7XHJcblx0XHRcdFxyXG5cdGlmKHRoaXMuaW5wdXQuY2hlY2tLZXkodGhpcy5jb250cm9scy51cCkpIHtcdFx0XHRcclxuXHRcdGR5IC09IDE7XHRcdFx0XHJcblx0XHR0aGlzLm5lZWRVcGRhdGVQbGF5ZXJDb250cm9scyA9IHRydWU7XHRcclxuXHR9IFxyXG5cdGlmICh0aGlzLmlucHV0LmNoZWNrS2V5KHRoaXMuY29udHJvbHMuZG93bikpIHtcdFx0XHJcblx0XHRkeSArPSAxO1x0XHRcclxuXHRcdHRoaXMubmVlZFVwZGF0ZVBsYXllckNvbnRyb2xzID0gdHJ1ZTtcclxuXHR9XHJcblx0aWYodGhpcy5pbnB1dC5jaGVja0tleSh0aGlzLmNvbnRyb2xzLnJpZ2h0KSkge1x0XHRcclxuXHRcdGR4ICs9IDE7XHRcdFxyXG5cdFx0dGhpcy5uZWVkVXBkYXRlUGxheWVyQ29udHJvbHMgPSB0cnVlO1x0XHRcdFxyXG5cdH0gXHJcblx0aWYodGhpcy5pbnB1dC5jaGVja0tleSh0aGlzLmNvbnRyb2xzLmxlZnQpKSB7XHRcdFxyXG5cdFx0ZHggLT0gMTtcclxuXHRcdHRoaXMubmVlZFVwZGF0ZVBsYXllckNvbnRyb2xzID0gdHJ1ZTtcclxuXHR9XHRcdFxyXG5cdFxyXG5cdHRoaXMuYWN0aXZlUGxheWVyLnNldE1vdmVtZW50KGR4LCBkeSk7XHJcbn1cclxuXHJcbkdhbWUucHJvdG90eXBlLmFkZFBsYXllcnMgPSBmdW5jdGlvbihwbGF5ZXJzKSB7XHJcblx0Ly90aGlzLnBsYXllcnMgPSBwbGF5ZXJzO1xyXG5cdFxyXG5cdHZhciBwbGF5ZXJPYmogPSBudWxsO1xyXG5cdHBsYXllcnMuZm9yRWFjaCgocGxheWVyKSA9PiB7XHRcdFx0XHJcblx0XHQvL9C90LDRhdC+0LTQuNC8INC90LDRiNC10LPQviDQuNCz0YDQvtC60LBcclxuXHRcdGlmKHBsYXllci5pZCA9PSB0aGlzLmlkKSB7XHJcblx0XHRcdHBsYXllck9iaiA9IG5ldyBQbGF5ZXIodGhpcywgcGxheWVyLmlkLCBwbGF5ZXIubmFtZSk7XHJcblx0XHRcdHRoaXMuYWN0aXZlUGxheWVyID0gcGxheWVyT2JqO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cGxheWVyT2JqID0gbmV3IE1QbGF5ZXIodGhpcywgcGxheWVyLmlkLCBwbGF5ZXIubmFtZSk7XHJcblx0XHR9XHRcclxuXHRcdHBsYXllck9iai5zZXRQb3NpdGlvbih0aGlzLnNwYXduWCAqIENvbnN0LlRJTEVfU0laRSwgXHJcblx0XHRcdFx0XHRcdFx0ICB0aGlzLnNwYXduWSAqIENvbnN0LlRJTEVfU0laRSk7XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHR0aGlzLnBsYXllcnNbcGxheWVyLmlkXSA9IHBsYXllck9iajtcclxuXHRcdFxyXG5cdFx0Ly/QtNC+0LHQsNCy0LvRj9C10Lwg0LIg0YHQv9C40YHQutC4XHRcdFxyXG5cdFx0dGhpcy5lbnRpdHlsaXN0LmFkZFRvSWQocGxheWVyT2JqLCBwbGF5ZXIuaWQpO1xyXG5cdH0pO1x0XHJcbn1cclxuXHJcbkdhbWUucHJvdG90eXBlLmFkZFBsYXllcnNUb1N0YWdlID0gZnVuY3Rpb24ocGxheWVycykge1xyXG5cdHZhciBwbGF5ZXJPYmogPSBudWxsO1xyXG5cdHBsYXllcnMuZm9yRWFjaCgocGxheWVyKSA9PiB7XHJcblx0XHRwbGF5ZXJPYmogPSB0aGlzLmVudGl0eWxpc3QuZ2V0T2JqZWN0QnlJZChwbGF5ZXIuaWQpO1xyXG5cdFx0dGhpcy5yZW5kZXIuYWRkVG9TdGFnZUVudGl0eShwbGF5ZXJPYmopO1x0XHJcblx0fSk7XHRcclxufVxyXG5cclxuR2FtZS5wcm90b3R5cGUuYWN0aXZhdGVPYmogPSBmdW5jdGlvbihlbnRpdHksIGksIGosIGhvc3QpIHtcdFxyXG5cdC8v0LDQutGC0LjQstC40YDQvtCy0LDRgtGMINC+0LHRitC10LrRgijRgdGD0L3QtNGD0Los0YDRi9GH0LDQsyzQtNCy0LXRgNGMKVxyXG5cdHZhciBvYmogPSB0aGlzLndvcmxkLmdldE9iaihpLCBqKTsgXHJcblx0aWYob2JqICYmIG9iai5hY3RpdmF0ZShob3N0KSkge1x0XHRcclxuXHRcdC8v0L/QtdGA0LXRgdGC0YDQsNC40LLQsNC10Lwg0LzQtdGIINGD0YDQvtCy0L3Rj1x0XHJcblx0XHR0aGlzLm5lZWRSZWJ1aWxkID0gdHJ1ZTtcclxuXHRcdHJldHVybiB0cnVlO1x0XHRcclxuXHR9XHRcclxuXHRyZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbkdhbWUucHJvdG90eXBlLnJ1blRpY2sgPSBmdW5jdGlvbihwYWNrZXQpIHtcdFxyXG5cdHRoaXMuZ3VpLnVwZGF0ZSgpO1xyXG5cdHRoaXMudXBkYXRlUGxheWVyQ29udHJvbHMoKTtcdFxyXG5cdFxyXG5cdC8vVE9ETyDQvtCx0L3QvtCy0LjRgtGMINGB0L7RgdGC0L7Rj9C90LjRjyDQvtCx0YrQtdC60YLQvtCyINC/0L4g0LTQsNC90L3Ri9C8INC+0YIg0YXQvtGB0YLQsFxyXG5cdFxyXG5cdGlmKHRoaXMubmVlZFJlYnVpbGQpIHtcclxuXHRcdHRoaXMubmVlZFJlYnVpbGQgPSBmYWxzZTtcclxuXHRcdHRoaXMucmVuZGVyLmZvcmNlZFJlYnVpbGRNZXNoKCk7XHRcdFxyXG5cdH0gXHRcdFxyXG5cdFxyXG5cdHRoaXMuZW50aXR5bGlzdC5wb29sKCkuZm9yRWFjaCgoZW50aXR5LCBpZCkgPT4ge1x0XHRcclxuXHRcdGVudGl0eS51cGRhdGVDbGllbnQoKTsgXHRcdFxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdGVudGl0eS5pc1Zpc2libGUoKTtcdFx0XHRcclxuXHRcdGVudGl0eS5wcmVkaWN0KCk7XHJcblx0fSk7XHRcclxufVxyXG5cclxuR2FtZS5wcm90b3R5cGUuZ2VuQ29uc3RydWN0b3JNYXAgPSBmdW5jdGlvbigpIHtcclxuXHR0aGlzLmNvbnN0cnVjdG9yTWFwID0gW107XHRcdFxyXG5cdHRoaXMuY29uc3RydWN0b3JNYXBbRW50aXR5VHlwZS5Nb3VzZV0gPSBNb3VzZTtcclxuXHR0aGlzLmNvbnN0cnVjdG9yTWFwW0VudGl0eVR5cGUuTWFnZV0gPSBNYWdlO1xyXG5cdC8vdGhpcy5jb25zdHJ1Y3Rvck1hcFtFbnRpdHlUeXBlLlNrZWxldG9uXSA9IFNrZWxldG9uO1xyXG5cdFxyXG5cdHRoaXMuY29uc3RydWN0b3JNYXBbRW50aXR5VHlwZS5GaXJlQmFsbF0gPSBQcm9qZWN0aWxlO1xyXG59XHJcblxyXG5HYW1lLnByb3RvdHlwZS5jcmVhdGVPYmplY3RCeVR5cGUgPSBmdW5jdGlvbih0eXBlLCBpZCkge1xyXG5cdGlmKHR5cGUgIT0gbnVsbCkge1x0XHRcclxuXHRcdHZhciBlID0gbmV3IHRoaXMuY29uc3RydWN0b3JNYXBbdHlwZV0odGhpcywgaWQpO1x0XHRcclxuXHRcdC8vY29uc29sZS5sb2coXCJ0eXBlOlwiLCB0eXBlLCBlKTtcclxuXHRcdHJldHVybiBlO1xyXG5cdH1cclxuXHRyZXR1cm4gbnVsbDtcclxufVxyXG5cclxuR2FtZS5wcm90b3R5cGUuZW50aXR5RGllID0gZnVuY3Rpb24oaSwgaikge1xyXG5cdHRoaXMud29ybGQuZ2V0TWFwKClbaV1bal0uYmxvb2QgPSB0cnVlO1xyXG5cdC8v0L/QtdGA0LXRgdGC0YDQsNC40LLQsNC10Lwg0LzQtdGIINGD0YDQvtCy0L3Rj1x0XHJcblx0dGhpcy5uZWVkUmVidWlsZCA9IHRydWU7XHJcbn1cclxuXHJcbkdhbWUucHJvdG90eXBlLmFkZEVudGl0eSA9IGZ1bmN0aW9uKGVudGl0eSwgaWQpIHtcdFx0XHJcblx0dGhpcy5lbnRpdHlsaXN0LmFkZFRvSWQoZW50aXR5LCBpZCk7XHJcblx0dGhpcy5yZW5kZXIuYWRkVG9TdGFnZUVudGl0eShlbnRpdHkpO1xyXG59XHJcblxyXG5HYW1lLnByb3RvdHlwZS5yZW1vdmVFbnRpdHkgPSBmdW5jdGlvbihpZCkge1x0XHJcblx0dmFyIGVudGl0eSA9IHRoaXMuZW50aXR5bGlzdC5nZXRPYmplY3RCeUlkKGlkKTtcdFxyXG5cdGlmKGVudGl0eSkge1xyXG5cdFx0aWYodGhpcy5yZW5kZXIpXHJcblx0XHRcdHRoaXMucmVuZGVyLnJlbW92ZUZyb21TdGFnZUVudGl0eShlbnRpdHkpO1xyXG5cdFx0aWYoZW50aXR5IGluc3RhbmNlb2YgUGxheWVyKVxyXG5cdFx0XHR0aGlzLnBsYXllcnNbZW50aXR5LmlkXSA9IG51bGw7XHJcblx0fVx0XHRcclxuXHR0aGlzLmVudGl0eWxpc3QucmVtb3ZlKGlkKTtcclxufVxyXG5cclxuR2FtZS5wcm90b3R5cGUuZHJvcEl0ZW0gPSBmdW5jdGlvbihpLCBqLCBpdGVtLCBpZCkge1x0XHRcclxuXHRpdGVtLmRyb3AoaSwgaik7XHJcblx0dGhpcy53b3JsZC5zZXRJdGVtKGksIGosIGl0ZW0pO1x0XHJcblx0dGhpcy5pdGVtbGlzdC5zZXRTdGF0ZShpZCwgSXRlbVN0YXRlLkRyb3ApO1xyXG59XHJcblxyXG5HYW1lLnByb3RvdHlwZS5waWNrdXBJdGVtID0gZnVuY3Rpb24oaXRlbSwgb3duZXIpIHtcdFxyXG5cdC8vdmFyIGl0ZW0gPSB0aGlzLml0ZW1saXN0LmdldE9iamVjdEJ5SWQoaWQpO1x0XHJcblx0aWYoaXRlbSkge1xyXG5cdFx0aXRlbS5waWNrdXAodGhpcy5lbnRpdHlsaXN0LmdldE9iamVjdEJ5SWQob3duZXIpKTtcclxuXHRcdHRoaXMud29ybGQuc2V0SXRlbShpdGVtLmksIGl0ZW0uaiwgbnVsbCk7XHJcblx0XHR0aGlzLml0ZW1saXN0LnNldFN0YXRlKGl0ZW0uaWQsIEl0ZW1TdGF0ZS5QaWNrdXApO1xyXG5cdH1cdFx0XHRcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdhbWUiLCJpbXBvcnQgeyBDb25zdCB9IGZyb20gJ2NvbnN0LmpzJ1xyXG5pbXBvcnQgUGxheWVyIGZyb20gJ2VudGl0eS9wbGF5ZXIuanMnXHJcbmltcG9ydCBMaXN0SG9zdCBmcm9tICd3b3JsZC9saXN0aG9zdC5qcydcclxuaW1wb3J0IEdhbWUgZnJvbSAnZ2FtZS5qcydcclxuXHJcbmltcG9ydCBNb3VzZSBmcm9tICdlbnRpdHkvbW91c2UuanMnXHJcbmltcG9ydCBNYWdlIGZyb20gJ2VudGl0eS9tYWdlLmpzJ1xyXG5pbXBvcnQgUHJvamVjdGlsZSBmcm9tICdlbnRpdHkvcHJvamVjdGlsZS5qcydcclxuXHJcblxyXG52YXIgSG9zdEdhbWUgPSBmdW5jdGlvbigpIHtcdFxyXG5cdEdhbWUuY2FsbCh0aGlzKTtcdFx0XHJcblx0XHRcclxuXHQvL9C+0YLQtNC10LvRjNC90YvQuSDQvNCw0YHRgdC40LIg0LjQs9GA0L7QutC+0LJcclxuXHR0aGlzLnBsYXllcnMgPSBbXTtcclxuXHQvL9GB0L/QuNGB0L7QuiDQstGB0LXRhSDQv9C+0LTQstC40LbQvdGL0YUg0LjQs9GA0L7QstGL0YUg0L7QsdGK0LXQutGC0L7QsiAo0Lgg0LjQs9GA0L7QutC+0LIpXHJcblx0dGhpcy5lbnRpdHlsaXN0ID0gbmV3IExpc3RIb3N0KHRoaXMsIENvbnN0Lk1BWF9QTEFZRVJTX1JPT00pO1x0XHRcclxuXHR0aGlzLml0ZW1saXN0ID0gbmV3IExpc3RIb3N0KHRoaXMpO1xyXG5cdHRoaXMudXBkYXRlbGlzdFx0PSBbXTtcclxuXHRcclxuXHR0aGlzLmNvdW50ID0gMDtcclxufVxyXG5cclxuSG9zdEdhbWUucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHYW1lLnByb3RvdHlwZSk7XHJcbkhvc3RHYW1lLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEhvc3RHYW1lO1xyXG5cclxuXHJcbkhvc3RHYW1lLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oKSB7fVxyXG5cclxuSG9zdEdhbWUucHJvdG90eXBlLmZyZWUgPSBmdW5jdGlvbigpIHtcclxuXHR0aGlzLmVudGl0eWxpc3QuZnJlZSgpO1xyXG5cdHRoaXMucGxheWVycyA9IFtdO1xyXG5cdHRoaXMuY291bnQgPSAwO1xyXG59XHJcblxyXG5Ib3N0R2FtZS5wcm90b3R5cGUuc3RhcnRHYW1lID0gZnVuY3Rpb24ocGxheWVycywgY2FsbGJhY2spIHtcclxuXHR0aGlzLndvcmxkLmdlbmVyYXRlU2VlZCgpO1xyXG5cdHRoaXMud29ybGQuZ2VuZXJhdGVNYXAoKTtcdFxyXG5cdHRoaXMuc2V0U3Bhd25Qb2ludCgpO1xyXG5cdFxyXG5cdC8vY29uc29sZS5sb2coXCLRgtC+0YfQutCwINGB0L/QsNCy0L3QsFtpLGpdOlwiLHRoaXMud29ybGQuc3Bhd25Qb2ludCk7XHJcblx0XHRcclxuXHR0aGlzLmFkZFBsYXllcnMocGxheWVycyk7XHRcclxufVxyXG5cclxuSG9zdEdhbWUucHJvdG90eXBlLnNldFNwYXduUG9pbnQgPSBmdW5jdGlvbih4LCB5KSB7XHJcblx0aWYoeCA9PSBudWxsIHx8IHkgPT0gbnVsbCkge1xyXG5cdFx0dGhpcy5zcGF3blggPSB0aGlzLndvcmxkLnNwYXduUG9pbnRbMF07XHJcblx0XHR0aGlzLnNwYXduWSA9IHRoaXMud29ybGQuc3Bhd25Qb2ludFsxXTtcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblx0dGhpcy5zcGF3blggPSB4O1xyXG5cdHRoaXMuc3Bhd25ZID0geTtcclxufVxyXG5cclxuSG9zdEdhbWUucHJvdG90eXBlLmFkZFBsYXllcnMgPSBmdW5jdGlvbihwbGF5ZXJzKSB7XHJcblx0dmFyIHBsYXllck9iajtcclxuXHRwbGF5ZXJzLmZvckVhY2goKHBsYXllcikgPT4ge1xyXG5cdFx0cGxheWVyT2JqID0gbmV3IFBsYXllcih0aGlzLCBwbGF5ZXIuaWQsIHBsYXllci5uYW1lKTtcdFx0XHRcclxuXHRcdHBsYXllck9iai5zZXRQb3NpdGlvbih0aGlzLnNwYXduWCAqIENvbnN0LlRJTEVfU0laRSwgXHJcblx0XHRcdFx0XHRcdFx0ICB0aGlzLnNwYXduWSAqIENvbnN0LlRJTEVfU0laRSk7XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHR0aGlzLnBsYXllcnNbcGxheWVyLmlkXSA9IHBsYXllck9iajtcdFxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdC8v0LTQvtCx0LDQstC70Y/QtdC8INCyINGB0L/QuNGB0LrQuFx0XHRcclxuXHRcdHRoaXMuZW50aXR5bGlzdC5hZGRUb0lkKHBsYXllck9iaiwgcGxheWVyLmlkKTtcdFx0XHRcdFx0XHJcblx0fSk7XHRcclxufVxyXG5cclxuSG9zdEdhbWUucHJvdG90eXBlLmFjdGl2YXRlT2JqID0gZnVuY3Rpb24oZW50aXR5LCBpLCBqKSB7XHRcclxuXHRpZihHYW1lLnByb3RvdHlwZS5hY3RpdmF0ZU9iai5jYWxsKHRoaXMsIGVudGl0eSwgaSwgaiwgdHJ1ZSkpXHRcclxuXHRcdHRoaXMudXBkYXRlbGlzdC5wdXNoKFtpLCBqXSk7XHRcclxufVxyXG5cclxuLy8gQEhvc3RcclxuSG9zdEdhbWUucHJvdG90eXBlLnJ1blRpY2sgPSBmdW5jdGlvbigpIHtcclxuXHR0aGlzLmNvdW50Kys7XHJcblx0XHJcblx0Ly9UT0RPINC+0LHQvdC+0LLQu9C10L3QuNC1INC80LjRgNCwXHJcblx0XHJcblx0Ly9URVNUXHJcblx0aWYoIXRoaXMub25jZSkge1xyXG5cdFx0dGhpcy5vbmNlID0gdHJ1ZTtcclxuXHRcdGNvbnNvbGUubG9nKFwic3Bhd24gZW50aXR5XCIpO1xyXG5cdFx0dmFyIGVudGl0eTtcclxuXHRcdGZvcih2YXIgbSA9IDA7IG0gPCAzOyBtKyspIHtcclxuXHRcdFx0ZW50aXR5ID0gbmV3IE1vdXNlKHRoaXMsIDApO1x0XHRcclxuXHRcdFx0ZW50aXR5LnNldFBvc2l0aW9uKCh0aGlzLnNwYXduWCArIG0pICogMTYgKyA4LCBcclxuXHRcdFx0XHRcdCAgXHQgICBcdCAgICh0aGlzLnNwYXduWSkgKiAxNiArIDgpO1xyXG5cdFx0XHRcclxuXHRcdFx0dGhpcy5lbnRpdHlsaXN0LmFkZChlbnRpdHkpO1xyXG5cdFx0fVxyXG5cdFx0Zm9yKHZhciBtID0gMDsgbSA8IDE7IG0rKykge1xyXG5cdFx0XHRlbnRpdHkgPSBuZXcgTWFnZSh0aGlzLCAwKTtcdFx0XHJcblx0XHRcdGVudGl0eS5zZXRQb3NpdGlvbigodGhpcy5zcGF3blggLSAyKSAqIDE2ICsgOCwgXHJcblx0XHRcdFx0XHQgIFx0ICAgXHQgICAodGhpcy5zcGF3blkgKyBtKSAqIDE2ICsgOCk7XHJcblx0XHRcdFxyXG5cdFx0XHR0aGlzLmVudGl0eWxpc3QuYWRkKGVudGl0eSk7XHJcblx0XHR9XHJcblx0fVxyXG5cdFx0XHJcblx0dGhpcy5lbnRpdHlsaXN0LnBvb2woKS5mb3JFYWNoKChlbnRpdHkpID0+IHtcclxuXHRcdGlmKGVudGl0eSBpbnN0YW5jZW9mIFBsYXllcikge1xyXG5cdFx0XHQvL9C40YHQv9C+0LvRjNC30L7QstCw0YLRjCDQvtCx0YrQtdC60YJcclxuXHRcdFx0ZW50aXR5LnVzaW5nKCk7XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHQvL9Cw0YLQsNC60LAg0LzQvtCx0LBcclxuXHRcdFx0aWYoZW50aXR5LmF0dGFja01vYikge1xyXG5cdFx0XHRcdHZhciB0YXJnZXQgPSB0aGlzLmVudGl0eWxpc3QuZ2V0T2JqZWN0QnlJZChlbnRpdHkuYXR0YWNrTW9iKTtcclxuXHRcdFx0XHRpZih0aGlzLm1vYkluUmFkaXVzKGVudGl0eSwgdGFyZ2V0LCBDb25zdC5QTEFZRVJfQVRBQ0tfUkFESVVTKSkge1xyXG5cdFx0XHRcdFx0Ly9jb25zb2xlLmxvZyhcImF0dGFjayBlbnRpdHk6XCIsIGVudGl0eS5hdHRhY2spO1xyXG5cdFx0XHRcdFx0ZW50aXR5LmF0dGFjayh0YXJnZXQsIHRoaXMuY291bnQpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbnRpdHkuYXR0YWNrTW9iID0gbnVsbDtcclxuXHRcdFx0fVx0XHRcdFx0XHJcblx0XHRcdFx0XHJcblx0XHRcdC8v0LrQsNGB0YIg0LfQsNC60LvQuNC90LDQvdC40Y9cclxuXHRcdFx0aWYoZW50aXR5LnNwZWxsY2FzdCAmJiBlbnRpdHkuY2FzdCh0aGlzLmNvdW50KSkge1x0XHJcblx0XHRcdFx0Ly9cdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0dGhpcy5zcGF3blByb2plY3RpbGUoZW50aXR5LCBlbnRpdHkuc3BlbGxjYXN0LmR4LCBlbnRpdHkuc3BlbGxjYXN0LmR5KTtcdFx0XHRcdFx0XHJcblx0XHRcdFx0ZW50aXR5LnNwZWxsY2FzdCA9IG51bGw7XHJcblx0XHRcdH1cdFx0XHRcdFxyXG5cdFx0fVx0XHRcdFxyXG5cdFx0XHRcclxuXHRcdC8v0YHQuNC80YPQu9GP0YbQuNGPINC4INCY0JhcclxuXHRcdGVudGl0eS51cGRhdGVIb3N0KHRoaXMuY291bnQpO1x0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFxyXG5cdFx0ZW50aXR5LnggKz0gZW50aXR5Lm1vdGlvblggKiBDb25zdC5SRU5ERVJTX1BFUl9USUNLO1xyXG5cdFx0ZW50aXR5LnkgKz0gZW50aXR5Lm1vdGlvblkgKiBDb25zdC5SRU5ERVJTX1BFUl9USUNLO1xyXG5cdFx0XHRcdFx0XHRcclxuXHRcdC8vQFBsYXllclxyXG5cdFx0ZW50aXR5LmR4ID0gMDtcclxuXHRcdGVudGl0eS5keSA9IDA7XHRcdFx0XHRcclxuXHR9KTtcdFxyXG59XHJcblxyXG5Ib3N0R2FtZS5wcm90b3R5cGUudXBkYXRlUGxheWVyQ29udHJvbHMgPSBmdW5jdGlvbigpIHt9XHJcblxyXG5Ib3N0R2FtZS5wcm90b3R5cGUuYWRkUGxheWVyc1RvU3RhZ2UgPSBmdW5jdGlvbihwbGF5ZXJzKSB7fVxyXG5cclxuSG9zdEdhbWUucHJvdG90eXBlLmFkZEVudGl0eSA9IGZ1bmN0aW9uKGVudGl0eSwgaWQpIHtcdFx0XHJcblx0dGhpcy5lbnRpdHlsaXN0LmFkZFRvSWQoZW50aXR5LCBpZCk7XHJcbn1cclxuXHJcbkhvc3RHYW1lLnByb3RvdHlwZS5yZW1vdmVFbnRpdHkgPSBmdW5jdGlvbihpZCkge1x0XHRcdFxyXG5cdHZhciBlbnRpdHkgPSB0aGlzLmVudGl0eWxpc3QuZ2V0T2JqZWN0QnlJZChpZCk7XHRcclxuXHRpZihlbnRpdHkgaW5zdGFuY2VvZiBQbGF5ZXIpXHJcblx0XHR0aGlzLnBsYXllcnNbZW50aXR5LmlkXSA9IG51bGw7XHJcblx0XHRcclxuXHR0aGlzLmVudGl0eWxpc3QucmVtb3ZlKGlkKTtcclxufVxyXG5cclxuSG9zdEdhbWUucHJvdG90eXBlLnNwYXduUHJvamVjdGlsZSA9IGZ1bmN0aW9uKGVudGl0eSwgZHgsIGR5KSB7XHJcblx0dmFyIHAgPSBuZXcgUHJvamVjdGlsZSh0aGlzLCAwKTtcclxuXHRwLmluaXQoZHgsIGR5LCBlbnRpdHkpO1xyXG5cdHAuc2V0UG9zaXRpb24oZW50aXR5LngsIGVudGl0eS55KTtcclxuXHR0aGlzLmVudGl0eWxpc3QuYWRkKHApO1x0XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb3N0R2FtZSIsInZhciBLRVlTID0ge1xyXG5cdFx0TEVGVCAgICA6IDM3LCBcdFVQICAgICAgOiAzOCxcdFJJR0hUICAgOiAzOSwgIFx0RE9XTiAgICA6IDQwLCAgXHRFTlRFUiAgIDogMTMsICBcdFNQQUNFICAgOiAzMiwgIFx0U0hJRlQgICA6IDE2LCAgXHRDVFJMICAgIDogMTcsXHJcbiAgICBcdEFMVCAgICAgOiAxOCwgIFx0RVNDICAgICA6IDI3LCAgXHRTTEFTSCAgIDogMTExLCAgUEVSSU9EICA6IDE5MCwgXHQxICAgICAgIDogNDksICBcdDIgICAgICAgOiA1MCwgIFx0MyAgICAgICA6IDUxLCAgXHQ0ICAgICAgIDogNTIsXHJcbiAgIFx0XHQ1ICAgICAgIDogNTMsICBcdDYgICAgICAgOiA1NCwgIFx0NyAgICAgICA6IDU1LCAgXHQ4ICAgICAgIDogNTYsICBcdDkgICAgICAgOiA1NywgIFx0MCAgICAgICA6IDU4LCAgXHRBICAgICAgIDogNjUsICBcdEIgICAgICAgOiA2NixcclxuICAgIFx0QyAgICAgICA6IDY3LCAgXHREICAgICAgIDogNjgsICBcdEUgICAgICAgOiA2OSwgIFx0RiAgICAgICA6IDcwLCAgXHRHICAgICAgIDogNzEsICBcdEggICAgICAgOiA3MiwgIFx0SSAgICAgICA6IDczLCAgXHRKICAgICAgIDogNzQsXHJcbiAgICBcdEsgICAgICAgOiA3NSwgIFx0TCAgICAgICA6IDc2LCAgXHRNICAgICAgIDogNzcsICBcdE4gICAgICAgOiA3OCwgIFx0TyAgICAgICA6IDc5LCAgXHRQICAgICAgIDogODAsICBcdFEgICAgICAgOiA4MSwgIFx0UiAgICAgICA6IDgyLFxyXG4gICAgXHRTICAgICAgIDogODMsICBcdFQgICAgICAgOiA4NCwgIFx0VSAgICAgICA6IDg1LCAgXHRWICAgICAgIDogODYsICBcdFcgICAgICAgOiA4NywgIFx0WCAgICAgICA6IDg4LCAgXHRZICAgICAgIDogODksICBcdFogICAgICAgOiA5MCxcclxuICAgIFx0RjEgICAgICA6IDExMiwgXHRGMiAgICAgIDogMTEzLCBcdEYzICAgICAgOiAxMTQsIFx0RjQgICAgICA6IDExNSwgXHRGNSAgICAgIDogMTE2LCBcdEY2ICAgICAgOiAxMTcsIFx0RjcgICAgICA6IDExOCwgXHRGOCAgICAgIDogMTE5LFxyXG4gICAgXHRGOSAgICAgIDogMTIwLCBcdEYxMCAgICAgOiAxMjEsIFx0RjExICAgICA6IDEyMiwgXHRGMTIgICAgIDogMTIzICAgIFxyXG59O1xyXG5cdFxyXG5cdFxyXG52YXIgSW5wdXQgPSBmdW5jdGlvbigpIHtcdFxyXG5cdHRoaXMua2V5cyA9IFtdO1xyXG5cdHRoaXMucHJlc3NlZCA9IG51bGw7IFxyXG5cdHRoaXMubG1iRG93biA9IGZhbHNlO1xyXG5cdHRoaXMucm1iRG93biA9IGZhbHNlO1xyXG5cdHRoaXMuZ3JhYiA9IGZhbHNlLFx0XHJcblx0dGhpcy5oYXNGb2N1cyA9IHRydWU7XHJcblx0dGhpcy5wb2ludGVyTG9ja2VkID0gZmFsc2U7XHJcblx0dGhpcy5tb3VzZVggPSAtMTtcclxuXHR0aGlzLm1vdXNlWSA9IC0xO1xyXG5cdC8vdGhpcy5tb3VzZU1vdmVYID0gMDtcclxuXHQvL3RoaXMubW91c2VNb3ZlWSA9IDA7XHJcblx0dGhpcy5jbGljayA9IG51bGw7XHJcblx0XHJcblx0XHJcblx0dGhpcy5jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZS1jYW52YXMnKTtcclxuXHRcclxuXHQvL3RoaXMub25Nb3VzZVVwID0gdGhpcy5vbk1vdXNlVXAuYmluZCh0aGlzKTtcclxuXHR0aGlzLm9uTW91c2VEb3duID0gdGhpcy5vbk1vdXNlRG93bi5iaW5kKHRoaXMpO1x0XHJcblx0Ly90aGlzLm9uTW91c2VDbGljayA9IHRoaXMub25Nb3VzZUNsaWNrLmJpbmQodGhpcyk7XHJcblx0dGhpcy5vbk1vdXNlTW92ZSA9IHRoaXMub25Nb3VzZU1vdmUuYmluZCh0aGlzKTtcclxufVx0XHJcblxyXG5JbnB1dC5wcm90b3R5cGUuZnJlZSA9IGZ1bmN0aW9uKCkge1xyXG5cdHRoaXMua2V5cyA9IFtdOyBcclxuXHR0aGlzLnByZXNzZWQgPSBbXTtcclxuXHR0aGlzLmxtYkRvd24gPSBmYWxzZTtcclxuXHR0aGlzLnJtYkRvd24gPSBmYWxzZTtcclxuXHR0aGlzLmdyYWIgPSBmYWxzZTtcclxuXHR0aGlzLnBvaW50ZXJMb2NrZWQgPSBmYWxzZTtcclxuXHRpZih0aGlzLmNhbnZhcykge1xyXG5cdFx0Ly90aGlzLmNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25Nb3VzZUNsaWNrLCBmYWxzZSk7XHJcblx0XHR0aGlzLmNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLm9uTW91c2VEb3duLCBmYWxzZSk7XHJcblx0XHQvL3RoaXMuY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLm9uTW91c2VVcCwgZmFsc2UpO1xyXG5cdFx0dGhpcy5jYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5vbk1vdXNlTW92ZSwgZmFsc2UpO1xyXG5cdH1cclxuXHRcclxuXHQvL2RvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJsb2NrY2hhbmdlJywgdGhpcy5vblBvaW50ZXJMb2NrQ2hhbmdlLCBmYWxzZSk7XHJcblx0Ly9kb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3pwb2ludGVybG9ja2NoYW5nZScsIHRoaXMub25Qb2ludGVyTG9ja0NoYW5nZSwgZmFsc2UpO1xyXG59XHJcblxyXG5JbnB1dC5wcm90b3R5cGUuc2V0dXBLZXlBbmRNb3VzZUxpc3RlbmVycyA9IGZ1bmN0aW9uKCkge1xyXG5cdFxyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIChlKSA9PiB7XHJcblx0XHR0aGlzLmhhc0ZvY3VzID0gdHJ1ZTsgICBcclxuXHR9LCBmYWxzZSk7XHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3VuZm9jdXMnLCAoZSkgPT4ge1xyXG5cdFx0dGhpcy5oYXNGb2N1cyA9IGZhbHNlO1x0XHJcblx0XHR0aGlzLmNsZWFyQWxsS2V5KCk7XHRcclxuXHR9LCBmYWxzZSk7XHJcblx0XHRcclxuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcclxuXHRcdC8vZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0dGhpcy5rZXlzW2Uua2V5Q29kZV0gPSB0cnVlO1xyXG5cdFx0dGhpcy5wcmVzc2VkID0gZS5rZXlDb2RlO1x0XHRcclxuXHR9LCBmYWxzZSk7XHJcblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZSkgPT4ge1xyXG5cdFx0Ly9lLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHR0aGlzLmtleXNbZS5rZXlDb2RlXSA9IGZhbHNlO1xyXG5cdH0sIGZhbHNlKTtcdFxyXG5cdFxyXG5cdC8qZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcmxvY2tjaGFuZ2UnLCAoZSkgPT4ge1xyXG5cdFx0dGhpcy5vblBvaW50ZXJMb2NrQ2hhbmdlKCk7XHJcblx0fSwgZmFsc2UpOyovXHJcblx0XHJcblx0XHRcclxuXHRpZih0aGlzLmNhbnZhcykge1xyXG5cdFx0Ly90aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25Nb3VzZUNsaWNrLCBmYWxzZSk7XHJcblx0XHR0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLm9uTW91c2VEb3duLCBmYWxzZSk7XHJcblx0XHQvL3RoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLm9uTW91c2VVcCwgZmFsc2UpO1xyXG5cdFx0dGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5vbk1vdXNlTW92ZSwgZmFsc2UpO1xyXG5cdH1cdFxyXG59XHJcblxyXG4vKklucHV0LnByb3RvdHlwZS5kcmFnID0gZnVuY3Rpb24oKSB7XHJcblx0dGhpcy5ncmFiID0gdHJ1ZTtcclxufVxyXG5cclxuSW5wdXQucHJvdG90eXBlLmRyb3AgPSBmdW5jdGlvbigpIHtcclxuXHR0aGlzLmdyYWIgPSBmYWxzZTtcclxuXHR0aGlzLm1vdXNlTW92ZVggPSAwO1xyXG5cdHRoaXMubW91c2VNb3ZlWSA9IDA7XHJcbn0qL1x0XHJcblxyXG5JbnB1dC5wcm90b3R5cGUub25Nb3VzZUNsaWNrID0gZnVuY3Rpb24oZSkge1x0XHJcblx0dGhpcy5jbGljayA9IFtlLnBhZ2VYLCBlLnBhZ2VZXTtcclxuXHRcclxuXHQvL2NvbnNvbGUubG9nKFwiY2xpY2tcIiwgdGhpcy5jbGljayk7XHJcblx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59XHJcblxyXG5JbnB1dC5wcm90b3R5cGUub25Nb3VzZURvd24gPSBmdW5jdGlvbihlKSB7XHJcblx0aWYgKHRoaXMuaGFzRm9jdXMpIHtcclxuXHRcdGlmIChlLndoaWNoID09IDEpIHtcclxuXHRcdFx0dGhpcy5sbWJEb3duID0gdHJ1ZTtcclxuXHRcdH0gZWxzZSBpZiAoZS53aGljaCA9PSAzKSB7XHJcblx0XHRcdHRoaXMucm1iRG93biA9IHRydWU7XHRcdFx0XHJcblx0XHR9XHJcblx0XHQvL3RoaXMubG9ja1BvaW50ZXIodGhpcy5jYW52YXMpO1xyXG5cdFx0dGhpcy5jbGljayA9IFtlLnBhZ2VYLCBlLnBhZ2VZXTtcdFxyXG5cdFx0Ly9jb25zb2xlLmxvZyhcImNsaWNrXCIsIHRoaXMuY2xpY2spO1xyXG5cdFx0XHJcblx0fSBlbHNlIHtcclxuXHRcdHdpbmRvdy5mb2N1cygpO1xyXG5cdH1cdFx0XHRcdFx0XHRcclxuXHRlLnByZXZlbnREZWZhdWx0KCk7XHJcbn1cclxuXHJcbklucHV0LnByb3RvdHlwZS5vbk1vdXNlVXAgPSBmdW5jdGlvbihlKSB7XHJcblx0aWYgKHRoaXMuaGFzRm9jdXMpIHtcclxuXHRcdGlmIChlLndoaWNoID09IDEpIHtcclxuXHRcdFx0dGhpcy5sbWJEb3duID0gZmFsc2U7XHRcdFx0XHJcblx0XHR9IGVsc2UgaWYgKGUud2hpY2ggPT0gMykge1xyXG5cdFx0XHR0aGlzLnJtYkRvd24gPSBmYWxzZTtcclxuXHRcdH1cclxuXHR9XHJcblx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59XHJcblxyXG5JbnB1dC5wcm90b3R5cGUub25Nb3VzZU1vdmUgPSBmdW5jdGlvbihlKSB7XHJcblx0dGhpcy5tb3VzZVggPSBlLnBhZ2VYO1xyXG5cdHRoaXMubW91c2VZID0gZS5wYWdlWTtcdFxyXG5cdFx0XHJcblx0LyppZiAodGhpcy5pc1BvaW50ZXJMb2NrZWQoKSkge1xyXG5cdFx0dGhpcy5tb3VzZU1vdmVYICs9IGUubW92ZW1lbnRYOy8vIHx8IGUubW96TW92ZW1lbnRYIHx8IGUud2Via2l0TW92ZW1lbnRYIHx8IDA7XHJcblx0XHR0aGlzLm1vdXNlTW92ZVkgKz0gZS5tb3ZlbWVudFk7Ly8gfHwgZS5tb3pNb3ZlbWVudFkgfHwgZS53ZWJraXRNb3ZlbWVudFkgfHwgMDtcdFx0XHJcblx0fSovXHRcdFx0XHJcblx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59XHJcblxyXG4vKlxyXG5JbnB1dC5wcm90b3R5cGUuZ2V0TW91c2VNb3ZlbWVudFggPSBmdW5jdGlvbigpIHtcclxuXHR2YXIgeCA9IHRoaXMubW91c2VNb3ZlWDtcclxuXHR0aGlzLm1vdXNlTW92ZVggPSAwO1x0XHJcblx0cmV0dXJuIHg7XHJcbn1cclxuXHJcbklucHV0LnByb3RvdHlwZS5nZXRNb3VzZU1vdmVtZW50WSA9IGZ1bmN0aW9uKCkge1xyXG5cdHZhciB5ID0gdGhpcy5tb3VzZU1vdmVZO1x0XHJcblx0dGhpcy5tb3VzZU1vdmVZID0gMDtcdFx0XHJcblx0cmV0dXJuIHk7XHJcbn0qL1xyXG5cclxuSW5wdXQucHJvdG90eXBlLmdldE1vdXNlWCA9IGZ1bmN0aW9uKCkge1x0XHRcclxuXHRyZXR1cm4gdGhpcy5tb3VzZVg7XHJcbn1cclxuXHJcbklucHV0LnByb3RvdHlwZS5nZXRNb3VzZVkgPSBmdW5jdGlvbigpIHtcclxuXHRyZXR1cm4gdGhpcy5tb3VzZVk7XHJcbn1cclxuXHJcbklucHV0LnByb3RvdHlwZS5nZXRMYXN0UmlnaHRDbGljayA9IGZ1bmN0aW9uKCkge1xyXG5cdHRoaXMucm1iRG93biA9IGZhbHNlO1xyXG5cdHJldHVybiB0aGlzLmNsaWNrO1xyXG59XHJcbklucHV0LnByb3RvdHlwZS5nZXRMYXN0TGVmdENsaWNrID0gZnVuY3Rpb24oKSB7XHJcblx0dGhpcy5sbWJEb3duID0gZmFsc2U7XHJcblx0cmV0dXJuIHRoaXMuY2xpY2s7XHJcbn1cclxuXHJcbklucHV0LnByb3RvdHlwZS5nZXRMYXN0Q2xpY2tQb3MgPSBmdW5jdGlvbigpIHtcclxuXHRyZXR1cm4gdGhpcy5jbGljaztcclxufVxyXG5cclxuSW5wdXQucHJvdG90eXBlLmNoZWNrUHJlc3NlZCA9IGZ1bmN0aW9uKGNrZXkpIHsgXHRcdFxyXG5cdGlmKHRoaXMucHJlc3NlZCA9PSBLRVlTW2NrZXldKSB7XHJcblx0XHR0aGlzLnByZXNzZWQgPSBudWxsO1xyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fSAgICAgICAgXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn0gICBcclxuXHJcbklucHV0LnByb3RvdHlwZS5nZXRQcmVzc2VkID0gZnVuY3Rpb24oKSB7IFx0XHRcclxuXHRyZXR1cm4gdGhpcy5wcmVzc2VkO1xyXG59ICAgXHJcblx0XHJcbklucHV0LnByb3RvdHlwZS5jaGVja0tleSA9IGZ1bmN0aW9uKGNrZXkpIHsgXHRcdFxyXG5cdGlmKCEhdGhpcy5rZXlzW0tFWVNbY2tleV1dKSB7XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9ICAgICAgICBcclxuICAgIHJldHVybiBmYWxzZTtcclxufSAgIFxyXG5JbnB1dC5wcm90b3R5cGUuY2xlYXJLZXkgPSBmdW5jdGlvbihja2V5KSB7ICAgICAgXHJcbiAgICB0aGlzLmtleXNbS0VZU1tja2V5XV0gPSBmYWxzZTsgICAgICAgICBcclxufVxyXG5JbnB1dC5wcm90b3R5cGUuY2xlYXJBbGxLZXkgPSBmdW5jdGlvbigpIHsgICAgICBcclxuICAgIHRoaXMua2V5cyA9IFtdOyBcclxuXHR0aGlzLnByZXNzZWQgPSBbXTsgICAgICAgIFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbnB1dFxyXG4iLCJpbXBvcnQgUGVlciBmcm9tICdzaW1wbGUtcGVlcidcclxuXHJcbmltcG9ydCB7IENvbnN0LCBNc2cgfSBmcm9tICdjb25zdC5qcydcclxuaW1wb3J0IENsaWVudCBmcm9tICduZXR3b3JrL2NsaWVudC5qcydcclxuaW1wb3J0IEhvc3QgZnJvbSAnbmV0d29yay9ob3N0LmpzJ1xyXG5cclxuXHJcbnZhciBMb2JieSA9IChmdW5jdGlvbigpIHtcclxuXHQgXHJcblx0dmFyIHNvY2tldCA9IG51bGwsXHRcdFxyXG5cdFx0Y2xpZW50ID0gbmV3IENsaWVudCgpLFxyXG5cdFx0aG9zdCA9IG5ldyBIb3N0KCksXHJcblx0XHRpc0hvc3QgPSBmYWxzZSxcdFx0XHRcdFx0XHJcblx0XHRwbGF5ZXJOYW1lID0gXCJcIixcclxuXHRcdGlkID0gbnVsbCxcclxuXHRcdHBsYXllcnMgPSBbXTtcdFxyXG5cdFxyXG5cdHZhciBjb250YWluZXJfbG9iYnksXHRcdFxyXG5cdFx0Y29udGFpbmVyX3Jvb20sXHJcblx0XHRjb250YWluZXJfbWVudSxcdFx0XHJcblx0XHRyb29tX21lbnVfY2hhdCxcclxuXHRcdHJvb21fb3B0cyxcclxuXHRcdFxyXG5cdFx0Y29udGFpbmVyX2dhbWUsXHJcblx0XHRjb250YWluZXJfZ2FtZV9tZW51O1x0XHRcdFx0XHJcblx0XHJcblx0XHJcbiBcdGZ1bmN0aW9uIGdldFBsYXllclNlbGZOYW1lKCkge1xyXG5cdFx0dmFyIGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllci1uYW1lLWlucHV0Jyk7XHJcblx0XHRpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgKGUpID0+IHtcdFx0XHJcblx0XHRcdHBsYXllck5hbWUgPSBpbnB1dC52YWx1ZS5zdWJzdHJpbmcoMCwgMTYpO1x0XHRcdFx0XHJcblx0XHR9KVx0XHRcclxuXHR9XHJcblx0XHJcblx0ZnVuY3Rpb24gdmFsaWRhdGVOYW1lKCkge1xyXG5cdFx0aWYocGxheWVyTmFtZSA9PSBcIlwiKSB7XHJcblx0XHRcdHZhciBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXItbmFtZS1pbnB1dCcpO1xyXG5cdFx0XHRwbGF5ZXJOYW1lID0gaW5wdXQudmFsdWUuc3Vic3RyaW5nKDAsIDE2KTtcclxuXHRcdH1cdFx0XHRcdFxyXG5cdFx0XHJcblx0XHRpZihwbGF5ZXJOYW1lID09IFwiXCIpIHtcclxuXHRcdFx0cGxheWVyTmFtZSA9IFwiUGxheWVyXCJcclxuXHRcdFx0aWYoaXNIb3N0KSBwbGF5ZXJOYW1lID0gXCJIb3N0XCI7XHRcdFx0XHJcblx0XHR9XHJcblx0XHRwbGF5ZXJOYW1lID0gcGxheWVyTmFtZS5zdWJzdHJpbmcoMCwgMTYpO1xyXG5cdH1cclxuXHRcclxuXHRmdW5jdGlvbiBnZXRQbGF5ZXJzKCkge1xyXG5cdFx0cmV0dXJuIHBsYXllcnM7XHJcblx0fVxyXG5cdFxyXG5cdGZ1bmN0aW9uIHNhZmVseVBhcnNlSlNPTiAoanNvbikgeyBcclxuIFx0IFx0dHJ5IHtcclxuICAgIFx0XHRyZXR1cm4gSlNPTi5wYXJzZShqc29uKTtcclxuICBcdFx0fSBjYXRjaCAoZSkge1xyXG4gICAgXHRcdHJldHVybiB7fTtcclxuICBcdFx0fSAgXHJcblx0fVxyXG5cdFxyXG5cdGZ1bmN0aW9uIGNsb3NlU29ja2V0KCkge1x0XHRcclxuXHRcdGlmKHNvY2tldCkge1xyXG5cdFx0XHRzb2NrZXQub25jbG9zZSA9IGZ1bmN0aW9uICgpIHt9OyBcclxuICAgIFx0XHRzb2NrZXQuY2xvc2UoKTtcclxuXHRcdH1cdFx0XHJcblx0fVxyXG5cdFxyXG5cdGZ1bmN0aW9uIHNlbmRKU09OKG1zZykge1xyXG5cdFx0aWYoc29ja2V0ICYmIHNvY2tldC5yZWFkeVN0YXRlID09IHNvY2tldC5PUEVOKXtcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRzb2NrZXQuc2VuZChKU09OLnN0cmluZ2lmeShtc2cpKTtcclxuXHRcdH1cdFxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gdHJ5VG9Db25uZWN0KCkge1x0XHJcblx0XHRpZihzb2NrZXQgJiYgc29ja2V0LnJlYWR5U3RhdGUgPT0gc29ja2V0Lk9QRU4pIHtcclxuXHRcdFx0Y2xvc2VTb2NrZXQoKTtcclxuXHRcdH1cclxuXHRcclxuXHRcdC8vc29ja2V0ID0gbmV3IFdlYlNvY2tldChcIndzOi8vbG9jYWxob3N0OjgwODAvd3NcIik7XHJcblx0XHRzb2NrZXQgPSBuZXcgV2ViU29ja2V0KFwid3NzOi8vZGVlcC1zZWEuaGVyb2t1YXBwLmNvbS93c1wiKTtcclxuXHRcdFxyXG5cdFx0c29ja2V0Lm9ub3BlbiA9IGZ1bmN0aW9uIChldmVudCkge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcItCh0L7QtdC00LjQvdC10L3QuNC1IVwiKTtcdFxyXG5cdFx0fTtcclxuXHRcdHNvY2tldC5vbmNsb3NlID0gZnVuY3Rpb24oZXZlbnQpIHtcclxuICBcdFx0XHRpZiAoZXZlbnQud2FzQ2xlYW4pIHtcclxuICAgIFx0XHRcdGNvbnNvbGUubG9nKCfQodC+0LXQtNC40L3QtdC90LjQtSDQt9Cw0LrRgNGL0YLQvicpO1xyXG4gIFx0XHRcdH0gZWxzZSB7XHJcbiAgICBcdFx0XHQvL2NvbnNvbGUubG9nKCfQntCx0YDRi9CyINGB0L7QtdC00LjQvdC10L3QuNGPJyk7XHJcbiAgXHRcdFx0fSAgXHJcblx0XHRcdGNsZWFyUm9vbUxpc3QoKTtcclxuXHRcdFx0Ly9zaG93TWVudVdpbmRvdygpO1xyXG5cdFx0fTtcdFx0XHJcblx0XHRzb2NrZXQub25tZXNzYWdlID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcblx0XHRcdC8vY29uc29sZS5sb2coZXZlbnQuZGF0YSk7XHJcbiAgXHRcdFx0b25OZXR3b3JrTWVzc2FnZShzYWZlbHlQYXJzZUpTT04oZXZlbnQuZGF0YSkpO1xyXG5cdFx0fVx0XHJcblx0XHRzb2NrZXQub25lcnJvciA9IGZ1bmN0aW9uKGVycm9yKSB7XHJcbiAgXHRcdFx0Ly9jb25zb2xlLmxvZyhcItCe0YjQuNCx0LrQsCA6XCIgKyBlcnJvci5tZXNzYWdlKTtcclxuXHRcdH07XHRcdFxyXG5cdH1cclxuXHRcclxuXHRmdW5jdGlvbiBvbk5ldHdvcmtNZXNzYWdlKG1zZykge1xyXG5cdFx0dHJ5IHtcclxuXHRcdFx0aWYobXNnLnR5cGUpIHtcdFx0XHJcblx0XHRcdFx0c3dpdGNoKG1zZy50eXBlKXtcdFx0XHRcclxuXHRcdFx0XHRcdGNhc2UgXCJSb29tTGlzdFwiOlxyXG5cdFx0XHRcdFx0XHR1cGRhdGVSb29tTGlzdChtc2cucm9vbXMpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgXCJQbGF5ZXJMaXN0XCI6XHJcblx0XHRcdFx0XHRcdHBsYXllcnMgPSBtc2cucGxheWVycztcclxuXHRcdFx0XHRcdFx0aWQgPSBtc2cuaWQ7XHJcblx0XHRcdFx0XHRcdHVwZGF0ZVBsYXllcnNJblJvb20obXNnLnBsYXllcnMsIG1zZy5pZCk7XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSBcIkhvc3RMZWF2ZVwiOlx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHQvL3Nob3dXYXJuaW5nTWVzc2FnZShcIkhvc3QgbGVhdmUgcm9vbVwiLCAyMDAwKTtcclxuXHRcdFx0XHRcdFx0Y2xpZW50LmRlc3Ryb3koKTtcclxuXHRcdFx0XHRcdFx0c2hvd01lbnVXaW5kb3coKTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHRcclxuXHRcdFx0XHRcdGNhc2UgXCJDbGllbnRUb2tlblwiOlxyXG5cdFx0XHRcdFx0XHQvL9C60LvQuNC10L3RgtGB0LrQuNC5INGC0L7QutC10L0g0LTQu9GPINGF0L7RgdGC0LBcclxuXHRcdFx0XHRcdFx0dmFyIGlkID0gbXNnLndlYnJ0Yy5jbGllbnRJRDtcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0aG9zdC5hZGROZXdDbGllbnQobXNnLndlYnJ0YywgbXNnLm5hbWUsICh0b2tlbikgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdGlmKHNvY2tldCAhPSBudWxsICYmIHNvY2tldC5yZWFkeVN0YXRlID09IHNvY2tldC5PUEVOKXtcdFxyXG5cdFx0XHRcdFx0XHRcdFx0dG9rZW4uY2xpZW50SUQgPSBpZDtcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0c29ja2V0LnNlbmQoSlNPTi5zdHJpbmdpZnkoeyB0eXBlOiBcIldlYlJUQ1Rva2VuXCIsIHdlYnJ0YzogdG9rZW4gfSkpO1xyXG5cdFx0XHRcdFx0XHRcdH1cdFxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0YnJlYWtcclxuXHRcdFx0XHRcdGNhc2UgXCJIb3N0VG9rZW5cIjpcclxuXHRcdFx0XHRcdFx0Ly/QvtGC0LLQtdGC0L3Ri9C5INGC0L7QutC10L0g0YXQvtGB0YLQsFx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRjbGllbnQuc2lnbmFsKG1zZy53ZWJydGMpO1x0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRicmVhaztcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiVW5kZWZpbmVkIHR5cGU6IFwiICsgbXNnLnR5cGUpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcdFx0XHRcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0gY2F0Y2goZSkge1xyXG5cdFx0XHRjb25zb2xlLmVycm9yKGUpO1xyXG5cdFx0fVxyXG5cdH1cdFx0XHRcclxuXHRcclxuXHRmdW5jdGlvbiBjbGVhclJvb21MaXN0KCkge1x0XHRcclxuXHRcdHdoaWxlIChyb29tX29wdHMuZmlyc3RDaGlsZCkge1xyXG4gICAgXHRcdHJvb21fb3B0cy5yZW1vdmVDaGlsZChyb29tX29wdHMuZmlyc3RDaGlsZCk7XHJcblx0XHR9XHJcblx0fVxyXG5cdFxyXG5cdGZ1bmN0aW9uIHVwZGF0ZVJvb21MaXN0KHJvb21zKSB7XHRcdFx0XHJcblx0XHRjbGVhclJvb21MaXN0KCk7XHJcblx0XHRcclxuXHRcdHZhciBpLCBvcHQsXHJcbiAgICAgICAgbGVuID0gcm9vbXMubGVuZ3RoOyAgIFxyXG4gICAgXHRcclxuICAgIFx0Zm9yIChpID0gMDsgaSA8IGxlbjsgKytpKSB7XHJcbiAgICAgICAgXHRvcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdPUFRJT04nKTtcclxuICAgICAgICBcdG9wdC50ZXh0Q29udGVudCA9IFwiI1wiICsgcm9vbXNbaV0uaWQgKyBcIiBbXCIrIHJvb21zW2ldLmNvdW50ICtcIi9cIisgQ29uc3QuTUFYX1BMQVlFUlNfUk9PTSArXCJdXCI7XHJcbiAgICAgICAgXHRvcHQudmFsdWUgPSByb29tc1tpXS5pZDtcclxuICAgICAgICBcdHJvb21fb3B0cy5hcHBlbmRDaGlsZChvcHQpO1xyXG4gICAgXHR9IFx0XHRcdFxyXG5cdH1cclxuXHRcclxuXHRmdW5jdGlvbiBjbGVhclBsYXllcnNJblJvb20oKSB7XHJcblx0XHR1cGRhdGVQbGF5ZXJzSW5Sb29tKFtdLCAtMSk7XHJcblx0fVxyXG5cdFxyXG5cdGZ1bmN0aW9uIHVwZGF0ZVBsYXllcnNJblJvb20ocGxheWVycywgcm9vbUlkKSB7XHRcdFx0XHJcblx0XHR2YXIgZGl2X2lkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb20taWQnKTtcclxuXHRcdGRpdl9pZC50ZXh0Q29udGVudCA9IFwiXFx4YTBcIiArIFwiI1wiICsgcm9vbUlkO1xyXG5cdFx0XHJcblx0XHR2YXIgbWVtYmVyX2xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVhbS1tZW51LW1lbWJlci1saXN0Jyk7XHJcblx0XHR2YXIgZGl2cyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKG1lbWJlcl9saXN0LnF1ZXJ5U2VsZWN0b3JBbGwoXCIqXCIpLCAwKTtcclxuXHRcdHZhciBkaXYsIGluZGV4ID0gMCwgbGVuID0gcGxheWVycy5sZW5ndGg7XHJcblx0XHRkaXZzLmZvckVhY2goZnVuY3Rpb24oZGl2KSB7XHJcblx0XHRcdGlmKGRpdi5jbGFzc05hbWUuaW5jbHVkZXMoXCJuYW1lLXRleHRcIikpIHtcdFxyXG5cdFx0XHRcdGRpdi5jbGFzc05hbWUgPSBcIm5hbWUtdGV4dFwiO1xyXG5cdFx0XHRcdGRpdi50ZXh0Q29udGVudCA9IFwiXCI7XHJcblx0XHRcdFx0Zm9yKDsgaW5kZXggPCBsZW47IGluZGV4KyspIHtcclxuXHRcdFx0XHRcdGlmKHBsYXllcnNbaW5kZXhdKSB7XHJcblx0XHRcdFx0XHRcdC8v0L3QsNGI0LvQuCDRgdCy0L7QuSDQvdC40Lov0LjQtFxyXG5cdFx0XHRcdFx0XHRpZihwbGF5ZXJOYW1lID09IHBsYXllcnNbaW5kZXhdKSB7XHJcblx0XHRcdFx0XHRcdFx0ZGl2LmNsYXNzTmFtZSA9IFwibmFtZS10ZXh0IG5hbWUtc2VsZlwiO1xyXG5cdFx0XHRcdFx0XHRcdC8vaWQgPSBpbmRleDtcclxuXHRcdFx0XHRcdFx0fVx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRkaXYudGV4dENvbnRlbnQgPSBwbGF5ZXJzW2luZGV4XTsgXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdGluZGV4KytcclxuXHRcdFx0XHRcdFx0YnJlYWtcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdH1cdFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBcdFx0IFx0XHJcblx0XHR9KTtcdFx0XHRcdFx0XHRcclxuXHR9XHJcblx0XHJcblx0ZnVuY3Rpb24gY3JlYXRlUm9vbSgpIHtcclxuXHRcdGNsZWFyUGxheWVyc0luUm9vbSgpO1xyXG5cdFx0aXNIb3N0ID0gdHJ1ZTtcdFx0XHJcblx0XHRjbGVhckNoYXQoKTtcdFxyXG5cdFx0dmFsaWRhdGVOYW1lKCk7XHJcblx0XHRob3N0LnNlbGYubmFtZSA9IHBsYXllck5hbWU7XHRcclxuXHRcdGhvc3QuY3JlYXRlUm9vbSgpO1xyXG5cdFx0c2VuZEpTT04oeyB0eXBlOiBcIkNyZWF0ZVJvb21cIiwgbmFtZTogcGxheWVyTmFtZSB9KTtcclxuXHRcdHNob3dSb29tV2luZG93KCk7XHRcclxuXHR9XHJcblx0XHJcblx0ZnVuY3Rpb24gam9pblJvb20oKSB7XHRcclxuXHRcdGNsZWFyUGxheWVyc0luUm9vbSgpO1xyXG5cdFx0aXNIb3N0ID0gZmFsc2U7XHRcdFxyXG5cdFx0Y2xlYXJDaGF0KCk7XHRcclxuXHRcdHZhbGlkYXRlTmFtZSgpO1x0XHRcclxuXHRcdFxyXG5cdFx0dmFyIHNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb29tLXNlbGVjdC1tYWluJyk7XHRcdFxyXG5cdFx0dmFyIHJvb21JZCA9IHBhcnNlSW50KHNlbGVjdC52YWx1ZSk7XHRcdFxyXG5cdFx0aWYoIXJvb21JZCB8fCByb29tSWQgPCAwKSByZXR1cm47XHRcdFx0XHJcblx0XHRcclxuXHRcdGlmKHNvY2tldCAmJiBzb2NrZXQucmVhZHlTdGF0ZSA9PSBzb2NrZXQuT1BFTil7XHRcclxuXHRcdFx0Y2xpZW50LmNyZWF0ZSgodG9rZW4pID0+IHtcdFx0XHRcdFxyXG5cdFx0XHRcdHNlbmRKU09OKHsgdHlwZTogXCJKb2luUm9vbVwiLCBuYW1lOiBwbGF5ZXJOYW1lLCBpZDogcm9vbUlkLCB3ZWJydGM6IHRva2VufSk7XHRcdFx0XHRcclxuXHRcdFx0fSk7XHRcdFx0XHJcblx0XHRcdGNsaWVudC5qb2luUm9vbSgpO1x0XHJcblx0XHR9XHRcdFx0XHJcblx0XHRzaG93Um9vbVdpbmRvdygpO1x0XHJcblx0fVxyXG5cdFxyXG5cdGZ1bmN0aW9uIGxlYXZlUm9vbSgpIHtcclxuXHRcdGlmKGlzSG9zdCkge1xyXG5cdFx0XHRob3N0LmxlYXZlUm9vbSgpO1xyXG5cdFx0XHRpc0hvc3QgPSBmYWxzZTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGNsaWVudC5sZWF2ZVJvb20oKTtcclxuXHRcdH1cdFxyXG5cdFx0cGxheWVyTmFtZSA9IFwiXCI7XHRcdFxyXG5cdFx0c2VuZEpTT04oeyB0eXBlOiBcIkxlYXZlUm9vbVwiIH0pO1x0XHJcblx0XHRzaG93TWVudVdpbmRvdygpO1x0XHRcdFx0XHJcblx0fVx0XHRcclxuXHRcclxuXHQvL0hvc3RcclxuXHRmdW5jdGlvbiBzdGFydEdhbWUoKSB7XHRcdFx0XHJcblx0XHRzaG93R2FtZVdpbmRvdygpO1xyXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJiZWZvcmV1bmxvYWRcIiwgYmVmb3JldW5sb2FkKTtcclxuXHR9XHJcblx0XHJcblx0ZnVuY3Rpb24gbGVhdmVHYW1lKCkge1x0XHRcdFxyXG5cdFx0dHJ5VG9Db25uZWN0KCk7XHRcclxuXHRcdGhpZGVHYW1lTWVudSgpO1x0XHRcclxuXHRcdHNob3dNZW51V2luZG93KCk7XHJcblx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImJlZm9yZXVubG9hZFwiLCBiZWZvcmV1bmxvYWQpO1xyXG5cdFx0Ly9sb2NhdGlvbi5yZWxvYWQoKTtcdFx0XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBET01Db250ZW50TG9hZGVkKGV2ZW50KSB7XHRcdFxyXG5cdFx0aWYgKCFQZWVyLldFQlJUQ19TVVBQT1JUKSB7IFx0XHRcclxuXHRcdFx0YWxlcnQoXCJXZWJSVEMgbm90IHN1cHBvcnQhXCIpO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdHRyeVRvQ29ubmVjdCgpO1x0XHJcblx0XHRnZXRQbGF5ZXJTZWxmTmFtZSgpO1xyXG5cdFxyXG5cdFx0Y29udGFpbmVyX2xvYmJ5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lci1sb2JieScpO1xyXG5cdFx0XHRjb250YWluZXJfbWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWluZXItbWVudScpO1xyXG5cdFx0XHRyb29tX29wdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vbS1vcHRzJyk7XHRcdFx0XHRcclxuXHRcdFx0Y29udGFpbmVyX3Jvb20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFpbmVyLXJvb20nKTtcdFxyXG5cdFx0XHRyb29tX21lbnVfY2hhdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaGF0LWxvYmJ5Jyk7XHJcblx0XHRcclxuXHRcdGNvbnRhaW5lcl9nYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lci1nYW1lJyk7XHJcblx0XHRcdGNvbnRhaW5lcl9nYW1lX21lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFpbmVyLWdhbWUtbWVudScpO1x0XHRcclxuXHRcdFx0XHJcblx0XHQvL0VTQyDQsiDQvNC10L3Rjlx0XHJcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcclxuXHRcdFx0aWYgKGUud2hpY2ggPT0gMjcgfHwgZS5rZXlDb2RlID09IDI3KSB7IC8vRVNDXHRcclxuXHRcdFx0XHQvL9C80LXQvdGOINGD0LbQtSDQstGL0LfQstCw0L3QvdC+XHRcdFx0XHJcblx0XHRcdFx0aWYoY29udGFpbmVyX2dhbWVfbWVudS5zdHlsZS5kaXNwbGF5ID09IFwiYmxvY2tcIikge1xyXG5cdFx0XHRcdFx0aGlkZShjb250YWluZXJfZ2FtZV9tZW51KTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0c2hvdyhjb250YWluZXJfZ2FtZV9tZW51KTtcdFx0XHRcdFx0XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9KTtcdFx0XHJcblx0XHRcdFxyXG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bi1jcmVhdGUnKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY3JlYXRlUm9vbSk7XHJcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuLWpvaW4nKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgam9pblJvb20pO1x0XHRcclxuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4tcm9vbS1sZWF2ZScpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBsZWF2ZVJvb20pO1x0XHJcblx0XHRcclxuXHRcdC8v0L3QsNGH0LDRgtGMINC40LPRgNGDXHJcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuLXJvb20tc3RhcnQnKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG5cdFx0XHRpZihpc0hvc3QpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhcIiMjIyBTdGFydCBnYW1lICMjI1wiKTtcdFx0XHRcdFxyXG5cdFx0XHRcdHNlbmRKU09OKHsgdHlwZTogXCJTdGFydEdhbWVcIiB9KTtcdFx0XHRcclxuXHRcdFx0XHRob3N0LnN0YXJ0R2FtZSgpO1x0XHRcdFx0XHRcdFxyXG5cdFx0XHR9ICBcclxuXHRcdH0pO1x0XHJcblx0XHQvL9Cy0YvQudGC0Lgg0LjQtyDQuNCz0YDRi1xyXG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bi1nYW1lLWxlYXZlJykuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuXHRcdFx0aWYoaXNIb3N0KSB7XHJcblx0XHRcdFx0aG9zdC5sZWF2ZUdhbWUoKTtcclxuXHRcdFx0XHRpc0hvc3QgPSBmYWxzZTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRjbGllbnQubGVhdmVHYW1lKCk7XHRcdFx0XHRcclxuXHRcdFx0fVx0XHJcblx0XHRcdHBsYXllck5hbWUgPSBcIlwiO1x0XHRcclxuXHRcdH0pO1x0XHRcclxuXHRcdFxyXG5cdFx0Ly/Rh9Cw0YJcclxuXHRcdHZhciBjaGF0X2lucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NoYXQtaW5wdXQnKTtcclxuXHRcdGNoYXRfaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcclxuXHRcdFx0aWYgKGNoYXRfaW5wdXQudmFsdWUgJiYgKGUud2hpY2ggPT0gMTMgfHwgZS5rZXlDb2RlID09IDEzKSkgeyAvL0VudGVyXHRcclxuXHRcdFx0XHRpZihjaGF0X2lucHV0LnZhbHVlID09IFwiXCIpIHJldHVybiB0cnVlO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0aWYoaXNIb3N0KSB7XHJcblx0XHRcdFx0XHRob3N0LnNlbGYuc2VuZENoYXRNc2coY2hhdF9pbnB1dC52YWx1ZSk7XHRcdFx0XHRcdFxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRjbGllbnQuc2VuZENoYXRNc2coY2hhdF9pbnB1dC52YWx1ZSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGNoYXRfaW5wdXQudmFsdWUgPSBcIlwiO1xyXG5cdFx0XHRcdC8vc2Nyb2xsIHRvIGJvdHRvbSBtZXNzYWdlc1xyXG5cdFx0XHRcdHJvb21fbWVudV9jaGF0LnNjcm9sbFRvcCA9IHJvb21fbWVudV9jaGF0LnNjcm9sbEhlaWdodDtcclxuICAgICAgICBcdFx0cmV0dXJuIGZhbHNlO1xyXG4gICAgXHRcdH1cclxuICAgIFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH0pO1x0XHRcdFxyXG5cdFx0XHJcblx0XHQvL9C/0LXRgNC10LQg0LfQsNC60YDRi9GC0LjQtdC8IFxyXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJ1bmxvYWRcIiwgKGUpID0+IHsgXHRcdFx0XHJcblx0XHRcdGNsb3NlU29ja2V0KCk7XHRcclxuXHRcdFx0Y2xpZW50LmRlc3Ryb3koKTtcclxuXHRcdH0pO1xyXG5cdFx0Ly/QvdC1INC/0L7QutCw0LfRi9Cy0LDRgtGMINC80LXQvdGOINC90LAg0L/RgNCw0LLRi9C5INC60LvQuNC6XHJcblx0XHR3aW5kb3cub25jb250ZXh0bWVudSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgXHRcdHJldHVybiBmYWxzZTsgXHJcblx0XHR9XHJcblx0XHRcdFxyXG5cdH1cdFx0XHJcblx0XHJcblx0ZnVuY3Rpb24gYmVmb3JldW5sb2FkKGUpIHtcclxuXHRcdHZhciBjb25maXJtYXRpb25NZXNzYWdlID0gdHJ1ZTtcclxuICBcdFx0KGUgfHwgd2luZG93LmV2ZW50KS5yZXR1cm5WYWx1ZSA9IGNvbmZpcm1hdGlvbk1lc3NhZ2U7IC8vR2Vja28gKyBJRVxyXG4gIFx0XHRyZXR1cm4gY29uZmlybWF0aW9uTWVzc2FnZTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9XZWJraXQsIFNhZmFyaSwgQ2hyb21lXHJcblx0fVxyXG5cdFxyXG5cdGZ1bmN0aW9uIGNsZWFyQ2hhdCgpIHtcdFx0XHJcblx0XHRyb29tX21lbnVfY2hhdC50ZXh0Q29udGVudCA9IFwiXCI7XHJcblx0fVxyXG5cdFxyXG5cdGZ1bmN0aW9uIHNob3dXYXJuaW5nTWVzc2FnZShtc2csIHRpbW91dCkge1x0XHRcclxuXHR9XHRcclxuXHRcclxuXHRmdW5jdGlvbiBzaG93Um9vbVdpbmRvdygpIHtcclxuXHRcdHNob3coY29udGFpbmVyX2xvYmJ5KTtcclxuXHRcdHNob3coY29udGFpbmVyX3Jvb20pO1xyXG5cdFx0aGlkZShjb250YWluZXJfbWVudSk7XHRcclxuXHRcdGhpZGUoY29udGFpbmVyX2dhbWUpO1xyXG5cdFx0aWYoaXNIb3N0KSB7XHJcblx0XHRcdHNob3coZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bi1yb29tLXN0YXJ0JykpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRmdW5jdGlvbiBzaG93TWVudVdpbmRvdygpIHtcclxuXHRcdHNob3coY29udGFpbmVyX2xvYmJ5KTtcclxuXHRcdHNob3coY29udGFpbmVyX21lbnUpO1xyXG5cdFx0aGlkZShjb250YWluZXJfZ2FtZSk7XHJcblx0XHRoaWRlKGNvbnRhaW5lcl9yb29tKTtcdFx0XHJcblx0XHRoaWRlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4tcm9vbS1zdGFydCcpKTtcclxuXHR9XHJcblx0ZnVuY3Rpb24gc2hvd0dhbWVXaW5kb3coKSB7XHJcblx0XHRzaG93KGNvbnRhaW5lcl9nYW1lKTtcclxuXHRcdGhpZGUoY29udGFpbmVyX2xvYmJ5KTtcdFx0XHJcblx0fVxyXG5cdGZ1bmN0aW9uIHNob3dHYW1lTWVudSgpIHtcclxuXHRcdHNob3coY29udGFpbmVyX2dhbWVfbWVudSk7XHJcblx0fVxyXG5cdGZ1bmN0aW9uIGhpZGVHYW1lTWVudSgpIHtcclxuXHRcdGhpZGUoY29udGFpbmVyX2dhbWVfbWVudSk7XHJcblx0fVxyXG5cdFxyXG5cdGZ1bmN0aW9uIHNob3coZSl7IGUuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjsgfVxyXG5cdGZ1bmN0aW9uIGhpZGUoZSl7IGUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiOyB9XHJcblx0XHJcblx0XHJcblx0cmV0dXJuIHtcclxuXHRcdERPTUNvbnRlbnRMb2FkZWQ6IERPTUNvbnRlbnRMb2FkZWQsXHJcblx0XHRjbGVhckNoYXQ6IGNsZWFyQ2hhdCxcclxuXHRcdHN0YXJ0R2FtZTogc3RhcnRHYW1lLFxyXG5cdFx0bGVhdmVHYW1lOiBsZWF2ZUdhbWUsXHJcblx0XHRcclxuXHRcdHNob3dHYW1lV2luZG93OiBzaG93R2FtZVdpbmRvdyxcclxuXHRcdHNob3dNZW51V2luZG93OiBzaG93TWVudVdpbmRvdyxcdFx0XHJcblx0XHRcclxuXHRcdHNob3dHYW1lTWVudTogc2hvd0dhbWVNZW51LFxyXG5cdFx0aGlkZUdhbWVNZW51OiBoaWRlR2FtZU1lbnUsXHRcdFxyXG5cdFx0Z2V0UGxheWVycyA6IGdldFBsYXllcnMsXHJcblx0fVx0XHRcclxuXHJcbn0pKCk7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9iYnk7IFxyXG4iLCJpbXBvcnQgTG9iYnkgZnJvbSAnbG9iYnkuanMnXHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBMb2JieS5ET01Db250ZW50TG9hZGVkKTsiLCJpbXBvcnQgUGVlciBmcm9tICdzaW1wbGUtcGVlcidcclxuXHJcbmltcG9ydCB7IENvbnN0LCBNc2cgfSBmcm9tICdjb25zdC5qcydcclxuaW1wb3J0IFBhY2tldE1hbmFnZXIgZnJvbSAnbmV0d29yay9wYWNrZXQuanMnXHJcbmltcG9ydCBMb2JieSBmcm9tICdsb2JieS5qcydcclxuaW1wb3J0IEdhbWUgZnJvbSAnZ2FtZS5qcydcclxuXHJcblxyXG52YXIgQ2xpZW50ID0gZnVuY3Rpb24oKSB7XHRcclxuXHR0aGlzLmlkID0gLTE7XHJcblx0dGhpcy5uYW1lID0gXCJcIjtcdFxyXG5cdFxyXG5cdC8vdGhpcy5wbGF5ZXJzID0gW107XHJcblx0XHJcblx0dGhpcy5wZWVyID0gbnVsbDtcclxuXHR0aGlzLmNvbm5lY3RlZCA9IGZhbHNlO1x0XHJcblx0Ly/Qv9Cw0LrQtdGC0Ysg0L7RgiDRhdC+0YHRgtCwXHJcblx0dGhpcy5wYWNrZXRCdWZmZXIgPSBbXTtcclxuXHR0aGlzLmxhc3RQYWNrZXRJRCA9IDA7XHRcclxuXHQvL1xyXG5cdHRoaXMucGFja2V0c1RvU2VuZCA9IFtdO1xyXG5cdFx0XHJcblx0dGhpcy5jaGF0VGV4dCA9IFwiXCI7XHJcblx0dGhpcy5jaGF0T2Zmc2V0ID0gXCJcXHhhMFwiOyAvL1NwYWNlXHRcclxuXHR0aGlzLmNoYXRQYWNrZXQgPSBbXTtcclxuXHRcclxuXHR0aGlzLmdhbWUgPSBuZXcgR2FtZSgpO1x0XHJcblx0dGhpcy5wYWNrZXRNYW5hZ2VyID0gbmV3IFBhY2tldE1hbmFnZXIodGhpcywgdGhpcy5nYW1lKTtcclxuXHQvL9C40LPRgNCwINCyINC/0YDQvtGG0LXRgdGB0LVcclxuXHR0aGlzLnBsYXlpbmcgPSBmYWxzZTtcclxuXHQvL9Cw0LrRgtC40LLRi9C5INCz0LvQsNCy0L3Ri9C5INGG0LjQutC7XHJcblx0dGhpcy5hY3RpdmUgPSBmYWxzZTtcdFxyXG5cdHRoaXMuaEN5Y2xlID0gMDtcdFxyXG5cdHRoaXMubVNlY29uZFBlclRpYyA9IDEwMDAgLyBDb25zdC5USUNTX1BFUl9TRUNPTkQ7XHJcblx0XHJcblx0dGhpcy5pbmRleCA9IDA7XHJcbn1cclxuXHJcbkNsaWVudC5wcm90b3R5cGUuY3JlYXRlID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcdFxyXG5cdC8vcDJwINGB0L7QtdC00LjQvdC10L3QuNC1XHRcclxuXHR0aGlzLnBlZXIgPSBuZXcgUGVlcih7IFxyXG5cdFx0aW5pdGlhdG9yOiB0cnVlLCBcclxuXHRcdHRyaWNrbGU6IGZhbHNlLFxyXG5cdFx0cmVjb25uZWN0VGltZXI6IDEwMCxcclxuXHRcdGNvbmZpZzoge1xyXG4gICAgICAgXHRcdC8vaWNlVHJhbnNwb3J0UG9saWN5OiBcInJlbGF5XCIsXHJcblx0XHRcdGljZVNlcnZlcnM6IFtcclxuXHRcdFx0XHR7IHVybHM6ICdzdHVuOnN0dW4ubC5nb29nbGUuY29tOjE5MzAyJyB9LFxyXG5cdFx0XHRcdHsgdXJsczogJ3N0dW46c3R1bjQubC5nb29nbGUuY29tOjE5MzAyJyB9LFxyXG5cdFx0XHRdXHJcblx0XHR9XHJcblx0fSk7XHJcblx0dGhpcy5saXN0ZW4oKTtcdFxyXG5cdFxyXG5cdHRoaXMucGFja2V0QnVmZmVyID0gW107XHJcblx0dGhpcy5sYXN0UGFja2V0SUQgPSAwO1xyXG5cdFxyXG5cdC8v0YLQvtC60LXQvSDQtNC70Y8g0YXQvtGB0YLQsFxyXG5cdHRoaXMucGVlci5vbignc2lnbmFsJywgKGRhdGEpID0+IHtcclxuICBcdFx0Ly9jb25zb2xlLmxvZygnU0lHTkFMJywgSlNPTi5zdHJpbmdpZnkoZGF0YSkpXHJcbiAgXHRcdGNhbGxiYWNrKGRhdGEpO1xyXG5cdH0pO1x0XHRcclxufVxyXG5cclxuQ2xpZW50LnByb3RvdHlwZS5saXN0ZW4gPSBmdW5jdGlvbigpIHtcclxuXHR0aGlzLnBlZXIub24oJ2Nvbm5lY3QnLCAoKSA9PiB7XHJcbiAgXHRcdGNvbnNvbGUubG9nKCdDT05ORUNUJywgdGhpcy5pZCkgXHRcdFx0XHJcblx0XHR0aGlzLm9uQ29ubmVjdCgpO1x0XHJcblx0fSk7XHRcdFxyXG5cdHRoaXMucGVlci5vbignY2xvc2UnLCAoKSA9PiB7XHJcbiAgXHRcdGNvbnNvbGUubG9nKCdDTE9TRScsIHRoaXMuaWQpXHRcdFx0XHJcblx0XHR0aGlzLm9uQ2xvc2UoKTtcdFx0XHJcblx0fSk7XHJcblx0dGhpcy5wZWVyLm9uKCdkYXRhJywgKGRhdGEpID0+IHtcclxuXHRcdHRoaXMub25NZXNzYWdlKGRhdGEpO1xyXG5cdH0pO1xyXG5cdFxyXG5cdHRoaXMucGVlci5vbignZXJyb3InLCBmdW5jdGlvbiAoZXJyKSB7IFxyXG5cdFx0Y29uc29sZS5sb2coZXJyKSBcclxuXHR9KTtcclxufVxyXG5cclxuLypDbGllbnQucHJvdG90eXBlLnNhZmVseVBhcnNlSlNPTiA9IGZ1bmN0aW9uKGpzb24pIHsgXHJcbiBcdCB0cnkge1xyXG4gICAgXHRyZXR1cm4gSlNPTi5wYXJzZShqc29uKTtcclxuICBcdH0gY2F0Y2ggKGUpIHtcclxuICAgIFx0cmV0dXJuIG51bGw7XHJcbiAgXHR9ICBcclxufSovXHJcblxyXG5DbGllbnQucHJvdG90eXBlLm9uTWVzc2FnZSA9IGZ1bmN0aW9uKHBhY2tldCkge1xyXG5cdGlmKHRoaXMubGFzdFBhY2tldElEID49IENvbnN0Lk1BWF9QRUVSX1BBQ0tFVFMpIHtcdFx0XHJcblx0XHRjb25zb2xlLmxvZyhcIkVycm9yOiBtYXggcGVlciBwYWNrZXRzXCIpO1x0XHRcclxuXHRcdHRoaXMucGFja2V0QnVmZmVyID0gW107XHJcblx0XHR0aGlzLmxhc3RQYWNrZXRJRCA9IDA7XHJcblx0fVx0XHRcclxuXHRpZighcGFja2V0KSByZXR1cm47XHJcblx0Ly9jb25zb2xlLmxvZyhwYWNrZXQpO1x0XHJcblx0XHJcblx0Ly9UT0RPINC/0YDQvtCy0LXRgNC40YLRjCDRgNCw0LfQvNC10YAg0L/QsNC60LXRgtCwXHRcclxuXHRcdFxyXG5cdHRoaXMucGFja2V0QnVmZmVyW3RoaXMubGFzdFBhY2tldElEXSA9IHBhY2tldC5idWZmZXI7XHJcblx0dGhpcy5sYXN0UGFja2V0SUQrKztcclxufVxyXG5cclxuQ2xpZW50LnByb3RvdHlwZS5vbkNvbm5lY3QgPSBmdW5jdGlvbigpIHtcdFx0XHJcbn1cclxuXHJcbkNsaWVudC5wcm90b3R5cGUub25DbG9zZSA9IGZ1bmN0aW9uKCkge1x0XHJcblx0dGhpcy5sZWF2ZUdhbWUoKTtcclxufVxyXG5cclxuQ2xpZW50LnByb3RvdHlwZS5zaWduYWwgPSBmdW5jdGlvbih0b2tlbikge1xyXG5cdGlmKCF0aGlzLnBlZXIpIHtcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblx0dGhpcy5pZCA9IHRva2VuLmNsaWVudElEO1xyXG5cdHRoaXMucGVlci5zaWduYWwodG9rZW4pO1x0XHJcbn1cclxuXHJcbkNsaWVudC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xyXG5cdGlmKHRoaXMucGVlcikge1x0XHRcclxuXHRcdHRoaXMucGVlci5kZXN0cm95KCk7XHJcblx0XHR0aGlzLnBlZXIgPSBudWxsO1xyXG5cdH1cclxuXHR0aGlzLnBhY2tldEJ1ZmZlciA9IFtdO1xyXG5cdHRoaXMubGFzdFBhY2tldElEID0gMDtcdFxyXG59XHJcblxyXG5DbGllbnQucHJvdG90eXBlLnNldElkID0gZnVuY3Rpb24oaWQpIHtcclxuXHR0aGlzLmlkID0gaWQ7XHJcbn1cclxuXHJcbkNsaWVudC5wcm90b3R5cGUuaXNDb25uZWN0ZWQgPSBmdW5jdGlvbigpIHtcclxuXHRyZXR1cm4gdGhpcy5wZWVyICYmIHRoaXMucGVlci5jb25uZWN0ZWQgJiYgIXRoaXMucGVlci5kZXN0cm95ZWQ7XHJcbn1cclxuXHJcbkNsaWVudC5wcm90b3R5cGUuc2VuZFBhY2tldCA9IGZ1bmN0aW9uKHBhY2tldCkge1xyXG5cdGlmKHRoaXMuaXNDb25uZWN0ZWQoKSkge1x0XHRcclxuXHRcdHRoaXMucGVlci5zZW5kKHBhY2tldCk7XHRcclxuXHRcdHBhY2tldCA9IG51bGw7XHJcblx0fVxyXG59XHJcblxyXG5DbGllbnQucHJvdG90eXBlLnNlbmRDaGF0TXNnID0gZnVuY3Rpb24obXNnKSB7XHJcblx0dmFyIF9tc2cgPSBtc2cuc3Vic3RyaW5nKDAsIENvbnN0LkNIQVRfTUVTU0FHRV9NQVgpO1x0XHJcblx0Ly9jb25zb2xlLmxvZyhfbXNnLmxlbmd0aCwgX21zZyk7XHJcblx0XHJcblx0dGhpcy5jaGF0UGFja2V0ID0gW3tcclxuXHRcdGlkOiB0aGlzLmlkLFx0XHRcclxuXHRcdG1zZzogX21zZyxcclxuXHRcdGxlbjogX21zZy5sZW5ndGhcclxuXHR9XTtcclxufVxyXG5cclxuQ2xpZW50LnByb3RvdHlwZS5hZGRDaGF0TXNnID0gZnVuY3Rpb24obXNnKSB7XHJcblx0dmFyIGNoYXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hhdC1sb2JieScpO1xyXG5cdGlmKHRoaXMucGxheWluZylcclxuXHRcdGNoYXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hhdC1nYW1lJyk7XHJcblx0dGhpcy5jaGF0VGV4dCArPSB0aGlzLmNoYXRPZmZzZXQgKyBtc2cgKyBcIlxcblwiO1xyXG4gICAgY2hhdC50ZXh0Q29udGVudCA9IHRoaXMuY2hhdFRleHQ7XHRcdFxyXG59XHJcblxyXG5DbGllbnQucHJvdG90eXBlLmNsZWFyQ2hhdCA9IGZ1bmN0aW9uKCkge1xyXG5cdHRoaXMuY2hhdFRleHQgPSBcIlwiO1xyXG59XHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5DbGllbnQucHJvdG90eXBlLmpvaW5Sb29tID0gZnVuY3Rpb24oKSB7XHRcclxuXHRpZih0aGlzLnBsYXlpbmcgfHwgdGhpcy5hY3RpdmUpIHJldHVybjtcclxuXHRcclxuXHR0aGlzLmNsZWFyQ2hhdCgpO1x0XHJcblx0dGhpcy5zdGFydExvb3AoKTtcclxufVxyXG5cclxuQ2xpZW50LnByb3RvdHlwZS5sZWF2ZVJvb20gPSBmdW5jdGlvbigpIHtcdFxyXG5cdHRoaXMuaWQgPSAtMTtcdFxyXG5cdHRoaXMuZGVzdHJveSgpO1xyXG5cdHRoaXMuYWN0aXZlID0gZmFsc2U7XHJcbn1cclxuXHJcbkNsaWVudC5wcm90b3R5cGUubGVhdmVHYW1lID0gZnVuY3Rpb24oKSB7XHRcclxuXHRpZighdGhpcy5wbGF5aW5nKSByZXR1cm47XHJcblx0XHJcblx0dGhpcy5wbGF5aW5nID0gZmFsc2U7XHRcclxuXHR0aGlzLmFjdGl2ZSA9IGZhbHNlO1xyXG5cdFxyXG5cdHRoaXMuZGVzdHJveSgpO1x0XHJcblx0dGhpcy5nYW1lLmZyZWUoKTtcdFxyXG5cdExvYmJ5LmxlYXZlR2FtZSgpO1xyXG59XHJcblxyXG5DbGllbnQucHJvdG90eXBlLnN0YXJ0R2FtZSA9IGZ1bmN0aW9uKCkge1xyXG5cdGlmKCF0aGlzLmlzQ29ubmVjdGVkKCkpIHtcclxuXHRcdExvYmJ5LnNob3dNZW51V2luZG93KCk7XHJcblx0XHRjb25zb2xlLmxvZyhcItCe0YjQuNCx0LrQsCDQv9GA0Lgg0YHRgtCw0YDRgtC1XCIpO1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHRcdFxyXG5cdHRoaXMuX3N0YXJ0R2FtZSgpO1xyXG59XHJcblxyXG5DbGllbnQucHJvdG90eXBlLl9zdGFydEdhbWUgPSBmdW5jdGlvbigpIHtcclxuXHRpZih0aGlzLnBsYXlpbmcpIHJldHVybjtcclxuXHRcclxuXHR0aGlzLmdhbWUuaW5pdCgpO1x0XHJcblx0dGhpcy5nYW1lLmlkID0gdGhpcy5pZDtcdFxyXG5cdC8vdGhpcy5wbGF5aW5nID0gdHJ1ZTtcclxuXHRMb2JieS5zdGFydEdhbWUoKTtcclxufVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5DbGllbnQucHJvdG90eXBlLnN0YXJ0TG9vcCA9IGZ1bmN0aW9uKCkge1xyXG5cdGlmICh0aGlzLmhDeWNsZSkge1xyXG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmhDeWNsZSk7XHJcbiAgICAgICAgdGhpcy5oQ3ljbGUgPSAwO1xyXG4gICAgfVx0XHJcblx0XHJcblx0dmFyIGNsaWVudEN5Y2xlID0gKCkgPT4ge1xyXG5cdFx0aWYoIXRoaXMuYWN0aXZlKSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwiIyMjIEN5Y2xlIHN0b3AgIyMjXCIpO1xyXG4gICAgICAgIFx0cmV0dXJuO1xyXG4gICAgXHR9ICBcdFx0XHJcblx0XHR0aGlzLnJ1bigpO1xyXG5cdFx0XHJcblx0XHR0aGlzLmhDeWNsZSA9IHNldFRpbWVvdXQoY2xpZW50Q3ljbGUsIHRoaXMubVNlY29uZFBlclRpYyk7IFxyXG5cdH1cclxuXHRcclxuXHR0aGlzLmFjdGl2ZSA9IHRydWU7ICAgIFxyXG4gICAgY2xpZW50Q3ljbGUoKTtcclxufVxyXG5cclxuQ2xpZW50LnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbigpIHtcclxuXHRcclxuXHQvL2NvbnNvbGUubG9nKFwiKioqKiBDTElFTlQgQ1lDTEUgKioqXCIpO1x0XHJcblx0XHJcblx0Ly8xLtC+0LHRgNCw0LHQvtGC0LDRgtGMINC/0LDQutC10YLRiyDQvtGCINGF0L7RgdGC0LBcdFxyXG5cdHRoaXMucGFja2V0QnVmZmVyLmZvckVhY2goKHBhY2tldCkgPT4ge1x0XHRcclxuXHRcdGlmKHBhY2tldCkge1x0XHRcdFx0XHJcblx0XHRcdC8vY29uc29sZS5sb2coXCLQn9Cw0LrQtdGCINC60LvQuNC10L3RgtCwXCIsIHBhY2tldCk7XHJcblx0XHRcdHN3aXRjaCh0aGlzLnBhY2tldE1hbmFnZXIuZ2V0UGFja2V0SUQocGFja2V0KSkge1x0XHJcblx0XHRcdFx0Y2FzZSBNc2cuSG9zdFN0YXRlOlx0XHJcblx0XHRcdFx0XHRpZih0aGlzLnBsYXlpbmcpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5wYWNrZXRNYW5hZ2VyLmRIb3N0U3RhdGVQYWNrZXQocGFja2V0KTtcclxuXHRcdFx0XHRcdH1cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGJyZWFrO1x0XHRcclxuXHRcdFx0XHRjYXNlIE1zZy5DaGF0Olx0XHJcblx0XHRcdFx0XHR2YXIgbWVzc2FnZXMgPSB0aGlzLnBhY2tldE1hbmFnZXIuZENoYXRQYWNrZXQocGFja2V0KTtcclxuXHRcdFx0XHRcdC8vY29uc29sZS5sb2cobWVzc2FnZXMpO1xyXG5cdFx0XHRcdFx0bWVzc2FnZXMuZm9yRWFjaCgobXNnKSA9PiB7XHJcblx0XHRcdFx0XHRcdHRoaXMuYWRkQ2hhdE1zZyhMb2JieS5nZXRQbGF5ZXJzKClbbXNnLmlkXSArIFwiOlwiICsgdGhpcy5jaGF0T2Zmc2V0ICsgbXNnLm1zZyk7XHJcblx0XHRcdFx0XHR9KTtcdFx0XHRcclxuXHRcdFx0XHRcdGJyZWFrO1x0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRjYXNlIE1zZy5TdGFydDpcclxuXHRcdFx0XHRcdGlmKCF0aGlzLnBsYXlpbmcpIHtcclxuXHRcdFx0XHRcdFx0dmFyIHBsYXllcnMgPSB0aGlzLnBhY2tldE1hbmFnZXIuZEhvc3RTdGFydFBhY2tldChwYWNrZXQpO1xyXG5cdFx0XHRcdFx0XHQvL2NvbnNvbGUubG9nKFwi0KHQv9C40YHQvtC6INC40LPRgNC+0LrQvtCyOlwiLCBwbGF5ZXJzKTtcclxuXHRcdFx0XHRcdFx0dGhpcy5zdGFydEdhbWUoKTtcdFxyXG5cdFx0XHRcdFx0XHR0aGlzLmdhbWUuc3RhcnRHYW1lKHBsYXllcnMsICgpPT4ge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMucGxheWluZyA9IHRydWU7XHJcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXCJjbGllbnQgc3RhcnRcIik7XHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0YnJlYWs7XHRcclxuXHRcdFx0XHRjYXNlIE1zZy5MZWF2ZTpcdFx0XHJcblx0XHRcdFx0XHR2YXIgcGxheWVySUQgPSB0aGlzLnBhY2tldE1hbmFnZXIuZEhvc3RMZWF2ZVBhY2tldChwYWNrZXQpO1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coXCLQktGL0YjQtdC7INC40LPRgNC+0Lo6XCIsIHBsYXllcklEKTtcdFxyXG5cdFx0XHRcdFx0dGhpcy5nYW1lLnJlbW92ZUVudGl0eShwbGF5ZXJJRCk7XHRcclxuXHRcdFx0XHRcdC8v0YXQvtGB0YIg0LLRi9GI0LXQu1xyXG5cdFx0XHRcdFx0aWYocGxheWVySUQgPT0gQ29uc3QuSE9TVF9JRCkge1xyXG5cdFx0XHRcdFx0XHR0aGlzLmxlYXZlR2FtZSgpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0YnJlYWs7XHRcdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdFx0YnJlYWs7XHRcclxuXHRcdFx0fVxyXG5cdFx0fVx0XHRcclxuXHR9KTtcclxuXHR0aGlzLnBhY2tldEJ1ZmZlciA9IFtdO1xyXG5cdHRoaXMubGFzdFBhY2tldElEID0gMDtcclxuXHRcclxuXHRcclxuXHQvL9GB0L7QvtCx0YnQtdC90LjRjyDRh9Cw0YLQsFxyXG5cdGlmKHRoaXMuY2hhdFBhY2tldC5sZW5ndGggPiAwKSB7XHJcblx0XHR0aGlzLnNlbmRQYWNrZXQodGhpcy5wYWNrZXRNYW5hZ2VyLnNDaGF0UGFja2V0KHRoaXMuY2hhdFBhY2tldCkpO1x0XHJcblx0XHR0aGlzLmNoYXRQYWNrZXQgPSBbXTtcclxuXHR9XHRcclxuXHRcclxuXHRcclxuXHRpZih0aGlzLnBsYXlpbmcpIHtcclxuXHRcdC8vMi7QvtCx0L3QvtCy0LjRgtGMINGB0L7RgdGC0L7Rj9C90LjQtSDQuNCz0YDQvtC60LAg0Lgg0LzQuNGA0LBcdFx0XHJcblx0XHR0aGlzLmdhbWUucnVuVGljaygpO1x0XHRcdFxyXG5cdFx0XHJcblx0XHQvLzMu0YHRhNC+0YDQvNC40YDQvtCy0LDRgtGMINC/0LDQutC10YIg0LTQu9GPINGF0L7RgdGC0LAg0Lgg0L7RgtC+0YHQu9Cw0YLRjFxyXG5cdFx0Ly9pZih0aGlzLmdhbWUubmVlZFVwZGF0ZVBsYXllckNvbnRyb2xzKSBcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5nYW1lLm5lZWRVcGRhdGVQbGF5ZXJDb250cm9scyA9IGZhbHNlO1xyXG5cdFx0XHR0aGlzLnNlbmRQYWNrZXQodGhpcy5wYWNrZXRNYW5hZ2VyLnNDbGllbnRBY3Rpb25QYWNrZXQodGhpcy5nYW1lLmFjdGl2ZVBsYXllcikpO1xyXG5cdFx0fVx0XHRcdFx0XHRcclxuXHR9XHRcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENsaWVudDsiLCJpbXBvcnQgUGVlciBmcm9tICdzaW1wbGUtcGVlcidcclxuXHJcbmltcG9ydCB7IENvbnN0LCBNc2cgfSBmcm9tICdjb25zdC5qcydcclxuaW1wb3J0IENsaWVudCBmcm9tICduZXR3b3JrL2NsaWVudC5qcydcclxuaW1wb3J0IFBhY2tldE1hbmFnZXIgZnJvbSAnbmV0d29yay9wYWNrZXQuanMnXHJcbmltcG9ydCBIb3N0R2FtZSBmcm9tICdob3N0Z2FtZS5qcydcclxuaW1wb3J0IFdvcmtlciBmcm9tICd0aWNrZXIud29ya2VyLmpzJ1xyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG52YXIgTUNsaWVudCA9IGZ1bmN0aW9uKGhvc3QpIHtcclxuXHRDbGllbnQuY2FsbCh0aGlzLCBudWxsKTtcdFxyXG5cdHRoaXMuaG9zdCA9IGhvc3Q7XHJcbn1cclxuXHJcbk1DbGllbnQucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShDbGllbnQucHJvdG90eXBlKTtcclxuTUNsaWVudC5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBNQ2xpZW50O1xyXG5cclxuXHJcbk1DbGllbnQucHJvdG90eXBlLmNyZWF0ZSA9IGZ1bmN0aW9uKHRva2VuLCBuYW1lLCBjYWxsYmFjaykge1x0XHJcblx0dGhpcy5wZWVyID0gbmV3IFBlZXIoeyBcclxuXHRcdGluaXRpYXRvcjogZmFsc2UsIFxyXG5cdFx0dHJpY2tsZTogZmFsc2UsXHJcblx0XHRyZWNvbm5lY3RUaW1lcjogMTAwLFxyXG5cdFx0Y29uZmlnOiB7XHJcbiAgICAgICBcdFx0Ly9pY2VUcmFuc3BvcnRQb2xpY3k6IFwicmVsYXlcIixcclxuXHRcdFx0aWNlU2VydmVyczogW1xyXG5cdFx0XHRcdHsgdXJsczogJ3N0dW46c3R1bi5sLmdvb2dsZS5jb206MTkzMDInIH0sXHJcblx0XHRcdFx0eyB1cmxzOiAnc3R1bjpzdHVuNC5sLmdvb2dsZS5jb206MTkzMDInIH0sXHJcblx0XHRcdF1cclxuXHRcdH1cclxuXHR9KTtcclxuXHQvL3RoaXMucGVlci5fZGVidWcgPSBjb25zb2xlLmxvZztcclxuXHR0aGlzLmxpc3RlbigpO1x0XHRcclxuXHRcclxuXHR0aGlzLm5hbWUgPSBuYW1lO1xyXG5cdC8v0L/QsNC60LXRgtGLINC+0YIg0LrQu9C40LXQvdGC0LBcclxuXHR0aGlzLnBhY2tldEJ1ZmZlciA9IFtdO1xyXG5cdHRoaXMubGFzdFBhY2tldElEID0gMDtcdFxyXG5cdFxyXG5cdC8v0LrQu9C40LXQvdGC0YHQutC40Lkg0YLQvtC60LXQvSDQtNC70Y8g0YXQvtGB0YLQsFx0XHJcblx0dGhpcy5zaWduYWwodG9rZW4pO1xyXG5cdC8v0L7RgtCy0LXRgtC90YvQuSDRgtC+0LrQtdC9INGF0L7RgdGC0LBcclxuXHR0aGlzLnBlZXIub24oJ3NpZ25hbCcsIChkYXRhKSA9PiB7XHQgIFx0XHRcclxuICBcdFx0Y2FsbGJhY2soZGF0YSk7XHJcblx0fSk7XHRcclxufVxyXG5cclxuTUNsaWVudC5wcm90b3R5cGUub25Db25uZWN0ID0gZnVuY3Rpb24oKSB7XHRcclxufVxyXG5cclxuTUNsaWVudC5wcm90b3R5cGUub25DbG9zZSA9IGZ1bmN0aW9uKCkge1x0XHJcblx0Ly9DTElFTlQucHJvdG90eXBlLm9uQ2xvc2UuY2FsbCh0aGlzKTtcdFxyXG5cdHRoaXMuaG9zdC5jbGllbnRMZWF2ZSh0aGlzLmlkKTtcclxufVxyXG5cclxuTUNsaWVudC5wcm90b3R5cGUuc3RhcnRHYW1lID0gZnVuY3Rpb24oKSB7fVxyXG5cclxuTUNsaWVudC5wcm90b3R5cGUuc3RhcnRMb29wID0gZnVuY3Rpb24oKSB7fVxyXG5cclxuTUNsaWVudC5wcm90b3R5cGUuc2VuZExhc3RQYWNrZXQgPSBmdW5jdGlvbigpIHt9XHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbnZhciBIb3N0ID0gZnVuY3Rpb24oKSB7XHRcdFxyXG5cdC8v0LrQu9C40LXQvdGCINGF0L7RgdGC0LBcclxuXHR0aGlzLmNyZWF0ZVNlbGZDbGllbnQoKTtcclxuXHRcclxuXHQvL9GB0L/QuNGB0L7QuiDQstGB0LXRhSDQutC70LjQtdC90YLQvtCyXHJcblx0dGhpcy5jbGllbnRzID0gW107XHRcdFxyXG5cdHRoaXMuY2xpZW50c0NvdW50ID0gMDtcclxuXHRcclxuXHR0aGlzLmdhbWUgPSBuZXcgSG9zdEdhbWUoKTtcclxuXHQvL1xyXG5cdHRoaXMucGFja2V0TWFuYWdlciA9IG5ldyBQYWNrZXRNYW5hZ2VyKHRoaXMsIHRoaXMuZ2FtZSk7XHJcblx0Ly/QuNCz0YDQsCDQsiDQv9GA0L7RhtC10YHRgdC1XHJcblx0dGhpcy5wbGF5aW5nID0gZmFsc2U7XHJcblx0Ly/QsNC60YLQuNCy0YvQuSDQs9C70LDQstC90YvQuSDRhtC40LrQu1xyXG5cdHRoaXMuYWN0aXZlID0gZmFsc2U7XHJcblx0XHJcblx0Ly/RgdC10YLQtdCy0YvQtSDQv9C10YDQtdC80LXQvdC90YvQtSBcclxuXHR0aGlzLmNoYXRQYWNrZXRzID0gW107XHRcclxuXHQvL3RoaXMuY2xpZW50UGFja2V0cyA9IFtdO1xyXG59XHJcblxyXG5Ib3N0LnByb3RvdHlwZS5jcmVhdGVTZWxmQ2xpZW50ID0gZnVuY3Rpb24oKSB7XHJcblx0dGhpcy5zZWxmID0gbmV3IE1DbGllbnQodGhpcyk7XHRcdFx0XHJcblx0Ly9cdFxyXG5cdHRoaXMuc2VsZi5zZW5kUGFja2V0ID0gZnVuY3Rpb24ocGFja2V0KSB7XHRcdCBcdFxyXG5cdFx0dGhpcy5vbk1lc3NhZ2UocGFja2V0KTtcclxuXHR9O1xyXG5cdC8vXHJcblx0dGhpcy5zZWxmLnN0YXJ0R2FtZSA9IGZ1bmN0aW9uKCkge1x0XHQgXHRcclxuXHRcdHRoaXMuX3N0YXJ0R2FtZSgpO1xyXG5cdH07XHJcbn1cclxuXHJcbkhvc3QucHJvdG90eXBlLmFkZFNlbGZDbGllbnQgPSBmdW5jdGlvbigpIHtcclxuXHR0aGlzLnNlbGYuaWQgPSBDb25zdC5IT1NUX0lEO1x0XHJcblx0Ly/QtNC+0LHQsNCy0LvRj9C10Lwg0YXQvtGB0YIt0LrQu9C40LXQvdGCINCyINGB0L/QuNGB0L7QuiDQstGB0LXRhSDQutC70LjQtdC90YLQvtCyXHJcblx0dGhpcy5jbGllbnRzLnB1c2godGhpcy5zZWxmKTtcclxuXHR0aGlzLmNsaWVudHNDb3VudCsrO1x0XHJcbn1cclxuXHJcbkhvc3QucHJvdG90eXBlLmFkZE5ld0NsaWVudCA9IGZ1bmN0aW9uKHRva2VuLCBuYW1lLCBjYWxsYmFjaykge1x0XHJcblx0aWYodGhpcy5jbGllbnRzQ291bnQgPj0gQ29uc3QuTUFYX1BMQVlFUlNfUk9PTSkge1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHR2YXIgY2xpZW50SWQgPSB0b2tlbi5jbGllbnRJRDtcclxuXHQvL9C40LQg0LrQu9C40LXQvdGC0LAg0LfQsNC90Y/RglxyXG5cdGlmKHRoaXMuY2xpZW50c1tjbGllbnRJZF0pIHJldHVybjtcdFxyXG5cdFxyXG5cdHZhciBjbGllbnQgPSBuZXcgTUNsaWVudCh0aGlzKTtcdFxyXG5cdHRoaXMuY2xpZW50c1tjbGllbnRJZF0gPSBjbGllbnQ7XHJcblx0dGhpcy5jbGllbnRzQ291bnQrKztcdFxyXG5cdFxyXG5cdGNsaWVudC5jcmVhdGUodG9rZW4sIG5hbWUsIGNhbGxiYWNrKTtcdFxyXG59XHJcblxyXG5Ib3N0LnByb3RvdHlwZS5yZW1vdmVDbGllbnQgPSBmdW5jdGlvbihjbGllbnRJZCkge1x0XHJcblx0dmFyIGNsaWVudCA9IHRoaXMuY2xpZW50c1tjbGllbnRJZF07XHJcblx0aWYoY2xpZW50SWQgPiAwICYmIGNsaWVudCkge1x0XHRcdFxyXG5cdFx0Y2xpZW50LmRlc3Ryb3koKTtcclxuXHRcdGNsaWVudCA9IG51bGw7XHRcdFx0XHJcblx0XHR0aGlzLmNsaWVudHNbY2xpZW50SWRdID0gbnVsbDtcclxuXHRcdHRoaXMuY2xpZW50c0NvdW50LS07XHRcclxuXHR9XHRcclxufVxyXG5cclxuSG9zdC5wcm90b3R5cGUucmVtb3ZlQWxsQ2xpZW50cyA9IGZ1bmN0aW9uKCkge1xyXG5cdHRoaXMuY2xpZW50cy5mb3JFYWNoKChjbGllbnQpID0+IHtcclxuXHRcdGlmKGNsaWVudCkge1x0XHRcdFxyXG5cdFx0XHRjbGllbnQuZGVzdHJveSgpO1xyXG5cdFx0XHRjbGllbnQgPSBudWxsO1xyXG5cdFx0fSAgXHRcdFxyXG5cdH0pO1xyXG5cdHRoaXMuY2xpZW50cyA9IFtdO1x0XHJcblx0dGhpcy5jbGllbnRzQ291bnQgPSAwO1xyXG59XHJcblxyXG5Ib3N0LnByb3RvdHlwZS5nZXRDbGllbnRNc2dCdWZmZXIgPSBmdW5jdGlvbihpZCkge1xyXG5cdGlmKGlkID49IDAgJiYgdGhpcy5jbGllbnRzW2lkXSkge1xyXG5cdFx0cmV0dXJuIHRoaXMuY2xpZW50c1tpZF0ucGFja2V0QnVmZmVyO1xyXG5cdH1cdFxyXG5cdHJldHVybiBbXTtcdFxyXG59XHJcblxyXG5Ib3N0LnByb3RvdHlwZS5nZXRDbGllbnRCeUlkID0gZnVuY3Rpb24oaWQpIHtcclxuXHRpZihpZCA+PSAwICYmIHRoaXMuY2xpZW50c1tpZF0pIHtcclxuXHRcdHJldHVybiB0aGlzLmNsaWVudHNbaWRdO1x0XHRcclxuXHR9XHRcdFxyXG5cdHJldHVybiBudWxsO1xyXG59XHJcblxyXG5Ib3N0LnByb3RvdHlwZS5icm9hZGNhc3RQYWNrZXQgPSBmdW5jdGlvbihwYWNrZXQpIHtcdFxyXG5cdC8v0LLRgdC10Lwg0LjQs9GA0L7QutCw0Lwg0LLQutC70Y7Rh9Cw0Y8g0YHQtdCx0Y9cclxuXHR0aGlzLmNsaWVudHMuZm9yRWFjaCgoY2xpZW50KSA9PiB7XHJcblx0XHRpZihjbGllbnQpIHtcclxuXHRcdFx0Y2xpZW50LnNlbmRQYWNrZXQocGFja2V0KTtcclxuXHRcdH0gIFx0XHRcclxuXHR9KTtcclxufVxyXG5cclxuSG9zdC5wcm90b3R5cGUuZ2V0UGxheWVycyA9IGZ1bmN0aW9uKCkge1xyXG4gIFx0dmFyXHRwbGF5ZXJzID0gW107XHJcblx0XHJcblx0Ly/QstGB0LUg0LjQs9GA0L7QutC4INCy0LrQu9GO0YfQsNGPINGB0LXQsdGPXHJcblx0dGhpcy5jbGllbnRzLmZvckVhY2goKGNsaWVudCkgPT4ge1xyXG5cdFx0aWYoY2xpZW50KSB7XHJcblx0XHRcdHBsYXllcnMucHVzaCh7XHJcblx0XHRcdFx0aWQ6ICAgY2xpZW50LmlkLFxyXG5cdFx0XHRcdG5hbWU6IGNsaWVudC5uYW1lLFxyXG5cdFx0XHR9KTtcclxuXHRcdH0gIFx0XHRcclxuXHR9KTtcdFxyXG5cdHJldHVybiBwbGF5ZXJzO1xyXG59XHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5Ib3N0LnByb3RvdHlwZS5jcmVhdGVSb29tID0gZnVuY3Rpb24oKSB7XHRcclxuXHRpZih0aGlzLnBsYXlpbmcgfHwgdGhpcy5hY3RpdmUpIHJldHVybjtcclxuXHRcclxuXHQvL9C00L7QsdCw0LLQuNC8INGB0LXQsdGPINCyINGB0L/QuNGB0L7QuiDQutC70LjQtdC90YLQvtCyXHRcclxuXHR0aGlzLmFkZFNlbGZDbGllbnQoKTtcclxuXHQvL3RoaXMuZ2FtZS5zZXRIb3N0KHRydWUpO1xyXG5cdHRoaXMuc3RhcnRMb29wKCk7XHJcbn1cclxuXHJcbkhvc3QucHJvdG90eXBlLmxlYXZlUm9vbSA9IGZ1bmN0aW9uKCkge1x0XHRcclxuXHR0aGlzLnJlbW92ZUFsbENsaWVudHMoKTtcclxuXHR0aGlzLmFjdGl2ZSA9IGZhbHNlO1xyXG5cdHRoaXMuZnJlZVdvcmtlcigpO1xyXG59XHJcblxyXG5Ib3N0LnByb3RvdHlwZS5sZWF2ZUdhbWUgPSBmdW5jdGlvbigpIHtcdFxyXG5cdGlmKCF0aGlzLnBsYXlpbmcpIHJldHVybjtcclxuXHRcclxuXHR0aGlzLmFjdGl2ZSA9IGZhbHNlO1xyXG5cdHRoaXMucGxheWluZyA9IGZhbHNlO1xyXG5cdFxyXG5cdC8vdGhpcy5nYW1lLnNldEhvc3QoZmFsc2UpO1x0XHJcblx0dGhpcy5icm9hZGNhc3RQYWNrZXQodGhpcy5wYWNrZXRNYW5hZ2VyLnNIb3N0TGVhdmVQYWNrZXQodGhpcy5zZWxmLmlkKSk7XHJcblx0dGhpcy5nYW1lLmZyZWUoKTtcclxuXHR0aGlzLnJlbW92ZUFsbENsaWVudHMoKTtcclxuXHR0aGlzLmZyZWVXb3JrZXIoKTtcclxuXHR0aGlzLnNlbGYubGVhdmVHYW1lKCk7XHRcclxuXHRcclxuXHQvL9GD0LHQuNGA0LDQtdC8INGC0LDQudC80LXRgCDQv9GA0LjQvdGD0LTQuNGC0LXQu9GM0L3QvtCz0L4g0YHRgtCw0YDRgtCwXHJcblx0Y2xlYXJUaW1lb3V0KHRoaXMuc3RhcnRUaW1lcklkKTtcclxufVxyXG5cclxuSG9zdC5wcm90b3R5cGUuc3RhcnRHYW1lID0gZnVuY3Rpb24oKSB7XHRcdFxyXG5cdHZhclx0cGxheWVycyA9IHRoaXMuZ2V0UGxheWVycygpO1xyXG5cdHRoaXMuZ2FtZS5pbml0KCk7XHRcclxuXHR0aGlzLmdhbWUuc3RhcnRHYW1lKHBsYXllcnMpO1x0XHJcblx0dGhpcy5icm9hZGNhc3RQYWNrZXQodGhpcy5wYWNrZXRNYW5hZ2VyLnNIb3N0U3RhcnRQYWNrZXQodGhpcy5nYW1lLnNwYXduWCwgdGhpcy5nYW1lLnNwYXduWSwgXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCBwbGF5ZXJzLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgdGhpcy5nYW1lLndvcmxkLnNlZWQpKTtcdFxyXG5cdHRoaXMucmVhZHlDbGllbnRzID0gW107XHJcblx0XHJcblx0Ly/RgdGC0LDRgNGCINGH0LXRgNC10Lcg0LLRgNC10LzRjyDQvdC10LfQsNCy0LjRgdC40LzQviDQvtGCINCz0L7RgtC+0LLQvdC+0YHRgtC4XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdHRoaXMuc3RhcnRUaW1lcklkID0gc2V0VGltZW91dCgoKT0+eyBcclxuXHRcdGlmKCF0aGlzLnBsYXlpbmcpIHtcclxuXHRcdFx0dGhpcy5wbGF5aW5nID0gdHJ1ZTsgXHJcblx0XHRcdGNvbnNvbGUubG9nKFwidGltZW91dCBmb3JjZWQgc3RhcnRcIik7XHJcblx0XHR9XHJcblx0fSwgQ29uc3QuVElNRU9VVF9HQU1FX1NUQVJUKTtcclxufVxyXG5cclxuSG9zdC5wcm90b3R5cGUuY2xpZW50TGVhdmUgPSBmdW5jdGlvbihpZCkge1xyXG5cdHRoaXMucmVtb3ZlQ2xpZW50KGlkKTtcclxuXHR0aGlzLmdhbWUucmVtb3ZlRW50aXR5KGlkKTtcdFxyXG5cdHRoaXMuYnJvYWRjYXN0UGFja2V0KHRoaXMucGFja2V0TWFuYWdlci5zSG9zdExlYXZlUGFja2V0KGlkKSk7XHJcbn1cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuSG9zdC5wcm90b3R5cGUuc3RhcnRMb29wID0gZnVuY3Rpb24oKSB7XHJcblx0aWYod2luZG93Lldvcmtlcil7XHJcblx0XHR0aGlzLmFjdGl2ZSA9IHRydWU7XHRcclxuXHRcdFxyXG5cdFx0aWYoIXRoaXMud29ya2VyKSB7XHRcdFx0XHRcclxuICAgICAgICBcdHRoaXMud29ya2VyID0gbmV3IFdvcmtlcigpOyBcclxuXHRcdFxyXG4gICAgICAgIFx0dGhpcy53b3JrZXIub25tZXNzYWdlID0gKGUpID0+IHtcclxuXHRcdFx0XHRpZih0aGlzLmFjdGl2ZSkge1xyXG5cdFx0XHRcdFx0dGhpcy5ydW4oKTtcclxuXHRcdFx0XHR9ICAgICAgICAgICAgIFxyXG4gICAgICAgIFx0fSAgXHJcblx0XHRcdFxyXG5cdFx0XHR0aGlzLndvcmtlci5vbmVycm9yID0gZnVuY3Rpb24gKGUpIHtcclxuIFx0XHRcdFx0Y29uc29sZS5sb2coZS5tZXNzYWdlLCBlKTtcclxuIFx0XHRcdH1cclxuXHRcdH1cdFx0XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGFsZXJ0KFwiWW91ciBicm93c2VyIGRvIG5vdCBzdXBwb3J0IFdvcmtlclwiKTtcclxuICAgIH1cclxufVxyXG5Ib3N0LnByb3RvdHlwZS5mcmVlV29ya2VyID0gZnVuY3Rpb24oKSB7XHJcblx0aWYoIXRoaXMud29ya2VyKSByZXR1cm47XHJcblx0XHRcdFx0XHJcblx0dGhpcy53b3JrZXIudGVybWluYXRlKCk7XHRcdFxyXG4gICAgdGhpcy53b3JrZXIgPSBudWxsOyBcdFxyXG59XHJcblxyXG5Ib3N0LnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbigpIHtcdFxyXG5cdFxyXG5cdC8vY29uc29sZS5sb2coXCJob3N0IHRpY2s6IFwiLCBEYXRlLm5vdygpIC0gdGhpcy5sYXN0VGltZSk7XHRcclxuXHQgICBcclxuICAgIC8vMS7RgdC+0YHRgtC+0Y/QvdC40LUg0LrQu9C40LXQvdGC0LAg0YXQvtGB0YLQsCAgIFxyXG5cdHRoaXMuc2VsZi5ydW4oKTtcclxuXHRcdFxyXG5cdC8vMi7QvtCx0YDQsNCx0L7RgtCw0YLRjCDQutC70LjQtdC90YLRgdC60LjQtSDQv9Cw0LrQtdGC0YsgXHRcclxuXHR0aGlzLmNsaWVudHMuZm9yRWFjaCgoY2xpZW50KSA9PiB7XHJcblx0XHRpZihjbGllbnQpIHtcclxuXHRcdFx0Y2xpZW50LnBhY2tldEJ1ZmZlci5mb3JFYWNoKChwYWNrZXQpID0+IHtcclxuXHRcdFx0XHRpZihwYWNrZXQpIHtcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQvL2NvbnNvbGUubG9nKHBhY2tldCk7XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdFx0c3dpdGNoKHRoaXMucGFja2V0TWFuYWdlci5nZXRQYWNrZXRJRChwYWNrZXQpKSB7XHJcblx0XHRcdFx0XHRcdGNhc2UgTXNnLkNsaWVudFJlYWR5OlxyXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1x0XHJcblx0XHRcdFx0XHRcdGNhc2UgTXNnLkNsaWVudEFjdGlvbjpcclxuXHRcdFx0XHRcdFx0XHQvL9C/0YDQvtCy0LXRgNC60LAg0L3QsCDQs9C+0YLQvtCy0L3QvtGB0YLRjCDQutC70LjQtdC90YLQvtCyINC/0L7RgdC70LUg0YHRgtCw0YDRgtCwXHRcclxuXHRcdFx0XHRcdFx0XHRpZighdGhpcy5wbGF5aW5nKSB7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnJlYWR5Q2xpZW50c1tjbGllbnQuaWRdID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0XHRcdGlmKHRoaXMucmVhZHlDbGllbnRzLmxlbmd0aCA9PSB0aGlzLmNsaWVudHNDb3VudCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnBsYXlpbmcgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcImhvc3Qgc3RhcnRcIik7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fVx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdHRoaXMucGFja2V0TWFuYWdlci5kQ2xpZW50QWN0aW9uUGFja2V0KGNsaWVudC5pZCk7XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRicmVhaztcdFx0XHJcblx0XHRcdFx0XHRcdGNhc2UgTXNnLkNoYXQ6XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdHZhciBtZXNzYWdlID0gdGhpcy5wYWNrZXRNYW5hZ2VyLmRDaGF0UGFja2V0KHBhY2tldCk7XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRtZXNzYWdlID0gbWVzc2FnZVswXTtcclxuXHRcdFx0XHRcdFx0XHQvL9C+0LHRgNC10LfQsNC10Lwg0YHQvtC+0LHRidC10L3QuNC1XHJcblx0XHRcdFx0XHRcdFx0bWVzc2FnZS5tc2cgPSBtZXNzYWdlLm1zZy5zdWJzdHJpbmcoMCwgQ29uc3QuQ0hBVF9NRVNTQUdFX01BWCk7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5jaGF0UGFja2V0cy5wdXNoKG1lc3NhZ2UpO1x0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0YnJlYWs7XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1x0XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcdFx0XHRcclxuXHRcdFx0Y2xpZW50LnBhY2tldEJ1ZmZlciA9IFtdO1xyXG5cdFx0XHRjbGllbnQubGFzdFBhY2tldElEID0gMDtcdFx0XHRcdFx0XHRcdFxyXG5cdFx0fVx0XHRcclxuXHR9KTsgIFxyXG5cdFxyXG5cdC8v0YDQsNGB0YHRi9C70LrQsCDRh9Cw0YIg0YHQvtC+0LHRidC10L3QuNC5XHJcblx0aWYodGhpcy5jaGF0UGFja2V0cy5sZW5ndGggPiAwKSB7XHJcblx0XHR0aGlzLmJyb2FkY2FzdFBhY2tldCh0aGlzLnBhY2tldE1hbmFnZXIuc0NoYXRQYWNrZXQodGhpcy5jaGF0UGFja2V0cykpO1x0XHJcblx0XHR0aGlzLmNoYXRQYWNrZXRzID0gW107XHRcclxuXHR9XHRcclxuXHRcclxuXHRpZih0aGlzLnBsYXlpbmcpIHtcclxuXHRcdC8vMy7QvtCx0L3QvtCy0LjRgtGMINGB0L7RgdGC0L7Rj9C90LjQtSDQvNC40YDQsCDQuCDQuNCz0YDQvtC60L7Qslx0XHRcclxuXHRcdHRoaXMuZ2FtZS5ydW5UaWNrKCk7ICAgIFx0XHJcblx0XHJcblx0XHQvLzQu0YHRhNC+0YDQvNC40YDQvtCy0LDRgtGMINC00LvRjyDQutCw0LbQtNC+0LPQviDQutC70LjQtdC90YLQsCDQv9Cw0LrQtdGCINC4INC+0YLQvtGB0LvQsNGC0YxcdFxyXG5cdFx0dGhpcy5icm9hZGNhc3RQYWNrZXQodGhpcy5wYWNrZXRNYW5hZ2VyLnNIb3N0U3RhdGVQYWNrZXQoKSk7XHJcblx0fVx0XHJcblx0XHRcclxuXHQvL3RoaXMubGFzdFRpbWUgPSBEYXRlLm5vdygpO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9zdDsiLCJpbXBvcnQgeyBDb25zdCwgTXNnLCBFbnRpdHlTdGF0ZSwgSXRlbVN0YXRlIH0gZnJvbSAnY29uc3QuanMnXHJcblxyXG5cclxudmFyIFBhY2tldE1hbmFnZXIgPSBmdW5jdGlvbihwYXJlbnQsIGdhbWUpIHtcclxuXHR0aGlzLnBhcmVudCA9IHBhcmVudDtcclxuXHR0aGlzLmdhbWUgPSBnYW1lO1xyXG5cdHRoaXMuZW50aXR5bGlzdCA9IGdhbWUuZW50aXR5bGlzdDtcdFx0XHJcblx0dGhpcy5pdGVtbGlzdCA9IGdhbWUuaXRlbWxpc3Q7XHRcclxuXHRcclxuXHR0aGlzLnZpZXcgPSBudWxsO1xyXG5cdHRoaXMuaW5kZXggPSAwO1x0XHJcbn1cdFxyXG5cclxuUGFja2V0TWFuYWdlci5wcm90b3R5cGUuZ2V0UGFja2V0SUQgPSBmdW5jdGlvbihwYWNrZXQpIHtcdFx0XHJcblx0dGhpcy52aWV3ID0gbmV3IERhdGFWaWV3KHBhY2tldCk7XHRcclxuXHRyZXR1cm4gdGhpcy52aWV3LmdldFVpbnQ4KDApO1xyXG59XHJcbi8vU0VUXHJcblBhY2tldE1hbmFnZXIucHJvdG90eXBlLnNldFVpbnQ4ID0gZnVuY3Rpb24odmlldywgZGF0YSkge1x0XHJcblx0dmlldy5zZXRVaW50OCh0aGlzLmluZGV4LCBkYXRhKTtcclxuXHR0aGlzLmluZGV4Kys7XHJcbn1cclxuUGFja2V0TWFuYWdlci5wcm90b3R5cGUuc2V0SW50MzIgPSBmdW5jdGlvbih2aWV3LCBkYXRhKSB7XHRcclxuXHR2aWV3LnNldEludDMyKHRoaXMuaW5kZXgsIGRhdGEpO1xyXG5cdHRoaXMuaW5kZXgrPTQ7XHJcbn1cclxuUGFja2V0TWFuYWdlci5wcm90b3R5cGUuc2V0RmxvYXQzMiA9IGZ1bmN0aW9uKHZpZXcsIGRhdGEpIHtcclxuXHR2aWV3LnNldEZsb2F0MzIodGhpcy5pbmRleCwgZGF0YSk7XHJcblx0dGhpcy5pbmRleCs9NDtcclxufVxyXG4vL0dFVFxyXG5QYWNrZXRNYW5hZ2VyLnByb3RvdHlwZS5nZXRVaW50OCA9IGZ1bmN0aW9uKCkge1x0XHJcblx0dGhpcy5pbmRleCsrO1xyXG5cdHJldHVybiB0aGlzLnZpZXcuZ2V0VWludDgodGhpcy5pbmRleCAtIDEpO1x0XHJcbn1cclxuUGFja2V0TWFuYWdlci5wcm90b3R5cGUuZ2V0SW50MzIgPSBmdW5jdGlvbigpIHtcdFxyXG5cdHRoaXMuaW5kZXgrPTQ7XHJcblx0cmV0dXJuIHRoaXMudmlldy5nZXRJbnQzMih0aGlzLmluZGV4IC0gNCk7XHJcblx0XHJcbn1cclxuUGFja2V0TWFuYWdlci5wcm90b3R5cGUuZ2V0RmxvYXQzMiA9IGZ1bmN0aW9uKCkge1xyXG5cdHRoaXMuaW5kZXgrPTQ7XHJcblx0cmV0dXJuIHRoaXMudmlldy5nZXRGbG9hdDMyKHRoaXMuaW5kZXggLSA0KTtcclxufVxyXG5cclxuLy8tLS0tLS0tIEhPU1QgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbi8v0L/QsNC60LXRgiDRgdGC0LDRgNGCINC40LPRgNGLXHJcbi8vcGFja2V0SUQgcGxheWVyQ291bnQgc3Bhd25YIHNwYXduWSA8cGxheWVySUQgc3RyTGVuIFtuYW1lXSwgLi4uIHBsYXllcklEIHN0ckxlbiBbbmFtZV0+XHJcblBhY2tldE1hbmFnZXIucHJvdG90eXBlLnNIb3N0U3RhcnRQYWNrZXQgPSBmdW5jdGlvbihzcGF3blgsIHNwYXduWSwgcGxheWVycywgc2VlZCkge1x0XHJcblx0aWYoIXBsYXllcnMpIHJldHVybiBudWxsO1xyXG5cdFxyXG5cdHZhciBwbGF5ZXJzQ291bnQgPSBwbGF5ZXJzLmxlbmd0aDtcdFxyXG5cdHZhciBidWZmZXIgPSBuZXcgQXJyYXlCdWZmZXIoNCArIDQgKyBwbGF5ZXJzQ291bnQgKiAoMiArIChDb25zdC5QTEFZRVJfTkFNRV9DSEFSUysxKSAqIENvbnN0LkJZVEVTX0ZPUl9DSEFSKSk7XHJcblx0dmFyIHZpZXcgPSBuZXcgRGF0YVZpZXcoYnVmZmVyKTtcdFxyXG5cdHZhciBidWYxNiA9IG5ldyBVaW50MTZBcnJheShidWZmZXIpO1xyXG5cdHZhciBpbmRleCA9IDAsXHJcblx0XHRvZmZzZXQgPSAwO1xyXG5cdFxyXG5cdC8v0LjQtCDQv9Cw0LrQtdGC0LBcclxuXHR2aWV3LnNldFVpbnQ4KDAsIE1zZy5TdGFydCk7XHJcblx0dmlldy5zZXRVaW50OCgxLCBwbGF5ZXJzQ291bnQpO1xyXG5cdC8v0YLQvtGH0LrQsCDRgdC/0LDQstC90LBcclxuXHR2aWV3LnNldFVpbnQ4KDIsIHNwYXduWCk7ICBcclxuXHR2aWV3LnNldFVpbnQ4KDMsIHNwYXduWSk7IFx0XHJcblx0Ly/RgdC40LQg0LzQuNGA0LBcclxuXHR2aWV3LnNldEludDMyKDQsIHNlZWQpO1xyXG5cdFxyXG5cdHBsYXllcnMuZm9yRWFjaCgocGxheWVyKSA9PiB7XHJcblx0XHR2aWV3LnNldFVpbnQ4KGluZGV4ICsgMTAsIHBsYXllci5pZCk7XHRcdFx0XHJcblx0XHR2aWV3LnNldFVpbnQ4KGluZGV4ICsgMTEsIHBsYXllci5uYW1lLmxlbmd0aCk7XHJcblx0XHQvL9Cx0LDQudGC0L7QstGL0Lkg0LzQsNGB0YHQuNCyINC40LzQtdC90LhcclxuXHRcdGJ1ZjE2LnNldCh0aGlzLnN0cmluZ1RvQXJyYXlCdWZmZXIocGxheWVyLm5hbWUpLCBvZmZzZXQgKyA2KTsgLy8xNioyINCx0LDQudGCXHJcblx0XHRvZmZzZXQgKz0gMTc7XHJcblx0XHRpbmRleCArPSAzNDtcclxuXHR9KTtcclxuXHRcclxuXHRyZXR1cm4gbmV3IFVpbnQ4QXJyYXkoYnVmZmVyKTtcclxufVxyXG5QYWNrZXRNYW5hZ2VyLnByb3RvdHlwZS5kSG9zdFN0YXJ0UGFja2V0ID0gZnVuY3Rpb24ocGFja2V0KSB7XHRcdFxyXG5cdHZhciBidWYxNiA9IG5ldyBVaW50MTZBcnJheShwYWNrZXQpOyBcdCAgIFxyXG4gIFx0dmFyIHBsYXllcnMgPSBbXTtcclxuICBcdHZhciBpbmRleCA9IDAsXHJcbiAgXHRcdG9mZnNldCA9IDAsXHJcblx0XHRsZW4gPSAwOyAgXHJcblx0Ly/RgtC+0YfQutCwINGB0L/QsNCy0L3QsFxyXG5cdHRoaXMuZ2FtZS5zcGF3blggPSB0aGlzLnZpZXcuZ2V0VWludDgoMik7XHJcblx0dGhpcy5nYW1lLnNwYXduWSA9IHRoaXMudmlldy5nZXRVaW50OCgzKTtcclxuXHQvL9GB0LjQtCDQvNC40YDQsFxyXG5cdHRoaXMuZ2FtZS53b3JsZC5zZXRTZWVkKHRoaXMudmlldy5nZXRJbnQzMig0KSk7XHJcblx0XHJcblx0dmFyIHBsYXllcnNDb3VudCA9IHRoaXMudmlldy5nZXRVaW50OCgxKTtcdFxyXG5cdHdoaWxlKHBsYXllcnNDb3VudC0tKSB7ICBcclxuXHRcdC8v0LTQu9C40L3QvdCwINC40LzQtdC90Lgg0LIg0YHQuNC80LLQvtC70LDRhVxyXG4gIFx0XHRsZW4gPSB0aGlzLnZpZXcuZ2V0VWludDgoaW5kZXggKyAxMSk7XHRcdFxyXG4gIFx0XHRwbGF5ZXJzLnB1c2goe1xyXG4gICAgXHRcdGlkOiB0aGlzLnZpZXcuZ2V0VWludDgoaW5kZXggKyAxMCksXHJcbiAgICAgIFx0XHRuYW1lOiB0aGlzLmFycmF5QnVmZmVyVG9TdHJpbmcoYnVmMTYuc2xpY2Uob2Zmc2V0ICsgNiwgbGVuICsgb2Zmc2V0ICsgNikpXHJcbiAgICBcdH0pO1xyXG4gICAgXHRvZmZzZXQgKz0gMTc7XHJcblx0XHRpbmRleCArPSAzNDtcclxuICBcdH1cdFxyXG5cdFxyXG4gIFx0cmV0dXJuIHBsYXllcnM7XHJcbn1cclxuXHJcbi8v0L/QsNC60LXRgiDQuNCz0YDQvtC6INCy0YvRiNC10LtcclxuLy9wYWNrZXRJRCBwbGF5ZXJJRFxyXG5QYWNrZXRNYW5hZ2VyLnByb3RvdHlwZS5zSG9zdExlYXZlUGFja2V0ID0gZnVuY3Rpb24ocGxheWVySUQpIHtcclxuXHR2YXIgYnVmOCA9IG5ldyBVaW50OEFycmF5KDIpO1xyXG5cdGJ1ZjhbMF0gPSBNc2cuTGVhdmU7XHJcblx0YnVmOFsxXSA9IHBsYXllcklEO1xyXG5cdHJldHVybiBidWY4O1xyXG59XHJcblBhY2tldE1hbmFnZXIucHJvdG90eXBlLmRIb3N0TGVhdmVQYWNrZXQgPSBmdW5jdGlvbihwYWNrZXQpIHtcdFxyXG5cdHJldHVybiB0aGlzLnZpZXcuZ2V0VWludDgoMSk7XHJcbn1cclxuXHJcbi8v0L/QsNC60LXRgiDRgdC+0YHRgtC+0Y/QvdC40Lkg0L7QsdGK0LXQutGC0L7QslxyXG4vL3BhY2tldElEIG9iamVjdENvdW50IDxvYmpUeXBlIG9iaklEIC4uLiA+LCAuLi4gPG9ialR5cGUgb2JqSUQgLi4uID5cclxuLypQYWNrZXRNYW5hZ2VyLnByb3RvdHlwZS5zSG9zdFN0YXRlUGFja2V0ID0gZnVuY3Rpb24oKSB7XHRcclxuXHR2YXIgZW50aXR5Q291bnQgPSB0aGlzLmVudGl0eWxpc3Quc2l6ZSgpLFxyXG5cdFx0dXBkYXRlQ291bnQgPSB0aGlzLmdhbWUudXBkYXRlbGlzdC5sZW5ndGgsXHJcblx0XHRwcm9qZWN0aWxlQ291bnQgPSB0aGlzLnByb2plY3RpbGVsaXN0LnVwZGF0ZWRTaXplKCksXHJcblx0XHRpdGVtQ291bnQgPSB0aGlzLml0ZW1saXN0LnVwZGF0ZWRTaXplKCk7XHRcclxuXHRcdFxyXG5cdHZhciBidWZmZXIgPSBuZXcgQXJyYXlCdWZmZXIoNSArIGVudGl0eUNvdW50ICogMTcgKyB1cGRhdGVDb3VudCAqIDIpO1xyXG5cdHZhciB2aWV3ID0gbmV3IERhdGFWaWV3KGJ1ZmZlcik7XHRcclxuXHRcclxuXHR2YXIgdGlsZU9iaiwgaW5kZXggPSAwO1xyXG5cdFxyXG5cdHZpZXcuc2V0VWludDgoMCwgTXNnLkhvc3RTdGF0ZSk7XHJcblx0dmlldy5zZXRVaW50OCgxLCBlbnRpdHlDb3VudCk7XHRcclxuXHR2aWV3LnNldFVpbnQ4KDIsIHVwZGF0ZUNvdW50KTtcdFxyXG5cdFx0XHJcblx0dGhpcy5lbnRpdHlsaXN0LnBvb2woKS5mb3JFYWNoKChlbnRpdHkpID0+IHtcclxuXHRcdGlmKGVudGl0eSkge1x0XHRcdFx0XHRcclxuXHRcdFx0dmlldy5zZXRJbnQzMihpbmRleCArIDUsIGVudGl0eS5pZCArIDEpOyAvL1swLi4uXSAtPiBbMS4uLl1cclxuXHRcdFx0dmlldy5zZXRVaW50OChpbmRleCArIDksIGVudGl0eS5zdGF0ZSk7XHJcblx0XHRcdHZpZXcuc2V0VWludDgoaW5kZXggKyAxMCwgZW50aXR5LnR5cGUpO1x0XHJcblx0XHRcdHZpZXcuc2V0VWludDgoaW5kZXggKyAxMSwgZW50aXR5LnRpbWVTdGFtcCk7IC8vdGltZVN0YW1wXHRcdFx0XHRcclxuXHRcdFx0aWYoZW50aXR5LnR5cGUgPiA5OSkgeyAvL3Byb2plY3RpbGVcclxuXHRcdFx0XHR2aWV3LnNldFVpbnQ4KGluZGV4ICsgMTIsIGVudGl0eS5fZHggKyAxMDApOyAvLyBwcm9qZWN0aWxlIGR4XHJcblx0XHRcdFx0dmlldy5zZXRVaW50OChpbmRleCArIDEzLCBlbnRpdHkuX2R5ICsgMTAwKTsgLy8gcHJvamVjdGlsZSBkeVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHZpZXcuc2V0VWludDgoaW5kZXggKyAxMiwgZW50aXR5LmRpciArIDEpOyAvL1stMSwxXSAtPiBbMCwyXVx0XHJcblx0XHRcdFx0dmlldy5zZXRVaW50OChpbmRleCArIDEzLCBlbnRpdHkuaXNBdHRhY2tlZCgpKTtcdC8vZGFtYWdlXHRcclxuXHRcdFx0fVx0XHRcdFx0XHRcclxuXHRcdFx0dmlldy5zZXRGbG9hdDMyKGluZGV4ICsgMTQsIGVudGl0eS54KTsgXHJcblx0XHRcdHZpZXcuc2V0RmxvYXQzMihpbmRleCArIDE4LCBlbnRpdHkueSk7IFx0XHRcdFx0XHJcblx0XHR9XHRcdFxyXG5cdFx0aW5kZXggKz0gMTc7XHJcblx0fSk7XHRcclxuXHRpbmRleCAtPSAxNztcclxuXHRcdFxyXG5cdHdoaWxlKHVwZGF0ZUNvdW50LS0pIHtcclxuXHRcdHRpbGVPYmogPSB0aGlzLmdhbWUudXBkYXRlbGlzdFt1cGRhdGVDb3VudF07XHJcblx0XHR2aWV3LnNldFVpbnQ4KGluZGV4ICsgMjIsIHRpbGVPYmpbMF0pO1xyXG5cdFx0dmlldy5zZXRVaW50OChpbmRleCArIDIzLCB0aWxlT2JqWzFdKTtcclxuXHRcdFxyXG5cdFx0aW5kZXggKz0gMjtcclxuXHR9XHJcblx0XHJcblx0XHJcblx0dGhpcy5nYW1lLnVwZGF0ZWxpc3QgPSBbXTtcclxuXHR0aGlzLmVudGl0eWxpc3QucmVtb3ZlQWxsTWFya2VkKCk7XHJcblx0XHJcblx0cmV0dXJuIG5ldyBVaW50OEFycmF5KGJ1ZmZlcik7XHJcbn0qL1xyXG4vKlBhY2tldE1hbmFnZXIucHJvdG90eXBlLmRIb3N0U3RhdGVQYWNrZXQgPSBmdW5jdGlvbihwYWNrZXQpIHsgIFxyXG4gIFx0dmFyIGluZGV4ID0gMDtcdFx0XHJcblx0dmFyIGVudGl0eUNvdW50ID0gdGhpcy52aWV3LmdldFVpbnQ4KDEpLFxyXG5cdFx0dXBkYXRlQ291bnQgPSB0aGlzLnZpZXcuZ2V0VWludDgoMik7XHJcblx0dmFyIGlkLCBlbnRpdHksIFxyXG5cdFx0c3RhdGUsIHR5cGU7XHJcblx0XHRcclxuXHR0aGlzLmluZGV4ID0gNTtcclxuXHRcclxuXHR3aGlsZShlbnRpdHlDb3VudC0tKSB7XHRcdFx0XHJcblx0XHRpZCA9IHRoaXMudmlldy5nZXRJbnQzMihpbmRleCArIDUpIC0gMTsgLy9bMS4uLl0gLT4gWzAuLi5dXHJcblx0XHRlbnRpdHkgPSB0aGlzLmVudGl0eWxpc3QuZ2V0T2JqZWN0QnlJZChpZCk7XHRcdFxyXG5cdFx0XHJcblx0XHRzdGF0ZSA9IHRoaXMudmlldy5nZXRVaW50OChpbmRleCArIDkpOyBcclxuXHRcdHN3aXRjaChzdGF0ZSkge1xyXG5cdFx0XHRjYXNlIEVudGl0eVN0YXRlLkNyZWF0ZTpcclxuXHRcdFx0XHRpZighZW50aXR5KSB7XHJcblx0XHRcdFx0XHR0eXBlID0gdGhpcy52aWV3LmdldFVpbnQ4KGluZGV4ICsgMTApO1xyXG5cdFx0XHRcdFx0ZW50aXR5ID0gdGhpcy5nYW1lLmNyZWF0ZUVudGl0eUJ5VHlwZSh0eXBlLCBpZCk7XHJcblx0XHRcdFx0XHRpZihlbnRpdHkpIHtcdFxyXG5cdFx0XHRcdFx0XHRpZih0eXBlID4gOTkpIHsgLy9wcm9qZWN0aWxlXHJcblx0XHRcdFx0XHRcdFx0ZW50aXR5LmluaXQodGhpcy52aWV3LmdldFVpbnQ4KGluZGV4ICsgMTIpIC0gMTAwLCAgLy8gcHJvamVjdGlsZSBkeFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMudmlldy5nZXRVaW50OChpbmRleCArIDEzKSAtIDEwMCk7IC8vIHByb2plY3RpbGUgZHlcdFxyXG5cdFx0XHRcdFx0XHR9XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdGVudGl0eS5zZXRQb3NpdGlvbih0aGlzLnZpZXcuZ2V0RmxvYXQzMihpbmRleCArIDE0KSwgIC8veFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgIHRoaXMudmlldy5nZXRGbG9hdDMyKGluZGV4ICsgMTgpKTsgLy95XHJcblx0XHRcdFx0XHRcdHRoaXMuZ2FtZS5hZGRFbnRpdHkoZW50aXR5LCBpZCk7XHJcblx0XHRcdFx0XHR9XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHN0YXRlID0gRW50aXR5U3RhdGUuRGVmYXVsdDtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcclxuXHRcdFx0Y2FzZSBFbnRpdHlTdGF0ZS5SZW1vdmU6XHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0aWYoZW50aXR5KVx0XHRcdFx0XHJcblx0XHRcdFx0XHRlbnRpdHkuaHVydCh0aGlzLnZpZXcuZ2V0VWludDgoaW5kZXggKyAxMykpO1x0XHJcblx0XHRcdFx0dGhpcy5nYW1lLnJlbW92ZUVudGl0eShpZCk7XHJcblx0XHRcdFxyXG5cdFx0XHRcdGluZGV4ICs9IDE3OyAgICBcclxuXHRcdFx0XHRjb250aW51ZTtcdFx0XHRcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0aWYoZW50aXR5KSB7XHJcblx0XHRcdGVudGl0eS5zdGF0ZSA9IHN0YXRlO1xyXG5cdFx0XHRlbnRpdHkudHlwZSA9ICB0eXBlO1xyXG5cdFx0XHRlbnRpdHkuZGlyIFx0PSB0aGlzLnZpZXcuZ2V0VWludDgoaW5kZXggKyAxMikgLSAxOyAgLy9kaXIgWzAsMl0gLT4gWy0xLDFdXHJcblx0XHRcdGVudGl0eS5odXJ0KHRoaXMudmlldy5nZXRVaW50OChpbmRleCArIDEzKSk7XHQgICAvL2F0dGFja2VkXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRlbnRpdHkuc2V0SG9zdFN0YXRlKHRoaXMudmlldy5nZXRVaW50OChpbmRleCArIDExKSwgICAgIC8vdGltZVN0YW1wXHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnZpZXcuZ2V0RmxvYXQzMihpbmRleCArIDE0KSwgIC8veFxyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy52aWV3LmdldEZsb2F0MzIoaW5kZXggKyAxOCkpOyAvL3lcclxuXHRcdH0gXHRcdFx0XHRcdFxyXG5cdFx0aW5kZXggKz0gMTc7ICAgIFx0XHRcclxuXHR9IFx0XHJcblx0aW5kZXggLT0gMTc7XHJcblx0XHJcblx0d2hpbGUodXBkYXRlQ291bnQtLSkge1x0XHJcblx0XHR0aGlzLmdhbWUuYWN0aXZhdGVPYmoobnVsbCwgXHJcblx0XHRcdFx0XHRcdFx0ICB0aGlzLnZpZXcuZ2V0VWludDgoaW5kZXggKyAyMiksIC8vaVxyXG5cdFx0XHRcdFx0XHRcdCAgdGhpcy52aWV3LmdldFVpbnQ4KGluZGV4ICsgMjMpLCAvL2pcdFxyXG5cdFx0XHRcdFx0XHRcdCAgZmFsc2UpO1x0Ly9ob3N0XHJcblx0XHRpbmRleCArPSAyO1xyXG5cdH1cclxufSovXHJcblxyXG5cclxuUGFja2V0TWFuYWdlci5wcm90b3R5cGUuc0hvc3RTdGF0ZVBhY2tldCA9IGZ1bmN0aW9uKCkge1x0XHJcblx0bGV0IGVudGl0eUNvdW50ID0gdGhpcy5lbnRpdHlsaXN0LnNpemUoKSxcclxuXHRcdHVwZGF0ZUNvdW50ID0gdGhpcy5nYW1lLnVwZGF0ZWxpc3QubGVuZ3RoLFx0XHRcclxuXHRcdGl0ZW1Db3VudCA9IHRoaXMuaXRlbWxpc3QudXBkYXRlZFNpemUoKTtcdFxyXG5cdFx0XHJcblx0bGV0IGJ1ZmZlciA9IG5ldyBBcnJheUJ1ZmZlcig1ICsgZW50aXR5Q291bnQgKiAxNyArIHVwZGF0ZUNvdW50ICogMiArIGl0ZW1Db3VudCAqIDgpO1xyXG5cdGxldCB2aWV3ID0gbmV3IERhdGFWaWV3KGJ1ZmZlcik7XHJcblx0bGV0IHRpbGVPYmo7XHJcblx0XHJcblx0dmlldy5zZXRVaW50OCgwLCBNc2cuSG9zdFN0YXRlKTtcclxuXHR2aWV3LnNldFVpbnQ4KDEsIGVudGl0eUNvdW50KTtcdFxyXG5cdHZpZXcuc2V0VWludDgoMiwgdXBkYXRlQ291bnQpO1x0XHRcclxuXHR2aWV3LnNldFVpbnQ4KDMsIGl0ZW1Db3VudCk7XHRcclxuXHRcclxuXHR0aGlzLmluZGV4ID0gNDtcclxuXHRcdFxyXG5cdHRoaXMuZW50aXR5bGlzdC5wb29sKCkuZm9yRWFjaCgoZW50aXR5KSA9PiB7XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0dGhpcy5zZXRJbnQzMih2aWV3LCBlbnRpdHkuaWQgKyAxKTsgLy9bMC4uLl0gLT4gWzEuLi5dXHJcblx0XHR0aGlzLnNldFVpbnQ4KHZpZXcsIGVudGl0eS5zdGF0ZSk7XHJcblx0XHR0aGlzLnNldFVpbnQ4KHZpZXcsIGVudGl0eS50eXBlKTtcdFxyXG5cdFx0dGhpcy5zZXRGbG9hdDMyKHZpZXcsIGVudGl0eS54KTsgXHJcblx0XHR0aGlzLnNldEZsb2F0MzIodmlldywgZW50aXR5LnkpO1xyXG5cdFx0aWYoZW50aXR5LnR5cGUgPiA5OSkgeyAvL3Byb2plY3RpbGVcclxuXHRcdFx0dGhpcy5zZXRVaW50OCh2aWV3LCBlbnRpdHkuX2R4ICsgMTAwKTsgXHRcclxuXHRcdFx0dGhpcy5zZXRVaW50OCh2aWV3LCBlbnRpdHkuX2R5ICsgMTAwKTsgXHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLnNldFVpbnQ4KHZpZXcsIGVudGl0eS5pc0h1cnRlZCgpKTtcdC8vZGFtYWdlXHJcblx0XHRcdHRoaXMuc2V0VWludDgodmlldywgZW50aXR5LmRpciArIDEpOyAvL1stMSwxXSAtPiBbMCwyXVx0XHJcblx0XHR9XHRcclxuXHRcdHRoaXMuc2V0VWludDgodmlldywgZW50aXR5LnRpbWVTdGFtcCk7XHJcblx0fSk7XHRcdFxyXG5cdFx0XHJcblx0d2hpbGUodXBkYXRlQ291bnQtLSkge1xyXG5cdFx0dGlsZU9iaiA9IHRoaXMuZ2FtZS51cGRhdGVsaXN0W3VwZGF0ZUNvdW50XTtcclxuXHRcdHRoaXMuc2V0VWludDgodmlldywgdGlsZU9ialswXSk7XHJcblx0XHR0aGlzLnNldFVpbnQ4KHZpZXcsIHRpbGVPYmpbMV0pO1x0XHRcdFxyXG5cdH1cdFxyXG5cdFxyXG5cdHRoaXMuaXRlbWxpc3QuZm9yRWFjaFVwZGF0ZWQoKGl0ZW0pID0+IHtcclxuXHRcdHRoaXMuc2V0SW50MzIodmlldywgaXRlbS5pZCArIDEpOyAvL1swLi4uXSAtPiBbMS4uLl1cclxuXHRcdHRoaXMuc2V0VWludDgodmlldywgaXRlbS5zdGF0ZSk7XHJcblx0XHR0aGlzLnNldFVpbnQ4KHZpZXcsIGl0ZW0udHlwZSk7XHRcdFxyXG5cdFx0dGhpcy5zZXRVaW50OCh2aWV3LCBpdGVtLmkpO1xyXG5cdFx0dGhpcy5zZXRVaW50OCh2aWV3LCBpdGVtLmopO1xyXG5cdFx0dGhpcy5zZXRJbnQzMih2aWV3LCBpdGVtLm93bmVyICsgMSk7IC8vWzAuLi5dIC0+IFsxLi4uXVxyXG5cdH0pO1xyXG5cdFxyXG5cdHRoaXMuZ2FtZS51cGRhdGVsaXN0ID0gW107XHJcblx0dGhpcy5lbnRpdHlsaXN0LnJlbW92ZUFsbE1hcmtlZCgpO1xyXG5cdHRoaXMuaXRlbWxpc3QucmVtb3ZlQWxsTWFya2VkKCk7XHRcclxuXHRcclxuXHRyZXR1cm4gbmV3IFVpbnQ4QXJyYXkoYnVmZmVyKTtcclxufVxyXG5QYWNrZXRNYW5hZ2VyLnByb3RvdHlwZS5kSG9zdFN0YXRlUGFja2V0ID0gZnVuY3Rpb24ocGFja2V0KSB7ICAgIFx0XHRcclxuXHRsZXQgZW50aXR5Q291bnQgPSB0aGlzLnZpZXcuZ2V0VWludDgoMSksXHJcblx0XHR1cGRhdGVDb3VudCA9IHRoaXMudmlldy5nZXRVaW50OCgyKSxcdFx0XHJcblx0XHRpdGVtQ291bnQgPSB0aGlzLnZpZXcuZ2V0VWludDgoMyk7XHJcblx0bGV0IGlkLCBvYmplY3QsXHRzdGF0ZSwgdHlwZSwgeCwgeSwgYXJnMSwgYXJnMjtcclxuXHRcdFxyXG5cdHRoaXMuaW5kZXggPSA0O1xyXG5cdFxyXG5cdHdoaWxlKGVudGl0eUNvdW50LS0pIHtcdFx0XHRcclxuXHRcdGlkID0gdGhpcy5nZXRJbnQzMigpIC0gMTsgLy9bMS4uLl0gLT4gWzAuLi5dXHRcdFx0XHJcblx0XHRzdGF0ZSA9IHRoaXMuZ2V0VWludDgoKTsgXHJcblx0XHR0eXBlID0gdGhpcy5nZXRVaW50OCgpO1xyXG5cdFx0eCA9IHRoaXMuZ2V0RmxvYXQzMigpO1xyXG5cdFx0eSA9IHRoaXMuZ2V0RmxvYXQzMigpO1x0XHJcblx0XHRhcmcxID0gdGhpcy5nZXRVaW50OCgpOyAvL2RhbWFnZSBvciBkeFxyXG5cdFx0YXJnMiA9IHRoaXMuZ2V0VWludDgoKTsgLy9kaXIgb3IgZHlcclxuXHRcdFxyXG5cdFx0b2JqZWN0ID0gdGhpcy5lbnRpdHlsaXN0LmdldE9iamVjdEJ5SWQoaWQpO1x0XHJcblx0XHRcdFx0XHJcblx0XHRzd2l0Y2goc3RhdGUpIHtcclxuXHRcdFx0Y2FzZSBFbnRpdHlTdGF0ZS5DcmVhdGU6XHJcblx0XHRcdFx0aWYoIW9iamVjdCkge1x0XHRcdFx0XHRcclxuXHRcdFx0XHRcdG9iamVjdCA9IHRoaXMuZ2FtZS5jcmVhdGVPYmplY3RCeVR5cGUodHlwZSwgaWQpO1xyXG5cdFx0XHRcdFx0aWYob2JqZWN0KSB7XHJcblx0XHRcdFx0XHRcdGlmKHR5cGUgPiA5OSkgeyAvL3Byb2plY3RpbGVcclxuXHRcdFx0XHRcdFx0XHRvYmplY3QuaW5pdChhcmcxIC0gMTAwLCAgLy9keFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFyZzIgLSAxMDApOyAvL2R5XHRcclxuXHRcdFx0XHRcdFx0fVx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdG9iamVjdC5zZXRQb3NpdGlvbih4LCB5KTsgXHJcblx0XHRcdFx0XHRcdHRoaXMuZ2FtZS5hZGRFbnRpdHkob2JqZWN0LCBpZCk7XHJcblx0XHRcdFx0XHR9XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHN0YXRlID0gRW50aXR5U3RhdGUuRGVmYXVsdDtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcclxuXHRcdFx0Y2FzZSBFbnRpdHlTdGF0ZS5SZW1vdmU6XHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0aWYob2JqZWN0KVx0XHRcdFx0XHJcblx0XHRcdFx0XHRvYmplY3QuaHVydChhcmcxKTtcdFxyXG5cdFx0XHRcdHRoaXMuZ2FtZS5yZW1vdmVFbnRpdHkoaWQpO1xyXG5cdFx0XHRcdHRoaXMuaW5kZXgrKztcclxuXHRcdFx0XHRjb250aW51ZTtcdFx0XHRcclxuXHRcdH1cdFx0XHJcblx0XHRpZihvYmplY3QpIHtcclxuXHRcdFx0b2JqZWN0LnN0YXRlID0gc3RhdGU7XHJcblx0XHRcdG9iamVjdC50eXBlID0gIHR5cGU7XHJcblx0XHRcdG9iamVjdC5odXJ0KGFyZzEpO1x0ICAgIC8vZGFtYWdlXHRcdFxyXG5cdFx0XHRvYmplY3QuZGlyID0gYXJnMiAtIDE7ICAvL2RpciBbMCwyXSAtPiBbLTEsMV1cdFx0XHRcclxuXHRcdFx0b2JqZWN0LnNldEhvc3RTdGF0ZSh0aGlzLmdldFVpbnQ4KCksIC8vdGltZVN0YW1wXHJcblx0XHRcdFx0XHRcdFx0XHR4LCAgXHJcblx0XHRcdFx0XHRcdFx0XHR5KTsgXHRcdFx0XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLmluZGV4Kys7XHJcblx0XHR9XHRcdCAgIFx0XHRcclxuXHR9IFx0XHJcblx0XHJcblx0XHJcblx0d2hpbGUodXBkYXRlQ291bnQtLSkge1x0XHJcblx0XHR0aGlzLmdhbWUuYWN0aXZhdGVPYmoobnVsbCwgXHJcblx0XHRcdFx0XHRcdFx0ICB0aGlzLmdldFVpbnQ4KCksIC8vaVxyXG5cdFx0XHRcdFx0XHRcdCAgdGhpcy5nZXRVaW50OCgpLCAvL2pcdFxyXG5cdFx0XHRcdFx0XHRcdCAgZmFsc2UpO1x0Ly9ob3N0XHRcdFxyXG5cdH1cclxuXHRcdFxyXG5cdHdoaWxlKGl0ZW1Db3VudC0tKSB7XHRcclxuXHRcdGlkID0gdGhpcy5nZXRJbnQzMigpIC0gMTsgLy9bMS4uLl0gLT4gWzAuLi5dXHJcblx0XHRzdGF0ZSA9IHRoaXMuZ2V0VWludDgoKTtcclxuXHRcdHR5cGUgPSB0aGlzLmdldFVpbnQ4KCk7XHJcblx0XHR4ID0gdGhpcy5nZXRVaW50OCgpOyAvL2lcclxuXHRcdHkgPSB0aGlzLmdldFVpbnQ4KCk7IC8valxyXG5cdFx0YXJnMSA9IHRoaXMuZ2V0SW50MzIoKSAtIDE7IC8vWzEuLi5dIC0+IFswLi4uXVxyXG5cdFx0XHJcblx0XHRvYmplY3QgPSB0aGlzLml0ZW1saXN0LmdldE9iamVjdEJ5SWQoaWQpO1x0XHJcblx0XHRcclxuXHRcdHN3aXRjaChzdGF0ZSkge1xyXG5cdFx0XHQvKmNhc2UgSXRlbVN0YXRlLkNyZWF0ZTpcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSBJdGVtU3RhdGUuUmVtb3ZlOlxyXG5cdFx0XHRcdGJyZWFrOyovXHJcblx0XHRcdGNhc2UgSXRlbVN0YXRlLkRyb3A6XHJcblx0XHRcdFx0dGhpcy5nYW1lLmRyb3BJdGVtKHgsIHksIG9iamVjdCwgaWQpO1xyXG5cdFx0XHRcdHRoaXMuZ2FtZS5uZWVkUmVidWlsZCA9IHRydWU7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgSXRlbVN0YXRlLlBpY2t1cDpcclxuXHRcdFx0XHR0aGlzLmdhbWUucGlja3VwSXRlbShvYmplY3QsIGFyZzEpO1xyXG5cdFx0XHRcdHRoaXMuZ2FtZS5uZWVkUmVidWlsZCA9IHRydWU7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgSXRlbVN0YXRlLkVxdWlwOlxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIEl0ZW1TdGF0ZS5VbmVxdWlwOlxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0fVx0XHRcclxuXHR9XHJcbn1cclxuXHJcblBhY2tldE1hbmFnZXIucHJvdG90eXBlLnNIb3N0UG9uZ1BhY2tldCA9IGZ1bmN0aW9uKCkge1x0XHJcbn1cclxuUGFja2V0TWFuYWdlci5wcm90b3R5cGUuZEhvc3RQb25nUGFja2V0ID0gZnVuY3Rpb24ocGFja2V0KSB7XHRcdFxyXG59XHJcblxyXG4vLy0tLS0tLS0gQ0xJRU5UIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuLy/Qv9Cw0LrQtdGCINCz0L7RgtC+0LLQvdC+0YHRgtC4INC60LvQuNC10L3RgtCwINC90LDRh9Cw0YLRjCDQuNCz0YDRg1xyXG5QYWNrZXRNYW5hZ2VyLnByb3RvdHlwZS5zQ2xpZW50UmVhZHlQYWNrZXQgPSBmdW5jdGlvbihpZCkge1xyXG5cdHZhciBidWY4ID0gbmV3IFVpbnQ4QXJyYXkoOCk7XHRcclxuXHRidWY4WzBdID0gTXNnLkNsaWVudFJlYWR5O1xyXG5cdGJ1ZjhbMV0gPSBpZDtcclxuXHRyZXR1cm4gYnVmODtcclxufVxyXG5QYWNrZXRNYW5hZ2VyLnByb3RvdHlwZS5kQ2xpZW50UmVhZHlQYWNrZXQgPSBmdW5jdGlvbihwYWNrZXQpIHtcdFxyXG5cdHJldHVybiB0aGlzLnZpZXcuZ2V0VWludDgoMSk7IC8vaWRcdFxyXG59XHJcblxyXG4vL9C/0LDQutC10YIg0LTQtdC50YHRgtCy0LjQuSDQutC70LjQtdC90YLQsFxyXG5QYWNrZXRNYW5hZ2VyLnByb3RvdHlwZS5zQ2xpZW50QWN0aW9uUGFja2V0ID0gZnVuY3Rpb24ocGxheWVyKSB7XHRcclxuXHRpZihwbGF5ZXIpIHtcclxuXHRcdHZhciBidWY4ID0gbmV3IFVpbnQ4QXJyYXkoMTIpO1xyXG5cdFx0YnVmOFswXSA9IE1zZy5DbGllbnRBY3Rpb247XHJcblx0XHRidWY4WzFdID0gcGxheWVyLnRpbWVTdGFtcDtcclxuXHRcdGJ1ZjhbMl0gPSBwbGF5ZXIuc3RhdGU7XHJcblx0XHRidWY4WzNdID0gcGxheWVyLmR4ICsgMTsgIC8vWy0xLDAsMV0gLT4gWzAsMSwyXVxyXG5cdFx0YnVmOFs0XSA9IHBsYXllci5keSArIDE7ICAvL1stMSwwLDFdIC0+IFswLDEsMl1cclxuXHRcdGJ1ZjhbNV0gPSBwbGF5ZXIuZGlyICsgMTsgLy9bLTEsMV0gLT4gWzAsMl0gXHJcblx0XHRpZih0aGlzLmdhbWUuYXR0YWNrKSB7XHJcblx0XHRcdGJ1ZjhbNl0gPSB0aGlzLmdhbWUuYXR0YWNrOyAvL21vYiBpZFxyXG5cdFx0XHR0aGlzLmdhbWUuYXR0YWNrID0gbnVsbDtcclxuXHRcdH1cdFx0XHRcdFx0XHRcclxuXHRcdGlmKHRoaXMuZ2FtZS5hY3RpdmF0ZSkgeyAvL9Cy0LfQsNC40LzQvtC00LXQudGB0LLQuNC1INGBINC+0LrRgNGD0LbQtdC90LjQtdC8XHJcblx0XHRcdGJ1ZjhbN10gPSB0aGlzLmdhbWUuYWN0aXZhdGVbMF07XHJcblx0XHRcdGJ1ZjhbOF0gPSB0aGlzLmdhbWUuYWN0aXZhdGVbMV07XHJcblx0XHRcdHRoaXMuZ2FtZS5hY3RpdmF0ZSA9IG51bGw7XHJcblx0XHR9XHRcclxuXHRcdGlmKHRoaXMuZ2FtZS5jYXN0KSB7IC8v0LrQsNGB0YIg0LfQsNC60LvQuNC90LDQvdC40Y9cclxuXHRcdFx0dmFyIGNhc3QgPSB0aGlzLmdhbWUuY2FzdDtcclxuXHRcdFx0YnVmOFs5XSA9IGNhc3QudHlwZTtcclxuXHRcdFx0YnVmOFsxMF0gPSBjYXN0LmR4ICsgMTAwOyBcclxuXHRcdFx0YnVmOFsxMV0gPSBjYXN0LmR5ICsgMTAwO1xyXG5cdFx0XHR0aGlzLmdhbWUuY2FzdCA9IG51bGw7XHJcblx0XHR9XHRcdFxyXG5cdFx0cmV0dXJuIGJ1Zjg7XHJcblx0fVxyXG5cdHJldHVybiBudWxsO1xyXG59XHJcblBhY2tldE1hbmFnZXIucHJvdG90eXBlLmRDbGllbnRBY3Rpb25QYWNrZXQgPSBmdW5jdGlvbihwbGF5ZXJJRCkge1x0XHJcblx0dmFyIHBsYXllciA9IHRoaXMuZW50aXR5bGlzdC5nZXRPYmplY3RCeUlkKHBsYXllcklEKTtcclxuXHRcclxuXHQvL1RPRE8g0LLQsNC70LjQtNCw0YbQuNGPINC00LDQvdC90YvRhSDQvtGCINC40LPRgNC+0LrQsFxyXG5cdFxyXG5cdGlmKHBsYXllcikge1xyXG5cdFx0Ly9wbGF5ZXIubmVlZFN0YXRlVXBkYXRlID0gdHJ1ZTtcclxuXHRcdHBsYXllci50aW1lU3RhbXAgPSB0aGlzLnZpZXcuZ2V0VWludDgoMSk7XHJcblx0XHRwbGF5ZXIuc3RhdGUgPVx0ICAgdGhpcy52aWV3LmdldFVpbnQ4KDIpLFx0XHJcblx0XHRwbGF5ZXIuc2V0TW92ZW1lbnQodGhpcy52aWV3LmdldFVpbnQ4KDMpIC0gMSwgIC8vZHggIFswLDEsMl0gLT4gWy0xLDAsMV0gXHJcblx0XHRcdFx0XHRcdCAgIHRoaXMudmlldy5nZXRVaW50OCg0KSAtIDEpOyAvL2R5ICBbMCwxLDJdIC0+IFstMSwwLDFdIFxyXG5cdFx0cGxheWVyLmRpciA9IFx0ICAgdGhpcy52aWV3LmdldFVpbnQ4KDUpIC0gMTsgIC8vZGlyIFswLDJdIC0+IFstMSwxXSBcclxuXHRcdFxyXG5cdFx0aWYodGhpcy52aWV3LmdldFVpbnQ4KDYpKSB7XHJcblx0XHRcdHBsYXllci5hdHRhY2tNb2IgPSB0aGlzLnZpZXcuZ2V0VWludDgoNik7ICAgICAgLy9tb2IgaWRcclxuXHRcdH1cdFx0XHJcblx0XHRpZih0aGlzLnZpZXcuZ2V0VWludDgoNykpIHsgLy/QstC30LDQuNC80L7QtNC10LnRgdCy0LjQtSDRgSDQvtC60YDRg9C20LXQvdC40LXQvFxyXG5cdFx0XHRwbGF5ZXIuYWN0aXZhdGUgPSBbdGhpcy52aWV3LmdldFVpbnQ4KDcpLFxyXG5cdFx0XHRcdFx0XHQgICAgICAgdGhpcy52aWV3LmdldFVpbnQ4KDgpXTtcclxuXHRcdH1cdFx0XHJcblx0XHRpZih0aGlzLnZpZXcuZ2V0VWludDgoOSkpIHsgLy/QutCw0YHRgiDQt9Cw0LrQu9C40L3QsNC90LjRj1xyXG5cdFx0XHR2YXIgY2FzdCA9IHt9O1x0XHRcdFxyXG5cdFx0XHRjYXN0LnR5cGUgPSB0aGlzLnZpZXcuZ2V0VWludDgoOSk7XHJcblx0XHRcdGNhc3QuZHggPSB0aGlzLnZpZXcuZ2V0VWludDgoMTApIC0gMTAwOyBcclxuXHRcdFx0Y2FzdC5keSA9IHRoaXMudmlldy5nZXRVaW50OCgxMSkgLSAxMDA7XHRcclxuXHRcdFx0cGxheWVyLnNwZWxsY2FzdCA9IGNhc3Q7XHRcclxuXHRcdH1cdFxyXG5cdH1cclxufVxyXG5cclxuXHJcblBhY2tldE1hbmFnZXIucHJvdG90eXBlLnNDbGllbnRQaW5nUGFja2V0ID0gZnVuY3Rpb24oKSB7XHRcclxufVxyXG5QYWNrZXRNYW5hZ2VyLnByb3RvdHlwZS5kQ2xpZW50UGluZ1BhY2tldCA9IGZ1bmN0aW9uKHBhY2tldCkge1x0XHRcclxufVxyXG5cclxuLy8tLS0tLS0tLSBDSEFUIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbi8vcGFja2V0SUQgbXNnQ291bnQgPHBsYXllcklEIGJ1ZmZTaXplIFtidWZmZXJdPiwgLi4uIDxwbGF5ZXJJRCBidWZmU2l6ZSBbYnVmZmVyXT5cclxuUGFja2V0TWFuYWdlci5wcm90b3R5cGUuc0NoYXRQYWNrZXQgPSBmdW5jdGlvbihtZXNzYWdlcykge1xyXG5cdHZhciBidWZmZXIgPSBuZXcgQXJyYXlCdWZmZXIoMiArIG1lc3NhZ2VzLmxlbmd0aCAqICgyICsgKENvbnN0LkNIQVRfTUVTU0FHRV9NQVgrMSkgKiBDb25zdC5CWVRFU19GT1JfQ0hBUikpO1xyXG5cdHZhciB2aWV3ID0gbmV3IERhdGFWaWV3KGJ1ZmZlcik7XHJcblx0dmFyIGJ1ZjE2ID0gbmV3IFVpbnQxNkFycmF5KGJ1ZmZlcik7XHJcblx0XHJcblx0dmFyIGluZGV4ID0gMCxcclxuXHRcdG9mZnNldCA9IDA7XHJcblx0XHJcblx0dmlldy5zZXRVaW50OCgwLCBNc2cuQ2hhdCk7XHJcblx0dmlldy5zZXRVaW50OCgxLCBtZXNzYWdlcy5sZW5ndGgpO1xyXG5cdFxyXG5cdG1lc3NhZ2VzLmZvckVhY2goKG1zZykgPT4ge1x0XHRcdFx0XHJcblx0XHR2aWV3LnNldFVpbnQ4KGluZGV4KzIsIG1zZy5pZCk7IC8v0LjQtCDQuNCz0YDQvtC60LBcclxuXHRcdHZpZXcuc2V0VWludDgoaW5kZXgrMywgbXNnLmxlbik7IC8v0YDQsNC30LzQtdGAINGB0L7QvtCx0YnQtdC90LjRj1xyXG5cdFx0YnVmMTYuc2V0KHRoaXMuc3RyaW5nVG9BcnJheUJ1ZmZlcihtc2cubXNnKSwgb2Zmc2V0KzMpOyAvL9GB0L7QvtCx0YnQtdC90LjQtVxyXG5cdFx0XHJcblx0XHRpbmRleCArPSAyICsgMiAqIENvbnN0LkNIQVRfTUVTU0FHRV9NQVg7XHJcblx0XHRvZmZzZXQgKz0gMSArIENvbnN0LkNIQVRfTUVTU0FHRV9NQVg7XHJcblx0fSk7XHRcclxuXHRyZXR1cm4gbmV3IFVpbnQ4QXJyYXkoYnVmZmVyKTtcclxufVxyXG5QYWNrZXRNYW5hZ2VyLnByb3RvdHlwZS5kQ2hhdFBhY2tldCA9IGZ1bmN0aW9uKHBhY2tldCkge1xyXG5cdHZhciBidWYxNiA9IG5ldyBVaW50MTZBcnJheShwYWNrZXQpOyBcdCBcclxuXHR2YXIgbWVzc2FnZXMgPSBbXTtcclxuXHR2YXIgY291bnQgPSB0aGlzLnZpZXcuZ2V0VWludDgoMSksXHJcblx0XHRsZW4gPSAwLFxyXG5cdFx0aW5kZXggPSAwLFxyXG5cdFx0b2Zmc2V0ID0gMDtcclxuXHRcclxuXHR3aGlsZShjb3VudC0tKSB7XHJcblx0XHRsZW4gPSB0aGlzLnZpZXcuZ2V0VWludDgoaW5kZXgrMyk7XHJcblx0XHRcclxuXHRcdG1lc3NhZ2VzLnB1c2goe1x0XHRcdFxyXG5cdFx0XHRpZDogdGhpcy52aWV3LmdldFVpbnQ4KGluZGV4KzIpLFxyXG5cdFx0XHRsZW46IGxlbixcdFx0XHRcclxuXHRcdFx0bXNnOiB0aGlzLmFycmF5QnVmZmVyVG9TdHJpbmcoYnVmMTYuc2xpY2Uob2Zmc2V0ICsgMywgbGVuICsgb2Zmc2V0ICsgMykpXHJcblx0XHR9KVxyXG5cdFx0XHRcdFxyXG5cdFx0aW5kZXggKz0gMiArIDIgKiBDb25zdC5DSEFUX01FU1NBR0VfTUFYO1xyXG5cdFx0b2Zmc2V0ICs9IDEgKyBDb25zdC5DSEFUX01FU1NBR0VfTUFYO1xyXG5cdH1cdFxyXG5cdHJldHVybiBtZXNzYWdlcztcclxufVxyXG5cclxuLy8tLS0tLS0tIFNUUklORyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblBhY2tldE1hbmFnZXIucHJvdG90eXBlLmFycmF5QnVmZmVyVG9TdHJpbmcgPSBmdW5jdGlvbihidWYpIHtcclxuIFx0cmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkobnVsbCwgYnVmKTtcclxufVxyXG5QYWNrZXRNYW5hZ2VyLnByb3RvdHlwZS5zdHJpbmdUb0FycmF5QnVmZmVyID0gZnVuY3Rpb24oc3RyKSB7IFx0XHJcbiAgXHR2YXIgYnVmVmlldyA9IG5ldyBVaW50MTZBcnJheShzdHIubGVuZ3RoKTsgLy8gMiBieXRlcyBmb3IgZWFjaCBjaGFyXHJcbiAgXHRmb3IgKHZhciBpPTAsIHN0ckxlbiA9IHN0ci5sZW5ndGg7IGkgPCBzdHJMZW47IGkrKykge1xyXG4gICAgXHRidWZWaWV3W2ldID0gc3RyLmNoYXJDb2RlQXQoaSk7XHJcbiAgXHR9XHJcbiAgXHRyZXR1cm4gYnVmVmlldztcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhY2tldE1hbmFnZXIiLCJpbXBvcnQgeyBDb25zdCB9IGZyb20gJ2NvbnN0LmpzJ1xyXG5cclxuXHJcbnZhciBDYW1lcmEgPSBmdW5jdGlvbihnYW1lKSB7XHJcblx0dGhpcy5nYW1lID0gZ2FtZTtcdFxyXG5cdHRoaXMuYXR0YWNoZWQgPSBudWxsO1xyXG5cdFxyXG5cdHRoaXMucG9zWCA9IDA7XHJcblx0dGhpcy5wb3NZID0gMDtcdFxyXG5cdHRoaXMub2Zmc2V0WCA9IDA7XHJcblx0dGhpcy5vZmZzZXRZID0gMDtcclxuXHR0aGlzLndpZHRoMiA9IDA7XHJcblx0dGhpcy5oZWlnaHQyID0gMDtcclxufVxyXG5cclxuQ2FtZXJhLnByb3RvdHlwZS5hdHRhY2ggPSBmdW5jdGlvbihwbGF5ZXIpIHtcclxuXHR0aGlzLmRldHRhY2goKTtcclxuXHRcclxuXHRwbGF5ZXIuYXR0YWNoZWQgPSB0cnVlO1xyXG5cdHRoaXMuYXR0YWNoZWQgPSBwbGF5ZXI7XHJcbn1cclxuQ2FtZXJhLnByb3RvdHlwZS5kZXR0YWNoID0gZnVuY3Rpb24oKSB7XHJcblx0aWYodGhpcy5hdHRhY2hlZCkge1xyXG5cdFx0dGhpcy5hdHRhY2hlZC5hdHRhY2hlZCA9IGZhbHNlO1xyXG5cdH1cdFxyXG5cdHRoaXMuYXR0YWNoZWQgPSBudWxsO1xyXG59XHJcblxyXG5DYW1lcmEucHJvdG90eXBlLnJlc2l6ZSA9IGZ1bmN0aW9uKHdpZHRoLCBoZWlnaHQpIHtcclxuXHR0aGlzLndpZHRoMiA9IE1hdGguZmxvb3Iod2lkdGggKiAwLjUpO1xyXG5cdHRoaXMuaGVpZ2h0MiA9IE1hdGguZmxvb3IoaGVpZ2h0ICogMC41KTtcclxufVxyXG5cclxuQ2FtZXJhLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbihjb250YWluZXIpIHtcclxuXHRpZighdGhpcy5hdHRhY2hlZCkgcmV0dXJuO1xyXG5cdFxyXG5cdHRoaXMucG9zWCA9IHRoaXMuYXR0YWNoZWQueDtcclxuXHR0aGlzLnBvc1kgPSB0aGlzLmF0dGFjaGVkLnk7XHJcblx0XHJcblx0Ly/QutC+0YHRgtGL0LvRjCDQvtGCINC/0L7Qu9C+0YEg0LzQtdC20LTRgyDRgtC10LrRgdGC0YPRgNCw0LzQuFxyXG5cdHRoaXMucG9zWCA9IE1hdGgucm91bmQoKHRoaXMucG9zWCArIE51bWJlci5FUFNJTE9OKSAqIDEwKSAqIDAuMTtcclxuXHR0aGlzLnBvc1kgPSBNYXRoLnJvdW5kKCh0aGlzLnBvc1kgKyBOdW1iZXIuRVBTSUxPTikgKiAxMCkgKiAwLjE7XHJcblx0XHJcblx0Ly/RhtC10L3RgtGA0LjRgNGD0LXQvCDQutCw0LzQtdGA0YMg0L3QsCDQuNCz0YDQvtC60LVcclxuXHR0aGlzLm9mZnNldFggPSAtQ29uc3QuU1RBR0VfU0NBTEUgKiB0aGlzLnBvc1ggKyB0aGlzLndpZHRoMjtcclxuXHR0aGlzLm9mZnNldFkgPSAtQ29uc3QuU1RBR0VfU0NBTEUgKiB0aGlzLnBvc1kgKyB0aGlzLmhlaWdodDI7XHRcclxuXHRjb250YWluZXIueCA9IHRoaXMub2Zmc2V0WDtcdFxyXG5cdGNvbnRhaW5lci55ID0gdGhpcy5vZmZzZXRZO1xyXG59XHJcblxyXG5DYW1lcmEucHJvdG90eXBlLmdldFBvc1ggPSBmdW5jdGlvbigpIHtcdFxyXG5cdHJldHVybiB0aGlzLnBvc1g7XHJcbn1cclxuQ2FtZXJhLnByb3RvdHlwZS5nZXRQb3NZID0gZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIHRoaXMucG9zWTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhbWVyYSIsImltcG9ydCAqIGFzIFBJWEkgZnJvbSAncGl4aS5qcydcclxuXHJcbmltcG9ydCB7IENvbnN0IH0gZnJvbSAnY29uc3QuanMnXHJcblxyXG5cclxudmFyIENFTExfU0laRSA9IDQ4O1xyXG5cclxudmFyIEludmVudG9yeVdpbmRvdyA9IGZ1bmN0aW9uICgpIHtcdFx0XHJcblx0dGhpcy5jb250YWluZXIgPSBuZXcgUElYSS5Db250YWluZXIoKTtcdFx0XHJcblx0dGhpcy5jZWxsVyA9IDEwO1xyXG5cdFxyXG5cdC8vdGhpcy5DRUxMX1NJWkUgPSA0ODtcclxuXHR0aGlzLk9GRlNFVF9UT1AgPSAyMDtcclxufVxyXG5JbnZlbnRvcnlXaW5kb3cucHJvdG90eXBlLmJ1aWxkID0gZnVuY3Rpb24oY2VsbFcsIGNlbGxIKSB7XHRcdFxyXG5cdHRoaXMuY2VsbFcgPSBjZWxsVztcclxuXHJcblx0Y29uc3QgZ3JhcGhpY3MgPSBuZXcgUElYSS5HcmFwaGljcygpO1xyXG5cdC8vcmVjdGFuZ2xlXHJcblx0Z3JhcGhpY3MuYmVnaW5GaWxsKDB4MkEyQzM3KTtcclxuXHRncmFwaGljcy5kcmF3UmVjdCgwLCAwLCBjZWxsVypDRUxMX1NJWkUsIGNlbGxIKkNFTExfU0laRSk7XHJcblx0Z3JhcGhpY3MuZW5kRmlsbCgpO1xyXG5cclxuXHRncmFwaGljcy5saW5lU3R5bGUoMSwgMHg5Njk2OTYsIDEpO1x0XHJcblx0Ly92ZXJ0aWNhbFxyXG5cdGZvcih2YXIgaSA9IDA7IGkgPD0gY2VsbFc7IGkrKykge1xyXG5cdFx0Z3JhcGhpY3MubW92ZVRvKGkgKiBDRUxMX1NJWkUsIDApO1xyXG5cdFx0Z3JhcGhpY3MubGluZVRvKGkgKiBDRUxMX1NJWkUsIGNlbGxIICogQ0VMTF9TSVpFKTtcclxuXHR9XHRcclxuXHQvL2hvcml6b250YWxcclxuXHRmb3IodmFyIGogPSAwOyBqIDw9IGNlbGxIOyBqKyspIHtcclxuXHRcdGdyYXBoaWNzLm1vdmVUbygwLCBqICogQ0VMTF9TSVpFKTtcclxuXHRcdGdyYXBoaWNzLmxpbmVUbyhjZWxsVyAqIENFTExfU0laRSwgaiAqIENFTExfU0laRSk7XHJcblx0fVxyXG5cdFxyXG5cdGdyYXBoaWNzLmNsb3NlUGF0aCgpO1xyXG5cdGdyYXBoaWNzLmVuZEZpbGwoKTtcclxuXHRcclxuXHR0aGlzLmNvbnRhaW5lci5hZGRDaGlsZChncmFwaGljcyk7XHRcclxuXHR0aGlzLmNvbnRhaW5lci52aXNpYmxlID0gZmFsc2U7XHJcbn1cdFxyXG5JbnZlbnRvcnlXaW5kb3cucHJvdG90eXBlLnJlc2l6ZSA9IGZ1bmN0aW9uKHdpZHRoLCBoZWlnaHQpIHtcclxuXHR0aGlzLmNvbnRhaW5lci54ID0gTWF0aC5mbG9vcih3aWR0aCAqIDAuNSAtICh0aGlzLmNlbGxXICogQ0VMTF9TSVpFKSAqIDAuNSk7XHJcblx0dGhpcy5jb250YWluZXIueSA9IHRoaXMuT0ZGU0VUX1RPUDtcclxufVxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG52YXIgSG90QmFyID0gZnVuY3Rpb24gKHN0eWxlKSB7XHJcblx0dGhpcy5zdHlsZSA9IHN0eWxlO1xyXG5cdHRoaXMuY29udGFpbmVyID0gbmV3IFBJWEkuQ29udGFpbmVyKCk7XHRcclxuXHR0aGlzLmdyYXBoaWNzID0gbmV3IFBJWEkuR3JhcGhpY3MoKTtcclxuXHR0aGlzLnNlbGVjdGVkID0gMDtcclxuXHR0aGlzLkJFVFdFRU5fQ0VMTFMgPSA1O1xyXG5cdHRoaXMuT0ZGU0VUX0JPVFRPTSA9IDIwO1xyXG59XHJcbkhvdEJhci5wcm90b3R5cGUuYnVpbGQgPSBmdW5jdGlvbigpIHtcclxuXHRjb25zdCBncmFwaGljcyA9IG5ldyBQSVhJLkdyYXBoaWNzKCk7XHJcblx0Z3JhcGhpY3MubGluZVN0eWxlKDEsIDB4OTY5Njk2KTtcclxuXHRncmFwaGljcy5iZWdpbkZpbGwoMHgyQTJDMzcsIDAuMik7IC8vYWxwaGFcdFxyXG5cdFx0XHRcclxuXHR2YXIgaSwgeCwgdGV4dCwgaW5kZXg7XHRcclxuXHRmb3IoaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHRcclxuXHRcdHggPSBpICogKENFTExfU0laRSArIHRoaXMuQkVUV0VFTl9DRUxMUyk7XHJcblx0XHRcclxuXHRcdGdyYXBoaWNzLmRyYXdSZWN0KHgsIDAsIENFTExfU0laRSwgQ0VMTF9TSVpFKTtcclxuXHRcdFxyXG5cdFx0Ly/Qv9C+0LTQv9C40YHRjCDQutC70LXRgtC+0LpcclxuXHRcdGluZGV4ID0gaSArIDE7XHJcblx0XHRpZihpbmRleCA9PSAxMClcdGluZGV4ID0gMDtcclxuXHRcdGluZGV4ID0gaW5kZXgudG9TdHJpbmcoKTtcclxuXHRcdFxyXG5cdFx0dGV4dCA9IG5ldyBQSVhJLlRleHQoaW5kZXgsIHRoaXMuc3R5bGUpO1xyXG5cdFx0dGV4dC54ID0geDtcclxuXHRcdHRleHQueSA9IC0yO1x0XHRcclxuXHRcdHRoaXMuY29udGFpbmVyLmFkZENoaWxkKHRleHQpO1xyXG5cdH1cclxuXHRncmFwaGljcy5lbmRGaWxsKCk7XHRcdFxyXG5cdFxyXG5cdHRoaXMuY29udGFpbmVyLmFkZENoaWxkKGdyYXBoaWNzKTtcclxuXHR0aGlzLmNvbnRhaW5lci5hZGRDaGlsZCh0aGlzLmdyYXBoaWNzKTsgXHJcbn1cclxuSG90QmFyLnByb3RvdHlwZS5zZWxlY3QgPSBmdW5jdGlvbihpbmRleCkge1x0XHJcblx0aW5kZXgtLTtcclxuXHRpZihpbmRleCA8IDApIGluZGV4ID0gOTtcclxuXHQvL2lmKGluZGV4ID4gOSkgaW5kZXggPSAwO1xyXG5cdHRoaXMuc2VsZWN0ZWQgPSBpbmRleDtcclxuXHRcclxuXHR0aGlzLmdyYXBoaWNzLmNsZWFyKCk7XHJcblx0dGhpcy5ncmFwaGljcy5saW5lU3R5bGUoMSwgMHhBOEExMDUpO1xyXG5cdHRoaXMuZ3JhcGhpY3MuZHJhd1JlY3QoaW5kZXggKiAoQ0VMTF9TSVpFICsgdGhpcy5CRVRXRUVOX0NFTExTKSwgMCwgQ0VMTF9TSVpFLCBDRUxMX1NJWkUpO1xyXG59XHJcbkhvdEJhci5wcm90b3R5cGUucmVzaXplID0gZnVuY3Rpb24od2lkdGgsIGhlaWdodCkge1xyXG5cdHRoaXMuY29udGFpbmVyLnggPSBNYXRoLmZsb29yKHdpZHRoICogMC41IC0gKDEwICogKENFTExfU0laRSArIHRoaXMuQkVUV0VFTl9DRUxMUykgKiAwLjUgKSk7XHJcblx0dGhpcy5jb250YWluZXIueSA9IE1hdGguZmxvb3IoaGVpZ2h0IC0gQ0VMTF9TSVpFIC0gdGhpcy5PRkZTRVRfQk9UVE9NKTtcdFxyXG59XHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbnZhciBTdGF0ZUJhciA9IGZ1bmN0aW9uIChzdHlsZSwgY29sb3JiZywgY29sb3IsIHJpZ2h0KSB7XHRcclxuXHR0aGlzLnN0eWxlID0gc3R5bGU7XHJcblx0dGhpcy5jb2xvcmJnID0gY29sb3JiZztcclxuXHR0aGlzLmNvbG9yID0gY29sb3I7XHJcblx0dGhpcy5yaWdodCA9IHJpZ2h0O1xyXG5cdHRoaXMuZ3JhcGhpY3MgPSBuZXcgUElYSS5HcmFwaGljcygpO1xyXG5cdHRoaXMuTEVOR1RIID0gMTU0O1xyXG5cdHRoaXMuSEVJR0hUID0gMjA7XHRcdFxyXG5cdHRoaXMuT0ZGU0VUX0JPVFRPTSA9IDQ1O1xyXG5cdFxyXG5cdHRoaXMubGFzdHBhciA9IG51bGw7XHJcblx0dGhpcy5sYXN0bWF4ID0gbnVsbDtcclxufVxyXG5TdGF0ZUJhci5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24oY3VyciwgbWF4KSB7XHJcblx0aWYodGhpcy5sYXN0cGFyID09IGN1cnIgJiYgdGhpcy5sYXN0bWF4ID09IG1heCkgcmV0dXJuO1xyXG5cdHRoaXMubGFzdHBhciA9IGN1cnI7XHJcblx0dGhpcy5sYXN0bWF4ID0gbWF4O1xyXG5cdFxyXG5cdHRoaXMuZ3JhcGhpY3MuY2xlYXIoKTtcclxuXHR0aGlzLmdyYXBoaWNzLmxpbmVTdHlsZSgxLCAweDk2OTY5Nik7XHJcblx0dGhpcy5ncmFwaGljcy5iZWdpbkZpbGwodGhpcy5jb2xvcmJnKTsgXHRcdFxyXG5cdHRoaXMuZ3JhcGhpY3MuZHJhd1JlY3QoMCwgMCwgdGhpcy5MRU5HVEgsIHRoaXMuSEVJR0hUKTtcclxuXHR0aGlzLmdyYXBoaWNzLmVuZEZpbGwoKTtcclxuXHQvL3RoaXMuZ3JhcGhpY3MuY2xvc2VQYXRoKCk7XHJcblx0XHRcclxuXHR0aGlzLmdyYXBoaWNzLmxpbmVTdHlsZSgwLCAweDk2OTY5Nik7XHJcblx0dGhpcy5ncmFwaGljcy5iZWdpbkZpbGwodGhpcy5jb2xvcik7IFx0XHJcblx0dmFyIGxlbiA9IE1hdGguZmxvb3IodGhpcy5MRU5HVEggKiBjdXJyIC8gbWF4KSAtIDE7XHJcblx0aWYodGhpcy5yaWdodCkge1xyXG5cdFx0dGhpcy5ncmFwaGljcy5kcmF3UmVjdCh0aGlzLkxFTkdUSCAtIGxlbiAtIDEsIDEsIGxlbiwgdGhpcy5IRUlHSFQtMSk7XHJcblx0fSBlbHNlIHtcdFx0XHRcclxuXHRcdHRoaXMuZ3JhcGhpY3MuZHJhd1JlY3QoMCwgMSwgbGVuLCB0aGlzLkhFSUdIVC0xKTtcclxuXHR9XHRcdFxyXG5cdHRoaXMuZ3JhcGhpY3MuZW5kRmlsbCgpO1xyXG59XHJcblN0YXRlQmFyLnByb3RvdHlwZS5yZXNpemUgPSBmdW5jdGlvbih3aWR0aCwgaGVpZ2h0KSB7XHJcblx0dmFyIGJjID0gNSwgLy9CRVRXRUVOX0NFTExTXHJcblx0XHRsZW4gPSAxMCAqIChDRUxMX1NJWkUgKyBiYykgKiAwLjU7XHJcblx0aWYodGhpcy5yaWdodCkge1xyXG5cdFx0dGhpcy5ncmFwaGljcy54ID0gTWF0aC5mbG9vcih3aWR0aCAqIDAuNSArIGxlbiAtIHRoaXMuTEVOR1RIIC0gYmMpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHR0aGlzLmdyYXBoaWNzLnggPSBNYXRoLmZsb29yKHdpZHRoICogMC41IC0gbGVuKTtcclxuXHR9XHRcclxuXHR0aGlzLmdyYXBoaWNzLnkgPSBNYXRoLmZsb29yKGhlaWdodCAtIENFTExfU0laRSAtIHRoaXMuT0ZGU0VUX0JPVFRPTSk7XHRcclxufVxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG52YXIgR3VpID0gZnVuY3Rpb24oZ2FtZSkge1xyXG5cdHRoaXMuZ2FtZSA9IGdhbWU7XHRcclxuXHR0aGlzLnBsYXllciA9IG51bGw7XHJcblx0dGhpcy5vcGVuZWQgPSBmYWxzZTtcdFxyXG5cdFxyXG5cdGNvbnN0IHN0eWxlID0gbmV3IFBJWEkuVGV4dFN0eWxlKHtcclxuICAgXHRcdGZpbGw6IFwid2hpdGVcIixcclxuICAgIFx0Zm9udEZhbWlseTogXCJWZXJkYW5hXCIsXHJcbiAgICBcdGZvbnRTaXplOiAxMiwgICAgXHRcclxuICAgIFx0c3Ryb2tlVGhpY2tuZXNzOiAyXHJcblx0fSk7XHRcclxuXHRcclxuXHR0aGlzLmludmVudG9yeSA9IG5ldyBJbnZlbnRvcnlXaW5kb3coKTtcdFxyXG5cdHRoaXMuaG90QmFyID0gbmV3IEhvdEJhcihzdHlsZSk7XHJcblx0dGhpcy5oZWFsdGhCYXIgPSBuZXcgU3RhdGVCYXIoc3R5bGUsIDB4NEQwMDAwLCAweEZGMDAwMCwgZmFsc2UpO1xyXG5cdHRoaXMubWFuYUJhciA9IG5ldyBTdGF0ZUJhcihzdHlsZSwgMHgwMDAwNEQsIDB4MDAwMEZGLCB0cnVlKTtcclxuXHRcclxuXHR0aGlzLmNvbnRhaW5lciA9IG51bGw7XHJcbn1cclxuXHJcbi8vIEBSZW5kZXJcclxuR3VpLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oY29udGFpbmVyKSB7XHJcblx0dGhpcy5wbGF5ZXIgPSB0aGlzLmdhbWUuYWN0aXZlUGxheWVyO1x0XHJcblx0dGhpcy5pbnB1dCA9IHRoaXMuZ2FtZS5pbnB1dDtcdFxyXG5cclxuXHR2YXIgdyA9IDEwLFxyXG5cdFx0aCA9IDM7XHRcdFxyXG5cdFx0XHJcblx0dGhpcy5pbnZlbnRvcnkuYnVpbGQodywgaCk7XHRcclxuXHR0aGlzLmhvdEJhci5idWlsZCgpO1xyXG5cdHRoaXMuaGVhbHRoQmFyLnVwZGF0ZSg1MCwgMTAwKTtcclxuXHR0aGlzLm1hbmFCYXIudXBkYXRlKDIyLCAxMDApO1xyXG5cdFxyXG5cdHRoaXMuY29udGFpbmVyID0gbmV3IFBJWEkuQ29udGFpbmVyKCk7XHJcblx0dGhpcy5jb250YWluZXIuYWRkQ2hpbGQodGhpcy5pbnZlbnRvcnkuY29udGFpbmVyKTtcclxuXHR0aGlzLmNvbnRhaW5lci5hZGRDaGlsZCh0aGlzLmhvdEJhci5jb250YWluZXIpO1x0XHJcblx0dGhpcy5jb250YWluZXIuYWRkQ2hpbGQodGhpcy5oZWFsdGhCYXIuZ3JhcGhpY3MpO1xyXG5cdHRoaXMuY29udGFpbmVyLmFkZENoaWxkKHRoaXMubWFuYUJhci5ncmFwaGljcyk7XHJcblx0XHJcblx0Y29udGFpbmVyLmFkZENoaWxkKHRoaXMuY29udGFpbmVyKTtcdFxyXG59XHJcblxyXG5HdWkucHJvdG90eXBlLmZyZWUgPSBmdW5jdGlvbigpIHt9XHJcblxyXG5HdWkucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKCkge1xyXG5cdGlmKCF0aGlzLnBsYXllcikgcmV0dXJuO1xyXG5cdFxyXG5cdHRoaXMuaGVhbHRoQmFyLnVwZGF0ZSh0aGlzLnBsYXllci5oZWFsdGgsIHRoaXMucGxheWVyLmhlYWx0aE1heCk7XHJcblx0Ly90aGlzLm1hbmFCYXIudXBkYXRlKFxyXG5cdFxyXG5cdC8vaG90IGJhclxyXG5cdC8va2V5cyAwLTkgLS0+IGNvZGUgNDgtNTcgLS0+IDAtOVxyXG5cdHZhciBrZXkgPSB0aGlzLmlucHV0LmdldFByZXNzZWQoKTtcclxuXHRpZihrZXkgPiA0NyAmJiBrZXkgPCA1OCkge1xyXG5cdFx0a2V5IC09IDQ4O1x0XHRcclxuXHRcdHRoaXMuaG90QmFyLnNlbGVjdChrZXkpO1xyXG5cdFx0dGhpcy5pbnB1dC5wcmVzc2VkID0gbnVsbDtcclxuXHR9XHRcclxuXHRcclxuXHRpZih0aGlzLm9wZW5lZCkge1xyXG5cdFx0Ly9UT0RPINC+0LHRgNCw0LHQvtGC0LrQsCBpbnB1dCDQsiDQuNC90LLQtdC90YLQsNGA0LVcclxuXHR9XHJcbn1cclxuXHJcbi8vIEBSZW5kZXJcclxuR3VpLnByb3RvdHlwZS5yZXNpemUgPSBmdW5jdGlvbih3aWR0aCwgaGVpZ2h0KSB7XHJcblx0dGhpcy5pbnZlbnRvcnkucmVzaXplKHdpZHRoLCBoZWlnaHQpO1xyXG5cdHRoaXMuaG90QmFyLnJlc2l6ZSh3aWR0aCwgaGVpZ2h0KTtcdFxyXG5cdHRoaXMuaGVhbHRoQmFyLnJlc2l6ZSh3aWR0aCwgaGVpZ2h0KTtcclxuXHR0aGlzLm1hbmFCYXIucmVzaXplKHdpZHRoLCBoZWlnaHQpO1xyXG59XHJcblxyXG5HdWkucHJvdG90eXBlLmlzT3BlbiA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcy5vcGVuZWQ7IH1cclxuXHJcbkd1aS5wcm90b3R5cGUub3BlbkludmVudG9yeSA9IGZ1bmN0aW9uKGludmVudG9yeSkge1xyXG5cdGlmKCF0aGlzLmNvbnRhaW5lcikge1xyXG5cdFx0dGhpcy5vcGVuZWQgPSBmYWxzZTtcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblx0dGhpcy5vcGVuZWQgPSAhdGhpcy5vcGVuZWQ7XHRcdFxyXG5cdHRoaXMuaW52ZW50b3J5LmNvbnRhaW5lci52aXNpYmxlID0gdGhpcy5vcGVuZWQ7XHJcbn1cclxuXHJcbkd1aS5wcm90b3R5cGUub3BlbkNoZXN0ID0gZnVuY3Rpb24oaW52ZW50b3J5KSB7fVxyXG5cclxuR3VpLnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uKCkge1xyXG5cdHRoaXMub3BlbmVkID0gZmFsc2U7XHJcbn1cclxuXHJcbi8qY2lyY2xlLm1vdXNlb3ZlciA9IGZ1bmN0aW9uKG1vdXNlRGF0YSkgeyAgIFxyXG4gIFx0bWVzc2FnZS54ID0gbW91c2VEYXRhLmRhdGEuZ2xvYmFsLng7XHJcbiAgXHRtZXNzYWdlLnkgPSBtb3VzZURhdGEuZGF0YS5nbG9iYWwueTtcclxufVxyXG5jaXJjbGUubW91c2VvdXQgPSBmdW5jdGlvbihtb3VzZURhdGEpIHtcclxufSovXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEd1aSIsImltcG9ydCAqIGFzIFBJWEkgZnJvbSAncGl4aS5qcydcclxuaW1wb3J0IFN0YXRzIGZyb20gJ3N0YXRzLWpzJ1xyXG5cclxuXHJcbmltcG9ydCB7IENvbnN0LCBUaWxlVHlwZSB9IGZyb20gJ2NvbnN0LmpzJ1xyXG5pbXBvcnQgU3ByaXRlcyBmcm9tICdyZW5kZXIvc3ByaXRlcy5qcydcclxuaW1wb3J0IFBsYXllciBmcm9tICdlbnRpdHkvcGxheWVyLmpzJ1xyXG5pbXBvcnQgTW9iIGZyb20gJ2VudGl0eS9tb2IuanMnXHJcbmltcG9ydCBDYW1lcmEgZnJvbSAncmVuZGVyL2NhbWVyYS5qcydcclxuaW1wb3J0IFZpc2liaWxpdHkgZnJvbSAncmVuZGVyL3Zpc2liaWxpdHkuanMnXHJcblxyXG5cclxudmFyIFJlbmRlciA9IGZ1bmN0aW9uKGdhbWUpIHtcdFxyXG5cdHRoaXMuZ2FtZSA9IGdhbWU7XHJcblx0dGhpcy5ndWkgPSBnYW1lLmd1aTtcclxuXHR0aGlzLmVudGl0eWxpc3QgPSBnYW1lLmVudGl0eWxpc3Q7XHJcblx0XHJcblx0dGhpcy52aWV3ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUtY2FudmFzJyk7XHJcblx0dGhpcy5oUmVuZGVyID0gMDsgIFxyXG5cdHRoaXMucmVuZGVyZXIgPSBudWxsO1x0XHJcblx0dGhpcy5jYW1lcmEgPSBudWxsO1xyXG5cdC8v0LrQvtC90YLQtdC50L3QtdGA0YtcclxuXHR0aGlzLnN0YWdlID0gbnVsbDtcclxuXHR0aGlzLndvcmxkQ29udGFpbmVyID0gbnVsbDtcdFxyXG5cdHRoaXMuc2NyZWVuQ29udGFpbmVyID0gbnVsbDtcclxuXHQvL1xyXG5cdHRoaXMubWVzaCA9IG51bGw7XHRcclxuXHRcdFx0XHJcbiAgICB0aGlzLnJlbmRlcmluZyA9IGZhbHNlO1x0XHRcdFxyXG5cdHRoaXMuaW5pdGlhbGl6ZSA9IGZhbHNlO1x0IFxyXG5cdC8v0LLRgdGPINC40LPRgNC+INCz0YDQsNGE0LjQutCwXHJcblx0dGhpcy5zcHJpdGVzID0gbmV3IFNwcml0ZXModGhpcyk7XHJcblx0dGhpcy50ZXhhZGRlZCA9IGZhbHNlO1xyXG5cdHRoaXMudGV4bG9hZGVkID0gZmFsc2U7XHRcclxuXHRcdFxyXG4gICAgdGhpcy5ybmRQZXJNc2Vjb25kID0gQ29uc3QuUkVOREVSX1BFUl9TRUNPTkQgLyAxMDAwOyAgXHJcblx0dGhpcy5ub3cgPSAwO1xyXG5cdHRoaXMubGFzdFRpbWUgPSAwOyBcdFx0XHJcblx0dGhpcy5kZWx0YSA9IDA7XHJcblx0dGhpcy5sYXN0RGVsdGEgPSAwO1x0XHJcblx0XHJcblx0dGhpcy5yZXNpemUgPSB0aGlzLnJlc2l6ZS5iaW5kKHRoaXMpO1xyXG5cdHRoaXMubG9zZUNvbnRleHQgPSB0aGlzLmxvc2VDb250ZXh0LmJpbmQodGhpcyk7XHJcbn1cclxuXHJcblJlbmRlci5wcm90b3R5cGUuZ2V0RGVsdGEgPSBmdW5jdGlvbigpIHtcdFxyXG5cdHRoaXMubm93ID0gRGF0ZS5ub3coKTtcclxuXHR0aGlzLmRlbHRhID0gKHRoaXMubm93IC0gdGhpcy5sYXN0VGltZSkgKiB0aGlzLnJuZFBlck1zZWNvbmQ7XHJcblx0dGhpcy5kZWx0YSA9ICh0aGlzLmRlbHRhICsgdGhpcy5sYXN0RGVsdGEpICogMC41O1xyXG5cdFxyXG5cdHRoaXMubGFzdFRpbWUgPSB0aGlzLm5vdztcdFxyXG5cdHRoaXMubGFzdERlbHRhID0gdGhpcy5kZWx0YTtcclxuXHRyZXR1cm4gdGhpcy5kZWx0YTtcclxufVxyXG5cclxuUmVuZGVyLnByb3RvdHlwZS5wcmVsb2FkVGV4dHVyZXMgPSBmdW5jdGlvbihjYWxsYmFjaykge1xyXG5cdHZhciBhZnRlckxvYWQgPSAoKSA9PiB7XHJcblx0XHRjb25zb2xlLmxvZyhcItCi0LXQutGB0YLRg9GA0Ysg0LfQsNCz0YDRg9C20LXQvdGLXCIpXHJcblx0XHRcclxuXHRcdGlmKHRoaXMuc3ByYWRkZWQpIHJldHVybjtcclxuXHRcdHRoaXMuc3ByYWRkZWQgPSB0cnVlO1x0XHRcdFxyXG5cdFx0Ly/Qt9Cw0LPRgNGD0LfQutCwINCw0L3QuNC80LDRhtC40LlcdFx0XHJcblx0XHR0aGlzLnNwcml0ZXMuY3JlYXRlQW5pbWF0aW9uRnJhbWVzKCk7XHRcdFxyXG5cdFx0Ly9jb25zb2xlLmxvZyhcImFmdGVyIHNwcml0ZXMgbG9hZFwiKTtcdFx0XHRcclxuXHR9XHJcblx0Ly/Qs9C+0LHQsNC70YzQvdGL0Lkgd2luZG93INC60L7RgdGC0YvQu9GMINC00LvRjyBzZWxmL2NsaWVudFxyXG5cdGlmKHdpbmRvdy50ZXhsb2FkZWQpIHtcclxuXHRcdGFmdGVyTG9hZCgpO1xyXG5cdFx0Y2FsbGJhY2soKTtcclxuXHRcdHJldHVybjtcclxuXHR9XHRcclxuXHRcclxuXHRQSVhJLmxvYWRlci5hZGQoW1x0XHJcblx0XHQnaW1nL21vYnMuanNvbicsXHRcdFxyXG5cdFx0J2ltZy90aWxlcy5qc29uJywgIFxyXG5cdFx0J2ltZy9wcm9qZWN0aWxlcy5qc29uJyBcdCAgXHRcclxuICBcdF0pXHRcclxuICBcdC5sb2FkKChsb2FkZXIpID0+IHtcdFx0XHJcblx0XHR3aW5kb3cudGV4bG9hZGVkID0gdHJ1ZTtcdFx0XHJcblx0XHRhZnRlckxvYWQoKTtcclxuXHRcdGNhbGxiYWNrKCk7XHRcdFx0XHRcdFx0XHJcblx0fSlcclxuXHQub25FcnJvci5hZGQoKGUpID0+IHtcclxuXHRcdHdpbmRvdy50ZXhsb2FkZWQgPSBmYWxzZTtcclxuXHRcdFBJWEkubG9hZGVyLmRlc3Ryb3koKTtcclxuXHRcdGNvbnNvbGUubG9nKGUpO1x0XHRcclxuXHR9KTtcclxufVxyXG5cclxuUmVuZGVyLnByb3RvdHlwZS5jb21waWxlU2hhZGVyID0gZnVuY3Rpb24oKSB7XHRcclxuXHQvL9Cy0LXRgNGI0LjQvdC90YvQuSDRiNC10LnQtNC10YAgXHRcclxuXHR2YXIgdnJ0ID0gYHByZWNpc2lvbiBtZWRpdW1wIGZsb2F0O1xyXG5cclxuICAgIFx0YXR0cmlidXRlIHZlYzIgYVZlcnRleFBvc2l0aW9uO1xyXG4gICAgXHRhdHRyaWJ1dGUgdmVjMiBhVXZzO1xyXG5cclxuICAgIFx0dW5pZm9ybSBtYXQzIHRyYW5zbGF0aW9uTWF0cml4O1xyXG4gICAgXHR1bmlmb3JtIG1hdDMgcHJvamVjdGlvbk1hdHJpeDtcclxuXHJcbiAgICBcdHZhcnlpbmcgdmVjMiB2VXZzO1xyXG5cclxuICAgIFx0dm9pZCBtYWluKCkge1xyXG4gICAgICAgIFx0dlV2cyA9IGFVdnM7XHJcbiAgICAgICAgXHRnbF9Qb3NpdGlvbiA9IHZlYzQoKHByb2plY3Rpb25NYXRyaXggKiB0cmFuc2xhdGlvbk1hdHJpeCAqIHZlYzMoYVZlcnRleFBvc2l0aW9uLCAxLjApKS54eSwgMC4wLCAxLjApO1xyXG4gICAgXHR9YDtcclxuXHRcclxuXHQvL9GE0YDQsNCz0LzQtdC90YLQvdGL0Lkg0YjQtdC50LTQtdGAXHJcblx0dmFyIGZyYWcgPSBgcHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7XHJcblxyXG4gICAgXHR2YXJ5aW5nIHZlYzIgdlV2cztcclxuICAgIFx0dW5pZm9ybSBzYW1wbGVyMkQgdVNhbXBsZXJUZXh0dXJlO1xyXG5cclxuICAgIFx0dm9pZCBtYWluKCkge1xyXG4gICAgICAgIFx0Z2xfRnJhZ0NvbG9yID0gdGV4dHVyZTJEKHVTYW1wbGVyVGV4dHVyZSwgdlV2cyk7XHJcbiAgICBcdH1cclxuXHRgO1xyXG5cdFxyXG5cdFxyXG5cdGNvbnN0IHByb2dyYW0gPSBQSVhJLlByb2dyYW0uZnJvbSh2cnQsIGZyYWcsIFwiYmFzZS1zaGFkZXJcIik7XHJcblx0dGhpcy5wcm9ncmFtID0gcHJvZ3JhbTtcclxufVxyXG5cclxuXHRcclxuUmVuZGVyLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oKSB7XHRcclxuXHRjb25zb2xlLmxvZyhcInJlbmRlciBpbml0XCIpO1xyXG5cdFxyXG5cdFBJWEkudXRpbHMuc2tpcEhlbGxvKCk7ICAgIFxyXG5cdFBJWEkuc2V0dGluZ3MuU0NBTEVfTU9ERSA9IFBJWEkuU0NBTEVfTU9ERVMuTkVBUkVTVDtcclxuXHRcdFx0XHJcblx0aWYoIXRoaXMucmVuZGVyZXIpIHtcclxuXHRcdHRoaXMucmVuZGVyZXIgPSBuZXcgUElYSS5XZWJHTFJlbmRlcmVyKDgwMCwgNjAwLCB7XHRcdFx0XHRcclxuXHRcdFx0dmlldzogdGhpcy52aWV3LFx0XHJcblx0XHRcdHRyYW5zcGFyZW50OiBmYWxzZSxcclxuXHRcdFx0YW50aWFsaWFzOiBmYWxzZSxcclxuXHRcdFx0cmF0aW86IDIuMFxyXG5cdFx0fSk7XHJcblx0fVx0XHRcclxuXHRcclxuXHR0aGlzLnJlbmRlcmVyLmJhY2tncm91bmRDb2xvciA9IDB4MDAwMDAwO1x0XHJcblx0Ly/Qs9C70LDQstC90YvQuSDQutC+0L3RgtC10LnQvdC10YBcclxuXHR0aGlzLnN0YWdlID0gbmV3IFBJWEkuQ29udGFpbmVyKCk7XHRcclxuXHQvL2VudGl0eSwgd29ybGQg0LrQvtC90YLQtdC50L3QtdGAXHJcblx0dGhpcy53b3JsZENvbnRhaW5lciA9IG5ldyBQSVhJLkNvbnRhaW5lcigpO1xyXG5cdHRoaXMud29ybGRDb250YWluZXIuc2NhbGUuc2V0KENvbnN0LlNUQUdFX1NDQUxFKTtcdFxyXG5cdC8vXHRcdFxyXG5cdC8vdGhpcy5jb21waWxlU2hhZGVyKCk7XHRcclxuXHRcclxuXHQvL2d1aSDQutC+0L3RgtC10LnQvdC10YBcclxuXHR0aGlzLnNjcmVlbkNvbnRhaW5lciA9IG5ldyBQSVhJLkNvbnRhaW5lcigpO1xyXG5cdC8vdGhpcy5zY3JlZW5Db250YWluZXIuc2NhbGUuc2V0KENvbnN0LlNUQUdFX1NDQUxFKTtcclxuXHRcdFxyXG5cdFx0XHRcclxuXHR0aGlzLnN0YWdlLmFkZENoaWxkKHRoaXMud29ybGRDb250YWluZXIpO1xyXG5cdHRoaXMuc3RhZ2UuYWRkQ2hpbGQodGhpcy5zY3JlZW5Db250YWluZXIpO1xyXG5cdC8v0LrQsNC80LXRgGFcclxuXHR0aGlzLmNhbWVyYSA9IG5ldyBDYW1lcmEodGhpcy5nYW1lKTtcdFx0XHJcblx0XHJcblx0dGhpcy5yZXNpemUoKTtcdFx0XHRcdFxyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnJlc2l6ZSwgZmFsc2UpO1x0XHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3VubG9hZCcsIHRoaXMubG9zZUNvbnRleHQsIGZhbHNlKTtcclxuXHRcclxuXHQvL9GB0YfQtdGC0YfQuNC6IGZwc1xyXG5cdHRoaXMuc3RhdHMgPSBuZXcgU3RhdHMoKTtcclxuXHR0aGlzLnN0YXRzLnNldE1vZGUoMCk7IC8vIDA6IGZwcywgMTogbXNcdFxyXG5cdHRoaXMuc3RhdHMuZG9tRWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcblx0dGhpcy5zdGF0cy5kb21FbGVtZW50LnN0eWxlLnJpZ2h0ID0gJzBweCc7XHJcblx0dGhpcy5zdGF0cy5kb21FbGVtZW50LnN0eWxlLnRvcCA9ICcwcHgnOyBcclxuXHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuc3RhdHMuZG9tRWxlbWVudCk7XHJcblx0XHJcblx0dGhpcy5pbml0aWFsaXplID0gdHJ1ZTtcclxufVxyXG5cclxuUmVuZGVyLnByb3RvdHlwZS5mcmVlID0gZnVuY3Rpb24oKSB7XHJcblx0aWYodGhpcy5pbml0aWFsaXplKSB7XHJcblx0XHRjb25zb2xlLmxvZyhcInJlbmRlciBmcmVlXCIpO1xyXG5cdFx0dGhpcy5yZW5kZXJpbmcgPSBmYWxzZTsgXHJcblx0XHR0aGlzLmNsZWFyU3RhZ2UoKTtcdFxyXG5cdFx0dGhpcy5zdGFnZS5kZXN0cm95KCk7XHJcblx0XHRcdFx0XHJcblx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5yZXNpemUsIGZhbHNlKTtcclxuXHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd1bmxvYWQnLCB0aGlzLmxvc2VDb250ZXh0LCBmYWxzZSk7XHJcblx0XHQvL9GB0YfQtdGC0YfQuNC6IGZwc1xyXG5cdFx0ZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0aGlzLnN0YXRzLmRvbUVsZW1lbnQpO1xyXG5cdH0gIFxyXG59XHJcblxyXG5SZW5kZXIucHJvdG90eXBlLnByZVJlbmRlciA9IGZ1bmN0aW9uKCkge1xyXG5cdC8vZ3VpXHJcblx0dGhpcy5ndWkuaW5pdCh0aGlzLnNjcmVlbkNvbnRhaW5lcik7XHRcclxuXHRcclxuXHR0aGlzLm1lc2ggPSBuZXcgUElYSS5tZXNoLk1lc2goUElYSS5UZXh0dXJlLmZyb21GcmFtZSgndGlsZXMucG5nJyksIG51bGwsIG51bGwsIG51bGwsXHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0ICAgUElYSS5tZXNoLk1lc2guRFJBV19NT0RFUy5UUklBTkdMRVMpO1x0XHRcclxuXHR0aGlzLnZpc2liaWxpdHkgPSBuZXcgVmlzaWJpbGl0eSh0aGlzLmdhbWUud29ybGQuZ2V0TWFwKCksIHRoaXMubWVzaCk7XHRcclxuXHR0aGlzLndvcmxkQ29udGFpbmVyLmFkZENoaWxkQXQodGhpcy5tZXNoLCAwKTtcclxufVxyXG5cclxuUmVuZGVyLnByb3RvdHlwZS5zdGFydFJlbmRlciA9IGZ1bmN0aW9uKCkge1xyXG5cdC8vIGNhbmNlbCBleGlzdGluZyByZW5kZXIgY3ljbGVcclxuXHRpZiAodGhpcy5oUmVuZGVyKSB7XHJcbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5oUmVuZGVyKTtcclxuICAgICAgICB0aGlzLmhSZW5kZXIgPSAwO1xyXG4gICAgfVx0XHJcblx0XHJcblx0dGhpcy5wcmVSZW5kZXIoKTtcclxuXHRcdFx0XHJcblx0dmFyIHJlbmRlckN5Y2xlID0gKCkgPT4ge1xyXG5cdFx0aWYoIXRoaXMucmVuZGVyaW5nKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cdFx0XHRcclxuXHRcdHRoaXMuaFJlbmRlciA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShyZW5kZXJDeWNsZSk7XHJcblx0XHRcclxuXHRcdHRoaXMuZW50aXR5bGlzdC5yZW5kZXIoKTtcclxuXHRcdHRoaXMuY2FtZXJhLnVwZGF0ZSh0aGlzLndvcmxkQ29udGFpbmVyKTtcclxuXHRcdFx0XHJcblx0XHR0aGlzLnZpc2liaWxpdHkuY29tcHV0ZSh0aGlzLmdhbWUuYWN0aXZlUGxheWVyKTtcclxuXHRcdFxyXG5cdFx0dGhpcy5yZW5kZXJlci5yZW5kZXIodGhpcy5zdGFnZSk7XHRcdFx0XHJcblx0XHR0aGlzLnN0YXRzLnVwZGF0ZSgpO1x0XHRcdFxyXG5cdH1cdFxyXG5cdFxyXG5cdGNvbnNvbGUubG9nKFwiIyMjIFJlbmRlciBzdGFydCAjIyNcIik7XHRcclxuXHR0aGlzLnJlbmRlcmluZyA9IHRydWU7XHJcblx0dGhpcy5sYXN0VGltZSA9IERhdGUubm93KCk7XHJcblx0cmVuZGVyQ3ljbGUoKTtcdFxyXG59XHJcblxyXG5SZW5kZXIucHJvdG90eXBlLmZvcmNlZFJlYnVpbGRNZXNoID0gZnVuY3Rpb24oKSB7XHJcblx0dGhpcy52aXNpYmlsaXR5LmNvbXB1dGUodGhpcy5nYW1lLmFjdGl2ZVBsYXllciwgdHJ1ZSk7XHJcbn1cclxuXHJcblJlbmRlci5wcm90b3R5cGUuYWRkVG9TdGFnZUVudGl0eSA9IGZ1bmN0aW9uKGVudGl0eSkge1xyXG5cdGlmKCF0aGlzLndvcmxkQ29udGFpbmVyKSB7XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cdFx0XHRcdFxyXG5cdC8v0YHQvtC30LTQsNGC0Ywg0LrQvtC90YLQtdC50L3QtdGAINC4INGB0L/RgNCw0LnRgtGLXHJcblx0aWYoIWVudGl0eS5jb250YWluZXIpIHtcdFx0XHJcblx0XHRlbnRpdHkuY29udGFpbmVyID0gbmV3IFBJWEkuQ29udGFpbmVyKCk7XHJcblx0XHQvKmlmKGVudGl0eSBpbnN0YW5jZW9mIE1vYikgeyAvL1RFU1RcclxuXHRcdFx0ZW50aXR5LmdyYXBoaWNzID0gbmV3IFBJWEkuR3JhcGhpY3MoKTtcclxuXHRcdH0qL1x0XHRcdFx0XHRcdFx0XHRcclxuXHRcdGVudGl0eS5pbml0U3ByaXRlcygpO1xyXG5cdFx0aWYoZW50aXR5IGluc3RhbmNlb2YgUGxheWVyKSB7XHRcdFx0XHRcclxuXHRcdFx0ZW50aXR5LmFkZE5hbWVMYWJlbCgpO1xyXG5cdFx0fVxyXG5cdH0gXHJcblx0Ly/QtNC+0LHQsNCy0LjRgtGMINC60L7QvdGC0LXQudC90LXRgFxyXG5cdGlmKCFlbnRpdHkuY29udGFpbmVyLmFkZGVkKSB7XHJcblx0XHRlbnRpdHkuY29udGFpbmVyLmFkZGVkID0gdHJ1ZTtcclxuXHRcdHRoaXMud29ybGRDb250YWluZXIuYWRkQ2hpbGQoZW50aXR5LmNvbnRhaW5lcik7XHJcblx0fVx0XHJcbn1cclxuXHJcblJlbmRlci5wcm90b3R5cGUucmVtb3ZlRnJvbVN0YWdlRW50aXR5ID0gZnVuY3Rpb24oZW50aXR5KSB7XHJcblx0aWYoZW50aXR5LmNvbnRhaW5lci5hZGRlZClcclxuXHRcdHRoaXMud29ybGRDb250YWluZXIucmVtb3ZlQ2hpbGQoZW50aXR5LmNvbnRhaW5lcik7XHJcbn1cclxuXHJcblJlbmRlci5wcm90b3R5cGUuY2xlYXJTdGFnZSA9IGZ1bmN0aW9uKCkge1xyXG5cdGlmKHRoaXMuc3RhZ2UpIHtcclxuXHRcdHRoaXMuc3RhZ2UuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGRyZW4pID0+IHtcdFxyXG5cdFx0XHR0aGlzLnN0YWdlLnJlbW92ZUNoaWxkKGNoaWxkcmVuKTtcclxuXHRcdH0pO1xyXG5cdH1cdFxyXG59XHJcblxyXG5SZW5kZXIucHJvdG90eXBlLmxvc2VDb250ZXh0ID0gZnVuY3Rpb24oKSB7XHJcblx0aWYodGhpcy5yZW5kZXJlcikge1xyXG5cdFx0Ly9mb3JjZSBsb3NlIGNvbnRleHRcclxuXHRcdHZhciBleHQgPSB0aGlzLnJlbmRlcmVyLmdsLmdldEV4dGVuc2lvbignV0VCR0xfbG9zZV9jb250ZXh0Jyk7XHRcclxuXHRcdGlmKGV4dCkge1xyXG5cdFx0XHRleHQubG9zZUNvbnRleHQoKTtcclxuXHRcdH1cclxuXHR9XHRcclxufVxyXG5cclxuUmVuZGVyLnByb3RvdHlwZS5yZXNpemUgPSBmdW5jdGlvbigpIHtcdFxyXG5cdHZhciB3ID0gd2luZG93LmlubmVyV2lkdGg7ICAgIFxyXG5cdHZhciBoID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG5cdHRoaXMucmVuZGVyZXIudmlldy5zdHlsZS53aWR0aCA9IHcgKyBcInB4XCI7ICAgIFxyXG5cdHRoaXMucmVuZGVyZXIudmlldy5zdHlsZS5oZWlnaHQgPSBoICsgXCJweFwiO1xyXG5cdHRoaXMucmVuZGVyZXIucmVzaXplKHcsIGgpO1xyXG5cdHRoaXMuY2FtZXJhLnJlc2l6ZSh3LCBoKTtcdFxyXG5cdHRoaXMuZ3VpLnJlc2l6ZSh3LCBoKTtcclxufVxyXG5cclxuLypSZW5kZXIucHJvdG90eXBlLmdldFN0YWdlQ29udGFpbmVyID0gZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIHRoaXMuc3RhZ2U7XHJcbn0qL1xyXG5cclxuXHJcblJlbmRlci5wcm90b3R5cGUuZ2V0Q2FtZXJhID0gZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIHRoaXMuY2FtZXJhO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVuZGVyOyIsImltcG9ydCAqIGFzIFBJWEkgZnJvbSAncGl4aS5qcydcclxuXHJcblxyXG52YXIgU3ByaXRlcyA9IGZ1bmN0aW9uKHJlbmRlcikge1xyXG5cdHRoaXMucmVuZGVyID0gcmVuZGVyO1xyXG5cdHRoaXMuX3Nwcml0ZSA9IG51bGw7XHJcblx0XHJcblx0dGhpcy5mcmFtZXMgPSBbXTtcclxufVxyXG5cclxuU3ByaXRlcy5wcm90b3R5cGUuY3JlYXRlVGV4dCA9IGZ1bmN0aW9uKHN0cmluZywgc2l6ZSkge1xyXG5cdHJldHVybiBuZXcgUElYSS5UZXh0KHN0cmluZywgeyBmb250RmFtaWx5IDogJ0FyaWFsJywgZmlsbDogJ3doaXRlJywgZm9udFNpemU6IHNpemUsIGFsaWduOiAnY2VudGVyJyB9KTtcclxufVxyXG5cclxuU3ByaXRlcy5wcm90b3R5cGUuY3JlYXRlID0gZnVuY3Rpb24oc3ByaXRlRnJhbWVOYW1lLCBmcmFtZUNvdW50LCB0eXBlKSB7XHJcblx0dmFyIGZyYW1lcyA9IFtdO1x0XHJcblx0Zm9yICh2YXIgaSA9IDE7IGkgPD0gZnJhbWVDb3VudDsgaSsrKSB7XHJcblx0XHRpZih0eXBlKSB7XHJcblx0XHRcdGZyYW1lcy5wdXNoKFBJWEkuVGV4dHVyZS5mcm9tRnJhbWUoc3ByaXRlRnJhbWVOYW1lICsgJ18nICsgdHlwZSArICdfJyArIGkgKyAnLnBuZycpKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGZyYW1lcy5wdXNoKFBJWEkuVGV4dHVyZS5mcm9tRnJhbWUoc3ByaXRlRnJhbWVOYW1lICsgJ18nICsgaSArICcucG5nJykpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0fVxyXG5cdHJldHVybiBmcmFtZXM7XHJcbn1cclxuXHJcblNwcml0ZXMucHJvdG90eXBlLmNyZWF0ZUFuaW1hdGlvbkZyYW1lcyA9IGZ1bmN0aW9uKCkge1x0XHJcblx0Ly9lbnRpdHlcdFxyXG5cdHRoaXMuZnJhbWVzWyd3YXJyaW9yJ10gPSB0aGlzLmNyZWF0ZSgnd2FycmlvcicsIDIpO1x0XHJcblx0dGhpcy5mcmFtZXNbJ21vdXNlJ10gPSB0aGlzLmNyZWF0ZSgnbW91c2UnLCAyKTtcdFxyXG5cdHRoaXMuZnJhbWVzWydtYWdlJ10gPSB0aGlzLmNyZWF0ZSgnbWFnZScsIDIpO1x0XHJcblx0XHJcblx0Ly9wcm9qZWN0aWxlc1xyXG5cdHRoaXMuZnJhbWVzWydmaXJlYmFsbCddID0gdGhpcy5jcmVhdGUoJ2ZpcmViYWxsJywgMik7XHRcclxufVxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuU3ByaXRlcy5wcm90b3R5cGUubmV3QW5pbWF0ZWRTcHJpdGUgPSBmdW5jdGlvbihrZXksIGFuaW1hdGlvblNwZWVkKSB7XHRcclxuXHR2YXIgc3ByaXRlID0gbmV3IFBJWEkuZXh0cmFzLkFuaW1hdGVkU3ByaXRlKHRoaXMuZnJhbWVzW2tleV0pO1xyXG5cdHNwcml0ZS5hbmltYXRpb25TcGVlZCA9IGFuaW1hdGlvblNwZWVkO1xyXG5cdGlmKCFhbmltYXRpb25TcGVlZClcclxuXHRcdHNwcml0ZS5hbmltYXRpb25TcGVlZCA9IDAuMDM1O1xyXG5cdHJldHVybiBzcHJpdGU7XHJcbn1cclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3ByaXRlcyIsImltcG9ydCB7IENvbnN0LCBUaWxlVHlwZSB9IGZyb20gJ2NvbnN0LmpzJ1xyXG5cclxuaW1wb3J0ICogYXMgUk9UIGZyb20gJ3JvdC1qcydcclxuXHJcblxyXG52YXIgVmlzaWJpbGl0eSA9IGZ1bmN0aW9uKG1hcCwgbWVzaCkge1xyXG5cdHRoaXMubWFwID0gbWFwO1x0XHJcblx0dGhpcy5tZXNoID0gbWVzaDsgXHRcclxuXHR0aGlzLmZvdiA9IG5ldyBST1QuRk9WLlByZWNpc2VTaGFkb3djYXN0aW5nKChpLCBqKSA9PiB7XHJcblx0XHRyZXR1cm4gdGhpcy5saWdodFBhc3NlcyhpICwgaik7XHJcblx0fSk7XHJcblx0XHRcclxuXHR0aGlzLmxhc3RfdmlzaWJsZV9tYXAgPSBbXTtcdFxyXG5cdFx0XHRcclxuXHR0aGlzLmxhc3RJID0gLTEwMDA7XHJcblx0dGhpcy5sYXN0SiA9IC0xMDAwO1x0XHJcbn1cclxuXHJcblZpc2liaWxpdHkucHJvdG90eXBlLmxpZ2h0UGFzc2VzID0gZnVuY3Rpb24oaSwgaikge1x0XHJcblx0aWYodGhpcy5tYXBbaV0gJiYgdGhpcy5tYXBbaV1bal0gJiYgdGhpcy5tYXBbaV1bal0udHJhbnMpIHJldHVybiB0cnVlO1xyXG5cdHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuVmlzaWJpbGl0eS5wcm90b3R5cGUubWVzaFJhd1Jlc2V0ID0gZnVuY3Rpb24obWVzaCkge1xyXG5cdG1lc2gucmF3X3ZlcnRpY2VzID0gW107XHJcblx0bWVzaC5yYXdfdXYgPSBbXTtcclxuXHRtZXNoLnJhd19pbmRpY2VzID0gW107XHRcdFxyXG5cdG1lc2guX24gPSAwO1xyXG59XHJcblxyXG5WaXNpYmlsaXR5LnByb3RvdHlwZS5tZXNoUmVmcmVzaCA9IGZ1bmN0aW9uKG1lc2gpIHtcclxuXHRtZXNoLnZlcnRpY2VzID0gbmV3IEZsb2F0MzJBcnJheShtZXNoLnJhd192ZXJ0aWNlcyk7XHJcblx0bWVzaC51dnMgPSBuZXcgRmxvYXQzMkFycmF5KG1lc2gucmF3X3V2KTtcdFx0XHJcblx0bWVzaC5pbmRpY2VzID0gbmV3IFVpbnQxNkFycmF5KG1lc2gucmF3X2luZGljZXMpO1xyXG5cdFx0XHJcblx0bWVzaC52ZXJ0ZXhEaXJ0eSsrO1xyXG5cdG1lc2guZGlydHkrKztcclxuXHRtZXNoLmluZGV4RGlydHkrKztcclxuXHRtZXNoLnJlZnJlc2goKTtcdFxyXG59XHJcblxyXG5WaXNpYmlsaXR5LnByb3RvdHlwZS5idWlsZFF1YWQgPSBmdW5jdGlvbihtZXNoLCBpLCBqLCB1LCB2KSB7XHJcblx0bGV0IHRzID0gQ29uc3QuVElMRV9TSVpFOyBcdFx0XHJcblx0bGV0IHV2X21pbiA9IDAuMDMxMjU7XHJcblx0XHRcclxuXHRtZXNoLnJhd192ZXJ0aWNlcy5wdXNoKGkqdHMsICB0cytqKnRzLFxyXG5cdFx0XHRcdFx0ICAgXHRcdGkqdHMsICBqKnRzLFxyXG5cdFx0XHRcdFx0ICAgXHRcdHRzK2kqdHMsIHRzK2oqdHMsXHJcblx0XHRcdFx0XHQgICBcdFx0dHMraSp0cywgaip0cyk7XHJcblx0XHRcdFxyXG5cdG1lc2gucmF3X3V2LnB1c2godXZfbWluICogdSwgdXZfbWluICogdiArIHV2X21pbiwgXHJcbiAgICAgICAgICAgIFx0IFx0dXZfbWluICogdSwgdXZfbWluICogdiwgXHJcbiAgICAgICAgICAgIFx0IFx0dXZfbWluICogdSArIHV2X21pbiwgIHV2X21pbiAqIHYgKyB1dl9taW4sXHJcblx0XHRcdFx0IFx0dXZfbWluICogdSArIHV2X21pbiwgIHV2X21pbiAqIHYpO1x0XHJcblx0XHRcdFxyXG5cdFx0XHRcclxuXHRtZXNoLnJhd19pbmRpY2VzLnB1c2gobWVzaC5fbiwgbWVzaC5fbisxLCBtZXNoLl9uKzIsIG1lc2guX24rMiwgbWVzaC5fbisxLCBtZXNoLl9uKzMpO1xyXG5cdG1lc2guX24rPTQ7XHRcdFxyXG59XHJcblxyXG5WaXNpYmlsaXR5LnByb3RvdHlwZS5jb21wdXRlID0gZnVuY3Rpb24ocGxheWVyLCBmb3JjZWQpIHtcclxuXHQvL3BsYXllciBpLGpcdFxyXG5cdHZhciBwaSA9IH5+KHBsYXllci54IC8gQ29uc3QuVElMRV9TSVpFKSxcclxuXHRcdHBqID0gfn4ocGxheWVyLnkgLyBDb25zdC5USUxFX1NJWkUpO1xyXG5cdFx0XHJcblx0aWYoZm9yY2VkIHx8IHRoaXMubGFzdEkgIT0gcGkgfHwgdGhpcy5sYXN0SiAhPSBwaikge1x0XHRcdFxyXG5cdFx0dGhpcy5sYXN0SSA9IHBpO1xyXG5cdFx0dGhpcy5sYXN0SiA9IHBqO1xyXG5cdFx0XHJcblx0XHQvL3RoaXMubm93ID0gRGF0ZS5ub3coKTtcclxuXHRcdFxyXG5cdFx0Ly/QutC+0YHRgtGL0LvRjCDQvtGCINCx0LDQs9C+0LIg0YHRgtC+0LvQutC90L7QstC10L3QuNC5XHJcblx0XHRpZighdGhpcy5tYXBbcGldIHx8ICF0aGlzLm1hcFtwaV1bcGpdIHx8ICF0aGlzLm1hcFtwaV1bcGpdLnBhc3MpIHJldHVybjtcdFx0XHJcblx0XHRcdFx0XHJcblx0XHQvL9GB0LHRgNC+0YEg0YHRgtCw0YDQvtC5INCy0LjQtNC40LzQvtGB0YLQuCDQtNC70Y8gZW50aXR5XHRcdFxyXG5cdFx0dGhpcy5sYXN0X3Zpc2libGVfbWFwLmZvckVhY2goKHRpKSA9PiB7XHJcblx0XHRcdHRoaXMubWFwW3RpLmldW3RpLmpdLnZpc2libGUgPSBudWxsO1x0XHJcblx0XHR9KTtcdFx0XHRcclxuXHRcdHRoaXMubGFzdF92aXNpYmxlX21hcCA9IFtdO1x0XHRcclxuXHRcdFxyXG5cdFx0dGhpcy5tZXNoUmF3UmVzZXQodGhpcy5tZXNoKTtcclxuXHRcdFxyXG5cdFx0Ly/Qv9C10YDQtdGB0YLRgNC+0LnQutCwINCy0LjQtNC40LzQvtCz0L4g0LzQtdGI0LBcclxuXHRcdHZhciB0aWxlLCB0dGk7XHJcblx0XHR0aGlzLmZvdi5jb21wdXRlKHBpLCBwaiwgcGxheWVyLnIsIChpLCBqLCByLCB2aXNpYmlsZSkgPT4ge1x0XHJcblx0XHRcdGlmKGk8MCB8fCBqPDApIHJldHVybjtcdFxyXG5cdFx0XHRcdFxyXG5cdFx0XHQvL9Cy0LjQtNC40LzQvtGB0YLRjCDQtNC70Y8gZW50aXR5XHRcdFx0XHJcblx0XHRcdHRpbGUgPSB0aGlzLm1hcFtpXVtqXTtcclxuXHRcdFx0dGlsZS52aXNpYmxlID0gdHJ1ZTtcclxuXHRcdFx0dGhpcy5sYXN0X3Zpc2libGVfbWFwLnB1c2goe2k6aSwgajpqfSk7XHRcdFxyXG5cdFx0XHRcclxuXHRcdFx0dHRpID0gdGlsZS5pbmRleDtcclxuXHRcdFx0XHJcblx0XHRcdGlmKHRpbGUudHlwZSA9PSBUaWxlVHlwZS5FbXB0eSkgcmV0dXJuO1x0XHJcblx0XHRcdGlmKHRpbGUudHlwZSA9PSBUaWxlVHlwZS5XYWxsKSB0dGkrPSAxNjtcdFx0XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHR0aGlzLmJ1aWxkUXVhZCh0aGlzLm1lc2gsIGksIGosIHR0aSwgMCk7XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0aWYodGlsZS5vYmopIHtcclxuXHRcdFx0XHR0aGlzLmJ1aWxkUXVhZCh0aGlzLm1lc2gsIGksIGosIHRpbGUub2JqLnVpLCB0aWxlLm9iai52aSk7XHRcclxuXHRcdFx0fSBlbHNlIGlmKHRpbGUuYmxvb2QgIT0gbnVsbCkge1xyXG5cdFx0XHRcdHRoaXMuYnVpbGRRdWFkKHRoaXMubWVzaCwgaSwgaiwgMzEsIDMxKTtcclxuXHRcdFx0fSBlbHNlIGlmKHRpbGUudHJhc2ggIT0gbnVsbCkge1xyXG5cdFx0XHRcdHRoaXMuYnVpbGRRdWFkKHRoaXMubWVzaCwgaSwgaiwgdGlsZS50cmFzaCwgMjkpO1x0XHJcblx0XHRcdH0gZWxzZSBpZih0aWxlLnRvcmNoICE9IG51bGwpXHRcdFxyXG5cdFx0XHRcdHRoaXMuYnVpbGRRdWFkKHRoaXMubWVzaCwgaSwgaiwgdGlsZS50b3JjaCwgMzApO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRpZih0aWxlLml0ZW0pXHRcdFxyXG5cdFx0XHRcdHRoaXMuYnVpbGRRdWFkKHRoaXMubWVzaCwgaSwgaiwgdGlsZS5pdGVtLnVpLCB0aWxlLml0ZW0udmkpO1x0XHJcblx0XHR9KTtcdFx0XHRcdFxyXG5cdFx0XHJcblx0XHR0aGlzLm1lc2hSZWZyZXNoKHRoaXMubWVzaCk7XHJcblx0XHRcclxuXHRcdC8vY29uc29sZS5sb2coXCJ2aXNpYmlsaXR5IHRpbWU6XCIsIERhdGUubm93KCkgLSB0aGlzLm5vdyk7XHJcblx0fVx0XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBWaXNpYmlsaXR5OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgV29ya2VyKF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJ0aWNrZXIud29ya2VyLmpzXCIpO1xufTsiLCJpbXBvcnQgeyBDb25zdCB9IGZyb20gJ2NvbnN0LmpzJ1xyXG5pbXBvcnQgUGxheWVyIGZyb20gJ2VudGl0eS9wbGF5ZXIuanMnXHJcblxyXG5cclxudmFyIExpc3QgPSBmdW5jdGlvbihnYW1lLCBzdGFydElkKSB7XHJcblx0dGhpcy5nYW1lID0gZ2FtZTtcdFx0XHJcblx0XHJcblx0dGhpcy5sYXN0SWQgPSAwO1xyXG5cdHRoaXMuc3RhcnRJZCA9IDA7XHJcblx0aWYoc3RhcnRJZCkge1xyXG5cdFx0dGhpcy5zdGFydElkID0gc3RhcnRJZDtcclxuXHRcdHRoaXMubGFzdElkID0gc3RhcnRJZDtcclxuXHR9XHJcblx0XHJcblx0dGhpcy5saXN0ID0gbmV3IE1hcCgpO1xyXG5cdC8vdGhpcy5wcm9qZWNsaXN0ID0gbmV3IE1hcCgpO1xyXG59XHJcblxyXG5MaXN0LnByb3RvdHlwZS5mcmVlID0gZnVuY3Rpb24oKSB7XHJcblx0dGhpcy5saXN0LmNsZWFyKCk7XHRcclxuXHR0aGlzLmxhc3RJZCA9IHRoaXMuc3RhcnRJZDtcclxufVxyXG5cclxuTGlzdC5wcm90b3R5cGUuZ2V0SWQgPSBmdW5jdGlvbigpIHtcclxuXHRyZXR1cm4gdGhpcy5sYXN0SWQrKztcclxufVxyXG5cclxuTGlzdC5wcm90b3R5cGUucG9vbCA9IGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiB0aGlzLmxpc3Q7XHJcbn1cclxuXHJcbkxpc3QucHJvdG90eXBlLnNpemUgPSBmdW5jdGlvbigpIHtcclxuXHRyZXR1cm4gdGhpcy5saXN0LnNpemU7XHJcbn1cclxuXHJcbkxpc3QucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uKGVudGl0eSkge1x0XHJcblx0ZW50aXR5LmlkID0gdGhpcy5nZXRJZCgpO1xyXG5cdHRoaXMuYWRkVG9JZChlbnRpdHksIGVudGl0eS5pZCk7XHRcdFxyXG59XHJcblxyXG5MaXN0LnByb3RvdHlwZS5hZGRUb0lkID0gZnVuY3Rpb24oZW50aXR5LCBpZCkge1x0XHRcclxuXHR0aGlzLmxpc3Quc2V0KGlkLCBlbnRpdHkpO1x0XHRcclxufVxyXG5cclxuTGlzdC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24oaWQpIHtcdFxyXG5cdGlmKCF0aGlzLmxpc3QuaGFzKGlkKSkgcmV0dXJuO1xyXG5cdHRoaXMubGlzdC5kZWxldGUoaWQpO1x0XHRcclxufVxyXG5cclxuTGlzdC5wcm90b3R5cGUuc2V0U3RhdGUgPSBmdW5jdGlvbihpZCwgc3RhdGUpIHtcclxuXHRpZighdGhpcy5saXN0LmhhcyhpZCkpIHJldHVybjtcclxuXHRcclxuXHR2YXIgZW50aXR5ID0gdGhpcy5nZXRPYmplY3RCeUlkKGlkKTtcclxuXHRpZihlbnRpdHkuc3RhdGUgIT0gc3RhdGUpXHJcblx0XHRlbnRpdHkuc3RhdGUgPSBzdGF0ZTtcdFx0XHRcclxufVxyXG5cclxuTGlzdC5wcm90b3R5cGUuZ2V0T2JqZWN0QnlJZCA9IGZ1bmN0aW9uKGlkKSB7XHJcblx0cmV0dXJuIHRoaXMubGlzdC5nZXQoaWQpO1x0XHJcbn1cclxuXHJcbi8vIEBSZW5kZXJcclxuTGlzdC5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24oKSB7XHJcblx0dGhpcy5saXN0LmZvckVhY2goKGVudGl0eSkgPT4ge1x0XHRcdFx0XHJcblx0XHRlbnRpdHkubW92aW5nKCk7XHJcblx0XHRcdFx0XHJcblx0XHRlbnRpdHkuY29udGFpbmVyLnggPSBlbnRpdHkueDsgXHJcblx0XHRlbnRpdHkuY29udGFpbmVyLnkgPSBlbnRpdHkueTtcdFxyXG5cdH0pO1x0XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaXN0IiwiaW1wb3J0IHsgQ29uc3QsIEVudGl0eVN0YXRlIH0gZnJvbSAnY29uc3QuanMnXHJcbmltcG9ydCBMaXN0IGZyb20gJ3dvcmxkL2xpc3QuanMnXHJcblxyXG5cclxudmFyIExpc3RIb3N0ID0gZnVuY3Rpb24oZ2FtZSwgc3RhcnRJZCkge1xyXG5cdExpc3QuY2FsbCh0aGlzLCBnYW1lLCBzdGFydElkKTtcdFxyXG5cdFxyXG5cdHRoaXMudXBkYXRlbGlzdCA9IFtdO1xyXG5cdFx0dGhpcy5jcmVhdGVkbGlzdCA9IFtdO1xyXG5cdFx0dGhpcy5yZW1vdmVkbGlzdCA9IFtdO1x0XHJcbn1cclxuXHJcbkxpc3RIb3N0LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoTGlzdC5wcm90b3R5cGUpO1xyXG5MaXN0SG9zdC5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBMaXN0SG9zdDtcclxuXHJcblxyXG5MaXN0SG9zdC5wcm90b3R5cGUuX2FkZCA9IGZ1bmN0aW9uKGVudGl0eSkge1xyXG5cdGVudGl0eS5pZCA9IHRoaXMuZ2V0SWQoKTtcdFx0XHRcclxuXHR0aGlzLmxpc3Quc2V0KGlkLCBlbnRpdHkpO1xyXG59XHJcblxyXG5MaXN0SG9zdC5wcm90b3R5cGUuYWRkVG9JZCA9IGZ1bmN0aW9uKGVudGl0eSwgaWQpIHtcclxuXHRMaXN0LnByb3RvdHlwZS5hZGRUb0lkLmNhbGwodGhpcywgZW50aXR5LCBpZCk7XHJcblx0XHJcblx0ZW50aXR5LnN0YXRlID0gRW50aXR5U3RhdGUuQ3JlYXRlO1xyXG5cdHRoaXMudXBkYXRlbGlzdC5wdXNoKGVudGl0eSk7XHJcblx0dGhpcy5jcmVhdGVkbGlzdC5wdXNoKGVudGl0eSk7XHJcbn1cclxuXHJcbkxpc3RIb3N0LnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbihpZCkge1xyXG5cdGlmKCF0aGlzLmxpc3QuaGFzKGlkKSkgcmV0dXJuO1xyXG5cdFxyXG5cdHZhciBlbnRpdHkgPSB0aGlzLmdldE9iamVjdEJ5SWQoaWQpO1xyXG5cdGVudGl0eS5zdGF0ZSA9IEVudGl0eVN0YXRlLlJlbW92ZTtcclxuXHR0aGlzLnVwZGF0ZWxpc3QucHVzaChlbnRpdHkpO1xyXG5cdHRoaXMucmVtb3ZlZGxpc3QucHVzaChlbnRpdHkpO1xyXG59XHJcblxyXG5MaXN0SG9zdC5wcm90b3R5cGUuc2V0U3RhdGUgPSBmdW5jdGlvbihpZCwgc3RhdGUpIHtcclxuXHRpZighdGhpcy5saXN0LmhhcyhpZCkpIHJldHVybjtcclxuXHRcclxuXHR2YXIgZW50aXR5ID0gdGhpcy5nZXRPYmplY3RCeUlkKGlkKTtcclxuXHRpZihlbnRpdHkuc3RhdGUgIT0gc3RhdGUpIHtcclxuXHRcdGVudGl0eS5zdGF0ZSA9IHN0YXRlO1x0XHJcblx0XHR0aGlzLnVwZGF0ZWxpc3QucHVzaChlbnRpdHkpO1xyXG5cdH1cdFx0XHJcbn1cclxuXHJcbkxpc3RIb3N0LnByb3RvdHlwZS5mb3JFYWNoVXBkYXRlZCA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XHJcblx0dGhpcy51cGRhdGVsaXN0LmZvckVhY2goY2FsbGJhY2spO1x0XHJcbn1cclxuXHJcbkxpc3RIb3N0LnByb3RvdHlwZS51cGRhdGVkU2l6ZSA9IGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiB0aGlzLnVwZGF0ZWxpc3QubGVuZ3RoO1xyXG59XHJcblxyXG5MaXN0SG9zdC5wcm90b3R5cGUucmVtb3ZlQWxsTWFya2VkID0gZnVuY3Rpb24oKSB7XHJcblx0dGhpcy51cGRhdGVsaXN0ID0gW107XHJcblx0XHJcblx0dGhpcy5jcmVhdGVkbGlzdC5mb3JFYWNoKChlbnRpdHkpID0+IHtcclxuXHRcdGVudGl0eS5zdGF0ZSA9IEVudGl0eVN0YXRlLkRlZmF1bHQ7XHJcblx0fSk7XHJcblx0dGhpcy5jcmVhdGVkbGlzdCA9IFtdO1xyXG5cdFxyXG5cdHRoaXMucmVtb3ZlZGxpc3QuZm9yRWFjaCgoZW50aXR5KSA9PiB7XHJcblx0XHRMaXN0LnByb3RvdHlwZS5yZW1vdmUuY2FsbCh0aGlzLCBlbnRpdHkuaWQpO1xyXG5cdH0pO1xyXG5cdHRoaXMucmVtb3ZlZGxpc3QgPSBbXTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpc3RIb3N0IiwiaW1wb3J0IHsgQ29uc3QgfSBmcm9tICdjb25zdC5qcydcclxuXHJcblxyXG52YXIgVE9iamVjdCA9IGZ1bmN0aW9uKHdvcmxkLCBpLCBqKSB7XHJcblx0dGhpcy53b3JsZCA9IHdvcmxkO1xyXG5cdHRoaXMubWFwID0gd29ybGQuZ2V0TWFwKCk7XHJcbiBcdHRoaXMuaSA9IGk7XHJcblx0dGhpcy5qID0gajtcclxuXHQvL3V2INGC0LXQutGB0YLRg9GA0L3Ri9C1INC40L3QtNC10LrRgdGLINCyINCw0YLQu9Cw0YHQtSDRgtCw0LnQu9C+0LJcclxuXHR0aGlzLnVpID0gMDtcclxuXHR0aGlzLnZpID0gMDtcclxuXHQvL9C/0YDQvtGF0L7QtNC40LzQvtGB0YLRjFxyXG5cdC8vdGhpcy5wYXNzID0gdHJ1ZTtcclxufVxyXG5cclxuVE9iamVjdC5wcm90b3R5cGUuYWN0aXZhdGUgPSBmdW5jdGlvbihob3N0KSB7fVxyXG5cclxuVE9iamVjdC5wcm90b3R5cGUuc3RlcG9uID0gZnVuY3Rpb24oKSB7fVxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbnZhciBEb29yID0gZnVuY3Rpb24od29ybGQsIGksIGopIHtcclxuXHRUT2JqZWN0LmNhbGwodGhpcywgd29ybGQsIGksIGopO1xyXG5cdFxyXG5cdHRoaXMudWkgPSAwO1xyXG5cdHRoaXMudmkgPSAzMTtcclxuXHR0aGlzLm1hcFtpXVtqXS5wYXNzID0gZmFsc2U7XHJcblx0dGhpcy5tYXBbaV1bal0udHJhbnMgPSBmYWxzZTtcclxuXHR0aGlzLm9wZW4gPSBmYWxzZTtcclxufVxyXG5cclxuRG9vci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFRPYmplY3QucHJvdG90eXBlKTtcclxuRG9vci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBEb29yO1xyXG5cclxuXHJcbkRvb3IucHJvdG90eXBlLmFjdGl2YXRlID0gZnVuY3Rpb24oaG9zdCkge1x0XHJcblx0Ly/QsiDQv9GA0L7RhdC+0LTQtSBlbnRpdHlcclxuXHRpZihob3N0ICYmIHRoaXMubWFwW3RoaXMuaV1bdGhpcy5qXS5pZCkgcmV0dXJuIGZhbHNlO1xyXG5cdFxyXG5cdHRoaXMub3BlbiA9ICF0aGlzLm9wZW47XHJcblx0aWYodGhpcy5vcGVuKSB7XHJcblx0XHR0aGlzLm1hcFt0aGlzLmldW3RoaXMual0udHJhbnMgPSB0cnVlO1xyXG5cdFx0dGhpcy5tYXBbdGhpcy5pXVt0aGlzLmpdLnBhc3MgPSB0cnVlO1xyXG5cdFx0dGhpcy51aSA9IDE7XHJcblx0fSBlbHNlIHtcclxuXHRcdHRoaXMubWFwW3RoaXMuaV1bdGhpcy5qXS50cmFucyA9IGZhbHNlO1xyXG5cdFx0dGhpcy5tYXBbdGhpcy5pXVt0aGlzLmpdLnBhc3MgPSBmYWxzZTtcclxuXHRcdHRoaXMudWkgPSAwO1xyXG5cdH1cdFxyXG5cdHJldHVybiB0cnVlO1x0XHJcbn1cclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuZXhwb3J0IHsgRG9vciB9OyIsImltcG9ydCB7IENvbnN0LCBUaWxlVHlwZSB9IGZyb20gJ2NvbnN0LmpzJ1xyXG4vL2ltcG9ydCBGbG9vciBmcm9tICd3b3JsZC9mbG9vci5qcydcclxuaW1wb3J0IHsgRG9vciB9IGZyb20gJ3dvcmxkL29iamVjdC5qcydcclxuXHJcblxyXG5pbXBvcnQgKiBhcyBST1QgZnJvbSAncm90LWpzJ1xyXG4vL2ltcG9ydCB7IFJORywgRGlnZ2VyIH0gZnJvbSAncm90LWpzJ1xyXG5cclxuXHJcbnZhciBUaWxlID0gZnVuY3Rpb24odHlwZSwgcGFzcywgdHJhbnMpIHtcclxuXHR0aGlzLnR5cGUgPSB0eXBlO1xyXG5cdHRoaXMuaW5kZXggPSAwO1xyXG5cdHRoaXMucGFzcyA9IHBhc3M7XHJcblx0dGhpcy50cmFucyA9IHRyYW5zO1xyXG59XHJcblRpbGUucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uKHR5cGUsIHBhc3MsIHRyYW5zKSB7XHJcblx0dGhpcy50eXBlID0gdHlwZTtcdFxyXG5cdHRoaXMucGFzcyA9IHBhc3M7XHJcblx0dGhpcy50cmFucyA9IHRyYW5zO1xyXG59XHJcblxyXG5cclxudmFyIFdvcmxkID0gZnVuY3Rpb24oZ2FtZSkge1xyXG5cdHRoaXMuZ2FtZSA9IGdhbWU7XHRcclxuXHRcclxuXHR0aGlzLnNpemVYID0gNjQ7XHJcblx0dGhpcy5zaXplWSA9IDY0O1xyXG5cdFxyXG5cdHRoaXMuc3Bhd25Qb2ludCA9IFtdO1x0XHJcblx0XHJcblx0dGhpcy5tYXAgPSBudWxsO1xyXG5cdC8vdGhpcy5jaHVua2xpc3QgPSBbXTtcclxuXHR0aGlzLnNlZWQgPSA0Mzc2NDtcdFxyXG59XHJcblxyXG5Xb3JsZC5wcm90b3R5cGUuc2V0U2VlZCA9IGZ1bmN0aW9uKHNlZWQpIHtcclxuXHRST1QuUk5HLnNldFNlZWQoc2VlZCk7XHJcbiAgICB0aGlzLnNlZWQgPSBzZWVkO1xyXG59XHJcblxyXG5Xb3JsZC5wcm90b3R5cGUuZ2V0TWFwID0gZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5tYXA7XHJcbn1cclxuXHJcbi8vQEhvc3RcclxuV29ybGQucHJvdG90eXBlLmdlbmVyYXRlU2VlZCA9IGZ1bmN0aW9uKCkge1xyXG5cdHRoaXMuc2VlZCA9IE1hdGguZmxvb3IoMTAwMDAwMCAqIE1hdGgucmFuZG9tKCkgKyAxMDAwMDAgKiBNYXRoLnJhbmRvbSgpKTtcclxuXHRST1QuUk5HLnNldFNlZWQodGhpcy5zZWVkKTtcclxuXHRyZXR1cm4gdGhpcy5zZWVkO1xyXG59XHJcblxyXG5Xb3JsZC5wcm90b3R5cGUuZ2V0MkRBcnJheSA9IGZ1bmN0aW9uKCkgeyBcclxuXHR2YXIgbWFwID0gW107XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc2l6ZVg7IGkrKykge1xyXG4gICAgICAgIG1hcC5wdXNoKFtdKTtcclxuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMuc2l6ZVk7IGorKykge1xyXG4gICAgICAgICAgICBtYXBbaV0ucHVzaChuZXcgVGlsZShUaWxlVHlwZS5FbXB0eSwgdHJ1ZSwgdHJ1ZSkpO1xyXG4gICAgICAgIH1cclxuICAgIH0gICAgXHJcbiAgICByZXR1cm4gbWFwOyAgIFxyXG59XHJcblxyXG5Xb3JsZC5wcm90b3R5cGUuYXV0b1RpbGluZ0FuZERlY29yID0gZnVuY3Rpb24obWFwKSB7XHJcblx0dmFyIHhfbGVuID0gbWFwLmxlbmd0aDtcclxuXHR2YXIgeV9sZW4gPSBtYXBbMF0ubGVuZ3RoO1xyXG5cdFx0XHJcblx0dmFyIHRvcCxkb3duLGxlZnQscmlnaHQ7XHJcblx0dmFyIHR0aTsgLy90aWxlIHRleHR1cmUgaW5kZXggWzAtMTVdXHRcclxuXHRcclxuXHR2YXIgdGlsZSwgdHlwZTtcdFxyXG5cdHZhciBpLGosbj0wO1x0XHJcblx0Zm9yKGk9MDsgaSA8IHhfbGVuOyBpKyspIHtcclxuXHRcdGZvcihqPTA7IGogPCB5X2xlbjsgaisrKSB7XHRcclxuXHRcdFx0dGlsZSA9IG1hcFtpXVtqXTtcdFxyXG5cdFx0XHR0eXBlID0gdGlsZS50eXBlO1xyXG5cdFx0XHRpZih0eXBlID09IFRpbGVUeXBlLkVtcHR5KSBjb250aW51ZTtcdFx0XHRcclxuXHRcdFxyXG5cdFx0XHR0b3A9MDtkb3duPTA7cmlnaHQ9MDtsZWZ0PTA7XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0aWYoai0xPj0wIFx0ICYmIG1hcFtpXVtqLTFdLnR5cGUgPT0gdHlwZSkgdG9wID0gMTtcclxuXHRcdFx0aWYoaisxPHlfbGVuICYmIG1hcFtpXVtqKzFdLnR5cGUgPT0gdHlwZSkgZG93biA9IDE7XHRcdFx0XHJcblx0XHRcdGlmKGkrMTx4X2xlbiAmJiBtYXBbaSsxXVtqXS50eXBlID09IHR5cGUpIHJpZ2h0ID0gMTtcclxuXHRcdFx0aWYoaS0xPj0wIFx0ICYmIG1hcFtpLTFdW2pdLnR5cGUgPT0gdHlwZSkgbGVmdCA9IDE7XHJcblx0XHRcdC8vdGlsZSB0ZXh0dXJlIGluZGV4XHJcblx0XHRcdHR0aSA9IHRvcCArIDIqcmlnaHQgKyA0KmRvd24gKyA4KmxlZnQ7IC8vMC0xNVxyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHR0aWxlLmluZGV4ID0gdHRpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0Ly/Qv9C+0LtcclxuXHRcdFx0aWYodHlwZSA9PSBUaWxlVHlwZS5GbG9vcikge1xyXG5cdFx0XHRcdGlmKCF0aWxlLm9iaikge1xyXG5cdFx0XHRcdFx0Ly/QvNGD0YHQvtGAXHRcclxuXHRcdFx0XHRcdGlmKFJPVC5STkcuZ2V0UGVyY2VudGFnZSgpIDwgNCkgdGlsZS50cmFzaCA9IE1hdGgucm91bmQoMyAqIFJPVC5STkcuZ2V0VW5pZm9ybSgpKTtcclxuXHRcdFx0XHR9XHRcdFxyXG5cdFx0XHQvL9GB0YLQtdC90YtcdFx0XHJcblx0XHRcdH0gZWxzZSBpZih0dGkgPT0gMCB8fCB0dGkgPT0gMSB8fCB0dGkgPT0gMTApIHtcclxuXHRcdFx0ICBcdC8v0YTQsNC60LXQu9GLXHJcblx0XHRcdFx0aWYoUk9ULlJORy5nZXRQZXJjZW50YWdlKCkgPCA4KSB0aWxlLnRvcmNoID0gMDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cdFxyXG59XHJcblxyXG5Xb3JsZC5wcm90b3R5cGUuZ2VuZXJhdGVNYXAgPSBmdW5jdGlvbigpIHsgXHJcblx0XHJcblx0dmFyIGRpZ2dlciA9IG5ldyBST1QuTWFwLkRpZ2dlcih0aGlzLnNpemVYLCB0aGlzLnNpemVZLCB7XHJcblx0XHRyb29tV2lkdGg6IFs2LCAxMV0sXHJcbiAgICAgICAgcm9vbUhlaWdodDogWzYsIDhdLFxyXG4gICAgICAgIGNvcnJpZG9yTGVuZ3RoOiBbMywgNF0sXHJcblx0fSk7XHJcbiAgIFx0XHJcbiAgICB0aGlzLm1hcCA9IHRoaXMuZ2V0MkRBcnJheSgpO1xyXG5cdFxyXG5cdHZhciBjaGVja05laWdoYm9yVGlsZXMgPSAoZGlnZ2VyLCB4LCB5LCBtYXAsIG9sZFRpbGUsIG5ld1RpbGUpID0+IHtcdFx0XHJcblx0XHRpZihkaWdnZXIuX21hcFt4KzFdW3ldID09IG9sZFRpbGUpIG1hcFt4KzFdW3ldLnNldChuZXdUaWxlLCBmYWxzZSwgZmFsc2UpOyBcclxuXHRcdGlmKGRpZ2dlci5fbWFwW3gtMV1beV0gPT0gb2xkVGlsZSkgbWFwW3gtMV1beV0uc2V0KG5ld1RpbGUsIGZhbHNlLCBmYWxzZSk7XHJcblx0XHRpZihkaWdnZXIuX21hcFt4XVt5KzFdID09IG9sZFRpbGUpIG1hcFt4XVt5KzFdLnNldChuZXdUaWxlLCBmYWxzZSwgZmFsc2UpO1xyXG5cdFx0aWYoZGlnZ2VyLl9tYXBbeF1beS0xXSA9PSBvbGRUaWxlKSBtYXBbeF1beS0xXS5zZXQobmV3VGlsZSwgZmFsc2UsIGZhbHNlKTtcclxuXHRcdGlmKGRpZ2dlci5fbWFwW3grMV1beSsxXSA9PSBvbGRUaWxlKSBtYXBbeCsxXVt5KzFdLnNldChuZXdUaWxlLCBmYWxzZSwgZmFsc2UpO1xyXG5cdFx0aWYoZGlnZ2VyLl9tYXBbeCsxXVt5LTFdID09IG9sZFRpbGUpIG1hcFt4KzFdW3ktMV0uc2V0KG5ld1RpbGUsIGZhbHNlLCBmYWxzZSk7XHJcblx0XHRpZihkaWdnZXIuX21hcFt4LTFdW3krMV0gPT0gb2xkVGlsZSkgbWFwW3gtMV1beSsxXS5zZXQobmV3VGlsZSwgZmFsc2UsIGZhbHNlKTtcclxuXHRcdGlmKGRpZ2dlci5fbWFwW3gtMV1beS0xXSA9PSBvbGRUaWxlKSBtYXBbeC0xXVt5LTFdLnNldChuZXdUaWxlLCBmYWxzZSwgZmFsc2UpO1xyXG5cdH1cdFx0XHJcblx0XHJcblx0Ly92YXIgb25jZSA9IHRydWU7XHRcclxuICAgIGRpZ2dlci5jcmVhdGUoKHgsIHksIHZhbHVlKSA9PiB7XHRcdFx0XHRcclxuXHRcdC8v0L/QvtC40YHQuiDQstC40LTQuNC80YvRhSDRgdGC0LXQvVxyXG5cdFx0aWYodmFsdWUgPT0gVGlsZVR5cGUuRmxvb3IpIHtcdFx0XHRcclxuXHRcdFx0Y2hlY2tOZWlnaGJvclRpbGVzKGRpZ2dlciwgeCwgeSwgdGhpcy5tYXAsIFRpbGVUeXBlLkVtcHR5LCBUaWxlVHlwZS5XYWxsKTtcclxuXHRcdFx0dGhpcy5tYXBbeF1beV0udHlwZSA9IHZhbHVlO1x0XHRcclxuXHRcdH1cdFx0XHJcbiAgICB9KTtcclxuXHRcdFxyXG5cdC8vY29uc29sZS5sb2codGhpcy5tYXApO1x0XHJcblx0XHRcclxuXHR2YXIgcm9vbSwgcm9vbXMgPSBkaWdnZXIuZ2V0Um9vbXMoKTtcclxuXHR2YXIgc3Bhd25Sb29tLCBsYXN0WCA9IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSOyBcclxuXHR2YXIgbixpLGo7XHJcblx0Zm9yKG49MDsgbiA8IHJvb21zLmxlbmd0aDsgbisrKSB7XHJcblx0XHRyb29tID0gcm9vbXNbbl07XHJcblx0XHQvL9Cy0YvQsdC40YDQsNC10Lwg0LrRgNCw0LnQvdGO0Y4g0YHQu9C10LLQsCDQutC+0LzQvdCw0YLRgyDQtNC70Y8g0YHQv9Cw0LLQvdCwXHJcblx0XHRpZihyb29tLl94MSA8IGxhc3RYKSB7XHJcblx0XHRcdGxhc3RYID0gcm9vbS5feDE7XHJcblx0XHRcdHNwYXduUm9vbSA9IHJvb207XHJcblx0XHR9IFxyXG5cdFx0Ly/QtNCy0LXRgNC4XHJcblx0XHRyb29tLmdldERvb3JzKCh4LCB5KSA9PiB7XHJcblx0XHRcdGlmKFJPVC5STkcuZ2V0UGVyY2VudGFnZSgpID4gMzApIHtcclxuXHRcdFx0XHR0aGlzLm1hcFt4XVt5XS5vYmogPSBuZXcgRG9vcih0aGlzLCB4LCB5KTtcdFx0XHRcdFxyXG5cdFx0XHR9XHRcdFx0XHRcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRcclxuXHR0aGlzLmF1dG9UaWxpbmdBbmREZWNvcih0aGlzLm1hcCk7XHJcblx0dGhpcy5zcGF3blBvaW50ID0gc3Bhd25Sb29tLmdldENlbnRlcigpO1xyXG59XHJcblxyXG5Xb3JsZC5wcm90b3R5cGUuZ2V0SXRlbSA9IGZ1bmN0aW9uKGksIGopIHsgXHJcblx0cmV0dXJuIHRoaXMubWFwW2ldW2pdLml0ZW07XHJcbn1cclxuV29ybGQucHJvdG90eXBlLnNldEl0ZW0gPSBmdW5jdGlvbihpLCBqLCBpdGVtKSB7IFxyXG5cdHRoaXMubWFwW2ldW2pdLml0ZW0gPSBpdGVtO1xyXG59XHJcbldvcmxkLnByb3RvdHlwZS5nZXRPYmogPSBmdW5jdGlvbihpLCBqKSB7XHJcblx0aWYoaTwwIHx8IGo8MCB8fCBpPnRoaXMuc2l6ZVggfHwgaj50aGlzLnNpemVZKSByZXR1cm4gbnVsbDtcclxuICAgIHJldHVybiB0aGlzLm1hcFtpXVtqXS5vYmo7XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV29ybGQiLCIvKiAoaWdub3JlZCkgKi8iLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9