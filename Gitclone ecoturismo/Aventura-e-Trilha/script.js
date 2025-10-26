document.addEventListener('DOMContentLoaded', () => {
  const painel = document.getElementById('painelReserva');
  const fechar = document.querySelector('.fechar');
  const btnConfirmar = document.getElementById('confirmarReserva');
  let pacoteAtual = {};

  document.querySelectorAll('.botao-pacote').forEach(botao => {
    botao.addEventListener('click', () => {
      const pacote = botao.closest('.pacote');
      pacoteAtual = {
        nome: pacote.querySelector('h3').textContent,
        preco: pacote.querySelector('.preco').textContent
      };
      document.getElementById('nomePacote').textContent = `Pacote: ${pacoteAtual.nome}`;
      document.getElementById('precoPacote').textContent = `Preço: ${pacoteAtual.preco}`;
      painel.style.display = 'flex';
    });
  });

  fechar.addEventListener('click', () => painel.style.display = 'none');
  window.addEventListener('click', e => { if(e.target == painel) painel.style.display = 'none'; });

  btnConfirmar.addEventListener('click', () => {
    const nomeCliente = document.getElementById('nomeCliente').value.trim();
    const telefone = document.getElementById('telefone').value.trim();
    const email = document.getElementById('email').value.trim();

    if (!nomeCliente || !telefone || !email) {
      alert('Preencha todos os campos!');
      return;
    }

    const reserva = { ...pacoteAtual, nomeCliente, telefone, email };
    console.log('Reserva feita:', reserva);
    alert(`✅ Reserva confirmada!\nPacote: ${reserva.nome}\nCliente: ${reserva.nomeCliente}`);

    document.getElementById('nomeCliente').value = '';
    document.getElementById('telefone').value = '';
    document.getElementById('email').value = '';
    painel.style.display = 'none';
  });
});
