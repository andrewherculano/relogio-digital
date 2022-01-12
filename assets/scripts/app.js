const clockHours = document.querySelector('.clock-hours')

const getHour = () => {
  const present = new Date()
  const hours = present.getHours()
  const minutes = present.getMinutes()
  const seconds = present.getSeconds()

  clockHours.innerHTML = `
    <span>${hours}</span> :
    <span>${hours}</span> :
    <span>${seconds}</span>
  `
}

setInterval(getHour, 1000);