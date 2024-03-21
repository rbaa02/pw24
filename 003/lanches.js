var qtdLanchesDia = document.getElementById('qtdLanches');
var idadeAtual = document.getElementById('idadeAtual');
var idadeMaxima = document.getElementById('idadeMax');
var resultado = document.getElementById('resultado');
var anosRestantes;


const calcular = () => {
    qtdLanches = Number(qtdLanchesDia.value);
    iAtual = Number(idadeAtual.value);
    iMaxima = Number(idadeMaxima.value);
    
    if ((iAtual > idadeMaxima) || (iAtual < 0) || (iMaxima < 0) || (qtdLanches < 0)) {
        alert("Digite uma valores válidos!");
        return;
    };

    if ((!qtdLanches) || (!iAtual) || (!iMaxima)) {
        alert("Preencha todos os campos!");
        return;
    }
    anosRestantes = iMaxima - iAtual;

    resultado.textContent = `Você precisará de ${qtdLanches * anosRestantes * 365} lanches para durar até a velhice de ${anosRestantes} anos`;
}

