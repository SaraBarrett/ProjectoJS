//alert("Olá Turma de Multimédia");
//alert('Superámos o primeiro dia de JS');

//TIPOS DE DADOS EM JS
//string
//alert('Curso de Multimédia');
//número
//alert(122);

//variáveis
// let courseName = "Técnico Multimédia";

// alert('o nome do curso é: ' +courseName);
// alert('as notas do '+courseName+' são');
// alert(courseName);
// alert(courseName);

//actualização de variável
// let myColor = "verde";
// alert("a minha primeira cor "+myColor)
// myColor = "azul";
// alert("a minha segunda cor "+myColor)
// //constante : não pode ser alterado
// const YEAR = 1986;

// juntar variáveis
let myFName = ' SaraM';
let mySurname = 'Monteiro';
let myFullName= myFName + ' '+mySurname;

//alert("o tamanho da variável é "+mySurname.length)
//alert(myFName.trim().toLowerCase());

//métodos com argumentos
console.log(myFName)
console.log(myFullName)

let ourCourse = 'Técnico de Multimédia';
//ve a posição de i
console.log("a letra i aparece na posição "+ourCourse.indexOf('i'));
//corta Multimedia
console.log("o curso é "+ourCourse.slice(11))


//subistui Multimedia por OCOmercio
console.log("o novo curso é "+ourCourse.replace("Multimédia", "Comércio") + "!");

//sintaxe alternativa
console.log(`o novo curso é ${ourCourse.replace("Multimédia", "Comércio")}!`);

//tipo de dados null
let myGrade = null;
console.log("o null é " +myGrade)

//tipo de dados undefinied
// let myWeekend = sexta;
// console.log(myWeekend)

// let answer = prompt("querem ir para a praia?");
// console.log(answer)

const VOTE_AGE = 18;
let userAge = prompt("qual é a sua idade?");

if(userAge<"VOTE_AGE"){
    alert("ainda não tens idade para votar");
}else if(userAge == VOTE_AGE){
    alert("vais votar pela primeira vez, parabéns")
}else{
    alert("vota em consciência no domingo!");
}

