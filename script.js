const images = document.querySelectorAll('section div.images')
let randomNum

const generateRandomNum = (range, maxNum) => {
  randomNum = Math.floor(Math.random() * range) + (maxNum - range)
  return randomNum
}

images.forEach(image => {
  // generateRandomNum(100, 400)
  image.style.height = 400 + "px"
})

const createObserver = () => {
  let observer
  let options = {
    root: null,
    rootMargin: '0px',
    threshold: .5
  }
  let section = document.querySelector('section.images')

  observer = new IntersectionObserver(handleIntersect, options)
  observer.observe(section)
}



const handleIntersect = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      let delay = 0

      images.forEach(image => {
        image.style.transitionDelay = `${delay}s`
        image.classList.add('revealed'),
          delay = delay + 0.1,
          console.log(delay)
      })
    }
  })
}

window.addEventListener('load', () => {
  createObserver()
})



