const input = document.querySelectorAll('input')
input.forEach(input => {
  input.addEventListener('input', () => {
    const password = document.querySelector('#password').value
    const confirmPassword = document.querySelector('#confirm-password').value
    const nextSiblingDOM = input.nextSibling.nextSibling.classList
    if (input.checkValidity()) {
      nextSiblingDOM.add('valid')
      if (input.id === 'confirm-password') {
        if (password !== confirmPassword) nextSiblingDOM.remove('valid')
      }
    } else {
      nextSiblingDOM.remove('valid')
    }
  })
})

// function checkPassword () {
//   const password = document.querySelector('#password').value
//   const confirmPasswordDOM = document.querySelector('#confirm-password')
//   const confirmPassword = document.querySelector('#confirm-password').value
//   if (password !== confirmPassword) {
//     confirmPasswordDOM.setCustomValidity("確認密碼錯誤，請再次輸入相同密碼")
//     return false
//   }
//   else {
//     confirmPasswordDOM.checkValidity() = true
//     return true
//   }
// }