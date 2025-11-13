function entrar() {
    const email = document.getElementById('email').value;
    const nome = email ? email.split('@')[0] : 'Convidado';
    localStorage.setItem('usuarioNome', nome);
    // redireciona direto para boasvindas
    window.location.href = 'boasvindas.html';
  }
  