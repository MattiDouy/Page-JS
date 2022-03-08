// Exo 1, 1bis 

let i = 1;
let footer = document.querySelector("footer");
footer.addEventListener("click",
function(){ 
  console.log(`Tu as cliqué ${i++} fois !`)
} );


// Exo 2

let menu = document.querySelector(".navbar-toggler-icon");
let navHeader = document.querySelector("#navbarHeader");

menu.addEventListener("click", function () {
    navHeader.classList.toggle("collapse");
});

// Exo 3

const editBtn = document.querySelectorAll('.btn-outline-secondary')[0];
const cardText = document.querySelectorAll('.card-text')[0];

editBtn.addEventListener('click', function () {
    cardText.style.color = 'red';
});

// Exo 4

const editBtn2 = document.querySelectorAll('.btn-outline-secondary')[1];
const cardText2 = document.querySelectorAll('.card-text')[1];

editBtn2.addEventListener('click', function () {
  cardText2.classList.toggle("text-success");
});

// Exo 5

const navbar = document.getElementsByTagName('header')[0];
const style = document.querySelectorAll('link')[0];

navbar.addEventListener('dblclick', function() {
  if (style.getAttribute('href') != null) {
    style.removeAttribute('href');
} 
  else {
    style.setAttribute('href', 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css');
};
});

// Exo 6

const viewBtnAll= document.querySelectorAll('.btn-success');
const cardTextAll = document.querySelectorAll('.card-text');
const cardImgAll = document.querySelectorAll('.card-img-top');

for (let i = 0 ; i < viewBtnAll.length; i++) {  
  viewBtnAll[i].addEventListener('hover', function () {
    cardTextAll[i].classList.toggle("collapse"),
    cardImgAll[i].classList.toggle("width: 20%");
  });
};

