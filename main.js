window.alert("Minha primeira mensagem"); 

// alert só tem a opção de confirmar

window.confirm("Tá gostando meu bom?")

// confirm, como o proprio nome sugere, voce pode confirmar ou cancelar algo


window.prompt("Qual seu nome, meu bom?")


// prompt ( o usuário pode escrever)


vetores


let num = [6, 8, 4];
console.log(num);
num.sort();
let posi = num.indexOf(3); 
// se voltar -1, nao existe. Se der algum valor positivo, existe
if(posi == -1){
    console.log('O valor não foi encontrado.')
}
else{
    console.log(posi);
}


for(let pos in num){
    console.log(`A posição ${pos} tem o valor de ${num[pos]}`);
};
//  loop de repeticao com vetor

// declaro a váriavel pos com o valor inicial 0, enquanto pos for menor que o comprimento(lenght) de num, pos recebe +1
num[3] = 9; // nesse modo adiciona de forma especifica pra qual lugar voce quer 
num.push(7); //  mas tbm há como fazer sem ser por isso, usando o push
num.length;  // mostra o cumprimento de cada vetor
num.sort(); // organiza os elementos do vetor em ordem crescente


console.log(`os valores do nosso vetor são: ${num}`); 
console.log(`O primeiro valor do vetor é ${num[1]}`) 
console.log(num.length)  



//   "$" seleciona a várival {colocar a variável dentro dos colchetes}
// console.log(chama a váriavel)














