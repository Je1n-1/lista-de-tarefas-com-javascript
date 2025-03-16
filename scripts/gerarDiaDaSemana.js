// gerarDiaDaSemana.js
export function gerarDiaDaSemana() {
    const diaDaSemana = new Date().toLocaleDateString('pt-BR', { weekday: 'long' }); // Adição do dia da semana
    const calendario = new Date().toLocaleDateString('pt-BR'); // Adição da data
    const horaAtual = new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }); // Adição da hora formatada
    return { diaDaSemana, calendario, horaAtual };
}

export default gerarDiaDaSemana; // Exportação da função para uso futuro
