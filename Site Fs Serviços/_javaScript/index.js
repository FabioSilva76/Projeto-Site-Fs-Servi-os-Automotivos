
var a= window.document.getElementById("foto1")
a.addEventListener("click", clicar)
a.addEventListener("mouseenter", entrar)
a.addEventListener("mouseout", sair)

function clicar(){
    a.innerText= 'LAVAGEM DE BANCOS COM PRODUTOS PROPRIOS!'    
}
function entrar(){
    a.innerText= 'Click'
}
function sair(){
    a.innerText= ''
    
}

var b= window.document.getElementById("foto2")
b.addEventListener("click", clicar)
b.addEventListener("mouseenter", entrar)
b.addEventListener("mouseout", sair)

function clicar(){
    b.innerText= 'LAVAGEM DE BANCOS COM PRODUTOS PROPRIOS!'    
}
function entrar(){
    b.innerText= 'Click'
}
function sair(){
    b.innerText= ''
    
}