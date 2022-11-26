export function capitalizeFirstLetter(word: string) {
  const lowerCaseWord = word.toLowerCase()
  return lowerCaseWord.charAt(0).toUpperCase() + lowerCaseWord.slice(1)
}

export function parseEnum(word: string) {
  const newWord = word.replace('_', ' ')
  const [firstWord] = newWord.split(' ')
  return firstWord
}

export const platformTitles = [
  'plataforma',
  'cuenta',
  'contraseña',
  'precio por perfil',
  'precio completo',
  'slots disponibles',
  'accion',
]
