const textos = [
    "A prática leva à perfeição.",
    "Isabel Helen está no segundo ano e é muito dedicada.",
    "Programar é como resolver um grande quebra-cabeça todos os dias.",
    "HTML, CSS e JavaScript são as bases da web moderna.",
    "Com esforço, tudo se conquista."
  ];
  
  let tempoAtual = 0;
  let intervalo;
  let erros = 0;
  let acertos = 0;
  
  function reiniciarTeste() {
    tempoAtual = 0;
    erros = 0;
    acertos = 0;
    document.getElementById("tempo").textContent = tempoAtual;
    document.getElementById("erros").textContent = erros;
    document.getElementById("acertos").textContent = acertos;
    document.getElementById("input-digitacao").value = "";
    document.getElementById("input-digitacao").disabled = false;
    document.getElementById("texto-exemplo").textContent = sortearTexto();
    clearInterval(intervalo);
    intervalo = setInterval(() => {
      tempoAtual++;
      document.getElementById("tempo").textContent = tempoAtual;
    }, 1000);
  
    document.getElementById("input-digitacao").addEventListener("input", verificarDigitacao);
  }
  
  function sortearTexto() {
    const indice = Math.floor(Math.random() * textos.length);
    return textos[indice];
  }
  
  function verificarDigitacao() {
    const textoOriginal = document.getElementById("texto-exemplo").textContent;
    const textoDigitado = document.getElementById("input-digitacao").value;
    let input = document.getElementById("input-digitacao");
  
    // Verificar caractere por caractere
    for (let i = 0; i < textoDigitado.length; i++) {
      if (textoDigitado[i] !== textoOriginal[i]) {
        input.style.borderColor = "red";
        erros++;
        document.getElementById("erros").textContent = erros;
      } else {
        input.style.borderColor = "green";
        acertos++;
        document.getElementById("acertos").textContent = acertos;
      }
    }
  
    // Se terminou o texto corretamente
    if (textoDigitado === textoOriginal) {
      clearInterval(intervalo);
      input.disabled = true;
      alert("Parabéns, Isabel! Você completou o teste!");
    }
  }
  
  // Inicia na primeira carga
  window.onload = () => {
    reiniciarTeste();
  };