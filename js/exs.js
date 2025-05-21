//pp 16
// let myLuckyNumber = 16;
// let myName = "Sara";

// alert("o meu nome é "+myName+" e o meu número é o "+myLuckyNumber);

//pp 27
// const MESSAGE = " TASTE THE RAINBOW";
// alert(MESSAGE)
// let whisper = MESSAGE.trim().toLowerCase();
// alert(whisper)

//pp29
// const WORD = "skateboard";
// let facialHair = WORD.slice(5).replace("o", "e");
// console.log(facialHair);

// let firstName = prompt("qual é o seu primeiro nome?");
// let surname = prompt("qual é o seu primeiro Apelido?");
// alert("olá "+firstName+" "+surname)

//pp 39
// let dayOfWeek = prompt("que dia da semana é?").toLowerCase();

// if (dayOfWeek.slice(0, 5) == "sexta") {
//   alert("yay é sexta");
// }else if(dayOfWeek == 'sabado' || dayOfWeek == 'domingo' ||dayOfWeek == 'sábado'){
//     alert("fim de semana");
// }else {
//   alert("força nisso");
// }

// let password= prompt("digite uma pass com pelo menos 6caracteres");

// if(password.length<6){
//     alert('pass inválida. tem que ter pelo menos 6caracteres')
// }

//pp 43
let planets = [
  "mercurio",
  "venus",
  "terra",
  "mart",
  "jupiter",
  "saturno",
  "urano",
  "neptuno",
  "plutao",
];
planets[3] = "Marte";
planets.pop();

let newPlanet = prompt("qual é o novo planeta?");
planets.unshift(newPlanet);

console.log(planets);
