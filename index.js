const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const WINDOW_WIDTH = 1200, WINDOW_HEIGHT = 800;
const WINDOW_MID = {
    x: 600, y: 400
}

const SOUNDS = []
const IMAGES = []
const NAMES = [
    "art", "bat", "car", 
    "rat", "pat", "cat", 
    "far", "mat", "sat",
    "fit", "pit", "sit",
    "wit", "lit", "eat",
    "pan", "net", "let",
    "pen", "lap", "pal",
    "tin", "bin", "wag",
    "lag", "tag", "bag",
    "end", "nil", "hit",
    "con", "cop", "cup" 
]

function render() {
    ctx.fillstyle = "white";
    ctx.fillRect(0, 0, WINDOW_WIDTH, WINDOW_HEIGHT);
    ctx.fillstyle = "#6a6a6a";
    ctx.fillRect(WINDOW_MID.x - 400, WINDOW_MID.y - 200, WINDOW_MID.x + 400, WINDOW_MID + 200);
    ctx.fillstyle = "#ffffff";
    ctx.strokeText("Test text", WINDOW_MID.x - 370, WINDOW_MID.y - 170, 500)
    return;
}

render();