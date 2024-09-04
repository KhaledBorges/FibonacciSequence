function eFibonacci(numeroEscolhido) {
    function eFibonacciRecursao(numeroEscolhido, a, b) {
        if (a === numeroEscolhido) {
            return true;
        }
        if (a > numeroEscolhido) {
            return false;
        }
        return eFibonacciRecursao(numeroEscolhido, b, a + b);
    }

    return eFibonacciRecursao(numeroEscolhido, 0, 1);
}
// Verifica se numeroEscolhido é igual "a", caso não seja, retorna "false".
// Por ser uma função recursiva, se repete até que pelo menos uma das condições (if) seja verdadeira


document.querySelector("#verificarButton").onclick = function() {
    let numeroParaEncontrar = parseInt(document.querySelector("#numeroInput").value, 10); 
    // Utilizei um 10 para confirmar que o valor do input fosse convertido para decimal

    if (isNaN(numeroParaEncontrar) || numeroParaEncontrar < 0) {
        alert("Por favor, insira um número válido.");
        return;
    }
    // Impede o uso de números negativos ou que o usuário não coloque nada

    if (eFibonacci(numeroParaEncontrar)) {
        alert("Sim, o número " + numeroParaEncontrar + " está na sequência de Fibonacci!");
    } else {
        alert("Não, o número " + numeroParaEncontrar + " não está na sequência de Fibonacci!");
    }
};