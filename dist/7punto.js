function punto7(){
    var x = 5;
    var y = 5;
    var b=0;
    var z =4;
    var matriz= [];
    for (let i=0;i<x;i++) {
        let fila=[];
     for (let j=0;j<y;j++) {
         if(i == b && j == z){
            b=b+1;
            z=z-1;
            fila.push(0);
        }else{
            fila.push(1) ;
    
        }
        
     }
     matriz.push(fila);
    }
    console.log(matriz);
    document.write(""+matriz);
    
}
