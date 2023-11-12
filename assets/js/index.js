
for(let i = 2023; i > 1900; i--){
    document.getElementById('ano').innerHTML += "<option value="+ i +">" + i +"</option>";
};



function Erro() {
    let email = document.getElementById('emailUsuario').value ; 
    let nome = document.getElementById("nomeUsuario").value ; 
    let ano = document.getElementById('ano').value;
    let p = document.getElementById('resultado');
   
   
    
    

    p.style.color = "red";
    p.style.background = "black";
    p.style.padding = "5px";
    p.style.width ="200px"
    
    if(email == "" || null) {
        
        document.getElementById('resultado').innerHTML ="Erro, Coloque o seu Email"
        
        
    } else if(nome =='' || null ) {
        document.getElementById('resultado').innerHTML ="Erro, Coloque o seu Nome"
 }  
 
 else if(ano == "" || null) {
    document.getElementById('resultado').innerHTML ="Erro, Coloque o Ano de Nascimento"
 } 
 else if(emailUsuario == emailUsuario) {  
    document.getElementById('resultado').innerHTML ="tudo certo";
    
    
}
  
};


function bomDia() {
    let all = new Date();
    let hora = new Date().getHours();
   
    
    if(hora < 12){
        alert('Bom dia :) ,' + all)
    } else if(hora <18) {
        alert('Boa Tarde :0, ' + all)
    }else if(hora > 18) {
        alert('Boa Noite :), ' + all)
    }
}

bomDia()
