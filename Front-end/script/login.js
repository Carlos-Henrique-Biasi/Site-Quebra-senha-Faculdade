document.getElementById('login-form').addEventListener('submit', async function(event) {
    event.preventDefault(); // Evita que a página recarregue ao clicar no botão

    // Pega os valores dos inputs
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    const mensagemEl = document.getElementById('mensagem');

    mensagemEl.innerText = "Quebrando a senha";
    mensagemEl.style.color = "black";

    try {
        // Envia os dados para o nosso servidor Node.js na rota /api/login
        const resposta = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username: user, password: pass })
        });

        const dados = await resposta.json();

        // Verifica se deu certo ou errado
        if (resposta.ok) {
            mensagemEl.innerText = "SUCESSO: " + dados.message;
            mensagemEl.style.color = "green";
        } else {
            mensagemEl.innerText = "FALHA: " + dados.message;
            mensagemEl.style.color = "red";
        }
    } catch (error) {
        mensagemEl.innerText = "Erro ao conectar com o servidor.";
    }
});