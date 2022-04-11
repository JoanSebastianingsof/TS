function punto2(){
    let num = 347;
    document.write("Numero elegido: "+num);
    let milesR =Math.floor(num % 1000) ;
    let miles = Math.floor(num / 1000);
    console.log(miles);
    console.log(milesR);
    
    let cientos = Math.floor(milesR / 100);
    let cientosR = Math.floor (milesR % 100 );
    console.log(cientos);
    console.log(cientosR);
    let decimas = Math.floor(cientosR / 10);
    let decimasR = Math.floor(cientosR % 10);
    console.log(decimas);
    console.log(decimasR);
  
    let suma = miles + cientos + decimas + decimasR;
    console.log(suma);
    document.write("Resultado parcial: "+suma);
    let ult = Math.floor(suma / 10);
    let ultR =Math.floor(suma % 10);
    let resultadoFinal = ult + ultR;
    console.log(" Resultado"+resultadoFinal);
    document.write(" Resultado final:"+resultadoFinal);
    
}
