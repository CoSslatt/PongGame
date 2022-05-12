const BALL_POS = new Array();
let BALL_LOADED = false;

let directionX = 2;
let directionY = 2;

export function drawBall(canvas, ctx) {
	ballStartPos(canvas);

	ballMovement();

	let ball = new Path2D();
	ball.arc(BALL_POS[0], BALL_POS[1], 15, 0, 2 * Math.PI);

	ctx.fillStyle = "blue";
	ctx.fill(ball);
}

function ballStartPos(canvas) {
	if (BALL_LOADED) return;

	BALL_POS[0] = canvas.width / 2;
	BALL_POS[1] = canvas.height / 2;

	BALL_LOADED = true;
}

function ballMovement() {
	BALL_POS[0] += directionX;
	BALL_POS[1] += directionY;
}

function checkCollisions() {}
