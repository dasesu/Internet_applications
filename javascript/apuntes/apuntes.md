   Javascript 
===

Javascript es un lenguaje que se encuentra embebido en documentos html asi que estan estrechamente relacionado con html.
Existen varias formas de escribir codigo javascript, una es directamente en el archivo html dentro de la etiqueta `script`

Es recomendable colocar el codigo al final del documento antes del cierre del body, asi el javascript tendra acceso a todo el DOM.
```html
<!DOCTYPE html>
<html>
<head>
   <meta charset="utf-8">
   <meta name="viewport" content="width=device-width, initial-scale=1">
   <title>Javascript</title>
</head>
<body>

   <h1>Hola Mundo</h1>

   <script>
      alert("Hola Mundo");   
   </script>
</body>
</html>
```

Para incluir archivos html externos debemos agregar el destino con src en la etiqueta script
```html
<!DOCTYPE html>
<html>
<head>
   <meta charset="utf-8">
   <meta name="viewport" content="width=device-width, initial-scale=1">
   <title>Javascript</title>
</head>
<body>

   <h1>Hola Mundo</h1>

   <script src="myjs.js"></script> <!-- llama al archivo myjs.js -->
</body>
</html>
```

Si queremos incluir la llamada javascript al principio pero aun asi queremos que se cargue al final usamos la instruccion defer asi:
```html
<!DOCTYPE html>
<html>
<head>
   <meta charset="utf-8">
   <meta name="viewport" content="width=device-width, initial-scale=1">
   <title>Javascript</title>

   <script src="myjs.js" defer></script> <!-- llama al archivo myjs.js -->

</head>
<body>

   <h1>Hola Mundo</h1>

   
</body>
</html>
```

Creacion de variables
```js
var variable1=3; // permite volver a asignarla, lo que se puede prestar para errores de legibilidad.
var variable1 = 4;
variable1 = 8;

let variable2=6; // no permite volver a asignarla, forma recomendada
variable2 = 8;

const variable3="algo"; // no permite cambiar el contenido una vez asignado.

```

```js
let a="4"
ParseInt(a); // convierte "4" a 4
(+a); // va a hacer lo mismo que el parseInt
```

Operadores:
```js
let a = 20;
let b = 30;
let c = 7;

console.log( a+b );
console.log( a-b );
console.log( a*b ); // multiplicacion
console.log( a/b ); // division
console.log( a%c ); // modulus
console.log(a**b); // potenciacion `a`` elevado a la `b`.

console.log(3+4*5-6/2+4) = 3+20-3+4 = 24 // tomando en cuenta la prescedencia de operaciones
a++;
++a;
b--;
```

Una forma de detectar que navegador se esta usando es con el objeto navigator.
```js
document.write("You are running " + navigator.appName);
document.write("and its version is " + navigator.appVersion);
```

Funciones: Es posible definir funciones usando simples vinculaciones asociadas a una funcion. asi: notese que esto es como crear una variable y por lo tanto al ser una declaracion termina en punto y coma.
```js
let lanzarMisiles = function() {
   sistemaDeMisiles.lanzar("ahora");
};
```

Otra forma mas abreviadas es usando la palabra funcion antes del nombre asi: notese el orden de los elementos y la falta del punto y coma.
```js
function lanzarMisiles(){
   sistemaDeMisiles.lanzar("ahora");
}
```
Las declaraciones de funciones no son parte del flujo de control regular de arriba hacia abajo del codigo y por lo tanto la funcion definida de esta forma puede ser llamada antes de su definicion. asi
```js

lanzarMisiles();

function lanzarMisiles(){
   sistemaDeMisiles.lanzar("ahora");
}
```

Existe una tercera forma de definir funciones, que es la funcion flecha. esto tiene algunas caracteristicas: por ejemplo vuelve a escribirse el punto y coma al final. y la funcion se define como `const`
```js
const potencia = (base, exponente) => {
   let resultado = 1;
   for (let cuenta = 0; cuenta < exponente; cuenta++) {
      resultado *= base;
   }
   return resultado;
};
```

Cuando solo haya un solo nombre de parámetro, los paréntesis alrededor de la lista de parámetros pueden ser omitidos
Si el cuerpo es una sola expresión, en lugar de un bloque en llaves, esa expresión será retornada por parte de la función.
```js
const cuadrado1 = (x) => { return x * x; };
const cuadrado2 = x => x * x;
```

Cuando una función de flecha no tiene parámetros
```js
const bocina = () => {
   console.log("Toot");
};
```

Arrays, para trabajar con arrays en javascript
```js
let nombres = ["Juan","Pedro","Ana","Maria","Luis","Julia"];
```

Para agregar elementos podemos agregar un nuevo indice asi, y si anadiria a nuestro array existente.
```js
nombres[6] = "Vanessa";
```

https://www.hackinbits.com/articles/js/push-pop-shift-and-unshift-array-methods-in-javascript

Otra forma es usando el metodo push.
```js
nombres.push("Rosa"); // anade el indice 7 con valor Rosa al final del array 
```

Podemo Eliminar el ultimo elemento de un array con pop
```js
nombres.pop(); // elimina el ultimo valor de un array
````

