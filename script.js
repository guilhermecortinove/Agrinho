// Seleção dos elementos do DOM
const botaoSimular = document.getElementById('btn-simular');
const indicador Status = document.getElementById('indicador');

// Lista de possíveis cenários agrícolas sustentáveis
const cenarios = [
    { texto: "Excelente! Rotação de culturas ativa e uso de bioinsumos.", classe: "sustentavel" },
    { texto: "Sustentável. Crédito de carbono integrado e APP preservada.", classe: "sustentavel" },
    { texto: "Atenção: Alto consumo de água identificado no sistema de irrigação.", classe: "alerta" },
    { texto: "Alerta: Necessário aumentar a faixa de mata ciliar na propriedade.", classe: "alerta" }
];

// Função para simular a análise
function calcularIndice() {
    // Sorteia um dos cenários da lista
    const indiceAleatorio = Math.floor(Math.random() * cenarios.length);
    const cenarioSelecionado = cenarios[indiceAleatorio];
    
    // Atualiza o texto e a estilização do elemento na tela
    indicadorStatus.textContent = cenarioSelecionado.texto;
    
    // Remove classes antigas e adiciona a nova correspondente ao cenário
    indicadorStatus.className = ""; 
    indicadorStatus.classList.add(cenarioSelecionado.classe);
}

// Evento de escuta ao clique do botão
botaoSimular.addEventListener('click', calcularIndice);
