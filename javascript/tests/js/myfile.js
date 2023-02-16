console.log("Hola mundo");
let line = "";
for (let i = 0; i < 7 ; i++) {
   line = line + '#';
   console.log(line);
}

console.log("FizzBuzz");

for (let i = 0; i < 100 ; i++) {
   if( i%3 == 0 && i%5 != 0){
      console.log('Fizz');   
   }else if( i%5 == 0 &&  i%3 != 0){
      console.log('Buzz');   
   }else if(  i%3 == 0 && i%5 == 0 ){
      console.log('FizzBuzz');
   }else{
      console.log( i );
   }
}

document.write("You are running " + navigator.appName);
document.write(" and its version is " + navigator.appVersion);
