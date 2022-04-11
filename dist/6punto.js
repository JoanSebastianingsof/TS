function punto6(){
    let a =0;
    var x = 4;
    var y = 6;
    var matriz= [];
    
    
    for (let i=0;i<x;i++) {
        let fila=[];
     for (let j=0;j<y;j++) {
        
            a=a+1;
            if (a%2!=0){
                fila.push(a);
            }
         }
         matriz.push(fila);
    }
     
    
    
    console.log(matriz);
    document.write(""+matriz);
    
}


