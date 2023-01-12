const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const randomNumber = Math.round(Math.random() * 10); // gerar numero randômico
let xAttempts = 1


// função callback = é uma funcao que é passada como argumento de uma outra funcao e essa funcao vai ser executada depois
function handleTryClick(event) {
  event.preventDefault(); // nao faça o padrao desse evento, que no caso é o form

  const inputNumber = document.querySelector("#inputNumber");

  if (Number(inputNumber.value) == randomNumber) {
    screen1.classList.add("hide")
    screen2.classList.remove("hide")

    document.querySelector(".screen2 h2").innerText = `Acertou em ${xAttempts} tentativas!`
    //screen2.querySelector("h2").innerText = `Acertou em ${xAttempts} tentativas!` - tbm pode ser usado assim
  }

  inputNumber.value = ""
  xAttempts++
}

// Eventos
const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");

btnTry.addEventListener('click', handleTryClick);
btnReset.addEventListener('click', function () {
  screen1.classList.remove("hide")
  screen2.classList.add("hide")
  xAttempts = 1
})