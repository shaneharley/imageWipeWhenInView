const images = document.querySelectorAll('section div.images')
let randomNum

const generateRandomNum = (maxNum) => {
  randomNum = Math.floor(Math.random() * maxNum)
  return randomNum
}

images.forEach(image => {
  do {
    generateRandomNum(400)
  }
  while (randomNum < 300)
  image.style.height = randomNum + "px"
})
