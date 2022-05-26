
var checkbox = document.querySelectorAll('.checkbox');

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
  
});

var polifarol = 100
var higinter = 250
var lavbanc = 150
var hidracouro = 180


