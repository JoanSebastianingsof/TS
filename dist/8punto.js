function punto8(){
    var array=[];
    let min = -100;
    let max=100;
    let p=0;
    let cero=0;
    let n=0
    for(let i=0;i<=15;i++){
        array.push(Math.floor(Math.random() *(max-min) +min ) );
        if(array[i]>0){
            p++
        }
        else if(array[i]==0){
            cero++
        }
        else{
            n++
    
        }
    }
    console.log(" arreglo: "+array);
    console.log("Positivos: "+p);
    console.log(" Ceros: "+cero);
    console.log(" negativos: " +n);
    
    document.write(" arreglo: "+array);
    document.write("Positivos: "+p);
    document.write(" Ceros: "+cero);
    document.write(" negativos: " +n);
    
    
}
