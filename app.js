function punto1(){
    let f = 5;
    for(let i = 1; i <= f; i++) {
      let z=i;
     for(let a = 1; a <=f; a++) {
                    console.log(" ");
                    document.write(" ");
    
                }
                for(let a = 1; a <= i; a++) {
                    console.log(""+z);
                    document.write(""+z);

                    
            
                }
            
                console.log();
                document.write();

    };
}
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
    console.log("Resultado parcial: "+suma);
    document.write("Resultado parcial: "+suma);
    let ult = Math.floor(suma / 10);
    let ultR =Math.floor(suma % 10);
    let resultadoFinal = ult + ultR;
    console.log(" Resultado final: "+resultadoFinal);
    document.write(" Resultado final:"+resultadoFinal);
    
}
function punto3(){
    let x = 4;
    let y = 4;
    let matriz= [];
    for (let i=0;i<x;i++) {
        let fila=[];
     for (let j=0;j<y;j++) {
        fila.push(0) ;
     }
     matriz.push(fila);
    }
    
    console.log(matriz);
    document.write(""+matriz);
    
 }
 
 function punto4(){
    let x = 5;
    let y = 5;
    let matriz = [];
    for (let i = 0; i < x; i++) {
        let fila = [];
        for (let j = 0; j < y; j++) {
            if (i == j) {
                fila.push(0);
            }
            else {
                fila.push("*");
            }
        }
        matriz.push(fila);
    }
    console.log(matriz);
    document.write(""+matriz );
}
function punto5(){
    let arreglo = [];

    for(let i=1;i<=15;i++){
        arreglo.push(i);
    }
    console.log(arreglo);
    document.write(""+arreglo);
}

function punto6(){
    let a =0;
    let x = 4;
    let y = 6;
    let matriz= [];
    
    
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


function punto7(){
    let x = 5;
    let y = 5;
    let b=0;
    let z =4;
    let matriz= [];
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
function punto8(){
    let array=[];
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

function punto9(){
    let x = 4;
    let y = 4;
    let b=0;
    let z =3;
    let matriz= [];
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

function punto11(){
   
    let x = 4;
    let y = 6;
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
    
    function punto12(){
        let x =parseInt(prompt("Cuantas filas desea")); 
        let y = parseInt(prompt("Cuantas columnas desea")); 
         
     
     let matriz= [];
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
     
     function punto13(){
        let x = 4;
        let y = 0;
        let matriz= [];
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
     function punto14(){
  
        let x = parseInt( prompt("Ingrese el numero de filas"));
        let y = parseInt(prompt("Ingrese el numero de columnas")); 
        
        let matriz= [];
        
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
        
        function punto15(){
         let x = 3;
         let y = 3;
         let matriz= [];
         for (let i=0;i<x;i++) {
            let fila=[];
         for (let j=0;j<y;j++) {
            fila.push(i+j) ;
         }
         matriz.push(fila);
         }
         
         let xx = 3;
         let yy = 3;
         let matriz2= [];
         for (let i=0;i<xx;i++) {
            let fila=[];
         for (let j=0;j<yy;j++) {
            fila.push(i+j) ;
         }
         matriz2.push(fila);
         }
         
         let Xx = 3;
         let Yy = 3;
         let resultadoMatriz= [];
         for (let i=0;i<xx;i++) {
            let resultado=[];
         for (let j=0;j<yy;j++) {
             let resul = matriz[i][j] + matriz2[i][j];
            resultado.push(resul) ;
         }
         resultadoMatriz.push(resultado);
         }
         
         
         console.log(resultadoMatriz);
         document.write(""+resultadoMatriz);
         
         }
         function punto16(){
            let x = 4;
            let y = 4;
            let matriz= [];
            let sum=0;
            
            for (let i=0;i<x;i++) {
                let fila=[];
             for (let j=0;j<y;j++) {
                sum=sum+1;
                if(sum%2==0){
                    fila.push(sum) ;
                }
                
             }
             matriz.push(fila);
            }
            console.log(matriz);
            document.write(""+matriz);
        }
        