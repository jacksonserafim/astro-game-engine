// Initial configs with no architecture properly defined for tests only
import { InputHandler } from "./core/Input.js"

const canvas = document.querySelector('#game')
const ctx = canvas.getContext('2d')
const cube = { x: 0, y: 0, width: 40, height: 40, speed: 4 }

const input = new InputHandler();


function gameLoop() {

    // TODO: Normalize movement, maybe implement a Vector2 handler, but for now, this works fine :)
    if (input.isDown('d')){
        cube.x += cube.speed;
    }
    if (input.isDown('a')){
        cube.x -= cube.speed
    }
    if (input.isDown('s')){
        cube.y += cube.speed
    }
    if (input.isDown('w')){
        cube.y -= cube.speed
    }

    ctx.fillStyle = 'lightblue';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = 'black';
    ctx.fillRect(cube.x, cube.y, cube.width, cube.height);

    requestAnimationFrame(gameLoop)
}

gameLoop()