la propiedad `shift` anade un elemento al principio
```js
nombres.shift("Lorena"); // agrega lorena al principio del array
```

`unshift` Elimina un valor tomandolo desde el principio
```
nombres.unshift(); // Elimina lorena previamente agregado al principio.
```

PAra consultar el tamano de un array usamos el metodo length
```js
console.log(nombres.length);
```

Podemos acceder a los arrays usando fors o tambien un forEach asi:
```js
let nombres = ["Juan","Pedro","Ana","Maria","Luis","Julia"];
nombres.forEach(function(nombre){
   console.log(nombre);
});
```

Los arrays en javascript actualmente se comportan como listas. no homogeneas, asi que podemos almacenar diferentes tipos de datos en un array asi:
```js
let nombres = ["Ana","Maria","Josefina",1,true]; 
```

Array multidimensional
```js
let persona1 = ["Sebastian Suarez", "Programador", 38];
let persona2 = ["Jesus Montoya", "Disenador", 33];
let persona3 = ["Dorjes Molina", "Programador", 40];

let  personas = [persona1,persona2,persona3];
console.log(personas[0][0]); // accede al indice cero de persona1
````

Operador `res`
El operador res que se define como `...` va a permitir recibir una vantidad variable de parametros, convirtiendo los parametros recibidos en un array y asi facilitar por asi decirlo el polimorfimo
```js
function suma(...valores){ // en lugar de valor1, valor 2, valor3, ahora valores es un array
   let resultado = 0;
   valores.forEach(function(valor){
      resultado = resultado + valor;
   });
   return resultado;
}

console.log(suma(3,5,7));
```

EL operador spread, definido igual que el operador res con `...`, es lo contrario al operador res. Si el operador res genera un array a partir de una lista de valores, entonces podemos ver spread como una forma de generar una lista de valores a partir de un array.

```js
let menor = Math.min(1,2,3,4,5,6,7,8,9,10);
console.log(menor);

// ahora supongamos que los valores los tenemos en un array
let valores = [1,2,3,4,5,6,7,8,9,10];
let menor_from_array = Math.min(...valores);
console.log(menor_from_array); 

// otro uso puede ser para unir arrays diferentes.
a = [1,2,3];
b = [4,5,6];

c = [...a, ...b];

```

Objetos literales:
Consisten en paquetes de informacion tal como ocurre en la programacion orientada a objetos. Se definen con llaves asi:
```js
let persona = {
   name: 'John',
   age: 30,
}

console.log(persona.name);
console.log(persona['name']);
```
Cuando nostros trabajamos con objetos ya no vamos a hacer referencia al numero de indice, sino qeu vamos a acceder a los datos internos por medio del nombre que define la informacion requerida, por ejemplo `name` para John. 

Los objetos literales tambien nos permiten definir funciones o metodos:
```js
let persona = {
   name: 'John',
   age: 30,

   saludar: function(){
      console.log(`Hola mi nombre es: ${this.name}`); // aqui el this funciona porque this tiene entorno objeto persona.
   }

   saludar(){
      console.log(`Hola mi nombre es: ${this.name}`); // aqui el this funciona porque this tiene entorno del objeto persona.
   }

   saluda2: () => {
      console.log(this.name); // esto no funcionaria porque las funciones flecha tienen entorno window
   }

}


console.log(persona.name);
console.log(persona['name']);

