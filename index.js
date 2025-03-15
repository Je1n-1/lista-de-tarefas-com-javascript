import { criarItemDaLista } from "./scripts/criarItemDaLista.js";  //importação da função criarItemDaLista do arquivo criarItemDaLista.js

document.addEventListener('DOMContentLoaded', () => {            //criação das variaveis e constantes para uso futuro
    const listaDeCompras = document.getElementById('lista-de-compras');                       
    const botaoAdicionar = document.getElementById('adicionar-item');
    const mensagemListaVazia = document.querySelector('.mensagem-lista-vazia');

    botaoAdicionar.addEventListener('click', (evento) => {       //criação de um evento para adicionar itens a lista
        evento.preventDefault();      
        const itemDaLista = criarItemDaLista();                //chamada da função criarItemDaLista
        listaDeCompras.appendChild(itemDaLista);              //adição do item da lista a lista de compras do html pai
        verificarListaVazia();
    });

    function verificarListaVazia() {
        const itensDaLista = listaDeCompras.querySelectorAll('li');                        //verificação se a lista está vazia
        mensagemListaVazia.style.display = itensDaLista.length === 0 ? 'block' : 'none';  //se a lista estiver vazia a mensagem de lista vazia aparece
    }

    verificarListaVazia();
});
