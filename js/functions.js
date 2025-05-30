

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