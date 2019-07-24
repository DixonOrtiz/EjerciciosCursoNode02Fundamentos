/*Diferencias entre el uso de let y var para declarar variables.
var: declara variables de ámbito global, pŕactica no recomendada.
let: delcara variables a nivel de ámbito al estilo de C++, práctica recomendada.*/

let nombre = "Wolverine";

// if(true){
//     let nombre = "Magneto";
// }

for(var i = 0; i <= 5; i++){
    console.log(`i: ${i}`)
}

console.log(i);
