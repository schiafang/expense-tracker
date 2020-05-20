// const dateValue = document.querySelector('input[type="date"]')
const dateValue = document.querySelector('.new-date')

const now = new Date()
dateValue.value = now.toISOString().slice(0, 10)