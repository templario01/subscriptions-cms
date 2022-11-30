export function capitalizeFirstLetter(word: string) {
  const lowerCaseWord = word.toLowerCase()
  return lowerCaseWord.charAt(0).toUpperCase() + lowerCaseWord.slice(1)
}

export function parseEnum(word: string) {
  const newWord = word.replace('_', ' ')

  return newWord
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

export const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, .45)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
}
