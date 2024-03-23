const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

console.log(toggleButton)

/*end nav bar*/

//in javascript and css what are the differences between using a true quotation mark or using the little back-ticks?//


const button = document.querySelector('.btn1');

button.addEventListener('click', () => {
  console.log("sqeeze page 1");
});

document.getElementById("btn2").addEventListener("click", function() {
  alert("Please enter you email");
});



