const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

console.log(toggleButton)

/*end nav bar*/


const button = document.querySelector('.btn1');

button.addEventListener('click', () => {
  console.log("sqeeze page 1");
});

document.getElementById("btn2").addEventListener("click", function() {
  alert("Please enter your email");
});

// I still don't quite understand how loops play into an ecommerce website so I just did one for show below://

let designChoice = ["Floor Plan", "fixtures", "Finishes"];
let addOns = ["Back Deck", "Swimming Pool", "Bonus Room"];


function showDesign(arr) {
  for (i = 0; i < designChoice.length; i++)
    console.log(arr[i])
}
showDesign(designChoice);
showDesign(addOns);

