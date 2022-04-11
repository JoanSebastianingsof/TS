function punto12(){
    var x = prompt("Cuantas filas desea");
    var y = prompt("Cuantas columnas desea");
    

var matriz= [];
let d=0;
let e=1;
let s;
for (let i=0;i<x;i++) {
    let fila=[];
 for (let j=0;j<y;j++) {
  
    fila.push(d) ;

    s=d+e;
    d=e;
    e=s;
 }
 matriz.push(fila);
}

console.log(matriz);
document.write(""+matriz);

}
