let botoes = document.querySelectorAll('.botao');
console.log(botoes.length);
for (i = 0; i < botoes.length; i++){
    let valor = botoes[i].value;
    botoes[i].onclick = function(){
        console.log(valor);
        if (valor != 'igual' && valor != 'C' && valor != '<'){
            let resultado = document.getElementById('resultado').innerHTML;
            document.getElementById('resultado').innerHTML = resultado + valor; 
        }else{
            if (valor == 'igual'){
                let resultado = document.getElementById('resultado').innerHTML;
                if (resultado != ''){
                    document.getElementById('resultado').innerHTML = eval(resultado); 
                }else{
                    document.getElementById('resultado').innerHTML = 'Nada...'; 
                }
            }
            if (valor == 'C'){
                document.getElementById('resultado').innerHTML = '';
            }
            if (valor == '<'){
                let resultado = document.getElementById('resultado').innerHTML;
                document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1); 
            }

        }
    }
}
