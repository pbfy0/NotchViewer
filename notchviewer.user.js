// ==UserScript==
// @name         NotchViewer
// @namespace    http://pbfy0.com/
// @version      1.16
// @description  Show notches on the brawlhalla ranked page
// @author       pbfy0
// @match        *://*.brawlhalla.com/rankings/*
// @grant        none
// @updateURL    https://pbfy0.github.io/NotchViewer/notchviewer.user.js
// @downloadURL  https://pbfy0.github.io/NotchViewer/notchviewer.user.js
// ==/UserScript==

var bgimg = "data:image/png;base64,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";

function p_url(str){
	var x = atob(str);
	var ua = new Uint8Array(x.length);
	for(var i = 0; i < x.length; i++){
		ua[i] = x.charCodeAt(i);
	}
	var y = new Blob([ua], {type: "image/png"});
	return o(URL.createObjectURL(y), {blob: y});
}

var notch_begin = p_url("iVBORw0KGgoAAAANSUhEUgAAABUAAAAUCAYAAABiS3YzAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wgQDSYIigiAQQAABLtJREFUOMuV0ttvk3UAxvHnPbfr1tM61g0Gm2tY67ZOXDsGOwAmQjQBvVDjBYlB2RCIXHBjNCiZMdGoN4gHCCOAQIjRmKhxAWIQB3XgOI3Rreu7ru3Wbuu6ntbD2q7v+/OCoFcS9v0DPnkuHgoAXq8HXnnTgml/zNrYUnvaUK5tmvaH++4OiHt5gQ0c/CYMANhWA7y1tw4BX7SqdIV6UyKWHmxqqRn78cwgjl4u4FH0DgvwWlc9Ar6opbm97qvmNvO6p9ZW0AJdeFGn4T5ZKpBiANheA+zeZ0ZwMl5n77Scfm677eT6zfXnxoanO7+8dBbvbOX+RZnPDzdi0jNfb+u09DbaTW0cR8N5YwQzngBFCEoyWfm8EMsk39hnRsAfM9s7zL1NLaZN+jI1YyjXVipVwpaL534Yf+9kWJy9+jFu+wmYNgv3bHO7+ZjVXruBF1iM3RqDz+mFLBMs5si1dJZc2PLCmnzwIXjC2mJqJ0TGnDcAlUaFskq9VqkSOi+ePew+dDoiAgDz7v7GK43NNet4noXX6cP4PRGSJCOZkW8kF+X91bWGmaA/ZrZ1mHutLaZ2CgRD/UOITvhRzOQhaHUoNerVvMButK0u3PjlWjzIIhmtTo05sSAT0ITHM5vXIZ+XMDI05R3qux+kaNps6zT3Wu2mNoamcP/6MGZ9MyjT8shF5hEHoKszw1hlqFbrijYCuMn6/PH3eTn7gVHP6ZQ8D7XKiGLTKqhLNa+yHEvpDCWrrXbTRpal4Rx4gOB4AIRQiCULmXI9V0RF5hFxuTCXK/IsxDIOAGCyuaXBilI+rBDoDhVPlLlEHBTHQWsso8tX6htWrjFUcRwD16AL/hEfCAEyWdkZihUOEBmCwNPm6WBCHB6e6d796ZSjp6cHbItFJZ27HDm1c2spBSg+M+qgW/CIoCgKJcYKSAUJrsFReB9MQJYJ0ll5JJGWujQqZmBsKuuIJqVL2bw8tK3dOHBgh/Lhpf4cWsTO5zXkV0f83ioDN6cQmI5iBa3MJ5MAy8MzOoWJ/8DRRErq1quZv4a9WZSq2bRBy90CEPjpShhHf04DAFgAGPo7iu5dZjk4GRuUdSujuoZKPZFkiMNeTHlmH4GuRErqKtOyDtdkDl98H8f/Rb/0NLDr7XqEgvH6DZstx60b6kwKnQ5TkxEEvKFHoDuRlvcYtKxDDOTw0XdRPC6q79smjI+GGmwd5hMNttpWXmDhvuPG+F0RkiQhnSXuREruqjAw/U5vDj1nHg8CAOv1RK22TsvxRlttK8czEO+4Id51QyrIyOSImEjLe4ylTL/Ln38iEADoqoqiQ9UVilYpEcGs6EdkNopibQnyMhOMLRS6V2joqy5/Hh+eijwRCABsLplKR0WR5BU0BY6H1b4WvEYHr3uGv+0YU399xENdj4M8sQiAWW8RblMUKkuKmHqelqildAoKnRZlVeUqhqVbtZrs730DyfByUFop0AGnd/GAGMheSGUJkRYziLtdkBbTWFGpX1OsUdYuBwQAJhpfhN1SnJmcy/czNFVRUsQ2cGSJzi0kEYou+XwT88d/cyRCy0ID8wR9N9N4ub0kMzWXd9A0VUcIZZ4NpcKu0dDBI8eCf4Tzy1v6D/WFQUCHX6SJAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE1LTA4LTE2VDEzOjExOjMzLTA0OjAwBLNHXwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxNS0wOC0xNlQxMzozODowOC0wNDowMF0fPvEAAAAASUVORK5CYII=");
var notch_end = p_url("iVBORw0KGgoAAAANSUhEUgAAABUAAAAUCAYAAABiS3YzAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wgQDSYIigiAQQAABJFJREFUOMuVk+tvU3Uchz/n1nNO262HtWvXXbtLx7Yyih1MFuImI5EoGhUdRhJjJAqTgIJgJIbEBGNiTEDwDq+Ul74QNb4gxOAFAnMbwsbKxrauHbu4tV230/b0tDs95+cLvERfKPv+AU+e5Pt8KKzwujpE7HzSi6UlNVDXUHoGIPTIwGR37Wpn74n3+vDdLYBZKXT/djuiMwl3U730kb+t4YGymhI3yzH+wd5wzyOPe6NLo7+tDHp8rxP7n3JidlF/3VNM7+Kgw+yww+6Sykw8u/5m/2TPQ4/WRNmVms4lNOg60nmd6GpsnqE4FlKtF43rPK0EOH39ymj3ikwv9ClwrwImZ9VBUeSq7Q5rM5VTQUCBs1phsQgVySWFW5HpBidQWVMMdmrJVdJQV+byV4KhCcJDE5jrDUHLEyzEVPWeoesk4OABL2buLFbf39F42tdS08ELHMLBMELBO8hll5HKGOeTin6Svhdgkwgceq0Wc9NyVWt746e+lpotfwJHeoexnNOgZHExmSF7eZ6Z+F/TcgCHD3swNyOXt3X6PlnTUrNVEE2YGJrA8C+3oC3noeRwSVb0lwUTFQ7NLP93UoUA3n2zCvH5lHvj5qaPmzfUPiZaeMSn5rAUk2GxWZDNU9GZ2dSLosAOXO2J4bML6t/QnT6gtgBsKQNWzcAoAvDOkQrE5lOujZ2+D9e21m03WwWEg2Es3B6Dp86FKn8DnOVOHgTa0LXI5br6Vbnzvcpd6Pv7XJCKOWnbM2uObeuqP9DeVsCP9EQH3BW0o22L75S/1dtlKRSoSDCC4d5hWDgDJi0NUDQKS4ppm90a4AW2MHht8vL2zqJl5tQ+J+RU3txYbX67udn9Sn2g3lsgWTrKKqGtbq543t/qfdZqE6nIUATDvbeg5TTCcYxhszC0lpQBmoZUUkxLdmuAF1nzzf7IFeaJTVaYBSbQUCUctzE5ETQNe4VbcLikzeXVTr+1UKQjwTCG//hyJkt+XUjqJ0SebjTzsGmyDIqmYXM7aZu9oEUQOTubNwgMA4uaRpYMXbelJ8MAISiu8nAA/pFNJkcGZcXo7txU0t83EM8Wuso+cDqtTE7JYK5/GJoOE9GyLzCdAREnv4wlAqvFhGCi2y0CbdaSMggBZqcTGOkbgbasIZMjwaRivGS1cn0jE6nKtRsbjtSvb6wVHQ5EQvMYuxFCdDpuxKPpS8yF/gxefboIp7+J3WzyiFGRZ9rNPCUqiUWMjcwhm9Og5sjtpGLsttuYq4EH14EQ7L6vzbvHYhUwdn0UocEQ9DxBOkvOJRXSTQPAsbMJ7NhcZJz5NvbF6FT2jbiclw3DgK7rULNkXE4be0od7OXx6WWUeZwQRM5q4u8uanxgHHnNQEo1vpbTxn4TR0391elPAyp2PSyRi9eSA247F9d0Up1I6uOyYhysKeV+HAzl8NbnC+j0myAvKlIurWy9E5wQs1kNimqck9PGPhNHzX7flwL17xUd2iFB1wnjkNhijqG0xZSRMHEgx84mAABHu8xYWNQYX5PULfD0c4aBMUU1jrIsNfnVzyn8cEPF793yF8ZGXckqAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE1LTA4LTE2VDEzOjExOjMzLTA0OjAwBLNHXwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxNS0wOC0xNlQxMzozODowOC0wNDowMF0fPvEAAAAASUVORK5CYII=");
var notch_segment = p_url("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");
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
