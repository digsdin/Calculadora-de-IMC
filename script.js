
function calcularImc() {
  // Entrada
    let peso = parseFloat(document.getElementById('peso').value);
    let altura = parseFloat(document.getElementById('altura').value);

    console.log(peso, altura);
    // Processamento
    let resultado = altura * altura;
    let imc = peso / resultado;
    arredondar = imc.toFixed(2);

    // Saída
    document.getElementById("resultado").textContent = "Seu IMC é: " + arredondar;
}