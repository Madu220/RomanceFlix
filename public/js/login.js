function entrar() {
  const email = document.getElementById('email').value.trim();
  const senha = document.getElementById('senha').value.trim();

  if (!email || !senha) {
    alert("Por favor, preencha o email e a senha.");
    return;
  }

  fetch('usuarios')
    .then(response => response.json())
    .then(data => {
      const usuario = data.find(u => u.email === email && u.senha === senha);
      
      if (usuario) {
        // salva o nome no localStorage
        localStorage.setItem('usuarioNome', usuario.nome);
        alert(`Bem-vindo(a), ${usuario.nome}!`);
        window.location.href = 'boasvindas.html';
      } else {
        alert("Email ou senha incorretos. Tente novamente.");
      }
    })
    .catch(error => {
      console.error("Erro ao verificar login:", error);
      alert("Ocorreu um erro ao fazer login.");
    });
}
