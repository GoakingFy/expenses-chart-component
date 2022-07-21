
let containerAlert = document.createElement('div')
containerAlert.classList.add('alert')
let animationStyle = document.createElement('style')
animationStyle.innerHTML = `@keyframes showAlert{ 0%{top:-60px}10%{top:20px} 70%{top:20px} 100%{top:-60px}}`

containerAlert.innerHTML = `Hi!, if you liked this page try to see other projects on my <a href='https://github.com/GoakingFy'>github</a>. 😁`
let styleAlert = `background-color:#fff; max-width: 400px; position:absolute; padding:10px;
 border-radius:10px; top:-60px;  animation-delay: 3s; animation-timing-function:linear; animation-name: showAlert; animation-duration:7s; ;`

 containerAlert.setAttribute('style',styleAlert )

window.document.body.appendChild(containerAlert)
window.document.body.appendChild(animationStyle)