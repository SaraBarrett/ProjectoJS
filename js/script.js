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

// //actualização de variável
// let myColor = "verde";
// alert("a minha primeira cor "+myColor)
// myColor = "azul";
// alert("a minha segunda cor "+myColor)
//constante : não pode ser alterado
// const YEAR = 1986;

// // juntar variáveis
// let myFName = ' SaraM';
// let mySurname = 'Monteiro';
// let myFullName= myFName + ' '+mySurname;

//alert("o tamanho da variável é "+mySurname.length)
//alert(myFName.trim().toLowerCase());

//métodos com argumentos
// console.log(myFName)
// console.log(myFullName)

// let ourCourse = 'Técnico de Multimédia';
// //ve a posição de i
// console.log("a letra i aparece na posição "+ourCourse.indexOf('i'));
// //corta Multimedia
// console.log("o curso é "+ourCourse.slice(11))


// //subistui Multimedia por OCOmercio
// console.log("o novo curso é "+ourCourse.replace("Multimédia", "Comércio") + "!");

// //sintaxe alternativa
// console.log(`o novo curso é ${ourCourse.replace("Multimédia", "Comércio")}!`);

// //tipo de dados null
// let myGrade = null;
// console.log("o null é " +myGrade)

//tipo de dados undefinied
// let myWeekend = sexta;
// console.log(myWeekend)

// let answer = prompt("querem ir para a praia?");
// console.log(answer)

// const VOTE_AGE = 18;
// let userAge = prompt("qual é a sua idade?");

// if(userAge<"VOTE_AGE"){
//     alert("ainda não tens idade para votar");
// }else if(userAge == VOTE_AGE){
//     alert("vais votar pela primeira vez, parabéns")
// }else{
//     alert("vota em consciência no domingo!");
// }


// let aluno1 = 'Joaquim';

// console.log(aluno1[3])


// let aluno2= 'Antónia';
// let aluno3 = 'Josefina';

// let alunos = ['Joaquim', 'Antónia', 'Josefina'];

// console.log(alunos[2])
// alunos[1] = 'Rita';
// console.log(alunos)


// let weekDays = ['segunda', 'terça', 'quarta','quinta', 'sexta'];
// console.log("o nosso dia preferido é "+weekDays[4])

// console.log("durante a semana, trabalhamos "+weekDays.length+" dias")

// let shoppingList = ['batatas', 'feijão', 'chocolates'];

// console.log("o item é " +shoppingList[0])
// console.log("o item é " +shoppingList[1])
// console.log("o item é " +shoppingList[2])



//método que adiciona no fim
//shoppingList.push('tomates')

//método que elimina a última posição
//shoppingList.pop()

//método que adiciona ao início do array
//shoppingList.unshift('água')

//método que elinina a primeira posição de um array
//shoppingList.shift();


// let multimediaCourse = {
//     courseName: 'Técnico de Multimédia',
//     hours: 1370,
//     responsible : 'António Costa',
//     modules: ['Sites Dinâmicos', 'Video', '3D']
// } 

// multimediaCourse.hours = 1000;

// console.log("o responsável é "+multimediaCourse.responsible+" e o curso tem "+multimediaCourse.hours+"h e o meu módulo preferido é "+multimediaCourse.modules[0])

//ciclos
// let password = prompt("digite uma pass com pelo menos 6caracteres");


// while(password.length<6){
//    password = prompt("Pass inválida! digite uma pass com pelo menos 6caracteres");
// }

// alert('pass ok!')