//variaveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1



// Eventos

btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', enterKey)



// Função callback

function handleTryClick(event){
  event.preventDefault() // Não faça o padrão

  const inputNumber = document.querySelector("#inputNumber")

  if (inputNumber.value == ""){//aqui se o campo inputNumber esta vazio o programa não vai fazer contagem de tentativas.
    alert("O campo não pode estar vazio!")
  }
  else if(!Number(inputNumber.value) != 0){//aqui se o número digitado é 0 o programa vai solicitar um numero diferente de 0
    alert("Por favor insira um número de 1 a 10!")
  }
  else if (Number(inputNumber.value) < 0 || Number(inputNumber.value) > 10) {//aqui se o numero é menor que 0 ou maior que 10, o programa vai solicitar um número dentro dos valores sugeridos.
    alert("Por favor insira um número de 1 a 10!")
  }
  else{

    if(Number(inputNumber.value) ==  randomNumber){
      toogleScreen()

      document.querySelector(".screen2 h2").innerText = `Acertou em ${xAttempts} tentativas` // ADICIONANDO ou modificando texto dentro de um elemento

      /*Outra maneira de fazer esto é utilizando a constante screen2 que criamos acima:
      screen2.querySelector("h2").innerText = `Acertou em ${xAttempts} tentativas`

      */

    }
    inputNumber.value = "" //para resetear o campo
    xAttempts++
  }
}


// Funções
function handleResetClick(){
  toogleScreen()
  xAttempts = 1
  randomNumber = Math.round(Math.random() * 10)// aqui criamos um numero randomico novo
  
}


function toogleScreen(){
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function enterKey(e){
  if(e.key == 'Enter' && screen1.classList.contains('hide')) {
    handleResetClick()
  }
}

