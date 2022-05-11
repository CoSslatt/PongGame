const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

window.addEventListener("load", () => {
	canvas.height = window.innerHeight - 250;
	canvas.width = window.innerWidth - 650;

	ctx.strokeRect(100, 100, 200, 200);
});
