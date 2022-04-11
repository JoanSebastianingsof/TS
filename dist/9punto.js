function punto9(){
    var x = 4;
    var y = 4;
    var b=0;
    var z =3;
    var matriz= [];
    for (let i=0;i<x;i++) {
        let fila=[];
     for (let j=0;j<y;j++) {
         if(i == b && j == z){
            b=b+1;
            z=z-1;
            fila.push(1);
        }else{
            fila.push(0) ;
    
        }
        
     }
     matriz.push(fila);
    }
    console.log(matriz);
    document.write(""+matriz);
    
}
