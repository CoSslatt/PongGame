const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

const WALL_RECT_SIZE = new Array(40, 130);

window.addEventListener("load", () => {
	canvas.height = window.innerHeight - 250;
	canvas.width = window.innerWidth - 650;

	drawWalls();
});

function drawWalls() {
	const wallPosY = (canvas.height - WALL_RECT_SIZE[1]) / 2;
	const leftWall = ctx.fillRect(
		0,
		wallPosY,
		WALL_RECT_SIZE[0],
		WALL_RECT_SIZE[1]
	);
}
