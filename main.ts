function dibujar_laberinto() {
    
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            if (laberinto[i][j] == 1) {
                pantalla = "" + pantalla + "."
            } else {
                pantalla = "" + pantalla + "#"
            }
            
        }
        pantalla = "" + pantalla + "\n"
    }
    basic.showString(pantalla)
}

function mover_derecha() {
    
    if (pos_x < 4 && laberinto[pos_y][pos_x + 1] == 0) {
        pos_x += 1
    }
    
}

function mover_arriba() {
    
    if (pos_y > 0 && laberinto[pos_y - 1][pos_x] == 0) {
        pos_y += 0 - 1
    }
    
}

function mover_abajo() {
    
    if (pos_y < 4 && laberinto[pos_y + 1][pos_x] == 0) {
        pos_y += 1
    }
    
}

function mover_izquierda() {
    
    if (pos_x > 0 && laberinto[pos_y][pos_x - 1] == 0) {
        pos_x += 0 - 1
    }
    
}

let pantalla = ""
let pos_y = 0
let pos_x = 0
let laberinto : number[][] = []
let k = 0
let y = 0
let x = 0
laberinto = [[1, 1, 1, 1, 1], [1, 0, 0, 0, 1], [1, 0, 1, 0, 1], [1, 0, 0, 0, 1], [1, 1, 1, 1, 1]]
while (true) {
    dibujar_laberinto()
    if (pos_x == 4 && pos_y == 4) {
        basic.showString("¡Ganaste!")
        pos_x = 0
        pos_y = 0
    }
    
    input.onButtonPressed(Button.A, function on_button_pressed_a() {
        mover_izquierda()
    })
    input.onButtonPressed(Button.B, function on_button_pressed_b() {
        mover_derecha()
    })
}
