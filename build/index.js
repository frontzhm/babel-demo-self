"use strict";

// import "babel-polyfill";
var a = 1;

if (true) {
	var _a = 8;
	var b = 0;
}

console.log(a);
var obj = { a: 1 };
var obj1 = { b: 1 };
console.log(Object.assign({}, obj, obj1));

var d = React.createElement(
	"h1",
	null,
	"ds"
);