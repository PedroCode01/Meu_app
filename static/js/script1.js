document.addEventListener("DOMContentLoaded", function() {
    console.log("Script carregado com sucesso!");

    // 1. Monitora o envio do formulário de login
    const formLogin = document.getElementById("formLogin");
    if (formLogin) {
        formLogin.addEventListener("submit", function(event) {
            console.log("Tentando enviar o formulário de login...");
            
            var campoUsuario = document.getElementById("nome_usuario");
            var campoSenha = document.getElementById("senha");

            // Verifica se o campo de usuário existe
            if (!campoUsuario) {
                console.error("ERRO: O input com id='nome_usuario' não foi encontrado!");
                event.preventDefault();
                return;
            }

            // Verifica se o campo de senha existe
            if (!campoSenha) {
                console.error("ERRO: O input com id='senha' não foi encontrado!");
                event.preventDefault();
                return;
            }

            var senha = campoSenha.value;

            // Validação do tamanho da senha
            if (senha.length < 8) {
                alert("A senha deve ter pelo menos 8 caracteres");
                event.preventDefault();
                return;
            }

            // Validação de maiúscula e número
            var uppercaseRegex = /[A-Z]/;
            var numeroRegex = /[0-9]/;
            
            if (!uppercaseRegex.test(senha) || !numeroRegex.test(senha)) {
                alert("A senha deve conter pelo menos uma letra maiúscula e um número");
                event.preventDefault();
                return;
            }

            console.log("Validação passou! Enviando para o Flask...");
        });
    }
});

