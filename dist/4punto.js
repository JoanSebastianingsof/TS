function punto4(){
    var x = 5;
    var y = 5;
    var matriz = [];
    for (var i = 0; i < x; i++) {
        var fila = [];
        for (var j = 0; j < y; j++) {
            if (i == j) {
                fila.push(0);
            }
            else {
                fila.push("*");
            }
        }
        matriz.push(fila);
    }
    console.log(matriz);
    document.write(""+matriz );
}
