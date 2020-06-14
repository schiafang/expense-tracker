const totalAmountText = document.getElementById('total-amount').innerText
const totalAmountDOM = document.getElementById('total-amount')
const totalAmount = formatToNumber(totalAmountText)
function formatToNumber (totalAmountText) {
  totalAmountText = totalAmountText.split(',').join('')
  return Number(totalAmountText)
}
if (totalAmount < 1000) { totalAmountDOM.style.color = '#EBD21C' }
if (totalAmount >= 1000) { totalAmountDOM.style.color = '#FFC300' }
if (totalAmount > 5000) { totalAmountDOM.style.color = '#EB961C' }
if (totalAmount > 10000) { totalAmountDOM.style.color = '#DB6D29' }
if (totalAmount > 50000) { totalAmountDOM.style.color = '#B03118' }

const categoryAmount = document.querySelector('.category-amount').innerText.split(',')
const categoryAmountValue = []
categoryAmount.map(item => {
  categoryAmountValue.push(Number(item))
})
const chart = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(chart, {
  type: 'doughnut',
  data: {
    labels: ['餐飲食品', '家居物業', '交通出行', '休閒娛樂', '其他'],
    datasets: [{
      label: '# of Votes',
      data: categoryAmountValue,
      backgroundColor: [
        'rgba(255, 99, 132, .2)',
        'rgba(208, 177, 21, .2)',
        'rgba(55, 126, 152, .2)',
        'rgba(53, 140, 92, .2)',
        'rgba(117, 123, 125, .2)',
      ],
      borderWidth: 0
    }]
  },
  options: {
    yAxes: [{
      ticks: {
        beginAtZero: true
      }
    }]
  }
})