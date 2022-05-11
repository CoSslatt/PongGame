const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

import { drawWalls, wallMoveY } from "./components/walls.js";

window.addEventListener("load", () => {
	canvas.width = window.innerWidth - 750;
	canvas.height = window.innerHeight - 250;
});

setInterval(() => {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	drawWalls(canvas, ctx);
}, 10);

window.addEventListener("mousemove", (e) => {
	wallMoveY(e);
});
