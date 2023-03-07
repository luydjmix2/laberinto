def dibujar_laberinto():
    for index in range(len(laberinto)):
        print(".")

def on_button_pressed_a():
    dibujar_laberinto()
input.on_button_pressed(Button.A, on_button_pressed_a)

laberinto: List[List[number]] = []
y = 0
x = 0
laberinto = [[1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1]]