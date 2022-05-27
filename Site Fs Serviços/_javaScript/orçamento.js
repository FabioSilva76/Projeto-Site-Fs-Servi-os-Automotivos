var servicos = ['Polimento de Faróis', 'Higienização Interna', 'Lavagem dos Bancos', 'Hidratação em Couro'];


document.addEventListener("DOMContentLoaded",function(){
    document.getElementById("orcar").addEventListener("click",function(){
        var elementos= document.getElementsByClassName("servicos");

        for(i=0;i<elementos.length;i++){
            if(elementos[i].checked){''
                document.getElementById("resultado").innerHTML += '<li>'+servicos[i]+'</li>';
            }
        }
        document.getElementById("orcar") ;
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
 




