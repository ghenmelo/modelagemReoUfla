const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let pontosVitoria = 0;

const retornoRespostaErro = () => {
  console.log("Errrrrrrooou\n");
};
const retornoRespostaAcerto = () => {
  pontosVitoria += 1;
  console.log("Você é muito esperto em");
};
const retornoVitoriaOuDerrota = () => {
  if (pontosVitoria === 3) {
    console.log("Vitoria");
  } else {
    console.log("Derrota");
  }
};

const iniciarQuizImpossivel = () => {
  rl.question("Você sabe o tamanho do sol?\n", (answer) => {
    answer === "Muito grande" ? retornoRespostaAcerto() : retornoRespostaErro();

    rl.question(
      "Você sabe quantos planetas temos em nosso sistema solar?\n",
      (answer) => {
        answer === "8" ? retornoRespostaAcerto() : retornoRespostaErro();

        rl.question(
          "Você sabe por que a gasolina ta tão cara? A) Bolsonaro B) Aliens\n",
          (answer) => {
            answer === "B" ? retornoRespostaAcerto() : retornoRespostaErro();
            retornoVitoriaOuDerrota();
          }
        );
      }
    );
  });
};

iniciarQuizImpossivel();
