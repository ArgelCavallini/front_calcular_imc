import { Modal } from "./modal.js"
import { AlertError } from "./alert-error.js"
import { calcularImc, notANumber, strValue } from "./utils.js"

const inputWeight = $("#weight")
const inputHeight = $("#height")

$(document).ready(function () {
  $("#meuFormulario").on("submit", function (event) {
    event.preventDefault()
    let vl1 = inputWeight.val()
    let vl2 = inputHeight.val()

    if (!strValue(vl1)) {
      alert("Favor preencher o campo Peso (kg)!")
      inputWeight.focus()
      return
    }

    if (!strValue(vl2)) {
      alert("Favor preencher o campo Altura (cm)!")
      inputHeight.focus()
      return
    }

    if (notANumber(vl1) || notANumber(vl2)) {
      AlertError.open()
      return
    }

    AlertError.close()

    displayResultMessage(calcularImc(vl1, vl2))
  })

  inputWeight.on("input", AlertError.close)
  inputHeight.on("input", AlertError.close)
})

function displayResultMessage(result) {
  const message = `Seu IMC é de ${result}`

  Modal.message.text(message)
  Modal.open()
}
