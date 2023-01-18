// Variáveis
const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
let randomNumber = Math.round(Math.random() * 10); // gerar numero randômico
let xAttempts = 1

// Eventos
btnTry.addEventListener('click', handleTryClick);
btnReset.addEventListener('click', handResetClick);
document.addEventListener('keydown', function(e) {
  if(e.key == 'Enter' && screen1.classList.contains('hide')) {
    handResetClick()
  }
});

// funções de callback = é uma funcao que é passada como argumento de uma outra funcao e essa funcao vai ser executada depois
function handleTryClick(event) {
  event.preventDefault(); // nao faça o padrao desse evento, que no caso é o form

  const inputNumber = document.querySelector("#inputNumber");

  if (Number(inputNumber.value) == randomNumber) {
    toggleScreen()
    document.querySelector(".screen2 h2").innerText = `Acertou em ${xAttempts} tentativas!`
    //screen2.querySelector("h2").innerText = `Acertou em ${xAttempts} tentativas!` - tbm pode ser usado assim
  }

  inputNumber.value = ""
  xAttempts++
}

function handResetClick() {
  toggleScreen()
  xAttempts = 1
  randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}