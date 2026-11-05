const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const WINDOW_WIDTH = 1200, WINDOW_HEIGHT = 800;

function render() {
    ctx.fillstyle = "white";
    ctx.fillRect(0, 0, WINDOW_WIDTH, WINDOW_HEIGHT);
    return;
}
