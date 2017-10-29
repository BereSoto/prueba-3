var testArray = []
for(var i = 0; i<=10; i+=1){
  testArray.push(i);
  }
console.log(testArray),
// eliminar el primer elemento del arreglos
testArray.shift();
console.log(testArray);
// eliminar ultimo elemento del arreglo
testArray.pop();
console.log(testArray);
//revertir los elementos
testArray.reverse();
console.logt(testArray);
/*----------------------------------*/
var testString ="abcde";
testString.charAt(2);
//c
/* Para obtener un caracter apartir del codigo Asccii utilizo
el metodo String.fromCharecode*/
var codigo = testString.charCodeAt(2)
console.log(codigo);
