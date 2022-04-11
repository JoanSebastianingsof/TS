function punto14(){
  
var x =prompt("Ingrese el numero de filas");
var y = prompt("Ingrese el numero de columnas");
var matriz= [];

if(x>0 && y>0){
    for (let i=0;i<x;i++) {
        let fila=[];
     for (let j=0;j<y;j++) {
        fila.push(i+j) ;
     }
     matriz.push(fila);
    }
}else{
    alert("ingreso valores invalidos");
    console.log("ingreso valores invalidos");
}


console.log(matriz);
document.write(""+matriz);

    
}
