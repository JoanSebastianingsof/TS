function punto10(){
    let array=[];
    let par=0;
    let impar=0;
    for(let i=1;i<=20;i++){
        array.push(i);
      
    }
    
    for(let a=0;a<array.length;a++ ){
        if(array[a]%2==0){
            par=par+1;
    
         }
         else{
            impar=impar+1
         }
    }
    console.log (" Numeros pares: "+par);
    console.log (" Numeros impares: "+impar);
    
    console.log (" Arreglo"+array);
    
    document.write(" Numeros pares: "+par);
    document.write(" Numeros impares: "+impar);
    document.write(" Arreglo"+array);
    

}
