const card1 = document.querySelector('.card1');
const card2 = document.querySelector('.card2');
const card3 = document.querySelector('.card3');
const card4 = document.querySelector('.card4');
const bg = document.querySelector('.general');
const title = document.querySelector('h1');
const textCard = document.querySelector('p');
//const titleCard = document.querySelector('h5')[0];
const colorTitle = '#FFA500';

card1.addEventListener('click', () =>{
    bg.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),url('img/pipa.jpg')";
    title.innerText = 'Pipa de Buggy';
    //textCard.innerText = '';
    textCard.innerText = 'Base de Lançamento de Foguetes Praia de Cotovelo Maior cajueiro do mundo Praia de Pirangi do Norte (Rio Pirangi) Praia de Pirangi do Sul Praia de Búzios (Praias e Dunas) Praia de Tabatinga (Mirante dos Golfinhos) Praia de Camurupim (Lagoa de Arituba) Praia de Barreta (Pedra Oca) Praia de Malembá (Praias e dunas) Balsa Lagoa de Guaraíras Tibau do Sul Praia de Cacimbinhas Praia do Madeiro ( Parada para banho e golfinhos) Praia da Pipa (Centro). Praia do Amor e Chapadão. Por do sol nas dunas de Malembar.';
});
card2.addEventListener('click', () =>{
    bg.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),url('img/buggyPepeu.jpg')";
    title.innerText = 'Dunnas de Jenipabú';
    /* title.style.fontSize = '50px'; */
    //textCard.innerText = '';
    textCard.innerText = 'Via costeira - Praias urbanas. Praia de Redinha - Aquário de Natal. Praia de Santa Rita. Praia de Genipabu (Dunas, praia, lagoa, esquibunda, sandboard e dromedário) Rio Ceará Mirim (travessia de balsa) Praia de Barra do Rio Praia de Graçandú Dunas de Pitangui Lagoa de Pitangui (Parada para banho) Dunas Douradas(Parada pra fotos) Mirante de Pitangui Praia de Pitangui Parada pra banho no Rio Pratagi(caipifrutas e espetinhos) Praia de Jacumã (Dunas, praia, lagoa, aerobunda, toboágua e skybunda). Praia de Porto Mirim. Praia de Muriú (Parada para almoço).'
})
card3.addEventListener('click', () =>{
    bg.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),url('img/parrachos.jpg')";
    title.innerText = 'Parrachos de Maracajaú';
    /* title.style.fontSize = '50px'; */
    textCard.innerText = 'Maracajaú é uma viagem para o Litoral Norte do estado, conhecida também, como Caribe Brasileiro que fica a 70km de Natal, com parada na praia de Maracajaú, onde você pode optar por realizar nos parrachos à 7km da praia, o mergulho, feito nos recifes de corais, durante a maré baixa, dentro de um verdadeiro aquário natural. O trajeto pode ser feito de lancha ou catamarã. O passeio pode ser feito: Buggy - É feito pelo litoral, conhecendo uma média de 20 praias - o mergulho no passeio de buggy é opcional. Van - vai pela BR 101 Opcional - mergulho de cilindro';
})
card4.addEventListener('click', () =>{
    bg.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),url('img/lagoaPitangui.jpg')";
    title.innerText = 'Passeios da Águas';
    /* title.style.fontSize = '50px'; */
    textCard.innerText = 'Base de lançamento de foguetes Parada no Museu Aeroespacial Praia de Cotovelo (parada para foto no mirante) Maior cajueiro do mundo Lagoa de Alcançuz Lagoa de Carcará Lagoa de Arituba Praia de Camurupim Praia de Tabatinga Mirante dos golfinhos em Tabatinga Praia de Búzios Dunas de Búzios';
})

/* MENU MOBILE */

const menuMobile = document.querySelector('.menu-mobile');
const links = document.querySelector('.links');
const linksItens = document.querySelectorAll('.links a');

menuMobile.addEventListener('click', () => {
    links.classList.toggle('active');
});

/* FECHA O MENU AO CLICAR NO LINK */
linksItens.forEach((linksItem) => {
    linksItem.addEventListener('click', () => {
        links.classList.toggle('active');
    })
})