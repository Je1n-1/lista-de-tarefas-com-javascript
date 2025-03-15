document.addEventListener('DOMContentLoaded', () => {   //criação das variaveis e constantes para uso futuro
    let contador = 0;
    const listaDeCompras = document.getElementById('lista-de-compras');                       
    const inputItem = document.getElementById('input-item');
    const botaoAdicionar = document.getElementById('adicionar-item');
    const mensagemListaVazia = document.querySelector('.mensagem-lista-vazia');

    botaoAdicionar.addEventListener('click', (evento) => {      //criação de um evento para adicionar itens a lista
        if (inputItem.value.trim() === '') {
            alert('Digite um item para adicionar');
            return;
        }

        const itemDaLista = document.createElement('li');                //criação de um item na lista do html
        const containerItemDaLista = document.createElement('div');     //criação de um container para o item do html
        containerItemDaLista.classList.add('lista-item-container');    // adição do container ao item do html

        const inputCheckbox = document.createElement('input');       //input dohtml para marcar o item da lista
        inputCheckbox.type = 'checkbox';                            //definição do tipo do input
        inputCheckbox.id = `checkbox-${contador++}`;               //adição de um contador para cada item da lista para que o input seja unico e possa ser apagavel futuramente

        const nomeItem = document.createElement('p');           //criação de um paragrafo para o item
        nomeItem.innerText = inputItem.value;                  //adição do texto do input ao paragrafo

        inputCheckbox.addEventListener('click', function() {
            nomeItem.style.textDecoration = this.checked ? 'line-through' : 'none';
        });
                                                                          //const itemDaLista = document.createElement('li'); 
        containerItemDaLista.appendChild(inputCheckbox);                 //adição do input ao container
        containerItemDaLista.appendChild(nomeItem);                     //adição do paragrafo ao container

        itemDaLista.appendChild(containerItemDaLista);                //adição do container ao item da lista

        const diaDaSemana = new Date().toLocaleDateString('pt-BR', { weekday: 'long' });                      //adição do dia da semana  ao item da lista
        const calendario = new Date().toLocaleDateString('pt-BR');                                           // adição da data ao item da lista
        const horaAtual = new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });   // adição da hora ao item da lista

        const dataElement = document.createElement('p');                             //criação de um paragrafo para a data
        dataElement.innerText = `${diaDaSemana} (${calendario}) às ${horaAtual}`;   //adição do texto ao paragrafo
        dataElement.classList.add('texto-data');                                   //adição do paragrafo a classe texto-data do html
        itemDaLista.appendChild(dataElement);                                     //adição do paragrafo ao container item da lista                                     
                                                                                 //itemdalista basicamente é o LI do html
        listaDeCompras.appendChild(itemDaLista);                                //adição do item da lista a lista de compras do html pai

        inputItem.value = '';                                                 //limpeza do input
        
        verificarListaVazia();
    });

    function verificarListaVazia() {
        const itensDaLista = listaDeCompras.querySelectorAll('li');                        //verificação se a lista está vazia
        mensagemListaVazia.style.display = itensDaLista.length === 0 ? 'block' : 'none';  //se a lista estiver vazia a mensagem de lista vazia aparece
    }

    verificarListaVazia();
});
