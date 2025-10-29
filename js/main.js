function clean() {
    document.querySelectorAll('input[type="text"]').forEach(text => text.value == "");
}

function send() {
    const name = document.getElementById('name').value;
    const cpf = document.getElementById('cpf').value;
    const selectTime = document.querySelector('input[name="select"]:checked').value;
    const socio = document.getElementById('fan').checked;
    const shirt = document.getElementById('oficialshirt').checked;
    const club = document.getElementById('clubs').value

    alert(`
        Nome: ${name}\n
        CPF: ${cpf}\n
        Quantas vezes vai ao estádio?: ${selectTime}\n
        Sócio Torcedor: ${socio? 'Sim': 'Não'}\n
        Possui camisa oficial?: ${shirt ? 'Sim': 'Não'}\n
        Clube: ${club == 'none' ? 'N/A' : club}
        `);

    clean();
}

function execution() {
    const sendBtn = document.getElementById('btn-send');
    const closeBtn = document.getElementById('btn-clean');

    sendBtn.addEventListener('click', send);
    closeBtn.addEventListener('click', clean);
}

execution();