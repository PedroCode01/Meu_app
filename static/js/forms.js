document.getElementById('formLogin').addEventListener('submit', async function (event) {
    event.preventDefault(); // Evita o envio tradicional do formulário

    // CORREÇÃO: Mudado de 'login' para 'nome_usuario' para bater com o HTML
    const login = document.getElementById('nome_usuario').value;
    const senha = document.getElementById('senha').value;

    console.log('Login:', login); // debugando valores no console do navegador
    console.log('Senha:', senha); 

    try {
        console.log("url: ", `${config.backendUrl}/api/autenticarLogin`);
        
        const response = await fetch(`${config.backendUrl}/api/autenticarLogin`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ login: login, senha: senha }),
        });

        console.log('Chamada da API. Aguardando resposta...');
        console.log('Resposta bruta:', response); 
        console.log('Status da resposta:', response.status);

        const text = await response.text(); 
        console.log('Conteúdo da resposta:', text);

        const data = JSON.parse(text); 
        console.log('Resposta da API:', data);

        const mensagemDiv = document.getElementById('mensagem');
        if (mensagemDiv) {
            mensagemDiv.style.display = 'block';

            if (data.status === 1) {
                mensagemDiv.className = 'sucesso';
                mensagemDiv.textContent = 'Login efetuado com sucesso!';
            } else {
                mensagemDiv.className = 'erro';
                mensagemDiv.textContent = data.aviso;
            }
        }
    } catch (error) {
        console.error('Erro ao fazer login:', error);
        const mensagemDiv = document.getElementById('mensagem');
        if (mensagemDiv) {
            mensagemDiv.style.display = 'block';
            mensagemDiv.className = 'erro';
            mensagemDiv.textContent = 'Erro ao conectar com o servidor.';
        }
    }
});
