window.__require = function t(e, o, n) {
function a(i, c) {
if (!o[i]) {
if (!e[i]) {
var s = i.split("/");
s = s[s.length - 1];
if (!e[s]) {
var u = "function" == typeof __require && __require;
if (!c && u) return u(s, !0);
if (r) return r(s, !0);
throw new Error("Cannot find module '" + i + "'");
}
i = s;
}
var p = o[i] = {
exports: {}
};
e[i][0].call(p.exports, function(t) {
return a(e[i][1][t] || t);
}, p, p.exports, t, e, o, n);
}
return o[i].exports;
}
for (var r = "function" == typeof __require && __require, i = 0; i < n.length; i++) a(n[i]);
return a;
}({
CommanderInfo: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "60a6cvHU49AQp7ED8cthwx0", "CommanderInfo");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.default = function() {};
cc._RF.pop();
}, {} ],
CommanderItem: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "d32bcb7QqxFSI0Bpgjajaox", "CommanderItem");
var n, a = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var a, r = arguments.length, i = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (r < 3 ? a(i) : r > 3 ? a(e, o, i) : a(e, o)) || i);
return r > 3 && i && Object.defineProperty(e, o, i), i;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = cc._decorator, c = i.ccclass, s = i.property, u = function(t) {
a(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.bg = null;
e.sprite = null;
return e;
}
e.prototype.loadSprite = function(t, e) {
var o = this;
this.picName = t;
cc.resources.load("images/commander/" + t, cc.SpriteFrame, function(t, e) {
t || (o.sprite.spriteFrame = e);
});
this.rank = e;
this.bg.active = !1;
};
e.prototype.drag = function(t) {
if (this.selectedCommander) {
this.selectedCommander.node.active = !0;
this.selectedCommander.node.x = this.selectedCommander.startPoint.x;
this.selectedCommander.node.y = this.selectedCommander.startPoint.y;
}
this.selectedCommander = t;
t.node.active = !1;
this.loadSprite(t.picName, t.rank);
};
r([ s(cc.Node) ], e.prototype, "bg", void 0);
r([ s(cc.Sprite) ], e.prototype, "sprite", void 0);
return r([ c ], e);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {} ],
ConfigData: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "40a79V/zAxEo5OExwnAcvGE", "ConfigData");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = t("./data/CommanderInfo"), a = t("./data/GuantoInfo"), r = t("./data/MapInfo"), i = function() {
function t() {}
t.reset = function() {
throw new Error("Method not implemented.");
};
t.init = function(t, e, o) {
this.guantuList = [];
this.guantuTiaozhanList = [];
for (var i = t.split("\r\n"), c = 1; c < i.length; c++) if (!((d = i[c].split("\t")).length < 2)) {
var s = new a.default();
s.id = +d[0];
s.name = d[1].split(" ")[0];
s.map = d[2];
s.factors = [];
for (var u = 3; u <= 6; u++) d[u] && s.factors.push(d[u]);
d[8] && (s.author = d[8]);
s.id < 158 && this.guantuList.push(s);
this.guantuTiaozhanList.push(s);
}
this.mapList = [];
i = e.split("\r\n");
for (c = 1; c < i.length; c++) if (!((d = i[c].split(",")).length < 2)) {
var p = new r.default();
p.id = c;
p.name = d[0];
p.score = +d[1];
this.mapList.push(p);
}
this.commanderList = [];
i = o.split("\r\n");
for (c = 1; c < i.length; c++) {
var d;
if (!((d = i[c].split(",")).length < 2)) {
var l = new n.default();
l.id = c;
l.name = d[0];
l.rankHuigui = d[1];
this.commanderList.push(l);
}
}
};
return t;
}();
o.default = i;
cc._RF.pop();
}, {
"./data/CommanderInfo": "CommanderInfo",
"./data/GuantoInfo": "GuantoInfo",
"./data/MapInfo": "MapInfo"
} ],
FactorItem: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "699bfT+/kJGZ4mM1qsH6gCY", "FactorItem");
var n, a = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var a, r = arguments.length, i = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (r < 3 ? a(i) : r > 3 ? a(e, o, i) : a(e, o)) || i);
return r > 3 && i && Object.defineProperty(e, o, i), i;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = cc._decorator, c = i.ccclass, s = i.property, u = function(t) {
a(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.bg = null;
e.sprite = null;
return e;
}
e.prototype.loadSprite = function(t) {
var e = this;
this.picName = t;
t ? cc.resources.load("images/factor/" + t, cc.SpriteFrame, function(t, o) {
t || (e.sprite.spriteFrame = o);
}) : this.sprite.spriteFrame = null;
};
r([ s(cc.Node) ], e.prototype, "bg", void 0);
r([ s(cc.Sprite) ], e.prototype, "sprite", void 0);
return r([ c ], e);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {} ],
GuantoInfo: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "c785bCnGglNHJn5hDp5yCBz", "GuantoInfo");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.default = function() {};
cc._RF.pop();
}, {} ],
GuantuFactorItem: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "b864aryCM1PC6LvZCYtQ5PV", "GuantuFactorItem");
var n, a = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var a, r = arguments.length, i = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (r < 3 ? a(i) : r > 3 ? a(e, o, i) : a(e, o)) || i);
return r > 3 && i && Object.defineProperty(e, o, i), i;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = t("./FactorItem"), c = cc._decorator, s = c.ccclass, u = c.property, p = function(t) {
a(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.item1 = [ null, null, null ];
e.txt = null;
e.txt2 = null;
return e;
}
e.prototype.setData = function(t) {
this.data = t;
this.txt.string = t.name;
for (var e = 0; e < this.item1.length; e++) {
var o = this.item1[e];
e < t.factors.length && t.factors[e] ? o.loadSprite(t.factors[e]) : o.node.active = !1;
}
t.author ? this.txt2.string = "by: " + t.author : this.txt2.node.active = !1;
};
r([ u([ i.default ]) ], e.prototype, "item1", void 0);
r([ u(cc.Label) ], e.prototype, "txt", void 0);
r([ u(cc.Label) ], e.prototype, "txt2", void 0);
return r([ s ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {
"./FactorItem": "FactorItem"
} ],
GuantuUI: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "f3248t8UOtMhbeK9CrKUu0D", "GuantuUI");
var n, a = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var a, r = arguments.length, i = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (r < 3 ? a(i) : r > 3 ? a(e, o, i) : a(e, o)) || i);
return r > 3 && i && Object.defineProperty(e, o, i), i;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = t("../HuiguiData"), c = t("../Main"), s = t("./view/CommanderItem"), u = t("./view/GuantuFactorItem"), p = t("./view/MapItem"), d = t("./view/MatchItem"), l = cc._decorator, f = l.ccclass, h = l.property, m = function(t) {
a(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.matchContainer = null;
e.factorContainer = null;
e.mapContainer = null;
e.commanderContainer = null;
e.txtPlayer = null;
e.txtMessage = null;
e.btnStart = null;
e.btnRestart = null;
e.rankArr = [ "S", "A", "B", "C", "O" ];
return e;
}
e.prototype.initUI = function() {
var t = i.default;
this.txtPlayer.string = "当前选手: " + t.playerName;
for (var e = 0; e < t.matchList.length; e++) {
var o = t.matchList[e], n = cc.instantiate(c.default.instance.matchPrefab), a = n.getComponent(d.default);
a.setData(o);
n.x = 100 + 500 * e;
n.y = 0;
this.matchContainer.addChild(n);
a.mapItem.loadSprite(t.randomMaps[e].name);
}
for (e = 0; e < t.randomGuantus.length; e++) {
var r = t.randomGuantus[e], l = cc.instantiate(c.default.instance.guantufactorPrefab);
l.getComponent(u.default).setData(r);
l.x = 253 * e;
l.y = 0;
this.factorContainer.addChild(l);
l.on(cc.Node.EventType.MOUSE_DOWN, this.onGuantuDown, this);
l.on(cc.Node.EventType.MOUSE_UP, this.onGuantuUp, this);
l.on(cc.Node.EventType.MOUSE_MOVE, this.onGuantuMove, this);
}
for (e = 0; e < t.randomCommanders.length; e++) {
var f = t.randomCommanders[e], h = cc.instantiate(c.default.instance.commanderPrefab);
h.getComponent(s.default).loadSprite(f.name, f.rankHuigui);
h.x = e % 10 * 80;
h.y = 30 - 80 * Math.floor(e / 10);
this.commanderContainer.addChild(h);
cc.log(e, f.name);
h.on(cc.Node.EventType.MOUSE_DOWN, this.onCmdDown, this);
h.on(cc.Node.EventType.MOUSE_UP, this.onCmdUp, this);
h.on(cc.Node.EventType.MOUSE_MOVE, this.onCmdMove, this);
}
for (e = 0; e < t.randomMaps.length; e++) {
var m = t.randomMaps[e], y = cc.instantiate(c.default.instance.mapPrefab);
y.getComponent(p.default).loadSprite(m.name);
y.x = 210 * e;
y.y = 0;
this.mapContainer.addChild(y);
y.on(cc.Node.EventType.MOUSE_DOWN, this.onMapDown, this);
y.on(cc.Node.EventType.MOUSE_UP, this.onMapUp, this);
y.on(cc.Node.EventType.MOUSE_MOVE, this.onMapMove, this);
}
};
e.prototype.onGuantuDown = function(t) {
this.dragGuantu = t.target.getComponent(u.default);
this.dragPoint = cc.v2(t.getLocationX() - this.dragGuantu.node.x, t.getLocationY() - this.dragGuantu.node.y);
this.dragGuantu.startPoint = cc.v2(this.dragGuantu.node.x, this.dragGuantu.node.y);
};
e.prototype.onGuantuMove = function(t) {
if (this.dragGuantu) {
this.dragGuantu.node.x = t.getLocationX() - this.dragPoint.x;
this.dragGuantu.node.y = t.getLocationY() - this.dragPoint.y;
}
};
e.prototype.onGuantuUp = function(t) {
for (var e = 0, o = this.matchContainer.children; e < o.length; e++) {
var n = o[e], a = this.checkEvtToNode(t, n);
if (a) {
var r = n.getComponent(d.default);
a.y > -200 ? r.dragGuantu(this.dragGuantu) : r.dragGuantu2(this.dragGuantu);
break;
}
}
this.dragGuantu = null;
this.dragPoint = null;
};
e.prototype.onCmdDown = function(t) {
this.dragCommander = t.target.getComponent(s.default);
this.dragPoint = cc.v2(t.getLocationX() - this.dragCommander.node.x, t.getLocationY() - this.dragCommander.node.y);
this.dragCommander.startPoint = cc.v2(this.dragCommander.node.x, this.dragCommander.node.y);
};
e.prototype.onCmdMove = function(t) {
if (this.dragCommander) {
this.dragCommander.node.x = t.getLocationX() - this.dragPoint.x;
this.dragCommander.node.y = t.getLocationY() - this.dragPoint.y;
}
};
e.prototype.onCmdUp = function(t) {
for (var e = 0, o = this.matchContainer.children; e < o.length; e++) {
var n = o[e].getComponent(d.default);
if (this.checkEvtToNode(t, n.cmd1.node)) {
n.cmd1.drag(this.dragCommander);
break;
}
if (n.cmd2.node.active && this.checkEvtToNode(t, n.cmd2.node)) {
n.cmd2.drag(this.dragCommander);
break;
}
}
this.dragCommander = null;
this.dragPoint = null;
};
e.prototype.onMapDown = function(t) {
this.dragMap = t.target.getComponent(p.default);
this.dragPoint = cc.v2(t.getLocationX() - this.dragMap.node.x, t.getLocationY() - this.dragMap.node.y);
this.dragMap.startPoint = cc.v2(this.dragMap.node.x, this.dragMap.node.y);
};
e.prototype.onMapMove = function(t) {
if (this.dragMap) {
this.dragMap.node.x = t.getLocationX() - this.dragPoint.x;
this.dragMap.node.y = t.getLocationY() - this.dragPoint.y;
}
};
e.prototype.onMapUp = function(t) {
for (var e = 0, o = this.matchContainer.children; e < o.length; e++) {
var n = o[e].getComponent(d.default);
if (this.checkEvtToNode(t, n.mapItem.node)) {
n.mapItem.drag(this.dragMap);
break;
}
}
this.dragMap = null;
this.dragPoint = null;
};
e.prototype.checkEvtToNode = function(t, e) {
var o = t.getLocation();
if ((o = e.convertToNodeSpaceAR(o)).x > 0 && o.x < e.width && o.y < 0 && o.y > -e.height) return o;
};
e.prototype.onStartClick = function() {
for (var t = 0; t < this.matchContainer.children.length; t++) {
var e = this.matchContainer.children[t].getComponent(d.default), o = e.cmd1.rank, n = e.cmd2.rank;
if (!o || !n) {
this.showError("第" + (t + 1) + "场比赛未选择指挥官");
return;
}
if (this.rankArr.indexOf(o) + this.rankArr.indexOf(n) < 4) {
this.showError("第" + (t + 1) + "场比赛指挥官等级为" + o + n);
return;
}
}
for (var a = [], r = 0, i = this.matchContainer.children; r < i.length; r++) {
var s = i[r].getComponent(d.default);
s.toGame();
a.push(s);
}
this.node.parent = null;
c.default.instance.toResult(a);
};
e.prototype.onRestartClick = function() {
this.node.active = !1;
c.default.instance.toStart();
};
e.prototype.showError = function(t) {
this.txtMessage.string = t;
this.txtMessage.node.active = !0;
};
r([ h(cc.Node) ], e.prototype, "matchContainer", void 0);
r([ h(cc.Node) ], e.prototype, "factorContainer", void 0);
r([ h(cc.Node) ], e.prototype, "mapContainer", void 0);
r([ h(cc.Node) ], e.prototype, "commanderContainer", void 0);
r([ h(cc.Label) ], e.prototype, "txtPlayer", void 0);
r([ h(cc.Label) ], e.prototype, "txtMessage", void 0);
r([ h(cc.Button) ], e.prototype, "btnStart", void 0);
r([ h(cc.Button) ], e.prototype, "btnRestart", void 0);
return r([ f ], e);
}(cc.Component);
o.default = m;
cc._RF.pop();
}, {
"../HuiguiData": "HuiguiData",
"../Main": "Main",
"./view/CommanderItem": "CommanderItem",
"./view/GuantuFactorItem": "GuantuFactorItem",
"./view/MapItem": "MapItem",
"./view/MatchItem": "MatchItem"
} ],
HuiguiData: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "f7a89aPeBxLm5xFph6qhI9p", "HuiguiData");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = t("./ConfigData"), a = t("./data/MatchData"), r = function() {
function t() {}
t.initGuantuData = function(t, e) {
this.playerName = t;
this.gameType = e ? "官突模式" : "官突挑战";
var o = e ? n.default.guantuTiaozhanList : n.default.guantuList;
this.randomGuantus = [];
for (var r = 0; r < 4; r++) {
var i = Math.floor(Math.random() * o.length);
this.randomGuantus.push(o[i]);
o.splice(i, 1);
}
this.randomCommanders = [];
var c = n.default.commanderList;
this.randomCommanders = this.extractCommandersByRank(c, "S", 5);
this.randomCommanders = this.randomCommanders.concat(this.extractCommandersByRank(c, "A", 5), this.extractCommandersByRank(c, "B", 10), this.extractCommandersByRank(c, "C", 5), this.extractCommandersByRank(c, "O", 5));
this.randomMaps = [];
for (r = 0; r < 3; r++) {
i = Math.floor(Math.random() * n.default.mapList.length);
this.randomMaps.push(n.default.mapList[i]);
n.default.mapList.splice(i, 1);
}
this.matchList = [ new a.default(0, !0, 3), new a.default(1, !0, 3) ];
};
t.extractCommandersByRank = function(t, e, o) {
for (var n = [], a = 0; a < o; a++) {
var r = Math.floor(Math.random() * t.length);
if (t[r].rankHuigui === e) {
n.push(t[r]);
t.splice(r, 1);
} else a--;
}
return n;
};
return t;
}();
o.default = r;
cc._RF.pop();
}, {
"./ConfigData": "ConfigData",
"./data/MatchData": "MatchData"
} ],
Main: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "18e84Jb2o9IxpoLAiSDekkD", "Main");
var n, a = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var a, r = arguments.length, i = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (r < 3 ? a(i) : r > 3 ? a(e, o, i) : a(e, o)) || i);
return r > 3 && i && Object.defineProperty(e, o, i), i;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = t("./ConfigData"), c = t("./guantu/GuantuUI"), s = t("./guantu/view/ResultUI"), u = cc._decorator, p = u.ccclass, d = u.property, l = function(t) {
a(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.guantuTxt = null;
e.mapTxt = null;
e.commanderTxt = null;
e.startUI = null;
e.guantuUI = null;
e.resultUI = null;
e.mapPrefab = null;
e.factorPrefab = null;
e.guantufactorPrefab = null;
e.commanderPrefab = null;
e.matchPrefab = null;
e.btnResetGame = null;
return e;
}
o = e;
e.prototype.onLoad = function() {
cc.game.setFrameRate(59.9);
cc.debug.setDisplayStats(!1);
o.instance = this;
this.toStart();
};
e.prototype.toStart = function() {
i.default.init(this.guantuTxt.text, this.mapTxt.text, this.commanderTxt.text);
var t = cc.instantiate(this.startUI);
this.node.addChild(t);
};
e.prototype.toGuantu = function() {
var t = cc.instantiate(this.guantuUI);
this.node.addChild(t);
t.getComponent(c.default).initUI();
};
e.prototype.toResult = function(t) {
var e = cc.instantiate(this.resultUI);
this.node.addChild(e);
e.getComponent(s.default).initUI(t);
};
var o;
r([ d(cc.TextAsset) ], e.prototype, "guantuTxt", void 0);
r([ d(cc.TextAsset) ], e.prototype, "mapTxt", void 0);
r([ d(cc.TextAsset) ], e.prototype, "commanderTxt", void 0);
r([ d(cc.Prefab) ], e.prototype, "startUI", void 0);
r([ d(cc.Prefab) ], e.prototype, "guantuUI", void 0);
r([ d(cc.Prefab) ], e.prototype, "resultUI", void 0);
r([ d(cc.Prefab) ], e.prototype, "mapPrefab", void 0);
r([ d(cc.Prefab) ], e.prototype, "factorPrefab", void 0);
r([ d(cc.Prefab) ], e.prototype, "guantufactorPrefab", void 0);
r([ d(cc.Prefab) ], e.prototype, "commanderPrefab", void 0);
r([ d(cc.Prefab) ], e.prototype, "matchPrefab", void 0);
r([ d(cc.Button) ], e.prototype, "btnResetGame", void 0);
return o = r([ p ], e);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {
"./ConfigData": "ConfigData",
"./guantu/GuantuUI": "GuantuUI",
"./guantu/view/ResultUI": "ResultUI"
} ],
MapInfo: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "5057dbcSjZFbKD1J6sgU9wB", "MapInfo");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.default = function() {};
cc._RF.pop();
}, {} ],
MapItem: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "72a6a3rxY5CYIJVuB6ZOj9k", "MapItem");
var n, a = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var a, r = arguments.length, i = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (r < 3 ? a(i) : r > 3 ? a(e, o, i) : a(e, o)) || i);
return r > 3 && i && Object.defineProperty(e, o, i), i;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = cc._decorator, c = i.ccclass, s = i.property, u = function(t) {
a(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.bg = null;
e.sprite = null;
return e;
}
e.prototype.loadSprite = function(t) {
var e = this;
this.picName = t;
cc.resources.load("images/maps/" + t, cc.SpriteFrame, function(t, o) {
t || (e.sprite.spriteFrame = o);
});
};
e.prototype.drag = function(t) {
if (this.selectedMap) {
this.selectedMap.node.active = !0;
this.selectedMap.node.x = this.selectedMap.startPoint.x;
this.selectedMap.node.y = this.selectedMap.startPoint.y;
}
this.selectedMap = t;
t.node.active = !1;
this.loadSprite(t.picName);
};
r([ s(cc.Node) ], e.prototype, "bg", void 0);
r([ s(cc.Sprite) ], e.prototype, "sprite", void 0);
return r([ c ], e);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {} ],
MatchData: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "0162bPcVEBGP5h8p6SO6Pnl", "MatchData");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.default = function(t, e, o) {
this.index = t;
this.isShuang = e;
this.factorCount = o;
this.factors = new Array(o).fill(null);
};
cc._RF.pop();
}, {} ],
MatchItem: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "b5969ScS0hAepiCG+G+OJIQ", "MatchItem");
var n, a = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var a, r = arguments.length, i = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (r < 3 ? a(i) : r > 3 ? a(e, o, i) : a(e, o)) || i);
return r > 3 && i && Object.defineProperty(e, o, i), i;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = t("./CommanderItem"), c = t("./FactorItem"), s = t("./MapItem"), u = cc._decorator, p = u.ccclass, d = u.property, l = function(t) {
a(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.title = null;
e.mapItem = null;
e.cmd1 = null;
e.cmd2 = null;
e.item1 = [ null, null, null ];
e.item2 = [ null, null, null ];
e.result = null;
e.btnWin1 = null;
e.btnWin2 = null;
e.btnLose = null;
return e;
}
e.prototype.onLoad = function() {
this.addEvents(!0);
};
e.prototype.addEvents = function(t) {
for (var e = 0, o = this.item1; e < o.length; e++) {
var n = o[e];
t ? n.node.on(cc.Node.EventType.MOUSE_DOWN, this.onItem1Click, this) : n.node.off(cc.Node.EventType.MOUSE_DOWN, this.onItem1Click, this);
}
for (var a = 0, r = this.item2; a < r.length; a++) {
n = r[a];
t ? n.node.on(cc.Node.EventType.MOUSE_DOWN, this.onItem2Click, this) : n.node.off(cc.Node.EventType.MOUSE_DOWN, this.onItem2Click, this);
}
};
e.prototype.setData = function(t) {
this.data = t;
this.title.string = "第" + (t.index + 1) + "场";
};
e.prototype.dragGuantu = function(t) {
if (this.selecteddGuanty) {
this.selecteddGuanty.node.active = !0;
this.selecteddGuanty.node.x = this.selecteddGuanty.startPoint.x;
this.selecteddGuanty.node.y = this.selecteddGuanty.startPoint.y;
}
this.selecteddGuanty = t;
t.node.active = !1;
for (var e = 0; e < this.item1.length; e++) {
var o = this.item1[e];
if (e < t.data.factors.length && t.data.factors[e]) {
o.loadSprite(t.data.factors[e]);
o.node.active = !0;
} else o.node.active = !1;
}
};
e.prototype.dragGuantu2 = function(t) {
if (this.selecteddGuanty2) {
this.selecteddGuanty2.node.active = !0;
this.selecteddGuanty2.node.x = this.selecteddGuanty2.startPoint.x;
this.selecteddGuanty2.node.y = this.selecteddGuanty2.startPoint.y;
}
this.selecteddGuanty2 = t;
t.node.active = !1;
for (var e = 0; e < this.item2.length; e++) {
var o = this.item2[e];
if (e < t.data.factors.length && t.data.factors[e]) {
o.loadSprite(t.data.factors[e]);
o.node.active = !0;
} else o.node.active = !1;
}
};
e.prototype.toGame = function() {
this.btnWin1.node.active = !0;
this.btnWin2.node.active = !0;
this.btnLose.node.active = !0;
var t = [ "P", "T", "Z" ], e = Math.floor(Math.random() * t.length);
this.title.string = "第" + (this.data.index + 1) + "场 " + this.mapItem.picName + " " + t[e];
this.addEvents(!1);
};
e.prototype.onWin1Click = function() {
this.btnWin1.node.active = !1;
this.btnWin2.node.active = !1;
this.btnLose.node.active = !1;
this.result.node.active = !0;
this.result.string = "胜利";
};
e.prototype.onWin2Click = function() {
this.btnWin1.node.active = !1;
this.btnWin2.node.active = !1;
this.btnLose.node.active = !1;
this.result.node.active = !0;
this.result.string = "带奖励胜利";
};
e.prototype.onLoseClick = function() {
this.btnWin1.node.active = !1;
this.btnWin2.node.active = !1;
this.btnLose.node.active = !1;
this.result.node.active = !0;
this.result.string = "失败";
};
e.prototype.onItem1Click = function() {
if (this.selecteddGuanty) {
this.selecteddGuanty.node.active = !0;
this.selecteddGuanty.node.x = this.selecteddGuanty.startPoint.x;
this.selecteddGuanty.node.y = this.selecteddGuanty.startPoint.y;
}
for (var t = 0; t < this.item1.length; t++) this.item1[t].loadSprite(null);
};
e.prototype.onItem2Click = function() {
if (this.selecteddGuanty2) {
this.selecteddGuanty2.node.active = !0;
this.selecteddGuanty2.node.x = this.selecteddGuanty2.startPoint.x;
this.selecteddGuanty2.node.y = this.selecteddGuanty2.startPoint.y;
}
for (var t = 0; t < this.item2.length; t++) this.item2[t].loadSprite(null);
};
r([ d(cc.Label) ], e.prototype, "title", void 0);
r([ d(s.default) ], e.prototype, "mapItem", void 0);
r([ d(i.default) ], e.prototype, "cmd1", void 0);
r([ d(i.default) ], e.prototype, "cmd2", void 0);
r([ d([ c.default ]) ], e.prototype, "item1", void 0);
r([ d([ c.default ]) ], e.prototype, "item2", void 0);
r([ d(cc.Label) ], e.prototype, "result", void 0);
r([ d(cc.Button) ], e.prototype, "btnWin1", void 0);
r([ d(cc.Button) ], e.prototype, "btnWin2", void 0);
r([ d(cc.Button) ], e.prototype, "btnLose", void 0);
return r([ p ], e);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {
"./CommanderItem": "CommanderItem",
"./FactorItem": "FactorItem",
"./MapItem": "MapItem"
} ],
ResultUI: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "e96dfIEIVNAraew6QO+OTeF", "ResultUI");
var n, a = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var a, r = arguments.length, i = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (r < 3 ? a(i) : r > 3 ? a(e, o, i) : a(e, o)) || i);
return r > 3 && i && Object.defineProperty(e, o, i), i;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = cc._decorator, c = i.ccclass, s = i.property, u = function(t) {
a(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.txtPlayer = null;
e.matchContainer = null;
e.btnRestart = null;
return e;
}
e.prototype.initUI = function(t) {
for (var e = 0; e < t.length; e++) {
var o = t[e];
o.node.x = 500 * e;
o.node.y = 0;
o.node.parent = null;
this.matchContainer.addChild(o.node);
}
};
r([ s(cc.Label) ], e.prototype, "txtPlayer", void 0);
r([ s(cc.Node) ], e.prototype, "matchContainer", void 0);
r([ s(cc.Button) ], e.prototype, "btnRestart", void 0);
return r([ c ], e);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {} ],
StartUI: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "4f691LwwIlNN46BpQN3B+ia", "StartUI");
var n, a = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var a, r = arguments.length, i = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (r < 3 ? a(i) : r > 3 ? a(e, o, i) : a(e, o)) || i);
return r > 3 && i && Object.defineProperty(e, o, i), i;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = t("./HuiguiData"), c = t("./Main"), s = cc._decorator, u = s.ccclass, p = s.property, d = function(t) {
a(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.txtPlayerName = null;
return e;
}
e.prototype.onStart = function() {};
e.prototype.onGuantuClick = function() {
i.default.initGuantuData(this.txtPlayerName.string, !1);
this.node.parent = null;
c.default.instance.toGuantu();
};
e.prototype.onGuantuTiaozhanClick = function() {
i.default.initGuantuData(this.txtPlayerName.string, !0);
this.node.parent = null;
c.default.instance.toGuantu();
};
r([ p(cc.EditBox) ], e.prototype, "txtPlayerName", void 0);
return r([ u ], e);
}(cc.Component);
o.default = d;
cc._RF.pop();
}, {
"./HuiguiData": "HuiguiData",
"./Main": "Main"
} ]
}, {}, [ "ConfigData", "HuiguiData", "Main", "StartUI", "CommanderInfo", "GuantoInfo", "MapInfo", "MatchData", "GuantuUI", "CommanderItem", "FactorItem", "GuantuFactorItem", "MapItem", "MatchItem", "ResultUI" ]);