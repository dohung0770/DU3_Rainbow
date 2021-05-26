const fakeData = {
  user: {
    name: 'admin@gmail.com',
    pass: 'admin'
  }
}

export const fakeLogin = (username, pass) => {
  if (username === fakeData.user.name && pass === fakeData.user.pass) {
    return true
  } else { return false }
}