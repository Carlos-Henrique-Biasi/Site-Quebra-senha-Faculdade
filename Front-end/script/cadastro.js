document.getElementById('botaoCadastro').addEventListener('click', async function(event) {
    event.preventDefault();

    // Pega os valores dos inputs definidos no seu HTML
    const user = document.getElementById('inputUsuario').value;
    const senhaDigitada = document.getElementById('inputSenha').value;
    const mensagemEl = document.getElementById('mensagem');

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