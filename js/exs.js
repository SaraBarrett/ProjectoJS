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
// let planets = [
//   "mercurio",
//   "venus",
//   "terra",
//   "mart",
//   "jupiter",
//   "saturno",
//   "urano",
//   "neptuno",
//   "plutao",
// ];
// planets[3] = "Marte";
// planets.pop();

// let newPlanet = prompt("qual é o novo planeta?");
// planets.unshift(newPlanet);

// console.log(planets);

// let product ={
//   name: "casacas",
//   inStock: true,
//   price: 1.99,
//   colors: ["vermelho" , "azul" , "verde"]
// }

// console.log("o preço é "+product.price+" e a cor é "+product.colors[2])
// product.price = 2.55
// console.log("o preço é "+product.price+" e a cor é "+product.colors[2])


//Crie um array de filmes com pelo menos 3 filmes lá dentro, entre eles o seu preferido. Na consola, mostre "o meu filme preferido é o x e temos ainda disponíveis o x e o y.
//Pergunte ao utilizador, através de um prompt, o seu filme preferido e coloque no array. Lance um alerta a indicar Fixe, o filme (filme escolhido) é bom.

// let films = ['senhor dos anéis', 'titanic', 'braveheart'];

// console.log("o meu filme prederido é o "+films[0]+ " e temos tb disponiveis "+ films[1]+" e o "+films[2])

// let newFilm = prompt('qual é o teu filme preferido?');
// films.push(newFilm)
// console.log(films)

//Crie um objecto chamado moduleWebsites. Nesse objecto, crie uma key com as matérias ['arrays', 'objectos'], uma key com as horas do módulo e outra com o nome: Sites Dinâmicos.
//Imprima na consola('o modulo chama-se Sites Dinâmicos, tem x h e as matérias x e y. 
//Dificuldade extra: pergunte ao user que outra matéria deu e acrescente no array de matérias, na última posição.

// let moduleWebsites = {
//   subjects: ['arrays', 'objectos'],
//   hours: 50,
//   name: 'Sites Dinâmicos'
// }

// console.log("O curso "+moduleWebsites.name+" tem "+moduleWebsites.hours+" e tem as seguintes disciplinas:" +moduleWebsites.subjects[0]+ " e "+ moduleWebsites.subjects[1])

// let newSubject = prompt('qual é a nova matéria?');
// moduleWebsites.subjects.push(newSubject)

//pp 62
// let shoppingList=['chocolates', 'pão', 'manteiga'];

// let product = prompt("Qual o produto que quer adicionar à lista?");
// let code = "fim"

// while (product != code){
//     shoppingList.push(product);
//     product = prompt("Qual o produto que quer adicionar à lista?");
// } 

// for(let element of shoppingList){
//         console.log('o item é '+element)
// }


// alert ("A sua lista de compras é: " + shoppingList);

//pp 58
// const people = ['Scooby', 'Velma', 'Fred', 'Shaggy'];

// for(let element of people){
//     console.log(element.toUpperCase());
// }

// let favFood = [];

// let userFood = prompt('Qual é a comida preferida?');

// while(userFood.toLowerCase() != 'fim'){
//     favFood.push(userFood);
//     userFood = prompt('Qual é a comida preferida?');

// }

// for(let element of favFood){
//     console.log('A comida prederida da Sara é '+element)
// }