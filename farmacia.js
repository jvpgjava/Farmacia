console.log("DROGARIA E FARMÁCIA")
const prompt = require('prompt-sync')();
const estoque = [
    { nome: "Paracetamol", preco: 10, quantidade: 50 },
    { nome: "Dipirona", preco: 8, quantidade: 30 },
    { nome: "Amoxicilina", preco: 15, quantidade: 20 },
    { nome: "Omeprazol", preco: 20, quantidade: 40 },
    { nome: "Ibuprofeno", preco: 12, quantidade: 25 },
    { nome: "Buscopan", preco: 9, quantidade: 15 },
    { nome: "Aspirina", preco: 11, quantidade: 35 },
    { nome: "Venvanse", preco: 40, quantidade: 10 },
    { nome: "Dorflex", preco: 25, quantidade: 5 },
    { nome: "Dipirona", preco: 18, quantidade: 40 },
    { nome: "Fluoxetina", preco: 16, quantidade: 30 }
];

function verificarMedicamento(nomeMedicamento) {
    for (let medicamento of estoque) {
        if (medicamento.nome.toLowerCase() === nomeMedicamento.toLowerCase()) {
            return medicamento;
        }
    }
    return null;
}

function calcularPrecoTotal(precoUnitario, quantidade) {
    return precoUnitario * quantidade;
}

function main() {
    let nomeMedicamento;
    let medicamento;
    do {
        nomeMedicamento = prompt("Digite o nome do medicamento desejado:");
        medicamento = verificarMedicamento(nomeMedicamento);

        if (!medicamento) {
            console.log("Medicamento não encontrado em estoque. Por favor, digite um nome válido.");
        }
    } while (!medicamento);

    let quantidadeDesejada = Number(prompt("Digite a quantidade desejada:"));

    if (!isNaN(quantidadeDesejada) && quantidadeDesejada > 0) {
        if (quantidadeDesejada <= medicamento.quantidade) {
            const precoTotal = calcularPrecoTotal(medicamento.preco, quantidadeDesejada);
            console.log("Medicamento: " + medicamento.nome);
            console.log("Preço unitário: R$" + medicamento.preco.toFixed(2));
            console.log("Quantidade disponível:" + medicamento.quantidade);
            console.log("Preço total: R$" + precoTotal.toFixed(2));
        } else {
            console.log("Quantidade desejada indisponível em estoque.");
        }
    } else {
        console.log("Quantidade inválida.");
    }
}

function SimouNao() {
    let continuar = 'S';
    do {
        continuar = prompt("Deseja continuar utilizando o sistema? (S/N)").toUpperCase();
        switch (continuar) {
            case 'S':
                break;
            case 'N':
                console.log("Obrigado por utilizar o sistema. Volte sempre!");
                return;
            default:
                console.log("Opção inválida. Por favor, escolha S para Sim ou N para Não.");
        }
    } while (continuar === 'S');
}

main();