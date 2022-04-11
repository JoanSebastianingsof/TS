function punto11(){
   
var x = 4;
var y = 6;
let matriz= [];
let minimo=15;
let maximo=30;
let promedio=0;
let total=0;
for (let i=0;i<x;i++) {
    let fila=[];
 for (let j=0;j<y;j++) {
    fila.push(Math.floor(Math.random() *(maximo-minimo) +minimo ) ); 
    promedio = promedio+fila[j];
 }
 matriz.push(fila);
}

total=promedio/24;
console.log("Promedio de las edades: "+total);
console.log(" Martriz: "+matriz);
document.write("Promedio de las edades: "+total);
document.write(" Martriz: "+matriz);
   
}
