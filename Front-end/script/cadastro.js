document.getElementById('botaoCadastro').addEventListener('click', async function(event) {
    event.preventDefault();

    // Pega os valores dos inputs definidos no seu HTML
    const user = document.getElementById('inputUsuario').value;
    const senhaDigitada = document.getElementById('inputSenha').value;
    const mensagemEl = document.getElementById('mensagem');

    try {
        // Envia os dados para a rota de cadastro no Node.js
        const resposta = await fetch('/api/cadastro', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                username: user, 
                senha: senhaDigitada 
            })
        });

        const dados = await resposta.json();

        // Verifica se o cadastro foi aprovado ou recusado pelo back-end
        if (resposta.ok) {
            mensagemEl.innerText = "SUCESSO: " + dados.message;
            mensagemEl.style.color = "green";
            setTimeout(()=>{
                window.location.href = 'Login.html'
            }, 2500)
        } else {
            mensagemEl.innerText = "FALHA: " + dados.message;
            mensagemEl.style.color = "red";
        }
    } catch (error) {
        mensagemEl.innerText = "Erro ao conectar com o servidor.";
        mensagemEl.style.color = "red";
    }
});