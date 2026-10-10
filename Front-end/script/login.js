document.getElementById('login-form').addEventListener('submit', async function(event) {
    event.preventDefault(); // Evita que a página recarregue ao clicar no botão

    // Pega os valores dos inputs
    const user = document.getElementById('username').value;
    const senhaDigitada = document.getElementById('password').value;
    const respostaEl = document.getElementById('resposta');

   // 1. Validação do Utilizador (Não pode estar vazio ou ter apenas espaços)
if (!user || user.trim() === "") {
    return mensagemEl.textContent = "Erro: O campo do utilizador não pode estar vazio.";
}

// 2. Validação da Palavra-passe (Não pode estar vazia)
if (!senhaDigitada || senhaDigitada.trim() === "") {
    return mensagemEl.textContent = "Erro: A palavra-passe não pode estar vazia.";
}

// 3. Validação do Tamanho (Máximo de 6 caracteres)
if (senhaDigitada.length > 6) {
    return mensagemEl.textContent = "Erro: A palavra-passe não pode ter mais de 6 caracteres.";
}

// 4. Validação de Espaços e Caracteres Especiais
// A Regex /^[a-zA-Z0-9]+$/ garante que a string tem APENAS letras (maiúsculas ou minúsculas) e números.
const regexSenha = /^[a-zA-Z0-9]+$/;
if (!regexSenha.test(senhaDigitada)) {
    return mensagemEl.textContent = "Erro: A palavra-passe não pode ter espaços nem caracteres especiais.";
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