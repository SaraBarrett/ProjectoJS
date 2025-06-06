

function helloFunctions(){
    alert('olá, aqui vamos às funções');
}

function letsGoShopping(){
    let shoppingList=[];

    let product = prompt("Qual o produto que quer adicionar à lista?");
    let code = "fim"

    while (product != code){
        shoppingList.push(product);
        product = prompt("Qual o produto que quer adicionar à lista?");
    } 

    for(let element of shoppingList){
            console.log('o item é '+element)
    }
}

function printHeart(){
    alert('❤️');
}

function printHello(){
    alert('Hello');
}

function printHelloTurma(){
    alert('Turma Multimédia');
}


function printAlert(message){
    alert(message);
}

function rant(message){
    console.log(message.toUpperCase())
    console.log(message.toUpperCase())
    console.log(message.toUpperCase())

}

function greet(name, course){
    alert('Olá '+name+ ' benvindo ao curso de '+course);
}

function sum(num1, num2){
    alert("o total é: " + (num1+num2))
}


//escreva uma função chamada is snake eyes
function isSnakeEyes(num1, num2){
    if(num1 == 1 && num2 ==1){
        alert('yay, snake eyes');
    }else{
           alert('não são snake eyes');
    }
}