def dibujar_laberinto():
    global pantalla
    for i in range(5):
        for j in range(5):
            if laberinto[i][j] == 1:
                pantalla = "" + pantalla + "."
            else:
                pantalla = "" + pantalla + "#"
        pantalla = "" + pantalla + "\n"
    basic.show_string(pantalla)

pos_x = 0
pos_y = 0
pantalla = ""
laberinto: List[List[number]] = []
x = 0
y = 0
k = 0
laberinto = [[1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1]]
while True:
    dibujar_laberinto()
    def mover_izquierda():
        global pos_x
        if pos_x > 0 and laberinto[pos_y][pos_x-1] == 0:
            pos_x -= 1

    def mover_derecha():
        global pos_x
        if pos_x < 4 and laberinto[pos_y][pos_x+1] == 0:
            pos_x += 1

    def mover_arriba():
        global pos_y
        if pos_y > 0 and laberinto[pos_y-1][pos_x] == 0:
            pos_y -= 1

    def mover_abajo():
        global pos_y
        if pos_y < 4 and laberinto[pos_y+1][pos_x] == 0:
            pos_y += 1