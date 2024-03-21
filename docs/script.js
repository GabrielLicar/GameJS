// Frame
const frame = document.getElementById("frame");
const logW = document.getElementById("logW")
const logH = document.getElementById("logH")

// Character
const logX = document.getElementById("logX")
const logY = document.getElementById("logY")
const LogWidth = document.getElementById("logWidth")
const LogHeight = document.getElementById("logHeight")

const ctx = frame.getContext("2d");

const player = {
    x: 0,
    y: 0,
    width: 24,
    height: 24,
    speed: 24
}

function drawGrid() {
    const gridSize = player.width;

    for (let i = 0; i < frame.width; i += gridSize) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, frame.height);
        ctx.strokeStyle = "#121212";
        ctx.stroke();
    }

    for (let i = 0; i < frame.height; i += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(frame.width, i);
        ctx.strokeStyle = "#121212";
        ctx.stroke();
    }
}

function drawPlayer() {
    ctx.fillStyle = "#ccc";
    ctx.fillRect(player.x, player.y, player.width, player.height);
}

function gameLoop() {
    ctx.clearRect(0, 0, frame.width, frame.height);

    drawGrid();
    drawPlayer();

    requestAnimationFrame(gameLoop);
}

function update() {
    document.onkeydown = (e) => {
        switch (e.key) {
            case "w":
                player.y = Math.max(0, player.y - player.speed);
                logY.innerText = player.y;
                break;
            case "a":
                player.x = Math.max(0, player.x - player.speed);
                logX.innerText = player.x;
                break;
            case "s":
                player.y = Math.min(frame.height - player.height, player.y + player.speed);
                logY.innerText = player.y;
                break;
            case "d":
                player.x = Math.min(frame.width - player.width, player.x + player.speed);
                logX.innerText = player.x;
                break;
            /*  ArrowsKey
                case "ArrowUp":
                    player.y = Math.max(0, player.y - player.speed);
                    logY.innerText = player.y;
                    break;
                case "ArrowLeft":
                    player.x = Math.max(0, player.x - player.speed);
                    logX.innerText = player.x;
                    break;
                case "ArrowDown":
                    player.y = Math.min(frame.height - player.height, player.y + player.speed);
                    logY.innerText = player.y;
                    break;
                case "ArrowRight":
                    player.x = Math.min(frame.width - player.width, player.x + player.speed);
                    logX.innerText = player.x;
                    break;
            */
        };
    }
}

function writeLogs() {
    logX.innerText = player.x;
    logY.innerText = player.y;
    logS.innerText = player.speed;
    LogWidth.innerText = player.width;
    LogHeight.innerText = player.height;

    logW.innerText = frame.width;
    logH.innerText = frame.height;
}

function startGame() {
    gameLoop();
    update();
    writeLogs();
}

window.onload = startGame;