const clockHours = document.querySelector('.clock-hours')
const infoDate = document.querySelector('.clock-info')

const daysOfWeek = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sabádo']
const months = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']

const getPresentDate = () => new Date()

const formatNumber = number =>
  `${String(number).length === 1 ? `0${number}` : `${number}`}`

const clockHoursHTML = (hours, minutes, seconds) => {
  clockHours.innerHTML = `
    <span>${hours}</span> :
    <span>${minutes}</span> :
    <span>${seconds}</span>
  `
}

const updateClock = () => {
  const present = getPresentDate()
  const hours = formatNumber(present.getHours())
  const minutes = formatNumber(present.getMinutes())
  const seconds = formatNumber(present.getSeconds())

  clockHoursHTML(hours, minutes, seconds)
}

const infoDateHTML = (dayOfWeek, dayOfMonth, month, year) => {
  infoDate.innerHTML = `
  <p>${dayOfWeek}, ${dayOfMonth} de ${month} de ${year}</p>
  `
}

const updateInfoDate = () => {
  const present = getPresentDate()
  const dayOfWeek = daysOfWeek[present.getDay()]
  const dayOfMonth = formatNumber(present.getDate())
  const month = months[present.getMonth()]
  const year = present.getFullYear()

  infoDateHTML(dayOfWeek, dayOfMonth, month, year)
}

setInterval(updateClock, 1000);
updateInfoDate()
