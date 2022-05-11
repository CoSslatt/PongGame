class Wall {
	constructor(x, y, xSize, ySize) {
		this.x = x;
		this.y = y;
		this.xSize = xSize;
		this.ySize = ySize;
	}
}

const TO_HALF = 2;
const WHITE_COLOR = "white";
const WALL_RECT_SIZE = new Array(30, 130);

export function drawWalls(ctx, canvas) {
	const wallPosY = (canvas.height - WALL_RECT_SIZE[1]) / TO_HALF;
	const rightWallPosX = canvas.width - WALL_RECT_SIZE[0];

	const leftWall = new Wall(0, wallPosY, WALL_RECT_SIZE[0], WALL_RECT_SIZE[1]);
	const rightWall = new Wall(
		rightWallPosX,
		wallPosY,
		WALL_RECT_SIZE[0],
		WALL_RECT_SIZE[1]
	);

	ctx.fillStyle = WHITE_COLOR;
	ctx.fillRect(leftWall.x, leftWall.y, leftWall.xSize, leftWall.ySize);
	ctx.fillRect(rightWall.x, rightWall.y, rightWall.xSize, rightWall.ySize);
}
