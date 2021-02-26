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
	
	this.container.visible = this.world.isVisible(this.i, this.j);
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
	if(this.steps == 0) {
		if(this.game.mobInRadius(this, this.target, const_js__WEBPACK_IMPORTED_MODULE_0__["Const"].MOB_ATACK_RADIUS)) {
			this.stop();
			this.attack(this.target, count);			
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

World.prototype.isVisible = function(i, j) { 
	if(i>0 && j>0 && i<this.sizeX && j<this.sizeY && this.map[i][j].visible)
		return true;
	return false;
}

World.prototype.getItem = function(i, j) { 
	return this.map[i][j].item;
}
World.prototype.setItem = function(i, j, item) { 
	this.map[i][j].item = item;
}
World.prototype.getObj = function(i, j) {
	if(i>0 && j>0 && i<this.sizeX && j<this.sizeY) 
    	return this.map[i][j].obj;
	return null;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0LmpzIiwid2VicGFjazovLy8uL3NyYy9lbnRpdHkvZW50aXR5LmpzIiwid2VicGFjazovLy8uL3NyYy9lbnRpdHkvaW52ZW50b3J5LmpzIiwid2VicGFjazovLy8uL3NyYy9lbnRpdHkvbWFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZW50aXR5L21vYi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZW50aXR5L21vdXNlLmpzIiwid2VicGFjazovLy8uL3NyYy9lbnRpdHkvbXBsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZW50aXR5L3BsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZW50aXR5L3Byb2plY3RpbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvc3RnYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9pbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbG9iYnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL25ldHdvcmsvY2xpZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9uZXR3b3JrL2hvc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL25ldHdvcmsvcGFja2V0LmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvY2FtZXJhLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvZ3VpLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvcmVuZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvc3ByaXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL3Zpc2liaWxpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RpY2tlci53b3JrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dvcmxkL2xpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dvcmxkL2xpc3Rob3N0LmpzIiwid2VicGFjazovLy8uL3NyYy93b3JsZC9vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dvcmxkL3dvcmxkLmpzIiwid2VicGFjazovLy91dGlsIChpZ25vcmVkKSIsIndlYnBhY2s6Ly8vdXRpbCAoaWdub3JlZCk/YTA0ZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBUSxvQkFBb0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBaUIsNEJBQTRCO0FBQzdDO0FBQ0E7QUFDQSwwQkFBa0IsMkJBQTJCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7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QUNBLGlCO0FBQ0Esa0I7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsZTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyRjs7QUFFQTtBQUNBLDRCO0FBQ0EsNEI7QUFDQSxvQjs7QUFFQSxzQztBQUNBOztBQUVBOztBQUVBLG9EOztBQUVBOztBQUVBO0FBQ0EsbUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3Rjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFDOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBDOztBQUVBLCtHO0FBQ0E7QUFDQSw0Szs7QUFFQSxzQztBQUNBLHFDO0FBQ0E7QUFDQSxnQjtBQUNBLEk7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQSx3QztBQUNBO0FBQ0E7Ozs7QUFJQSx5RTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakd1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBLHVCO0FBQ0Esa0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHO0FBQ0EseUU7O0FBRUEsMEI7QUFDQSxjO0FBQ0EsbUI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDJFO0FBQ0E7O0FBRUEsa0M7QUFDQSxxRTtBQUNBO0FBQ0E7QUFDQSxvQjtBQUNBLHVDO0FBQ0Esd0M7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0I7QUFDQTtBQUNBLG9COztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG9DO0FBQ0Esa0M7QUFDQSw0QjtBQUNBO0FBQ0EsRUFBRSxFO0FBQ0Y7O0FBRUE7QUFDQSx3RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0Q7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDJCO0FBQ0EsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQjs7QUFFQTs7QUFFQSxFQUFFLDhCQUE4QjtBQUNoQztBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsd0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsRUFBRSx1REFBdUQ7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSw0QztBQUNBLFU7QUFDQSx1QztBQUNBLEU7QUFDQSwrQztBQUNBLFU7QUFDQTtBQUNBO0FBQ0EsK0M7QUFDQSxVO0FBQ0EsdUM7QUFDQSxFO0FBQ0EsOEM7QUFDQTtBQUNBO0FBQ0EsRTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSw4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsRztBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEVBQUUsRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEM7QUFDQSxFQUFFLEU7QUFDRjs7QUFFQSwyRDtBQUNBO0FBQ0EsbUM7QUFDQSxnQztBQUNBO0FBQ0E7QUFDQSxjO0FBQ0EsRTtBQUNBO0FBQ0E7O0FBRUEsMkM7QUFDQTtBQUNBLDZCOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxrQztBQUNBLEU7O0FBRUEsaUQ7QUFDQSx3Qjs7QUFFQSxxQjtBQUNBO0FBQ0EsRUFBRSxFO0FBQ0Y7O0FBRUE7QUFDQSwwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbUI7QUFDQSxrRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw0QztBQUNBLGdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7QUFDQTtBQUNBOztBQUVBLG9EO0FBQ0E7QUFDQSxnQztBQUNBO0FBQ0E7O0FBRUEsbUQ7QUFDQSw4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTtBQUNBOzs7QUFHQSxtRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5U2dCO0FBQ2hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBLDJCO0FBQ0EsNEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMEI7QUFDQTs7QUFFQTs7QUFFQSwwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5RztBQUNBO0FBQ0E7O0FBRUEsc0M7O0FBRUE7QUFDQSxnRDtBQUNBLEVBQUUsRTtBQUNGOztBQUVBLHlEO0FBQ0E7QUFDQSwrQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLE9BQU87QUFDdkIsaUY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0IsT0FBTztBQUN2QixnRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJOztBQUVBO0FBQ0Esb0Q7QUFDQTtBQUNBLDJFO0FBQ0E7QUFDQSxJO0FBQ0EsRzs7QUFFQTtBQUNBLGdDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdCO0FBQ0EsRUFBRSxFO0FBQ0Y7O0FBRUE7O0FBRUE7O0FB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QTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCO0FBQzFCOztBQUVBLG1FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQjtBQUNBLGlCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSw4QztBQUNBO0FBQ0EscUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLHVDQUF1QztBQUM1QyxLQUFLLHdDQUF3QztBQUM3QztBQUNBO0FBQ0EsRUFBRTtBQUNGLGU7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1CO0FBQ0EsRUFBRSxFO0FBQ0Y7QUFDQTtBQUNBLGlCO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFOztBQUVGLHVDO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUEscUQ7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSTtBQUNBLENBQUM7O0FBRUQ7QUFDQSwyRjtBQUNBLHlDO0FBQ0E7QUFDQTtBQUNBLEU7QUFDQTtBQUNBLHVCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx5QztBQUNBOztBQUVBLHVDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUI7QUFDQTs7QUFFQTtBQUNBLGdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5QjtBQUNBLHlCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QztBQUNBOztBQUVBLGtCO0FBQ0E7QUFDQTs7QUFFQSx5QztBQUNBLGM7QUFDQTtBQUNBO0FBQ0E7O0FBRUEseUM7QUFDQTs7QUFFQSxzQjtBQUNBOztBQUVBLGdCO0FBQ0Esa0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsa0I7QUFDQSx3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTTtBQUNBOztBQUVBLDREO0FBQ0E7O0FBRUEsb0I7QUFDQTtBQUNBOztBQUVBOztBQUVBLHdDOztBQUVBO0FBQ0Esd0M7QUFDQSxjO0FBQ0E7QUFDQSxtRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE07QUFDQSxXO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sRTtBQUNOLFc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsVztBQUNBO0FBQ0E7QUFDQSwyQztBQUNBLHNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXO0FBQ0E7QUFDQSxXO0FBQ0E7QUFDQSxHO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxtRTtBQUNBO0FBQ0EsRTs7O0FBR0E7QUFDQTtBQUNBLHNCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHO0FBQ0EsRTtBQUNBOzs7QUFHQSx1RTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOVNBOztBQUVxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBLDREO0FBQ0EscUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLHVDQUF1QztBQUM1QyxLQUFLLHdDQUF3QztBQUM3QztBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsZTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQztBQUNBO0FBQ0EsRUFBRSxFO0FBQ0Y7O0FBRUEsMEM7QUFDQTs7QUFFQSx3QztBQUNBLHVDO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLHVCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwrQjtBQUNBO0FBQ0EsMEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVFO0FBQ0E7QUFDQTtBQUNBLHFCO0FBQ0E7O0FBRUEsK0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUM7O0FBRUEsZ0M7QUFDQTtBQUNBLHFCOztBQUVBLHNDO0FBQ0E7O0FBRUEsa0Q7QUFDQTtBQUNBLDZCO0FBQ0E7QUFDQSxnQjtBQUNBO0FBQ0Esc0I7QUFDQSxFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGM7QUFDQTtBQUNBO0FBQ0EsRztBQUNBLEVBQUU7QUFDRixtQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRTtBQUNBLFc7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMEI7QUFDQSxFO0FBQ0E7QUFDQTs7QUFFQSxtRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRztBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixHO0FBQ0EsRUFBRSxFO0FBQ0Y7QUFDQTs7QUFFQTtBQUNBLHdDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHVDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSw0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUI7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHVDO0FBQ0E7QUFDQSxrQjtBQUNBLDhCO0FBQ0E7QUFDQTtBQUNBLHVDO0FBQ0E7O0FBRUE7QUFDQSxxQztBQUNBO0FBQ0EsdUI7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVB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USxPOztBQUV4QjtBQUNBLHNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDOztBQUV6Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSztBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTtBQUNBOztBQUVBLDBDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjs7QUFFQSxvRTtBQUNBLDRFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOztBQUVBLG1CO0FBQ0Esb0M7QUFDQTtBQUNBLHdFO0FBQ0E7QUFDQSwrQjtBQUNBLEc7QUFDQSxLQUFLOztBQUVMLHlCOztBQUVBO0FBQ0EsZ0Q7QUFDQTtBQUNBLFNBQVMsa0JBQWtCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEY7QUFDQSxJO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSw0QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDBDO0FBQ0E7QUFDQTtBQUNBLGdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQSxvRTs7Ozs7Ozs7Ozs7QUNqTEEsZTs7Ozs7Ozs7Ozs7QUNBQSxlIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpblwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL21haW4uanNcIixcInZlbmRvcnN+bWFpblwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsInZhciBDb25zdCA9IHtcclxuXHRIT1NUX0lEOiAwLFxyXG5cdFxyXG5cdE1BWF9QTEFZRVJTX1JPT006IDUsIFxyXG5cdE1BWF9QRUVSX1BBQ0tFVFM6IDIwLFxyXG5cdFxyXG5cdFRJQ1NfUEVSX1NFQ09ORDogMTAsXHJcblx0UkVOREVSX1BFUl9TRUNPTkQ6IDYwLFxyXG5cdFJFTkRFUlNfUEVSX1RJQ0s6IDYsIC8vIFJFTkRFUl9QRVJfU0VDT05EIC8gVElDU19QRVJfU0VDT05EXHJcblx0VElNRU9VVF9HQU1FX1NUQVJUOiA2MDAwLFxyXG5cdFxyXG5cdFBMQVlFUl9OQU1FX0NIQVJTOiAxNixcclxuXHRCWVRFU19GT1JfQ0hBUjogMiwgXHJcblx0XHJcblx0Ly9XT1JLRVJfVElNRU9VVDogMTAwLFxyXG5cdFxyXG5cdFNUQUdFX1NDQUxFOiAyLjAsXHJcblx0VElMRV9TSVpFOiAxNixcdFxyXG5cdFxyXG5cdFBMQVlFUl9ERUZBVUxUX1ZJU0lPTl9SQURJVVM6IDYsXHRcclxuXHRQTEFZRVJfQVRBQ0tfUkFESVVTOiAzMixcclxuXHRNT0JfQVRBQ0tfUkFESVVTOiAyNCxcclxuXHQvL1BMQVlFUl9ERUZBVUxUX0hFQUxUSDogMTAwLFx0XHJcblx0XHJcblx0Q0hBVF9NRVNTQUdFX01BWDogNDhcdFxyXG59O1xyXG5cclxuLyp2YXIgU2lnbmFsID0ge1x0XHJcblx0Ly/RgdC+0L7QsdGJ0LXQvdC40Y8g0L7RgiDRgdC40LPQvdCw0LvRjNC90L7Qs9C+INGB0LXRgNCy0LXRgNCwXHJcblx0Um9vbUxpc3Q6IFx0IDAsXHJcblx0UGxheWVyTGlzdDogIDEsXHJcblx0SG9zdExlYXZlOiBcdCAyLFxyXG5cdENsaWVudFRva2VuOiAzLFxyXG5cdEhvc3RUb2tlbjogXHQgNCxcclxuXHQvL9GB0L7QvtCx0YnQtdC90LjRjyDQtNC70Y8g0YHQuNCz0L3QsNC70YzQvdC+0LPQviDRgdC10YDQstC10YDQsFxyXG5cdENyZWF0ZVJvb206ICA1LFx0XHJcblx0Sm9pblJvb206IFx0IDYsXHRcclxuXHRMZWF2ZVJvb206IFx0IDcsXHRcclxufTsqL1xyXG5cclxudmFyIE1zZyA9IHtcdFxyXG5cdENoYXQ6ICAxLFxyXG5cdC8v0L/QsNC60LXRgtGLINGF0L7RgdGC0LBcclxuXHRTdGFydDogMixcclxuXHRMZWF2ZTogMyxcclxuXHRNYXA6ICAgNCxcclxuXHRIb3N0U3RhdGU6IDUsXHQgIFxyXG5cdFBvbmc6IDYsXHJcblx0Ly/Qv9Cw0LrQtdGC0Ysg0LrQu9C40LXQvdGC0LBcclxuXHRDbGllbnRSZWFkeTogNyxcclxuXHRDbGllbnRBY3Rpb246IDgsXHJcblx0UGluZzogOVx0XHRcdFxyXG59O1xyXG5cclxudmFyIEVudGl0eVN0YXRlID0ge1x0XHJcbiAgICBEZWZhdWx0OiAwLFxyXG5cdENyZWF0ZTogMSxcclxuXHRSZW1vdmU6IDIsIC8vID09IERlYWRcclxuXHRNb3ZlOiAzLFxyXG5cdFNlYXJjaFBsYXllcjogNFx0XHRcclxufTtcclxuXHJcbnZhciBJdGVtU3RhdGUgPSB7XHRcclxuICAgIERlZmF1bHQ6IDAsXHJcblx0Q3JlYXRlOiAxLFxyXG5cdFJlbW92ZTogMiwgXHJcblx0UGlja3VwOiAzLFxyXG5cdERyb3A6IDQsXHJcblx0RXF1aXA6IDUsXHJcblx0VW5lcXVpcDogNlx0XHRcclxufTtcclxuXHJcbnZhciBFbnRpdHlUeXBlID0ge1xyXG5cdE1vdXNlOiAwLFxyXG5cdFNrZWxldG9uOiAxLFxyXG5cdFpvbWJpZTogMixcclxuXHRNYWdlOiAzLFxyXG5cdFxyXG5cdC8vIGlkID4gOTkgcHJvamVjdGlsZVxyXG5cdEZpcmVCYWxsOiAxMDBcdFxyXG59O1xyXG5cclxudmFyIFRpbGVUeXBlID0ge1xyXG5cdEZsb29yOiAwLFxyXG5cdEVtcHR5OiAxLFx0XHJcblx0V2FsbDogMyxcclxuXHREb29yOiA0XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IHsgQ29uc3QsIE1zZywgVGlsZVR5cGUsIEVudGl0eVR5cGUsIEVudGl0eVN0YXRlLCBJdGVtU3RhdGUgfTsgIiwiaW1wb3J0IHsgQ29uc3QsIEVudGl0eVN0YXRlIH0gZnJvbSAnY29uc3QuanMnXHJcbmltcG9ydCBJbnZlbnRvcnkgZnJvbSAnZW50aXR5L2ludmVudG9yeS5qcydcclxuXHJcblxyXG5mdW5jdGlvbiBFbnRpdHkoZ2FtZSwgaWQpIHtcclxuXHR0aGlzLmdhbWUgPSBnYW1lO1x0XHJcblx0dGhpcy5yZW5kZXIgPSBnYW1lLnJlbmRlcjtcclxuXHR0aGlzLndvcmxkID0gZ2FtZS53b3JsZDtcdFxyXG5cdHRoaXMuaWQgPSBpZDtcdFxyXG5cdHRoaXMudHlwZSA9IDA7XHRcdFxyXG5cdHRoaXMueCA9IDA7XHJcblx0dGhpcy55ID0gMDtcdFx0XHJcblx0dGhpcy5sYXN0WCA9IDA7XHJcblx0dGhpcy5sYXN0WSA9IDA7XHRcclxuXHR0aGlzLmFjdGl2ZVNwZWVkID0gMS4wO1x0XHJcblx0dGhpcy5tb3Rpb25YID0gMDtcdFxyXG5cdHRoaXMubW90aW9uWSA9IDA7XHRcdFxyXG5cdC8v0L3QsNC/0YDQsNCy0LvQtdC90LjQtVxyXG5cdHRoaXMuZGlyID0gMTsgLy9bLTE7MV1cclxuXHQvL1xyXG5cdHRoaXMuc3RhdGU7XHJcblx0dGhpcy5pbnZlbnRvcnkgPSBuZXcgSW52ZW50b3J5KHRoaXMpO1xyXG5cdFx0XHJcblx0dGhpcy5jb250YWluZXIgPSBudWxsO1x0XHJcblx0Ly/QsNC60YLQuNCy0L3Ri9C5INGB0L/RgNCw0LnRglxyXG5cdHRoaXMuc3ByaXRlID0gbnVsbDtcdFxyXG5cdHRoaXMuc3ByaXRlVyA9IDE2O1xyXG5cdHRoaXMuc3ByaXRlSCA9IDE2O1xyXG5cdFxyXG5cdHRoaXMuaGVhbHRoID0gMTAwO1xyXG5cdHRoaXMuaGVhbHRoTWF4ID0gMTAwO1xyXG5cdFxyXG5cdHRoaXMubGFzdEF0dGNrQ291bnQgPSAwO1xyXG5cdHRoaXMuYXR0YWNrQ29vbGRvd24gPSAxMDtcclxuXHR0aGlzLmF0dGFja0RhbWFnZSA9IDIwO1xyXG5cdHRoaXMuaHVydGVkID0gMDtcclxuXHQvL1xyXG5cdHRoaXMuc3BlbGxjYXN0ID0gbnVsbDtcclxuXHR0aGlzLmxhc3RDYXN0Q291bnQgPSAwO1xyXG5cdHRoaXMuY2FzdENvb2xkb3duID0gMTA7XHJcbn1cclxuXHRcdFxyXG4vLyBAUmVuZGVyXHJcbkVudGl0eS5wcm90b3R5cGUuaW5pdFNwcml0ZXMgPSBmdW5jdGlvbigpIHtcdFx0XHJcblx0dGhpcy5zcHJpdGVzID0gdGhpcy5yZW5kZXIuc3ByaXRlcztcclxufVxyXG5cclxuRW50aXR5LnByb3RvdHlwZS5pc0luRW50aXR5U3ByaXRlID0gZnVuY3Rpb24oeCwgeSkge1xyXG5cdHZhciB4MiA9IHRoaXMuc3ByaXRlVyAqIDAuNSxcclxuXHRcdHkxID0gdGhpcy55IC0gMC44NSp0aGlzLnNwcml0ZUgsXHJcblx0XHR5MiA9IHRoaXMueSArIDAuMTUqdGhpcy5zcHJpdGVIO1xyXG5cdGlmKHg+dGhpcy54LXgyICYmIHg8dGhpcy54K3gyICYmIHk+eTEgJiYgeTx5MikgcmV0dXJuIHRydWU7XHJcblx0cmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5FbnRpdHkucHJvdG90eXBlLnBvaW50SW50ZXJzZWN0VGlsZSA9IGZ1bmN0aW9uKHgsIHksIHRpLCB0aikge1xyXG5cdHZhciB4MCx4MSx5MCx5MTtcclxuXHR4MCA9IHRpICogQ29uc3QuVElMRV9TSVpFOyB4MSA9IHgwICsgQ29uc3QuVElMRV9TSVpFO1xyXG5cdHkwID0gdGogKiBDb25zdC5USUxFX1NJWkU7IHkxID0geTAgKyBDb25zdC5USUxFX1NJWkU7XHJcblx0XHJcblx0aWYoeD49eDAmJng8PXgxICYmIHk+PXkwJiZ5PD15MSkgcmV0dXJuIHRydWU7XHJcblx0cmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5FbnRpdHkucHJvdG90eXBlLmRpckZyb21Nb3Rpb24gPSBmdW5jdGlvbigpIHtcclxuXHRpZih0aGlzLm1vdGlvblggPiAwKSB7XHJcblx0XHR0aGlzLmRpciA9IDE7XHRcdFx0XHJcblx0fSBlbHNlIGlmKHRoaXMubW90aW9uWCA8IDApIHtcclxuXHRcdHRoaXMuZGlyID0gLTE7XHRcdFxyXG5cdH0gXHJcbn1cclxuXHJcbkVudGl0eS5wcm90b3R5cGUudXBkYXRlQ29udGFpbmVyID0gZnVuY3Rpb24oKSB7XHRcclxuXHQvL3RoaXMuZGlyRnJvbU1vdGlvbigpO1xyXG5cdFxyXG5cdGlmKCF0aGlzLmNvbnRhaW5lcikgcmV0dXJuO1xyXG5cdFxyXG5cdC8vZmxpcCDRgdC/0YDQsNC50YLQsFxyXG5cdGlmKHRoaXMuZGlyID09IC0xKSB7XHJcblx0XHR0aGlzLnNwcml0ZS5zY2FsZS54ID0gMTtcdFxyXG5cdH0gZWxzZSBpZiAodGhpcy5kaXIgPT0gMSkge1xyXG5cdFx0dGhpcy5zcHJpdGUuc2NhbGUueCA9IC0xO1xyXG5cdH1cclxufVxyXG5cclxuRW50aXR5LnByb3RvdHlwZS5wcmVkaWN0ID0gZnVuY3Rpb24oKSB7fVxyXG5cdFxyXG5FbnRpdHkucHJvdG90eXBlLnVzaW5nID0gZnVuY3Rpb24oKSB7IFxyXG5cdHRoaXMuYWN0aXZhdGUgPSBudWxsO1xyXG5cdHJldHVybiBmYWxzZTsgXHJcbn1cclxuXHJcbi8vIEBIb3N0XHJcbkVudGl0eS5wcm90b3R5cGUuY2FzdCA9IGZ1bmN0aW9uKGNvdW50KSB7IFxyXG5cdGlmKGNvdW50IC0gdGhpcy5sYXN0Q2FzdENvdW50ID4gdGhpcy5jYXN0Q29vbGRvd24pIHtcclxuXHRcdHRoaXMubGFzdENhc3RDb3VudCA9IGNvdW50O1xyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG5cdHJldHVybiBmYWxzZTsgXHJcbn1cclxuXHJcbi8vIEBIb3N0XHJcbkVudGl0eS5wcm90b3R5cGUuYXR0YWNrID0gZnVuY3Rpb24odGFyZ2V0LCBjb3VudCkge1xyXG5cdGlmKGNvdW50IC0gdGhpcy5sYXN0QXR0Y2tDb3VudCA+IHRoaXMuYXR0YWNrQ29vbGRvd24pIHtcclxuXHRcdHRoaXMubGFzdEF0dGNrQ291bnQgPSBjb3VudDtcclxuXHRcdHRhcmdldC5odXJ0KHRoaXMuYXR0YWNrRGFtYWdlLCB0aGlzKTtcdFxyXG5cdFx0Ly/Qv9C+0LLQvtGA0L7RgiDQuiDRhtC10LvQuFxyXG5cdFx0dGhpcy5kaXIgPSAodGFyZ2V0LnggPiB0aGlzLngpID8gMSA6IC0xOyBcclxuXHR9XHJcbn1cclxuXHJcbi8vIEBIb3N0XHJcbkVudGl0eS5wcm90b3R5cGUuYXR0YWNrZWQgPSBmdW5jdGlvbihlbnRpdHkpIHt9XHJcblxyXG5FbnRpdHkucHJvdG90eXBlLmh1cnQgPSBmdW5jdGlvbihkYW1hZ2UsIGVudGl0eSkge1xyXG5cdGlmKGRhbWFnZSA9PSAwKSByZXR1cm47XHJcblx0XHJcblx0dGhpcy5odXJ0ZWQgKz0gZGFtYWdlO1x0XHRcclxuXHQvLyBAQ2xpZW50XHJcblx0aWYodGhpcy5jb250YWluZXIpIHtcclxuXHRcdHRoaXMuc3ByaXRlLnRpbnQgPSAweEZGMDAwMDtcclxuXHRcdFxyXG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdHRoaXMuc3ByaXRlLnRpbnQgPSAweEZGRkZGRjtcdFx0XHRcclxuXHRcdH0sIDE1MCk7IFxyXG5cdH1cdFxyXG5cdC8vIEBIb3N0XHJcblx0aWYoZW50aXR5KSB7XHJcblx0XHR0aGlzLmF0dGFja2VkKGVudGl0eSk7XHJcblx0fVx0XHJcblx0XHJcblx0dGhpcy5oZWFsdGggLT0gZGFtYWdlO1xyXG5cdGlmKHRoaXMuaGVhbHRoIDw9IDApIHtcclxuXHRcdHRoaXMuaGVhbHRoID0gMDtcclxuXHRcdHRoaXMua2lsbCgpO1xyXG5cdH1cclxufVxyXG5cclxuRW50aXR5LnByb3RvdHlwZS5raWxsID0gZnVuY3Rpb24oKSB7XHJcblx0dGhpcy5kZWFkID0gdHJ1ZTtcclxuXHQvLyBAQ2xpZW50XHJcblx0aWYodGhpcy5jb250YWluZXIpIHtcclxuXHRcdGNvbnNvbGUubG9nKFwiY2xpZW50IGtpbGxcIik7XHJcblx0XHR0aGlzLmdhbWUuZW50aXR5RGllKHRoaXMuaSwgdGhpcy5qKTtcclxuXHRcdHJldHVybjtcclxuXHR9XHRcclxuXHQvLyBASG9zdFxyXG5cdHRoaXMuZ2FtZS5lbnRpdHlsaXN0LnJlbW92ZSh0aGlzLmlkKTtcclxufVxyXG5cclxuRW50aXR5LnByb3RvdHlwZS5pc0h1cnRlZCA9IGZ1bmN0aW9uKCkge1xyXG5cdHZhciBodXJ0ZWQgPSB0aGlzLmh1cnRlZDtcclxuXHR0aGlzLmh1cnRlZCA9IDA7XHJcblx0cmV0dXJuIGh1cnRlZDtcclxufVxyXG5cclxuLy8gQENsaWVudFxyXG5FbnRpdHkucHJvdG90eXBlLmlzVmlzaWJsZSA9IGZ1bmN0aW9uKCkge1x0XHJcblx0aWYoIXRoaXMuY29udGFpbmVyKSByZXR1cm47XHJcblx0XHJcblx0dGhpcy5jb250YWluZXIudmlzaWJsZSA9IHRoaXMud29ybGQuaXNWaXNpYmxlKHRoaXMuaSwgdGhpcy5qKTtcclxufVxyXG5cclxuRW50aXR5LnByb3RvdHlwZS5zZXRQb3NpdGlvbiA9IGZ1bmN0aW9uKHgsIHkpIHtcdFxyXG5cdHRoaXMueCA9IHg7XHJcblx0dGhpcy55ID0geTtcdFx0XHJcblx0dGhpcy5sYXN0WCA9IHg7XHJcblx0dGhpcy5sYXN0WSA9IHk7XHRcclxuXHR0aGlzLmkgPSB+fih0aGlzLnggLyBDb25zdC5USUxFX1NJWkUpO1xyXG5cdHRoaXMuaiA9IH5+KHRoaXMueSAvIENvbnN0LlRJTEVfU0laRSk7XHRcclxufVxyXG5cclxuLy8gQFJlbmRlclxyXG5FbnRpdHkucHJvdG90eXBlLm1vdmluZyA9IGZ1bmN0aW9uKGRlbHRhKSB7XHRcclxuXHR0aGlzLnggKz0gdGhpcy5tb3Rpb25YOy8vICogZGVsdGE7XHJcblx0dGhpcy55ICs9IHRoaXMubW90aW9uWTsvLyAqIGRlbHRhO1x0XHJcbn1cclxuXHJcbi8vIEBDbGllbnRcclxuRW50aXR5LnByb3RvdHlwZS51cGRhdGVDbGllbnQgPSBmdW5jdGlvbigpIHtcdFx0XHJcblx0dGhpcy5pID0gfn4odGhpcy54IC8gQ29uc3QuVElMRV9TSVpFKTtcclxuXHR0aGlzLmogPSB+fih0aGlzLnkgLyBDb25zdC5USUxFX1NJWkUpO1x0XHJcblx0XHJcblx0dGhpcy5tb3ZlKCk7XHRcclxufVxyXG4vLyBASG9zdFxyXG5FbnRpdHkucHJvdG90eXBlLnVwZGF0ZUhvc3QgPSBmdW5jdGlvbihjb3VudCkge1xyXG5cdHRoaXMudXBkYXRlQ2xpZW50KCk7XHJcbn1cclxuXHJcbkVudGl0eS5wcm90b3R5cGUubW92ZSA9IGZ1bmN0aW9uKCkge1x0XHJcblx0Ly/QstGL0YfQuNGB0LvQuNGC0Ywg0YHQutC+0YDQvtGB0YLRjCDQv9C+INC90L7QstC+0Lkg0L/QvtC30LjRhtC40Lgg0L7RgiDRhdC+0YHRgtCwXHJcblx0dGhpcy5tb3Rpb25YID0gKHRoaXMudGFyZ2V0WCAtIHRoaXMubGFzdFgpIC8gQ29uc3QuUkVOREVSU19QRVJfVElDSztcdFxyXG5cdHRoaXMubW90aW9uWSA9ICh0aGlzLnRhcmdldFkgLSB0aGlzLmxhc3RZKSAvIENvbnN0LlJFTkRFUlNfUEVSX1RJQ0s7XHRcclxuXHRcclxuXHQvKnRoaXMudGFyZ2V0WCA9IHRoaXMubGFzdFg7XHJcblx0dGhpcy50YXJnZXRZID0gdGhpcy5sYXN0WTsqL1xyXG5cdFxyXG5cdHRoaXMudXBkYXRlQ29udGFpbmVyKCk7XHRcdFxyXG59XHJcblxyXG5FbnRpdHkucHJvdG90eXBlLnNldEhvc3RTdGF0ZSA9IGZ1bmN0aW9uKHRpbWVTdGFtcCwgeCwgeSkge1x0XHJcblx0dGhpcy5sYXN0WCA9IHRoaXMueDtcclxuXHR0aGlzLmxhc3RZID0gdGhpcy55O1xyXG5cdHRoaXMudGFyZ2V0WCA9IHg7XHJcblx0dGhpcy50YXJnZXRZID0geTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVudGl0eSIsImltcG9ydCB7IENvbnN0IH0gZnJvbSAnY29uc3QuanMnXHJcblxyXG5cclxuZnVuY3Rpb24gSW52ZW50b3J5KGVudGl0eSkge1xyXG5cdHRoaXMuZW50aXR5ID0gZW50aXR5O1xyXG5cdHRoaXMuaXRlbXMgPSBbXTtcclxuXHR0aGlzLmVxdWlwZWQgPSBbXTtcclxufVxyXG5cclxuSW52ZW50b3J5LnByb3RvdHlwZS5nZXRGcmVlU2xvdCA9IGZ1bmN0aW9uKCkge1xyXG5cdHZhciBpbmRleCA9IDA7XHJcblx0cmV0dXJuIGluZGV4O1xyXG59XHJcblxyXG5JbnZlbnRvcnkucHJvdG90eXBlLnB1dCA9IGZ1bmN0aW9uKGl0ZW0pIHtcclxuXHRyZXR1cm4gZmFsc2U7XHJcbn1cclxuSW52ZW50b3J5LnByb3RvdHlwZS5wdXRUb0luZGV4ID0gZnVuY3Rpb24oaXRlbSwgaW5kZXgpIHtcclxuXHRyZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbkludmVudG9yeS5wcm90b3R5cGUuZHJvcCA9IGZ1bmN0aW9uKGl0ZW0pIHtcclxuXHRcclxufVxyXG5cclxuSW52ZW50b3J5LnByb3RvdHlwZS5lcXVpcCA9IGZ1bmN0aW9uKGl0ZW0pIHtcclxuXHRcclxufVxyXG5cclxuSW52ZW50b3J5LnByb3RvdHlwZS51bmVxdWlwID0gZnVuY3Rpb24oaXRlbSkge1xyXG5cdFxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW52ZW50b3J5IiwiaW1wb3J0IHsgQ29uc3QsIEVudGl0eVN0YXRlIH0gZnJvbSAnY29uc3QuanMnXHJcbmltcG9ydCBNb2IgZnJvbSAnZW50aXR5L21vYi5qcydcclxuXHJcblxyXG52YXIgTWFnZSA9IGZ1bmN0aW9uKGdhbWUsIGlkKSB7XHJcblx0TW9iLmNhbGwodGhpcywgZ2FtZSwgaWQpO1xyXG5cdFxyXG5cdHRoaXMuYWN0aXZlU3BlZWQgPSAwLjY7IC8vIDAuNi8wLjgvMS4zXHRcdFxyXG5cdHRoaXMudHlwZSA9IDM7IC8vRW50aXR5VHlwZS5NYWdlXHRcclxuXHR0aGlzLmhlYWx0aCA9IDEwMDtcclxuXHRcclxuXHR0aGlzLmNhc3RDb29sZG93biA9IDE1O1xyXG5cdHRoaXMucmFkaXVzID0gNTtcclxufVxyXG5cclxuTWFnZS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKE1vYi5wcm90b3R5cGUpO1xyXG5NYWdlLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IE1hZ2U7XHJcblxyXG4vLyBAUmVuZGVyXHJcbk1hZ2UucHJvdG90eXBlLmluaXRTcHJpdGVzID0gZnVuY3Rpb24oKSB7XHJcblx0TW9iLnByb3RvdHlwZS5pbml0U3ByaXRlcy5jYWxsKHRoaXMpO1x0XHJcblx0XHJcblx0dGhpcy5zcHJpdGUgPSB0aGlzLnNwcml0ZXMubmV3QW5pbWF0ZWRTcHJpdGUoJ21hZ2UnKTtcclxuXHR0aGlzLnNwcml0ZS5hbmNob3IueCA9IDAuNTtcdFxyXG5cdHRoaXMuc3ByaXRlLnBsYXkoKTtcclxuXHR0aGlzLnNwcml0ZS5wb3NpdGlvbi55IC09IDAuODUgKiB0aGlzLnNwcml0ZS5oZWlnaHQ7XHRcclxuXHRcclxuXHR0aGlzLmNvbnRhaW5lci5hZGRDaGlsZCh0aGlzLnNwcml0ZSk7XHJcblx0Ly90aGlzLmNvbnRhaW5lci5hZGRDaGlsZCh0aGlzLmdyYXBoaWNzKTtcdC8vVEVTVFxyXG59XHJcblxyXG4vLyBASG9zdFxyXG5NYWdlLnByb3RvdHlwZS5haU1vdmUgPSBmdW5jdGlvbihjb3VudCkge1x0XHJcblx0XHJcblx0aWYodGhpcy5zdGVwcyA9PSAwKSB7IC8v0YbQtdC90YLRgCDQutC70LXRgtC60LhcclxuXHRcclxuXHRcdC8vVE9ETyDQv9C10YDQtdGF0L7QtCDQsiDQsdC70LjQttC90LjQuSDQsdC+0Lkg0L/RgNC4INC80LDQu9C+0Lwg0YDQsNGB0YHRgtC+0Y/QvdC40LhcclxuXHRcdGlmKHRoaXMuZ2FtZS5tb2JJblJhZGl1cyh0aGlzLCB0aGlzLnRhcmdldCwgQ29uc3QuTU9CX0FUQUNLX1JBRElVUykpIHtcclxuXHRcdFx0dGhpcy5zdG9wKCk7XHJcblx0XHRcdFxyXG5cdFx0XHR0aGlzLmF0dGFjayh0aGlzLnRhcmdldCwgY291bnQpO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0aWYodGhpcy5idWlsZFNpZ2hsaW5lKHRoaXMud29ybGQubWFwLCB0aGlzLngsIHRoaXMueSwgdGhpcy50YXJnZXQueCwgdGhpcy50YXJnZXQueSwgdGhpcy5yYWRpdXMpKSB7XHRcdFxyXG5cdFx0XHR0aGlzLnN0b3AoKTtcclxuXHRcdFxyXG5cdFx0XHRpZih0aGlzLmNhc3QoY291bnQpKSB7XHRcdFx0XHJcblx0XHRcdFx0dmFyIGRpciA9IHRoaXMuZ2FtZS5wcm9qZWN0aWxlRGlyKHRoaXMueCwgdGhpcy55LCB0aGlzLnRhcmdldC54LCB0aGlzLnRhcmdldC55KTtcclxuXHRcdFx0XHRpZihkaXIpXHJcblx0XHRcdFx0XHR0aGlzLmdhbWUuc3Bhd25Qcm9qZWN0aWxlKHRoaXMsIGRpclswXSwgZGlyWzFdKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0fVx0XHRcclxuXHRcdFx0XHJcblx0aWYoIXRoaXMucGF0aCAmJiAhdGhpcy5fYnVpbGRQYXRoKHRoaXMudGFyZ2V0KSkge1xyXG5cdFx0Ly9jb25zb2xlLmxvZyhcItC90LXRgiDQv9GD0YLQuFwiKTtcclxuXHRcdHRoaXMuY291bnRMb3N0Kys7XHJcblx0XHRpZih0aGlzLmNvdW50TG9zdCA+IDUpIHtcclxuXHRcdFx0dGhpcy5jb3VudExvc3QgPSAwO1xyXG5cdFx0XHR0aGlzLmNsZWFyVGFyZ2V0KCk7XHRcdFx0XHRcdFxyXG5cdFx0XHR0aGlzLnN0YXRlID0gRW50aXR5U3RhdGUuRGVmYXVsdDtcdFx0XHRcdFxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuO1xyXG5cdH1cdFx0XHRcclxuXHRcdFx0XHRcdFx0XHJcblx0dGhpcy5tb3ZlVG9QbGF5ZXIodGhpcy50YXJnZXQpO1x0XHRcdFx0XHRcclxufVxyXG5cclxuLy9URVNUXHJcbi8qXHJcbk1hZ2UucHJvdG90eXBlLnVwZGF0ZUNsaWVudCA9IGZ1bmN0aW9uKCkge1x0XHRcclxuXHRNb2IucHJvdG90eXBlLnVwZGF0ZUNsaWVudC5jYWxsKHRoaXMpO1xyXG5cdFxyXG5cdHRoaXMuYnVpbGRTaWdobGluZSh0aGlzLndvcmxkLm1hcCwgdGhpcy54LCB0aGlzLnksIFxyXG5cdFx0dGhpcy5nYW1lLnBsYXllcnNbMF0ueCwgdGhpcy5nYW1lLnBsYXllcnNbMF0ueSwgXHJcblx0XHR0aGlzLnJhZGl1cyk7XHJcbn1cclxuTWFnZS5wcm90b3R5cGUuaXNWaXNpYmxlID0gZnVuY3Rpb24oKSB7IHJldHVybiB0cnVlOyB9XHJcbiovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWdlIiwiaW1wb3J0IHsgQ29uc3QsIEVudGl0eVN0YXRlIH0gZnJvbSAnY29uc3QuanMnXHJcbmltcG9ydCBFbnRpdHkgZnJvbSAnZW50aXR5L2VudGl0eS5qcydcclxuXHJcbmltcG9ydCAqIGFzIFJPVCBmcm9tICdyb3QtanMnXHJcblxyXG5cclxudmFyIE1vYiA9IGZ1bmN0aW9uKGdhbWUsIGlkKSB7XHJcblx0RW50aXR5LmNhbGwodGhpcywgZ2FtZSwgaWQpO1xyXG5cdFxyXG5cdHRoaXMuYWN0aXZlU3BlZWQgPSAwLjg7IC8vIDAuNi8wLjgvMS4zXHRcdFxyXG5cdHRoaXMudHlwZSA9IDA7IFxyXG5cdC8v0YHRh9C10YLRh9C40Log0L/QvtGC0LXRgNC4INC40LPRgNC+0LrQsFxyXG5cdHRoaXMuY291bnRMb3N0ID0gMDtcclxuXHRcclxuXHR0aGlzLmxhc3RJID0gMDtcclxuXHR0aGlzLmxhc3RKID0gMDtcdFxyXG5cdHRoaXMudGFyZ2V0SSA9IDA7XHJcblx0dGhpcy50YXJnZXRKID0gMDtcclxuXHRcclxuXHR0aGlzLnRhcmdldHMgPSBbXTtcclxuXHR0aGlzLnRhcmdldCA9IG51bGw7XHJcblx0Ly/QsNCz0YAg0LzQvtCx0LAo0L/QtdGA0LXQutC70Y7Rh9C10L3QuNC1INC90LAg0LDRgtCw0LrRg9GO0YnQtdCz0L4pXHJcblx0dGhpcy5hZ2dyZXNzID0gZmFsc2U7XHJcblx0dGhpcy5yYWRpdXMgPSA2O1xyXG5cdFxyXG5cdHRoaXMudGlsZV9zaXplID0gQ29uc3QuVElMRV9TSVpFO1xyXG5cdHRoaXMudGlsZV9zaXplMSA9IDEgLyB0aGlzLnRpbGVfc2l6ZTtcclxufVxyXG5cclxuTW9iLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRW50aXR5LnByb3RvdHlwZSk7XHJcbk1vYi5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBNb2I7XHJcblxyXG5cclxuTW9iLnByb3RvdHlwZS5haSA9IGZ1bmN0aW9uKGNvdW50KSB7XHRcclxuXHRzd2l0Y2godGhpcy5zdGF0ZSkge1xyXG5cdFx0Y2FzZSBFbnRpdHlTdGF0ZS5EZWZhdWx0OlxyXG5cdFx0XHRpZihjb3VudCAlIDEwID09IDApXHJcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IEVudGl0eVN0YXRlLlNlYXJjaFBsYXllcjtcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIEVudGl0eVN0YXRlLlNlYXJjaFBsYXllcjpcclxuXHRcdFx0Ly9cclxuXHRcdFx0dGhpcy50YXJnZXRzID0gW107XHJcblx0XHRcdHRoaXMuZ2FtZS5wbGF5ZXJzLmZvckVhY2goKHBsYXllcikgPT4ge1xyXG5cdFx0XHRcdGlmKHBsYXllcikge1xyXG5cdFx0XHRcdFx0dmFyIEwyID0gKHBsYXllci5pIC0gdGhpcy5pKSAqIChwbGF5ZXIuaSAtIHRoaXMuaSkgKyAocGxheWVyLmogLSB0aGlzLmopICogKHBsYXllci5qIC0gdGhpcy5qKTtcclxuXHRcdFx0XHRcdGlmKEwyIDwgdGhpcy5yYWRpdXMgKiB0aGlzLnJhZGl1cykge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnRhcmdldHMucHVzaChbcGxheWVyLCBMMl0pO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHRcdGlmKHRoaXMudGFyZ2V0cy5sZW5ndGggPiAwKSB7XHJcblx0XHRcdFx0dGhpcy50YXJnZXRzLnNvcnQoKHAxLCBwMikgPT4ge1xyXG5cdFx0XHRcdFx0cmV0dXJuIHAxWzFdIC0gcDJbMV07XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0dGhpcy50YXJnZXQgPSB0aGlzLnRhcmdldHNbMF1bMF07XHJcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IEVudGl0eVN0YXRlLk1vdmU7XHJcblx0XHRcdFx0YnJlYWs7XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHR9IFxyXG5cdFx0XHR0aGlzLnN0YXRlID0gRW50aXR5U3RhdGUuRGVmYXVsdDtcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgRW50aXR5U3RhdGUuTW92ZTpcdFxyXG5cdFx0XHRpZighdGhpcy50YXJnZXQgfHwgdGhpcy50YXJnZXQuZGVhZCkge1xyXG5cdFx0XHRcdHRoaXMuY2xlYXJUYXJnZXQoKTtcdFxyXG5cdFx0XHRcdHRoaXMuc3RvcCgpO1xyXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSBFbnRpdHlTdGF0ZS5EZWZhdWx0O1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHRcdFxyXG5cdFx0XHRcdFxyXG5cdFx0XHR0aGlzLmFpTW92ZShjb3VudCk7XHJcblx0XHRcdGJyZWFrO1xyXG5cdH1cdFx0XHRcclxufVxyXG5cclxuTW9iLnByb3RvdHlwZS5haU1vdmUgPSBmdW5jdGlvbihjb3VudCkge1x0XHJcblx0aWYodGhpcy5zdGVwcyA9PSAwKSB7XHJcblx0XHRpZih0aGlzLmdhbWUubW9iSW5SYWRpdXModGhpcywgdGhpcy50YXJnZXQsIENvbnN0Lk1PQl9BVEFDS19SQURJVVMpKSB7XHJcblx0XHRcdHRoaXMuc3RvcCgpO1xyXG5cdFx0XHR0aGlzLmF0dGFjayh0aGlzLnRhcmdldCwgY291bnQpO1x0XHRcdFxyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHRcclxuXHR9XHRcdFx0XHRcdFxyXG5cdFx0XHRcclxuXHRpZighdGhpcy5wYXRoICYmICF0aGlzLl9idWlsZFBhdGgodGhpcy50YXJnZXQpKSB7XHJcblx0XHQvL2NvbnNvbGUubG9nKFwi0L3QtdGCINC/0YPRgtC4XCIpO1xyXG5cdFx0dGhpcy5jb3VudExvc3QrKztcclxuXHRcdGlmKHRoaXMuY291bnRMb3N0ID4gNSkge1xyXG5cdFx0XHR0aGlzLmNvdW50TG9zdCA9IDA7XHRcclxuXHRcdFx0dGhpcy5jbGVhclRhcmdldCgpO1x0XHRcdFxyXG5cdFx0XHR0aGlzLnN0YXRlID0gRW50aXR5U3RhdGUuRGVmYXVsdDtcdFx0XHRcdFxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuO1xyXG5cdH0gXHRcdFx0XHJcblx0XHRcdFx0XHRcdFxyXG5cdHRoaXMubW92ZVRvUGxheWVyKHRoaXMudGFyZ2V0KTtcdFx0XHJcbn1cclxuXHJcbk1vYi5wcm90b3R5cGUuY2xlYXJUYXJnZXQgPSBmdW5jdGlvbigpIHtcclxuXHR0aGlzLnRhcmdldCA9IG51bGw7XHJcblx0dGhpcy5hZ2dyZXNzID0gZmFsc2U7XHJcbn1cclxuXHRcclxuLypNb2IucHJvdG90eXBlLmJ1aWxkU2lnaGxpbmUgPSBmdW5jdGlvbihtYXAsIHNpLCBzaiwgdGksIHRqLCByYWRpdXMpIHtcdFxyXG5cdC8vQnJlc2VuaGFtJ3MgbGluZSBhbGdvcml0aG1cdFxyXG5cdHZhciBkZWx0YVggPSBNYXRoLmFicyh0aSAtIHNpKSxcclxuICAgIFx0ZGVsdGFZID0gTWF0aC5hYnModGogLSBzaik7XHJcbiAgICB2YXIgc2lnblggPSBzaSA8IHRpID8gMSA6IC0xLFxyXG4gICAgXHRzaWduWSA9IHNqIDwgdGogPyAxIDogLTE7ICAgXHJcbiAgICB2YXIgZXJyb3IgPSBkZWx0YVggLSBkZWx0YVksXHJcblx0XHRjb3VudCA9IDA7XHJcbiAgICBcclxuICAgIHdoaWxlKHNpICE9IHRpIHx8IHNqICE9IHRqKSB7XHJcbiAgICAgICAgaWYoIW1hcFtzaV1bc2pdLnRyYW5zIHx8IGNvdW50ID4gcmFkaXVzKSB7XHJcblx0XHRcdC8vY29uc29sZS5sb2coXCLQvdC1INCy0LjQttGDXCIpO1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7IFxyXG5cdFx0fVxyXG5cdFx0Y291bnQrKztcdFx0XHJcblx0XHRcclxuICAgICAgICB2YXIgZXJyb3IyID0gZXJyb3IgKiAyOyAgICAgICAgXHJcbiAgICAgICAgaWYoZXJyb3IyID4gLWRlbHRhWSkge1xyXG4gICAgICAgICAgICBlcnJvciAtPSBkZWx0YVk7XHJcbiAgICAgICAgICAgIHNpICs9IHNpZ25YO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihlcnJvcjIgPCBkZWx0YVgpIHtcclxuICAgICAgICAgICAgZXJyb3IgKz0gZGVsdGFYO1xyXG4gICAgICAgICAgICBzaiArPSBzaWduWTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblx0cmV0dXJuIHRydWU7XHJcbn0qL1x0XHJcblxyXG4vL1RFU1RcclxuTW9iLnByb3RvdHlwZS5saW5lID0gZnVuY3Rpb24oeDAsIHkwLCB4LCB5KSB7XHJcblx0aWYoIXRoaXMuZ3JhcGhpY3MpIHJldHVybjtcclxuXHR0aGlzLmdyYXBoaWNzLmNsZWFyKCk7XHJcblx0XHJcblx0dGhpcy5ncmFwaGljcy5saW5lU3R5bGUoMSwgMHg5Njk2OTYpO1xyXG5cdHRoaXMuZ3JhcGhpY3MubW92ZVRvKDAsIDApO1x0XHJcblx0dGhpcy5ncmFwaGljcy5saW5lVG8oeC14MCwgeS15MCk7XHJcblx0dGhpcy5ncmFwaGljcy5jbG9zZVBhdGgoKTtcclxuXHRcclxuXHR0aGlzLmdyYXBoaWNzLl94MCA9IHgwO1xyXG5cdHRoaXMuZ3JhcGhpY3MuX3kwID0geTA7XHJcbn1cclxuTW9iLnByb3RvdHlwZS5wb2ludCA9IGZ1bmN0aW9uKHgsIHksIGNvbG9yKSB7XHJcblx0aWYoIXRoaXMuZ3JhcGhpY3MpIHJldHVybjtcclxuXHR0aGlzLmdyYXBoaWNzLmxpbmVTdHlsZSgwKTsgXHJcblx0dGhpcy5ncmFwaGljcy5iZWdpbkZpbGwoY29sb3IsIDEpO1xyXG5cdHRoaXMuZ3JhcGhpY3MuZHJhd0NpcmNsZSh4LXRoaXMuZ3JhcGhpY3MuX3gwLCB5LXRoaXMuZ3JhcGhpY3MuX3kwLCAxKTtcclxuXHR0aGlzLmdyYXBoaWNzLmVuZEZpbGwoKTtcclxufVxyXG5cclxuTW9iLnByb3RvdHlwZS5pc1NpZ2h0QmxvY2tlZCA9IGZ1bmN0aW9uKG1hcCwgeCwgeSwgb2Zmc2V0WCwgb2Zmc2V0WSkge1xyXG5cdHZhciBuaSA9IH5+KCh4IC0gb2Zmc2V0WCkgKiB0aGlzLnRpbGVfc2l6ZTEpLFxyXG5cdFx0bmogPSB+figoeSAtIG9mZnNldFkpICogdGhpcy50aWxlX3NpemUxKSxcclxuXHRcdHBpID0gfn4oKHggKyBvZmZzZXRYKSAqIHRoaXMudGlsZV9zaXplMSksXHJcblx0XHRwaiA9IH5+KCh5ICsgb2Zmc2V0WSkgKiB0aGlzLnRpbGVfc2l6ZTEpO1xyXG5cdFxyXG5cdHJldHVybiAhKG1hcFtuaV1bbmpdLnRyYW5zICYmIG1hcFtwaV1bcGpdLnRyYW5zKTtcclxufVxyXG5cclxuTW9iLnByb3RvdHlwZS5idWlsZFNpZ2hsaW5lID0gZnVuY3Rpb24obWFwLCB4MCwgeTAsIHgsIHksIHJhZGl1cykge1x0XHJcblx0dmFyIGR4ID0geCAtIHgwLFxyXG4gICAgXHRkeSA9IHkgLSB5MCxcdCBcclxuICAgIFx0ayA9IGR5IC8gZHgsXHRcdFxyXG5cdFx0c2l6ZSA9IHRoaXMudGlsZV9zaXplLFxyXG5cdFx0bGVuMiA9IGR4KmR4ICsgZHkqZHk7XHJcblx0dmFyIHN3YXAsXHJcblx0XHRfeCA9IHgsXHJcblx0XHRfeSA9IHk7XHJcblx0XHRcdFxyXG5cdC8vdGhpcy5saW5lKHgwLCB5MCwgeCwgeSk7IC8vVEVTVFxyXG5cdFxyXG5cdHJhZGl1cyAqPSBzaXplO1xyXG5cdGlmKGxlbjIgPiByYWRpdXMqcmFkaXVzKSByZXR1cm4gZmFsc2U7XHJcblx0XHRcdFxyXG5cdGlmKE1hdGguYWJzKGR5KSA+IE1hdGguYWJzKGR4KSAmJiBkeCAhPSAwKSB7XHJcblx0XHRpZih5MCA+IHkpIHtcdFx0XHRcclxuXHRcdFx0dmFyIHRtcCA9IHk7XHJcblx0XHRcdHkgPSB5MDtcdFx0XHRcclxuXHRcdFx0eTAgPSB0bXA7XHRcdFx0XHJcblx0XHRcdHN3YXAgPSB0cnVlO1xyXG5cdFx0fSBcclxuXHRcdHZhciBpID0gc2l6ZSAqICh+fih5MCAvIHNpemUpICsgMSksXHJcblx0XHRcdGludHg7XHRcdFxyXG5cdFx0Zm9yKDsgaSA8IHk7IGkgKz0gc2l6ZSkge1xyXG4gICAgICAgXHRcdGludHggPSAoaSAtIChfeSAtIGsgKiB4KSkgLyBrO1x0XHRcdFxyXG5cdFx0XHRcdFxyXG5cdFx0XHQvKmlmKHN3YXApIHtcclxuXHRcdFx0XHR0aGlzLnBvaW50KGludHgsIGksIDB4REUwMDAwKTsgLy9URVNUXHRcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR0aGlzLnBvaW50KGludHgsIGksIDB4MDBERTAwKTsgLy9URVNUXHRcclxuXHRcdFx0fSovXHRcclxuXHRcdFx0XHJcblx0XHRcdGlmKHRoaXMuaXNTaWdodEJsb2NrZWQobWFwLCBpbnR4LCBpLCAwLCA0KSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgXHR9IFxyXG4gICAgfSBlbHNlIHtcclxuXHRcdGlmKGR4ID09IDApIGsgPSAwO1x0XHJcblx0XHRcclxuXHRcdGlmKHgwID4geCkge1x0XHRcdFxyXG5cdFx0XHR2YXIgdG1wID0geDtcclxuXHRcdFx0eCA9IHgwO1xyXG5cdFx0XHR4MCA9IHRtcDtcclxuXHRcdFx0c3dhcCA9IHRydWU7XHJcblx0XHR9IFxyXG5cdFx0dmFyIGkgPSBzaXplICogKH5+KHgwIC8gc2l6ZSkgKyAxKSxcclxuXHRcdFx0aW50eTtcclxuXHRcdGZvcig7IGkgPCB4OyBpICs9IHNpemUpIHtcclxuICAgICAgIFx0XHRpbnR5ID0gayAqIGkgKyB5IC0gayAqIF94O1xyXG5cdFx0XHRcclxuXHRcdFx0LyppZihzd2FwKSB7XHJcblx0XHRcdFx0dGhpcy5wb2ludChpLCBpbnR5LCAweERFMDAwMCk7IC8vVEVTVFx0XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhpcy5wb2ludChpLCBpbnR5LCAweDAwREUwMCk7IC8vVEVTVFx0XHJcblx0XHRcdH0qL1xyXG5cdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdGlmKHRoaXMuaXNTaWdodEJsb2NrZWQobWFwLCBpLCBpbnR5LCA0LCAwKSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgXHR9ICAgICAgXHJcblx0fVx0XHRcclxuXHRyZXR1cm4gdHJ1ZTtcclxufVx0XHJcblxyXG4vLyBASG9zdFxyXG5Nb2IucHJvdG90eXBlLmJ1aWxkUGF0aCA9IGZ1bmN0aW9uKG1hcCwgc2ksIHNqLCB0aSwgdGosIGFsdGVybmF0aXZlKSB7XHRcclxuXHRpZihhbHRlcm5hdGl2ZSkge1xyXG5cdFx0dGhpcy5hc3RhciA9IG5ldyBST1QuUGF0aC5BU3Rhcih0aSwgdGosIChpLCBqKSA9PiB7XHRcclxuXHRcdFx0aWYobWFwW2ldW2pdLmlkICYmIG1hcFtpXVtqXS5pZCAhPSB0aGlzLmlkKSByZXR1cm4gZmFsc2U7XHRcclxuXHRcdFx0cmV0dXJuIG1hcFtpXVtqXS5wYXNzO1xyXG5cdFx0fSk7XHJcblx0fSBlbHNlIHtcclxuXHRcdHRoaXMuYXN0YXIgPSBuZXcgUk9ULlBhdGguQVN0YXIodGksIHRqLCAoaSwgaikgPT4ge1x0XHRcclxuXHRcdFx0cmV0dXJuIG1hcFtpXVtqXS5wYXNzO1xyXG5cdFx0fSk7XHJcblx0fVx0XHJcblx0dGhpcy5wYXRoID0gW107XHJcblx0dGhpcy5hc3Rhci5jb21wdXRlKHNpLCBzaiwgKGksIGopID0+IHtcclxuXHRcdHRoaXMucGF0aC5wdXNoKFtpLCBqXSk7XHJcblx0fSk7XHJcbn1cdFxyXG5cdFxyXG5Nb2IucHJvdG90eXBlLm1vdmVUb1BsYXllciA9IGZ1bmN0aW9uKHBsYXllcikge1x0XHRcdFxyXG5cdGlmKHRoaXMuc3RlcHMgPT0gMCkge1x0XHJcblx0XHQvL9C60L7QvdC10YYg0L/Rg9GC0LhcclxuXHRcdGlmKHRoaXMubm9kZSA9PSB0aGlzLnBhdGgubGVuZ3RoLTEpIHtcclxuXHRcdFx0dGhpcy5fYnVpbGRQYXRoKHBsYXllcik7XHJcblx0XHR9XHJcblx0XHR0aGlzLm5vZGUrKztcclxuXHRcdFxyXG5cdFx0Ly/Qv9GA0L7QstC10YDRj9C10Lwg0LrQu9C10YLQutGDXHRcdFxyXG5cdFx0dmFyIHBvaW50ID0gdGhpcy5wYXRoW3RoaXMubm9kZV07XHJcblx0XHRpZighcG9pbnQgfHwgdGhpcy5ub2RlID49IHRoaXMucGF0aC5sZW5ndGggfHwgXHJcblx0XHRcdCF0aGlzLndvcmxkLm1hcFtwb2ludFswXV1bcG9pbnRbMV1dLnBhc3MpIHsgLy/QutC70LXRgtC60LAg0YHRgtCw0LvQsCDQvdC10L/RgNC+0YXQvtC00LjQvNCwKNC00LLQtdGA0YwpXHRcdFx0XHRcclxuXHRcdFx0dGhpcy5zdG9wKCk7XHRcdFx0XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cdFx0XHJcblx0XHR2YXIgaWQgPSB0aGlzLndvcmxkLm1hcFtwb2ludFswXV1bcG9pbnRbMV1dLmlkO1xyXG5cdFx0aWYoaWQgJiYgaWQgIT0gdGhpcy5pZCkgeyAvL9C60LvQtdGC0LrQsCDQt9Cw0L3Rj9GC0LAgZW50aXR5XHJcblx0XHRcdHRoaXMubm9kZS0tO1xyXG5cdFx0XHR0aGlzLm1vdGlvblggPSAwO1xyXG5cdFx0XHR0aGlzLm1vdGlvblkgPSAwO1xyXG5cdFx0XHRcclxuXHRcdFx0dGhpcy5wYXRoLmNvdW50Kys7XHJcblx0XHRcdGlmKHRoaXMucGF0aC5jb3VudCA+IDUpXHJcblx0XHRcdFx0dGhpcy5fYnVpbGRQYXRoKHBsYXllciwgdHJ1ZSk7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdFx0XHRcdFx0XHJcblx0XHQvL9C60L7RgNGA0LXQutGG0LjRjyDQv9C+0LfQuNGG0LjQuFxyXG5cdFx0aWYodGhpcy5ub2RlID4gMCkge1xyXG5cdFx0XHR0aGlzLnggPSB0aGlzLnBhdGhbdGhpcy5ub2RlLTFdWzBdICogMTYgKyA4O1xyXG5cdFx0XHR0aGlzLnkgPSB0aGlzLnBhdGhbdGhpcy5ub2RlLTFdWzFdICogMTYgKyA4O1xyXG5cdFx0fVx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0dmFyIGR4ID0gcG9pbnRbMF0gLSB0aGlzLmksXHJcblx0XHRcdGR5ID0gcG9pbnRbMV0gLSB0aGlzLmo7XHRcclxuXHRcdFxyXG5cdFx0Ly/Qt9Cw0L3QuNC80LDQtdC8INC60LvQtdGC0LrRg1xyXG5cdFx0dGhpcy50YXJnZXRJID0gcG9pbnRbMF07XHJcblx0XHR0aGlzLnRhcmdldEogPSBwb2ludFsxXTtcclxuXHRcdHRoaXMud29ybGQubWFwW3RoaXMudGFyZ2V0SV1bdGhpcy50YXJnZXRKXS5pZCA9IHRoaXMuaWQ7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdGlmKGR4ICE9IDApXHR7XHRcdFx0XHRcclxuXHRcdFx0ZHggLz0gTWF0aC5hYnMoZHgpO1xyXG5cdFx0fVx0XHRcdFx0XHRcdFx0XHJcblx0XHRpZihkeSAhPSAwKVx0e1x0XHRcdFx0XHJcblx0XHRcdGR5IC89IE1hdGguYWJzKGR5KTtcclxuXHRcdH1cdFxyXG5cdFx0XHJcblx0XHR0aGlzLnN0ZXBzID0gTWF0aC5yb3VuZChDb25zdC5USUxFX1NJWkUgLyAodGhpcy5hY3RpdmVTcGVlZCAqIENvbnN0LlJFTkRFUlNfUEVSX1RJQ0spKTtcclxuXHRcdHZhciBzcGVlZCA9IENvbnN0LlRJTEVfU0laRSAvICh0aGlzLnN0ZXBzICogQ29uc3QuUkVOREVSU19QRVJfVElDSyk7XHJcblx0XHRcdFxyXG5cdFx0dGhpcy5tb3Rpb25YID0gZHggKiBzcGVlZDtcclxuXHRcdHRoaXMubW90aW9uWSA9IGR5ICogc3BlZWQ7XHJcblx0fSBcclxuXHR0aGlzLnN0ZXBzLS07XHRcdFxyXG59XHJcblxyXG5Nb2IucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbigpIHtcdFxyXG5cdHRoaXMucGF0aCA9IG51bGw7XHJcblx0dGhpcy5tb3Rpb25YID0gMDtcclxuXHR0aGlzLm1vdGlvblkgPSAwO1xyXG59XHJcblxyXG5Nb2IucHJvdG90eXBlLl9idWlsZFBhdGggPSBmdW5jdGlvbihwbGF5ZXIsIGFsdGVyKSB7XHRcclxuXHRpZihNYXRoLmFicyhwbGF5ZXIuaSAtIHRoaXMuaSkgPiAxIHx8IE1hdGguYWJzKHBsYXllci5qIC0gdGhpcy5qKSA+IDEpIHtcdFxyXG5cdFx0dGhpcy5idWlsZFBhdGgodGhpcy53b3JsZC5tYXAsIHRoaXMuaSwgdGhpcy5qLCBwbGF5ZXIuaSwgcGxheWVyLmosIGFsdGVyKTtcclxuXHRcdHRoaXMubm9kZSA9IDA7XHRcclxuXHRcdHRoaXMuc3RlcHMgPSAwO1xyXG5cdFx0dGhpcy5wYXRoLmNvdW50ID0gMDtcclxuXHRcdHJldHVybiB0aGlzLnBhdGgubGVuZ3RoO1x0XHRcdFxyXG5cdH1cdFxyXG5cdHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuLy8gQEhvc3RcclxuTW9iLnByb3RvdHlwZS51cGRhdGVIb3N0ID0gZnVuY3Rpb24oY291bnQpIHtcclxuXHRpZih0aGlzLmRlYWQpIHtcclxuXHRcdC8vY29uc29sZS5sb2coXCJkZWFkIHVwZGF0ZVwiKTtcclxuXHRcdHJldHVybjtcclxuXHR9XHRcclxuXHRcclxuXHR0aGlzLmkgPSB+fih0aGlzLnggLyBDb25zdC5USUxFX1NJWkUpO1xyXG5cdHRoaXMuaiA9IH5+KHRoaXMueSAvIENvbnN0LlRJTEVfU0laRSk7XHRcclxuXHRcdFxyXG5cdGlmKHRoaXMubGFzdEkgIT0gdGhpcy5pIHx8IHRoaXMubGFzdEogIT0gdGhpcy5qKSB7XHJcblx0XHR0aGlzLndvcmxkLm1hcFt0aGlzLmldW3RoaXMual0uaWQgPSB0aGlzLmlkO1xyXG5cdFx0dGhpcy53b3JsZC5tYXBbdGhpcy5sYXN0SV1bdGhpcy5sYXN0Sl0uaWQgPSBudWxsO1x0XHJcblx0XHRcclxuXHRcdHRoaXMubGFzdEkgPSB0aGlzLmk7XHJcblx0XHR0aGlzLmxhc3RKID0gdGhpcy5qO1xyXG5cdH1cdFxyXG5cdFxyXG5cdHRoaXMuYWkoY291bnQpO1xyXG5cdHRoaXMuZGlyRnJvbU1vdGlvbigpO1x0XHJcbn1cclxuXHJcbi8vIEBIb3N0XHJcbk1vYi5wcm90b3R5cGUuYXR0YWNrZWQgPSBmdW5jdGlvbihlbnRpdHkpIHtcclxuXHRpZighdGhpcy50YXJnZXQgfHwgIXRoaXMuYWdncmVzcykge1xyXG5cdFx0dGhpcy50YXJnZXQgPSBlbnRpdHk7XHJcblx0XHR0aGlzLmFnZ3Jlc3MgPSB0cnVlO1xyXG5cdFx0dGhpcy5zdGF0ZSA9IEVudGl0eVN0YXRlLk1vdmU7XHJcblx0fVxyXG59XHJcblxyXG5Nb2IucHJvdG90eXBlLmtpbGwgPSBmdW5jdGlvbigpIHtcclxuXHRFbnRpdHkucHJvdG90eXBlLmtpbGwuY2FsbCh0aGlzKTtcdFxyXG5cdFxyXG5cdHRoaXMuc3RvcCgpO1xyXG5cdHRoaXMud29ybGQubWFwW3RoaXMuaV1bdGhpcy5qXS5pZCA9IG51bGw7XHJcblx0dGhpcy53b3JsZC5tYXBbdGhpcy5sYXN0SV1bdGhpcy5sYXN0Sl0uaWQgPSBudWxsO1xyXG5cdHRoaXMud29ybGQubWFwW3RoaXMudGFyZ2V0SV1bdGhpcy50YXJnZXRKXS5pZCA9IG51bGw7XHRcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vYlxyXG5cclxuIiwiaW1wb3J0IHsgQ29uc3QsIEVudGl0eVN0YXRlIH0gZnJvbSAnY29uc3QuanMnXHJcbmltcG9ydCBNb2IgZnJvbSAnZW50aXR5L21vYi5qcydcclxuXHJcblxyXG52YXIgTW91c2UgPSBmdW5jdGlvbihnYW1lLCBpZCkge1xyXG5cdE1vYi5jYWxsKHRoaXMsIGdhbWUsIGlkKTtcclxuXHRcclxuXHR0aGlzLmFjdGl2ZVNwZWVkID0gMC42OyAvLyAwLjYvMC44LzEuM1x0XHRcclxuXHR0aGlzLnR5cGUgPSAwOyAvL0VudGl0eVR5cGUuTW91c2VcclxuXHR0aGlzLmhlYWx0aCA9IDQwO1xyXG5cdHRoaXMuYXR0YWNrRGFtYWdlID0gMTU7XHJcblx0dGhpcy5yYWRpdXMgPSA0O1xyXG59XHJcblxyXG5Nb3VzZS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKE1vYi5wcm90b3R5cGUpO1xyXG5Nb3VzZS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBNb3VzZTtcclxuXHJcbi8vIEBSZW5kZXJcclxuTW91c2UucHJvdG90eXBlLmluaXRTcHJpdGVzID0gZnVuY3Rpb24oKSB7XHJcblx0TW9iLnByb3RvdHlwZS5pbml0U3ByaXRlcy5jYWxsKHRoaXMpO1x0XHJcblx0XHJcblx0dGhpcy5zcHJpdGUgPSB0aGlzLnNwcml0ZXMubmV3QW5pbWF0ZWRTcHJpdGUoJ21vdXNlJyk7XHJcblx0dGhpcy5zcHJpdGUuYW5jaG9yLnggPSAwLjU7XHRcclxuXHR0aGlzLnNwcml0ZS5wbGF5KCk7XHJcblx0dGhpcy5zcHJpdGUucG9zaXRpb24ueSAtPSAwLjg1ICogdGhpcy5zcHJpdGUuaGVpZ2h0O1x0XHJcblx0XHJcblx0dGhpcy5jb250YWluZXIuYWRkQ2hpbGQodGhpcy5zcHJpdGUpO1x0XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb3VzZSIsImltcG9ydCB7IENvbnN0IH0gZnJvbSAnY29uc3QuanMnXHJcbmltcG9ydCBFbnRpdHkgZnJvbSAnZW50aXR5L2VudGl0eS5qcydcclxuaW1wb3J0IFBsYXllciBmcm9tICdlbnRpdHkvcGxheWVyLmpzJ1xyXG5cclxuXHJcbmZ1bmN0aW9uIE1QbGF5ZXIoZ2FtZSwgaWQsIG5hbWUpIHtcdFx0XHJcblx0UGxheWVyLmNhbGwodGhpcywgZ2FtZSwgaWQsIG5hbWUpO1xyXG5cdFxyXG5cdHRoaXMudGFyZ2V0WCA9IDA7XHJcblx0dGhpcy50YXJnZXRZID0gMDtcclxufVxyXG5cclxuTVBsYXllci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFBsYXllci5wcm90b3R5cGUpO1xyXG5NUGxheWVyLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IE1QbGF5ZXI7XHJcblxyXG4vKk1QbGF5ZXIucHJvdG90eXBlLnVwZGF0ZUNvbnRhaW5lciA9IGZ1bmN0aW9uKCkge1xyXG5cdGlmKCF0aGlzLmNvbnRhaW5lcikgcmV0dXJuO1xyXG5cdFxyXG5cdC8vZmxpcCDQutC+0L3RgtC10LnQvdC10YDQsFxyXG5cdGlmKHRoaXMuZGlyID09IDEpIHtcclxuXHRcdHRoaXMuY29udGFpbmVyLnNjYWxlLnggPSAxO1x0XHJcblx0fSBlbHNlIGlmICh0aGlzLmRpciA9PSAtMSkge1xyXG5cdFx0dGhpcy5jb250YWluZXIuc2NhbGUueCA9IC0xO1xyXG5cdH1cclxufSovXHJcblxyXG5NUGxheWVyLnByb3RvdHlwZS5zZXRNb3ZlbWVudCA9IGZ1bmN0aW9uKGR4LCBkeSkge31cclxuXHJcbk1QbGF5ZXIucHJvdG90eXBlLnByZWRpY3QgPSBmdW5jdGlvbigpIHt9XHJcblxyXG5NUGxheWVyLnByb3RvdHlwZS5tb3ZlID0gZnVuY3Rpb24oKSB7XHRcdFxyXG5cdEVudGl0eS5wcm90b3R5cGUubW92ZS5jYWxsKHRoaXMpO1xyXG59XHRcclxuXHJcbk1QbGF5ZXIucHJvdG90eXBlLnNldEhvc3RTdGF0ZSA9IGZ1bmN0aW9uKHRpbWVTdGFtcCwgeCwgeSkge1x0XHJcblx0RW50aXR5LnByb3RvdHlwZS5zZXRIb3N0U3RhdGUuY2FsbCh0aGlzLCB0aW1lU3RhbXAsIHgsIHkpO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTVBsYXllclxyXG4iLCJpbXBvcnQgeyBDb25zdCwgVGlsZVR5cGUgfSBmcm9tICdjb25zdC5qcydcclxuaW1wb3J0IEVudGl0eSBmcm9tICdlbnRpdHkvZW50aXR5LmpzJ1xyXG5cclxuXHJcbmZ1bmN0aW9uIFBsYXllcihnYW1lLCBpZCwgbmFtZSkge1x0XHJcblx0RW50aXR5LmNhbGwodGhpcywgZ2FtZSwgaWQpO1xyXG5cdFxyXG5cdHRoaXMubmFtZSA9IG5hbWU7XHRcdFxyXG5cdC8v0LLQstC+0LQg0LjQs9GA0L7QutCwXHJcblx0dGhpcy5keCA9IDA7XHJcblx0dGhpcy5keSA9IDA7XHRcclxuXHR0aGlzLmFjdGl2ZVNwZWVkID0gMC45O1x0XHJcblx0XHJcblx0dGhpcy5oZWFsdGggPSAxMDAwMDtcdC8vVEVTVFxyXG5cdHRoaXMuaGVhbHRoTWF4ID0gMTAwMDA7XHJcblx0Ly/RgNCw0LTQuNGD0YEg0LLQuNC00LjQvNC+0YHRgtC4XHJcblx0dGhpcy5yID0gNjtcclxuXHR0aGlzLmZsaXBDb250YWluZXIgPSBudWxsO1x0XHRcclxuXHQvL9C60LDQvNC10YDQsCDQv9GA0LjQutGA0LXQv9C70LXQvdCwXHJcblx0dGhpcy5hdHRhY2hlZCA9IGZhbHNlO1xyXG5cdC8vXHJcblx0dGhpcy5pbmRleCA9IDA7XHJcblx0Ly/QtNC10LnRgdGC0LLQuNC1XHJcblx0dGhpcy5hY3RpdmF0ZSA9IG51bGw7XHJcblx0Ly9pZCDQsNGC0LDQutGD0LXQvNC+0LPQviDQvNC+0LHQsFxyXG5cdHRoaXMuYXR0YWNrTW9iID0gbnVsbDtcclxuXHQvL9GI0YLQsNC80L8g0LLRgNC10LzQtdC90Lgg0L7RgtC/0YDQsNCy0LrQuCDQtNC10LnRgdGC0LLQuNC5INC40LPRgNC+0LrQsFxyXG5cdHRoaXMudGltZVN0YW1wID0gMDtcdFxyXG5cdFxyXG5cdHRoaXMuaG9zdHN0YXRlQnVmZmVyID0gW107XHJcblx0dGhpcy5wb3NpdGlvbkJ1ZmZlciA9IFtdO1xyXG5cdFxyXG5cdC8vdGhpcy5jdXJyUG9zaXRpb24gPSB7fTtcclxuXHR0aGlzLmxhc3RQb3NpdGlvbiA9IHt9O1x0XHJcblx0XHJcblx0dGhpcy5hdHRhY2tDb29sZG93biA9IDY7XHJcbn1cclxuXHJcblBsYXllci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEVudGl0eS5wcm90b3R5cGUpO1xyXG5QbGF5ZXIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gUGxheWVyO1xyXG5cclxuLy8gQFJlbmRlclxyXG5QbGF5ZXIucHJvdG90eXBlLmluaXRTcHJpdGVzID0gZnVuY3Rpb24oKSB7XHRcclxuXHRFbnRpdHkucHJvdG90eXBlLmluaXRTcHJpdGVzLmNhbGwodGhpcyk7XHRcclxuXHJcblx0dGhpcy5zcHJpdGUgPSB0aGlzLnNwcml0ZXMubmV3QW5pbWF0ZWRTcHJpdGUoJ3dhcnJpb3InKTtcclxuXHR0aGlzLnNwcml0ZS5hbmNob3IueCA9IDAuNTtcdFx0XHJcblx0dGhpcy5zcHJpdGUucGxheSgpO1x0XHJcblx0dGhpcy5zcHJpdGUucG9zaXRpb24ueSAtPSAwLjg1ICogdGhpcy5zcHJpdGUuaGVpZ2h0O1x0XHJcblx0XHJcblx0dGhpcy5jb250YWluZXIuYWRkQ2hpbGQodGhpcy5zcHJpdGUpO1x0XHRcclxufVxyXG5cclxuUGxheWVyLnByb3RvdHlwZS5hZGROYW1lTGFiZWwgPSBmdW5jdGlvbigpIHtcdFx0XHJcblx0aWYodGhpcy5jb250YWluZXIpIHtcdFx0XHJcblx0XHR2YXIgdGV4dCA9IHRoaXMuc3ByaXRlcy5jcmVhdGVUZXh0KHRoaXMubmFtZSwgOSk7XHJcblx0XHR0ZXh0LnggLT0gdGV4dC53aWR0aCAvIDI7XHJcblx0XHR0ZXh0LnkgLT0gMjU7XHJcblx0XHR0aGlzLmNvbnRhaW5lci5hZGRDaGlsZCh0ZXh0KTtcclxuXHR9XHJcbn1cdFxyXG5cclxuLy8gQEhvc3RcclxuUGxheWVyLnByb3RvdHlwZS51c2luZyA9IGZ1bmN0aW9uKCkge1xyXG5cdGlmKCF0aGlzLmFjdGl2YXRlKSByZXR1cm4gZmFsc2U7XHJcblx0XHRcdFx0XHJcblx0dmFyIGkgPSB0aGlzLmFjdGl2YXRlWzBdLFxyXG5cdFx0aiA9IHRoaXMuYWN0aXZhdGVbMV07IFx0XHRcdFxyXG5cdHRoaXMuYWN0aXZhdGUgPSBudWxsO1xyXG5cdFxyXG5cdGlmKE1hdGguYWJzKHRoaXMuaSAtIGkpIDw9IDEgJiYgXHJcblx0ICAgTWF0aC5hYnModGhpcy5qIC0gaikgPD0gMSkge1xyXG5cdFx0XHJcblx0XHR2YXIgaXRlbSA9IHRoaXMud29ybGQuZ2V0SXRlbShpLCBqKTtcclxuXHRcdGlmKGl0ZW0pIHtcclxuXHRcdFx0aWYodGhpcy5pbnZlbnRvcnkucHV0KGl0ZW0pKSB7XHJcblx0XHRcdFx0dGhpcy5nYW1lLnBpY2t1cEl0ZW0oaXRlbSwgdGhpcy5pZCk7XHJcblx0XHRcdH1cdFx0XHRcdFx0XHRcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuZ2FtZS5hY3RpdmF0ZU9iaih0aGlzLCBpLCBqKTtcclxuXHRcdH1cdFx0XHJcblx0XHRyZXR1cm4gdHJ1ZTtcdFxyXG5cdH1cdFx0XHJcblx0cmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5QbGF5ZXIucHJvdG90eXBlLmRpckZyb21Nb3Rpb24gPSBmdW5jdGlvbigpIHt9XHJcblxyXG5QbGF5ZXIucHJvdG90eXBlLnNldE1vdmVtZW50ID0gZnVuY3Rpb24oZHgsIGR5KSB7XHJcblx0dGhpcy5keCA9IGR4O1xyXG5cdHRoaXMuZHkgPSBkeTtcclxufVxyXG5cclxuUGxheWVyLnByb3RvdHlwZS5wb2ludFRvVGlsZSA9IGZ1bmN0aW9uKGNvb3JkKSB7XHJcblx0cmV0dXJuIE1hdGguZmxvb3IoY29vcmQgLyBDb25zdC5USUxFX1NJWkUpO1xyXG59XHJcblxyXG5QbGF5ZXIucHJvdG90eXBlLm1vdmUgPSBmdW5jdGlvbigpIHtcdFxyXG5cdHRoaXMubW90aW9uWCA9IHRoaXMuZHggKiB0aGlzLmFjdGl2ZVNwZWVkO1x0XHJcblx0dGhpcy5tb3Rpb25ZID0gdGhpcy5keSAqIHRoaXMuYWN0aXZlU3BlZWQ7XHJcblx0XHJcblx0Ly/Rg9GA0LXQt9Cw0LXQvCDRgdC60L7RgNC+0YHRgtGMINC00LLQuNC20LXQvdC40Y8g0L/QviDQtNC40LDQs9C+0L3QsNC70Y/QvFxyXG5cdGlmKHRoaXMuZHghPTAgJiYgdGhpcy5keSE9MCkge1xyXG5cdFx0dGhpcy5tb3Rpb25YICo9IDAuNzU7XHJcblx0XHR0aGlzLm1vdGlvblkgKj0gMC43NTtcdFx0XHJcblx0fVxyXG5cdFxyXG5cdC8v0L/RgNC+0LLQtdGA0LrQsCDRgdGC0L7Qu9C60L3QvtCy0LXQvdC40LlcclxuXHR2YXIgeCA9IE1hdGgucm91bmQoKHRoaXMueCArIE51bWJlci5FUFNJTE9OKSAqIDEwKSAqIDAuMSxcclxuXHRcdHkgPSBNYXRoLnJvdW5kKCh0aGlzLnkgKyBOdW1iZXIuRVBTSUxPTikgKiAxMCkgKiAwLjE7XHRcdFxyXG5cdFx0XHJcblx0Ly9jb25zb2xlLmxvZyhcImNsaWVudDpcIiwgdGhpcy54LCB0aGlzLnkpO1x0XHJcblx0XHRcclxuXHR2YXIgdGlja3MgPSBDb25zdC5SRU5ERVJTX1BFUl9USUNLO1xyXG5cdFx0XHJcblx0aWYoIXRoaXMud29ybGQubWFwW3RoaXMuaSArIHRoaXMuZHhdW3RoaXMual0ucGFzcyAmJiBcclxuXHRcdHRoaXMucG9pbnRJbnRlcnNlY3RUaWxlKHggKyB0aGlzLm1vdGlvblggKiB0aWNrcywgeSwgdGhpcy5pICsgdGhpcy5keCwgdGhpcy5qKSkge1x0XHRcdFxyXG5cdFx0XHRcclxuXHRcdFx0dGhpcy5tb3Rpb25YID0gMDtcclxuXHRcdH1cdFx0XHJcblx0aWYoIXRoaXMud29ybGQubWFwW3RoaXMuaV1bdGhpcy5qICsgdGhpcy5keV0ucGFzcyAmJiBcclxuXHRcdHRoaXMucG9pbnRJbnRlcnNlY3RUaWxlKHgsIHkgKyB0aGlzLm1vdGlvblkgKiB0aWNrcywgdGhpcy5pLCB0aGlzLmogKyB0aGlzLmR5KSkge1x0XHRcdFxyXG5cdFx0XHRcclxuXHRcdFx0dGhpcy5tb3Rpb25ZID0gMDtcclxuXHRcdH1cclxuXHRpZighdGhpcy53b3JsZC5tYXBbdGhpcy5pICsgdGhpcy5keF1bdGhpcy5qICsgdGhpcy5keV0ucGFzcyAmJiBcclxuXHRcdHRoaXMucG9pbnRJbnRlcnNlY3RUaWxlKHggKyB0aGlzLm1vdGlvblggKiB0aWNrcywgXHJcblx0XHRcdFx0XHRcdFx0XHR5ICsgdGhpcy5tb3Rpb25ZICogdGlja3MsIHRoaXMuaSArIHRoaXMuZHgsIHRoaXMuaiArIHRoaXMuZHkpKSB7XHRcdFx0XHJcblx0XHRcdHRoaXMubW90aW9uWCA9IDA7XHJcblx0XHRcdHRoaXMubW90aW9uWSA9IDA7XHJcblx0XHR9XHRcdFxyXG5cdFx0XHJcblx0dGhpcy51cGRhdGVDb250YWluZXIoKTtcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHJcbn1cdFxyXG5cclxuLy8gQENsaWVudCBcclxuUGxheWVyLnByb3RvdHlwZS5wcmVkaWN0ID0gZnVuY3Rpb24oKSB7XHRcdFxyXG5cclxuXHR0aGlzLmhvc3RzdGF0ZUJ1ZmZlci5mb3JFYWNoKChob3N0UHJlZGljdGlvbiwgdGltZVN0YW1wKSA9PiB7XHJcblx0XHRpZihob3N0UHJlZGljdGlvbikge1xyXG5cdFx0XHR0aGlzLmxhc3RQb3NpdGlvbiA9IHRoaXMucG9zaXRpb25CdWZmZXJbdGltZVN0YW1wXTtcclxuXHRcdFx0aWYodGhpcy5sYXN0UG9zaXRpb24pIHtcclxuXHRcdFx0XHQvL2NvbnNvbGUubG9nKFwicHJlZGljdGlvblwiKTsgXHJcblx0XHRcdFx0XHJcblx0XHRcdFx0dGhpcy5tb3Rpb25YICs9IChob3N0UHJlZGljdGlvbi54IC0gdGhpcy5sYXN0UG9zaXRpb24ueCkgLyBDb25zdC5SRU5ERVJTX1BFUl9USUNLO1xyXG5cdFx0XHRcdHRoaXMubW90aW9uWSArPSAoaG9zdFByZWRpY3Rpb24ueSAtIHRoaXMubGFzdFBvc2l0aW9uLnkpIC8gQ29uc3QuUkVOREVSU19QRVJfVElDSztcclxuXHRcdFx0XHRcclxuXHRcdFx0XHR0aGlzLmhvc3RzdGF0ZUJ1ZmZlciA9IFtdO1xyXG5cdFx0XHRcdHRoaXMucG9zaXRpb25CdWZmZXIgPSBbXTtcdFx0XHJcblx0XHRcdH1cdFx0XHRcclxuXHRcdH1cclxuXHR9KTtcdFxyXG5cdFxyXG5cdHRoaXMudGltZVN0YW1wKys7XHJcblx0dGhpcy50aW1lU3RhbXAgPSB0aGlzLnRpbWVTdGFtcCAlIDEwO1xyXG5cdFxyXG5cdHRoaXMucG9zaXRpb25CdWZmZXJbdGhpcy50aW1lU3RhbXBdID0geyB4OiB0aGlzLnggKyB0aGlzLm1vdGlvblggKiBDb25zdC5SRU5ERVJTX1BFUl9USUNLLCBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHk6IHRoaXMueSArIHRoaXMubW90aW9uWSAqIENvbnN0LlJFTkRFUlNfUEVSX1RJQ0sgfTtcclxufVxyXG5cclxuLy8gQENsaWVudFxyXG5QbGF5ZXIucHJvdG90eXBlLnNldEhvc3RTdGF0ZSA9IGZ1bmN0aW9uKHRpbWVTdGFtcCwgeCwgeSkge1xyXG5cdC8vY29uc29sZS5sb2codGltZVN0YW1wKTtcdFxyXG5cdHRoaXMuaG9zdHN0YXRlQnVmZmVyW3RpbWVTdGFtcCAlIDEwXSA9IHsgeDogeCwgXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgeTogeSB9O1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGxheWVyXHJcbiIsImltcG9ydCB7IENvbnN0IH0gZnJvbSAnY29uc3QuanMnXHJcbmltcG9ydCBFbnRpdHkgZnJvbSAnZW50aXR5L2VudGl0eS5qcydcclxuaW1wb3J0IFBsYXllciBmcm9tICdlbnRpdHkvcGxheWVyLmpzJ1xyXG5cclxuXHJcbnZhciBQcm9qZWN0aWxlID0gZnVuY3Rpb24oZ2FtZSwgaWQpIHtcclxuXHRFbnRpdHkuY2FsbCh0aGlzLCBnYW1lLCBpZCk7XHJcblx0XHRcdFxyXG5cdHRoaXMuY2FzdGVyID0gbnVsbDtcclxuXHR0aGlzLmFjdGl2ZVNwZWVkID0gMi4wO1xyXG5cdHRoaXMudHlwZSA9IDEwMDtcdFxyXG5cdHRoaXMuZGFtYWdlID0gMzU7XHRcclxufVxyXG5cclxuUHJvamVjdGlsZS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEVudGl0eS5wcm90b3R5cGUpO1xyXG5Qcm9qZWN0aWxlLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFByb2plY3RpbGU7XHJcblxyXG5cclxuUHJvamVjdGlsZS5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uKGR4LCBkeSwgZW50aXR5KSB7XHJcblx0dGhpcy5fZHggPSBkeDtcclxuXHR0aGlzLl9keSA9IGR5O1x0XHJcblx0dGhpcy5jYXN0ZXIgPSBlbnRpdHlcclxufVxyXG5cclxuUHJvamVjdGlsZS5wcm90b3R5cGUuaW5pdFNwcml0ZXMgPSBmdW5jdGlvbigpIHtcclxuXHRFbnRpdHkucHJvdG90eXBlLmluaXRTcHJpdGVzLmNhbGwodGhpcyk7XHRcclxuXHRcclxuXHR0aGlzLnNwcml0ZSA9IHRoaXMuc3ByaXRlcy5uZXdBbmltYXRlZFNwcml0ZSgnZmlyZWJhbGwnLCAwLjA2KTtcclxuXHR0aGlzLnNwcml0ZS5hbmNob3IueCA9IDAuNTtcdFxyXG5cdHRoaXMuc3ByaXRlLmFuY2hvci55ID0gMC41O1x0XHJcblx0dGhpcy5zcHJpdGUucGxheSgpO1x0XHJcblx0XHJcblx0dGhpcy5jb250YWluZXIuYWRkQ2hpbGQodGhpcy5zcHJpdGUpO1x0XHJcbn1cclxuXHJcblByb2plY3RpbGUucHJvdG90eXBlLmRpckZyb21Nb3Rpb24gPSBmdW5jdGlvbigpIHt9XHJcblxyXG5Qcm9qZWN0aWxlLnByb3RvdHlwZS51cGRhdGVDb250YWluZXIgPSBmdW5jdGlvbigpIHt9XHRcclxuXHJcblByb2plY3RpbGUucHJvdG90eXBlLmh1cnQgPSBmdW5jdGlvbihkYW1hZ2UpIHt9XHJcblxyXG4vLyBASG9zdFxyXG5Qcm9qZWN0aWxlLnByb3RvdHlwZS51cGRhdGVIb3N0ID0gZnVuY3Rpb24oY291bnQpIHtcdFx0XHRcdFxyXG5cdHRoaXMubW90aW9uWCA9ICh0aGlzLl9keCAqIDAuMDEpICogdGhpcy5hY3RpdmVTcGVlZDtcclxuXHR0aGlzLm1vdGlvblkgPSAodGhpcy5fZHkgKiAwLjAxKSAqIHRoaXMuYWN0aXZlU3BlZWQ7XHJcblx0XHJcblx0Ly/RgdGC0L7Qu9C60L3QvtCy0LXQvdC40Y8gYyDRg9GA0L7QstC90LXQvFxyXG5cdHRoaXMuaSA9IE1hdGguZmxvb3IodGhpcy54IC8gQ29uc3QuVElMRV9TSVpFKTtcclxuXHR0aGlzLmogPSBNYXRoLmZsb29yKHRoaXMueSAvIENvbnN0LlRJTEVfU0laRSk7XHRcclxuXHRcclxuXHR2YXIgdGlja3MgPSBDb25zdC5SRU5ERVJTX1BFUl9USUNLLFxyXG5cdFx0ZHggPSAwLFxyXG5cdFx0ZHkgPSAwLFxyXG5cdFx0eCA9IHRoaXMueCArIHRoaXMubW90aW9uWCAqIHRpY2tzLFxyXG5cdFx0eSA9IHRoaXMueSArIHRoaXMubW90aW9uWSAqIHRpY2tzO1xyXG5cdFx0XHJcblx0aWYodGhpcy5fZHggIT0gMCkgXHJcblx0XHRkeCA9IHRoaXMuX2R4IC8gTWF0aC5hYnModGhpcy5fZHgpO1xyXG5cdGlmKHRoaXMuX2R5ICE9IDApIFxyXG5cdFx0ZHkgPSB0aGlzLl9keSAvIE1hdGguYWJzKHRoaXMuX2R5KTtcdFxyXG5cdFxyXG5cdC8vRklYTUVcclxuXHRcclxuXHRpZighdGhpcy53b3JsZC5tYXBbdGhpcy5pICsgZHhdW3RoaXMual0ucGFzcyAmJiBcclxuXHRcdHRoaXMucG9pbnRJbnRlcnNlY3RUaWxlKHgsIHRoaXMueSwgdGhpcy5pICsgZHgsIHRoaXMuaikpIHtcclxuXHRcdFx0dGhpcy5raWxsKCk7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cdFx0XHJcblx0aWYoIXRoaXMud29ybGQubWFwW3RoaXMuaV1bdGhpcy5qICsgZHldLnBhc3MgJiYgXHJcblx0XHR0aGlzLnBvaW50SW50ZXJzZWN0VGlsZSh0aGlzLngsIHksIHRoaXMuaSwgdGhpcy5qICsgZHkpKSB7XHJcblx0XHRcdHRoaXMua2lsbCgpO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHRcdFxyXG5cdC8v0YHRgtC+0LvQutC90L7QstC10L3QuNGPINGBINC80L7QsdCw0LzQuFxyXG5cdHRoaXMuZ2FtZS5lbnRpdHlsaXN0LnBvb2woKS5mb3JFYWNoKCAoZW50aXR5KSA9PiB7XHJcblx0XHRpZihlbnRpdHkgaW5zdGFuY2VvZiBQcm9qZWN0aWxlKSByZXR1cm47XHRcdFxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdGlmKHRoaXMuZ2FtZS5tb2JJblJhZGl1cyh0aGlzLCBlbnRpdHksIENvbnN0LlBMQVlFUl9BVEFDS19SQURJVVMpKSB7IFx0XHJcblx0XHRcdC8v0LTRgNGD0LbQtdGB0YLQstC10L3QvdGL0Lkg0L7Qs9C+0L3RjFxyXG5cdFx0XHRpZihlbnRpdHkgaW5zdGFuY2VvZiBQbGF5ZXIgJiYgdGhpcy5jYXN0ZXIgaW5zdGFuY2VvZiBQbGF5ZXIpIHJldHVybjsgXHJcblx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0aWYoZW50aXR5LmlzSW5FbnRpdHlTcHJpdGUoeCwgeSkpIHtcdFx0XHJcblx0XHRcdFx0aWYoZW50aXR5ID09IHRoaXMuY2FzdGVyKSByZXR1cm47XHRcdFxyXG5cdFx0XHRcdGVudGl0eS5odXJ0KHRoaXMuZGFtYWdlLCB0aGlzLmNhc3Rlcik7XHJcblx0XHRcdFx0dGhpcy5raWxsKCk7XHRcclxuXHRcdFx0fSBcdFx0XHRcdFx0XHJcblx0XHR9XHJcblx0fSk7XHJcbn1cclxuXHJcblByb2plY3RpbGUucHJvdG90eXBlLmtpbGwgPSBmdW5jdGlvbigpIHtcdFxyXG5cdHRoaXMuZ2FtZS5lbnRpdHlsaXN0LnJlbW92ZSh0aGlzLmlkKTtcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0aWxlIiwiaW1wb3J0IHsgQ29uc3QsIEVudGl0eVR5cGUsIEl0ZW1TdGF0ZSB9IGZyb20gJ2NvbnN0LmpzJ1xyXG5pbXBvcnQgUGxheWVyIGZyb20gJ2VudGl0eS9wbGF5ZXIuanMnXHJcbmltcG9ydCBNUGxheWVyIGZyb20gJ2VudGl0eS9tcGxheWVyLmpzJ1xyXG5pbXBvcnQgTGlzdCBmcm9tICd3b3JsZC9saXN0LmpzJ1xyXG5pbXBvcnQgSW5wdXQgZnJvbSAnaW5wdXQuanMnXHJcbmltcG9ydCBSZW5kZXIgZnJvbSAncmVuZGVyL3JlbmRlci5qcydcclxuaW1wb3J0IEd1aSBmcm9tICdyZW5kZXIvZ3VpLmpzJ1xyXG5pbXBvcnQgV29ybGQgZnJvbSAnd29ybGQvd29ybGQuanMnXHJcblxyXG4vL2VudGl0aWVzXHJcbmltcG9ydCBNb3VzZSBmcm9tICdlbnRpdHkvbW91c2UuanMnXHJcbmltcG9ydCBNYWdlIGZyb20gJ2VudGl0eS9tYWdlLmpzJ1xyXG5pbXBvcnQgUHJvamVjdGlsZSBmcm9tICdlbnRpdHkvcHJvamVjdGlsZS5qcydcclxuXHJcblxyXG5cclxudmFyIEdhbWUgPSBmdW5jdGlvbigpIHtcdFx0XHRcclxuXHR0aGlzLmNvbnRyb2xzID0ge1x0XHJcblx0XHR1cCAgICAgICAgOiBbXCJXXCJdLFxyXG5cdFx0ZG93biAgICAgIDogW1wiU1wiXSxcclxuXHRcdGxlZnQgICAgICA6IFtcIkFcIl0sXHJcblx0XHRyaWdodCAgICAgOiBbXCJEXCJdLCAgICAgICAgICAgXHJcbiAgICAgICAgaW52ZW50b3J5IDogW1wiRVwiXSwgXHJcbiAgICAgICAgY2FzdCAgICAgIDogW1wiRlwiXSAgICAgICAgICAgICAgICAgICBcclxuXHR9O1x0XHRcdFx0XHJcblx0dGhpcy5TQ0FMRSA9IENvbnN0LlNUQUdFX1NDQUxFO1x0XHJcblx0XHRcclxuXHR0aGlzLmFjdGl2ZVBsYXllciA9IG51bGw7XHRcclxuXHR0aGlzLmlkID0gLTE7XHRcclxuXHR0aGlzLnBsYXllcnMgPSBbXTtcdFxyXG5cdFxyXG5cdFx0Ly9UT0RPINC/0LXRgNC10L3QtdGB0YLQuCDRjdGC0L4g0LIgYWN0aXZlUGxheWVyID9cclxuXHRcclxuXHRcdC8v0LLQt9Cw0LjQvNC+0LTQtdC50YHQstC40LUg0YEg0L7QutGA0YPQttC10L3QuNC10Lwo0YLQsNC50LspXHJcblx0XHR0aGlzLmFjdGl2YXRlID0gbnVsbDtcclxuXHRcdC8v0LjQtCDQsNGC0LDQutGD0LXQvNC+0LPQviDQvNC+0LHQsFxyXG5cdFx0dGhpcy5hdHRhY2sgPSBudWxsO1xyXG5cdFx0Ly/QutCw0YHRgiDQt9Cw0LrQu9C40L3QsNC90LjRj1xyXG5cdFx0dGhpcy5jYXN0ID0gbnVsbFxyXG5cdFxyXG5cdC8v0YHQv9C40YHQvtC6INCy0YHQtdGFINC/0L7QtNCy0LjQttC90YvRhSDQuNCz0YDQvtCy0YvRhSDQvtCx0YrQtdC60YLQvtCyICjQuCDQuNCz0YDQvtC60L7QsilcclxuXHR0aGlzLmVudGl0eWxpc3QgPSBuZXcgTGlzdCh0aGlzLCBDb25zdC5NQVhfUExBWUVSU19ST09NKTtcdFxyXG5cdHRoaXMuaXRlbWxpc3QgPSBuZXcgTGlzdCh0aGlzKTtcclxuXHQvL9C40LPRgNC+0Log0YHQtNC10LvQsNC7INC00LXQudGB0YLQstC40LVcclxuXHR0aGlzLm5lZWRVcGRhdGVQbGF5ZXJDb250cm9scyA9IGZhbHNlO1xyXG5cdHRoaXMubmVlZFJlYnVpbGQgPSBmYWxzZTtcclxuXHRcclxuXHR0aGlzLnNwYXduWCA9IDA7XHJcblx0dGhpcy5zcGF3blkgPSAwO1xyXG5cdFx0XHJcblx0dGhpcy53b3JsZCA9IG5ldyBXb3JsZCgpO1x0XHRcclxufVxyXG5cclxuR2FtZS5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uKCkge1x0XHJcblx0dGhpcy5pbnB1dCA9IG5ldyBJbnB1dCgpO1x0XHJcblx0dGhpcy5ndWkgPSBuZXcgR3VpKHRoaXMpO1xyXG5cdHRoaXMucmVuZGVyID0gbmV3IFJlbmRlcih0aGlzKTtcclxuXHR0aGlzLnJlbmRlci5pbml0KCk7XHRcdFxyXG5cdHRoaXMuY2FtZXJhID0gdGhpcy5yZW5kZXIuZ2V0Q2FtZXJhKCk7XHRcclxuXHR0aGlzLmlucHV0LnNldHVwS2V5QW5kTW91c2VMaXN0ZW5lcnMoKTtcdFxyXG5cdFxyXG5cdHRoaXMuZ2VuQ29uc3RydWN0b3JNYXAoKTtcclxufVxyXG5cclxuR2FtZS5wcm90b3R5cGUuZnJlZSA9IGZ1bmN0aW9uKCkge1xyXG5cdHRoaXMuaW5wdXQuZnJlZSgpO1xyXG5cdHRoaXMucmVuZGVyLmZyZWUoKTtcdFxyXG5cdHRoaXMuZ3VpLmZyZWUoKTtcclxuXHR0aGlzLmNhbWVyYSA9IG51bGw7XHRcclxuXHRcclxuXHR0aGlzLmFjdGl2ZVBsYXllciA9IG51bGw7XHJcblx0dGhpcy5lbnRpdHlsaXN0LmZyZWUoKTtcclxuXHR0aGlzLnBsYXllcnMgPSBbXTtcclxuXHR0aGlzLm5lZWRVcGRhdGVQbGF5ZXJDb250cm9scyA9IGZhbHNlO1xyXG59XHJcblxyXG5HYW1lLnByb3RvdHlwZS5zdGFydEdhbWUgPSBmdW5jdGlvbihwbGF5ZXJzLCBjYWxsYmFjaykge1xyXG5cdHRoaXMud29ybGQuZ2VuZXJhdGVNYXAoKTtcclxuXHRcclxuXHR0aGlzLmFkZFBsYXllcnMocGxheWVycyk7XHJcblx0dGhpcy5jYW1lcmEuYXR0YWNoKHRoaXMuYWN0aXZlUGxheWVyKTtcclxuXHRcdFxyXG5cdHRoaXMucmVuZGVyLnByZWxvYWRUZXh0dXJlcygoKSA9PiB7XHRcdFxyXG5cdFx0dGhpcy5hZGRQbGF5ZXJzVG9TdGFnZShwbGF5ZXJzKTtcdFx0XHJcblx0XHR0aGlzLnJlbmRlci5zdGFydFJlbmRlcigpO1x0XHJcblx0XHRjYWxsYmFjaygpO1xyXG5cdH0pO1x0XHRcclxufVxyXG5cclxuR2FtZS5wcm90b3R5cGUubW9iSW5SYWRpdXMgPSBmdW5jdGlvbihwbGF5ZXIsIGVudGl0eSwgcmFkaXVzKSB7XHJcblx0dmFyIEwyID0gKHBsYXllci54IC0gZW50aXR5LngpICogKHBsYXllci54IC0gZW50aXR5LngpICsgKHBsYXllci55IC0gZW50aXR5LnkpICogKHBsYXllci55IC0gZW50aXR5LnkpOyBcclxuXHRpZihMMiA8IHJhZGl1cyAqIHJhZGl1cykgcmV0dXJuIHRydWU7XHJcblx0cmV0dXJuIGZhbHNlO1xyXG59XHJcbkdhbWUucHJvdG90eXBlLnByb2plY3RpbGVEaXIgPSBmdW5jdGlvbih4LCB5LCB0eCwgdHkpIHtcclxuXHR2YXIgZHggPSB0eCAtIHgsXHJcblx0XHRkeSA9IHR5IC0geSxcclxuXHRcdGxlbiA9IE1hdGguc3FydChkeCpkeCtkeSpkeSk7XHJcblx0aWYobGVuID09IDApIHJldHVybiBudWxsO1xyXG5cdFx0XHRcclxuXHRkeCA9IH5+KDEwMCAqIGR4IC8gbGVuKTtcclxuXHRkeSA9IH5+KDEwMCAqIGR5IC8gbGVuKTtcclxuXHRyZXR1cm4gW2R4LCBkeV07XHJcbn1cclxuXHJcbkdhbWUucHJvdG90eXBlLnVwZGF0ZVBsYXllckNvbnRyb2xzID0gZnVuY3Rpb24oKSB7XHRcclxuXHRpZighdGhpcy5hY3RpdmVQbGF5ZXIpIHJldHVybjtcclxuXHRcclxuXHRcdFxyXG5cdC8v0L3QsNC/0YDQsNCy0LvQtdC90LjQtSDRgdC/0YDQsNC50YLQsCDQvtGCINC/0L7Qt9C40YbQuNC4INC80YvRiNC60LhcclxuXHRpZih0aGlzLmlucHV0LmdldE1vdXNlWCgpID4gdGhpcy5jYW1lcmEud2lkdGgyKSB7XHJcblx0XHR0aGlzLmFjdGl2ZVBsYXllci5kaXIgPSAxO1xyXG5cdH0gZWxzZSB7XHJcblx0XHR0aGlzLmFjdGl2ZVBsYXllci5kaXIgPSAtMTtcclxuXHR9XHJcblx0XHJcblx0Ly/QuNC90LLQtdC90YLQsNGA0YxcclxuXHRpZih0aGlzLmlucHV0LmNoZWNrUHJlc3NlZCh0aGlzLmNvbnRyb2xzLmludmVudG9yeSkpIHtcclxuXHRcdHRoaXMuZ3VpLm9wZW5JbnZlbnRvcnkoKTtcdFx0XHJcblx0fVx0XHJcblx0aWYodGhpcy5ndWkuaXNPcGVuKCkpIHtcclxuXHRcdHRoaXMuYWN0aXZlUGxheWVyLnNldE1vdmVtZW50KDAsIDApO1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cdFxyXG5cdFxyXG5cdC8v0L/RgNCw0LLRi9C5INC60LvQuNC6INC/0L4g0LrQsNGA0YLQtSjQstC30LDQuNC80L7QtNC10LnRgdGC0LLQuNC1KVxyXG5cdGlmKHRoaXMuaW5wdXQucm1iRG93bikge1xyXG5cdFx0dmFyIGkgPSB+figodGhpcy5jYW1lcmEucG9zWCAqIHRoaXMuU0NBTEUgLSB0aGlzLmNhbWVyYS53aWR0aDIgKyB0aGlzLmlucHV0LmdldExhc3RSaWdodENsaWNrKClbMF0pIC8gXHJcblx0XHRcdFx0KENvbnN0LlRJTEVfU0laRSAqIHRoaXMuU0NBTEUpKSwgXHJcblx0XHRcdGogPSB+figodGhpcy5jYW1lcmEucG9zWSAqIHRoaXMuU0NBTEUgLSB0aGlzLmNhbWVyYS5oZWlnaHQyICsgdGhpcy5pbnB1dC5nZXRMYXN0UmlnaHRDbGljaygpWzFdKSAvIFxyXG5cdFx0XHRcdChDb25zdC5USUxFX1NJWkUgKiB0aGlzLlNDQUxFKSk7XHJcblx0XHRpZihpIDwgMCkgaSA9IDA7XHJcblx0XHRpZihqIDwgMCkgaiA9IDA7XHRcdFxyXG5cdFx0XHJcblx0XHR0aGlzLmFjdGl2YXRlID0gW2ksIGpdO1xyXG5cdFx0XHJcblx0fSBlbHNlIGlmKHRoaXMuaW5wdXQubG1iRG93bikgeyAvL9C70LXQstGL0Lkg0LrQu9C40Log0L/QviDQvNC+0LHRgyjQsNGC0LDQutCwKSBcclxuXHRcdHZhciB4ID0gKHRoaXMuY2FtZXJhLnBvc1ggKiB0aGlzLlNDQUxFIC0gdGhpcy5jYW1lcmEud2lkdGgyICsgdGhpcy5pbnB1dC5nZXRMYXN0TGVmdENsaWNrKClbMF0pIC8gdGhpcy5TQ0FMRSxcclxuXHRcdFx0eSA9ICh0aGlzLmNhbWVyYS5wb3NZICogdGhpcy5TQ0FMRSAtIHRoaXMuY2FtZXJhLmhlaWdodDIgKyB0aGlzLmlucHV0LmdldExhc3RMZWZ0Q2xpY2soKVsxXSkgLyB0aGlzLlNDQUxFO1xyXG5cdFx0XHRcclxuXHRcdC8vVE9ETyDQsNC90LjQvNCw0YbQuNGPINCw0YLQsNC60LhcclxuXHRcdFx0XHRcclxuXHRcdHRoaXMuZW50aXR5bGlzdC5wb29sKCkuZm9yRWFjaCggKGVudGl0eSkgPT4ge1xyXG5cdFx0XHRpZihlbnRpdHkgaW5zdGFuY2VvZiBQbGF5ZXIgfHwgZW50aXR5IGluc3RhbmNlb2YgUHJvamVjdGlsZSkgcmV0dXJuO1xyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0aWYodGhpcy5tb2JJblJhZGl1cyh0aGlzLmFjdGl2ZVBsYXllciwgZW50aXR5LCBDb25zdC5QTEFZRVJfQVRBQ0tfUkFESVVTKSkgeyBcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdGlmKGVudGl0eS5pc0luRW50aXR5U3ByaXRlKHgsIHkpKSBcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR0aGlzLmF0dGFjayA9IGVudGl0eS5pZDtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fSBlbHNlIGlmKHRoaXMuaW5wdXQuY2hlY2tQcmVzc2VkKHRoaXMuY29udHJvbHMuY2FzdCkpIHsgLy/QutCw0YHRgiBcdFx0XHRcclxuXHRcdC8vaWYodGhpcy5hY3RpdmVQbGF5ZXIuY2FzdCgpKSBcclxuXHRcdHtcclxuXHRcdFx0dmFyIHggPSAodGhpcy5jYW1lcmEucG9zWCAqIHRoaXMuU0NBTEUgLSB0aGlzLmNhbWVyYS53aWR0aDIgKyB0aGlzLmlucHV0LmdldE1vdXNlWCgpKSAvIHRoaXMuU0NBTEUsXHJcblx0XHRcdFx0eSA9ICh0aGlzLmNhbWVyYS5wb3NZICogdGhpcy5TQ0FMRSAtIHRoaXMuY2FtZXJhLmhlaWdodDIgKyB0aGlzLmlucHV0LmdldE1vdXNlWSgpKSAvIHRoaXMuU0NBTEUsXHJcblx0XHRcdFx0ZGlyID0gdGhpcy5wcm9qZWN0aWxlRGlyKHRoaXMuYWN0aXZlUGxheWVyLngsIHRoaXMuYWN0aXZlUGxheWVyLnksIHgsIHkpO1xyXG5cdFx0XHRpZighZGlyKSByZXR1cm47XHJcblx0XHRcdFxyXG5cdFx0XHR0aGlzLmNhc3QgPSB7IHR5cGU6MTAwLCBkeDogZGlyWzBdLCBkeTogZGlyWzFdIH07XHJcblx0XHRcdC8vY29uc29sZS5sb2coXCJjbGllbnQgY2FzdFwiKTtcclxuXHRcdH1cclxuXHR9XHJcblx0XHRcclxuXHR2YXIgZHggPSAwLFxyXG5cdFx0ZHkgPSAwO1xyXG5cdFx0XHRcclxuXHRpZih0aGlzLmlucHV0LmNoZWNrS2V5KHRoaXMuY29udHJvbHMudXApKSB7XHRcdFx0XHJcblx0XHRkeSAtPSAxO1x0XHRcdFxyXG5cdFx0dGhpcy5uZWVkVXBkYXRlUGxheWVyQ29udHJvbHMgPSB0cnVlO1x0XHJcblx0fSBcclxuXHRpZiAodGhpcy5pbnB1dC5jaGVja0tleSh0aGlzLmNvbnRyb2xzLmRvd24pKSB7XHRcdFxyXG5cdFx0ZHkgKz0gMTtcdFx0XHJcblx0XHR0aGlzLm5lZWRVcGRhdGVQbGF5ZXJDb250cm9scyA9IHRydWU7XHJcblx0fVxyXG5cdGlmKHRoaXMuaW5wdXQuY2hlY2tLZXkodGhpcy5jb250cm9scy5yaWdodCkpIHtcdFx0XHJcblx0XHRkeCArPSAxO1x0XHRcclxuXHRcdHRoaXMubmVlZFVwZGF0ZVBsYXllckNvbnRyb2xzID0gdHJ1ZTtcdFx0XHRcclxuXHR9IFxyXG5cdGlmKHRoaXMuaW5wdXQuY2hlY2tLZXkodGhpcy5jb250cm9scy5sZWZ0KSkge1x0XHRcclxuXHRcdGR4IC09IDE7XHJcblx0XHR0aGlzLm5lZWRVcGRhdGVQbGF5ZXJDb250cm9scyA9IHRydWU7XHJcblx0fVx0XHRcclxuXHRcclxuXHR0aGlzLmFjdGl2ZVBsYXllci5zZXRNb3ZlbWVudChkeCwgZHkpO1xyXG59XHJcblxyXG5HYW1lLnByb3RvdHlwZS5hZGRQbGF5ZXJzID0gZnVuY3Rpb24ocGxheWVycykge1xyXG5cdC8vdGhpcy5wbGF5ZXJzID0gcGxheWVycztcclxuXHRcclxuXHR2YXIgcGxheWVyT2JqID0gbnVsbDtcclxuXHRwbGF5ZXJzLmZvckVhY2goKHBsYXllcikgPT4ge1x0XHRcdFxyXG5cdFx0Ly/QvdCw0YXQvtC00LjQvCDQvdCw0YjQtdCz0L4g0LjQs9GA0L7QutCwXHJcblx0XHRpZihwbGF5ZXIuaWQgPT0gdGhpcy5pZCkge1xyXG5cdFx0XHRwbGF5ZXJPYmogPSBuZXcgUGxheWVyKHRoaXMsIHBsYXllci5pZCwgcGxheWVyLm5hbWUpO1xyXG5cdFx0XHR0aGlzLmFjdGl2ZVBsYXllciA9IHBsYXllck9iajtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHBsYXllck9iaiA9IG5ldyBNUGxheWVyKHRoaXMsIHBsYXllci5pZCwgcGxheWVyLm5hbWUpO1xyXG5cdFx0fVx0XHJcblx0XHRwbGF5ZXJPYmouc2V0UG9zaXRpb24odGhpcy5zcGF3blggKiBDb25zdC5USUxFX1NJWkUsIFxyXG5cdFx0XHRcdFx0XHRcdCAgdGhpcy5zcGF3blkgKiBDb25zdC5USUxFX1NJWkUpO1xyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0dGhpcy5wbGF5ZXJzW3BsYXllci5pZF0gPSBwbGF5ZXJPYmo7XHJcblx0XHRcclxuXHRcdC8v0LTQvtCx0LDQstC70Y/QtdC8INCyINGB0L/QuNGB0LrQuFx0XHRcclxuXHRcdHRoaXMuZW50aXR5bGlzdC5hZGRUb0lkKHBsYXllck9iaiwgcGxheWVyLmlkKTtcclxuXHR9KTtcdFxyXG59XHJcblxyXG5HYW1lLnByb3RvdHlwZS5hZGRQbGF5ZXJzVG9TdGFnZSA9IGZ1bmN0aW9uKHBsYXllcnMpIHtcclxuXHR2YXIgcGxheWVyT2JqID0gbnVsbDtcclxuXHRwbGF5ZXJzLmZvckVhY2goKHBsYXllcikgPT4ge1xyXG5cdFx0cGxheWVyT2JqID0gdGhpcy5lbnRpdHlsaXN0LmdldE9iamVjdEJ5SWQocGxheWVyLmlkKTtcclxuXHRcdHRoaXMucmVuZGVyLmFkZFRvU3RhZ2VFbnRpdHkocGxheWVyT2JqKTtcdFxyXG5cdH0pO1x0XHJcbn1cclxuXHJcbkdhbWUucHJvdG90eXBlLmFjdGl2YXRlT2JqID0gZnVuY3Rpb24oZW50aXR5LCBpLCBqLCBob3N0KSB7XHRcclxuXHQvL9Cw0LrRgtC40LLQuNGA0L7QstCw0YLRjCDQvtCx0YrQtdC60YIo0YHRg9C90LTRg9C6LNGA0YvRh9Cw0LMs0LTQstC10YDRjClcclxuXHR2YXIgb2JqID0gdGhpcy53b3JsZC5nZXRPYmooaSwgaik7IFxyXG5cdGlmKG9iaiAmJiBvYmouYWN0aXZhdGUoaG9zdCkpIHtcdFx0XHJcblx0XHQvL9C/0LXRgNC10YHRgtGA0LDQuNCy0LDQtdC8INC80LXRiCDRg9GA0L7QstC90Y9cdFxyXG5cdFx0dGhpcy5uZWVkUmVidWlsZCA9IHRydWU7XHJcblx0XHRyZXR1cm4gdHJ1ZTtcdFx0XHJcblx0fVx0XHJcblx0cmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5HYW1lLnByb3RvdHlwZS5ydW5UaWNrID0gZnVuY3Rpb24ocGFja2V0KSB7XHRcclxuXHR0aGlzLmd1aS51cGRhdGUoKTtcclxuXHR0aGlzLnVwZGF0ZVBsYXllckNvbnRyb2xzKCk7XHRcclxuXHRcclxuXHQvL1RPRE8g0L7QsdC90L7QstC40YLRjCDRgdC+0YHRgtC+0Y/QvdC40Y8g0L7QsdGK0LXQutGC0L7QsiDQv9C+INC00LDQvdC90YvQvCDQvtGCINGF0L7RgdGC0LBcclxuXHRcclxuXHRpZih0aGlzLm5lZWRSZWJ1aWxkKSB7XHJcblx0XHR0aGlzLm5lZWRSZWJ1aWxkID0gZmFsc2U7XHJcblx0XHR0aGlzLnJlbmRlci5mb3JjZWRSZWJ1aWxkTWVzaCgpO1x0XHRcclxuXHR9IFx0XHRcclxuXHRcclxuXHR0aGlzLmVudGl0eWxpc3QucG9vbCgpLmZvckVhY2goKGVudGl0eSwgaWQpID0+IHtcdFx0XHJcblx0XHRlbnRpdHkudXBkYXRlQ2xpZW50KCk7IFx0XHRcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRlbnRpdHkuaXNWaXNpYmxlKCk7XHRcdFx0XHJcblx0XHRlbnRpdHkucHJlZGljdCgpO1xyXG5cdH0pO1x0XHJcbn1cclxuXHJcbkdhbWUucHJvdG90eXBlLmdlbkNvbnN0cnVjdG9yTWFwID0gZnVuY3Rpb24oKSB7XHJcblx0dGhpcy5jb25zdHJ1Y3Rvck1hcCA9IFtdO1x0XHRcclxuXHR0aGlzLmNvbnN0cnVjdG9yTWFwW0VudGl0eVR5cGUuTW91c2VdID0gTW91c2U7XHJcblx0dGhpcy5jb25zdHJ1Y3Rvck1hcFtFbnRpdHlUeXBlLk1hZ2VdID0gTWFnZTtcclxuXHQvL3RoaXMuY29uc3RydWN0b3JNYXBbRW50aXR5VHlwZS5Ta2VsZXRvbl0gPSBTa2VsZXRvbjtcclxuXHRcclxuXHR0aGlzLmNvbnN0cnVjdG9yTWFwW0VudGl0eVR5cGUuRmlyZUJhbGxdID0gUHJvamVjdGlsZTtcclxufVxyXG5cclxuR2FtZS5wcm90b3R5cGUuY3JlYXRlT2JqZWN0QnlUeXBlID0gZnVuY3Rpb24odHlwZSwgaWQpIHtcclxuXHRpZih0eXBlICE9IG51bGwpIHtcdFx0XHJcblx0XHR2YXIgZSA9IG5ldyB0aGlzLmNvbnN0cnVjdG9yTWFwW3R5cGVdKHRoaXMsIGlkKTtcdFx0XHJcblx0XHQvL2NvbnNvbGUubG9nKFwidHlwZTpcIiwgdHlwZSwgZSk7XHJcblx0XHRyZXR1cm4gZTtcclxuXHR9XHJcblx0cmV0dXJuIG51bGw7XHJcbn1cclxuXHJcbkdhbWUucHJvdG90eXBlLmVudGl0eURpZSA9IGZ1bmN0aW9uKGksIGopIHtcclxuXHR0aGlzLndvcmxkLmdldE1hcCgpW2ldW2pdLmJsb29kID0gdHJ1ZTtcclxuXHQvL9C/0LXRgNC10YHRgtGA0LDQuNCy0LDQtdC8INC80LXRiCDRg9GA0L7QstC90Y9cdFxyXG5cdHRoaXMubmVlZFJlYnVpbGQgPSB0cnVlO1xyXG59XHJcblxyXG5HYW1lLnByb3RvdHlwZS5hZGRFbnRpdHkgPSBmdW5jdGlvbihlbnRpdHksIGlkKSB7XHRcdFxyXG5cdHRoaXMuZW50aXR5bGlzdC5hZGRUb0lkKGVudGl0eSwgaWQpO1xyXG5cdHRoaXMucmVuZGVyLmFkZFRvU3RhZ2VFbnRpdHkoZW50aXR5KTtcclxufVxyXG5cclxuR2FtZS5wcm90b3R5cGUucmVtb3ZlRW50aXR5ID0gZnVuY3Rpb24oaWQpIHtcdFxyXG5cdHZhciBlbnRpdHkgPSB0aGlzLmVudGl0eWxpc3QuZ2V0T2JqZWN0QnlJZChpZCk7XHRcclxuXHRpZihlbnRpdHkpIHtcclxuXHRcdGlmKHRoaXMucmVuZGVyKVxyXG5cdFx0XHR0aGlzLnJlbmRlci5yZW1vdmVGcm9tU3RhZ2VFbnRpdHkoZW50aXR5KTtcclxuXHRcdGlmKGVudGl0eSBpbnN0YW5jZW9mIFBsYXllcilcclxuXHRcdFx0dGhpcy5wbGF5ZXJzW2VudGl0eS5pZF0gPSBudWxsO1xyXG5cdH1cdFx0XHJcblx0dGhpcy5lbnRpdHlsaXN0LnJlbW92ZShpZCk7XHJcbn1cclxuXHJcbkdhbWUucHJvdG90eXBlLmRyb3BJdGVtID0gZnVuY3Rpb24oaSwgaiwgaXRlbSwgaWQpIHtcdFx0XHJcblx0aXRlbS5kcm9wKGksIGopO1xyXG5cdHRoaXMud29ybGQuc2V0SXRlbShpLCBqLCBpdGVtKTtcdFxyXG5cdHRoaXMuaXRlbWxpc3Quc2V0U3RhdGUoaWQsIEl0ZW1TdGF0ZS5Ecm9wKTtcclxufVxyXG5cclxuR2FtZS5wcm90b3R5cGUucGlja3VwSXRlbSA9IGZ1bmN0aW9uKGl0ZW0sIG93bmVyKSB7XHRcclxuXHQvL3ZhciBpdGVtID0gdGhpcy5pdGVtbGlzdC5nZXRPYmplY3RCeUlkKGlkKTtcdFxyXG5cdGlmKGl0ZW0pIHtcclxuXHRcdGl0ZW0ucGlja3VwKHRoaXMuZW50aXR5bGlzdC5nZXRPYmplY3RCeUlkKG93bmVyKSk7XHJcblx0XHR0aGlzLndvcmxkLnNldEl0ZW0oaXRlbS5pLCBpdGVtLmosIG51bGwpO1xyXG5cdFx0dGhpcy5pdGVtbGlzdC5zZXRTdGF0ZShpdGVtLmlkLCBJdGVtU3RhdGUuUGlja3VwKTtcclxuXHR9XHRcdFx0XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBHYW1lIiwiaW1wb3J0IHsgQ29uc3QgfSBmcm9tICdjb25zdC5qcydcclxuaW1wb3J0IFBsYXllciBmcm9tICdlbnRpdHkvcGxheWVyLmpzJ1xyXG5pbXBvcnQgTGlzdEhvc3QgZnJvbSAnd29ybGQvbGlzdGhvc3QuanMnXHJcbmltcG9ydCBHYW1lIGZyb20gJ2dhbWUuanMnXHJcblxyXG5pbXBvcnQgTW91c2UgZnJvbSAnZW50aXR5L21vdXNlLmpzJ1xyXG5pbXBvcnQgTWFnZSBmcm9tICdlbnRpdHkvbWFnZS5qcydcclxuaW1wb3J0IFByb2plY3RpbGUgZnJvbSAnZW50aXR5L3Byb2plY3RpbGUuanMnXHJcblxyXG5cclxudmFyIEhvc3RHYW1lID0gZnVuY3Rpb24oKSB7XHRcclxuXHRHYW1lLmNhbGwodGhpcyk7XHRcdFxyXG5cdFx0XHJcblx0Ly/QvtGC0LTQtdC70YzQvdGL0Lkg0LzQsNGB0YHQuNCyINC40LPRgNC+0LrQvtCyXHJcblx0dGhpcy5wbGF5ZXJzID0gW107XHJcblx0Ly/RgdC/0LjRgdC+0Log0LLRgdC10YUg0L/QvtC00LLQuNC20L3Ri9GFINC40LPRgNC+0LLRi9GFINC+0LHRitC10LrRgtC+0LIgKNC4INC40LPRgNC+0LrQvtCyKVxyXG5cdHRoaXMuZW50aXR5bGlzdCA9IG5ldyBMaXN0SG9zdCh0aGlzLCBDb25zdC5NQVhfUExBWUVSU19ST09NKTtcdFx0XHJcblx0dGhpcy5pdGVtbGlzdCA9IG5ldyBMaXN0SG9zdCh0aGlzKTtcclxuXHR0aGlzLnVwZGF0ZWxpc3RcdD0gW107XHJcblx0XHJcblx0dGhpcy5jb3VudCA9IDA7XHJcbn1cclxuXHJcbkhvc3RHYW1lLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR2FtZS5wcm90b3R5cGUpO1xyXG5Ib3N0R2FtZS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBIb3N0R2FtZTtcclxuXHJcblxyXG5Ib3N0R2FtZS5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uKCkge31cclxuXHJcbkhvc3RHYW1lLnByb3RvdHlwZS5mcmVlID0gZnVuY3Rpb24oKSB7XHJcblx0dGhpcy5lbnRpdHlsaXN0LmZyZWUoKTtcclxuXHR0aGlzLnBsYXllcnMgPSBbXTtcclxuXHR0aGlzLmNvdW50ID0gMDtcclxufVxyXG5cclxuSG9zdEdhbWUucHJvdG90eXBlLnN0YXJ0R2FtZSA9IGZ1bmN0aW9uKHBsYXllcnMsIGNhbGxiYWNrKSB7XHJcblx0dGhpcy53b3JsZC5nZW5lcmF0ZVNlZWQoKTtcclxuXHR0aGlzLndvcmxkLmdlbmVyYXRlTWFwKCk7XHRcclxuXHR0aGlzLnNldFNwYXduUG9pbnQoKTtcclxuXHRcclxuXHQvL2NvbnNvbGUubG9nKFwi0YLQvtGH0LrQsCDRgdC/0LDQstC90LBbaSxqXTpcIix0aGlzLndvcmxkLnNwYXduUG9pbnQpO1xyXG5cdFx0XHJcblx0dGhpcy5hZGRQbGF5ZXJzKHBsYXllcnMpO1x0XHJcbn1cclxuXHJcbkhvc3RHYW1lLnByb3RvdHlwZS5zZXRTcGF3blBvaW50ID0gZnVuY3Rpb24oeCwgeSkge1xyXG5cdGlmKHggPT0gbnVsbCB8fCB5ID09IG51bGwpIHtcclxuXHRcdHRoaXMuc3Bhd25YID0gdGhpcy53b3JsZC5zcGF3blBvaW50WzBdO1xyXG5cdFx0dGhpcy5zcGF3blkgPSB0aGlzLndvcmxkLnNwYXduUG9pbnRbMV07XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cdHRoaXMuc3Bhd25YID0geDtcclxuXHR0aGlzLnNwYXduWSA9IHk7XHJcbn1cclxuXHJcbkhvc3RHYW1lLnByb3RvdHlwZS5hZGRQbGF5ZXJzID0gZnVuY3Rpb24ocGxheWVycykge1xyXG5cdHZhciBwbGF5ZXJPYmo7XHJcblx0cGxheWVycy5mb3JFYWNoKChwbGF5ZXIpID0+IHtcclxuXHRcdHBsYXllck9iaiA9IG5ldyBQbGF5ZXIodGhpcywgcGxheWVyLmlkLCBwbGF5ZXIubmFtZSk7XHRcdFx0XHJcblx0XHRwbGF5ZXJPYmouc2V0UG9zaXRpb24odGhpcy5zcGF3blggKiBDb25zdC5USUxFX1NJWkUsIFxyXG5cdFx0XHRcdFx0XHRcdCAgdGhpcy5zcGF3blkgKiBDb25zdC5USUxFX1NJWkUpO1xyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0dGhpcy5wbGF5ZXJzW3BsYXllci5pZF0gPSBwbGF5ZXJPYmo7XHRcclxuXHRcdFx0XHRcdFx0XHJcblx0XHQvL9C00L7QsdCw0LLQu9GP0LXQvCDQsiDRgdC/0LjRgdC60LhcdFx0XHJcblx0XHR0aGlzLmVudGl0eWxpc3QuYWRkVG9JZChwbGF5ZXJPYmosIHBsYXllci5pZCk7XHRcdFx0XHRcdFxyXG5cdH0pO1x0XHJcbn1cclxuXHJcbkhvc3RHYW1lLnByb3RvdHlwZS5hY3RpdmF0ZU9iaiA9IGZ1bmN0aW9uKGVudGl0eSwgaSwgaikge1x0XHJcblx0aWYoR2FtZS5wcm90b3R5cGUuYWN0aXZhdGVPYmouY2FsbCh0aGlzLCBlbnRpdHksIGksIGosIHRydWUpKVx0XHJcblx0XHR0aGlzLnVwZGF0ZWxpc3QucHVzaChbaSwgal0pO1x0XHJcbn1cclxuXHJcbi8vIEBIb3N0XHJcbkhvc3RHYW1lLnByb3RvdHlwZS5ydW5UaWNrID0gZnVuY3Rpb24oKSB7XHJcblx0dGhpcy5jb3VudCsrO1xyXG5cdFxyXG5cdC8vVE9ETyDQvtCx0L3QvtCy0LvQtdC90LjQtSDQvNC40YDQsFxyXG5cdFxyXG5cdC8vVEVTVFxyXG5cdGlmKCF0aGlzLm9uY2UpIHtcclxuXHRcdHRoaXMub25jZSA9IHRydWU7XHJcblx0XHRjb25zb2xlLmxvZyhcInNwYXduIGVudGl0eVwiKTtcclxuXHRcdHZhciBlbnRpdHk7XHJcblx0XHRmb3IodmFyIG0gPSAwOyBtIDwgMzsgbSsrKSB7XHJcblx0XHRcdGVudGl0eSA9IG5ldyBNb3VzZSh0aGlzLCAwKTtcdFx0XHJcblx0XHRcdGVudGl0eS5zZXRQb3NpdGlvbigodGhpcy5zcGF3blggKyBtKSAqIDE2ICsgOCwgXHJcblx0XHRcdFx0XHQgIFx0ICAgXHQgICAodGhpcy5zcGF3blkpICogMTYgKyA4KTtcclxuXHRcdFx0XHJcblx0XHRcdHRoaXMuZW50aXR5bGlzdC5hZGQoZW50aXR5KTtcclxuXHRcdH1cclxuXHRcdGZvcih2YXIgbSA9IDA7IG0gPCAxOyBtKyspIHtcclxuXHRcdFx0ZW50aXR5ID0gbmV3IE1hZ2UodGhpcywgMCk7XHRcdFxyXG5cdFx0XHRlbnRpdHkuc2V0UG9zaXRpb24oKHRoaXMuc3Bhd25YIC0gMikgKiAxNiArIDgsIFxyXG5cdFx0XHRcdFx0ICBcdCAgIFx0ICAgKHRoaXMuc3Bhd25ZICsgbSkgKiAxNiArIDgpO1xyXG5cdFx0XHRcclxuXHRcdFx0dGhpcy5lbnRpdHlsaXN0LmFkZChlbnRpdHkpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRcdFxyXG5cdHRoaXMuZW50aXR5bGlzdC5wb29sKCkuZm9yRWFjaCgoZW50aXR5KSA9PiB7XHJcblx0XHRpZihlbnRpdHkgaW5zdGFuY2VvZiBQbGF5ZXIpIHtcclxuXHRcdFx0Ly/QuNGB0L/QvtC70YzQt9C+0LLQsNGC0Ywg0L7QsdGK0LXQutGCXHJcblx0XHRcdGVudGl0eS51c2luZygpO1x0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0Ly/QsNGC0LDQutCwINC80L7QsdCwXHJcblx0XHRcdGlmKGVudGl0eS5hdHRhY2tNb2IpIHtcclxuXHRcdFx0XHR2YXIgdGFyZ2V0ID0gdGhpcy5lbnRpdHlsaXN0LmdldE9iamVjdEJ5SWQoZW50aXR5LmF0dGFja01vYik7XHJcblx0XHRcdFx0aWYodGhpcy5tb2JJblJhZGl1cyhlbnRpdHksIHRhcmdldCwgQ29uc3QuUExBWUVSX0FUQUNLX1JBRElVUykpIHtcclxuXHRcdFx0XHRcdC8vY29uc29sZS5sb2coXCJhdHRhY2sgZW50aXR5OlwiLCBlbnRpdHkuYXR0YWNrKTtcclxuXHRcdFx0XHRcdGVudGl0eS5hdHRhY2sodGFyZ2V0LCB0aGlzLmNvdW50KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZW50aXR5LmF0dGFja01vYiA9IG51bGw7XHJcblx0XHRcdH1cdFx0XHRcdFxyXG5cdFx0XHRcdFxyXG5cdFx0XHQvL9C60LDRgdGCINC30LDQutC70LjQvdCw0L3QuNGPXHJcblx0XHRcdGlmKGVudGl0eS5zcGVsbGNhc3QgJiYgZW50aXR5LmNhc3QodGhpcy5jb3VudCkpIHtcdFxyXG5cdFx0XHRcdC8vXHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdHRoaXMuc3Bhd25Qcm9qZWN0aWxlKGVudGl0eSwgZW50aXR5LnNwZWxsY2FzdC5keCwgZW50aXR5LnNwZWxsY2FzdC5keSk7XHRcdFx0XHRcdFxyXG5cdFx0XHRcdGVudGl0eS5zcGVsbGNhc3QgPSBudWxsO1xyXG5cdFx0XHR9XHRcdFx0XHRcclxuXHRcdH1cdFx0XHRcclxuXHRcdFx0XHJcblx0XHQvL9GB0LjQvNGD0LvRj9GG0LjRjyDQuCDQmNCYXHJcblx0XHRlbnRpdHkudXBkYXRlSG9zdCh0aGlzLmNvdW50KTtcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcclxuXHRcdGVudGl0eS54ICs9IGVudGl0eS5tb3Rpb25YICogQ29uc3QuUkVOREVSU19QRVJfVElDSztcclxuXHRcdGVudGl0eS55ICs9IGVudGl0eS5tb3Rpb25ZICogQ29uc3QuUkVOREVSU19QRVJfVElDSztcclxuXHRcdFx0XHRcdFx0XHJcblx0XHQvL0BQbGF5ZXJcclxuXHRcdGVudGl0eS5keCA9IDA7XHJcblx0XHRlbnRpdHkuZHkgPSAwO1x0XHRcdFx0XHJcblx0fSk7XHRcclxufVxyXG5cclxuSG9zdEdhbWUucHJvdG90eXBlLnVwZGF0ZVBsYXllckNvbnRyb2xzID0gZnVuY3Rpb24oKSB7fVxyXG5cclxuSG9zdEdhbWUucHJvdG90eXBlLmFkZFBsYXllcnNUb1N0YWdlID0gZnVuY3Rpb24ocGxheWVycykge31cclxuXHJcbkhvc3RHYW1lLnByb3RvdHlwZS5hZGRFbnRpdHkgPSBmdW5jdGlvbihlbnRpdHksIGlkKSB7XHRcdFxyXG5cdHRoaXMuZW50aXR5bGlzdC5hZGRUb0lkKGVudGl0eSwgaWQpO1xyXG59XHJcblxyXG5Ib3N0R2FtZS5wcm90b3R5cGUucmVtb3ZlRW50aXR5ID0gZnVuY3Rpb24oaWQpIHtcdFx0XHRcclxuXHR2YXIgZW50aXR5ID0gdGhpcy5lbnRpdHlsaXN0LmdldE9iamVjdEJ5SWQoaWQpO1x0XHJcblx0aWYoZW50aXR5IGluc3RhbmNlb2YgUGxheWVyKVxyXG5cdFx0dGhpcy5wbGF5ZXJzW2VudGl0eS5pZF0gPSBudWxsO1xyXG5cdFx0XHJcblx0dGhpcy5lbnRpdHlsaXN0LnJlbW92ZShpZCk7XHJcbn1cclxuXHJcbkhvc3RHYW1lLnByb3RvdHlwZS5zcGF3blByb2plY3RpbGUgPSBmdW5jdGlvbihlbnRpdHksIGR4LCBkeSkge1xyXG5cdHZhciBwID0gbmV3IFByb2plY3RpbGUodGhpcywgMCk7XHJcblx0cC5pbml0KGR4LCBkeSwgZW50aXR5KTtcclxuXHRwLnNldFBvc2l0aW9uKGVudGl0eS54LCBlbnRpdHkueSk7XHJcblx0dGhpcy5lbnRpdHlsaXN0LmFkZChwKTtcdFxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9zdEdhbWUiLCJ2YXIgS0VZUyA9IHtcclxuXHRcdExFRlQgICAgOiAzNywgXHRVUCAgICAgIDogMzgsXHRSSUdIVCAgIDogMzksICBcdERPV04gICAgOiA0MCwgIFx0RU5URVIgICA6IDEzLCAgXHRTUEFDRSAgIDogMzIsICBcdFNISUZUICAgOiAxNiwgIFx0Q1RSTCAgICA6IDE3LFxyXG4gICAgXHRBTFQgICAgIDogMTgsICBcdEVTQyAgICAgOiAyNywgIFx0U0xBU0ggICA6IDExMSwgIFBFUklPRCAgOiAxOTAsIFx0MSAgICAgICA6IDQ5LCAgXHQyICAgICAgIDogNTAsICBcdDMgICAgICAgOiA1MSwgIFx0NCAgICAgICA6IDUyLFxyXG4gICBcdFx0NSAgICAgICA6IDUzLCAgXHQ2ICAgICAgIDogNTQsICBcdDcgICAgICAgOiA1NSwgIFx0OCAgICAgICA6IDU2LCAgXHQ5ICAgICAgIDogNTcsICBcdDAgICAgICAgOiA1OCwgIFx0QSAgICAgICA6IDY1LCAgXHRCICAgICAgIDogNjYsXHJcbiAgICBcdEMgICAgICAgOiA2NywgIFx0RCAgICAgICA6IDY4LCAgXHRFICAgICAgIDogNjksICBcdEYgICAgICAgOiA3MCwgIFx0RyAgICAgICA6IDcxLCAgXHRIICAgICAgIDogNzIsICBcdEkgICAgICAgOiA3MywgIFx0SiAgICAgICA6IDc0LFxyXG4gICAgXHRLICAgICAgIDogNzUsICBcdEwgICAgICAgOiA3NiwgIFx0TSAgICAgICA6IDc3LCAgXHROICAgICAgIDogNzgsICBcdE8gICAgICAgOiA3OSwgIFx0UCAgICAgICA6IDgwLCAgXHRRICAgICAgIDogODEsICBcdFIgICAgICAgOiA4MixcclxuICAgIFx0UyAgICAgICA6IDgzLCAgXHRUICAgICAgIDogODQsICBcdFUgICAgICAgOiA4NSwgIFx0ViAgICAgICA6IDg2LCAgXHRXICAgICAgIDogODcsICBcdFggICAgICAgOiA4OCwgIFx0WSAgICAgICA6IDg5LCAgXHRaICAgICAgIDogOTAsXHJcbiAgICBcdEYxICAgICAgOiAxMTIsIFx0RjIgICAgICA6IDExMywgXHRGMyAgICAgIDogMTE0LCBcdEY0ICAgICAgOiAxMTUsIFx0RjUgICAgICA6IDExNiwgXHRGNiAgICAgIDogMTE3LCBcdEY3ICAgICAgOiAxMTgsIFx0RjggICAgICA6IDExOSxcclxuICAgIFx0RjkgICAgICA6IDEyMCwgXHRGMTAgICAgIDogMTIxLCBcdEYxMSAgICAgOiAxMjIsIFx0RjEyICAgICA6IDEyMyAgICBcclxufTtcclxuXHRcclxuXHRcclxudmFyIElucHV0ID0gZnVuY3Rpb24oKSB7XHRcclxuXHR0aGlzLmtleXMgPSBbXTtcclxuXHR0aGlzLnByZXNzZWQgPSBudWxsOyBcclxuXHR0aGlzLmxtYkRvd24gPSBmYWxzZTtcclxuXHR0aGlzLnJtYkRvd24gPSBmYWxzZTtcclxuXHR0aGlzLmdyYWIgPSBmYWxzZSxcdFxyXG5cdHRoaXMuaGFzRm9jdXMgPSB0cnVlO1xyXG5cdHRoaXMucG9pbnRlckxvY2tlZCA9IGZhbHNlO1xyXG5cdHRoaXMubW91c2VYID0gLTE7XHJcblx0dGhpcy5tb3VzZVkgPSAtMTtcclxuXHQvL3RoaXMubW91c2VNb3ZlWCA9IDA7XHJcblx0Ly90aGlzLm1vdXNlTW92ZVkgPSAwO1xyXG5cdHRoaXMuY2xpY2sgPSBudWxsO1xyXG5cdFxyXG5cdFxyXG5cdHRoaXMuY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUtY2FudmFzJyk7XHJcblx0XHJcblx0Ly90aGlzLm9uTW91c2VVcCA9IHRoaXMub25Nb3VzZVVwLmJpbmQodGhpcyk7XHJcblx0dGhpcy5vbk1vdXNlRG93biA9IHRoaXMub25Nb3VzZURvd24uYmluZCh0aGlzKTtcdFxyXG5cdC8vdGhpcy5vbk1vdXNlQ2xpY2sgPSB0aGlzLm9uTW91c2VDbGljay5iaW5kKHRoaXMpO1xyXG5cdHRoaXMub25Nb3VzZU1vdmUgPSB0aGlzLm9uTW91c2VNb3ZlLmJpbmQodGhpcyk7XHJcbn1cdFxyXG5cclxuSW5wdXQucHJvdG90eXBlLmZyZWUgPSBmdW5jdGlvbigpIHtcclxuXHR0aGlzLmtleXMgPSBbXTsgXHJcblx0dGhpcy5wcmVzc2VkID0gW107XHJcblx0dGhpcy5sbWJEb3duID0gZmFsc2U7XHJcblx0dGhpcy5ybWJEb3duID0gZmFsc2U7XHJcblx0dGhpcy5ncmFiID0gZmFsc2U7XHJcblx0dGhpcy5wb2ludGVyTG9ja2VkID0gZmFsc2U7XHJcblx0aWYodGhpcy5jYW52YXMpIHtcclxuXHRcdC8vdGhpcy5jYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uTW91c2VDbGljaywgZmFsc2UpO1xyXG5cdFx0dGhpcy5jYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5vbk1vdXNlRG93biwgZmFsc2UpO1xyXG5cdFx0Ly90aGlzLmNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5vbk1vdXNlVXAsIGZhbHNlKTtcclxuXHRcdHRoaXMuY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMub25Nb3VzZU1vdmUsIGZhbHNlKTtcclxuXHR9XHJcblx0XHJcblx0Ly9kb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdwb2ludGVybG9ja2NoYW5nZScsIHRoaXMub25Qb2ludGVyTG9ja0NoYW5nZSwgZmFsc2UpO1xyXG5cdC8vZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW96cG9pbnRlcmxvY2tjaGFuZ2UnLCB0aGlzLm9uUG9pbnRlckxvY2tDaGFuZ2UsIGZhbHNlKTtcclxufVxyXG5cclxuSW5wdXQucHJvdG90eXBlLnNldHVwS2V5QW5kTW91c2VMaXN0ZW5lcnMgPSBmdW5jdGlvbigpIHtcclxuXHRcclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCAoZSkgPT4ge1xyXG5cdFx0dGhpcy5oYXNGb2N1cyA9IHRydWU7ICAgXHJcblx0fSwgZmFsc2UpO1xyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd1bmZvY3VzJywgKGUpID0+IHtcclxuXHRcdHRoaXMuaGFzRm9jdXMgPSBmYWxzZTtcdFxyXG5cdFx0dGhpcy5jbGVhckFsbEtleSgpO1x0XHJcblx0fSwgZmFsc2UpO1xyXG5cdFx0XHJcblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XHJcblx0XHQvL2UucHJldmVudERlZmF1bHQoKTtcclxuXHRcdHRoaXMua2V5c1tlLmtleUNvZGVdID0gdHJ1ZTtcclxuXHRcdHRoaXMucHJlc3NlZCA9IGUua2V5Q29kZTtcdFx0XHJcblx0fSwgZmFsc2UpO1xyXG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGUpID0+IHtcclxuXHRcdC8vZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0dGhpcy5rZXlzW2Uua2V5Q29kZV0gPSBmYWxzZTtcclxuXHR9LCBmYWxzZSk7XHRcclxuXHRcclxuXHQvKmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJsb2NrY2hhbmdlJywgKGUpID0+IHtcclxuXHRcdHRoaXMub25Qb2ludGVyTG9ja0NoYW5nZSgpO1xyXG5cdH0sIGZhbHNlKTsqL1xyXG5cdFxyXG5cdFx0XHJcblx0aWYodGhpcy5jYW52YXMpIHtcclxuXHRcdC8vdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uTW91c2VDbGljaywgZmFsc2UpO1xyXG5cdFx0dGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5vbk1vdXNlRG93biwgZmFsc2UpO1xyXG5cdFx0Ly90aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5vbk1vdXNlVXAsIGZhbHNlKTtcclxuXHRcdHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMub25Nb3VzZU1vdmUsIGZhbHNlKTtcclxuXHR9XHRcclxufVxyXG5cclxuLypJbnB1dC5wcm90b3R5cGUuZHJhZyA9IGZ1bmN0aW9uKCkge1xyXG5cdHRoaXMuZ3JhYiA9IHRydWU7XHJcbn1cclxuXHJcbklucHV0LnByb3RvdHlwZS5kcm9wID0gZnVuY3Rpb24oKSB7XHJcblx0dGhpcy5ncmFiID0gZmFsc2U7XHJcblx0dGhpcy5tb3VzZU1vdmVYID0gMDtcclxuXHR0aGlzLm1vdXNlTW92ZVkgPSAwO1xyXG59Ki9cdFxyXG5cclxuSW5wdXQucHJvdG90eXBlLm9uTW91c2VDbGljayA9IGZ1bmN0aW9uKGUpIHtcdFxyXG5cdHRoaXMuY2xpY2sgPSBbZS5wYWdlWCwgZS5wYWdlWV07XHJcblx0XHJcblx0Ly9jb25zb2xlLmxvZyhcImNsaWNrXCIsIHRoaXMuY2xpY2spO1xyXG5cdGUucHJldmVudERlZmF1bHQoKTtcclxufVxyXG5cclxuSW5wdXQucHJvdG90eXBlLm9uTW91c2VEb3duID0gZnVuY3Rpb24oZSkge1xyXG5cdGlmICh0aGlzLmhhc0ZvY3VzKSB7XHJcblx0XHRpZiAoZS53aGljaCA9PSAxKSB7XHJcblx0XHRcdHRoaXMubG1iRG93biA9IHRydWU7XHJcblx0XHR9IGVsc2UgaWYgKGUud2hpY2ggPT0gMykge1xyXG5cdFx0XHR0aGlzLnJtYkRvd24gPSB0cnVlO1x0XHRcdFxyXG5cdFx0fVxyXG5cdFx0Ly90aGlzLmxvY2tQb2ludGVyKHRoaXMuY2FudmFzKTtcclxuXHRcdHRoaXMuY2xpY2sgPSBbZS5wYWdlWCwgZS5wYWdlWV07XHRcclxuXHRcdC8vY29uc29sZS5sb2coXCJjbGlja1wiLCB0aGlzLmNsaWNrKTtcclxuXHRcdFxyXG5cdH0gZWxzZSB7XHJcblx0XHR3aW5kb3cuZm9jdXMoKTtcclxuXHR9XHRcdFx0XHRcdFx0XHJcblx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59XHJcblxyXG5JbnB1dC5wcm90b3R5cGUub25Nb3VzZVVwID0gZnVuY3Rpb24oZSkge1xyXG5cdGlmICh0aGlzLmhhc0ZvY3VzKSB7XHJcblx0XHRpZiAoZS53aGljaCA9PSAxKSB7XHJcblx0XHRcdHRoaXMubG1iRG93biA9IGZhbHNlO1x0XHRcdFxyXG5cdFx0fSBlbHNlIGlmIChlLndoaWNoID09IDMpIHtcclxuXHRcdFx0dGhpcy5ybWJEb3duID0gZmFsc2U7XHJcblx0XHR9XHJcblx0fVxyXG5cdGUucHJldmVudERlZmF1bHQoKTtcclxufVxyXG5cclxuSW5wdXQucHJvdG90eXBlLm9uTW91c2VNb3ZlID0gZnVuY3Rpb24oZSkge1xyXG5cdHRoaXMubW91c2VYID0gZS5wYWdlWDtcclxuXHR0aGlzLm1vdXNlWSA9IGUucGFnZVk7XHRcclxuXHRcdFxyXG5cdC8qaWYgKHRoaXMuaXNQb2ludGVyTG9ja2VkKCkpIHtcclxuXHRcdHRoaXMubW91c2VNb3ZlWCArPSBlLm1vdmVtZW50WDsvLyB8fCBlLm1vek1vdmVtZW50WCB8fCBlLndlYmtpdE1vdmVtZW50WCB8fCAwO1xyXG5cdFx0dGhpcy5tb3VzZU1vdmVZICs9IGUubW92ZW1lbnRZOy8vIHx8IGUubW96TW92ZW1lbnRZIHx8IGUud2Via2l0TW92ZW1lbnRZIHx8IDA7XHRcdFxyXG5cdH0qL1x0XHRcdFxyXG5cdGUucHJldmVudERlZmF1bHQoKTtcclxufVxyXG5cclxuLypcclxuSW5wdXQucHJvdG90eXBlLmdldE1vdXNlTW92ZW1lbnRYID0gZnVuY3Rpb24oKSB7XHJcblx0dmFyIHggPSB0aGlzLm1vdXNlTW92ZVg7XHJcblx0dGhpcy5tb3VzZU1vdmVYID0gMDtcdFxyXG5cdHJldHVybiB4O1xyXG59XHJcblxyXG5JbnB1dC5wcm90b3R5cGUuZ2V0TW91c2VNb3ZlbWVudFkgPSBmdW5jdGlvbigpIHtcclxuXHR2YXIgeSA9IHRoaXMubW91c2VNb3ZlWTtcdFxyXG5cdHRoaXMubW91c2VNb3ZlWSA9IDA7XHRcdFxyXG5cdHJldHVybiB5O1xyXG59Ki9cclxuXHJcbklucHV0LnByb3RvdHlwZS5nZXRNb3VzZVggPSBmdW5jdGlvbigpIHtcdFx0XHJcblx0cmV0dXJuIHRoaXMubW91c2VYO1xyXG59XHJcblxyXG5JbnB1dC5wcm90b3R5cGUuZ2V0TW91c2VZID0gZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIHRoaXMubW91c2VZO1xyXG59XHJcblxyXG5JbnB1dC5wcm90b3R5cGUuZ2V0TGFzdFJpZ2h0Q2xpY2sgPSBmdW5jdGlvbigpIHtcclxuXHR0aGlzLnJtYkRvd24gPSBmYWxzZTtcclxuXHRyZXR1cm4gdGhpcy5jbGljaztcclxufVxyXG5JbnB1dC5wcm90b3R5cGUuZ2V0TGFzdExlZnRDbGljayA9IGZ1bmN0aW9uKCkge1xyXG5cdHRoaXMubG1iRG93biA9IGZhbHNlO1xyXG5cdHJldHVybiB0aGlzLmNsaWNrO1xyXG59XHJcblxyXG5JbnB1dC5wcm90b3R5cGUuZ2V0TGFzdENsaWNrUG9zID0gZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIHRoaXMuY2xpY2s7XHJcbn1cclxuXHJcbklucHV0LnByb3RvdHlwZS5jaGVja1ByZXNzZWQgPSBmdW5jdGlvbihja2V5KSB7IFx0XHRcclxuXHRpZih0aGlzLnByZXNzZWQgPT0gS0VZU1tja2V5XSkge1xyXG5cdFx0dGhpcy5wcmVzc2VkID0gbnVsbDtcclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH0gICAgICAgIFxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59ICAgXHJcblxyXG5JbnB1dC5wcm90b3R5cGUuZ2V0UHJlc3NlZCA9IGZ1bmN0aW9uKCkgeyBcdFx0XHJcblx0cmV0dXJuIHRoaXMucHJlc3NlZDtcclxufSAgIFxyXG5cdFxyXG5JbnB1dC5wcm90b3R5cGUuY2hlY2tLZXkgPSBmdW5jdGlvbihja2V5KSB7IFx0XHRcclxuXHRpZighIXRoaXMua2V5c1tLRVlTW2NrZXldXSkge1xyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fSAgICAgICAgXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn0gICBcclxuSW5wdXQucHJvdG90eXBlLmNsZWFyS2V5ID0gZnVuY3Rpb24oY2tleSkgeyAgICAgIFxyXG4gICAgdGhpcy5rZXlzW0tFWVNbY2tleV1dID0gZmFsc2U7ICAgICAgICAgXHJcbn1cclxuSW5wdXQucHJvdG90eXBlLmNsZWFyQWxsS2V5ID0gZnVuY3Rpb24oKSB7ICAgICAgXHJcbiAgICB0aGlzLmtleXMgPSBbXTsgXHJcblx0dGhpcy5wcmVzc2VkID0gW107ICAgICAgICBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5wdXRcclxuIiwiaW1wb3J0IFBlZXIgZnJvbSAnc2ltcGxlLXBlZXInXHJcblxyXG5pbXBvcnQgeyBDb25zdCwgTXNnIH0gZnJvbSAnY29uc3QuanMnXHJcbmltcG9ydCBDbGllbnQgZnJvbSAnbmV0d29yay9jbGllbnQuanMnXHJcbmltcG9ydCBIb3N0IGZyb20gJ25ldHdvcmsvaG9zdC5qcydcclxuXHJcblxyXG52YXIgTG9iYnkgPSAoZnVuY3Rpb24oKSB7XHJcblx0IFxyXG5cdHZhciBzb2NrZXQgPSBudWxsLFx0XHRcclxuXHRcdGNsaWVudCA9IG5ldyBDbGllbnQoKSxcclxuXHRcdGhvc3QgPSBuZXcgSG9zdCgpLFxyXG5cdFx0aXNIb3N0ID0gZmFsc2UsXHRcdFx0XHRcdFxyXG5cdFx0cGxheWVyTmFtZSA9IFwiXCIsXHJcblx0XHRpZCA9IG51bGwsXHJcblx0XHRwbGF5ZXJzID0gW107XHRcclxuXHRcclxuXHR2YXIgY29udGFpbmVyX2xvYmJ5LFx0XHRcclxuXHRcdGNvbnRhaW5lcl9yb29tLFxyXG5cdFx0Y29udGFpbmVyX21lbnUsXHRcdFxyXG5cdFx0cm9vbV9tZW51X2NoYXQsXHJcblx0XHRyb29tX29wdHMsXHJcblx0XHRcclxuXHRcdGNvbnRhaW5lcl9nYW1lLFxyXG5cdFx0Y29udGFpbmVyX2dhbWVfbWVudTtcdFx0XHRcdFxyXG5cdFxyXG5cdFxyXG4gXHRmdW5jdGlvbiBnZXRQbGF5ZXJTZWxmTmFtZSgpIHtcclxuXHRcdHZhciBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXItbmFtZS1pbnB1dCcpO1xyXG5cdFx0aW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsIChlKSA9PiB7XHRcdFxyXG5cdFx0XHRwbGF5ZXJOYW1lID0gaW5wdXQudmFsdWUuc3Vic3RyaW5nKDAsIDE2KTtcdFx0XHRcdFxyXG5cdFx0fSlcdFx0XHJcblx0fVxyXG5cdFxyXG5cdGZ1bmN0aW9uIHZhbGlkYXRlTmFtZSgpIHtcclxuXHRcdGlmKHBsYXllck5hbWUgPT0gXCJcIikge1xyXG5cdFx0XHR2YXIgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyLW5hbWUtaW5wdXQnKTtcclxuXHRcdFx0cGxheWVyTmFtZSA9IGlucHV0LnZhbHVlLnN1YnN0cmluZygwLCAxNik7XHJcblx0XHR9XHRcdFx0XHRcclxuXHRcdFxyXG5cdFx0aWYocGxheWVyTmFtZSA9PSBcIlwiKSB7XHJcblx0XHRcdHBsYXllck5hbWUgPSBcIlBsYXllclwiXHJcblx0XHRcdGlmKGlzSG9zdCkgcGxheWVyTmFtZSA9IFwiSG9zdFwiO1x0XHRcdFxyXG5cdFx0fVxyXG5cdFx0cGxheWVyTmFtZSA9IHBsYXllck5hbWUuc3Vic3RyaW5nKDAsIDE2KTtcclxuXHR9XHJcblx0XHJcblx0ZnVuY3Rpb24gZ2V0UGxheWVycygpIHtcclxuXHRcdHJldHVybiBwbGF5ZXJzO1xyXG5cdH1cclxuXHRcclxuXHRmdW5jdGlvbiBzYWZlbHlQYXJzZUpTT04gKGpzb24pIHsgXHJcbiBcdCBcdHRyeSB7XHJcbiAgICBcdFx0cmV0dXJuIEpTT04ucGFyc2UoanNvbik7XHJcbiAgXHRcdH0gY2F0Y2ggKGUpIHtcclxuICAgIFx0XHRyZXR1cm4ge307XHJcbiAgXHRcdH0gIFxyXG5cdH1cclxuXHRcclxuXHRmdW5jdGlvbiBjbG9zZVNvY2tldCgpIHtcdFx0XHJcblx0XHRpZihzb2NrZXQpIHtcclxuXHRcdFx0c29ja2V0Lm9uY2xvc2UgPSBmdW5jdGlvbiAoKSB7fTsgXHJcbiAgICBcdFx0c29ja2V0LmNsb3NlKCk7XHJcblx0XHR9XHRcdFxyXG5cdH1cclxuXHRcclxuXHRmdW5jdGlvbiBzZW5kSlNPTihtc2cpIHtcclxuXHRcdGlmKHNvY2tldCAmJiBzb2NrZXQucmVhZHlTdGF0ZSA9PSBzb2NrZXQuT1BFTil7XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0c29ja2V0LnNlbmQoSlNPTi5zdHJpbmdpZnkobXNnKSk7XHJcblx0XHR9XHRcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIHRyeVRvQ29ubmVjdCgpIHtcdFxyXG5cdFx0aWYoc29ja2V0ICYmIHNvY2tldC5yZWFkeVN0YXRlID09IHNvY2tldC5PUEVOKSB7XHJcblx0XHRcdGNsb3NlU29ja2V0KCk7XHJcblx0XHR9XHJcblx0XHJcblx0XHQvL3NvY2tldCA9IG5ldyBXZWJTb2NrZXQoXCJ3czovL2xvY2FsaG9zdDo4MDgwL3dzXCIpO1xyXG5cdFx0c29ja2V0ID0gbmV3IFdlYlNvY2tldChcIndzczovL2RlZXAtc2VhLmhlcm9rdWFwcC5jb20vd3NcIik7XHJcblx0XHRcclxuXHRcdHNvY2tldC5vbm9wZW4gPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coXCLQodC+0LXQtNC40L3QtdC90LjQtSFcIik7XHRcclxuXHRcdH07XHJcblx0XHRzb2NrZXQub25jbG9zZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgXHRcdFx0aWYgKGV2ZW50Lndhc0NsZWFuKSB7XHJcbiAgICBcdFx0XHRjb25zb2xlLmxvZygn0KHQvtC10LTQuNC90LXQvdC40LUg0LfQsNC60YDRi9GC0L4nKTtcclxuICBcdFx0XHR9IGVsc2Uge1xyXG4gICAgXHRcdFx0Ly9jb25zb2xlLmxvZygn0J7QsdGA0YvQsiDRgdC+0LXQtNC40L3QtdC90LjRjycpO1xyXG4gIFx0XHRcdH0gIFxyXG5cdFx0XHRjbGVhclJvb21MaXN0KCk7XHJcblx0XHRcdC8vc2hvd01lbnVXaW5kb3coKTtcclxuXHRcdH07XHRcdFxyXG5cdFx0c29ja2V0Lm9ubWVzc2FnZSA9IGZ1bmN0aW9uIChldmVudCkge1xyXG5cdFx0XHQvL2NvbnNvbGUubG9nKGV2ZW50LmRhdGEpO1xyXG4gIFx0XHRcdG9uTmV0d29ya01lc3NhZ2Uoc2FmZWx5UGFyc2VKU09OKGV2ZW50LmRhdGEpKTtcclxuXHRcdH1cdFxyXG5cdFx0c29ja2V0Lm9uZXJyb3IgPSBmdW5jdGlvbihlcnJvcikge1xyXG4gIFx0XHRcdC8vY29uc29sZS5sb2coXCLQntGI0LjQsdC60LAgOlwiICsgZXJyb3IubWVzc2FnZSk7XHJcblx0XHR9O1x0XHRcclxuXHR9XHJcblx0XHJcblx0ZnVuY3Rpb24gb25OZXR3b3JrTWVzc2FnZShtc2cpIHtcclxuXHRcdHRyeSB7XHJcblx0XHRcdGlmKG1zZy50eXBlKSB7XHRcdFxyXG5cdFx0XHRcdHN3aXRjaChtc2cudHlwZSl7XHRcdFx0XHJcblx0XHRcdFx0XHRjYXNlIFwiUm9vbUxpc3RcIjpcclxuXHRcdFx0XHRcdFx0dXBkYXRlUm9vbUxpc3QobXNnLnJvb21zKTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlIFwiUGxheWVyTGlzdFwiOlxyXG5cdFx0XHRcdFx0XHRwbGF5ZXJzID0gbXNnLnBsYXllcnM7XHJcblx0XHRcdFx0XHRcdGlkID0gbXNnLmlkO1xyXG5cdFx0XHRcdFx0XHR1cGRhdGVQbGF5ZXJzSW5Sb29tKG1zZy5wbGF5ZXJzLCBtc2cuaWQpO1x0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgXCJIb3N0TGVhdmVcIjpcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0Ly9zaG93V2FybmluZ01lc3NhZ2UoXCJIb3N0IGxlYXZlIHJvb21cIiwgMjAwMCk7XHJcblx0XHRcdFx0XHRcdGNsaWVudC5kZXN0cm95KCk7XHJcblx0XHRcdFx0XHRcdHNob3dNZW51V2luZG93KCk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1x0XHJcblx0XHRcdFx0XHRjYXNlIFwiQ2xpZW50VG9rZW5cIjpcclxuXHRcdFx0XHRcdFx0Ly/QutC70LjQtdC90YLRgdC60LjQuSDRgtC+0LrQtdC9INC00LvRjyDRhdC+0YHRgtCwXHJcblx0XHRcdFx0XHRcdHZhciBpZCA9IG1zZy53ZWJydGMuY2xpZW50SUQ7XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdGhvc3QuYWRkTmV3Q2xpZW50KG1zZy53ZWJydGMsIG1zZy5uYW1lLCAodG9rZW4pID0+IHtcclxuXHRcdFx0XHRcdFx0XHRpZihzb2NrZXQgIT0gbnVsbCAmJiBzb2NrZXQucmVhZHlTdGF0ZSA9PSBzb2NrZXQuT1BFTil7XHRcclxuXHRcdFx0XHRcdFx0XHRcdHRva2VuLmNsaWVudElEID0gaWQ7XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdHNvY2tldC5zZW5kKEpTT04uc3RyaW5naWZ5KHsgdHlwZTogXCJXZWJSVENUb2tlblwiLCB3ZWJydGM6IHRva2VuIH0pKTtcclxuXHRcdFx0XHRcdFx0XHR9XHRcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdGJyZWFrXHJcblx0XHRcdFx0XHRjYXNlIFwiSG9zdFRva2VuXCI6XHJcblx0XHRcdFx0XHRcdC8v0L7RgtCy0LXRgtC90YvQuSDRgtC+0LrQtdC9INGF0L7RgdGC0LBcdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0Y2xpZW50LnNpZ25hbChtc2cud2VicnRjKTtcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIlVuZGVmaW5lZCB0eXBlOiBcIiArIG1zZy50eXBlKTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHRcdFx0XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9IGNhdGNoKGUpIHtcclxuXHRcdFx0Y29uc29sZS5lcnJvcihlKTtcclxuXHRcdH1cclxuXHR9XHRcdFx0XHJcblx0XHJcblx0ZnVuY3Rpb24gY2xlYXJSb29tTGlzdCgpIHtcdFx0XHJcblx0XHR3aGlsZSAocm9vbV9vcHRzLmZpcnN0Q2hpbGQpIHtcclxuICAgIFx0XHRyb29tX29wdHMucmVtb3ZlQ2hpbGQocm9vbV9vcHRzLmZpcnN0Q2hpbGQpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRcclxuXHRmdW5jdGlvbiB1cGRhdGVSb29tTGlzdChyb29tcykge1x0XHRcdFxyXG5cdFx0Y2xlYXJSb29tTGlzdCgpO1xyXG5cdFx0XHJcblx0XHR2YXIgaSwgb3B0LFxyXG4gICAgICAgIGxlbiA9IHJvb21zLmxlbmd0aDsgICBcclxuICAgIFx0XHJcbiAgICBcdGZvciAoaSA9IDA7IGkgPCBsZW47ICsraSkge1xyXG4gICAgICAgIFx0b3B0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnT1BUSU9OJyk7XHJcbiAgICAgICAgXHRvcHQudGV4dENvbnRlbnQgPSBcIiNcIiArIHJvb21zW2ldLmlkICsgXCIgW1wiKyByb29tc1tpXS5jb3VudCArXCIvXCIrIENvbnN0Lk1BWF9QTEFZRVJTX1JPT00gK1wiXVwiO1xyXG4gICAgICAgIFx0b3B0LnZhbHVlID0gcm9vbXNbaV0uaWQ7XHJcbiAgICAgICAgXHRyb29tX29wdHMuYXBwZW5kQ2hpbGQob3B0KTtcclxuICAgIFx0fSBcdFx0XHRcclxuXHR9XHJcblx0XHJcblx0ZnVuY3Rpb24gY2xlYXJQbGF5ZXJzSW5Sb29tKCkge1xyXG5cdFx0dXBkYXRlUGxheWVyc0luUm9vbShbXSwgLTEpO1xyXG5cdH1cclxuXHRcclxuXHRmdW5jdGlvbiB1cGRhdGVQbGF5ZXJzSW5Sb29tKHBsYXllcnMsIHJvb21JZCkge1x0XHRcdFxyXG5cdFx0dmFyIGRpdl9pZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb29tLWlkJyk7XHJcblx0XHRkaXZfaWQudGV4dENvbnRlbnQgPSBcIlxceGEwXCIgKyBcIiNcIiArIHJvb21JZDtcclxuXHRcdFxyXG5cdFx0dmFyIG1lbWJlcl9saXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RlYW0tbWVudS1tZW1iZXItbGlzdCcpO1xyXG5cdFx0dmFyIGRpdnMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChtZW1iZXJfbGlzdC5xdWVyeVNlbGVjdG9yQWxsKFwiKlwiKSwgMCk7XHJcblx0XHR2YXIgZGl2LCBpbmRleCA9IDAsIGxlbiA9IHBsYXllcnMubGVuZ3RoO1xyXG5cdFx0ZGl2cy5mb3JFYWNoKGZ1bmN0aW9uKGRpdikge1xyXG5cdFx0XHRpZihkaXYuY2xhc3NOYW1lLmluY2x1ZGVzKFwibmFtZS10ZXh0XCIpKSB7XHRcclxuXHRcdFx0XHRkaXYuY2xhc3NOYW1lID0gXCJuYW1lLXRleHRcIjtcclxuXHRcdFx0XHRkaXYudGV4dENvbnRlbnQgPSBcIlwiO1xyXG5cdFx0XHRcdGZvcig7IGluZGV4IDwgbGVuOyBpbmRleCsrKSB7XHJcblx0XHRcdFx0XHRpZihwbGF5ZXJzW2luZGV4XSkge1xyXG5cdFx0XHRcdFx0XHQvL9C90LDRiNC70Lgg0YHQstC+0Lkg0L3QuNC6L9C40LRcclxuXHRcdFx0XHRcdFx0aWYocGxheWVyTmFtZSA9PSBwbGF5ZXJzW2luZGV4XSkge1xyXG5cdFx0XHRcdFx0XHRcdGRpdi5jbGFzc05hbWUgPSBcIm5hbWUtdGV4dCBuYW1lLXNlbGZcIjtcclxuXHRcdFx0XHRcdFx0XHQvL2lkID0gaW5kZXg7XHJcblx0XHRcdFx0XHRcdH1cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0ZGl2LnRleHRDb250ZW50ID0gcGxheWVyc1tpbmRleF07IFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRpbmRleCsrXHJcblx0XHRcdFx0XHRcdGJyZWFrXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR9XHRcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gXHRcdCBcdFxyXG5cdFx0fSk7XHRcdFx0XHRcdFx0XHJcblx0fVxyXG5cdFxyXG5cdGZ1bmN0aW9uIGNyZWF0ZVJvb20oKSB7XHJcblx0XHRjbGVhclBsYXllcnNJblJvb20oKTtcclxuXHRcdGlzSG9zdCA9IHRydWU7XHRcdFxyXG5cdFx0Y2xlYXJDaGF0KCk7XHRcclxuXHRcdHZhbGlkYXRlTmFtZSgpO1xyXG5cdFx0aG9zdC5zZWxmLm5hbWUgPSBwbGF5ZXJOYW1lO1x0XHJcblx0XHRob3N0LmNyZWF0ZVJvb20oKTtcclxuXHRcdHNlbmRKU09OKHsgdHlwZTogXCJDcmVhdGVSb29tXCIsIG5hbWU6IHBsYXllck5hbWUgfSk7XHJcblx0XHRzaG93Um9vbVdpbmRvdygpO1x0XHJcblx0fVxyXG5cdFxyXG5cdGZ1bmN0aW9uIGpvaW5Sb29tKCkge1x0XHJcblx0XHRjbGVhclBsYXllcnNJblJvb20oKTtcclxuXHRcdGlzSG9zdCA9IGZhbHNlO1x0XHRcclxuXHRcdGNsZWFyQ2hhdCgpO1x0XHJcblx0XHR2YWxpZGF0ZU5hbWUoKTtcdFx0XHJcblx0XHRcclxuXHRcdHZhciBzZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vbS1zZWxlY3QtbWFpbicpO1x0XHRcclxuXHRcdHZhciByb29tSWQgPSBwYXJzZUludChzZWxlY3QudmFsdWUpO1x0XHRcclxuXHRcdGlmKCFyb29tSWQgfHwgcm9vbUlkIDwgMCkgcmV0dXJuO1x0XHRcdFxyXG5cdFx0XHJcblx0XHRpZihzb2NrZXQgJiYgc29ja2V0LnJlYWR5U3RhdGUgPT0gc29ja2V0Lk9QRU4pe1x0XHJcblx0XHRcdGNsaWVudC5jcmVhdGUoKHRva2VuKSA9PiB7XHRcdFx0XHRcclxuXHRcdFx0XHRzZW5kSlNPTih7IHR5cGU6IFwiSm9pblJvb21cIiwgbmFtZTogcGxheWVyTmFtZSwgaWQ6IHJvb21JZCwgd2VicnRjOiB0b2tlbn0pO1x0XHRcdFx0XHJcblx0XHRcdH0pO1x0XHRcdFxyXG5cdFx0XHRjbGllbnQuam9pblJvb20oKTtcdFxyXG5cdFx0fVx0XHRcdFxyXG5cdFx0c2hvd1Jvb21XaW5kb3coKTtcdFxyXG5cdH1cclxuXHRcclxuXHRmdW5jdGlvbiBsZWF2ZVJvb20oKSB7XHJcblx0XHRpZihpc0hvc3QpIHtcclxuXHRcdFx0aG9zdC5sZWF2ZVJvb20oKTtcclxuXHRcdFx0aXNIb3N0ID0gZmFsc2U7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRjbGllbnQubGVhdmVSb29tKCk7XHJcblx0XHR9XHRcclxuXHRcdHBsYXllck5hbWUgPSBcIlwiO1x0XHRcclxuXHRcdHNlbmRKU09OKHsgdHlwZTogXCJMZWF2ZVJvb21cIiB9KTtcdFxyXG5cdFx0c2hvd01lbnVXaW5kb3coKTtcdFx0XHRcdFxyXG5cdH1cdFx0XHJcblx0XHJcblx0Ly9Ib3N0XHJcblx0ZnVuY3Rpb24gc3RhcnRHYW1lKCkge1x0XHRcdFxyXG5cdFx0c2hvd0dhbWVXaW5kb3coKTtcclxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiYmVmb3JldW5sb2FkXCIsIGJlZm9yZXVubG9hZCk7XHJcblx0fVxyXG5cdFxyXG5cdGZ1bmN0aW9uIGxlYXZlR2FtZSgpIHtcdFx0XHRcclxuXHRcdHRyeVRvQ29ubmVjdCgpO1x0XHJcblx0XHRoaWRlR2FtZU1lbnUoKTtcdFx0XHJcblx0XHRzaG93TWVudVdpbmRvdygpO1xyXG5cdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJiZWZvcmV1bmxvYWRcIiwgYmVmb3JldW5sb2FkKTtcclxuXHRcdC8vbG9jYXRpb24ucmVsb2FkKCk7XHRcdFxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gRE9NQ29udGVudExvYWRlZChldmVudCkge1x0XHRcclxuXHRcdGlmICghUGVlci5XRUJSVENfU1VQUE9SVCkgeyBcdFx0XHJcblx0XHRcdGFsZXJ0KFwiV2ViUlRDIG5vdCBzdXBwb3J0IVwiKTtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHR0cnlUb0Nvbm5lY3QoKTtcdFxyXG5cdFx0Z2V0UGxheWVyU2VsZk5hbWUoKTtcclxuXHRcclxuXHRcdGNvbnRhaW5lcl9sb2JieSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWluZXItbG9iYnknKTtcclxuXHRcdFx0Y29udGFpbmVyX21lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFpbmVyLW1lbnUnKTtcclxuXHRcdFx0cm9vbV9vcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb20tb3B0cycpO1x0XHRcdFx0XHJcblx0XHRcdGNvbnRhaW5lcl9yb29tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lci1yb29tJyk7XHRcclxuXHRcdFx0cm9vbV9tZW51X2NoYXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hhdC1sb2JieScpO1xyXG5cdFx0XHJcblx0XHRjb250YWluZXJfZ2FtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWluZXItZ2FtZScpO1xyXG5cdFx0XHRjb250YWluZXJfZ2FtZV9tZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lci1nYW1lLW1lbnUnKTtcdFx0XHJcblx0XHRcdFxyXG5cdFx0Ly9FU0Mg0LIg0LzQtdC90Y5cdFxyXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XHJcblx0XHRcdGlmIChlLndoaWNoID09IDI3IHx8IGUua2V5Q29kZSA9PSAyNykgeyAvL0VTQ1x0XHJcblx0XHRcdFx0Ly/QvNC10L3RjiDRg9C20LUg0LLRi9C30LLQsNC90L3Qvlx0XHRcdFxyXG5cdFx0XHRcdGlmKGNvbnRhaW5lcl9nYW1lX21lbnUuc3R5bGUuZGlzcGxheSA9PSBcImJsb2NrXCIpIHtcclxuXHRcdFx0XHRcdGhpZGUoY29udGFpbmVyX2dhbWVfbWVudSk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHNob3coY29udGFpbmVyX2dhbWVfbWVudSk7XHRcdFx0XHRcdFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSk7XHRcdFxyXG5cdFx0XHRcclxuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4tY3JlYXRlJykuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNyZWF0ZVJvb20pO1xyXG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bi1qb2luJykuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGpvaW5Sb29tKTtcdFx0XHJcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuLXJvb20tbGVhdmUnKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbGVhdmVSb29tKTtcdFxyXG5cdFx0XHJcblx0XHQvL9C90LDRh9Cw0YLRjCDQuNCz0YDRg1xyXG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bi1yb29tLXN0YXJ0JykuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuXHRcdFx0aWYoaXNIb3N0KSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coXCIjIyMgU3RhcnQgZ2FtZSAjIyNcIik7XHRcdFx0XHRcclxuXHRcdFx0XHRzZW5kSlNPTih7IHR5cGU6IFwiU3RhcnRHYW1lXCIgfSk7XHRcdFx0XHJcblx0XHRcdFx0aG9zdC5zdGFydEdhbWUoKTtcdFx0XHRcdFx0XHRcclxuXHRcdFx0fSAgXHJcblx0XHR9KTtcdFxyXG5cdFx0Ly/QstGL0LnRgtC4INC40Lcg0LjQs9GA0YtcclxuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4tZ2FtZS1sZWF2ZScpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcblx0XHRcdGlmKGlzSG9zdCkge1xyXG5cdFx0XHRcdGhvc3QubGVhdmVHYW1lKCk7XHJcblx0XHRcdFx0aXNIb3N0ID0gZmFsc2U7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Y2xpZW50LmxlYXZlR2FtZSgpO1x0XHRcdFx0XHJcblx0XHRcdH1cdFxyXG5cdFx0XHRwbGF5ZXJOYW1lID0gXCJcIjtcdFx0XHJcblx0XHR9KTtcdFx0XHJcblx0XHRcclxuXHRcdC8v0YfQsNGCXHJcblx0XHR2YXIgY2hhdF9pbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaGF0LWlucHV0Jyk7XHJcblx0XHRjaGF0X2lucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XHJcblx0XHRcdGlmIChjaGF0X2lucHV0LnZhbHVlICYmIChlLndoaWNoID09IDEzIHx8IGUua2V5Q29kZSA9PSAxMykpIHsgLy9FbnRlclx0XHJcblx0XHRcdFx0aWYoY2hhdF9pbnB1dC52YWx1ZSA9PSBcIlwiKSByZXR1cm4gdHJ1ZTtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdGlmKGlzSG9zdCkge1xyXG5cdFx0XHRcdFx0aG9zdC5zZWxmLnNlbmRDaGF0TXNnKGNoYXRfaW5wdXQudmFsdWUpO1x0XHRcdFx0XHRcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0Y2xpZW50LnNlbmRDaGF0TXNnKGNoYXRfaW5wdXQudmFsdWUpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRjaGF0X2lucHV0LnZhbHVlID0gXCJcIjtcclxuXHRcdFx0XHQvL3Njcm9sbCB0byBib3R0b20gbWVzc2FnZXNcclxuXHRcdFx0XHRyb29tX21lbnVfY2hhdC5zY3JvbGxUb3AgPSByb29tX21lbnVfY2hhdC5zY3JvbGxIZWlnaHQ7XHJcbiAgICAgICAgXHRcdHJldHVybiBmYWxzZTtcclxuICAgIFx0XHR9XHJcbiAgICBcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9KTtcdFx0XHRcclxuXHRcdFxyXG5cdFx0Ly/Qv9C10YDQtdC0INC30LDQutGA0YvRgtC40LXQvCBcclxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwidW5sb2FkXCIsIChlKSA9PiB7IFx0XHRcdFxyXG5cdFx0XHRjbG9zZVNvY2tldCgpO1x0XHJcblx0XHRcdGNsaWVudC5kZXN0cm95KCk7XHJcblx0XHR9KTtcclxuXHRcdC8v0L3QtSDQv9C+0LrQsNC30YvQstCw0YLRjCDQvNC10L3RjiDQvdCwINC/0YDQsNCy0YvQuSDQutC70LjQulxyXG5cdFx0d2luZG93Lm9uY29udGV4dG1lbnUgPSBmdW5jdGlvbigpIHtcclxuICAgIFx0XHRyZXR1cm4gZmFsc2U7IFxyXG5cdFx0fVxyXG5cdFx0XHRcclxuXHR9XHRcdFxyXG5cdFxyXG5cdGZ1bmN0aW9uIGJlZm9yZXVubG9hZChlKSB7XHJcblx0XHR2YXIgY29uZmlybWF0aW9uTWVzc2FnZSA9IHRydWU7XHJcbiAgXHRcdChlIHx8IHdpbmRvdy5ldmVudCkucmV0dXJuVmFsdWUgPSBjb25maXJtYXRpb25NZXNzYWdlOyAvL0dlY2tvICsgSUVcclxuICBcdFx0cmV0dXJuIGNvbmZpcm1hdGlvbk1lc3NhZ2U7ICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vV2Via2l0LCBTYWZhcmksIENocm9tZVxyXG5cdH1cclxuXHRcclxuXHRmdW5jdGlvbiBjbGVhckNoYXQoKSB7XHRcdFxyXG5cdFx0cm9vbV9tZW51X2NoYXQudGV4dENvbnRlbnQgPSBcIlwiO1xyXG5cdH1cclxuXHRcclxuXHRmdW5jdGlvbiBzaG93V2FybmluZ01lc3NhZ2UobXNnLCB0aW1vdXQpIHtcdFx0XHJcblx0fVx0XHJcblx0XHJcblx0ZnVuY3Rpb24gc2hvd1Jvb21XaW5kb3coKSB7XHJcblx0XHRzaG93KGNvbnRhaW5lcl9sb2JieSk7XHJcblx0XHRzaG93KGNvbnRhaW5lcl9yb29tKTtcclxuXHRcdGhpZGUoY29udGFpbmVyX21lbnUpO1x0XHJcblx0XHRoaWRlKGNvbnRhaW5lcl9nYW1lKTtcclxuXHRcdGlmKGlzSG9zdCkge1xyXG5cdFx0XHRzaG93KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4tcm9vbS1zdGFydCcpKTtcclxuXHRcdH1cclxuXHR9XHJcblx0ZnVuY3Rpb24gc2hvd01lbnVXaW5kb3coKSB7XHJcblx0XHRzaG93KGNvbnRhaW5lcl9sb2JieSk7XHJcblx0XHRzaG93KGNvbnRhaW5lcl9tZW51KTtcclxuXHRcdGhpZGUoY29udGFpbmVyX2dhbWUpO1xyXG5cdFx0aGlkZShjb250YWluZXJfcm9vbSk7XHRcdFxyXG5cdFx0aGlkZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuLXJvb20tc3RhcnQnKSk7XHJcblx0fVxyXG5cdGZ1bmN0aW9uIHNob3dHYW1lV2luZG93KCkge1xyXG5cdFx0c2hvdyhjb250YWluZXJfZ2FtZSk7XHJcblx0XHRoaWRlKGNvbnRhaW5lcl9sb2JieSk7XHRcdFxyXG5cdH1cclxuXHRmdW5jdGlvbiBzaG93R2FtZU1lbnUoKSB7XHJcblx0XHRzaG93KGNvbnRhaW5lcl9nYW1lX21lbnUpO1xyXG5cdH1cclxuXHRmdW5jdGlvbiBoaWRlR2FtZU1lbnUoKSB7XHJcblx0XHRoaWRlKGNvbnRhaW5lcl9nYW1lX21lbnUpO1xyXG5cdH1cclxuXHRcclxuXHRmdW5jdGlvbiBzaG93KGUpeyBlLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7IH1cclxuXHRmdW5jdGlvbiBoaWRlKGUpeyBlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjsgfVxyXG5cdFxyXG5cdFxyXG5cdHJldHVybiB7XHJcblx0XHRET01Db250ZW50TG9hZGVkOiBET01Db250ZW50TG9hZGVkLFxyXG5cdFx0Y2xlYXJDaGF0OiBjbGVhckNoYXQsXHJcblx0XHRzdGFydEdhbWU6IHN0YXJ0R2FtZSxcclxuXHRcdGxlYXZlR2FtZTogbGVhdmVHYW1lLFxyXG5cdFx0XHJcblx0XHRzaG93R2FtZVdpbmRvdzogc2hvd0dhbWVXaW5kb3csXHJcblx0XHRzaG93TWVudVdpbmRvdzogc2hvd01lbnVXaW5kb3csXHRcdFxyXG5cdFx0XHJcblx0XHRzaG93R2FtZU1lbnU6IHNob3dHYW1lTWVudSxcclxuXHRcdGhpZGVHYW1lTWVudTogaGlkZUdhbWVNZW51LFx0XHRcclxuXHRcdGdldFBsYXllcnMgOiBnZXRQbGF5ZXJzLFxyXG5cdH1cdFx0XHJcblxyXG59KSgpO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvYmJ5OyBcclxuIiwiaW1wb3J0IExvYmJ5IGZyb20gJ2xvYmJ5LmpzJ1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgTG9iYnkuRE9NQ29udGVudExvYWRlZCk7IiwiaW1wb3J0IFBlZXIgZnJvbSAnc2ltcGxlLXBlZXInXHJcblxyXG5pbXBvcnQgeyBDb25zdCwgTXNnIH0gZnJvbSAnY29uc3QuanMnXHJcbmltcG9ydCBQYWNrZXRNYW5hZ2VyIGZyb20gJ25ldHdvcmsvcGFja2V0LmpzJ1xyXG5pbXBvcnQgTG9iYnkgZnJvbSAnbG9iYnkuanMnXHJcbmltcG9ydCBHYW1lIGZyb20gJ2dhbWUuanMnXHJcblxyXG5cclxudmFyIENsaWVudCA9IGZ1bmN0aW9uKCkge1x0XHJcblx0dGhpcy5pZCA9IC0xO1xyXG5cdHRoaXMubmFtZSA9IFwiXCI7XHRcclxuXHRcclxuXHQvL3RoaXMucGxheWVycyA9IFtdO1xyXG5cdFxyXG5cdHRoaXMucGVlciA9IG51bGw7XHJcblx0dGhpcy5jb25uZWN0ZWQgPSBmYWxzZTtcdFxyXG5cdC8v0L/QsNC60LXRgtGLINC+0YIg0YXQvtGB0YLQsFxyXG5cdHRoaXMucGFja2V0QnVmZmVyID0gW107XHJcblx0dGhpcy5sYXN0UGFja2V0SUQgPSAwO1x0XHJcblx0Ly9cclxuXHR0aGlzLnBhY2tldHNUb1NlbmQgPSBbXTtcclxuXHRcdFxyXG5cdHRoaXMuY2hhdFRleHQgPSBcIlwiO1xyXG5cdHRoaXMuY2hhdE9mZnNldCA9IFwiXFx4YTBcIjsgLy9TcGFjZVx0XHJcblx0dGhpcy5jaGF0UGFja2V0ID0gW107XHJcblx0XHJcblx0dGhpcy5nYW1lID0gbmV3IEdhbWUoKTtcdFxyXG5cdHRoaXMucGFja2V0TWFuYWdlciA9IG5ldyBQYWNrZXRNYW5hZ2VyKHRoaXMsIHRoaXMuZ2FtZSk7XHJcblx0Ly/QuNCz0YDQsCDQsiDQv9GA0L7RhtC10YHRgdC1XHJcblx0dGhpcy5wbGF5aW5nID0gZmFsc2U7XHJcblx0Ly/QsNC60YLQuNCy0YvQuSDQs9C70LDQstC90YvQuSDRhtC40LrQu1xyXG5cdHRoaXMuYWN0aXZlID0gZmFsc2U7XHRcclxuXHR0aGlzLmhDeWNsZSA9IDA7XHRcclxuXHR0aGlzLm1TZWNvbmRQZXJUaWMgPSAxMDAwIC8gQ29uc3QuVElDU19QRVJfU0VDT05EO1xyXG5cdFxyXG5cdHRoaXMuaW5kZXggPSAwO1xyXG59XHJcblxyXG5DbGllbnQucHJvdG90eXBlLmNyZWF0ZSA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XHRcclxuXHQvL3AycCDRgdC+0LXQtNC40L3QtdC90LjQtVx0XHJcblx0dGhpcy5wZWVyID0gbmV3IFBlZXIoeyBcclxuXHRcdGluaXRpYXRvcjogdHJ1ZSwgXHJcblx0XHR0cmlja2xlOiBmYWxzZSxcclxuXHRcdHJlY29ubmVjdFRpbWVyOiAxMDAsXHJcblx0XHRjb25maWc6IHtcclxuICAgICAgIFx0XHQvL2ljZVRyYW5zcG9ydFBvbGljeTogXCJyZWxheVwiLFxyXG5cdFx0XHRpY2VTZXJ2ZXJzOiBbXHJcblx0XHRcdFx0eyB1cmxzOiAnc3R1bjpzdHVuLmwuZ29vZ2xlLmNvbToxOTMwMicgfSxcclxuXHRcdFx0XHR7IHVybHM6ICdzdHVuOnN0dW40LmwuZ29vZ2xlLmNvbToxOTMwMicgfSxcclxuXHRcdFx0XVxyXG5cdFx0fVxyXG5cdH0pO1xyXG5cdHRoaXMubGlzdGVuKCk7XHRcclxuXHRcclxuXHR0aGlzLnBhY2tldEJ1ZmZlciA9IFtdO1xyXG5cdHRoaXMubGFzdFBhY2tldElEID0gMDtcclxuXHRcclxuXHQvL9GC0L7QutC10L0g0LTQu9GPINGF0L7RgdGC0LBcclxuXHR0aGlzLnBlZXIub24oJ3NpZ25hbCcsIChkYXRhKSA9PiB7XHJcbiAgXHRcdC8vY29uc29sZS5sb2coJ1NJR05BTCcsIEpTT04uc3RyaW5naWZ5KGRhdGEpKVxyXG4gIFx0XHRjYWxsYmFjayhkYXRhKTtcclxuXHR9KTtcdFx0XHJcbn1cclxuXHJcbkNsaWVudC5wcm90b3R5cGUubGlzdGVuID0gZnVuY3Rpb24oKSB7XHJcblx0dGhpcy5wZWVyLm9uKCdjb25uZWN0JywgKCkgPT4ge1xyXG4gIFx0XHRjb25zb2xlLmxvZygnQ09OTkVDVCcsIHRoaXMuaWQpIFx0XHRcdFxyXG5cdFx0dGhpcy5vbkNvbm5lY3QoKTtcdFxyXG5cdH0pO1x0XHRcclxuXHR0aGlzLnBlZXIub24oJ2Nsb3NlJywgKCkgPT4ge1xyXG4gIFx0XHRjb25zb2xlLmxvZygnQ0xPU0UnLCB0aGlzLmlkKVx0XHRcdFxyXG5cdFx0dGhpcy5vbkNsb3NlKCk7XHRcdFxyXG5cdH0pO1xyXG5cdHRoaXMucGVlci5vbignZGF0YScsIChkYXRhKSA9PiB7XHJcblx0XHR0aGlzLm9uTWVzc2FnZShkYXRhKTtcclxuXHR9KTtcclxuXHRcclxuXHR0aGlzLnBlZXIub24oJ2Vycm9yJywgZnVuY3Rpb24gKGVycikgeyBcclxuXHRcdGNvbnNvbGUubG9nKGVycikgXHJcblx0fSk7XHJcbn1cclxuXHJcbi8qQ2xpZW50LnByb3RvdHlwZS5zYWZlbHlQYXJzZUpTT04gPSBmdW5jdGlvbihqc29uKSB7IFxyXG4gXHQgdHJ5IHtcclxuICAgIFx0cmV0dXJuIEpTT04ucGFyc2UoanNvbik7XHJcbiAgXHR9IGNhdGNoIChlKSB7XHJcbiAgICBcdHJldHVybiBudWxsO1xyXG4gIFx0fSAgXHJcbn0qL1xyXG5cclxuQ2xpZW50LnByb3RvdHlwZS5vbk1lc3NhZ2UgPSBmdW5jdGlvbihwYWNrZXQpIHtcclxuXHRpZih0aGlzLmxhc3RQYWNrZXRJRCA+PSBDb25zdC5NQVhfUEVFUl9QQUNLRVRTKSB7XHRcdFxyXG5cdFx0Y29uc29sZS5sb2coXCJFcnJvcjogbWF4IHBlZXIgcGFja2V0c1wiKTtcdFx0XHJcblx0XHR0aGlzLnBhY2tldEJ1ZmZlciA9IFtdO1xyXG5cdFx0dGhpcy5sYXN0UGFja2V0SUQgPSAwO1xyXG5cdH1cdFx0XHJcblx0aWYoIXBhY2tldCkgcmV0dXJuO1xyXG5cdC8vY29uc29sZS5sb2cocGFja2V0KTtcdFxyXG5cdFxyXG5cdC8vVE9ETyDQv9GA0L7QstC10YDQuNGC0Ywg0YDQsNC30LzQtdGAINC/0LDQutC10YLQsFx0XHJcblx0XHRcclxuXHR0aGlzLnBhY2tldEJ1ZmZlclt0aGlzLmxhc3RQYWNrZXRJRF0gPSBwYWNrZXQuYnVmZmVyO1xyXG5cdHRoaXMubGFzdFBhY2tldElEKys7XHJcbn1cclxuXHJcbkNsaWVudC5wcm90b3R5cGUub25Db25uZWN0ID0gZnVuY3Rpb24oKSB7XHRcdFxyXG59XHJcblxyXG5DbGllbnQucHJvdG90eXBlLm9uQ2xvc2UgPSBmdW5jdGlvbigpIHtcdFxyXG5cdHRoaXMubGVhdmVHYW1lKCk7XHJcbn1cclxuXHJcbkNsaWVudC5wcm90b3R5cGUuc2lnbmFsID0gZnVuY3Rpb24odG9rZW4pIHtcclxuXHRpZighdGhpcy5wZWVyKSB7XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cdHRoaXMuaWQgPSB0b2tlbi5jbGllbnRJRDtcclxuXHR0aGlzLnBlZXIuc2lnbmFsKHRva2VuKTtcdFxyXG59XHJcblxyXG5DbGllbnQucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcclxuXHRpZih0aGlzLnBlZXIpIHtcdFx0XHJcblx0XHR0aGlzLnBlZXIuZGVzdHJveSgpO1xyXG5cdFx0dGhpcy5wZWVyID0gbnVsbDtcclxuXHR9XHJcblx0dGhpcy5wYWNrZXRCdWZmZXIgPSBbXTtcclxuXHR0aGlzLmxhc3RQYWNrZXRJRCA9IDA7XHRcclxufVxyXG5cclxuQ2xpZW50LnByb3RvdHlwZS5zZXRJZCA9IGZ1bmN0aW9uKGlkKSB7XHJcblx0dGhpcy5pZCA9IGlkO1xyXG59XHJcblxyXG5DbGllbnQucHJvdG90eXBlLmlzQ29ubmVjdGVkID0gZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIHRoaXMucGVlciAmJiB0aGlzLnBlZXIuY29ubmVjdGVkICYmICF0aGlzLnBlZXIuZGVzdHJveWVkO1xyXG59XHJcblxyXG5DbGllbnQucHJvdG90eXBlLnNlbmRQYWNrZXQgPSBmdW5jdGlvbihwYWNrZXQpIHtcclxuXHRpZih0aGlzLmlzQ29ubmVjdGVkKCkpIHtcdFx0XHJcblx0XHR0aGlzLnBlZXIuc2VuZChwYWNrZXQpO1x0XHJcblx0XHRwYWNrZXQgPSBudWxsO1xyXG5cdH1cclxufVxyXG5cclxuQ2xpZW50LnByb3RvdHlwZS5zZW5kQ2hhdE1zZyA9IGZ1bmN0aW9uKG1zZykge1xyXG5cdHZhciBfbXNnID0gbXNnLnN1YnN0cmluZygwLCBDb25zdC5DSEFUX01FU1NBR0VfTUFYKTtcdFxyXG5cdC8vY29uc29sZS5sb2coX21zZy5sZW5ndGgsIF9tc2cpO1xyXG5cdFxyXG5cdHRoaXMuY2hhdFBhY2tldCA9IFt7XHJcblx0XHRpZDogdGhpcy5pZCxcdFx0XHJcblx0XHRtc2c6IF9tc2csXHJcblx0XHRsZW46IF9tc2cubGVuZ3RoXHJcblx0fV07XHJcbn1cclxuXHJcbkNsaWVudC5wcm90b3R5cGUuYWRkQ2hhdE1zZyA9IGZ1bmN0aW9uKG1zZykge1xyXG5cdHZhciBjaGF0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NoYXQtbG9iYnknKTtcclxuXHRpZih0aGlzLnBsYXlpbmcpXHJcblx0XHRjaGF0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NoYXQtZ2FtZScpO1xyXG5cdHRoaXMuY2hhdFRleHQgKz0gdGhpcy5jaGF0T2Zmc2V0ICsgbXNnICsgXCJcXG5cIjtcclxuICAgIGNoYXQudGV4dENvbnRlbnQgPSB0aGlzLmNoYXRUZXh0O1x0XHRcclxufVxyXG5cclxuQ2xpZW50LnByb3RvdHlwZS5jbGVhckNoYXQgPSBmdW5jdGlvbigpIHtcclxuXHR0aGlzLmNoYXRUZXh0ID0gXCJcIjtcclxufVxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuQ2xpZW50LnByb3RvdHlwZS5qb2luUm9vbSA9IGZ1bmN0aW9uKCkge1x0XHJcblx0aWYodGhpcy5wbGF5aW5nIHx8IHRoaXMuYWN0aXZlKSByZXR1cm47XHJcblx0XHJcblx0dGhpcy5jbGVhckNoYXQoKTtcdFxyXG5cdHRoaXMuc3RhcnRMb29wKCk7XHJcbn1cclxuXHJcbkNsaWVudC5wcm90b3R5cGUubGVhdmVSb29tID0gZnVuY3Rpb24oKSB7XHRcclxuXHR0aGlzLmlkID0gLTE7XHRcclxuXHR0aGlzLmRlc3Ryb3koKTtcclxuXHR0aGlzLmFjdGl2ZSA9IGZhbHNlO1xyXG59XHJcblxyXG5DbGllbnQucHJvdG90eXBlLmxlYXZlR2FtZSA9IGZ1bmN0aW9uKCkge1x0XHJcblx0aWYoIXRoaXMucGxheWluZykgcmV0dXJuO1xyXG5cdFxyXG5cdHRoaXMucGxheWluZyA9IGZhbHNlO1x0XHJcblx0dGhpcy5hY3RpdmUgPSBmYWxzZTtcclxuXHRcclxuXHR0aGlzLmRlc3Ryb3koKTtcdFxyXG5cdHRoaXMuZ2FtZS5mcmVlKCk7XHRcclxuXHRMb2JieS5sZWF2ZUdhbWUoKTtcclxufVxyXG5cclxuQ2xpZW50LnByb3RvdHlwZS5zdGFydEdhbWUgPSBmdW5jdGlvbigpIHtcclxuXHRpZighdGhpcy5pc0Nvbm5lY3RlZCgpKSB7XHJcblx0XHRMb2JieS5zaG93TWVudVdpbmRvdygpO1xyXG5cdFx0Y29uc29sZS5sb2coXCLQntGI0LjQsdC60LAg0L/RgNC4INGB0YLQsNGA0YLQtVwiKTtcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblx0XHRcclxuXHR0aGlzLl9zdGFydEdhbWUoKTtcclxufVxyXG5cclxuQ2xpZW50LnByb3RvdHlwZS5fc3RhcnRHYW1lID0gZnVuY3Rpb24oKSB7XHJcblx0aWYodGhpcy5wbGF5aW5nKSByZXR1cm47XHJcblx0XHJcblx0dGhpcy5nYW1lLmluaXQoKTtcdFxyXG5cdHRoaXMuZ2FtZS5pZCA9IHRoaXMuaWQ7XHRcclxuXHQvL3RoaXMucGxheWluZyA9IHRydWU7XHJcblx0TG9iYnkuc3RhcnRHYW1lKCk7XHJcbn1cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuQ2xpZW50LnByb3RvdHlwZS5zdGFydExvb3AgPSBmdW5jdGlvbigpIHtcclxuXHRpZiAodGhpcy5oQ3ljbGUpIHtcclxuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5oQ3ljbGUpO1xyXG4gICAgICAgIHRoaXMuaEN5Y2xlID0gMDtcclxuICAgIH1cdFxyXG5cdFxyXG5cdHZhciBjbGllbnRDeWNsZSA9ICgpID0+IHtcclxuXHRcdGlmKCF0aGlzLmFjdGl2ZSkge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcIiMjIyBDeWNsZSBzdG9wICMjI1wiKTtcclxuICAgICAgICBcdHJldHVybjtcclxuICAgIFx0fSAgXHRcdFxyXG5cdFx0dGhpcy5ydW4oKTtcclxuXHRcdFxyXG5cdFx0dGhpcy5oQ3ljbGUgPSBzZXRUaW1lb3V0KGNsaWVudEN5Y2xlLCB0aGlzLm1TZWNvbmRQZXJUaWMpOyBcclxuXHR9XHJcblx0XHJcblx0dGhpcy5hY3RpdmUgPSB0cnVlOyAgICBcclxuICAgIGNsaWVudEN5Y2xlKCk7XHJcbn1cclxuXHJcbkNsaWVudC5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24oKSB7XHJcblx0XHJcblx0Ly9jb25zb2xlLmxvZyhcIioqKiogQ0xJRU5UIENZQ0xFICoqKlwiKTtcdFxyXG5cdFxyXG5cdC8vMS7QvtCx0YDQsNCx0L7RgtCw0YLRjCDQv9Cw0LrQtdGC0Ysg0L7RgiDRhdC+0YHRgtCwXHRcclxuXHR0aGlzLnBhY2tldEJ1ZmZlci5mb3JFYWNoKChwYWNrZXQpID0+IHtcdFx0XHJcblx0XHRpZihwYWNrZXQpIHtcdFx0XHRcdFxyXG5cdFx0XHQvL2NvbnNvbGUubG9nKFwi0J/QsNC60LXRgiDQutC70LjQtdC90YLQsFwiLCBwYWNrZXQpO1xyXG5cdFx0XHRzd2l0Y2godGhpcy5wYWNrZXRNYW5hZ2VyLmdldFBhY2tldElEKHBhY2tldCkpIHtcdFxyXG5cdFx0XHRcdGNhc2UgTXNnLkhvc3RTdGF0ZTpcdFxyXG5cdFx0XHRcdFx0aWYodGhpcy5wbGF5aW5nKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMucGFja2V0TWFuYWdlci5kSG9zdFN0YXRlUGFja2V0KHBhY2tldCk7XHJcblx0XHRcdFx0XHR9XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRicmVhaztcdFx0XHJcblx0XHRcdFx0Y2FzZSBNc2cuQ2hhdDpcdFxyXG5cdFx0XHRcdFx0dmFyIG1lc3NhZ2VzID0gdGhpcy5wYWNrZXRNYW5hZ2VyLmRDaGF0UGFja2V0KHBhY2tldCk7XHJcblx0XHRcdFx0XHQvL2NvbnNvbGUubG9nKG1lc3NhZ2VzKTtcclxuXHRcdFx0XHRcdG1lc3NhZ2VzLmZvckVhY2goKG1zZykgPT4ge1xyXG5cdFx0XHRcdFx0XHR0aGlzLmFkZENoYXRNc2coTG9iYnkuZ2V0UGxheWVycygpW21zZy5pZF0gKyBcIjpcIiArIHRoaXMuY2hhdE9mZnNldCArIG1zZy5tc2cpO1xyXG5cdFx0XHRcdFx0fSk7XHRcdFx0XHJcblx0XHRcdFx0XHRicmVhaztcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0Y2FzZSBNc2cuU3RhcnQ6XHJcblx0XHRcdFx0XHRpZighdGhpcy5wbGF5aW5nKSB7XHJcblx0XHRcdFx0XHRcdHZhciBwbGF5ZXJzID0gdGhpcy5wYWNrZXRNYW5hZ2VyLmRIb3N0U3RhcnRQYWNrZXQocGFja2V0KTtcclxuXHRcdFx0XHRcdFx0Ly9jb25zb2xlLmxvZyhcItCh0L/QuNGB0L7QuiDQuNCz0YDQvtC60L7QsjpcIiwgcGxheWVycyk7XHJcblx0XHRcdFx0XHRcdHRoaXMuc3RhcnRHYW1lKCk7XHRcclxuXHRcdFx0XHRcdFx0dGhpcy5nYW1lLnN0YXJ0R2FtZShwbGF5ZXJzLCAoKT0+IHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLnBsYXlpbmcgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiY2xpZW50IHN0YXJ0XCIpO1xyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGJyZWFrO1x0XHJcblx0XHRcdFx0Y2FzZSBNc2cuTGVhdmU6XHRcdFxyXG5cdFx0XHRcdFx0dmFyIHBsYXllcklEID0gdGhpcy5wYWNrZXRNYW5hZ2VyLmRIb3N0TGVhdmVQYWNrZXQocGFja2V0KTtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKFwi0JLRi9GI0LXQuyDQuNCz0YDQvtC6OlwiLCBwbGF5ZXJJRCk7XHRcclxuXHRcdFx0XHRcdHRoaXMuZ2FtZS5yZW1vdmVFbnRpdHkocGxheWVySUQpO1x0XHJcblx0XHRcdFx0XHQvL9GF0L7RgdGCINCy0YvRiNC10LtcclxuXHRcdFx0XHRcdGlmKHBsYXllcklEID09IENvbnN0LkhPU1RfSUQpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5sZWF2ZUdhbWUoKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGJyZWFrO1x0XHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRcdGJyZWFrO1x0XHJcblx0XHRcdH1cclxuXHRcdH1cdFx0XHJcblx0fSk7XHJcblx0dGhpcy5wYWNrZXRCdWZmZXIgPSBbXTtcclxuXHR0aGlzLmxhc3RQYWNrZXRJRCA9IDA7XHJcblx0XHJcblx0XHJcblx0Ly/RgdC+0L7QsdGJ0LXQvdC40Y8g0YfQsNGC0LBcclxuXHRpZih0aGlzLmNoYXRQYWNrZXQubGVuZ3RoID4gMCkge1xyXG5cdFx0dGhpcy5zZW5kUGFja2V0KHRoaXMucGFja2V0TWFuYWdlci5zQ2hhdFBhY2tldCh0aGlzLmNoYXRQYWNrZXQpKTtcdFxyXG5cdFx0dGhpcy5jaGF0UGFja2V0ID0gW107XHJcblx0fVx0XHJcblx0XHJcblx0XHJcblx0aWYodGhpcy5wbGF5aW5nKSB7XHJcblx0XHQvLzIu0L7QsdC90L7QstC40YLRjCDRgdC+0YHRgtC+0Y/QvdC40LUg0LjQs9GA0L7QutCwINC4INC80LjRgNCwXHRcdFxyXG5cdFx0dGhpcy5nYW1lLnJ1blRpY2soKTtcdFx0XHRcclxuXHRcdFxyXG5cdFx0Ly8zLtGB0YTQvtGA0LzQuNGA0L7QstCw0YLRjCDQv9Cw0LrQtdGCINC00LvRjyDRhdC+0YHRgtCwINC4INC+0YLQvtGB0LvQsNGC0YxcclxuXHRcdC8vaWYodGhpcy5nYW1lLm5lZWRVcGRhdGVQbGF5ZXJDb250cm9scykgXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuZ2FtZS5uZWVkVXBkYXRlUGxheWVyQ29udHJvbHMgPSBmYWxzZTtcclxuXHRcdFx0dGhpcy5zZW5kUGFja2V0KHRoaXMucGFja2V0TWFuYWdlci5zQ2xpZW50QWN0aW9uUGFja2V0KHRoaXMuZ2FtZS5hY3RpdmVQbGF5ZXIpKTtcclxuXHRcdH1cdFx0XHRcdFx0XHJcblx0fVx0XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBDbGllbnQ7IiwiaW1wb3J0IFBlZXIgZnJvbSAnc2ltcGxlLXBlZXInXHJcblxyXG5pbXBvcnQgeyBDb25zdCwgTXNnIH0gZnJvbSAnY29uc3QuanMnXHJcbmltcG9ydCBDbGllbnQgZnJvbSAnbmV0d29yay9jbGllbnQuanMnXHJcbmltcG9ydCBQYWNrZXRNYW5hZ2VyIGZyb20gJ25ldHdvcmsvcGFja2V0LmpzJ1xyXG5pbXBvcnQgSG9zdEdhbWUgZnJvbSAnaG9zdGdhbWUuanMnXHJcbmltcG9ydCBXb3JrZXIgZnJvbSAndGlja2VyLndvcmtlci5qcydcclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxudmFyIE1DbGllbnQgPSBmdW5jdGlvbihob3N0KSB7XHJcblx0Q2xpZW50LmNhbGwodGhpcywgbnVsbCk7XHRcclxuXHR0aGlzLmhvc3QgPSBob3N0O1xyXG59XHJcblxyXG5NQ2xpZW50LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQ2xpZW50LnByb3RvdHlwZSk7XHJcbk1DbGllbnQucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gTUNsaWVudDtcclxuXHJcblxyXG5NQ2xpZW50LnByb3RvdHlwZS5jcmVhdGUgPSBmdW5jdGlvbih0b2tlbiwgbmFtZSwgY2FsbGJhY2spIHtcdFxyXG5cdHRoaXMucGVlciA9IG5ldyBQZWVyKHsgXHJcblx0XHRpbml0aWF0b3I6IGZhbHNlLCBcclxuXHRcdHRyaWNrbGU6IGZhbHNlLFxyXG5cdFx0cmVjb25uZWN0VGltZXI6IDEwMCxcclxuXHRcdGNvbmZpZzoge1xyXG4gICAgICAgXHRcdC8vaWNlVHJhbnNwb3J0UG9saWN5OiBcInJlbGF5XCIsXHJcblx0XHRcdGljZVNlcnZlcnM6IFtcclxuXHRcdFx0XHR7IHVybHM6ICdzdHVuOnN0dW4ubC5nb29nbGUuY29tOjE5MzAyJyB9LFxyXG5cdFx0XHRcdHsgdXJsczogJ3N0dW46c3R1bjQubC5nb29nbGUuY29tOjE5MzAyJyB9LFxyXG5cdFx0XHRdXHJcblx0XHR9XHJcblx0fSk7XHJcblx0Ly90aGlzLnBlZXIuX2RlYnVnID0gY29uc29sZS5sb2c7XHJcblx0dGhpcy5saXN0ZW4oKTtcdFx0XHJcblx0XHJcblx0dGhpcy5uYW1lID0gbmFtZTtcclxuXHQvL9C/0LDQutC10YLRiyDQvtGCINC60LvQuNC10L3RgtCwXHJcblx0dGhpcy5wYWNrZXRCdWZmZXIgPSBbXTtcclxuXHR0aGlzLmxhc3RQYWNrZXRJRCA9IDA7XHRcclxuXHRcclxuXHQvL9C60LvQuNC10L3RgtGB0LrQuNC5INGC0L7QutC10L0g0LTQu9GPINGF0L7RgdGC0LBcdFxyXG5cdHRoaXMuc2lnbmFsKHRva2VuKTtcclxuXHQvL9C+0YLQstC10YLQvdGL0Lkg0YLQvtC60LXQvSDRhdC+0YHRgtCwXHJcblx0dGhpcy5wZWVyLm9uKCdzaWduYWwnLCAoZGF0YSkgPT4ge1x0ICBcdFx0XHJcbiAgXHRcdGNhbGxiYWNrKGRhdGEpO1xyXG5cdH0pO1x0XHJcbn1cclxuXHJcbk1DbGllbnQucHJvdG90eXBlLm9uQ29ubmVjdCA9IGZ1bmN0aW9uKCkge1x0XHJcbn1cclxuXHJcbk1DbGllbnQucHJvdG90eXBlLm9uQ2xvc2UgPSBmdW5jdGlvbigpIHtcdFxyXG5cdC8vQ0xJRU5ULnByb3RvdHlwZS5vbkNsb3NlLmNhbGwodGhpcyk7XHRcclxuXHR0aGlzLmhvc3QuY2xpZW50TGVhdmUodGhpcy5pZCk7XHJcbn1cclxuXHJcbk1DbGllbnQucHJvdG90eXBlLnN0YXJ0R2FtZSA9IGZ1bmN0aW9uKCkge31cclxuXHJcbk1DbGllbnQucHJvdG90eXBlLnN0YXJ0TG9vcCA9IGZ1bmN0aW9uKCkge31cclxuXHJcbk1DbGllbnQucHJvdG90eXBlLnNlbmRMYXN0UGFja2V0ID0gZnVuY3Rpb24oKSB7fVxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG52YXIgSG9zdCA9IGZ1bmN0aW9uKCkge1x0XHRcclxuXHQvL9C60LvQuNC10L3RgiDRhdC+0YHRgtCwXHJcblx0dGhpcy5jcmVhdGVTZWxmQ2xpZW50KCk7XHJcblx0XHJcblx0Ly/RgdC/0LjRgdC+0Log0LLRgdC10YUg0LrQu9C40LXQvdGC0L7QslxyXG5cdHRoaXMuY2xpZW50cyA9IFtdO1x0XHRcclxuXHR0aGlzLmNsaWVudHNDb3VudCA9IDA7XHJcblx0XHJcblx0dGhpcy5nYW1lID0gbmV3IEhvc3RHYW1lKCk7XHJcblx0Ly9cclxuXHR0aGlzLnBhY2tldE1hbmFnZXIgPSBuZXcgUGFja2V0TWFuYWdlcih0aGlzLCB0aGlzLmdhbWUpO1xyXG5cdC8v0LjQs9GA0LAg0LIg0L/RgNC+0YbQtdGB0YHQtVxyXG5cdHRoaXMucGxheWluZyA9IGZhbHNlO1xyXG5cdC8v0LDQutGC0LjQstGL0Lkg0LPQu9Cw0LLQvdGL0Lkg0YbQuNC60LtcclxuXHR0aGlzLmFjdGl2ZSA9IGZhbHNlO1xyXG5cdFxyXG5cdC8v0YHQtdGC0LXQstGL0LUg0L/QtdGA0LXQvNC10L3QvdGL0LUgXHJcblx0dGhpcy5jaGF0UGFja2V0cyA9IFtdO1x0XHJcblx0Ly90aGlzLmNsaWVudFBhY2tldHMgPSBbXTtcclxufVxyXG5cclxuSG9zdC5wcm90b3R5cGUuY3JlYXRlU2VsZkNsaWVudCA9IGZ1bmN0aW9uKCkge1xyXG5cdHRoaXMuc2VsZiA9IG5ldyBNQ2xpZW50KHRoaXMpO1x0XHRcdFxyXG5cdC8vXHRcclxuXHR0aGlzLnNlbGYuc2VuZFBhY2tldCA9IGZ1bmN0aW9uKHBhY2tldCkge1x0XHQgXHRcclxuXHRcdHRoaXMub25NZXNzYWdlKHBhY2tldCk7XHJcblx0fTtcclxuXHQvL1xyXG5cdHRoaXMuc2VsZi5zdGFydEdhbWUgPSBmdW5jdGlvbigpIHtcdFx0IFx0XHJcblx0XHR0aGlzLl9zdGFydEdhbWUoKTtcclxuXHR9O1xyXG59XHJcblxyXG5Ib3N0LnByb3RvdHlwZS5hZGRTZWxmQ2xpZW50ID0gZnVuY3Rpb24oKSB7XHJcblx0dGhpcy5zZWxmLmlkID0gQ29uc3QuSE9TVF9JRDtcdFxyXG5cdC8v0LTQvtCx0LDQstC70Y/QtdC8INGF0L7RgdGCLdC60LvQuNC10L3RgiDQsiDRgdC/0LjRgdC+0Log0LLRgdC10YUg0LrQu9C40LXQvdGC0L7QslxyXG5cdHRoaXMuY2xpZW50cy5wdXNoKHRoaXMuc2VsZik7XHJcblx0dGhpcy5jbGllbnRzQ291bnQrKztcdFxyXG59XHJcblxyXG5Ib3N0LnByb3RvdHlwZS5hZGROZXdDbGllbnQgPSBmdW5jdGlvbih0b2tlbiwgbmFtZSwgY2FsbGJhY2spIHtcdFxyXG5cdGlmKHRoaXMuY2xpZW50c0NvdW50ID49IENvbnN0Lk1BWF9QTEFZRVJTX1JPT00pIHtcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblx0dmFyIGNsaWVudElkID0gdG9rZW4uY2xpZW50SUQ7XHJcblx0Ly/QuNC0INC60LvQuNC10L3RgtCwINC30LDQvdGP0YJcclxuXHRpZih0aGlzLmNsaWVudHNbY2xpZW50SWRdKSByZXR1cm47XHRcclxuXHRcclxuXHR2YXIgY2xpZW50ID0gbmV3IE1DbGllbnQodGhpcyk7XHRcclxuXHR0aGlzLmNsaWVudHNbY2xpZW50SWRdID0gY2xpZW50O1xyXG5cdHRoaXMuY2xpZW50c0NvdW50Kys7XHRcclxuXHRcclxuXHRjbGllbnQuY3JlYXRlKHRva2VuLCBuYW1lLCBjYWxsYmFjayk7XHRcclxufVxyXG5cclxuSG9zdC5wcm90b3R5cGUucmVtb3ZlQ2xpZW50ID0gZnVuY3Rpb24oY2xpZW50SWQpIHtcdFxyXG5cdHZhciBjbGllbnQgPSB0aGlzLmNsaWVudHNbY2xpZW50SWRdO1xyXG5cdGlmKGNsaWVudElkID4gMCAmJiBjbGllbnQpIHtcdFx0XHRcclxuXHRcdGNsaWVudC5kZXN0cm95KCk7XHJcblx0XHRjbGllbnQgPSBudWxsO1x0XHRcdFxyXG5cdFx0dGhpcy5jbGllbnRzW2NsaWVudElkXSA9IG51bGw7XHJcblx0XHR0aGlzLmNsaWVudHNDb3VudC0tO1x0XHJcblx0fVx0XHJcbn1cclxuXHJcbkhvc3QucHJvdG90eXBlLnJlbW92ZUFsbENsaWVudHMgPSBmdW5jdGlvbigpIHtcclxuXHR0aGlzLmNsaWVudHMuZm9yRWFjaCgoY2xpZW50KSA9PiB7XHJcblx0XHRpZihjbGllbnQpIHtcdFx0XHRcclxuXHRcdFx0Y2xpZW50LmRlc3Ryb3koKTtcclxuXHRcdFx0Y2xpZW50ID0gbnVsbDtcclxuXHRcdH0gIFx0XHRcclxuXHR9KTtcclxuXHR0aGlzLmNsaWVudHMgPSBbXTtcdFxyXG5cdHRoaXMuY2xpZW50c0NvdW50ID0gMDtcclxufVxyXG5cclxuSG9zdC5wcm90b3R5cGUuZ2V0Q2xpZW50TXNnQnVmZmVyID0gZnVuY3Rpb24oaWQpIHtcclxuXHRpZihpZCA+PSAwICYmIHRoaXMuY2xpZW50c1tpZF0pIHtcclxuXHRcdHJldHVybiB0aGlzLmNsaWVudHNbaWRdLnBhY2tldEJ1ZmZlcjtcclxuXHR9XHRcclxuXHRyZXR1cm4gW107XHRcclxufVxyXG5cclxuSG9zdC5wcm90b3R5cGUuZ2V0Q2xpZW50QnlJZCA9IGZ1bmN0aW9uKGlkKSB7XHJcblx0aWYoaWQgPj0gMCAmJiB0aGlzLmNsaWVudHNbaWRdKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5jbGllbnRzW2lkXTtcdFx0XHJcblx0fVx0XHRcclxuXHRyZXR1cm4gbnVsbDtcclxufVxyXG5cclxuSG9zdC5wcm90b3R5cGUuYnJvYWRjYXN0UGFja2V0ID0gZnVuY3Rpb24ocGFja2V0KSB7XHRcclxuXHQvL9Cy0YHQtdC8INC40LPRgNC+0LrQsNC8INCy0LrQu9GO0YfQsNGPINGB0LXQsdGPXHJcblx0dGhpcy5jbGllbnRzLmZvckVhY2goKGNsaWVudCkgPT4ge1xyXG5cdFx0aWYoY2xpZW50KSB7XHJcblx0XHRcdGNsaWVudC5zZW5kUGFja2V0KHBhY2tldCk7XHJcblx0XHR9ICBcdFx0XHJcblx0fSk7XHJcbn1cclxuXHJcbkhvc3QucHJvdG90eXBlLmdldFBsYXllcnMgPSBmdW5jdGlvbigpIHtcclxuICBcdHZhclx0cGxheWVycyA9IFtdO1xyXG5cdFxyXG5cdC8v0LLRgdC1INC40LPRgNC+0LrQuCDQstC60LvRjtGH0LDRjyDRgdC10LHRj1xyXG5cdHRoaXMuY2xpZW50cy5mb3JFYWNoKChjbGllbnQpID0+IHtcclxuXHRcdGlmKGNsaWVudCkge1xyXG5cdFx0XHRwbGF5ZXJzLnB1c2goe1xyXG5cdFx0XHRcdGlkOiAgIGNsaWVudC5pZCxcclxuXHRcdFx0XHRuYW1lOiBjbGllbnQubmFtZSxcclxuXHRcdFx0fSk7XHJcblx0XHR9ICBcdFx0XHJcblx0fSk7XHRcclxuXHRyZXR1cm4gcGxheWVycztcclxufVxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuSG9zdC5wcm90b3R5cGUuY3JlYXRlUm9vbSA9IGZ1bmN0aW9uKCkge1x0XHJcblx0aWYodGhpcy5wbGF5aW5nIHx8IHRoaXMuYWN0aXZlKSByZXR1cm47XHJcblx0XHJcblx0Ly/QtNC+0LHQsNCy0LjQvCDRgdC10LHRjyDQsiDRgdC/0LjRgdC+0Log0LrQu9C40LXQvdGC0L7Qslx0XHJcblx0dGhpcy5hZGRTZWxmQ2xpZW50KCk7XHJcblx0Ly90aGlzLmdhbWUuc2V0SG9zdCh0cnVlKTtcclxuXHR0aGlzLnN0YXJ0TG9vcCgpO1xyXG59XHJcblxyXG5Ib3N0LnByb3RvdHlwZS5sZWF2ZVJvb20gPSBmdW5jdGlvbigpIHtcdFx0XHJcblx0dGhpcy5yZW1vdmVBbGxDbGllbnRzKCk7XHJcblx0dGhpcy5hY3RpdmUgPSBmYWxzZTtcclxuXHR0aGlzLmZyZWVXb3JrZXIoKTtcclxufVxyXG5cclxuSG9zdC5wcm90b3R5cGUubGVhdmVHYW1lID0gZnVuY3Rpb24oKSB7XHRcclxuXHRpZighdGhpcy5wbGF5aW5nKSByZXR1cm47XHJcblx0XHJcblx0dGhpcy5hY3RpdmUgPSBmYWxzZTtcclxuXHR0aGlzLnBsYXlpbmcgPSBmYWxzZTtcclxuXHRcclxuXHQvL3RoaXMuZ2FtZS5zZXRIb3N0KGZhbHNlKTtcdFxyXG5cdHRoaXMuYnJvYWRjYXN0UGFja2V0KHRoaXMucGFja2V0TWFuYWdlci5zSG9zdExlYXZlUGFja2V0KHRoaXMuc2VsZi5pZCkpO1xyXG5cdHRoaXMuZ2FtZS5mcmVlKCk7XHJcblx0dGhpcy5yZW1vdmVBbGxDbGllbnRzKCk7XHJcblx0dGhpcy5mcmVlV29ya2VyKCk7XHJcblx0dGhpcy5zZWxmLmxlYXZlR2FtZSgpO1x0XHJcblx0XHJcblx0Ly/Rg9Cx0LjRgNCw0LXQvCDRgtCw0LnQvNC10YAg0L/RgNC40L3Rg9C00LjRgtC10LvRjNC90L7Qs9C+INGB0YLQsNGA0YLQsFxyXG5cdGNsZWFyVGltZW91dCh0aGlzLnN0YXJ0VGltZXJJZCk7XHJcbn1cclxuXHJcbkhvc3QucHJvdG90eXBlLnN0YXJ0R2FtZSA9IGZ1bmN0aW9uKCkge1x0XHRcclxuXHR2YXJcdHBsYXllcnMgPSB0aGlzLmdldFBsYXllcnMoKTtcclxuXHR0aGlzLmdhbWUuaW5pdCgpO1x0XHJcblx0dGhpcy5nYW1lLnN0YXJ0R2FtZShwbGF5ZXJzKTtcdFxyXG5cdHRoaXMuYnJvYWRjYXN0UGFja2V0KHRoaXMucGFja2V0TWFuYWdlci5zSG9zdFN0YXJ0UGFja2V0KHRoaXMuZ2FtZS5zcGF3blgsIHRoaXMuZ2FtZS5zcGF3blksIFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgcGxheWVycyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IHRoaXMuZ2FtZS53b3JsZC5zZWVkKSk7XHRcclxuXHR0aGlzLnJlYWR5Q2xpZW50cyA9IFtdO1xyXG5cdFxyXG5cdC8v0YHRgtCw0YDRgiDRh9C10YDQtdC3INCy0YDQtdC80Y8g0L3QtdC30LDQstC40YHQuNC80L4g0L7RgiDQs9C+0YLQvtCy0L3QvtGB0YLQuFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcclxuXHR0aGlzLnN0YXJ0VGltZXJJZCA9IHNldFRpbWVvdXQoKCk9PnsgXHJcblx0XHRpZighdGhpcy5wbGF5aW5nKSB7XHJcblx0XHRcdHRoaXMucGxheWluZyA9IHRydWU7IFxyXG5cdFx0XHRjb25zb2xlLmxvZyhcInRpbWVvdXQgZm9yY2VkIHN0YXJ0XCIpO1xyXG5cdFx0fVxyXG5cdH0sIENvbnN0LlRJTUVPVVRfR0FNRV9TVEFSVCk7XHJcbn1cclxuXHJcbkhvc3QucHJvdG90eXBlLmNsaWVudExlYXZlID0gZnVuY3Rpb24oaWQpIHtcclxuXHR0aGlzLnJlbW92ZUNsaWVudChpZCk7XHJcblx0dGhpcy5nYW1lLnJlbW92ZUVudGl0eShpZCk7XHRcclxuXHR0aGlzLmJyb2FkY2FzdFBhY2tldCh0aGlzLnBhY2tldE1hbmFnZXIuc0hvc3RMZWF2ZVBhY2tldChpZCkpO1xyXG59XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbkhvc3QucHJvdG90eXBlLnN0YXJ0TG9vcCA9IGZ1bmN0aW9uKCkge1xyXG5cdGlmKHdpbmRvdy5Xb3JrZXIpe1xyXG5cdFx0dGhpcy5hY3RpdmUgPSB0cnVlO1x0XHJcblx0XHRcclxuXHRcdGlmKCF0aGlzLndvcmtlcikge1x0XHRcdFx0XHJcbiAgICAgICAgXHR0aGlzLndvcmtlciA9IG5ldyBXb3JrZXIoKTsgXHJcblx0XHRcclxuICAgICAgICBcdHRoaXMud29ya2VyLm9ubWVzc2FnZSA9IChlKSA9PiB7XHJcblx0XHRcdFx0aWYodGhpcy5hY3RpdmUpIHtcclxuXHRcdFx0XHRcdHRoaXMucnVuKCk7XHJcblx0XHRcdFx0fSAgICAgICAgICAgICBcclxuICAgICAgICBcdH0gIFxyXG5cdFx0XHRcclxuXHRcdFx0dGhpcy53b3JrZXIub25lcnJvciA9IGZ1bmN0aW9uIChlKSB7XHJcbiBcdFx0XHRcdGNvbnNvbGUubG9nKGUubWVzc2FnZSwgZSk7XHJcbiBcdFx0XHR9XHJcblx0XHR9XHRcdFxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBhbGVydChcIllvdXIgYnJvd3NlciBkbyBub3Qgc3VwcG9ydCBXb3JrZXJcIik7XHJcbiAgICB9XHJcbn1cclxuSG9zdC5wcm90b3R5cGUuZnJlZVdvcmtlciA9IGZ1bmN0aW9uKCkge1xyXG5cdGlmKCF0aGlzLndvcmtlcikgcmV0dXJuO1xyXG5cdFx0XHRcdFxyXG5cdHRoaXMud29ya2VyLnRlcm1pbmF0ZSgpO1x0XHRcclxuICAgIHRoaXMud29ya2VyID0gbnVsbDsgXHRcclxufVxyXG5cclxuSG9zdC5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24oKSB7XHRcclxuXHRcclxuXHQvL2NvbnNvbGUubG9nKFwiaG9zdCB0aWNrOiBcIiwgRGF0ZS5ub3coKSAtIHRoaXMubGFzdFRpbWUpO1x0XHJcblx0ICAgXHJcbiAgICAvLzEu0YHQvtGB0YLQvtGP0L3QuNC1INC60LvQuNC10L3RgtCwINGF0L7RgdGC0LAgICBcclxuXHR0aGlzLnNlbGYucnVuKCk7XHJcblx0XHRcclxuXHQvLzIu0L7QsdGA0LDQsdC+0YLQsNGC0Ywg0LrQu9C40LXQvdGC0YHQutC40LUg0L/QsNC60LXRgtGLIFx0XHJcblx0dGhpcy5jbGllbnRzLmZvckVhY2goKGNsaWVudCkgPT4ge1xyXG5cdFx0aWYoY2xpZW50KSB7XHJcblx0XHRcdGNsaWVudC5wYWNrZXRCdWZmZXIuZm9yRWFjaCgocGFja2V0KSA9PiB7XHJcblx0XHRcdFx0aWYocGFja2V0KSB7XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0Ly9jb25zb2xlLmxvZyhwYWNrZXQpO1x0XHRcdFx0XHRcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRcdHN3aXRjaCh0aGlzLnBhY2tldE1hbmFnZXIuZ2V0UGFja2V0SUQocGFja2V0KSkge1xyXG5cdFx0XHRcdFx0XHRjYXNlIE1zZy5DbGllbnRSZWFkeTpcclxuXHRcdFx0XHRcdFx0XHRicmVhaztcdFxyXG5cdFx0XHRcdFx0XHRjYXNlIE1zZy5DbGllbnRBY3Rpb246XHJcblx0XHRcdFx0XHRcdFx0Ly/Qv9GA0L7QstC10YDQutCwINC90LAg0LPQvtGC0L7QstC90L7RgdGC0Ywg0LrQu9C40LXQvdGC0L7QsiDQv9C+0YHQu9C1INGB0YLQsNGA0YLQsFx0XHJcblx0XHRcdFx0XHRcdFx0aWYoIXRoaXMucGxheWluZykge1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5yZWFkeUNsaWVudHNbY2xpZW50LmlkXSA9IHRydWU7XHJcblx0XHRcdFx0XHRcdFx0XHRpZih0aGlzLnJlYWR5Q2xpZW50cy5sZW5ndGggPT0gdGhpcy5jbGllbnRzQ291bnQpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5wbGF5aW5nID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXCJob3N0IHN0YXJ0XCIpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH1cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHR0aGlzLnBhY2tldE1hbmFnZXIuZENsaWVudEFjdGlvblBhY2tldChjbGllbnQuaWQpO1x0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0YnJlYWs7XHRcdFxyXG5cdFx0XHRcdFx0XHRjYXNlIE1zZy5DaGF0Olx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHR2YXIgbWVzc2FnZSA9IHRoaXMucGFja2V0TWFuYWdlci5kQ2hhdFBhY2tldChwYWNrZXQpO1x0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0bWVzc2FnZSA9IG1lc3NhZ2VbMF07XHJcblx0XHRcdFx0XHRcdFx0Ly/QvtCx0YDQtdC30LDQtdC8INGB0L7QvtCx0YnQtdC90LjQtVxyXG5cdFx0XHRcdFx0XHRcdG1lc3NhZ2UubXNnID0gbWVzc2FnZS5tc2cuc3Vic3RyaW5nKDAsIENvbnN0LkNIQVRfTUVTU0FHRV9NQVgpO1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuY2hhdFBhY2tldHMucHVzaChtZXNzYWdlKTtcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1x0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRcdFx0XHRicmVhaztcdFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHRcdFx0XHJcblx0XHRcdGNsaWVudC5wYWNrZXRCdWZmZXIgPSBbXTtcclxuXHRcdFx0Y2xpZW50Lmxhc3RQYWNrZXRJRCA9IDA7XHRcdFx0XHRcdFx0XHRcclxuXHRcdH1cdFx0XHJcblx0fSk7ICBcclxuXHRcclxuXHQvL9GA0LDRgdGB0YvQu9C60LAg0YfQsNGCINGB0L7QvtCx0YnQtdC90LjQuVxyXG5cdGlmKHRoaXMuY2hhdFBhY2tldHMubGVuZ3RoID4gMCkge1xyXG5cdFx0dGhpcy5icm9hZGNhc3RQYWNrZXQodGhpcy5wYWNrZXRNYW5hZ2VyLnNDaGF0UGFja2V0KHRoaXMuY2hhdFBhY2tldHMpKTtcdFxyXG5cdFx0dGhpcy5jaGF0UGFja2V0cyA9IFtdO1x0XHJcblx0fVx0XHJcblx0XHJcblx0aWYodGhpcy5wbGF5aW5nKSB7XHJcblx0XHQvLzMu0L7QsdC90L7QstC40YLRjCDRgdC+0YHRgtC+0Y/QvdC40LUg0LzQuNGA0LAg0Lgg0LjQs9GA0L7QutC+0LJcdFx0XHJcblx0XHR0aGlzLmdhbWUucnVuVGljaygpOyAgICBcdFxyXG5cdFxyXG5cdFx0Ly80LtGB0YTQvtGA0LzQuNGA0L7QstCw0YLRjCDQtNC70Y8g0LrQsNC20LTQvtCz0L4g0LrQu9C40LXQvdGC0LAg0L/QsNC60LXRgiDQuCDQvtGC0L7RgdC70LDRgtGMXHRcclxuXHRcdHRoaXMuYnJvYWRjYXN0UGFja2V0KHRoaXMucGFja2V0TWFuYWdlci5zSG9zdFN0YXRlUGFja2V0KCkpO1xyXG5cdH1cdFxyXG5cdFx0XHJcblx0Ly90aGlzLmxhc3RUaW1lID0gRGF0ZS5ub3coKTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvc3Q7IiwiaW1wb3J0IHsgQ29uc3QsIE1zZywgRW50aXR5U3RhdGUsIEl0ZW1TdGF0ZSB9IGZyb20gJ2NvbnN0LmpzJ1xyXG5cclxuXHJcbnZhciBQYWNrZXRNYW5hZ2VyID0gZnVuY3Rpb24ocGFyZW50LCBnYW1lKSB7XHJcblx0dGhpcy5wYXJlbnQgPSBwYXJlbnQ7XHJcblx0dGhpcy5nYW1lID0gZ2FtZTtcclxuXHR0aGlzLmVudGl0eWxpc3QgPSBnYW1lLmVudGl0eWxpc3Q7XHRcdFxyXG5cdHRoaXMuaXRlbWxpc3QgPSBnYW1lLml0ZW1saXN0O1x0XHJcblx0XHJcblx0dGhpcy52aWV3ID0gbnVsbDtcclxuXHR0aGlzLmluZGV4ID0gMDtcdFxyXG59XHRcclxuXHJcblBhY2tldE1hbmFnZXIucHJvdG90eXBlLmdldFBhY2tldElEID0gZnVuY3Rpb24ocGFja2V0KSB7XHRcdFxyXG5cdHRoaXMudmlldyA9IG5ldyBEYXRhVmlldyhwYWNrZXQpO1x0XHJcblx0cmV0dXJuIHRoaXMudmlldy5nZXRVaW50OCgwKTtcclxufVxyXG4vL1NFVFxyXG5QYWNrZXRNYW5hZ2VyLnByb3RvdHlwZS5zZXRVaW50OCA9IGZ1bmN0aW9uKHZpZXcsIGRhdGEpIHtcdFxyXG5cdHZpZXcuc2V0VWludDgodGhpcy5pbmRleCwgZGF0YSk7XHJcblx0dGhpcy5pbmRleCsrO1xyXG59XHJcblBhY2tldE1hbmFnZXIucHJvdG90eXBlLnNldEludDMyID0gZnVuY3Rpb24odmlldywgZGF0YSkge1x0XHJcblx0dmlldy5zZXRJbnQzMih0aGlzLmluZGV4LCBkYXRhKTtcclxuXHR0aGlzLmluZGV4Kz00O1xyXG59XHJcblBhY2tldE1hbmFnZXIucHJvdG90eXBlLnNldEZsb2F0MzIgPSBmdW5jdGlvbih2aWV3LCBkYXRhKSB7XHJcblx0dmlldy5zZXRGbG9hdDMyKHRoaXMuaW5kZXgsIGRhdGEpO1xyXG5cdHRoaXMuaW5kZXgrPTQ7XHJcbn1cclxuLy9HRVRcclxuUGFja2V0TWFuYWdlci5wcm90b3R5cGUuZ2V0VWludDggPSBmdW5jdGlvbigpIHtcdFxyXG5cdHRoaXMuaW5kZXgrKztcclxuXHRyZXR1cm4gdGhpcy52aWV3LmdldFVpbnQ4KHRoaXMuaW5kZXggLSAxKTtcdFxyXG59XHJcblBhY2tldE1hbmFnZXIucHJvdG90eXBlLmdldEludDMyID0gZnVuY3Rpb24oKSB7XHRcclxuXHR0aGlzLmluZGV4Kz00O1xyXG5cdHJldHVybiB0aGlzLnZpZXcuZ2V0SW50MzIodGhpcy5pbmRleCAtIDQpO1xyXG5cdFxyXG59XHJcblBhY2tldE1hbmFnZXIucHJvdG90eXBlLmdldEZsb2F0MzIgPSBmdW5jdGlvbigpIHtcclxuXHR0aGlzLmluZGV4Kz00O1xyXG5cdHJldHVybiB0aGlzLnZpZXcuZ2V0RmxvYXQzMih0aGlzLmluZGV4IC0gNCk7XHJcbn1cclxuXHJcbi8vLS0tLS0tLSBIT1NUIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4vL9C/0LDQutC10YIg0YHRgtCw0YDRgiDQuNCz0YDRi1xyXG4vL3BhY2tldElEIHBsYXllckNvdW50IHNwYXduWCBzcGF3blkgPHBsYXllcklEIHN0ckxlbiBbbmFtZV0sIC4uLiBwbGF5ZXJJRCBzdHJMZW4gW25hbWVdPlxyXG5QYWNrZXRNYW5hZ2VyLnByb3RvdHlwZS5zSG9zdFN0YXJ0UGFja2V0ID0gZnVuY3Rpb24oc3Bhd25YLCBzcGF3blksIHBsYXllcnMsIHNlZWQpIHtcdFxyXG5cdGlmKCFwbGF5ZXJzKSByZXR1cm4gbnVsbDtcclxuXHRcclxuXHR2YXIgcGxheWVyc0NvdW50ID0gcGxheWVycy5sZW5ndGg7XHRcclxuXHR2YXIgYnVmZmVyID0gbmV3IEFycmF5QnVmZmVyKDQgKyA0ICsgcGxheWVyc0NvdW50ICogKDIgKyAoQ29uc3QuUExBWUVSX05BTUVfQ0hBUlMrMSkgKiBDb25zdC5CWVRFU19GT1JfQ0hBUikpO1xyXG5cdHZhciB2aWV3ID0gbmV3IERhdGFWaWV3KGJ1ZmZlcik7XHRcclxuXHR2YXIgYnVmMTYgPSBuZXcgVWludDE2QXJyYXkoYnVmZmVyKTtcclxuXHR2YXIgaW5kZXggPSAwLFxyXG5cdFx0b2Zmc2V0ID0gMDtcclxuXHRcclxuXHQvL9C40LQg0L/QsNC60LXRgtCwXHJcblx0dmlldy5zZXRVaW50OCgwLCBNc2cuU3RhcnQpO1xyXG5cdHZpZXcuc2V0VWludDgoMSwgcGxheWVyc0NvdW50KTtcclxuXHQvL9GC0L7Rh9C60LAg0YHQv9Cw0LLQvdCwXHJcblx0dmlldy5zZXRVaW50OCgyLCBzcGF3blgpOyAgXHJcblx0dmlldy5zZXRVaW50OCgzLCBzcGF3blkpOyBcdFxyXG5cdC8v0YHQuNC0INC80LjRgNCwXHJcblx0dmlldy5zZXRJbnQzMig0LCBzZWVkKTtcclxuXHRcclxuXHRwbGF5ZXJzLmZvckVhY2goKHBsYXllcikgPT4ge1xyXG5cdFx0dmlldy5zZXRVaW50OChpbmRleCArIDEwLCBwbGF5ZXIuaWQpO1x0XHRcdFxyXG5cdFx0dmlldy5zZXRVaW50OChpbmRleCArIDExLCBwbGF5ZXIubmFtZS5sZW5ndGgpO1xyXG5cdFx0Ly/QsdCw0LnRgtC+0LLRi9C5INC80LDRgdGB0LjQsiDQuNC80LXQvdC4XHJcblx0XHRidWYxNi5zZXQodGhpcy5zdHJpbmdUb0FycmF5QnVmZmVyKHBsYXllci5uYW1lKSwgb2Zmc2V0ICsgNik7IC8vMTYqMiDQsdCw0LnRglxyXG5cdFx0b2Zmc2V0ICs9IDE3O1xyXG5cdFx0aW5kZXggKz0gMzQ7XHJcblx0fSk7XHJcblx0XHJcblx0cmV0dXJuIG5ldyBVaW50OEFycmF5KGJ1ZmZlcik7XHJcbn1cclxuUGFja2V0TWFuYWdlci5wcm90b3R5cGUuZEhvc3RTdGFydFBhY2tldCA9IGZ1bmN0aW9uKHBhY2tldCkge1x0XHRcclxuXHR2YXIgYnVmMTYgPSBuZXcgVWludDE2QXJyYXkocGFja2V0KTsgXHQgICBcclxuICBcdHZhciBwbGF5ZXJzID0gW107XHJcbiAgXHR2YXIgaW5kZXggPSAwLFxyXG4gIFx0XHRvZmZzZXQgPSAwLFxyXG5cdFx0bGVuID0gMDsgIFxyXG5cdC8v0YLQvtGH0LrQsCDRgdC/0LDQstC90LBcclxuXHR0aGlzLmdhbWUuc3Bhd25YID0gdGhpcy52aWV3LmdldFVpbnQ4KDIpO1xyXG5cdHRoaXMuZ2FtZS5zcGF3blkgPSB0aGlzLnZpZXcuZ2V0VWludDgoMyk7XHJcblx0Ly/RgdC40LQg0LzQuNGA0LBcclxuXHR0aGlzLmdhbWUud29ybGQuc2V0U2VlZCh0aGlzLnZpZXcuZ2V0SW50MzIoNCkpO1xyXG5cdFxyXG5cdHZhciBwbGF5ZXJzQ291bnQgPSB0aGlzLnZpZXcuZ2V0VWludDgoMSk7XHRcclxuXHR3aGlsZShwbGF5ZXJzQ291bnQtLSkgeyAgXHJcblx0XHQvL9C00LvQuNC90L3QsCDQuNC80LXQvdC4INCyINGB0LjQvNCy0L7Qu9Cw0YVcclxuICBcdFx0bGVuID0gdGhpcy52aWV3LmdldFVpbnQ4KGluZGV4ICsgMTEpO1x0XHRcclxuICBcdFx0cGxheWVycy5wdXNoKHtcclxuICAgIFx0XHRpZDogdGhpcy52aWV3LmdldFVpbnQ4KGluZGV4ICsgMTApLFxyXG4gICAgICBcdFx0bmFtZTogdGhpcy5hcnJheUJ1ZmZlclRvU3RyaW5nKGJ1ZjE2LnNsaWNlKG9mZnNldCArIDYsIGxlbiArIG9mZnNldCArIDYpKVxyXG4gICAgXHR9KTtcclxuICAgIFx0b2Zmc2V0ICs9IDE3O1xyXG5cdFx0aW5kZXggKz0gMzQ7XHJcbiAgXHR9XHRcclxuXHRcclxuICBcdHJldHVybiBwbGF5ZXJzO1xyXG59XHJcblxyXG4vL9C/0LDQutC10YIg0LjQs9GA0L7QuiDQstGL0YjQtdC7XHJcbi8vcGFja2V0SUQgcGxheWVySURcclxuUGFja2V0TWFuYWdlci5wcm90b3R5cGUuc0hvc3RMZWF2ZVBhY2tldCA9IGZ1bmN0aW9uKHBsYXllcklEKSB7XHJcblx0dmFyIGJ1ZjggPSBuZXcgVWludDhBcnJheSgyKTtcclxuXHRidWY4WzBdID0gTXNnLkxlYXZlO1xyXG5cdGJ1ZjhbMV0gPSBwbGF5ZXJJRDtcclxuXHRyZXR1cm4gYnVmODtcclxufVxyXG5QYWNrZXRNYW5hZ2VyLnByb3RvdHlwZS5kSG9zdExlYXZlUGFja2V0ID0gZnVuY3Rpb24ocGFja2V0KSB7XHRcclxuXHRyZXR1cm4gdGhpcy52aWV3LmdldFVpbnQ4KDEpO1xyXG59XHJcblxyXG4vL9C/0LDQutC10YIg0YHQvtGB0YLQvtGP0L3QuNC5INC+0LHRitC10LrRgtC+0LJcclxuLy9wYWNrZXRJRCBvYmplY3RDb3VudCA8b2JqVHlwZSBvYmpJRCAuLi4gPiwgLi4uIDxvYmpUeXBlIG9iaklEIC4uLiA+XHJcbi8qUGFja2V0TWFuYWdlci5wcm90b3R5cGUuc0hvc3RTdGF0ZVBhY2tldCA9IGZ1bmN0aW9uKCkge1x0XHJcblx0dmFyIGVudGl0eUNvdW50ID0gdGhpcy5lbnRpdHlsaXN0LnNpemUoKSxcclxuXHRcdHVwZGF0ZUNvdW50ID0gdGhpcy5nYW1lLnVwZGF0ZWxpc3QubGVuZ3RoLFxyXG5cdFx0cHJvamVjdGlsZUNvdW50ID0gdGhpcy5wcm9qZWN0aWxlbGlzdC51cGRhdGVkU2l6ZSgpLFxyXG5cdFx0aXRlbUNvdW50ID0gdGhpcy5pdGVtbGlzdC51cGRhdGVkU2l6ZSgpO1x0XHJcblx0XHRcclxuXHR2YXIgYnVmZmVyID0gbmV3IEFycmF5QnVmZmVyKDUgKyBlbnRpdHlDb3VudCAqIDE3ICsgdXBkYXRlQ291bnQgKiAyKTtcclxuXHR2YXIgdmlldyA9IG5ldyBEYXRhVmlldyhidWZmZXIpO1x0XHJcblx0XHJcblx0dmFyIHRpbGVPYmosIGluZGV4ID0gMDtcclxuXHRcclxuXHR2aWV3LnNldFVpbnQ4KDAsIE1zZy5Ib3N0U3RhdGUpO1xyXG5cdHZpZXcuc2V0VWludDgoMSwgZW50aXR5Q291bnQpO1x0XHJcblx0dmlldy5zZXRVaW50OCgyLCB1cGRhdGVDb3VudCk7XHRcclxuXHRcdFxyXG5cdHRoaXMuZW50aXR5bGlzdC5wb29sKCkuZm9yRWFjaCgoZW50aXR5KSA9PiB7XHJcblx0XHRpZihlbnRpdHkpIHtcdFx0XHRcdFx0XHJcblx0XHRcdHZpZXcuc2V0SW50MzIoaW5kZXggKyA1LCBlbnRpdHkuaWQgKyAxKTsgLy9bMC4uLl0gLT4gWzEuLi5dXHJcblx0XHRcdHZpZXcuc2V0VWludDgoaW5kZXggKyA5LCBlbnRpdHkuc3RhdGUpO1xyXG5cdFx0XHR2aWV3LnNldFVpbnQ4KGluZGV4ICsgMTAsIGVudGl0eS50eXBlKTtcdFxyXG5cdFx0XHR2aWV3LnNldFVpbnQ4KGluZGV4ICsgMTEsIGVudGl0eS50aW1lU3RhbXApOyAvL3RpbWVTdGFtcFx0XHRcdFx0XHJcblx0XHRcdGlmKGVudGl0eS50eXBlID4gOTkpIHsgLy9wcm9qZWN0aWxlXHJcblx0XHRcdFx0dmlldy5zZXRVaW50OChpbmRleCArIDEyLCBlbnRpdHkuX2R4ICsgMTAwKTsgLy8gcHJvamVjdGlsZSBkeFxyXG5cdFx0XHRcdHZpZXcuc2V0VWludDgoaW5kZXggKyAxMywgZW50aXR5Ll9keSArIDEwMCk7IC8vIHByb2plY3RpbGUgZHlcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR2aWV3LnNldFVpbnQ4KGluZGV4ICsgMTIsIGVudGl0eS5kaXIgKyAxKTsgLy9bLTEsMV0gLT4gWzAsMl1cdFxyXG5cdFx0XHRcdHZpZXcuc2V0VWludDgoaW5kZXggKyAxMywgZW50aXR5LmlzQXR0YWNrZWQoKSk7XHQvL2RhbWFnZVx0XHJcblx0XHRcdH1cdFx0XHRcdFx0XHJcblx0XHRcdHZpZXcuc2V0RmxvYXQzMihpbmRleCArIDE0LCBlbnRpdHkueCk7IFxyXG5cdFx0XHR2aWV3LnNldEZsb2F0MzIoaW5kZXggKyAxOCwgZW50aXR5LnkpOyBcdFx0XHRcdFxyXG5cdFx0fVx0XHRcclxuXHRcdGluZGV4ICs9IDE3O1xyXG5cdH0pO1x0XHJcblx0aW5kZXggLT0gMTc7XHJcblx0XHRcclxuXHR3aGlsZSh1cGRhdGVDb3VudC0tKSB7XHJcblx0XHR0aWxlT2JqID0gdGhpcy5nYW1lLnVwZGF0ZWxpc3RbdXBkYXRlQ291bnRdO1xyXG5cdFx0dmlldy5zZXRVaW50OChpbmRleCArIDIyLCB0aWxlT2JqWzBdKTtcclxuXHRcdHZpZXcuc2V0VWludDgoaW5kZXggKyAyMywgdGlsZU9ialsxXSk7XHJcblx0XHRcclxuXHRcdGluZGV4ICs9IDI7XHJcblx0fVxyXG5cdFxyXG5cdFxyXG5cdHRoaXMuZ2FtZS51cGRhdGVsaXN0ID0gW107XHJcblx0dGhpcy5lbnRpdHlsaXN0LnJlbW92ZUFsbE1hcmtlZCgpO1xyXG5cdFxyXG5cdHJldHVybiBuZXcgVWludDhBcnJheShidWZmZXIpO1xyXG59Ki9cclxuLypQYWNrZXRNYW5hZ2VyLnByb3RvdHlwZS5kSG9zdFN0YXRlUGFja2V0ID0gZnVuY3Rpb24ocGFja2V0KSB7ICBcclxuICBcdHZhciBpbmRleCA9IDA7XHRcdFxyXG5cdHZhciBlbnRpdHlDb3VudCA9IHRoaXMudmlldy5nZXRVaW50OCgxKSxcclxuXHRcdHVwZGF0ZUNvdW50ID0gdGhpcy52aWV3LmdldFVpbnQ4KDIpO1xyXG5cdHZhciBpZCwgZW50aXR5LCBcclxuXHRcdHN0YXRlLCB0eXBlO1xyXG5cdFx0XHJcblx0dGhpcy5pbmRleCA9IDU7XHJcblx0XHJcblx0d2hpbGUoZW50aXR5Q291bnQtLSkge1x0XHRcdFxyXG5cdFx0aWQgPSB0aGlzLnZpZXcuZ2V0SW50MzIoaW5kZXggKyA1KSAtIDE7IC8vWzEuLi5dIC0+IFswLi4uXVxyXG5cdFx0ZW50aXR5ID0gdGhpcy5lbnRpdHlsaXN0LmdldE9iamVjdEJ5SWQoaWQpO1x0XHRcclxuXHRcdFxyXG5cdFx0c3RhdGUgPSB0aGlzLnZpZXcuZ2V0VWludDgoaW5kZXggKyA5KTsgXHJcblx0XHRzd2l0Y2goc3RhdGUpIHtcclxuXHRcdFx0Y2FzZSBFbnRpdHlTdGF0ZS5DcmVhdGU6XHJcblx0XHRcdFx0aWYoIWVudGl0eSkge1xyXG5cdFx0XHRcdFx0dHlwZSA9IHRoaXMudmlldy5nZXRVaW50OChpbmRleCArIDEwKTtcclxuXHRcdFx0XHRcdGVudGl0eSA9IHRoaXMuZ2FtZS5jcmVhdGVFbnRpdHlCeVR5cGUodHlwZSwgaWQpO1xyXG5cdFx0XHRcdFx0aWYoZW50aXR5KSB7XHRcclxuXHRcdFx0XHRcdFx0aWYodHlwZSA+IDk5KSB7IC8vcHJvamVjdGlsZVxyXG5cdFx0XHRcdFx0XHRcdGVudGl0eS5pbml0KHRoaXMudmlldy5nZXRVaW50OChpbmRleCArIDEyKSAtIDEwMCwgIC8vIHByb2plY3RpbGUgZHhcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnZpZXcuZ2V0VWludDgoaW5kZXggKyAxMykgLSAxMDApOyAvLyBwcm9qZWN0aWxlIGR5XHRcclxuXHRcdFx0XHRcdFx0fVx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRlbnRpdHkuc2V0UG9zaXRpb24odGhpcy52aWV3LmdldEZsb2F0MzIoaW5kZXggKyAxNCksICAvL3hcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgICB0aGlzLnZpZXcuZ2V0RmxvYXQzMihpbmRleCArIDE4KSk7IC8veVxyXG5cdFx0XHRcdFx0XHR0aGlzLmdhbWUuYWRkRW50aXR5KGVudGl0eSwgaWQpO1xyXG5cdFx0XHRcdFx0fVx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRzdGF0ZSA9IEVudGl0eVN0YXRlLkRlZmF1bHQ7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHJcblx0XHRcdGNhc2UgRW50aXR5U3RhdGUuUmVtb3ZlOlx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdGlmKGVudGl0eSlcdFx0XHRcdFxyXG5cdFx0XHRcdFx0ZW50aXR5Lmh1cnQodGhpcy52aWV3LmdldFVpbnQ4KGluZGV4ICsgMTMpKTtcdFxyXG5cdFx0XHRcdHRoaXMuZ2FtZS5yZW1vdmVFbnRpdHkoaWQpO1xyXG5cdFx0XHRcclxuXHRcdFx0XHRpbmRleCArPSAxNzsgICAgXHJcblx0XHRcdFx0Y29udGludWU7XHRcdFx0XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdGlmKGVudGl0eSkge1xyXG5cdFx0XHRlbnRpdHkuc3RhdGUgPSBzdGF0ZTtcclxuXHRcdFx0ZW50aXR5LnR5cGUgPSAgdHlwZTtcclxuXHRcdFx0ZW50aXR5LmRpciBcdD0gdGhpcy52aWV3LmdldFVpbnQ4KGluZGV4ICsgMTIpIC0gMTsgIC8vZGlyIFswLDJdIC0+IFstMSwxXVxyXG5cdFx0XHRlbnRpdHkuaHVydCh0aGlzLnZpZXcuZ2V0VWludDgoaW5kZXggKyAxMykpO1x0ICAgLy9hdHRhY2tlZFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0ZW50aXR5LnNldEhvc3RTdGF0ZSh0aGlzLnZpZXcuZ2V0VWludDgoaW5kZXggKyAxMSksICAgICAvL3RpbWVTdGFtcFxyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy52aWV3LmdldEZsb2F0MzIoaW5kZXggKyAxNCksICAvL3hcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMudmlldy5nZXRGbG9hdDMyKGluZGV4ICsgMTgpKTsgLy95XHJcblx0XHR9IFx0XHRcdFx0XHRcclxuXHRcdGluZGV4ICs9IDE3OyAgICBcdFx0XHJcblx0fSBcdFxyXG5cdGluZGV4IC09IDE3O1xyXG5cdFxyXG5cdHdoaWxlKHVwZGF0ZUNvdW50LS0pIHtcdFxyXG5cdFx0dGhpcy5nYW1lLmFjdGl2YXRlT2JqKG51bGwsIFxyXG5cdFx0XHRcdFx0XHRcdCAgdGhpcy52aWV3LmdldFVpbnQ4KGluZGV4ICsgMjIpLCAvL2lcclxuXHRcdFx0XHRcdFx0XHQgIHRoaXMudmlldy5nZXRVaW50OChpbmRleCArIDIzKSwgLy9qXHRcclxuXHRcdFx0XHRcdFx0XHQgIGZhbHNlKTtcdC8vaG9zdFxyXG5cdFx0aW5kZXggKz0gMjtcclxuXHR9XHJcbn0qL1xyXG5cclxuXHJcblBhY2tldE1hbmFnZXIucHJvdG90eXBlLnNIb3N0U3RhdGVQYWNrZXQgPSBmdW5jdGlvbigpIHtcdFxyXG5cdGxldCBlbnRpdHlDb3VudCA9IHRoaXMuZW50aXR5bGlzdC5zaXplKCksXHJcblx0XHR1cGRhdGVDb3VudCA9IHRoaXMuZ2FtZS51cGRhdGVsaXN0Lmxlbmd0aCxcdFx0XHJcblx0XHRpdGVtQ291bnQgPSB0aGlzLml0ZW1saXN0LnVwZGF0ZWRTaXplKCk7XHRcclxuXHRcdFxyXG5cdGxldCBidWZmZXIgPSBuZXcgQXJyYXlCdWZmZXIoNSArIGVudGl0eUNvdW50ICogMTcgKyB1cGRhdGVDb3VudCAqIDIgKyBpdGVtQ291bnQgKiA4KTtcclxuXHRsZXQgdmlldyA9IG5ldyBEYXRhVmlldyhidWZmZXIpO1xyXG5cdGxldCB0aWxlT2JqO1xyXG5cdFxyXG5cdHZpZXcuc2V0VWludDgoMCwgTXNnLkhvc3RTdGF0ZSk7XHJcblx0dmlldy5zZXRVaW50OCgxLCBlbnRpdHlDb3VudCk7XHRcclxuXHR2aWV3LnNldFVpbnQ4KDIsIHVwZGF0ZUNvdW50KTtcdFx0XHJcblx0dmlldy5zZXRVaW50OCgzLCBpdGVtQ291bnQpO1x0XHJcblx0XHJcblx0dGhpcy5pbmRleCA9IDQ7XHJcblx0XHRcclxuXHR0aGlzLmVudGl0eWxpc3QucG9vbCgpLmZvckVhY2goKGVudGl0eSkgPT4ge1x0XHRcdFx0XHRcdFx0XHRcclxuXHRcdHRoaXMuc2V0SW50MzIodmlldywgZW50aXR5LmlkICsgMSk7IC8vWzAuLi5dIC0+IFsxLi4uXVxyXG5cdFx0dGhpcy5zZXRVaW50OCh2aWV3LCBlbnRpdHkuc3RhdGUpO1xyXG5cdFx0dGhpcy5zZXRVaW50OCh2aWV3LCBlbnRpdHkudHlwZSk7XHRcclxuXHRcdHRoaXMuc2V0RmxvYXQzMih2aWV3LCBlbnRpdHkueCk7IFxyXG5cdFx0dGhpcy5zZXRGbG9hdDMyKHZpZXcsIGVudGl0eS55KTtcclxuXHRcdGlmKGVudGl0eS50eXBlID4gOTkpIHsgLy9wcm9qZWN0aWxlXHJcblx0XHRcdHRoaXMuc2V0VWludDgodmlldywgZW50aXR5Ll9keCArIDEwMCk7IFx0XHJcblx0XHRcdHRoaXMuc2V0VWludDgodmlldywgZW50aXR5Ll9keSArIDEwMCk7IFxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5zZXRVaW50OCh2aWV3LCBlbnRpdHkuaXNIdXJ0ZWQoKSk7XHQvL2RhbWFnZVxyXG5cdFx0XHR0aGlzLnNldFVpbnQ4KHZpZXcsIGVudGl0eS5kaXIgKyAxKTsgLy9bLTEsMV0gLT4gWzAsMl1cdFxyXG5cdFx0fVx0XHJcblx0XHR0aGlzLnNldFVpbnQ4KHZpZXcsIGVudGl0eS50aW1lU3RhbXApO1xyXG5cdH0pO1x0XHRcclxuXHRcdFxyXG5cdHdoaWxlKHVwZGF0ZUNvdW50LS0pIHtcclxuXHRcdHRpbGVPYmogPSB0aGlzLmdhbWUudXBkYXRlbGlzdFt1cGRhdGVDb3VudF07XHJcblx0XHR0aGlzLnNldFVpbnQ4KHZpZXcsIHRpbGVPYmpbMF0pO1xyXG5cdFx0dGhpcy5zZXRVaW50OCh2aWV3LCB0aWxlT2JqWzFdKTtcdFx0XHRcclxuXHR9XHRcclxuXHRcclxuXHR0aGlzLml0ZW1saXN0LmZvckVhY2hVcGRhdGVkKChpdGVtKSA9PiB7XHJcblx0XHR0aGlzLnNldEludDMyKHZpZXcsIGl0ZW0uaWQgKyAxKTsgLy9bMC4uLl0gLT4gWzEuLi5dXHJcblx0XHR0aGlzLnNldFVpbnQ4KHZpZXcsIGl0ZW0uc3RhdGUpO1xyXG5cdFx0dGhpcy5zZXRVaW50OCh2aWV3LCBpdGVtLnR5cGUpO1x0XHRcclxuXHRcdHRoaXMuc2V0VWludDgodmlldywgaXRlbS5pKTtcclxuXHRcdHRoaXMuc2V0VWludDgodmlldywgaXRlbS5qKTtcclxuXHRcdHRoaXMuc2V0SW50MzIodmlldywgaXRlbS5vd25lciArIDEpOyAvL1swLi4uXSAtPiBbMS4uLl1cclxuXHR9KTtcclxuXHRcclxuXHR0aGlzLmdhbWUudXBkYXRlbGlzdCA9IFtdO1xyXG5cdHRoaXMuZW50aXR5bGlzdC5yZW1vdmVBbGxNYXJrZWQoKTtcclxuXHR0aGlzLml0ZW1saXN0LnJlbW92ZUFsbE1hcmtlZCgpO1x0XHJcblx0XHJcblx0cmV0dXJuIG5ldyBVaW50OEFycmF5KGJ1ZmZlcik7XHJcbn1cclxuUGFja2V0TWFuYWdlci5wcm90b3R5cGUuZEhvc3RTdGF0ZVBhY2tldCA9IGZ1bmN0aW9uKHBhY2tldCkgeyAgICBcdFx0XHJcblx0bGV0IGVudGl0eUNvdW50ID0gdGhpcy52aWV3LmdldFVpbnQ4KDEpLFxyXG5cdFx0dXBkYXRlQ291bnQgPSB0aGlzLnZpZXcuZ2V0VWludDgoMiksXHRcdFxyXG5cdFx0aXRlbUNvdW50ID0gdGhpcy52aWV3LmdldFVpbnQ4KDMpO1xyXG5cdGxldCBpZCwgb2JqZWN0LFx0c3RhdGUsIHR5cGUsIHgsIHksIGFyZzEsIGFyZzI7XHJcblx0XHRcclxuXHR0aGlzLmluZGV4ID0gNDtcclxuXHRcclxuXHR3aGlsZShlbnRpdHlDb3VudC0tKSB7XHRcdFx0XHJcblx0XHRpZCA9IHRoaXMuZ2V0SW50MzIoKSAtIDE7IC8vWzEuLi5dIC0+IFswLi4uXVx0XHRcdFxyXG5cdFx0c3RhdGUgPSB0aGlzLmdldFVpbnQ4KCk7IFxyXG5cdFx0dHlwZSA9IHRoaXMuZ2V0VWludDgoKTtcclxuXHRcdHggPSB0aGlzLmdldEZsb2F0MzIoKTtcclxuXHRcdHkgPSB0aGlzLmdldEZsb2F0MzIoKTtcdFxyXG5cdFx0YXJnMSA9IHRoaXMuZ2V0VWludDgoKTsgLy9kYW1hZ2Ugb3IgZHhcclxuXHRcdGFyZzIgPSB0aGlzLmdldFVpbnQ4KCk7IC8vZGlyIG9yIGR5XHJcblx0XHRcclxuXHRcdG9iamVjdCA9IHRoaXMuZW50aXR5bGlzdC5nZXRPYmplY3RCeUlkKGlkKTtcdFxyXG5cdFx0XHRcdFxyXG5cdFx0c3dpdGNoKHN0YXRlKSB7XHJcblx0XHRcdGNhc2UgRW50aXR5U3RhdGUuQ3JlYXRlOlxyXG5cdFx0XHRcdGlmKCFvYmplY3QpIHtcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRvYmplY3QgPSB0aGlzLmdhbWUuY3JlYXRlT2JqZWN0QnlUeXBlKHR5cGUsIGlkKTtcclxuXHRcdFx0XHRcdGlmKG9iamVjdCkge1xyXG5cdFx0XHRcdFx0XHRpZih0eXBlID4gOTkpIHsgLy9wcm9qZWN0aWxlXHJcblx0XHRcdFx0XHRcdFx0b2JqZWN0LmluaXQoYXJnMSAtIDEwMCwgIC8vZHhcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRhcmcyIC0gMTAwKTsgLy9keVx0XHJcblx0XHRcdFx0XHRcdH1cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRvYmplY3Quc2V0UG9zaXRpb24oeCwgeSk7IFxyXG5cdFx0XHRcdFx0XHR0aGlzLmdhbWUuYWRkRW50aXR5KG9iamVjdCwgaWQpO1xyXG5cdFx0XHRcdFx0fVx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRzdGF0ZSA9IEVudGl0eVN0YXRlLkRlZmF1bHQ7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHJcblx0XHRcdGNhc2UgRW50aXR5U3RhdGUuUmVtb3ZlOlx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdGlmKG9iamVjdClcdFx0XHRcdFxyXG5cdFx0XHRcdFx0b2JqZWN0Lmh1cnQoYXJnMSk7XHRcclxuXHRcdFx0XHR0aGlzLmdhbWUucmVtb3ZlRW50aXR5KGlkKTtcclxuXHRcdFx0XHR0aGlzLmluZGV4Kys7XHJcblx0XHRcdFx0Y29udGludWU7XHRcdFx0XHJcblx0XHR9XHRcdFxyXG5cdFx0aWYob2JqZWN0KSB7XHJcblx0XHRcdG9iamVjdC5zdGF0ZSA9IHN0YXRlO1xyXG5cdFx0XHRvYmplY3QudHlwZSA9ICB0eXBlO1xyXG5cdFx0XHRvYmplY3QuaHVydChhcmcxKTtcdCAgICAvL2RhbWFnZVx0XHRcclxuXHRcdFx0b2JqZWN0LmRpciA9IGFyZzIgLSAxOyAgLy9kaXIgWzAsMl0gLT4gWy0xLDFdXHRcdFx0XHJcblx0XHRcdG9iamVjdC5zZXRIb3N0U3RhdGUodGhpcy5nZXRVaW50OCgpLCAvL3RpbWVTdGFtcFxyXG5cdFx0XHRcdFx0XHRcdFx0eCwgIFxyXG5cdFx0XHRcdFx0XHRcdFx0eSk7IFx0XHRcdFxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5pbmRleCsrO1xyXG5cdFx0fVx0XHQgICBcdFx0XHJcblx0fSBcdFxyXG5cdFxyXG5cdFxyXG5cdHdoaWxlKHVwZGF0ZUNvdW50LS0pIHtcdFxyXG5cdFx0dGhpcy5nYW1lLmFjdGl2YXRlT2JqKG51bGwsIFxyXG5cdFx0XHRcdFx0XHRcdCAgdGhpcy5nZXRVaW50OCgpLCAvL2lcclxuXHRcdFx0XHRcdFx0XHQgIHRoaXMuZ2V0VWludDgoKSwgLy9qXHRcclxuXHRcdFx0XHRcdFx0XHQgIGZhbHNlKTtcdC8vaG9zdFx0XHRcclxuXHR9XHJcblx0XHRcclxuXHR3aGlsZShpdGVtQ291bnQtLSkge1x0XHJcblx0XHRpZCA9IHRoaXMuZ2V0SW50MzIoKSAtIDE7IC8vWzEuLi5dIC0+IFswLi4uXVxyXG5cdFx0c3RhdGUgPSB0aGlzLmdldFVpbnQ4KCk7XHJcblx0XHR0eXBlID0gdGhpcy5nZXRVaW50OCgpO1xyXG5cdFx0eCA9IHRoaXMuZ2V0VWludDgoKTsgLy9pXHJcblx0XHR5ID0gdGhpcy5nZXRVaW50OCgpOyAvL2pcclxuXHRcdGFyZzEgPSB0aGlzLmdldEludDMyKCkgLSAxOyAvL1sxLi4uXSAtPiBbMC4uLl1cclxuXHRcdFxyXG5cdFx0b2JqZWN0ID0gdGhpcy5pdGVtbGlzdC5nZXRPYmplY3RCeUlkKGlkKTtcdFxyXG5cdFx0XHJcblx0XHRzd2l0Y2goc3RhdGUpIHtcclxuXHRcdFx0LypjYXNlIEl0ZW1TdGF0ZS5DcmVhdGU6XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgSXRlbVN0YXRlLlJlbW92ZTpcclxuXHRcdFx0XHRicmVhazsqL1xyXG5cdFx0XHRjYXNlIEl0ZW1TdGF0ZS5Ecm9wOlxyXG5cdFx0XHRcdHRoaXMuZ2FtZS5kcm9wSXRlbSh4LCB5LCBvYmplY3QsIGlkKTtcclxuXHRcdFx0XHR0aGlzLmdhbWUubmVlZFJlYnVpbGQgPSB0cnVlO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIEl0ZW1TdGF0ZS5QaWNrdXA6XHJcblx0XHRcdFx0dGhpcy5nYW1lLnBpY2t1cEl0ZW0ob2JqZWN0LCBhcmcxKTtcclxuXHRcdFx0XHR0aGlzLmdhbWUubmVlZFJlYnVpbGQgPSB0cnVlO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIEl0ZW1TdGF0ZS5FcXVpcDpcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSBJdGVtU3RhdGUuVW5lcXVpcDpcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdH1cdFx0XHJcblx0fVxyXG59XHJcblxyXG5QYWNrZXRNYW5hZ2VyLnByb3RvdHlwZS5zSG9zdFBvbmdQYWNrZXQgPSBmdW5jdGlvbigpIHtcdFxyXG59XHJcblBhY2tldE1hbmFnZXIucHJvdG90eXBlLmRIb3N0UG9uZ1BhY2tldCA9IGZ1bmN0aW9uKHBhY2tldCkge1x0XHRcclxufVxyXG5cclxuLy8tLS0tLS0tIENMSUVOVCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbi8v0L/QsNC60LXRgiDQs9C+0YLQvtCy0L3QvtGB0YLQuCDQutC70LjQtdC90YLQsCDQvdCw0YfQsNGC0Ywg0LjQs9GA0YNcclxuUGFja2V0TWFuYWdlci5wcm90b3R5cGUuc0NsaWVudFJlYWR5UGFja2V0ID0gZnVuY3Rpb24oaWQpIHtcclxuXHR2YXIgYnVmOCA9IG5ldyBVaW50OEFycmF5KDgpO1x0XHJcblx0YnVmOFswXSA9IE1zZy5DbGllbnRSZWFkeTtcclxuXHRidWY4WzFdID0gaWQ7XHJcblx0cmV0dXJuIGJ1Zjg7XHJcbn1cclxuUGFja2V0TWFuYWdlci5wcm90b3R5cGUuZENsaWVudFJlYWR5UGFja2V0ID0gZnVuY3Rpb24ocGFja2V0KSB7XHRcclxuXHRyZXR1cm4gdGhpcy52aWV3LmdldFVpbnQ4KDEpOyAvL2lkXHRcclxufVxyXG5cclxuLy/Qv9Cw0LrQtdGCINC00LXQudGB0YLQstC40Lkg0LrQu9C40LXQvdGC0LBcclxuUGFja2V0TWFuYWdlci5wcm90b3R5cGUuc0NsaWVudEFjdGlvblBhY2tldCA9IGZ1bmN0aW9uKHBsYXllcikge1x0XHJcblx0aWYocGxheWVyKSB7XHJcblx0XHR2YXIgYnVmOCA9IG5ldyBVaW50OEFycmF5KDEyKTtcclxuXHRcdGJ1ZjhbMF0gPSBNc2cuQ2xpZW50QWN0aW9uO1xyXG5cdFx0YnVmOFsxXSA9IHBsYXllci50aW1lU3RhbXA7XHJcblx0XHRidWY4WzJdID0gcGxheWVyLnN0YXRlO1xyXG5cdFx0YnVmOFszXSA9IHBsYXllci5keCArIDE7ICAvL1stMSwwLDFdIC0+IFswLDEsMl1cclxuXHRcdGJ1ZjhbNF0gPSBwbGF5ZXIuZHkgKyAxOyAgLy9bLTEsMCwxXSAtPiBbMCwxLDJdXHJcblx0XHRidWY4WzVdID0gcGxheWVyLmRpciArIDE7IC8vWy0xLDFdIC0+IFswLDJdIFxyXG5cdFx0aWYodGhpcy5nYW1lLmF0dGFjaykge1xyXG5cdFx0XHRidWY4WzZdID0gdGhpcy5nYW1lLmF0dGFjazsgLy9tb2IgaWRcclxuXHRcdFx0dGhpcy5nYW1lLmF0dGFjayA9IG51bGw7XHJcblx0XHR9XHRcdFx0XHRcdFx0XHJcblx0XHRpZih0aGlzLmdhbWUuYWN0aXZhdGUpIHsgLy/QstC30LDQuNC80L7QtNC10LnRgdCy0LjQtSDRgSDQvtC60YDRg9C20LXQvdC40LXQvFxyXG5cdFx0XHRidWY4WzddID0gdGhpcy5nYW1lLmFjdGl2YXRlWzBdO1xyXG5cdFx0XHRidWY4WzhdID0gdGhpcy5nYW1lLmFjdGl2YXRlWzFdO1xyXG5cdFx0XHR0aGlzLmdhbWUuYWN0aXZhdGUgPSBudWxsO1xyXG5cdFx0fVx0XHJcblx0XHRpZih0aGlzLmdhbWUuY2FzdCkgeyAvL9C60LDRgdGCINC30LDQutC70LjQvdCw0L3QuNGPXHJcblx0XHRcdHZhciBjYXN0ID0gdGhpcy5nYW1lLmNhc3Q7XHJcblx0XHRcdGJ1ZjhbOV0gPSBjYXN0LnR5cGU7XHJcblx0XHRcdGJ1ZjhbMTBdID0gY2FzdC5keCArIDEwMDsgXHJcblx0XHRcdGJ1ZjhbMTFdID0gY2FzdC5keSArIDEwMDtcclxuXHRcdFx0dGhpcy5nYW1lLmNhc3QgPSBudWxsO1xyXG5cdFx0fVx0XHRcclxuXHRcdHJldHVybiBidWY4O1xyXG5cdH1cclxuXHRyZXR1cm4gbnVsbDtcclxufVxyXG5QYWNrZXRNYW5hZ2VyLnByb3RvdHlwZS5kQ2xpZW50QWN0aW9uUGFja2V0ID0gZnVuY3Rpb24ocGxheWVySUQpIHtcdFxyXG5cdHZhciBwbGF5ZXIgPSB0aGlzLmVudGl0eWxpc3QuZ2V0T2JqZWN0QnlJZChwbGF5ZXJJRCk7XHJcblx0XHJcblx0Ly9UT0RPINCy0LDQu9C40LTQsNGG0LjRjyDQtNCw0L3QvdGL0YUg0L7RgiDQuNCz0YDQvtC60LBcclxuXHRcclxuXHRpZihwbGF5ZXIpIHtcclxuXHRcdC8vcGxheWVyLm5lZWRTdGF0ZVVwZGF0ZSA9IHRydWU7XHJcblx0XHRwbGF5ZXIudGltZVN0YW1wID0gdGhpcy52aWV3LmdldFVpbnQ4KDEpO1xyXG5cdFx0cGxheWVyLnN0YXRlID1cdCAgIHRoaXMudmlldy5nZXRVaW50OCgyKSxcdFxyXG5cdFx0cGxheWVyLnNldE1vdmVtZW50KHRoaXMudmlldy5nZXRVaW50OCgzKSAtIDEsICAvL2R4ICBbMCwxLDJdIC0+IFstMSwwLDFdIFxyXG5cdFx0XHRcdFx0XHQgICB0aGlzLnZpZXcuZ2V0VWludDgoNCkgLSAxKTsgLy9keSAgWzAsMSwyXSAtPiBbLTEsMCwxXSBcclxuXHRcdHBsYXllci5kaXIgPSBcdCAgIHRoaXMudmlldy5nZXRVaW50OCg1KSAtIDE7ICAvL2RpciBbMCwyXSAtPiBbLTEsMV0gXHJcblx0XHRcclxuXHRcdGlmKHRoaXMudmlldy5nZXRVaW50OCg2KSkge1xyXG5cdFx0XHRwbGF5ZXIuYXR0YWNrTW9iID0gdGhpcy52aWV3LmdldFVpbnQ4KDYpOyAgICAgIC8vbW9iIGlkXHJcblx0XHR9XHRcdFxyXG5cdFx0aWYodGhpcy52aWV3LmdldFVpbnQ4KDcpKSB7IC8v0LLQt9Cw0LjQvNC+0LTQtdC50YHQstC40LUg0YEg0L7QutGA0YPQttC10L3QuNC10LxcclxuXHRcdFx0cGxheWVyLmFjdGl2YXRlID0gW3RoaXMudmlldy5nZXRVaW50OCg3KSxcclxuXHRcdFx0XHRcdFx0ICAgICAgIHRoaXMudmlldy5nZXRVaW50OCg4KV07XHJcblx0XHR9XHRcdFxyXG5cdFx0aWYodGhpcy52aWV3LmdldFVpbnQ4KDkpKSB7IC8v0LrQsNGB0YIg0LfQsNC60LvQuNC90LDQvdC40Y9cclxuXHRcdFx0dmFyIGNhc3QgPSB7fTtcdFx0XHRcclxuXHRcdFx0Y2FzdC50eXBlID0gdGhpcy52aWV3LmdldFVpbnQ4KDkpO1xyXG5cdFx0XHRjYXN0LmR4ID0gdGhpcy52aWV3LmdldFVpbnQ4KDEwKSAtIDEwMDsgXHJcblx0XHRcdGNhc3QuZHkgPSB0aGlzLnZpZXcuZ2V0VWludDgoMTEpIC0gMTAwO1x0XHJcblx0XHRcdHBsYXllci5zcGVsbGNhc3QgPSBjYXN0O1x0XHJcblx0XHR9XHRcclxuXHR9XHJcbn1cclxuXHJcblxyXG5QYWNrZXRNYW5hZ2VyLnByb3RvdHlwZS5zQ2xpZW50UGluZ1BhY2tldCA9IGZ1bmN0aW9uKCkge1x0XHJcbn1cclxuUGFja2V0TWFuYWdlci5wcm90b3R5cGUuZENsaWVudFBpbmdQYWNrZXQgPSBmdW5jdGlvbihwYWNrZXQpIHtcdFx0XHJcbn1cclxuXHJcbi8vLS0tLS0tLS0gQ0hBVCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4vL3BhY2tldElEIG1zZ0NvdW50IDxwbGF5ZXJJRCBidWZmU2l6ZSBbYnVmZmVyXT4sIC4uLiA8cGxheWVySUQgYnVmZlNpemUgW2J1ZmZlcl0+XHJcblBhY2tldE1hbmFnZXIucHJvdG90eXBlLnNDaGF0UGFja2V0ID0gZnVuY3Rpb24obWVzc2FnZXMpIHtcclxuXHR2YXIgYnVmZmVyID0gbmV3IEFycmF5QnVmZmVyKDIgKyBtZXNzYWdlcy5sZW5ndGggKiAoMiArIChDb25zdC5DSEFUX01FU1NBR0VfTUFYKzEpICogQ29uc3QuQllURVNfRk9SX0NIQVIpKTtcclxuXHR2YXIgdmlldyA9IG5ldyBEYXRhVmlldyhidWZmZXIpO1xyXG5cdHZhciBidWYxNiA9IG5ldyBVaW50MTZBcnJheShidWZmZXIpO1xyXG5cdFxyXG5cdHZhciBpbmRleCA9IDAsXHJcblx0XHRvZmZzZXQgPSAwO1xyXG5cdFxyXG5cdHZpZXcuc2V0VWludDgoMCwgTXNnLkNoYXQpO1xyXG5cdHZpZXcuc2V0VWludDgoMSwgbWVzc2FnZXMubGVuZ3RoKTtcclxuXHRcclxuXHRtZXNzYWdlcy5mb3JFYWNoKChtc2cpID0+IHtcdFx0XHRcdFxyXG5cdFx0dmlldy5zZXRVaW50OChpbmRleCsyLCBtc2cuaWQpOyAvL9C40LQg0LjQs9GA0L7QutCwXHJcblx0XHR2aWV3LnNldFVpbnQ4KGluZGV4KzMsIG1zZy5sZW4pOyAvL9GA0LDQt9C80LXRgCDRgdC+0L7QsdGJ0LXQvdC40Y9cclxuXHRcdGJ1ZjE2LnNldCh0aGlzLnN0cmluZ1RvQXJyYXlCdWZmZXIobXNnLm1zZyksIG9mZnNldCszKTsgLy/RgdC+0L7QsdGJ0LXQvdC40LVcclxuXHRcdFxyXG5cdFx0aW5kZXggKz0gMiArIDIgKiBDb25zdC5DSEFUX01FU1NBR0VfTUFYO1xyXG5cdFx0b2Zmc2V0ICs9IDEgKyBDb25zdC5DSEFUX01FU1NBR0VfTUFYO1xyXG5cdH0pO1x0XHJcblx0cmV0dXJuIG5ldyBVaW50OEFycmF5KGJ1ZmZlcik7XHJcbn1cclxuUGFja2V0TWFuYWdlci5wcm90b3R5cGUuZENoYXRQYWNrZXQgPSBmdW5jdGlvbihwYWNrZXQpIHtcclxuXHR2YXIgYnVmMTYgPSBuZXcgVWludDE2QXJyYXkocGFja2V0KTsgXHQgXHJcblx0dmFyIG1lc3NhZ2VzID0gW107XHJcblx0dmFyIGNvdW50ID0gdGhpcy52aWV3LmdldFVpbnQ4KDEpLFxyXG5cdFx0bGVuID0gMCxcclxuXHRcdGluZGV4ID0gMCxcclxuXHRcdG9mZnNldCA9IDA7XHJcblx0XHJcblx0d2hpbGUoY291bnQtLSkge1xyXG5cdFx0bGVuID0gdGhpcy52aWV3LmdldFVpbnQ4KGluZGV4KzMpO1xyXG5cdFx0XHJcblx0XHRtZXNzYWdlcy5wdXNoKHtcdFx0XHRcclxuXHRcdFx0aWQ6IHRoaXMudmlldy5nZXRVaW50OChpbmRleCsyKSxcclxuXHRcdFx0bGVuOiBsZW4sXHRcdFx0XHJcblx0XHRcdG1zZzogdGhpcy5hcnJheUJ1ZmZlclRvU3RyaW5nKGJ1ZjE2LnNsaWNlKG9mZnNldCArIDMsIGxlbiArIG9mZnNldCArIDMpKVxyXG5cdFx0fSlcclxuXHRcdFx0XHRcclxuXHRcdGluZGV4ICs9IDIgKyAyICogQ29uc3QuQ0hBVF9NRVNTQUdFX01BWDtcclxuXHRcdG9mZnNldCArPSAxICsgQ29uc3QuQ0hBVF9NRVNTQUdFX01BWDtcclxuXHR9XHRcclxuXHRyZXR1cm4gbWVzc2FnZXM7XHJcbn1cclxuXHJcbi8vLS0tLS0tLSBTVFJJTkcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5QYWNrZXRNYW5hZ2VyLnByb3RvdHlwZS5hcnJheUJ1ZmZlclRvU3RyaW5nID0gZnVuY3Rpb24oYnVmKSB7XHJcbiBcdHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsIGJ1Zik7XHJcbn1cclxuUGFja2V0TWFuYWdlci5wcm90b3R5cGUuc3RyaW5nVG9BcnJheUJ1ZmZlciA9IGZ1bmN0aW9uKHN0cikgeyBcdFxyXG4gIFx0dmFyIGJ1ZlZpZXcgPSBuZXcgVWludDE2QXJyYXkoc3RyLmxlbmd0aCk7IC8vIDIgYnl0ZXMgZm9yIGVhY2ggY2hhclxyXG4gIFx0Zm9yICh2YXIgaT0wLCBzdHJMZW4gPSBzdHIubGVuZ3RoOyBpIDwgc3RyTGVuOyBpKyspIHtcclxuICAgIFx0YnVmVmlld1tpXSA9IHN0ci5jaGFyQ29kZUF0KGkpO1xyXG4gIFx0fVxyXG4gIFx0cmV0dXJuIGJ1ZlZpZXc7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWNrZXRNYW5hZ2VyIiwiaW1wb3J0IHsgQ29uc3QgfSBmcm9tICdjb25zdC5qcydcclxuXHJcblxyXG52YXIgQ2FtZXJhID0gZnVuY3Rpb24oZ2FtZSkge1xyXG5cdHRoaXMuZ2FtZSA9IGdhbWU7XHRcclxuXHR0aGlzLmF0dGFjaGVkID0gbnVsbDtcclxuXHRcclxuXHR0aGlzLnBvc1ggPSAwO1xyXG5cdHRoaXMucG9zWSA9IDA7XHRcclxuXHR0aGlzLm9mZnNldFggPSAwO1xyXG5cdHRoaXMub2Zmc2V0WSA9IDA7XHJcblx0dGhpcy53aWR0aDIgPSAwO1xyXG5cdHRoaXMuaGVpZ2h0MiA9IDA7XHJcbn1cclxuXHJcbkNhbWVyYS5wcm90b3R5cGUuYXR0YWNoID0gZnVuY3Rpb24ocGxheWVyKSB7XHJcblx0dGhpcy5kZXR0YWNoKCk7XHJcblx0XHJcblx0cGxheWVyLmF0dGFjaGVkID0gdHJ1ZTtcclxuXHR0aGlzLmF0dGFjaGVkID0gcGxheWVyO1xyXG59XHJcbkNhbWVyYS5wcm90b3R5cGUuZGV0dGFjaCA9IGZ1bmN0aW9uKCkge1xyXG5cdGlmKHRoaXMuYXR0YWNoZWQpIHtcclxuXHRcdHRoaXMuYXR0YWNoZWQuYXR0YWNoZWQgPSBmYWxzZTtcclxuXHR9XHRcclxuXHR0aGlzLmF0dGFjaGVkID0gbnVsbDtcclxufVxyXG5cclxuQ2FtZXJhLnByb3RvdHlwZS5yZXNpemUgPSBmdW5jdGlvbih3aWR0aCwgaGVpZ2h0KSB7XHJcblx0dGhpcy53aWR0aDIgPSBNYXRoLmZsb29yKHdpZHRoICogMC41KTtcclxuXHR0aGlzLmhlaWdodDIgPSBNYXRoLmZsb29yKGhlaWdodCAqIDAuNSk7XHJcbn1cclxuXHJcbkNhbWVyYS5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24oY29udGFpbmVyKSB7XHJcblx0aWYoIXRoaXMuYXR0YWNoZWQpIHJldHVybjtcclxuXHRcclxuXHR0aGlzLnBvc1ggPSB0aGlzLmF0dGFjaGVkLng7XHJcblx0dGhpcy5wb3NZID0gdGhpcy5hdHRhY2hlZC55O1xyXG5cdFxyXG5cdC8v0LrQvtGB0YLRi9C70Ywg0L7RgiDQv9C+0LvQvtGBINC80LXQttC00YMg0YLQtdC60YHRgtGD0YDQsNC80LhcclxuXHR0aGlzLnBvc1ggPSBNYXRoLnJvdW5kKCh0aGlzLnBvc1ggKyBOdW1iZXIuRVBTSUxPTikgKiAxMCkgKiAwLjE7XHJcblx0dGhpcy5wb3NZID0gTWF0aC5yb3VuZCgodGhpcy5wb3NZICsgTnVtYmVyLkVQU0lMT04pICogMTApICogMC4xO1xyXG5cdFxyXG5cdC8v0YbQtdC90YLRgNC40YDRg9C10Lwg0LrQsNC80LXRgNGDINC90LAg0LjQs9GA0L7QutC1XHJcblx0dGhpcy5vZmZzZXRYID0gLUNvbnN0LlNUQUdFX1NDQUxFICogdGhpcy5wb3NYICsgdGhpcy53aWR0aDI7XHJcblx0dGhpcy5vZmZzZXRZID0gLUNvbnN0LlNUQUdFX1NDQUxFICogdGhpcy5wb3NZICsgdGhpcy5oZWlnaHQyO1x0XHJcblx0Y29udGFpbmVyLnggPSB0aGlzLm9mZnNldFg7XHRcclxuXHRjb250YWluZXIueSA9IHRoaXMub2Zmc2V0WTtcclxufVxyXG5cclxuQ2FtZXJhLnByb3RvdHlwZS5nZXRQb3NYID0gZnVuY3Rpb24oKSB7XHRcclxuXHRyZXR1cm4gdGhpcy5wb3NYO1xyXG59XHJcbkNhbWVyYS5wcm90b3R5cGUuZ2V0UG9zWSA9IGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiB0aGlzLnBvc1k7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYW1lcmEiLCJpbXBvcnQgKiBhcyBQSVhJIGZyb20gJ3BpeGkuanMnXHJcblxyXG5pbXBvcnQgeyBDb25zdCB9IGZyb20gJ2NvbnN0LmpzJ1xyXG5cclxuXHJcbnZhciBDRUxMX1NJWkUgPSA0ODtcclxuXHJcbnZhciBJbnZlbnRvcnlXaW5kb3cgPSBmdW5jdGlvbiAoKSB7XHRcdFxyXG5cdHRoaXMuY29udGFpbmVyID0gbmV3IFBJWEkuQ29udGFpbmVyKCk7XHRcdFxyXG5cdHRoaXMuY2VsbFcgPSAxMDtcclxuXHRcclxuXHQvL3RoaXMuQ0VMTF9TSVpFID0gNDg7XHJcblx0dGhpcy5PRkZTRVRfVE9QID0gMjA7XHJcbn1cclxuSW52ZW50b3J5V2luZG93LnByb3RvdHlwZS5idWlsZCA9IGZ1bmN0aW9uKGNlbGxXLCBjZWxsSCkge1x0XHRcclxuXHR0aGlzLmNlbGxXID0gY2VsbFc7XHJcblxyXG5cdGNvbnN0IGdyYXBoaWNzID0gbmV3IFBJWEkuR3JhcGhpY3MoKTtcclxuXHQvL3JlY3RhbmdsZVxyXG5cdGdyYXBoaWNzLmJlZ2luRmlsbCgweDJBMkMzNyk7XHJcblx0Z3JhcGhpY3MuZHJhd1JlY3QoMCwgMCwgY2VsbFcqQ0VMTF9TSVpFLCBjZWxsSCpDRUxMX1NJWkUpO1xyXG5cdGdyYXBoaWNzLmVuZEZpbGwoKTtcclxuXHJcblx0Z3JhcGhpY3MubGluZVN0eWxlKDEsIDB4OTY5Njk2LCAxKTtcdFxyXG5cdC8vdmVydGljYWxcclxuXHRmb3IodmFyIGkgPSAwOyBpIDw9IGNlbGxXOyBpKyspIHtcclxuXHRcdGdyYXBoaWNzLm1vdmVUbyhpICogQ0VMTF9TSVpFLCAwKTtcclxuXHRcdGdyYXBoaWNzLmxpbmVUbyhpICogQ0VMTF9TSVpFLCBjZWxsSCAqIENFTExfU0laRSk7XHJcblx0fVx0XHJcblx0Ly9ob3Jpem9udGFsXHJcblx0Zm9yKHZhciBqID0gMDsgaiA8PSBjZWxsSDsgaisrKSB7XHJcblx0XHRncmFwaGljcy5tb3ZlVG8oMCwgaiAqIENFTExfU0laRSk7XHJcblx0XHRncmFwaGljcy5saW5lVG8oY2VsbFcgKiBDRUxMX1NJWkUsIGogKiBDRUxMX1NJWkUpO1xyXG5cdH1cclxuXHRcclxuXHRncmFwaGljcy5jbG9zZVBhdGgoKTtcclxuXHRncmFwaGljcy5lbmRGaWxsKCk7XHJcblx0XHJcblx0dGhpcy5jb250YWluZXIuYWRkQ2hpbGQoZ3JhcGhpY3MpO1x0XHJcblx0dGhpcy5jb250YWluZXIudmlzaWJsZSA9IGZhbHNlO1xyXG59XHRcclxuSW52ZW50b3J5V2luZG93LnByb3RvdHlwZS5yZXNpemUgPSBmdW5jdGlvbih3aWR0aCwgaGVpZ2h0KSB7XHJcblx0dGhpcy5jb250YWluZXIueCA9IE1hdGguZmxvb3Iod2lkdGggKiAwLjUgLSAodGhpcy5jZWxsVyAqIENFTExfU0laRSkgKiAwLjUpO1xyXG5cdHRoaXMuY29udGFpbmVyLnkgPSB0aGlzLk9GRlNFVF9UT1A7XHJcbn1cclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxudmFyIEhvdEJhciA9IGZ1bmN0aW9uIChzdHlsZSkge1xyXG5cdHRoaXMuc3R5bGUgPSBzdHlsZTtcclxuXHR0aGlzLmNvbnRhaW5lciA9IG5ldyBQSVhJLkNvbnRhaW5lcigpO1x0XHJcblx0dGhpcy5ncmFwaGljcyA9IG5ldyBQSVhJLkdyYXBoaWNzKCk7XHJcblx0dGhpcy5zZWxlY3RlZCA9IDA7XHJcblx0dGhpcy5CRVRXRUVOX0NFTExTID0gNTtcclxuXHR0aGlzLk9GRlNFVF9CT1RUT00gPSAyMDtcclxufVxyXG5Ib3RCYXIucHJvdG90eXBlLmJ1aWxkID0gZnVuY3Rpb24oKSB7XHJcblx0Y29uc3QgZ3JhcGhpY3MgPSBuZXcgUElYSS5HcmFwaGljcygpO1xyXG5cdGdyYXBoaWNzLmxpbmVTdHlsZSgxLCAweDk2OTY5Nik7XHJcblx0Z3JhcGhpY3MuYmVnaW5GaWxsKDB4MkEyQzM3LCAwLjIpOyAvL2FscGhhXHRcclxuXHRcdFx0XHJcblx0dmFyIGksIHgsIHRleHQsIGluZGV4O1x0XHJcblx0Zm9yKGkgPSAwOyBpIDwgMTA7IGkrKykge1x0XHJcblx0XHR4ID0gaSAqIChDRUxMX1NJWkUgKyB0aGlzLkJFVFdFRU5fQ0VMTFMpO1xyXG5cdFx0XHJcblx0XHRncmFwaGljcy5kcmF3UmVjdCh4LCAwLCBDRUxMX1NJWkUsIENFTExfU0laRSk7XHJcblx0XHRcclxuXHRcdC8v0L/QvtC00L/QuNGB0Ywg0LrQu9C10YLQvtC6XHJcblx0XHRpbmRleCA9IGkgKyAxO1xyXG5cdFx0aWYoaW5kZXggPT0gMTApXHRpbmRleCA9IDA7XHJcblx0XHRpbmRleCA9IGluZGV4LnRvU3RyaW5nKCk7XHJcblx0XHRcclxuXHRcdHRleHQgPSBuZXcgUElYSS5UZXh0KGluZGV4LCB0aGlzLnN0eWxlKTtcclxuXHRcdHRleHQueCA9IHg7XHJcblx0XHR0ZXh0LnkgPSAtMjtcdFx0XHJcblx0XHR0aGlzLmNvbnRhaW5lci5hZGRDaGlsZCh0ZXh0KTtcclxuXHR9XHJcblx0Z3JhcGhpY3MuZW5kRmlsbCgpO1x0XHRcclxuXHRcclxuXHR0aGlzLmNvbnRhaW5lci5hZGRDaGlsZChncmFwaGljcyk7XHJcblx0dGhpcy5jb250YWluZXIuYWRkQ2hpbGQodGhpcy5ncmFwaGljcyk7IFxyXG59XHJcbkhvdEJhci5wcm90b3R5cGUuc2VsZWN0ID0gZnVuY3Rpb24oaW5kZXgpIHtcdFxyXG5cdGluZGV4LS07XHJcblx0aWYoaW5kZXggPCAwKSBpbmRleCA9IDk7XHJcblx0Ly9pZihpbmRleCA+IDkpIGluZGV4ID0gMDtcclxuXHR0aGlzLnNlbGVjdGVkID0gaW5kZXg7XHJcblx0XHJcblx0dGhpcy5ncmFwaGljcy5jbGVhcigpO1xyXG5cdHRoaXMuZ3JhcGhpY3MubGluZVN0eWxlKDEsIDB4QThBMTA1KTtcclxuXHR0aGlzLmdyYXBoaWNzLmRyYXdSZWN0KGluZGV4ICogKENFTExfU0laRSArIHRoaXMuQkVUV0VFTl9DRUxMUyksIDAsIENFTExfU0laRSwgQ0VMTF9TSVpFKTtcclxufVxyXG5Ib3RCYXIucHJvdG90eXBlLnJlc2l6ZSA9IGZ1bmN0aW9uKHdpZHRoLCBoZWlnaHQpIHtcclxuXHR0aGlzLmNvbnRhaW5lci54ID0gTWF0aC5mbG9vcih3aWR0aCAqIDAuNSAtICgxMCAqIChDRUxMX1NJWkUgKyB0aGlzLkJFVFdFRU5fQ0VMTFMpICogMC41ICkpO1xyXG5cdHRoaXMuY29udGFpbmVyLnkgPSBNYXRoLmZsb29yKGhlaWdodCAtIENFTExfU0laRSAtIHRoaXMuT0ZGU0VUX0JPVFRPTSk7XHRcclxufVxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG52YXIgU3RhdGVCYXIgPSBmdW5jdGlvbiAoc3R5bGUsIGNvbG9yYmcsIGNvbG9yLCByaWdodCkge1x0XHJcblx0dGhpcy5zdHlsZSA9IHN0eWxlO1xyXG5cdHRoaXMuY29sb3JiZyA9IGNvbG9yYmc7XHJcblx0dGhpcy5jb2xvciA9IGNvbG9yO1xyXG5cdHRoaXMucmlnaHQgPSByaWdodDtcclxuXHR0aGlzLmdyYXBoaWNzID0gbmV3IFBJWEkuR3JhcGhpY3MoKTtcclxuXHR0aGlzLkxFTkdUSCA9IDE1NDtcclxuXHR0aGlzLkhFSUdIVCA9IDIwO1x0XHRcclxuXHR0aGlzLk9GRlNFVF9CT1RUT00gPSA0NTtcclxuXHRcclxuXHR0aGlzLmxhc3RwYXIgPSBudWxsO1xyXG5cdHRoaXMubGFzdG1heCA9IG51bGw7XHJcbn1cclxuU3RhdGVCYXIucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKGN1cnIsIG1heCkge1xyXG5cdGlmKHRoaXMubGFzdHBhciA9PSBjdXJyICYmIHRoaXMubGFzdG1heCA9PSBtYXgpIHJldHVybjtcclxuXHR0aGlzLmxhc3RwYXIgPSBjdXJyO1xyXG5cdHRoaXMubGFzdG1heCA9IG1heDtcclxuXHRcclxuXHR0aGlzLmdyYXBoaWNzLmNsZWFyKCk7XHJcblx0dGhpcy5ncmFwaGljcy5saW5lU3R5bGUoMSwgMHg5Njk2OTYpO1xyXG5cdHRoaXMuZ3JhcGhpY3MuYmVnaW5GaWxsKHRoaXMuY29sb3JiZyk7IFx0XHRcclxuXHR0aGlzLmdyYXBoaWNzLmRyYXdSZWN0KDAsIDAsIHRoaXMuTEVOR1RILCB0aGlzLkhFSUdIVCk7XHJcblx0dGhpcy5ncmFwaGljcy5lbmRGaWxsKCk7XHJcblx0Ly90aGlzLmdyYXBoaWNzLmNsb3NlUGF0aCgpO1xyXG5cdFx0XHJcblx0dGhpcy5ncmFwaGljcy5saW5lU3R5bGUoMCwgMHg5Njk2OTYpO1xyXG5cdHRoaXMuZ3JhcGhpY3MuYmVnaW5GaWxsKHRoaXMuY29sb3IpOyBcdFxyXG5cdHZhciBsZW4gPSBNYXRoLmZsb29yKHRoaXMuTEVOR1RIICogY3VyciAvIG1heCkgLSAxO1xyXG5cdGlmKHRoaXMucmlnaHQpIHtcclxuXHRcdHRoaXMuZ3JhcGhpY3MuZHJhd1JlY3QodGhpcy5MRU5HVEggLSBsZW4gLSAxLCAxLCBsZW4sIHRoaXMuSEVJR0hULTEpO1xyXG5cdH0gZWxzZSB7XHRcdFx0XHJcblx0XHR0aGlzLmdyYXBoaWNzLmRyYXdSZWN0KDAsIDEsIGxlbiwgdGhpcy5IRUlHSFQtMSk7XHJcblx0fVx0XHRcclxuXHR0aGlzLmdyYXBoaWNzLmVuZEZpbGwoKTtcclxufVxyXG5TdGF0ZUJhci5wcm90b3R5cGUucmVzaXplID0gZnVuY3Rpb24od2lkdGgsIGhlaWdodCkge1xyXG5cdHZhciBiYyA9IDUsIC8vQkVUV0VFTl9DRUxMU1xyXG5cdFx0bGVuID0gMTAgKiAoQ0VMTF9TSVpFICsgYmMpICogMC41O1xyXG5cdGlmKHRoaXMucmlnaHQpIHtcclxuXHRcdHRoaXMuZ3JhcGhpY3MueCA9IE1hdGguZmxvb3Iod2lkdGggKiAwLjUgKyBsZW4gLSB0aGlzLkxFTkdUSCAtIGJjKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0dGhpcy5ncmFwaGljcy54ID0gTWF0aC5mbG9vcih3aWR0aCAqIDAuNSAtIGxlbik7XHJcblx0fVx0XHJcblx0dGhpcy5ncmFwaGljcy55ID0gTWF0aC5mbG9vcihoZWlnaHQgLSBDRUxMX1NJWkUgLSB0aGlzLk9GRlNFVF9CT1RUT00pO1x0XHJcbn1cclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxudmFyIEd1aSA9IGZ1bmN0aW9uKGdhbWUpIHtcclxuXHR0aGlzLmdhbWUgPSBnYW1lO1x0XHJcblx0dGhpcy5wbGF5ZXIgPSBudWxsO1xyXG5cdHRoaXMub3BlbmVkID0gZmFsc2U7XHRcclxuXHRcclxuXHRjb25zdCBzdHlsZSA9IG5ldyBQSVhJLlRleHRTdHlsZSh7XHJcbiAgIFx0XHRmaWxsOiBcIndoaXRlXCIsXHJcbiAgICBcdGZvbnRGYW1pbHk6IFwiVmVyZGFuYVwiLFxyXG4gICAgXHRmb250U2l6ZTogMTIsICAgIFx0XHJcbiAgICBcdHN0cm9rZVRoaWNrbmVzczogMlxyXG5cdH0pO1x0XHJcblx0XHJcblx0dGhpcy5pbnZlbnRvcnkgPSBuZXcgSW52ZW50b3J5V2luZG93KCk7XHRcclxuXHR0aGlzLmhvdEJhciA9IG5ldyBIb3RCYXIoc3R5bGUpO1xyXG5cdHRoaXMuaGVhbHRoQmFyID0gbmV3IFN0YXRlQmFyKHN0eWxlLCAweDREMDAwMCwgMHhGRjAwMDAsIGZhbHNlKTtcclxuXHR0aGlzLm1hbmFCYXIgPSBuZXcgU3RhdGVCYXIoc3R5bGUsIDB4MDAwMDRELCAweDAwMDBGRiwgdHJ1ZSk7XHJcblx0XHJcblx0dGhpcy5jb250YWluZXIgPSBudWxsO1xyXG59XHJcblxyXG4vLyBAUmVuZGVyXHJcbkd1aS5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uKGNvbnRhaW5lcikge1xyXG5cdHRoaXMucGxheWVyID0gdGhpcy5nYW1lLmFjdGl2ZVBsYXllcjtcdFxyXG5cdHRoaXMuaW5wdXQgPSB0aGlzLmdhbWUuaW5wdXQ7XHRcclxuXHJcblx0dmFyIHcgPSAxMCxcclxuXHRcdGggPSAzO1x0XHRcclxuXHRcdFxyXG5cdHRoaXMuaW52ZW50b3J5LmJ1aWxkKHcsIGgpO1x0XHJcblx0dGhpcy5ob3RCYXIuYnVpbGQoKTtcclxuXHR0aGlzLmhlYWx0aEJhci51cGRhdGUoNTAsIDEwMCk7XHJcblx0dGhpcy5tYW5hQmFyLnVwZGF0ZSgyMiwgMTAwKTtcclxuXHRcclxuXHR0aGlzLmNvbnRhaW5lciA9IG5ldyBQSVhJLkNvbnRhaW5lcigpO1xyXG5cdHRoaXMuY29udGFpbmVyLmFkZENoaWxkKHRoaXMuaW52ZW50b3J5LmNvbnRhaW5lcik7XHJcblx0dGhpcy5jb250YWluZXIuYWRkQ2hpbGQodGhpcy5ob3RCYXIuY29udGFpbmVyKTtcdFxyXG5cdHRoaXMuY29udGFpbmVyLmFkZENoaWxkKHRoaXMuaGVhbHRoQmFyLmdyYXBoaWNzKTtcclxuXHR0aGlzLmNvbnRhaW5lci5hZGRDaGlsZCh0aGlzLm1hbmFCYXIuZ3JhcGhpY3MpO1xyXG5cdFxyXG5cdGNvbnRhaW5lci5hZGRDaGlsZCh0aGlzLmNvbnRhaW5lcik7XHRcclxufVxyXG5cclxuR3VpLnByb3RvdHlwZS5mcmVlID0gZnVuY3Rpb24oKSB7fVxyXG5cclxuR3VpLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbigpIHtcclxuXHRpZighdGhpcy5wbGF5ZXIpIHJldHVybjtcclxuXHRcclxuXHR0aGlzLmhlYWx0aEJhci51cGRhdGUodGhpcy5wbGF5ZXIuaGVhbHRoLCB0aGlzLnBsYXllci5oZWFsdGhNYXgpO1xyXG5cdC8vdGhpcy5tYW5hQmFyLnVwZGF0ZShcclxuXHRcclxuXHQvL2hvdCBiYXJcclxuXHQvL2tleXMgMC05IC0tPiBjb2RlIDQ4LTU3IC0tPiAwLTlcclxuXHR2YXIga2V5ID0gdGhpcy5pbnB1dC5nZXRQcmVzc2VkKCk7XHJcblx0aWYoa2V5ID4gNDcgJiYga2V5IDwgNTgpIHtcclxuXHRcdGtleSAtPSA0ODtcdFx0XHJcblx0XHR0aGlzLmhvdEJhci5zZWxlY3Qoa2V5KTtcclxuXHRcdHRoaXMuaW5wdXQucHJlc3NlZCA9IG51bGw7XHJcblx0fVx0XHJcblx0XHJcblx0aWYodGhpcy5vcGVuZWQpIHtcclxuXHRcdC8vVE9ETyDQvtCx0YDQsNCx0L7RgtC60LAgaW5wdXQg0LIg0LjQvdCy0LXQvdGC0LDRgNC1XHJcblx0fVxyXG59XHJcblxyXG4vLyBAUmVuZGVyXHJcbkd1aS5wcm90b3R5cGUucmVzaXplID0gZnVuY3Rpb24od2lkdGgsIGhlaWdodCkge1xyXG5cdHRoaXMuaW52ZW50b3J5LnJlc2l6ZSh3aWR0aCwgaGVpZ2h0KTtcclxuXHR0aGlzLmhvdEJhci5yZXNpemUod2lkdGgsIGhlaWdodCk7XHRcclxuXHR0aGlzLmhlYWx0aEJhci5yZXNpemUod2lkdGgsIGhlaWdodCk7XHJcblx0dGhpcy5tYW5hQmFyLnJlc2l6ZSh3aWR0aCwgaGVpZ2h0KTtcclxufVxyXG5cclxuR3VpLnByb3RvdHlwZS5pc09wZW4gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMub3BlbmVkOyB9XHJcblxyXG5HdWkucHJvdG90eXBlLm9wZW5JbnZlbnRvcnkgPSBmdW5jdGlvbihpbnZlbnRvcnkpIHtcclxuXHRpZighdGhpcy5jb250YWluZXIpIHtcclxuXHRcdHRoaXMub3BlbmVkID0gZmFsc2U7XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cdHRoaXMub3BlbmVkID0gIXRoaXMub3BlbmVkO1x0XHRcclxuXHR0aGlzLmludmVudG9yeS5jb250YWluZXIudmlzaWJsZSA9IHRoaXMub3BlbmVkO1xyXG59XHJcblxyXG5HdWkucHJvdG90eXBlLm9wZW5DaGVzdCA9IGZ1bmN0aW9uKGludmVudG9yeSkge31cclxuXHJcbkd1aS5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbigpIHtcclxuXHR0aGlzLm9wZW5lZCA9IGZhbHNlO1xyXG59XHJcblxyXG4vKmNpcmNsZS5tb3VzZW92ZXIgPSBmdW5jdGlvbihtb3VzZURhdGEpIHsgICBcclxuICBcdG1lc3NhZ2UueCA9IG1vdXNlRGF0YS5kYXRhLmdsb2JhbC54O1xyXG4gIFx0bWVzc2FnZS55ID0gbW91c2VEYXRhLmRhdGEuZ2xvYmFsLnk7XHJcbn1cclxuY2lyY2xlLm1vdXNlb3V0ID0gZnVuY3Rpb24obW91c2VEYXRhKSB7XHJcbn0qL1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBHdWkiLCJpbXBvcnQgKiBhcyBQSVhJIGZyb20gJ3BpeGkuanMnXHJcbmltcG9ydCBTdGF0cyBmcm9tICdzdGF0cy1qcydcclxuXHJcblxyXG5pbXBvcnQgeyBDb25zdCwgVGlsZVR5cGUgfSBmcm9tICdjb25zdC5qcydcclxuaW1wb3J0IFNwcml0ZXMgZnJvbSAncmVuZGVyL3Nwcml0ZXMuanMnXHJcbmltcG9ydCBQbGF5ZXIgZnJvbSAnZW50aXR5L3BsYXllci5qcydcclxuaW1wb3J0IE1vYiBmcm9tICdlbnRpdHkvbW9iLmpzJ1xyXG5pbXBvcnQgQ2FtZXJhIGZyb20gJ3JlbmRlci9jYW1lcmEuanMnXHJcbmltcG9ydCBWaXNpYmlsaXR5IGZyb20gJ3JlbmRlci92aXNpYmlsaXR5LmpzJ1xyXG5cclxuXHJcbnZhciBSZW5kZXIgPSBmdW5jdGlvbihnYW1lKSB7XHRcclxuXHR0aGlzLmdhbWUgPSBnYW1lO1xyXG5cdHRoaXMuZ3VpID0gZ2FtZS5ndWk7XHJcblx0dGhpcy5lbnRpdHlsaXN0ID0gZ2FtZS5lbnRpdHlsaXN0O1xyXG5cdFxyXG5cdHRoaXMudmlldyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lLWNhbnZhcycpO1xyXG5cdHRoaXMuaFJlbmRlciA9IDA7ICBcclxuXHR0aGlzLnJlbmRlcmVyID0gbnVsbDtcdFxyXG5cdHRoaXMuY2FtZXJhID0gbnVsbDtcclxuXHQvL9C60L7QvdGC0LXQudC90LXRgNGLXHJcblx0dGhpcy5zdGFnZSA9IG51bGw7XHJcblx0dGhpcy53b3JsZENvbnRhaW5lciA9IG51bGw7XHRcclxuXHR0aGlzLnNjcmVlbkNvbnRhaW5lciA9IG51bGw7XHJcblx0Ly9cclxuXHR0aGlzLm1lc2ggPSBudWxsO1x0XHJcblx0XHRcdFxyXG4gICAgdGhpcy5yZW5kZXJpbmcgPSBmYWxzZTtcdFx0XHRcclxuXHR0aGlzLmluaXRpYWxpemUgPSBmYWxzZTtcdCBcclxuXHQvL9Cy0YHRjyDQuNCz0YDQviDQs9GA0LDRhNC40LrQsFxyXG5cdHRoaXMuc3ByaXRlcyA9IG5ldyBTcHJpdGVzKHRoaXMpO1xyXG5cdHRoaXMudGV4YWRkZWQgPSBmYWxzZTtcclxuXHR0aGlzLnRleGxvYWRlZCA9IGZhbHNlO1x0XHJcblx0XHRcclxuICAgIHRoaXMucm5kUGVyTXNlY29uZCA9IENvbnN0LlJFTkRFUl9QRVJfU0VDT05EIC8gMTAwMDsgIFxyXG5cdHRoaXMubm93ID0gMDtcclxuXHR0aGlzLmxhc3RUaW1lID0gMDsgXHRcdFxyXG5cdHRoaXMuZGVsdGEgPSAwO1xyXG5cdHRoaXMubGFzdERlbHRhID0gMDtcdFxyXG5cdFxyXG5cdHRoaXMucmVzaXplID0gdGhpcy5yZXNpemUuYmluZCh0aGlzKTtcclxuXHR0aGlzLmxvc2VDb250ZXh0ID0gdGhpcy5sb3NlQ29udGV4dC5iaW5kKHRoaXMpO1xyXG59XHJcblxyXG5SZW5kZXIucHJvdG90eXBlLmdldERlbHRhID0gZnVuY3Rpb24oKSB7XHRcclxuXHR0aGlzLm5vdyA9IERhdGUubm93KCk7XHJcblx0dGhpcy5kZWx0YSA9ICh0aGlzLm5vdyAtIHRoaXMubGFzdFRpbWUpICogdGhpcy5ybmRQZXJNc2Vjb25kO1xyXG5cdHRoaXMuZGVsdGEgPSAodGhpcy5kZWx0YSArIHRoaXMubGFzdERlbHRhKSAqIDAuNTtcclxuXHRcclxuXHR0aGlzLmxhc3RUaW1lID0gdGhpcy5ub3c7XHRcclxuXHR0aGlzLmxhc3REZWx0YSA9IHRoaXMuZGVsdGE7XHJcblx0cmV0dXJuIHRoaXMuZGVsdGE7XHJcbn1cclxuXHJcblJlbmRlci5wcm90b3R5cGUucHJlbG9hZFRleHR1cmVzID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcclxuXHR2YXIgYWZ0ZXJMb2FkID0gKCkgPT4ge1xyXG5cdFx0Y29uc29sZS5sb2coXCLQotC10LrRgdGC0YPRgNGLINC30LDQs9GA0YPQttC10L3Ri1wiKVxyXG5cdFx0XHJcblx0XHRpZih0aGlzLnNwcmFkZGVkKSByZXR1cm47XHJcblx0XHR0aGlzLnNwcmFkZGVkID0gdHJ1ZTtcdFx0XHRcclxuXHRcdC8v0LfQsNCz0YDRg9C30LrQsCDQsNC90LjQvNCw0YbQuNC5XHRcdFxyXG5cdFx0dGhpcy5zcHJpdGVzLmNyZWF0ZUFuaW1hdGlvbkZyYW1lcygpO1x0XHRcclxuXHRcdC8vY29uc29sZS5sb2coXCJhZnRlciBzcHJpdGVzIGxvYWRcIik7XHRcdFx0XHJcblx0fVxyXG5cdC8v0LPQvtCx0LDQu9GM0L3Ri9C5IHdpbmRvdyDQutC+0YHRgtGL0LvRjCDQtNC70Y8gc2VsZi9jbGllbnRcclxuXHRpZih3aW5kb3cudGV4bG9hZGVkKSB7XHJcblx0XHRhZnRlckxvYWQoKTtcclxuXHRcdGNhbGxiYWNrKCk7XHJcblx0XHRyZXR1cm47XHJcblx0fVx0XHJcblx0XHJcblx0UElYSS5sb2FkZXIuYWRkKFtcdFxyXG5cdFx0J2ltZy9tb2JzLmpzb24nLFx0XHRcclxuXHRcdCdpbWcvdGlsZXMuanNvbicsICBcclxuXHRcdCdpbWcvcHJvamVjdGlsZXMuanNvbicgXHQgIFx0XHJcbiAgXHRdKVx0XHJcbiAgXHQubG9hZCgobG9hZGVyKSA9PiB7XHRcdFxyXG5cdFx0d2luZG93LnRleGxvYWRlZCA9IHRydWU7XHRcdFxyXG5cdFx0YWZ0ZXJMb2FkKCk7XHJcblx0XHRjYWxsYmFjaygpO1x0XHRcdFx0XHRcdFxyXG5cdH0pXHJcblx0Lm9uRXJyb3IuYWRkKChlKSA9PiB7XHJcblx0XHR3aW5kb3cudGV4bG9hZGVkID0gZmFsc2U7XHJcblx0XHRQSVhJLmxvYWRlci5kZXN0cm95KCk7XHJcblx0XHRjb25zb2xlLmxvZyhlKTtcdFx0XHJcblx0fSk7XHJcbn1cclxuXHJcblJlbmRlci5wcm90b3R5cGUuY29tcGlsZVNoYWRlciA9IGZ1bmN0aW9uKCkge1x0XHJcblx0Ly/QstC10YDRiNC40L3QvdGL0Lkg0YjQtdC50LTQtdGAIFx0XHJcblx0dmFyIHZydCA9IGBwcmVjaXNpb24gbWVkaXVtcCBmbG9hdDtcclxuXHJcbiAgICBcdGF0dHJpYnV0ZSB2ZWMyIGFWZXJ0ZXhQb3NpdGlvbjtcclxuICAgIFx0YXR0cmlidXRlIHZlYzIgYVV2cztcclxuXHJcbiAgICBcdHVuaWZvcm0gbWF0MyB0cmFuc2xhdGlvbk1hdHJpeDtcclxuICAgIFx0dW5pZm9ybSBtYXQzIHByb2plY3Rpb25NYXRyaXg7XHJcblxyXG4gICAgXHR2YXJ5aW5nIHZlYzIgdlV2cztcclxuXHJcbiAgICBcdHZvaWQgbWFpbigpIHtcclxuICAgICAgICBcdHZVdnMgPSBhVXZzO1xyXG4gICAgICAgIFx0Z2xfUG9zaXRpb24gPSB2ZWM0KChwcm9qZWN0aW9uTWF0cml4ICogdHJhbnNsYXRpb25NYXRyaXggKiB2ZWMzKGFWZXJ0ZXhQb3NpdGlvbiwgMS4wKSkueHksIDAuMCwgMS4wKTtcclxuICAgIFx0fWA7XHJcblx0XHJcblx0Ly/RhNGA0LDQs9C80LXQvdGC0L3Ri9C5INGI0LXQudC00LXRgFxyXG5cdHZhciBmcmFnID0gYHByZWNpc2lvbiBtZWRpdW1wIGZsb2F0O1xyXG5cclxuICAgIFx0dmFyeWluZyB2ZWMyIHZVdnM7XHJcbiAgICBcdHVuaWZvcm0gc2FtcGxlcjJEIHVTYW1wbGVyVGV4dHVyZTtcclxuXHJcbiAgICBcdHZvaWQgbWFpbigpIHtcclxuICAgICAgICBcdGdsX0ZyYWdDb2xvciA9IHRleHR1cmUyRCh1U2FtcGxlclRleHR1cmUsIHZVdnMpO1xyXG4gICAgXHR9XHJcblx0YDtcclxuXHRcclxuXHRcclxuXHRjb25zdCBwcm9ncmFtID0gUElYSS5Qcm9ncmFtLmZyb20odnJ0LCBmcmFnLCBcImJhc2Utc2hhZGVyXCIpO1xyXG5cdHRoaXMucHJvZ3JhbSA9IHByb2dyYW07XHJcbn1cclxuXHJcblx0XHJcblJlbmRlci5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uKCkge1x0XHJcblx0Y29uc29sZS5sb2coXCJyZW5kZXIgaW5pdFwiKTtcclxuXHRcclxuXHRQSVhJLnV0aWxzLnNraXBIZWxsbygpOyAgICBcclxuXHRQSVhJLnNldHRpbmdzLlNDQUxFX01PREUgPSBQSVhJLlNDQUxFX01PREVTLk5FQVJFU1Q7XHJcblx0XHRcdFxyXG5cdGlmKCF0aGlzLnJlbmRlcmVyKSB7XHJcblx0XHR0aGlzLnJlbmRlcmVyID0gbmV3IFBJWEkuV2ViR0xSZW5kZXJlcig4MDAsIDYwMCwge1x0XHRcdFx0XHJcblx0XHRcdHZpZXc6IHRoaXMudmlldyxcdFxyXG5cdFx0XHR0cmFuc3BhcmVudDogZmFsc2UsXHJcblx0XHRcdGFudGlhbGlhczogZmFsc2UsXHJcblx0XHRcdHJhdGlvOiAyLjBcclxuXHRcdH0pO1xyXG5cdH1cdFx0XHJcblx0XHJcblx0dGhpcy5yZW5kZXJlci5iYWNrZ3JvdW5kQ29sb3IgPSAweDAwMDAwMDtcdFxyXG5cdC8v0LPQu9Cw0LLQvdGL0Lkg0LrQvtC90YLQtdC50L3QtdGAXHJcblx0dGhpcy5zdGFnZSA9IG5ldyBQSVhJLkNvbnRhaW5lcigpO1x0XHJcblx0Ly9lbnRpdHksIHdvcmxkINC60L7QvdGC0LXQudC90LXRgFxyXG5cdHRoaXMud29ybGRDb250YWluZXIgPSBuZXcgUElYSS5Db250YWluZXIoKTtcclxuXHR0aGlzLndvcmxkQ29udGFpbmVyLnNjYWxlLnNldChDb25zdC5TVEFHRV9TQ0FMRSk7XHRcclxuXHQvL1x0XHRcclxuXHQvL3RoaXMuY29tcGlsZVNoYWRlcigpO1x0XHJcblx0XHJcblx0Ly9ndWkg0LrQvtC90YLQtdC50L3QtdGAXHJcblx0dGhpcy5zY3JlZW5Db250YWluZXIgPSBuZXcgUElYSS5Db250YWluZXIoKTtcclxuXHQvL3RoaXMuc2NyZWVuQ29udGFpbmVyLnNjYWxlLnNldChDb25zdC5TVEFHRV9TQ0FMRSk7XHJcblx0XHRcclxuXHRcdFx0XHJcblx0dGhpcy5zdGFnZS5hZGRDaGlsZCh0aGlzLndvcmxkQ29udGFpbmVyKTtcclxuXHR0aGlzLnN0YWdlLmFkZENoaWxkKHRoaXMuc2NyZWVuQ29udGFpbmVyKTtcclxuXHQvL9C60LDQvNC10YBhXHJcblx0dGhpcy5jYW1lcmEgPSBuZXcgQ2FtZXJhKHRoaXMuZ2FtZSk7XHRcdFxyXG5cdFxyXG5cdHRoaXMucmVzaXplKCk7XHRcdFx0XHRcclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5yZXNpemUsIGZhbHNlKTtcdFxyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd1bmxvYWQnLCB0aGlzLmxvc2VDb250ZXh0LCBmYWxzZSk7XHJcblx0XHJcblx0Ly/RgdGH0LXRgtGH0LjQuiBmcHNcclxuXHR0aGlzLnN0YXRzID0gbmV3IFN0YXRzKCk7XHJcblx0dGhpcy5zdGF0cy5zZXRNb2RlKDApOyAvLyAwOiBmcHMsIDE6IG1zXHRcclxuXHR0aGlzLnN0YXRzLmRvbUVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG5cdHRoaXMuc3RhdHMuZG9tRWxlbWVudC5zdHlsZS5yaWdodCA9ICcwcHgnO1xyXG5cdHRoaXMuc3RhdHMuZG9tRWxlbWVudC5zdHlsZS50b3AgPSAnMHB4JzsgXHJcblx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLnN0YXRzLmRvbUVsZW1lbnQpO1xyXG5cdFxyXG5cdHRoaXMuaW5pdGlhbGl6ZSA9IHRydWU7XHJcbn1cclxuXHJcblJlbmRlci5wcm90b3R5cGUuZnJlZSA9IGZ1bmN0aW9uKCkge1xyXG5cdGlmKHRoaXMuaW5pdGlhbGl6ZSkge1xyXG5cdFx0Y29uc29sZS5sb2coXCJyZW5kZXIgZnJlZVwiKTtcclxuXHRcdHRoaXMucmVuZGVyaW5nID0gZmFsc2U7IFxyXG5cdFx0dGhpcy5jbGVhclN0YWdlKCk7XHRcclxuXHRcdHRoaXMuc3RhZ2UuZGVzdHJveSgpO1xyXG5cdFx0XHRcdFxyXG5cdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMucmVzaXplLCBmYWxzZSk7XHJcblx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndW5sb2FkJywgdGhpcy5sb3NlQ29udGV4dCwgZmFsc2UpO1xyXG5cdFx0Ly/RgdGH0LXRgtGH0LjQuiBmcHNcclxuXHRcdGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5zdGF0cy5kb21FbGVtZW50KTtcclxuXHR9ICBcclxufVxyXG5cclxuUmVuZGVyLnByb3RvdHlwZS5wcmVSZW5kZXIgPSBmdW5jdGlvbigpIHtcclxuXHQvL2d1aVxyXG5cdHRoaXMuZ3VpLmluaXQodGhpcy5zY3JlZW5Db250YWluZXIpO1x0XHJcblx0XHJcblx0dGhpcy5tZXNoID0gbmV3IFBJWEkubWVzaC5NZXNoKFBJWEkuVGV4dHVyZS5mcm9tRnJhbWUoJ3RpbGVzLnBuZycpLCBudWxsLCBudWxsLCBudWxsLFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdCAgIFBJWEkubWVzaC5NZXNoLkRSQVdfTU9ERVMuVFJJQU5HTEVTKTtcdFx0XHJcblx0dGhpcy52aXNpYmlsaXR5ID0gbmV3IFZpc2liaWxpdHkodGhpcy5nYW1lLndvcmxkLmdldE1hcCgpLCB0aGlzLm1lc2gpO1x0XHJcblx0dGhpcy53b3JsZENvbnRhaW5lci5hZGRDaGlsZEF0KHRoaXMubWVzaCwgMCk7XHJcbn1cclxuXHJcblJlbmRlci5wcm90b3R5cGUuc3RhcnRSZW5kZXIgPSBmdW5jdGlvbigpIHtcclxuXHQvLyBjYW5jZWwgZXhpc3RpbmcgcmVuZGVyIGN5Y2xlXHJcblx0aWYgKHRoaXMuaFJlbmRlcikge1xyXG4gICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuaFJlbmRlcik7XHJcbiAgICAgICAgdGhpcy5oUmVuZGVyID0gMDtcclxuICAgIH1cdFxyXG5cdFxyXG5cdHRoaXMucHJlUmVuZGVyKCk7XHJcblx0XHRcdFxyXG5cdHZhciByZW5kZXJDeWNsZSA9ICgpID0+IHtcclxuXHRcdGlmKCF0aGlzLnJlbmRlcmluZykge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHRcdFx0XHJcblx0XHR0aGlzLmhSZW5kZXIgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyQ3ljbGUpO1xyXG5cdFx0XHJcblx0XHR0aGlzLmVudGl0eWxpc3QucmVuZGVyKCk7XHJcblx0XHR0aGlzLmNhbWVyYS51cGRhdGUodGhpcy53b3JsZENvbnRhaW5lcik7XHJcblx0XHRcdFxyXG5cdFx0dGhpcy52aXNpYmlsaXR5LmNvbXB1dGUodGhpcy5nYW1lLmFjdGl2ZVBsYXllcik7XHJcblx0XHRcclxuXHRcdHRoaXMucmVuZGVyZXIucmVuZGVyKHRoaXMuc3RhZ2UpO1x0XHRcdFxyXG5cdFx0dGhpcy5zdGF0cy51cGRhdGUoKTtcdFx0XHRcclxuXHR9XHRcclxuXHRcclxuXHRjb25zb2xlLmxvZyhcIiMjIyBSZW5kZXIgc3RhcnQgIyMjXCIpO1x0XHJcblx0dGhpcy5yZW5kZXJpbmcgPSB0cnVlO1xyXG5cdHRoaXMubGFzdFRpbWUgPSBEYXRlLm5vdygpO1xyXG5cdHJlbmRlckN5Y2xlKCk7XHRcclxufVxyXG5cclxuUmVuZGVyLnByb3RvdHlwZS5mb3JjZWRSZWJ1aWxkTWVzaCA9IGZ1bmN0aW9uKCkge1xyXG5cdHRoaXMudmlzaWJpbGl0eS5jb21wdXRlKHRoaXMuZ2FtZS5hY3RpdmVQbGF5ZXIsIHRydWUpO1xyXG59XHJcblxyXG5SZW5kZXIucHJvdG90eXBlLmFkZFRvU3RhZ2VFbnRpdHkgPSBmdW5jdGlvbihlbnRpdHkpIHtcclxuXHRpZighdGhpcy53b3JsZENvbnRhaW5lcikge1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHRcdFx0XHRcclxuXHQvL9GB0L7Qt9C00LDRgtGMINC60L7QvdGC0LXQudC90LXRgCDQuCDRgdC/0YDQsNC50YLRi1xyXG5cdGlmKCFlbnRpdHkuY29udGFpbmVyKSB7XHRcdFxyXG5cdFx0ZW50aXR5LmNvbnRhaW5lciA9IG5ldyBQSVhJLkNvbnRhaW5lcigpO1xyXG5cdFx0LyppZihlbnRpdHkgaW5zdGFuY2VvZiBNb2IpIHsgLy9URVNUXHJcblx0XHRcdGVudGl0eS5ncmFwaGljcyA9IG5ldyBQSVhJLkdyYXBoaWNzKCk7XHJcblx0XHR9Ki9cdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRlbnRpdHkuaW5pdFNwcml0ZXMoKTtcclxuXHRcdGlmKGVudGl0eSBpbnN0YW5jZW9mIFBsYXllcikge1x0XHRcdFx0XHJcblx0XHRcdGVudGl0eS5hZGROYW1lTGFiZWwoKTtcclxuXHRcdH1cclxuXHR9IFxyXG5cdC8v0LTQvtCx0LDQstC40YLRjCDQutC+0L3RgtC10LnQvdC10YBcclxuXHRpZighZW50aXR5LmNvbnRhaW5lci5hZGRlZCkge1xyXG5cdFx0ZW50aXR5LmNvbnRhaW5lci5hZGRlZCA9IHRydWU7XHJcblx0XHR0aGlzLndvcmxkQ29udGFpbmVyLmFkZENoaWxkKGVudGl0eS5jb250YWluZXIpO1xyXG5cdH1cdFxyXG59XHJcblxyXG5SZW5kZXIucHJvdG90eXBlLnJlbW92ZUZyb21TdGFnZUVudGl0eSA9IGZ1bmN0aW9uKGVudGl0eSkge1xyXG5cdGlmKGVudGl0eS5jb250YWluZXIuYWRkZWQpXHJcblx0XHR0aGlzLndvcmxkQ29udGFpbmVyLnJlbW92ZUNoaWxkKGVudGl0eS5jb250YWluZXIpO1xyXG59XHJcblxyXG5SZW5kZXIucHJvdG90eXBlLmNsZWFyU3RhZ2UgPSBmdW5jdGlvbigpIHtcclxuXHRpZih0aGlzLnN0YWdlKSB7XHJcblx0XHR0aGlzLnN0YWdlLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkcmVuKSA9PiB7XHRcclxuXHRcdFx0dGhpcy5zdGFnZS5yZW1vdmVDaGlsZChjaGlsZHJlbik7XHJcblx0XHR9KTtcclxuXHR9XHRcclxufVxyXG5cclxuUmVuZGVyLnByb3RvdHlwZS5sb3NlQ29udGV4dCA9IGZ1bmN0aW9uKCkge1xyXG5cdGlmKHRoaXMucmVuZGVyZXIpIHtcclxuXHRcdC8vZm9yY2UgbG9zZSBjb250ZXh0XHJcblx0XHR2YXIgZXh0ID0gdGhpcy5yZW5kZXJlci5nbC5nZXRFeHRlbnNpb24oJ1dFQkdMX2xvc2VfY29udGV4dCcpO1x0XHJcblx0XHRpZihleHQpIHtcclxuXHRcdFx0ZXh0Lmxvc2VDb250ZXh0KCk7XHJcblx0XHR9XHJcblx0fVx0XHJcbn1cclxuXHJcblJlbmRlci5wcm90b3R5cGUucmVzaXplID0gZnVuY3Rpb24oKSB7XHRcclxuXHR2YXIgdyA9IHdpbmRvdy5pbm5lcldpZHRoOyAgICBcclxuXHR2YXIgaCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuXHR0aGlzLnJlbmRlcmVyLnZpZXcuc3R5bGUud2lkdGggPSB3ICsgXCJweFwiOyAgICBcclxuXHR0aGlzLnJlbmRlcmVyLnZpZXcuc3R5bGUuaGVpZ2h0ID0gaCArIFwicHhcIjtcclxuXHR0aGlzLnJlbmRlcmVyLnJlc2l6ZSh3LCBoKTtcclxuXHR0aGlzLmNhbWVyYS5yZXNpemUodywgaCk7XHRcclxuXHR0aGlzLmd1aS5yZXNpemUodywgaCk7XHJcbn1cclxuXHJcbi8qUmVuZGVyLnByb3RvdHlwZS5nZXRTdGFnZUNvbnRhaW5lciA9IGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiB0aGlzLnN0YWdlO1xyXG59Ki9cclxuXHJcblxyXG5SZW5kZXIucHJvdG90eXBlLmdldENhbWVyYSA9IGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiB0aGlzLmNhbWVyYTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlbmRlcjsiLCJpbXBvcnQgKiBhcyBQSVhJIGZyb20gJ3BpeGkuanMnXHJcblxyXG5cclxudmFyIFNwcml0ZXMgPSBmdW5jdGlvbihyZW5kZXIpIHtcclxuXHR0aGlzLnJlbmRlciA9IHJlbmRlcjtcclxuXHR0aGlzLl9zcHJpdGUgPSBudWxsO1xyXG5cdFxyXG5cdHRoaXMuZnJhbWVzID0gW107XHJcbn1cclxuXHJcblNwcml0ZXMucHJvdG90eXBlLmNyZWF0ZVRleHQgPSBmdW5jdGlvbihzdHJpbmcsIHNpemUpIHtcclxuXHRyZXR1cm4gbmV3IFBJWEkuVGV4dChzdHJpbmcsIHsgZm9udEZhbWlseSA6ICdBcmlhbCcsIGZpbGw6ICd3aGl0ZScsIGZvbnRTaXplOiBzaXplLCBhbGlnbjogJ2NlbnRlcicgfSk7XHJcbn1cclxuXHJcblNwcml0ZXMucHJvdG90eXBlLmNyZWF0ZSA9IGZ1bmN0aW9uKHNwcml0ZUZyYW1lTmFtZSwgZnJhbWVDb3VudCwgdHlwZSkge1xyXG5cdHZhciBmcmFtZXMgPSBbXTtcdFxyXG5cdGZvciAodmFyIGkgPSAxOyBpIDw9IGZyYW1lQ291bnQ7IGkrKykge1xyXG5cdFx0aWYodHlwZSkge1xyXG5cdFx0XHRmcmFtZXMucHVzaChQSVhJLlRleHR1cmUuZnJvbUZyYW1lKHNwcml0ZUZyYW1lTmFtZSArICdfJyArIHR5cGUgKyAnXycgKyBpICsgJy5wbmcnKSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRmcmFtZXMucHVzaChQSVhJLlRleHR1cmUuZnJvbUZyYW1lKHNwcml0ZUZyYW1lTmFtZSArICdfJyArIGkgKyAnLnBuZycpKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdH1cclxuXHRyZXR1cm4gZnJhbWVzO1xyXG59XHJcblxyXG5TcHJpdGVzLnByb3RvdHlwZS5jcmVhdGVBbmltYXRpb25GcmFtZXMgPSBmdW5jdGlvbigpIHtcdFxyXG5cdC8vZW50aXR5XHRcclxuXHR0aGlzLmZyYW1lc1snd2FycmlvciddID0gdGhpcy5jcmVhdGUoJ3dhcnJpb3InLCAyKTtcdFxyXG5cdHRoaXMuZnJhbWVzWydtb3VzZSddID0gdGhpcy5jcmVhdGUoJ21vdXNlJywgMik7XHRcclxuXHR0aGlzLmZyYW1lc1snbWFnZSddID0gdGhpcy5jcmVhdGUoJ21hZ2UnLCAyKTtcdFxyXG5cdFxyXG5cdC8vcHJvamVjdGlsZXNcclxuXHR0aGlzLmZyYW1lc1snZmlyZWJhbGwnXSA9IHRoaXMuY3JlYXRlKCdmaXJlYmFsbCcsIDIpO1x0XHJcbn1cclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblNwcml0ZXMucHJvdG90eXBlLm5ld0FuaW1hdGVkU3ByaXRlID0gZnVuY3Rpb24oa2V5LCBhbmltYXRpb25TcGVlZCkge1x0XHJcblx0dmFyIHNwcml0ZSA9IG5ldyBQSVhJLmV4dHJhcy5BbmltYXRlZFNwcml0ZSh0aGlzLmZyYW1lc1trZXldKTtcclxuXHRzcHJpdGUuYW5pbWF0aW9uU3BlZWQgPSBhbmltYXRpb25TcGVlZDtcclxuXHRpZighYW5pbWF0aW9uU3BlZWQpXHJcblx0XHRzcHJpdGUuYW5pbWF0aW9uU3BlZWQgPSAwLjAzNTtcclxuXHRyZXR1cm4gc3ByaXRlO1xyXG59XHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNwcml0ZXMiLCJpbXBvcnQgeyBDb25zdCwgVGlsZVR5cGUgfSBmcm9tICdjb25zdC5qcydcclxuXHJcbmltcG9ydCAqIGFzIFJPVCBmcm9tICdyb3QtanMnXHJcblxyXG5cclxudmFyIFZpc2liaWxpdHkgPSBmdW5jdGlvbihtYXAsIG1lc2gpIHtcclxuXHR0aGlzLm1hcCA9IG1hcDtcdFxyXG5cdHRoaXMubWVzaCA9IG1lc2g7IFx0XHJcblx0dGhpcy5mb3YgPSBuZXcgUk9ULkZPVi5QcmVjaXNlU2hhZG93Y2FzdGluZygoaSwgaikgPT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMubGlnaHRQYXNzZXMoaSAsIGopO1xyXG5cdH0pO1xyXG5cdFx0XHJcblx0dGhpcy5sYXN0X3Zpc2libGVfbWFwID0gW107XHRcclxuXHRcdFx0XHJcblx0dGhpcy5sYXN0SSA9IC0xMDAwO1xyXG5cdHRoaXMubGFzdEogPSAtMTAwMDtcdFxyXG59XHJcblxyXG5WaXNpYmlsaXR5LnByb3RvdHlwZS5saWdodFBhc3NlcyA9IGZ1bmN0aW9uKGksIGopIHtcdFxyXG5cdGlmKHRoaXMubWFwW2ldICYmIHRoaXMubWFwW2ldW2pdICYmIHRoaXMubWFwW2ldW2pdLnRyYW5zKSByZXR1cm4gdHJ1ZTtcclxuXHRyZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcblZpc2liaWxpdHkucHJvdG90eXBlLm1lc2hSYXdSZXNldCA9IGZ1bmN0aW9uKG1lc2gpIHtcclxuXHRtZXNoLnJhd192ZXJ0aWNlcyA9IFtdO1xyXG5cdG1lc2gucmF3X3V2ID0gW107XHJcblx0bWVzaC5yYXdfaW5kaWNlcyA9IFtdO1x0XHRcclxuXHRtZXNoLl9uID0gMDtcclxufVxyXG5cclxuVmlzaWJpbGl0eS5wcm90b3R5cGUubWVzaFJlZnJlc2ggPSBmdW5jdGlvbihtZXNoKSB7XHJcblx0bWVzaC52ZXJ0aWNlcyA9IG5ldyBGbG9hdDMyQXJyYXkobWVzaC5yYXdfdmVydGljZXMpO1xyXG5cdG1lc2gudXZzID0gbmV3IEZsb2F0MzJBcnJheShtZXNoLnJhd191dik7XHRcdFxyXG5cdG1lc2guaW5kaWNlcyA9IG5ldyBVaW50MTZBcnJheShtZXNoLnJhd19pbmRpY2VzKTtcclxuXHRcdFxyXG5cdG1lc2gudmVydGV4RGlydHkrKztcclxuXHRtZXNoLmRpcnR5Kys7XHJcblx0bWVzaC5pbmRleERpcnR5Kys7XHJcblx0bWVzaC5yZWZyZXNoKCk7XHRcclxufVxyXG5cclxuVmlzaWJpbGl0eS5wcm90b3R5cGUuYnVpbGRRdWFkID0gZnVuY3Rpb24obWVzaCwgaSwgaiwgdSwgdikge1xyXG5cdGxldCB0cyA9IENvbnN0LlRJTEVfU0laRTsgXHRcdFxyXG5cdGxldCB1dl9taW4gPSAwLjAzMTI1O1xyXG5cdFx0XHJcblx0bWVzaC5yYXdfdmVydGljZXMucHVzaChpKnRzLCAgdHMraip0cyxcclxuXHRcdFx0XHRcdCAgIFx0XHRpKnRzLCAgaip0cyxcclxuXHRcdFx0XHRcdCAgIFx0XHR0cytpKnRzLCB0cytqKnRzLFxyXG5cdFx0XHRcdFx0ICAgXHRcdHRzK2kqdHMsIGoqdHMpO1xyXG5cdFx0XHRcclxuXHRtZXNoLnJhd191di5wdXNoKHV2X21pbiAqIHUsIHV2X21pbiAqIHYgKyB1dl9taW4sIFxyXG4gICAgICAgICAgICBcdCBcdHV2X21pbiAqIHUsIHV2X21pbiAqIHYsIFxyXG4gICAgICAgICAgICBcdCBcdHV2X21pbiAqIHUgKyB1dl9taW4sICB1dl9taW4gKiB2ICsgdXZfbWluLFxyXG5cdFx0XHRcdCBcdHV2X21pbiAqIHUgKyB1dl9taW4sICB1dl9taW4gKiB2KTtcdFxyXG5cdFx0XHRcclxuXHRcdFx0XHJcblx0bWVzaC5yYXdfaW5kaWNlcy5wdXNoKG1lc2guX24sIG1lc2guX24rMSwgbWVzaC5fbisyLCBtZXNoLl9uKzIsIG1lc2guX24rMSwgbWVzaC5fbiszKTtcclxuXHRtZXNoLl9uKz00O1x0XHRcclxufVxyXG5cclxuVmlzaWJpbGl0eS5wcm90b3R5cGUuY29tcHV0ZSA9IGZ1bmN0aW9uKHBsYXllciwgZm9yY2VkKSB7XHJcblx0Ly9wbGF5ZXIgaSxqXHRcclxuXHR2YXIgcGkgPSB+fihwbGF5ZXIueCAvIENvbnN0LlRJTEVfU0laRSksXHJcblx0XHRwaiA9IH5+KHBsYXllci55IC8gQ29uc3QuVElMRV9TSVpFKTtcclxuXHRcdFxyXG5cdGlmKGZvcmNlZCB8fCB0aGlzLmxhc3RJICE9IHBpIHx8IHRoaXMubGFzdEogIT0gcGopIHtcdFx0XHRcclxuXHRcdHRoaXMubGFzdEkgPSBwaTtcclxuXHRcdHRoaXMubGFzdEogPSBwajtcclxuXHRcdFxyXG5cdFx0Ly90aGlzLm5vdyA9IERhdGUubm93KCk7XHJcblx0XHRcclxuXHRcdC8v0LrQvtGB0YLRi9C70Ywg0L7RgiDQsdCw0LPQvtCyINGB0YLQvtC70LrQvdC+0LLQtdC90LjQuVxyXG5cdFx0aWYoIXRoaXMubWFwW3BpXSB8fCAhdGhpcy5tYXBbcGldW3BqXSB8fCAhdGhpcy5tYXBbcGldW3BqXS5wYXNzKSByZXR1cm47XHRcdFxyXG5cdFx0XHRcdFxyXG5cdFx0Ly/RgdCx0YDQvtGBINGB0YLQsNGA0L7QuSDQstC40LTQuNC80L7RgdGC0Lgg0LTQu9GPIGVudGl0eVx0XHRcclxuXHRcdHRoaXMubGFzdF92aXNpYmxlX21hcC5mb3JFYWNoKCh0aSkgPT4ge1xyXG5cdFx0XHR0aGlzLm1hcFt0aS5pXVt0aS5qXS52aXNpYmxlID0gbnVsbDtcdFxyXG5cdFx0fSk7XHRcdFx0XHJcblx0XHR0aGlzLmxhc3RfdmlzaWJsZV9tYXAgPSBbXTtcdFx0XHJcblx0XHRcclxuXHRcdHRoaXMubWVzaFJhd1Jlc2V0KHRoaXMubWVzaCk7XHJcblx0XHRcclxuXHRcdC8v0L/QtdGA0LXRgdGC0YDQvtC50LrQsCDQstC40LTQuNC80L7Qs9C+INC80LXRiNCwXHJcblx0XHR2YXIgdGlsZSwgdHRpO1xyXG5cdFx0dGhpcy5mb3YuY29tcHV0ZShwaSwgcGosIHBsYXllci5yLCAoaSwgaiwgciwgdmlzaWJpbGUpID0+IHtcdFxyXG5cdFx0XHRpZihpPDAgfHwgajwwKSByZXR1cm47XHRcclxuXHRcdFx0XHRcclxuXHRcdFx0Ly/QstC40LTQuNC80L7RgdGC0Ywg0LTQu9GPIGVudGl0eVx0XHRcdFxyXG5cdFx0XHR0aWxlID0gdGhpcy5tYXBbaV1bal07XHJcblx0XHRcdHRpbGUudmlzaWJsZSA9IHRydWU7XHJcblx0XHRcdHRoaXMubGFzdF92aXNpYmxlX21hcC5wdXNoKHtpOmksIGo6an0pO1x0XHRcclxuXHRcdFx0XHJcblx0XHRcdHR0aSA9IHRpbGUuaW5kZXg7XHJcblx0XHRcdFxyXG5cdFx0XHRpZih0aWxlLnR5cGUgPT0gVGlsZVR5cGUuRW1wdHkpIHJldHVybjtcdFxyXG5cdFx0XHRpZih0aWxlLnR5cGUgPT0gVGlsZVR5cGUuV2FsbCkgdHRpKz0gMTY7XHRcdFxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0dGhpcy5idWlsZFF1YWQodGhpcy5tZXNoLCBpLCBqLCB0dGksIDApO1x0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdGlmKHRpbGUub2JqKSB7XHJcblx0XHRcdFx0dGhpcy5idWlsZFF1YWQodGhpcy5tZXNoLCBpLCBqLCB0aWxlLm9iai51aSwgdGlsZS5vYmoudmkpO1x0XHJcblx0XHRcdH0gZWxzZSBpZih0aWxlLmJsb29kICE9IG51bGwpIHtcclxuXHRcdFx0XHR0aGlzLmJ1aWxkUXVhZCh0aGlzLm1lc2gsIGksIGosIDMxLCAzMSk7XHJcblx0XHRcdH0gZWxzZSBpZih0aWxlLnRyYXNoICE9IG51bGwpIHtcclxuXHRcdFx0XHR0aGlzLmJ1aWxkUXVhZCh0aGlzLm1lc2gsIGksIGosIHRpbGUudHJhc2gsIDI5KTtcdFxyXG5cdFx0XHR9IGVsc2UgaWYodGlsZS50b3JjaCAhPSBudWxsKVx0XHRcclxuXHRcdFx0XHR0aGlzLmJ1aWxkUXVhZCh0aGlzLm1lc2gsIGksIGosIHRpbGUudG9yY2gsIDMwKTtcclxuXHRcdFx0XHRcclxuXHRcdFx0aWYodGlsZS5pdGVtKVx0XHRcclxuXHRcdFx0XHR0aGlzLmJ1aWxkUXVhZCh0aGlzLm1lc2gsIGksIGosIHRpbGUuaXRlbS51aSwgdGlsZS5pdGVtLnZpKTtcdFxyXG5cdFx0fSk7XHRcdFx0XHRcclxuXHRcdFxyXG5cdFx0dGhpcy5tZXNoUmVmcmVzaCh0aGlzLm1lc2gpO1xyXG5cdFx0XHJcblx0XHQvL2NvbnNvbGUubG9nKFwidmlzaWJpbGl0eSB0aW1lOlwiLCBEYXRlLm5vdygpIC0gdGhpcy5ub3cpO1xyXG5cdH1cdFxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVmlzaWJpbGl0eTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFdvcmtlcihfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwidGlja2VyLndvcmtlci5qc1wiKTtcbn07IiwiaW1wb3J0IHsgQ29uc3QgfSBmcm9tICdjb25zdC5qcydcclxuaW1wb3J0IFBsYXllciBmcm9tICdlbnRpdHkvcGxheWVyLmpzJ1xyXG5cclxuXHJcbnZhciBMaXN0ID0gZnVuY3Rpb24oZ2FtZSwgc3RhcnRJZCkge1xyXG5cdHRoaXMuZ2FtZSA9IGdhbWU7XHRcdFxyXG5cdFxyXG5cdHRoaXMubGFzdElkID0gMDtcclxuXHR0aGlzLnN0YXJ0SWQgPSAwO1xyXG5cdGlmKHN0YXJ0SWQpIHtcclxuXHRcdHRoaXMuc3RhcnRJZCA9IHN0YXJ0SWQ7XHJcblx0XHR0aGlzLmxhc3RJZCA9IHN0YXJ0SWQ7XHJcblx0fVxyXG5cdFxyXG5cdHRoaXMubGlzdCA9IG5ldyBNYXAoKTtcclxuXHQvL3RoaXMucHJvamVjbGlzdCA9IG5ldyBNYXAoKTtcclxufVxyXG5cclxuTGlzdC5wcm90b3R5cGUuZnJlZSA9IGZ1bmN0aW9uKCkge1xyXG5cdHRoaXMubGlzdC5jbGVhcigpO1x0XHJcblx0dGhpcy5sYXN0SWQgPSB0aGlzLnN0YXJ0SWQ7XHJcbn1cclxuXHJcbkxpc3QucHJvdG90eXBlLmdldElkID0gZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIHRoaXMubGFzdElkKys7XHJcbn1cclxuXHJcbkxpc3QucHJvdG90eXBlLnBvb2wgPSBmdW5jdGlvbigpIHtcclxuXHRyZXR1cm4gdGhpcy5saXN0O1xyXG59XHJcblxyXG5MaXN0LnByb3RvdHlwZS5zaXplID0gZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIHRoaXMubGlzdC5zaXplO1xyXG59XHJcblxyXG5MaXN0LnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbihlbnRpdHkpIHtcdFxyXG5cdGVudGl0eS5pZCA9IHRoaXMuZ2V0SWQoKTtcclxuXHR0aGlzLmFkZFRvSWQoZW50aXR5LCBlbnRpdHkuaWQpO1x0XHRcclxufVxyXG5cclxuTGlzdC5wcm90b3R5cGUuYWRkVG9JZCA9IGZ1bmN0aW9uKGVudGl0eSwgaWQpIHtcdFx0XHJcblx0dGhpcy5saXN0LnNldChpZCwgZW50aXR5KTtcdFx0XHJcbn1cclxuXHJcbkxpc3QucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uKGlkKSB7XHRcclxuXHRpZighdGhpcy5saXN0LmhhcyhpZCkpIHJldHVybjtcclxuXHR0aGlzLmxpc3QuZGVsZXRlKGlkKTtcdFx0XHJcbn1cclxuXHJcbkxpc3QucHJvdG90eXBlLnNldFN0YXRlID0gZnVuY3Rpb24oaWQsIHN0YXRlKSB7XHJcblx0aWYoIXRoaXMubGlzdC5oYXMoaWQpKSByZXR1cm47XHJcblx0XHJcblx0dmFyIGVudGl0eSA9IHRoaXMuZ2V0T2JqZWN0QnlJZChpZCk7XHJcblx0aWYoZW50aXR5LnN0YXRlICE9IHN0YXRlKVxyXG5cdFx0ZW50aXR5LnN0YXRlID0gc3RhdGU7XHRcdFx0XHJcbn1cclxuXHJcbkxpc3QucHJvdG90eXBlLmdldE9iamVjdEJ5SWQgPSBmdW5jdGlvbihpZCkge1xyXG5cdHJldHVybiB0aGlzLmxpc3QuZ2V0KGlkKTtcdFxyXG59XHJcblxyXG4vLyBAUmVuZGVyXHJcbkxpc3QucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uKCkge1xyXG5cdHRoaXMubGlzdC5mb3JFYWNoKChlbnRpdHkpID0+IHtcdFx0XHRcdFxyXG5cdFx0ZW50aXR5Lm1vdmluZygpO1xyXG5cdFx0XHRcdFxyXG5cdFx0ZW50aXR5LmNvbnRhaW5lci54ID0gZW50aXR5Lng7IFxyXG5cdFx0ZW50aXR5LmNvbnRhaW5lci55ID0gZW50aXR5Lnk7XHRcclxuXHR9KTtcdFxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGlzdCIsImltcG9ydCB7IENvbnN0LCBFbnRpdHlTdGF0ZSB9IGZyb20gJ2NvbnN0LmpzJ1xyXG5pbXBvcnQgTGlzdCBmcm9tICd3b3JsZC9saXN0LmpzJ1xyXG5cclxuXHJcbnZhciBMaXN0SG9zdCA9IGZ1bmN0aW9uKGdhbWUsIHN0YXJ0SWQpIHtcclxuXHRMaXN0LmNhbGwodGhpcywgZ2FtZSwgc3RhcnRJZCk7XHRcclxuXHRcclxuXHR0aGlzLnVwZGF0ZWxpc3QgPSBbXTtcclxuXHRcdHRoaXMuY3JlYXRlZGxpc3QgPSBbXTtcclxuXHRcdHRoaXMucmVtb3ZlZGxpc3QgPSBbXTtcdFxyXG59XHJcblxyXG5MaXN0SG9zdC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKExpc3QucHJvdG90eXBlKTtcclxuTGlzdEhvc3QucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gTGlzdEhvc3Q7XHJcblxyXG5cclxuTGlzdEhvc3QucHJvdG90eXBlLl9hZGQgPSBmdW5jdGlvbihlbnRpdHkpIHtcclxuXHRlbnRpdHkuaWQgPSB0aGlzLmdldElkKCk7XHRcdFx0XHJcblx0dGhpcy5saXN0LnNldChpZCwgZW50aXR5KTtcclxufVxyXG5cclxuTGlzdEhvc3QucHJvdG90eXBlLmFkZFRvSWQgPSBmdW5jdGlvbihlbnRpdHksIGlkKSB7XHJcblx0TGlzdC5wcm90b3R5cGUuYWRkVG9JZC5jYWxsKHRoaXMsIGVudGl0eSwgaWQpO1xyXG5cdFxyXG5cdGVudGl0eS5zdGF0ZSA9IEVudGl0eVN0YXRlLkNyZWF0ZTtcclxuXHR0aGlzLnVwZGF0ZWxpc3QucHVzaChlbnRpdHkpO1xyXG5cdHRoaXMuY3JlYXRlZGxpc3QucHVzaChlbnRpdHkpO1xyXG59XHJcblxyXG5MaXN0SG9zdC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24oaWQpIHtcclxuXHRpZighdGhpcy5saXN0LmhhcyhpZCkpIHJldHVybjtcclxuXHRcclxuXHR2YXIgZW50aXR5ID0gdGhpcy5nZXRPYmplY3RCeUlkKGlkKTtcclxuXHRlbnRpdHkuc3RhdGUgPSBFbnRpdHlTdGF0ZS5SZW1vdmU7XHJcblx0dGhpcy51cGRhdGVsaXN0LnB1c2goZW50aXR5KTtcclxuXHR0aGlzLnJlbW92ZWRsaXN0LnB1c2goZW50aXR5KTtcclxufVxyXG5cclxuTGlzdEhvc3QucHJvdG90eXBlLnNldFN0YXRlID0gZnVuY3Rpb24oaWQsIHN0YXRlKSB7XHJcblx0aWYoIXRoaXMubGlzdC5oYXMoaWQpKSByZXR1cm47XHJcblx0XHJcblx0dmFyIGVudGl0eSA9IHRoaXMuZ2V0T2JqZWN0QnlJZChpZCk7XHJcblx0aWYoZW50aXR5LnN0YXRlICE9IHN0YXRlKSB7XHJcblx0XHRlbnRpdHkuc3RhdGUgPSBzdGF0ZTtcdFxyXG5cdFx0dGhpcy51cGRhdGVsaXN0LnB1c2goZW50aXR5KTtcclxuXHR9XHRcdFxyXG59XHJcblxyXG5MaXN0SG9zdC5wcm90b3R5cGUuZm9yRWFjaFVwZGF0ZWQgPSBmdW5jdGlvbihjYWxsYmFjaykge1xyXG5cdHRoaXMudXBkYXRlbGlzdC5mb3JFYWNoKGNhbGxiYWNrKTtcdFxyXG59XHJcblxyXG5MaXN0SG9zdC5wcm90b3R5cGUudXBkYXRlZFNpemUgPSBmdW5jdGlvbigpIHtcclxuXHRyZXR1cm4gdGhpcy51cGRhdGVsaXN0Lmxlbmd0aDtcclxufVxyXG5cclxuTGlzdEhvc3QucHJvdG90eXBlLnJlbW92ZUFsbE1hcmtlZCA9IGZ1bmN0aW9uKCkge1xyXG5cdHRoaXMudXBkYXRlbGlzdCA9IFtdO1xyXG5cdFxyXG5cdHRoaXMuY3JlYXRlZGxpc3QuZm9yRWFjaCgoZW50aXR5KSA9PiB7XHJcblx0XHRlbnRpdHkuc3RhdGUgPSBFbnRpdHlTdGF0ZS5EZWZhdWx0O1xyXG5cdH0pO1xyXG5cdHRoaXMuY3JlYXRlZGxpc3QgPSBbXTtcclxuXHRcclxuXHR0aGlzLnJlbW92ZWRsaXN0LmZvckVhY2goKGVudGl0eSkgPT4ge1xyXG5cdFx0TGlzdC5wcm90b3R5cGUucmVtb3ZlLmNhbGwodGhpcywgZW50aXR5LmlkKTtcclxuXHR9KTtcclxuXHR0aGlzLnJlbW92ZWRsaXN0ID0gW107XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaXN0SG9zdCIsImltcG9ydCB7IENvbnN0IH0gZnJvbSAnY29uc3QuanMnXHJcblxyXG5cclxudmFyIFRPYmplY3QgPSBmdW5jdGlvbih3b3JsZCwgaSwgaikge1xyXG5cdHRoaXMud29ybGQgPSB3b3JsZDtcclxuXHR0aGlzLm1hcCA9IHdvcmxkLmdldE1hcCgpO1xyXG4gXHR0aGlzLmkgPSBpO1xyXG5cdHRoaXMuaiA9IGo7XHJcblx0Ly91diDRgtC10LrRgdGC0YPRgNC90YvQtSDQuNC90LTQtdC60YHRiyDQsiDQsNGC0LvQsNGB0LUg0YLQsNC50LvQvtCyXHJcblx0dGhpcy51aSA9IDA7XHJcblx0dGhpcy52aSA9IDA7XHJcblx0Ly/Qv9GA0L7RhdC+0LTQuNC80L7RgdGC0YxcclxuXHQvL3RoaXMucGFzcyA9IHRydWU7XHJcbn1cclxuXHJcblRPYmplY3QucHJvdG90eXBlLmFjdGl2YXRlID0gZnVuY3Rpb24oaG9zdCkge31cclxuXHJcblRPYmplY3QucHJvdG90eXBlLnN0ZXBvbiA9IGZ1bmN0aW9uKCkge31cclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG52YXIgRG9vciA9IGZ1bmN0aW9uKHdvcmxkLCBpLCBqKSB7XHJcblx0VE9iamVjdC5jYWxsKHRoaXMsIHdvcmxkLCBpLCBqKTtcclxuXHRcclxuXHR0aGlzLnVpID0gMDtcclxuXHR0aGlzLnZpID0gMzE7XHJcblx0dGhpcy5tYXBbaV1bal0ucGFzcyA9IGZhbHNlO1xyXG5cdHRoaXMubWFwW2ldW2pdLnRyYW5zID0gZmFsc2U7XHJcblx0dGhpcy5vcGVuID0gZmFsc2U7XHJcbn1cclxuXHJcbkRvb3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShUT2JqZWN0LnByb3RvdHlwZSk7XHJcbkRvb3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gRG9vcjtcclxuXHJcblxyXG5Eb29yLnByb3RvdHlwZS5hY3RpdmF0ZSA9IGZ1bmN0aW9uKGhvc3QpIHtcdFxyXG5cdC8v0LIg0L/RgNC+0YXQvtC00LUgZW50aXR5XHJcblx0aWYoaG9zdCAmJiB0aGlzLm1hcFt0aGlzLmldW3RoaXMual0uaWQpIHJldHVybiBmYWxzZTtcclxuXHRcclxuXHR0aGlzLm9wZW4gPSAhdGhpcy5vcGVuO1xyXG5cdGlmKHRoaXMub3Blbikge1xyXG5cdFx0dGhpcy5tYXBbdGhpcy5pXVt0aGlzLmpdLnRyYW5zID0gdHJ1ZTtcclxuXHRcdHRoaXMubWFwW3RoaXMuaV1bdGhpcy5qXS5wYXNzID0gdHJ1ZTtcclxuXHRcdHRoaXMudWkgPSAxO1xyXG5cdH0gZWxzZSB7XHJcblx0XHR0aGlzLm1hcFt0aGlzLmldW3RoaXMual0udHJhbnMgPSBmYWxzZTtcclxuXHRcdHRoaXMubWFwW3RoaXMuaV1bdGhpcy5qXS5wYXNzID0gZmFsc2U7XHJcblx0XHR0aGlzLnVpID0gMDtcclxuXHR9XHRcclxuXHRyZXR1cm4gdHJ1ZTtcdFxyXG59XHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHJcbmV4cG9ydCB7IERvb3IgfTsiLCJpbXBvcnQgeyBDb25zdCwgVGlsZVR5cGUgfSBmcm9tICdjb25zdC5qcydcclxuLy9pbXBvcnQgRmxvb3IgZnJvbSAnd29ybGQvZmxvb3IuanMnXHJcbmltcG9ydCB7IERvb3IgfSBmcm9tICd3b3JsZC9vYmplY3QuanMnXHJcblxyXG5cclxuaW1wb3J0ICogYXMgUk9UIGZyb20gJ3JvdC1qcydcclxuLy9pbXBvcnQgeyBSTkcsIERpZ2dlciB9IGZyb20gJ3JvdC1qcydcclxuXHJcblxyXG52YXIgVGlsZSA9IGZ1bmN0aW9uKHR5cGUsIHBhc3MsIHRyYW5zKSB7XHJcblx0dGhpcy50eXBlID0gdHlwZTtcclxuXHR0aGlzLmluZGV4ID0gMDtcclxuXHR0aGlzLnBhc3MgPSBwYXNzO1xyXG5cdHRoaXMudHJhbnMgPSB0cmFucztcclxufVxyXG5UaWxlLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbih0eXBlLCBwYXNzLCB0cmFucykge1xyXG5cdHRoaXMudHlwZSA9IHR5cGU7XHRcclxuXHR0aGlzLnBhc3MgPSBwYXNzO1xyXG5cdHRoaXMudHJhbnMgPSB0cmFucztcclxufVxyXG5cclxuXHJcbnZhciBXb3JsZCA9IGZ1bmN0aW9uKGdhbWUpIHtcclxuXHR0aGlzLmdhbWUgPSBnYW1lO1x0XHJcblx0XHJcblx0dGhpcy5zaXplWCA9IDY0O1xyXG5cdHRoaXMuc2l6ZVkgPSA2NDtcclxuXHRcclxuXHR0aGlzLnNwYXduUG9pbnQgPSBbXTtcdFxyXG5cdFxyXG5cdHRoaXMubWFwID0gbnVsbDtcclxuXHQvL3RoaXMuY2h1bmtsaXN0ID0gW107XHJcblx0dGhpcy5zZWVkID0gNDM3NjQ7XHRcclxufVxyXG5cclxuV29ybGQucHJvdG90eXBlLnNldFNlZWQgPSBmdW5jdGlvbihzZWVkKSB7XHJcblx0Uk9ULlJORy5zZXRTZWVkKHNlZWQpO1xyXG4gICAgdGhpcy5zZWVkID0gc2VlZDtcclxufVxyXG5cclxuV29ybGQucHJvdG90eXBlLmdldE1hcCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIHRoaXMubWFwO1xyXG59XHJcblxyXG4vL0BIb3N0XHJcbldvcmxkLnByb3RvdHlwZS5nZW5lcmF0ZVNlZWQgPSBmdW5jdGlvbigpIHtcclxuXHR0aGlzLnNlZWQgPSBNYXRoLmZsb29yKDEwMDAwMDAgKiBNYXRoLnJhbmRvbSgpICsgMTAwMDAwICogTWF0aC5yYW5kb20oKSk7XHJcblx0Uk9ULlJORy5zZXRTZWVkKHRoaXMuc2VlZCk7XHJcblx0cmV0dXJuIHRoaXMuc2VlZDtcclxufVxyXG5cclxuV29ybGQucHJvdG90eXBlLmdldDJEQXJyYXkgPSBmdW5jdGlvbigpIHsgXHJcblx0dmFyIG1hcCA9IFtdO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnNpemVYOyBpKyspIHtcclxuICAgICAgICBtYXAucHVzaChbXSk7XHJcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLnNpemVZOyBqKyspIHtcclxuICAgICAgICAgICAgbWFwW2ldLnB1c2gobmV3IFRpbGUoVGlsZVR5cGUuRW1wdHksIHRydWUsIHRydWUpKTtcclxuICAgICAgICB9XHJcbiAgICB9ICAgIFxyXG4gICAgcmV0dXJuIG1hcDsgICBcclxufVxyXG5cclxuV29ybGQucHJvdG90eXBlLmF1dG9UaWxpbmdBbmREZWNvciA9IGZ1bmN0aW9uKG1hcCkge1xyXG5cdHZhciB4X2xlbiA9IG1hcC5sZW5ndGg7XHJcblx0dmFyIHlfbGVuID0gbWFwWzBdLmxlbmd0aDtcclxuXHRcdFxyXG5cdHZhciB0b3AsZG93bixsZWZ0LHJpZ2h0O1xyXG5cdHZhciB0dGk7IC8vdGlsZSB0ZXh0dXJlIGluZGV4IFswLTE1XVx0XHJcblx0XHJcblx0dmFyIHRpbGUsIHR5cGU7XHRcclxuXHR2YXIgaSxqLG49MDtcdFxyXG5cdGZvcihpPTA7IGkgPCB4X2xlbjsgaSsrKSB7XHJcblx0XHRmb3Ioaj0wOyBqIDwgeV9sZW47IGorKykge1x0XHJcblx0XHRcdHRpbGUgPSBtYXBbaV1bal07XHRcclxuXHRcdFx0dHlwZSA9IHRpbGUudHlwZTtcclxuXHRcdFx0aWYodHlwZSA9PSBUaWxlVHlwZS5FbXB0eSkgY29udGludWU7XHRcdFx0XHJcblx0XHRcclxuXHRcdFx0dG9wPTA7ZG93bj0wO3JpZ2h0PTA7bGVmdD0wO1x0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdGlmKGotMT49MCBcdCAmJiBtYXBbaV1bai0xXS50eXBlID09IHR5cGUpIHRvcCA9IDE7XHJcblx0XHRcdGlmKGorMTx5X2xlbiAmJiBtYXBbaV1baisxXS50eXBlID09IHR5cGUpIGRvd24gPSAxO1x0XHRcdFxyXG5cdFx0XHRpZihpKzE8eF9sZW4gJiYgbWFwW2krMV1bal0udHlwZSA9PSB0eXBlKSByaWdodCA9IDE7XHJcblx0XHRcdGlmKGktMT49MCBcdCAmJiBtYXBbaS0xXVtqXS50eXBlID09IHR5cGUpIGxlZnQgPSAxO1xyXG5cdFx0XHQvL3RpbGUgdGV4dHVyZSBpbmRleFxyXG5cdFx0XHR0dGkgPSB0b3AgKyAyKnJpZ2h0ICsgNCpkb3duICsgOCpsZWZ0OyAvLzAtMTVcclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0dGlsZS5pbmRleCA9IHR0aTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdC8v0L/QvtC7XHJcblx0XHRcdGlmKHR5cGUgPT0gVGlsZVR5cGUuRmxvb3IpIHtcclxuXHRcdFx0XHRpZighdGlsZS5vYmopIHtcclxuXHRcdFx0XHRcdC8v0LzRg9GB0L7RgFx0XHJcblx0XHRcdFx0XHRpZihST1QuUk5HLmdldFBlcmNlbnRhZ2UoKSA8IDQpIHRpbGUudHJhc2ggPSBNYXRoLnJvdW5kKDMgKiBST1QuUk5HLmdldFVuaWZvcm0oKSk7XHJcblx0XHRcdFx0fVx0XHRcclxuXHRcdFx0Ly/RgdGC0LXQvdGLXHRcdFxyXG5cdFx0XHR9IGVsc2UgaWYodHRpID09IDAgfHwgdHRpID09IDEgfHwgdHRpID09IDEwKSB7XHJcblx0XHRcdCAgXHQvL9GE0LDQutC10LvRi1xyXG5cdFx0XHRcdGlmKFJPVC5STkcuZ2V0UGVyY2VudGFnZSgpIDwgOCkgdGlsZS50b3JjaCA9IDA7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHRcclxufVxyXG5cclxuV29ybGQucHJvdG90eXBlLmdlbmVyYXRlTWFwID0gZnVuY3Rpb24oKSB7IFxyXG5cdFxyXG5cdHZhciBkaWdnZXIgPSBuZXcgUk9ULk1hcC5EaWdnZXIodGhpcy5zaXplWCwgdGhpcy5zaXplWSwge1xyXG5cdFx0cm9vbVdpZHRoOiBbNiwgMTFdLFxyXG4gICAgICAgIHJvb21IZWlnaHQ6IFs2LCA4XSxcclxuICAgICAgICBjb3JyaWRvckxlbmd0aDogWzMsIDRdLFxyXG5cdH0pO1xyXG4gICBcdFxyXG4gICAgdGhpcy5tYXAgPSB0aGlzLmdldDJEQXJyYXkoKTtcclxuXHRcclxuXHR2YXIgY2hlY2tOZWlnaGJvclRpbGVzID0gKGRpZ2dlciwgeCwgeSwgbWFwLCBvbGRUaWxlLCBuZXdUaWxlKSA9PiB7XHRcdFxyXG5cdFx0aWYoZGlnZ2VyLl9tYXBbeCsxXVt5XSA9PSBvbGRUaWxlKSBtYXBbeCsxXVt5XS5zZXQobmV3VGlsZSwgZmFsc2UsIGZhbHNlKTsgXHJcblx0XHRpZihkaWdnZXIuX21hcFt4LTFdW3ldID09IG9sZFRpbGUpIG1hcFt4LTFdW3ldLnNldChuZXdUaWxlLCBmYWxzZSwgZmFsc2UpO1xyXG5cdFx0aWYoZGlnZ2VyLl9tYXBbeF1beSsxXSA9PSBvbGRUaWxlKSBtYXBbeF1beSsxXS5zZXQobmV3VGlsZSwgZmFsc2UsIGZhbHNlKTtcclxuXHRcdGlmKGRpZ2dlci5fbWFwW3hdW3ktMV0gPT0gb2xkVGlsZSkgbWFwW3hdW3ktMV0uc2V0KG5ld1RpbGUsIGZhbHNlLCBmYWxzZSk7XHJcblx0XHRpZihkaWdnZXIuX21hcFt4KzFdW3krMV0gPT0gb2xkVGlsZSkgbWFwW3grMV1beSsxXS5zZXQobmV3VGlsZSwgZmFsc2UsIGZhbHNlKTtcclxuXHRcdGlmKGRpZ2dlci5fbWFwW3grMV1beS0xXSA9PSBvbGRUaWxlKSBtYXBbeCsxXVt5LTFdLnNldChuZXdUaWxlLCBmYWxzZSwgZmFsc2UpO1xyXG5cdFx0aWYoZGlnZ2VyLl9tYXBbeC0xXVt5KzFdID09IG9sZFRpbGUpIG1hcFt4LTFdW3krMV0uc2V0KG5ld1RpbGUsIGZhbHNlLCBmYWxzZSk7XHJcblx0XHRpZihkaWdnZXIuX21hcFt4LTFdW3ktMV0gPT0gb2xkVGlsZSkgbWFwW3gtMV1beS0xXS5zZXQobmV3VGlsZSwgZmFsc2UsIGZhbHNlKTtcclxuXHR9XHRcdFxyXG5cdFxyXG5cdC8vdmFyIG9uY2UgPSB0cnVlO1x0XHJcbiAgICBkaWdnZXIuY3JlYXRlKCh4LCB5LCB2YWx1ZSkgPT4ge1x0XHRcdFx0XHJcblx0XHQvL9C/0L7QuNGB0Log0LLQuNC00LjQvNGL0YUg0YHRgtC10L1cclxuXHRcdGlmKHZhbHVlID09IFRpbGVUeXBlLkZsb29yKSB7XHRcdFx0XHJcblx0XHRcdGNoZWNrTmVpZ2hib3JUaWxlcyhkaWdnZXIsIHgsIHksIHRoaXMubWFwLCBUaWxlVHlwZS5FbXB0eSwgVGlsZVR5cGUuV2FsbCk7XHJcblx0XHRcdHRoaXMubWFwW3hdW3ldLnR5cGUgPSB2YWx1ZTtcdFx0XHJcblx0XHR9XHRcdFxyXG4gICAgfSk7XHJcblx0XHRcclxuXHQvL2NvbnNvbGUubG9nKHRoaXMubWFwKTtcdFxyXG5cdFx0XHJcblx0dmFyIHJvb20sIHJvb21zID0gZGlnZ2VyLmdldFJvb21zKCk7XHJcblx0dmFyIHNwYXduUm9vbSwgbGFzdFggPSBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUjsgXHJcblx0dmFyIG4saSxqO1xyXG5cdGZvcihuPTA7IG4gPCByb29tcy5sZW5ndGg7IG4rKykge1xyXG5cdFx0cm9vbSA9IHJvb21zW25dO1xyXG5cdFx0Ly/QstGL0LHQuNGA0LDQtdC8INC60YDQsNC50L3RjtGOINGB0LvQtdCy0LAg0LrQvtC80L3QsNGC0YMg0LTQu9GPINGB0L/QsNCy0L3QsFxyXG5cdFx0aWYocm9vbS5feDEgPCBsYXN0WCkge1xyXG5cdFx0XHRsYXN0WCA9IHJvb20uX3gxO1xyXG5cdFx0XHRzcGF3blJvb20gPSByb29tO1xyXG5cdFx0fSBcclxuXHRcdC8v0LTQstC10YDQuFxyXG5cdFx0cm9vbS5nZXREb29ycygoeCwgeSkgPT4ge1xyXG5cdFx0XHRpZihST1QuUk5HLmdldFBlcmNlbnRhZ2UoKSA+IDMwKSB7XHJcblx0XHRcdFx0dGhpcy5tYXBbeF1beV0ub2JqID0gbmV3IERvb3IodGhpcywgeCwgeSk7XHRcdFx0XHRcclxuXHRcdFx0fVx0XHRcdFx0XHJcblx0XHR9KTtcclxuXHR9XHJcblx0XHJcblx0dGhpcy5hdXRvVGlsaW5nQW5kRGVjb3IodGhpcy5tYXApO1xyXG5cdHRoaXMuc3Bhd25Qb2ludCA9IHNwYXduUm9vbS5nZXRDZW50ZXIoKTtcclxufVxyXG5cclxuV29ybGQucHJvdG90eXBlLmlzVmlzaWJsZSA9IGZ1bmN0aW9uKGksIGopIHsgXHJcblx0aWYoaT4wICYmIGo+MCAmJiBpPHRoaXMuc2l6ZVggJiYgajx0aGlzLnNpemVZICYmIHRoaXMubWFwW2ldW2pdLnZpc2libGUpXHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRyZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbldvcmxkLnByb3RvdHlwZS5nZXRJdGVtID0gZnVuY3Rpb24oaSwgaikgeyBcclxuXHRyZXR1cm4gdGhpcy5tYXBbaV1bal0uaXRlbTtcclxufVxyXG5Xb3JsZC5wcm90b3R5cGUuc2V0SXRlbSA9IGZ1bmN0aW9uKGksIGosIGl0ZW0pIHsgXHJcblx0dGhpcy5tYXBbaV1bal0uaXRlbSA9IGl0ZW07XHJcbn1cclxuV29ybGQucHJvdG90eXBlLmdldE9iaiA9IGZ1bmN0aW9uKGksIGopIHtcclxuXHRpZihpPjAgJiYgaj4wICYmIGk8dGhpcy5zaXplWCAmJiBqPHRoaXMuc2l6ZVkpIFxyXG4gICAgXHRyZXR1cm4gdGhpcy5tYXBbaV1bal0ub2JqO1xyXG5cdHJldHVybiBudWxsO1xyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdvcmxkIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==