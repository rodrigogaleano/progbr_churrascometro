// Carne - 400gr por pessoa + de 6 horas 650
// Cerveja - 1200ml por pessoa  + 6h 2000ml
//Refrigerante/agua - 1000ml por pessoa +6h 1500ml

//Criamças valem por 0.5

function calcular() {

    //Get dos valores e campos HTML
    let qntd_adultos = document.getElementById('adultos').value;
    let qntd_criancas = document.getElementById('criancas').value;
    let tempo = document.getElementById('duracao').value;
    let resultado = document.getElementById('resultado');

    //Definindo a quantidade das coisas de acordo com a hora
    let qnt_carne;
    let qnt_cerveja;
    let qnt_bebida;

    if (tempo < 6){
        qnt_carne = 400;
        qnt_cerveja = 1200;
        qnt_bebida = 1000;
    }else{
        qnt_carne = 650;
        qnt_cerveja = 2000;
        qnt_bebida = 1500;
    }

    let carne = (qntd_adultos * qnt_carne) + (qntd_criancas * qnt_carne / 2);
    let cerveja = qntd_adultos * qnt_cerveja;
    let bebida = (qntd_adultos * qnt_bebida) + (qntd_criancas * qnt_bebida / 2);

    resultado.innerHTML = `<p>${carne/1000}kg de Carne`
    resultado.innerHTML += `<p>${cerveja/1000} litros de Cerveja`
    resultado.innerHTML += `<p>${bebida/1000} litros de Bebida`
    
}
