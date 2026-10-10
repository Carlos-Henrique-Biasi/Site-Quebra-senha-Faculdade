const botaoVerificar = document.getElementById("verificarUsuario")
const resposta1 = document.getElementById('verificarConta')
const resposta2 = document.getElementById('verificarSenha')

const id_Usuario = localStorage.getItem("idUsuario");


botaoVerificar.addEventListener("click", verificarConta)

async function verificarConta(){
    resposta1.textContent = ""
    resposta2.textContent = ""

    const resposta = await fetch(`api/usuario/${id_Usuario}`)
    const usuario = await resposta.json()
    
    if(!resposta.ok){
        resposta1.textContent = "Usuário não localizado"
        resposta2.textContent = ""
    } else {
        resposta1.textContent = `Usuário: ${usuario.username}`
        resposta2.textContent = `Senha: ${usuario.senhaVisivel}`
    }
}