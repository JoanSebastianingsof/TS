function punto13(){
    var x = 4;
    var y = 0;
    var matriz= [];
    for (let i=0;i<x;i++) {
        let fila=[];
        y++
     for (let j=0;j<y;j++) {
        
        fila.push(i+ "" +j) ;
     }
     matriz.push(fila);
    }
    
    console.log(matriz);
    document.write(""+matriz);
}