console.log(persona.saludar());
```

Una vez creado elementos podemos eliminarlos, es decir sacarlos del objeto creado asi:
```js
let unObjeto = {izquierda: 1, derecha: 2};
console.log(unObjeto.izquierda);
// → 1
delete unObjeto.izquierda;
```

El operador binario in cuando se aplica a un string y un objeto, te dice si ese objeto tiene una propiedad con ese nombre.

Para saber qué propiedades tiene un objeto, puedes usar la función Object.keys

Hay una función Object.assign que copia todas las propiedades de un objeto a otro.
```js
let objetoA = {a: 1, b: 2};
Object.assign(objetoA, {b: 3, c: 4});
console.log(objetoA);
// → {a: 1, b: 3, c: 4}
```


Desestructuracion
===

Veamos el siguiente codigo
```js
let persona = {
   nombre: "Sebastian",
   apellido: "Suarez",
   email: "dasesumail@gmail.com",
   edad: 38,
}

console.log(`Hola mi nombre es ${persona.nombre}`);
console.log(`Hola mi nombre es ${persona.apellido}`);
console.log(`Hola mi nombre es ${persona.email}`);
console.log(`Hola mi nombre es ${persona.edad}`);
```

Podemos crear variables que permitan desestructurar el contenido de persona, para acceder directamente por su nombre o por otro nombre
```js
let persona = {
   nombre: "Sebastian",
   apellido: "Suarez",
   email: "dasesumail@gmail.com",
   edad: 38,
}

let {nombre,apellido,email,edad} = persona;

console.log(`Hola mi nombre es ${nombre}`);
console.log(`Hola mi nombre es ${apellido}`);
console.log(`Hola mi nombre es ${email}`);
console.log(`Hola mi nombre es ${edad}`);
```

pero tambein podemos cambiar el nombre con el que se acceda a esos datos asi:
```js
let persona = {
   nombre: "Sebastian",
   apellido: "Suarez",
   email: "dasesumail@gmail.com",
   edad: 38,
}

let {nombre: nome,apellido: cognome,email,edad} = persona;

console.log(`Hola mi nombre es ${nome}`);
console.log(`Hola mi nombre es ${cognome}`);
console.log(`Hola mi nombre es ${email}`);
console.log(`Hola mi nombre es ${edad}`);
```

Ahora supongamos que el objeto persona tiene ademas un valor que contiene un objeto, podemos acceder a esos elementos destructurando tambien eso, hay varias formas de escribir esto.

```js
let persona = {
   nombre: "Sebastian",
   apellido: "Suarez",
   email: "dasesumail@gmail.com",
   edad: 38,
   direccion: {
         pais: "Venezuela",
         ciudad: "Caracas"
      }
}

let {nombre: nome,apellido: cognome,email,edad, direccion} = persona;

console.log(`Hola mi nombre es ${nome}`);
console.log(`Hola mi nombre es ${cognome}`);
console.log(`Hola mi nombre es ${email}`);
console.log(`Hola mi nombre es ${edad}`);
console.log(`Hola mi nombre es ${direccion.pais}`);

// una alternativa seria 
let {nombre: nome,apellido: cognome,email,edad, direccion:{pais,ciudad}""} = persona;
console.log(`Hola mi nombre es ${nome}`);
console.log(`Hola mi nombre es ${cognome}`);
console.log(`Hola mi nombre es ${email}`);
console.log(`Hola mi nombre es ${edad}`);
console.log(`Hola mi nombre es ${pais}`);
console.log(`Hola mi nombre es ${ciudad}`);

//Otra forma de tener el mismo efecto seria:
let {nombre: nome,apellido: cognome,email,edad,direccion} = persona;
let {pais,ciudad} = direccion;
console.log(`Hola mi nombre es ${nome}`);
console.log(`Hola mi nombre es ${cognome}`);
console.log(`Hola mi nombre es ${email}`);
console.log(`Hola mi nombre es ${edad}`);
console.log(`Hola mi nombre es ${pais}`);
console.log(`Hola mi nombre es ${ciudad}`);

```

Esto mismo se puede hacer con arrays solo que en lugar de usar llaves usamos `[]` corchetes
```js
let frutas = ["manzana","pera","uva"];
let [fruta1,fruta2,fruta3] = frutas; // recupera/asigna todos los valores del array

console.log(`fruta1 es ${fruta1}`)

// que pasa si quiero recuperar solo una porcion del array?
let frutas = ["manzana","pera","uva"];
let [,fruta2] = frutas; // recupera/asigna solo la segunda posicion saltando el primero, y de ahi en adelante no recupera.
console.log(`fruta1 es ${fruta2}`)
```
