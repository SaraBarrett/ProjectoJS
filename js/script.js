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
console.log("o novo curso é "+ourCourse.replace("Multimédia", "Comércio"))