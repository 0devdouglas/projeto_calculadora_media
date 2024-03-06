const form = document.querySelector("#form-atividade")
const imgAprovado = '<img src="./assets/images/aprovado.png" alt="emoji celebrando"/>'
const imgReprovado = '<img src="./assets/images/reprovado.png" alt="emoji decepcionado"/>'
const spanAprovado = '<span class="resultado aprovado">Aprovado!</span>'
const spanReprovado = '<span class="resultado reprovado">Reprovado!</span>'
const notaMinima = parseFloat(prompt("Digite a nota minima: "));
const atividades = []
const notas = []

let linhas = ""

form.addEventListener("submit", (e) => {

    e.preventDefault()

    adicionaLinha()
    atualizaTabela()
    atualizaMedia()

});

function adicionaLinha () {

    const inputNomeAtividade = document.querySelector("#nome-atividade") 
    const inputNotaAtividade = document.querySelector("#nota-atividade")

    if(atividades.includes(inputNomeAtividade.value)) {
        alert(`A atividade ${inputNomeAtividade.value} já existe.`)
    } else {

        atividades.push(inputNomeAtividade.value);
        notas.push(parseFloat(inputNotaAtividade.value));
    
        let linha = "<tr>";
        linha += `<td>${inputNomeAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value >= 7 ? imgAprovado : imgReprovado}</td>`
        linha += `</tr>`
        linhas += linha;


    }

    inputNomeAtividade.value = ''
    inputNotaAtividade.value = ''
}

function atualizaTabela () {

    const corpoTabela = document.querySelector("tbody");

    corpoTabela.innerHTML = linhas;

}

function atualizaMedia () {

    const mediaFinal = calculaMediaFinal();

    document.querySelector("#media-final-valor").innerHTML  = mediaFinal;
    document.querySelector("#media-final-resultado").innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado

}

function calculaMediaFinal () {
    let somaDasNotas = 0;

    for (let i = 0; i < notas.length; i++) {
        somaDasNotas += notas[i];
        
    }

    return somaDasNotas / notas.length
}