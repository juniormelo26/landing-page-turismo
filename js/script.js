const card1 = document.querySelector('.card1');
const card2 = document.querySelector('.card2');
const card3 = document.querySelector('.card3');
const card4 = document.querySelector('.card4');
const bg = document.querySelector('.general');
const title = document.querySelector('h1');
const titleCard = document.querySelector('h5')[0];
const colorTitle = '#FFA500';

card1.addEventListener('click', () =>{
    bg.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),url('img/pipa.jpg')";

    title.innerText = 'Pipa de Buggy';
})
card2.addEventListener('click', () =>{
    bg.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),url('img/jenipabu.jpg')";

    title.innerText = 'Dunnas de Jenipabú';
})
card3.addEventListener('click', () =>{
    bg.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),url('img/parrachos.jpg')";
    bg.style.backgroundPosition = "center center";
    bg.style.backgroundSize = "cover";
    title.innerText = 'Parrachos de Maracajaú';
    title.style.color = `colorTitle`;
})
card4.addEventListener('click', () =>{
    bg.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),url('img/lagoaPitangui.jpg')";
    title.innerText = 'Passeios da águas';
})