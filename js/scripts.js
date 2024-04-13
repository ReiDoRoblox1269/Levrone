const form = document.getElementById("form");
const altura = document.getElementById("altura");
const peso = document.getElementById("peso");
const braco = document.getElementById("braco");
const coxa = document.getElementById("coxa");
const torax = document.getElementById("torax");
const cintura = document.getElementById("cintura");

// Função para comparar as medidas do usuário com as de Kevin Levrone em 1999
function compararMedidasUsuario() {
  const medidasUsuario = {
    altura: parseFloat(altura.value),
    peso: parseFloat(peso.value),
    braco: parseFloat(braco.value),
    coxa: parseFloat(coxa.value),
    torax: parseFloat(torax.value),
    cintura: parseFloat(cintura.value),
  };

  // Medidas de Kevin Levrone em 1999 (em centímetros e quilogramas)
  const medidasKevinLevrone = {
    altura: 175,
    peso: 109,
    braco: 57,
    coxa: 82,
    torax: 144,
    cintura: 82,
  };

  const diferenca = {};

  // Calcula a diferença entre as medidas do usuário e de Kevin Levrone
  for (const medida in medidasUsuario) {
    diferenca[medida] = medidasUsuario[medida] - medidasKevinLevrone[medida];
  }

  return diferenca;
}

// Função para exibir a diferença entre as medidas do usuário e de Kevin Levrone
function exibirDiferenca(diferenca) {
  const resultadoDiv = document.getElementById("resultado");
  resultadoDiv.innerHTML = "";

  for (const medida in diferenca) {
    let mensagem;
    if (medida === "altura") {
      const diferencaAbsoluta = Math.abs(diferenca[medida]);
      if (parseFloat(altura.value) === 175) {
        mensagem = `Você tem a altura do Kevin Levrone! (1.75 m)`;
      } else {
        const alturaValue = parseFloat(altura.value);
        mensagem = `Sua altura = ${
          alturaValue >= 100 ? alturaValue / 100 + " m" : alturaValue + " cm"
        }, altura de Kevin Levrone = 1.75 m. ${
          alturaValue > 175 ? "Você é maior" : "Você é menor"
        } do que Kevin Levrone em ${diferencaAbsoluta} cm.`;
      }
    } else if (medida === "peso") {
      const diferencaAbsoluta = Math.abs(diferenca[medida]);
      if (parseFloat(peso.value) === 109) {
        mensagem = `Você pesa o mesmo que Levrone pesava! (109 Kg)`;
      } else {
        mensagem = `Seu peso = ${
          peso.value
        } Kg, peso de Kevin Levrone = 109 Kg. Você está ${
          peso.value > 109 ? "acima" : "abaixo"
        } do peso de Kevin Levrone por ${diferencaAbsoluta} Kgs.`;
      }
    } else if (medida === "braco") {
      const diferencaAbsoluta = Math.abs(diferenca[medida]);
      if (parseFloat(braco.value) === 57) {
        mensagem = `Você tem o tamanho de braço que Levrone tinha! (57 cm)`;
      } else {
        mensagem = `Seu braço = ${
          braco.value
        } cm, braço de Kevin Levrone = 57 cm. ${
          braco.value > 57
            ? "Você tem um braço maior"
            : "Você tem um braço menor"
        } do que Kevin Levrone por ${diferencaAbsoluta} cm.`;
      }
    } else if (medida === "coxa") {
      const diferencaAbsoluta = Math.abs(diferenca[medida]);
      if (parseFloat(coxa.value) === 82) {
        mensagem = `Você tem o tamanho de coxa que Levrone tinha! (82 cm)`;
      } else {
        mensagem = `Sua coxa = ${
          coxa.value
        } cm, coxa de Kevin Levrone = 82 cm. ${
          coxa.value > 82
            ? "Você tem uma coxa maior"
            : "Você tem uma coxa menor"
        } do que Kevin Levrone por ${diferencaAbsoluta} cm.`;
      }
    } else if (medida === "torax") {
      const diferencaAbsoluta = Math.abs(diferenca[medida]);
      if (parseFloat(torax.value) === 144) {
        mensagem = `Você tem o tamanho de tórax que Levrone tinha! (144 cm)`;
      } else {
        mensagem = `Seu tórax = ${
          torax.value
        } cm, tórax de Kevin Levrone = 144 cm. ${
          torax.value > 144
            ? "Você tem um tórax maior"
            : "Você tem um tórax menor"
        } do que Kevin Levrone por ${diferencaAbsoluta} cm.`;
      }
    } else if (medida === "cintura") {
      const diferencaAbsoluta = Math.abs(diferenca[medida]);
      if (parseFloat(cintura.value) === 82) {
        mensagem = `Você tem a circunferência da cintura igual a que Levrone tinha! (82 cm)`;
      } else {
        mensagem = `Sua cintura = ${
          cintura.value
        } cm, cintura de Kevin Levrone = 82 cm. ${
          cintura.value > 82
            ? "Você tem uma cintura maior"
            : "Você tem uma cintura menor"
        } do que Kevin Levrone por ${diferencaAbsoluta} cm.`;
      }
    } else {
      const diferencaAbsoluta = Math.abs(diferenca[medida]);
      mensagem = `Diferença em ${medida}: ${diferencaAbsoluta} cm`;
    }

    const paragrafo = document.createElement("p");
    paragrafo.textContent = mensagem;
    resultadoDiv.appendChild(paragrafo);
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formIsValid = checkInputs();

  if (formIsValid) {
    const diferenca = compararMedidasUsuario();
    exibirDiferenca(diferenca);
  }
});

function checkInputs() {
  let formIsValid = true;

  const inputs = [altura, peso, braco, coxa, torax, cintura];

  inputs.forEach((input) => {
    const inputValue = input.value.trim();
    if (inputValue === "") {
      setErrorFor(input, `O campo ${input.id} é obrigatório.`);
      formIsValid = false;
    } else {
      setSuccessFor(input);
    }
  });

  return formIsValid;
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  // Adiciona a mensagem de erro
  small.innerText = message;

  // Adiciona a classe de erro
  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;

  // Adicionar a classe de sucesso
  formControl.className = "form-control success";
}
