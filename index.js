import divida from 'readline-sync'

let total_divida
let total_juros
let valor_juros
let valor_devido = divida.question('informe o valor devido:');

    
if(valor_devido > 0)
{
    let vencimento = divida.question('informe quantos dias se passaram desde o vencimento do boleto:');

    if(vencimento > 0){

        if(vencimento > 15){

             valor_juros = 10
             
        }
        else
        {

             valor_juros = 5

        } 
    
        total_juros = (valor_devido / 100) * valor_juros;
        total_divida = Number(valor_devido) + Number(total_juros)
        console.log('Valor original da divida: ' + 'R$ ' + valor_devido);
        console.log('Dias atrasados ' + 'R$ ' + vencimento);
        console.log('Taxa de Juros: ' + valor_juros);
        console.log('Valor total com Juros: ' + 'R$ ' + total_divida);
         
    }
    else
    {
        console.log("Você está em dia!");
    }
}    
else
{
console.log('voce nao possui dividas')
}      
        
        





















    /*
        valor_juros = (valor_devido / 100) * 5;
        total_divida = Number(valor_devido) + Number(valor_juros)
        console.log('Valor original da divida: ' + 'R$ ' + valor_devido);
        console.log('Dias atrasados ' + 'R$ ' + vencimento);
        console.log('Taxa de Juros: ' + valor_juros);
        console.log('Valor total com Juros: ' + 'R$ ' + total_divida);


  
        
        total_divida = Number(valor_devido) + Number(valor_juros)
        console.log('Valor original da divida: ' + 'R$ ' + valor_devido);
        console.log('Dias atrasados ' + 'R$ ' + vencimento);
        console.log('Taxa de Juros: ' + valor_juros);
        console.log('Valor total com Juros: ' + 'R$ ' + total_divida);





        let total_divida; */