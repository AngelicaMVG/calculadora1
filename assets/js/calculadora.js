
function mostrar(num){
  var numero1 = document.calculadora.numero.value;
  document.calculadora.numero.value = numero1 + num;

}

function limpiar(){
  var teclaC = document.getElementById('pantalla')
  teclaC.value = '';
}

 function operar(){
   var valor1 = document.getElementById('pantalla').value;
   var guarda = valor1.split('+');
   var suma = Number(guarda[0] )+ Number(guarda[1]);
   document.getElementById('pantalla').value = suma;


	}

// function operaciones(valor){
//   var numeroPresionado = document.getElementById('pantalla');
//   numeroPresionado.value = eval(numeroPresionado.value);
// }
// function validarNumero(event){
//   var ascci = event.keyCode;
//   if(ascci== 13){
//     operaciones();
//   }
//   if( ascci < 42 || ascci > 57){
//     return false;
//   }
// }
