function wall() {
	this.x = 0;
	this.y = 0;
	this.xSize = 0;
	this.ySize = 0;

	this.WALL_RECT_SIZE = new Array(30, 130);
}

const leftWall = new wall();
const rightWall = new wall();

export function drawWalls(canvas, ctx) {
	const rightWallPosX = canvas.width - rightWall.WALL_RECT_SIZE[0];

	leftWall.xSize = leftWall.WALL_RECT_SIZE[0];
	leftWall.ySize = leftWall.WALL_RECT_SIZE[1];

	rightWall.x = rightWallPosX;
	rightWall.xSize = rightWall.WALL_RECT_SIZE[0];
	rightWall.ySize = rightWall.WALL_RECT_SIZE[1];

	ctx.fillStyle = "white";
	ctx.fillRect(leftWall.x, leftWall.y, leftWall.xSize, leftWall.ySize);
	ctx.fillRect(rightWall.x, rightWall.y, rightWall.xSize, rightWall.ySize);
}

export function wallMoveY(e) {
	let y = e.clientY - leftWall.WALL_RECT_SIZE[1] * 1.5;
	leftWall.y = y;
	rightWall.y = y;
}
