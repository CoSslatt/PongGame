const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

import { drawWalls } from "./components/walls.js";

window.addEventListener("load", () => {
	canvas.height = window.innerHeight - 250;
	canvas.width = window.innerWidth - 750;

	drawWalls(ctx, canvas);
});
