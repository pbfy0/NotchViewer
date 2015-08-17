// ==UserScript==
// @name         NotchViewer
// @namespace    http://pbfy0.com/
// @version      1.20
// @description  Show notches on the brawlhalla ranked page
// @author       pbfy0
// @match        *://*.brawlhalla.com/rankings/*
// @grant        none
// @updateURL    https://pbfy0.github.io/NotchViewer/notchviewer.user.js
// @downloadURL  https://pbfy0.github.io/NotchViewer/notchviewer.user.js
// ==/UserScript==

var b = "https://pbfy0.github.io/NotchViewer/img/"
var notch_begin = b + "notch_begin.png";
var notch_end = b + "notch_end.png";
var notch_segment = b + "notch_segment.png";
var bgimg = b + "bg_gray.png";
var css = ".notches img {margin-left: -11px;}.notches img:first-child {margin-left: 0;}.notches img:nth-child(2) {margin-left: -12px;}.notches {display: inline-block; min-width: 69px; min-height: 20px; margin-left: 5px; background-image: url(\"" + bgimg + "\");background-repeat: no-repeat;} tr:nth-child(3) > th:nth-child(3) {width: 540px !important} .bhicon {float: none !important; display: inline-block;}"

function o(a, b){
	for(var i in b){
		a[i] = b[i];
	}
	return a;
}
function i_src(src){
	return o(document.createElement("img"), {src: src});
}
function dom_for_notches(n){
	var el = document.createElement("div");
	el.className = "notches";
	if(n >= 1) el.appendChild(i_src(notch_begin));
	for(var i = 2; i <= 4 && i <= n; i++){
		el.appendChild(i_src(notch_segment));
	}
	if(n == 5) el.appendChild(i_src(notch_end));
	return el;
}

function elo2notch(elo, tier){
	if(elo > 2000) return 0x50;
	if(elo > 1936) return 0x45;
	if(elo > 1872) return 0x44;
	if(elo > 1808) return 0x43;
	if(elo > 1744) return 0x42;
	if(elo > 1680) return 0x41;
	if(elo >= 1632 && tier == "platinum") return 0x40;
	if(elo > 1632) return 0x35;
	if(elo > 1584) return 0x34;
	if(elo > 1536) return 0x33;
	if(elo > 1488) return 0x32;
	if(elo > 1440) return 0x31;
	if(elo >= 1408 && tier == "gold") return 0x30;
	if(elo > 1408) return 0x25;
	if(elo > 1376) return 0x24;
	if(elo > 1344) return 0x23;
	if(elo > 1312) return 0x22;
	if(elo > 1280) return 0x21;
	if(elo >= 1232 && tier == "silver") return 0x20;
	if(elo > 1232) return 0x15;
	if(elo > 1184) return 0x14;
	if(elo > 1136) return 0x13;
	if(elo > 1088) return 0x12;
	if(elo > 1040) return 0x11;
	if(elo >= 976 && tier == "bronze") return 0x10;
	if(elo > 976) return 0x05;
	if(elo > 912) return 0x04;
	if(elo > 848) return 0x03;
	if(elo > 784) return 0x02;
	if(elo > 720) return 0x01;
	if(elo >= 200 && tier == "tin") return 0x00;
}

var x = Array.prototype.slice.call(document.getElementsByTagName("tr"));
for(var i = 0; i < x.length; i++){
	var y = x[i];
	if(y.id == "rheader") continue;
	var tier = y.children[3].children[0].classList[1].substr(4);
	if(tier == "diamond") continue;
	var elo = parseInt(y.children[5].textContent, 10);
	var notches = elo2notch(elo, tier) & 0xf;
	y.children[3].appendChild(dom_for_notches(notches));
}

document.head.appendChild(o(document.createElement("style"), {innerHTML: css}));
