/**
 * @param {*} variable
 * @returns
 */
export function strValue(variable) {
  if (
    variable !== undefined &&
    variable !== null &&
    variable !== "" &&
    variable !== 0
  )
    return true
  else return false
}

/**
 * @param {*} value
 * @returns
 */
export function notANumber(value) {
  return isNaN(value)
}

/**
 * @param {*} weight
 * @param {*} height
 * @returns
 */
export function calcularImc(weight, height) {
  return (weight / (height / 100) ** 2).toFixed(2)
}
