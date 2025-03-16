// criarItemDaLista.js
import gerarDiaDaSemana from './gerarDiaDaSemana.js';

const inputItem = document.getElementById('input-item');
let contador = 0;

export function criarItemDaLista() {
    if (inputItem.value === '') {
        alert('Digite um item para adicionar');
        return;
    }

    const itemDaLista = document.createElement('li'); // Criação de um item na lista do HTML
    const containerItemDaLista = document.createElement('div'); // Criação de um container para o item do HTML
    containerItemDaLista.classList.add('lista-item-container'); // Adição do container ao item do HTML

    const inputCheckbox = document.createElement('input'); // Input do HTML para marcar o item da lista
    inputCheckbox.type = 'checkbox'; // Definição do tipo do input
    inputCheckbox.id = `checkbox-${contador++}`; // Adição de um contador para cada item da lista para que o input seja único

    const nomeItem = document.createElement('p'); // Criação de um parágrafo para o item
    nomeItem.innerText = inputItem.value; // Adição do texto do input ao parágrafo

    // Obter data e hora atuais
    const { diaDaSemana, calendario, horaAtual } = gerarDiaDaSemana(); // Chama a função e desestrutura o retorno

    const dataElement = document.createElement('p'); // Criação de um parágrafo para a data
    dataElement.innerText = `${diaDaSemana} (${calendario}) às ${horaAtual}`; // Adição do texto ao parágrafo
    dataElement.classList.add('texto-data'); // Adição da classe 'texto-data' ao parágrafo

    // Adição dos elementos no item da lista
    itemDaLista.appendChild(dataElement); // Adição do parágrafo de data ao item da lista

    // Adicionar o listener para marcar/desmarcar o item
    inputCheckbox.addEventListener('click', function() {
        nomeItem.style.textDecoration = this.checked ? 'line-through' : 'none';
    });

    containerItemDaLista.appendChild(inputCheckbox); // Adição do checkbox ao container
    containerItemDaLista.appendChild(nomeItem); // Adição do nome do item ao container

    itemDaLista.appendChild(containerItemDaLista); // Adição do container ao item da lista

    inputItem.value = ''; // Limpeza do campo de input
    return itemDaLista; // Retorna o item da lista
}
