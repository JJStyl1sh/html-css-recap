const nome = document.getElementById("nome");
const email = document.getElementById("email");
const botao = document.getElementById("submit");

function enviar(){

        if(nome.value.lenght < 8 || nome.value == ""){
            alert("PREENCHA O CAMPO NOME CORRETAMENTE");
            nome.focus();
            return false;
        }
        if(email.value.indexOf("@")==-1 || email.value.indexOf(".")==-1  || nome.value == ""){
            alert("PREENCHA O CAMPO NOME CORRETAMENTE");
            email.focus();
            return false;
        }
        
        return true;
    };
