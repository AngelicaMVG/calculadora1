
function mostrar(num){
  var numero1 = document.calculadora.numero.value;
  document.calculadora.numero.value = numero1 + num;
}

function limpiar(){
  var borrar = document.getElementById('pantalla')
  borrar.value = '';
}

// function operar(valor){
// 	if (numero1 == 0){
// 		resultado = parseInt(document.getElementById('pantalla').value);
// 	}
// 	numero2 = parseInt(numero1);
// 	numero1= 0;
// 	operacion = valor;
// }
//
// function esIgual(){
//   numero1 = parseInt(numero1);
//   switch (operacion){
//     case 1: numero1 += numero2;
//     break;
//   }
//
// }
