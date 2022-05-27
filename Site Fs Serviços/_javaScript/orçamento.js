
var servicos = ['Polimento de Faróis', 'Higienização Interna', 'Lavagem dos Bancos', 'Hidratação em Couro'];
/* 
Acima criamos vetores com todas as opções disponiveis para a seleção na mesma ordem que está 
no formulário. Isto é necessário para evitar usar acentuação no atributo value, do checkbox  */ 

document.addEventListener("DOMContentLoaded",function(){ //Quando o documento for carregado
    document.getElementById("btnOrcar").addEventListener("click",function(){ // quando houver o click do botão.
        var elementos= document.getElementsByClassName("servicos"); // Gravamos na vareável todos elementos que contém a class servicos.

        for(i=0;i<elementos.length;i++){ // For começando em 0 e vai até a quantidade de elementos encontrado.
            if(elementos[i].checked){ // Verificamos se o elemento está com atributo checked ativo. retorna true ou false.
                document.getElementById("resultado").innerHTML += '<li>'+servicos[i]+'</li>';

                /* Acima inserimos no UL um elemnto LI contendo o valor de vetor na mesma posição que yem a variável [i].
                Se o segundo checkbox for selecionado, então o valor de [i] é 1 e na posição 1 do vetor é Higienização Interna, a mesma que foi selecionada */
            }
        }
        document.getElementById("btnOrcar").disabled = "disabled";// Desativamos o botão.
    });
});























/*
var checkbox = document.querySelectorAll('input');

var selecionados = 0;

var btn = document.querySelector('#orcar')

btn.addEventListener('click', function(e){
    e.preventDefault();

    selecionados = 0

    checkbox.forEach(function(el){
        if(el.checked){
            selecionados++;
        }
        
    });
    console.log(selecionados);
  
});*/
 




