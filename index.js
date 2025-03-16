import { criarItemDaLista } from "./scripts/criarItemDaLista.js";  // Importação da função criarItemDaLista
import verificarListaVazia from "./scripts/verificarListaVazia.js";// Importação da função verificarListaVazia
const listaDeCompras = document.getElementById('lista-de-compras');
const botaoAdicionar = document.getElementById('adicionar-item');
    

// Evento para adicionar item à lista
botaoAdicionar.addEventListener('click', (evento) => {
    evento.preventDefault();  // Previne o comportamento padrão de envio de formulário
    const itemDaLista = criarItemDaLista();  // Cria o item a partir da função criarItemDaLista
    listaDeCompras.appendChild(itemDaLista);  // Adiciona o item à lista de compras no HTML
    verificarListaVazia(listaDeCompras);  // Verifica se a lista está vazia após adicionar o item
})

verificarListaVazia(listaDeCompras); // Verifica se a lista está vazia ao carregar a página