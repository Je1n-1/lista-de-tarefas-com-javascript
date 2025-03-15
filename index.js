document.addEventListener('DOMContentLoaded', () => {
    let contador = 0;
    const listaDeCompras = document.getElementById('lista-de-compras');
    const inputItem = document.getElementById('input-item');
    const botaoAdicionar = document.getElementById('adicionar-item');

    botaoAdicionar.addEventListener('click', (evento) => {
        if (inputItem.value.trim() === '') {
            alert('Digite um item para adicionar');
            return;
        }

        const itemDaLista = document.createElement('li');
        const containerItemDaLista = document.createElement('div');
        containerItemDaLista.classList.add('lista-item-container');

        const inputCheckbox = document.createElement('input');
        inputCheckbox.type = 'checkbox';
        inputCheckbox.id = `checkbox-${contador++}`; // Evita conflitos de ID

        const nomeItem = document.createElement('p');
        nomeItem.innerText = inputItem.value;

        containerItemDaLista.appendChild(inputCheckbox);
        containerItemDaLista.appendChild(nomeItem);

        itemDaLista.appendChild(containerItemDaLista);
        listaDeCompras.appendChild(itemDaLista);

        inputItem.value = ''; // Limpa o campo após adicionar
        
        const diaDaSemana = new Date().toLocaleDateString('pt-BR', {weekday: 'long'});
        const calendario = new Date().toLocaleDateString('pt-BR');
        const horaAtual = new Date().toLocaleTimeString('pt-BR', {hour: '2-digit', minute: '2-digit'});

        const dataElement = document.createElement('p');
        dataElement.innerText = `${diaDaSemana} (${calendario}) às ${horaAtual}`;
        dataElement.classList.add('texto-data');
        itemDaLista.appendChild(dataElement);
        listaDeCompras.appendChild(itemDaLista);

       
    });
});
