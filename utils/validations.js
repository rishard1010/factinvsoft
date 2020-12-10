const required = (propertyType, isSelect = 0) => {
  const texto = isSelect ? 'seleccionar' : 'por digitar el campo'
  return (v) => !!v || `Falta ${texto} ${propertyType}`
}
const minLength = (propertyType, minLength) => {
  return (v) =>
    (v && v.length >= minLength) ||
    `${propertyType} debe tener minimo ${minLength} caracteres`
}
const maxLength = (propertyType, maxLength) => {
  return (v) =>
    (v && v.length <= maxLength) ||
    `${propertyType} debe ser menor de ${maxLength} caracteres`
}
const isNumber = (propertyType) => {
  return (v) => (v && !isNaN(v)) || `${propertyType} debe ser numérico`
}
const emailFormat = () => {
  const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,24})+$/
  return (v) => (v && regex.test(v)) || 'Must be a valid email'
}

export default {
  required,
  minLength,
  maxLength,
  emailFormat,
  isNumber,
}
