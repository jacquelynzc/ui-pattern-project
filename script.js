let url = "https://picsum.photos/v2/list"
let random = document.querySelector(".random")
let randomImg = document.querySelector(".randomImg")
let key = 'yz+sNVNPoo/q8Fw2pYuM4Q==6Y9QV9Vtgrq4Ld28'
let click = document.querySelector(".click")
let nuu = document.querySelector(".new")
let reButton = document.querySelector('.rebtn')
let test = document.querySelector('.test')
let img = document.querySelector('img')
let button = document.querySelector('button')
let modal = document.querySelector('#myModal')


function generate1(arr) {
  random.innerHTML = ''
  console.log()
  Array.from({length: 30}).forEach((img, index) => {
    let num = Math.floor(Math.random() * 1000)
    let htmlTemplate = `<img class="thumbs" src ="https://picsum.photos/800?random=${num}"></img>`
    
    random.insertAdjacentHTML('beforeend', htmlTemplate)
  })
  addListeners()
}


function addListeners() {
  
    let thumbs = document.querySelectorAll('.thumbs')
    thumbs.forEach(image => {
      image.addEventListener('click', (e) => {
        let modalPic = `<img src="${e.target.src}">`
        modal.innerHTML = modalPic
        modal.style.display = 'flex';
        // document.addEventListener('click', (e) => {
        //   if (e.target.id !== 'myModal') modal.style.display = 'none'
        // })
      })
    }) 
}


modal.addEventListener("click", () => modal.style.display = 'none')



generate1()

button.addEventListener("click", generate1)

// if (random.style.display === 'flex')

//   () => {
//     random.style.display = 'none'
//   }

