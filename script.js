const botaoSimular = document.getElementById('btn-simular');
const indicadorStatus = document.getElementById('indicador');

const cenarios = [
    { texto: "Excelente! Rotação de culturas ativa e uso de bioinsumos.", classe: "sustentavel" },
    { texto: "Sustentável. Crédito de carbono integrado e APP preservada.", classe: "sustentavel" },
    { texto: "Atenção: Alto consumo de água identificado no sistema de irrigação.", classe: "alerta" },
    { texto: "Alerta: Necessário aumentar a faixa de mata ciliar na propriedade.", classe: "alerta" }
];

function calcularIndice() {
    const indiceAleatorio = Math.floor(Math.random() * cenarios.length);
    const cenarioSelecionado = cenarios[indiceAleatorio];
    
    indicadorStatus.textContent = cenarioSelecionado.texto;
    indicadorStatus.className = ""; 
    indicadorStatus.classList.add(cenarioSelecionado.classe);
}

botaoSimular.addEventListener('click', calcularIndice);
