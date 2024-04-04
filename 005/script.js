const ul = document.createElement('div');
const liAluno = new Array();
const liProfessor = new Array();

function change(opc) {
    ul.innerText = '';
    const btn = document.getElementById('btn');
    if (opc) { // 1 == ALUNO == TRUE /// 0 == PROFESSOR == FALSE
        btn.textContent = 'CRIAR ALUNO';
        btn.onclick = () => {coletaPrompt(1)};
        criarElemento("Aluno");
    }
    else{
        btn.textContent = 'CRIAR PROFESSOR';
        btn.onclick = () => {coletaPrompt(0)};
        criarElemento("Professor");
    }
}

function coletaPrompt(opc){
    const str = opc ? "Aluno" : "Professor"
    const ipt = prompt(`Cadastrar ${str}`);
    if (!ipt) return;
    eval(`li${str}.push(ipt)`)
    criarElemento(str);
}

function criarElemento(str){
    ul.innerText = '';
    eval(`li${str}`).forEach(element => {
        ul.innerHTML += `<div id='d'>${str}: ${element}</div>`;
    });
    document.getElementById('result').insertAdjacentElement('afterbegin', ul);
}
