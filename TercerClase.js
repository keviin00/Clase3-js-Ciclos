let IngresarNumero = parseInt(prompt("Ingresar el Numero del cual quieres saber la tabla "));

for (let i = 1 ; i <=10; i++)  {
    
    let Resultado = IngresarNumero * i ;
   
    console.log(IngresarNumero + "X"+ i + "=" + Resultado);
}