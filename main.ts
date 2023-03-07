function dibujar_laberinto() {
    for (let index = 0; index < laberinto.length; index++) {
        console.log(".")
    }
}

input.onButtonPressed(Button.A, function on_button_pressed_a() {
    dibujar_laberinto()
})
let laberinto : number[][] = []
let y = 0
let x = 0
laberinto = [[1, 1, 1, 1, 1], [1, 0, 0, 0, 1], [1, 0, 1, 0, 1], [1, 0, 0, 0, 1], [1, 1, 1, 1, 1]]
