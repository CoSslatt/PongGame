class Ball {
	constructor() {
		this.x = 0;
		this.y = 0;
	}
}

export function drawBall(canvas, ctx) {
	let circle = new Path2D();
	circle.arc(100, 35, 15, 0, 2 * Math.PI);

	ctx.fillStyle = "blue";
	ctx.fill(circle);
}
