export const formatDate = (date) => {
  let dd = date.getDate()
  if (dd < 10) dd = '0' + dd

  let mm = date.getMonth() + 1
  if (mm < 10) mm = '0' + mm

  let yy = date.getFullYear() % 100
  if (yy < 10) yy = '0' + yy

  return dd + '.' + mm + '.' + yy
}

export const formatErrorMessage = (message) => {
  switch (message) {
    case 'Firebase: Error (auth/email-already-in-use).':
      return 'Пользователь с таким email уже существует!'

    case 'Firebase: Error (auth/invalid-email).':
      return 'Неправильный email!'

    case 'Firebase: Error (auth/internal-error).':
      return 'Все поля обязательны!'

    case 'Firebase: Error (auth/user-not-found).':
      return 'Такого пользователя не существвует!'

    case 'Firebase: Error (auth/wrong-password).':
      return 'Неправильный пароль!'

    default:
      break
  }
}
