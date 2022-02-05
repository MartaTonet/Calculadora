// 1- Criar a função 
// 2- Pegar o valor do prompt
// 3 - Separar as letras, reverter e depois juntar
// 4- verificar se o passo três é igual ao valor do prompt


// split serve para fazer divisão de palavras. Colocando aspas simples separa letras por lestras
// toLowerCase usa-se para inverter toas as palavras em menúsculas
function poligamo(){
    alert('Seja bem vindo')
    const entrada = prompt(`Digite uma palavra`).toLowerCase();
    console.log(entrada)
    
    const inverter = entrada.split('').reverse().join('')
    console.log(inverter)

    //if ternario
    //codição ? true : false 
    entrada == inverter ? alert("A plavra lê-se de trás para frente") : alert(" A palavra não lê-se de trás para frente")


    // if(entrada == inverter){
    //     alert(`A palavra lê-se de trás para frente!`)
    // }else{
    //     alert(`A palavra não lê-se de trás para a frente`)
    // }

} 

poligamo();