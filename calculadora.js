//Escolha da operação
// 1- Soma
// 2 - Subtração
// 3 - Multiplicação
// 4 - Divisão
// 5 - Modulo

function calculadora(){
    const inicio = Number(prompt(`Escolhe uma das opções.\n 1- Soma\n 2 - Subtração\n 3 - Multiplicação\n 4 - Divisão \n 5 - Modulo/Resto da divisão\n 6 - Exponenciação`))
    console.log(inicio)
    
    if(!inicio){
        alert(`Por favor escolha uma das opções!!`)
        calculadora();
    }else if(inicio >= 7){
        alert(`Entrada invalida\n Escolha uma das opções sugeridas`)
        calculadora();
    }else{
        let numero1 = Number(prompt("Digite o primeiro valor!"));
        let numero2 = Number(prompt("Digite o segundo valor!"));
        
        function novaOperacao(){
            let novo = Number(prompt(`Deseja fazer uma nova operaçã?\n 1 - Sim\n 2- Não`))

            //switch usa-se para fazer condições 
            switch (novo) {
                case 1:
                    calculadora();
                    break;
                case 2:
                    alert('Espero te ver novamente')
                    break;    
            
                default:
                    alert('Opção invalida! Escolha uma sugerida')
                    novaOperacao();
                    break;
            }
        }

        function soma(){
            let resultado = numero1 + numero2
            alert(`A soma entre ${numero1} e ${numero2} é ${resultado}`)
            
            novaOperacao();        
        }

        function subtracao(){
            let resultado = numero1 - numero2
            alert(`A subtração entre ${numero1} e ${numero2} é ${resultado}`);

            novaOperacao();
        }

        function multiplicacao(){
            let resultado = numero1 * numero2
            alert(`A multiplicação entre ${numero1} e ${numero2} é ${resultado}`);

            novaOperacao();
        }

        function divisao(){
            let resultado = numero1 / numero2
            alert(`A divisão entre ${numero1} e ${numero2} é ${resultado}`);

            novaOperacao();
        }

        function moduloOuResto(){
            let resultado = numero1 % numero2
            alert(`O resto da divisão entre ${numero1} e ${numero2} é ${resultado}`);

            novaOperacao();
        }

        function expoente(){
            let resultado = numero1 ** numero2
            alert(`A operação ${numero1} elevado a ${numero2} é igual à ${resultado}`);

            novaOperacao();
        }


        // Swistch será usado para escolher a opçãp de operação Ex: soma, subtração etc
        switch (inicio) {
            case 1:
                soma();
                break;   
            case 2:
                subtracao();
                break;
            case 3:
                multiplicacao();
                break; 
            case 4:
                divisao();
                break    
            case 5:
                moduloOuResto();
                break;
             case 6:
                 expoente();
                 break;
            default:
                break;
        }
        
    }
}

calculadora()