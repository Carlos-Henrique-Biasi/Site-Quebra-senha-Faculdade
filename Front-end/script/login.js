document.getElementById('login-form').addEventListener('submit', async function(event) {
    event.preventDefault(); // Evita que a página recarregue ao clicar no botão

    // Pega os valores dos inputs
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    const respostaEl = document.getElementById('resposta');

    respostaElEl.innerText = "Quebrando a senha";
    respostaElEl.style.color = "black";

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
            respostaElmensagemEl.innerText = "SUCESSO: " + dados.message;
            respostaEl.style.color = "green";
        } else {
            respostaEl.innerText = "FALHA: " + dados.message;
            respostaEl.style.color = "red";
        }
    } catch (error) {
        alert = "Erro ao conectar com o servidor.";
    }
});