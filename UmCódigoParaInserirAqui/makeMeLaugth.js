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
  if (pontosVitoria > 3) {
    console.log("Vitoria");
  } else {
    console.log("Derrota");
  }
};

const iniciarQuizImpossivel = () => {
  rl.question("Você sabe o tamanho do sol?\n", (answer) => {
    answer === "Muito grande" ? retornoRespostaAcerto() : retornoRespostaErro();
  });

  rl.close();
};

iniciarQuizImpossivel();
