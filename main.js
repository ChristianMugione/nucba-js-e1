/*1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.*/
function parImpar(numero) {
  if (numero % 2 == 0) {
    console.log(`El número ${numero} es par`);
  } else {
    console.log(`El número ${numero} es impar`);
  }
}
console.log('Ejercicio 1:');
parImpar(5);
parImpar(20);

/*2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.*/
function mayor(primero, segundo) {
  if (primero > segundo) {
    console.log("El primer número es el mayor");
  } else if (primero < segundo) {
    console.log("El segundo número es el mayor");
  } else {
    console.log("Ambos números son iguales");
  }
}
console.log('Ejercicio 2:');
mayor(5,4);
mayor(7,10);
mayor(8,8);


/*3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.*/

function multiploDe5(num) {
  if ( num % 5 == 0 ) {
    console.log(`El número ${num} es múltiplo de 5`);
  } else {
    console.log(`El número ${num} NO es múltiplo de 5`);
  }
}
console.log('Ejercicio 3:');
multiploDe5(10);
multiploDe5(13);

/*4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.*/

function contador(numeroContador) {
  for (let i=0;i<=numeroContador;i++){
    console.log(i);
  }
}
console.log('Ejercicio 4:');
contador(4);
contador(20);

/*5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.*/

function repetidor(palabra,veces) {
  for (let i=1;i<=veces;i++){
    console.log(i + "- " + palabra);
  }
}
console.log('Ejercicio 5:');
repetidor("hola",3);

/*6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.*/

function valores(arreglo){
  for (let i = 0;i<arreglo.length;i++){
    console.log(arreglo[i]);
  }
}
console.log('Ejercicio 6:');
valores([2,7,1,9]);


/*7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".*/

function valores2(arreglo){
  if (arreglo.length == 10) {
    for (let i = 0;i<arreglo.length;i++){
      if (i != 4) {
        console.log(arreglo[i]);
      }
    }
  } else {
    console.log("ERROR: Debían ingresarse 10 valores");
  }
}
console.log('Ejercicio 7:');
valores2([1,3,5,7,6,5,3,2,12,98]);

/*8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.*/

function multiplicArray(arreglo2,multiplicador){
  for (i = 0; i < arreglo2.length; i++){
    console.log(arreglo2[i] * multiplicador);
  }
}
console.log('Ejercicio 8:');
multiplicArray([2,3,4],5);