document.getElementById('login-form').addEventListener('submit', async function(event) {
    event.preventDefault(); // Evita que a página recarregue ao clicar no botão

    // Pega os valores dos inputs
    const user = document.getElementById('username').value;
    const senha = document.getElementById('password').value;
    const respostaEl = document.getElementById('resposta');

    if(user == undefined){
        return mensagemEl.textContent = "Erro, digite um usuário"
    }

    if(senha == undefined){
        return mensagemEl.textContent = "Erro, digite um usuário"
    }

    try {
        // Envia os dados para o nosso servidor Node.js na rota /api/login
        const resposta = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                 username: user,
                 senha : senha
                })
        });

        const dados = await resposta.json();

        // Verifica se deu certo ou errado
        if (resposta.ok) {
            respostaEl.innerText = "SUCESSO: " + dados.message;
            respostaEl.style.color = "green";
            localStorage.setItem("idUsuario", dados.id);
            setTimeout(()=>{
                window.location.href = 'sucesso.html'
            }, 2500)
        } else {
            respostaEl.innerText = "FALHA: " + dados.message;
            respostaEl.style.color = "red";
        }

        
    } catch (error) {
        alert = "Erro ao conectar com o servidor.";
    }
});