// Variáveis de Estado do Jogo (Lógica exigida na Rubrica)
let dinheiro = 1000;
let saudeSolo = 100;
let alimentoProduzido = 0;
let safraAtual = 1;
const metaAlimento = 150; // Meta fixa por safra

// Mapeamento dos elementos HTML
const txtDinheiro = document.getElementById('txt-dinheiro');
const txtAlimento = document.getElementById('txt-alimento');
const txtSafra = document.getElementById('txt-safra');
const barraSolo = document.getElementById('barra-solo');
const textoTutorial = document.getElementById('texto-tutorial');
const btnProximaSafra = document.getElementById('btn-proxima-safra');

// Botões de Ação
document.getElementById('btn-quimico').addEventListener('click', acaoMonocultura);
document.getElementById('btn-sustentavel').addEventListener('click', acaoAgrofloresta);
document.getElementById('btn-biologico').addEventListener('click', acaoManejoBiologico);
btnProximaSafra.addEventListener('click', avancarSafra);

// Função para atualizar a interface visual
function atualizarInterface() {
    txtDinheiro.innerText = `R$ ${dinheiro}`;
    txtAlimento.innerText = `${alimentoProduzido} / ${metaAlimento} kg`;
    txtSafra.innerText = safraAtual;
    
    // Atualiza a barra de saúde do solo
    barraSolo.style.width = `${saudeSolo}%`;
    barraSolo.innerText = `${saudeSolo}%`;

    // Lógica visual intuitiva de cores da barra de solo
    if (saudeSolo > 60) {
        barraSolo.style.backgroundColor = '#2e7d32'; // Verde
    } else if (saudeSolo > 30) {
        barraSolo.style.backgroundColor = '#ef6c00'; // Laranja
    } else {
        barraSolo.style.backgroundColor = '#c62828'; // Vermelho
    }

    // Verifica se atingiu a meta de produção para liberar o botão de avançar safra
    if (alimentoProduzido >= metaAlimento) {
        btnProximaSafra.removeAttribute('disabled');
        btnProximaSafra.className = 'ativo';
        textoTutorial.innerHTML = "<strong>Muito bem!</strong> Você atingiu a meta de alimentos da cidade. Clique em 'Avançar de Safra' para continuar seu legado.";
    }

    // Condição de Derrota (Solo esgotado)
    if (saudeSolo <= 0) {
        saudeSolo = 0;
        finalizarJogo(false, "O solo da sua fazenda ficou completamente infértil devido ao manejo inadequado! O ecossistema entrou em colapso. Tente novamente equilibrando a produção.");
    }
}

// Ações do Jogador (Lições do Agro Sustentável)
function acaoMonocultura() {
    dinheiro += 400;       // Dá muito dinheiro rápido
    saudeSolo -= 25;       // Degrada gravemente o solo
    alimentoProduzido += 60;
    textoTutorial.innerText = "Você optou pela Monocultura intensa. Rendeu bom lucro e alimento, mas o solo se desgastou pela falta de nutrientes e biodiversidade!";
    atualizarInterface();
}

function acaoAgrofloresta() {
    if (dinheiro >= 200) {
        dinheiro -= 200;   // Custo de implantação
        saudeSolo += 20;   // Regenera o meio ambiente
        if (saudeSolo > 100) saudeSolo = 100;
        alimentoProduzido += 40;
        textoTutorial.innerText = "Excelente escolha! A Agrofloresta (árvores plantadas junto à cultura) protegeu o solo contra a erosão e melhorou a saúde da terra.";
    } else {
        textoTutorial.innerText = "Dinheiro insuficiente para investir na transição para Agrofloresta!";
    }
    atualizarInterface();
}

function acaoManejoBiologico() {
    if (dinheiro >= 100) {
        dinheiro -= 100;
        saudeSolo += 5;    // Mantém estável/leve melhora
        if (saudeSolo > 100) saudeSolo = 100;
        alimentoProduzido += 50;
        textoTutorial.innerText = "Manejo Integrado Pragas com controle biológico (joaninhas)! Pragas controladas sem agredir quimicamente o lençol freático.";
    } else {
        textoTutorial.innerText = "Dinheiro insuficiente para defensivos biológicos!";
    }
    atualizarInterface();
}

// Avançar de Safra (Controle dos ciclos)
function avancarSafra() {
    if (safraAtual < 5) {
        safraAtual++;
        alimentoProduzido = 0; // Reseta para a nova safra
        btnProximaSafra.setAttribute('disabled', 'true');
        btnProximaSafra.className = 'desativado';
        textoTutorial.innerText = `Safra ${safraAtual} iniciada! Continue produzindo em equilíbrio.`;
        atualizarInterface();
    } else {
        finalizarJogo(true, `Parabéns! Você concluiu as 5 safras mantendo o "Agro forte e o futuro sustentável". Seu patrimônio final foi de R$ ${dinheiro} com o solo saudável!`);
    }
}

// Finalização do Jogo
function finalizarJogo(vitoria, mensagem) {
    textoTutorial.innerHTML = `<strong>${vitoria ? 'VITÓRIA' : 'FIM DE JOGO'}</strong><br>${mensagem}`;
    document.getElementById('btn-quimico').setAttribute('disabled', 'true');
    document.getElementById('btn-sustentavel').setAttribute('disabled', 'true');
    document.getElementById('btn-biologico').setAttribute('disabled', 'true');
    btnProximaSafra.setAttribute('disabled', 'true');
    btnProximaSafra.className = 'desativado';
}

// Inicialização do Game
atualizarInterface();
