use: 'strict';

// .querySelector(`.card-bottom-${dog}`)
// .createElement('ul')
// .createElement('li').innerHTML = `
//
// `;

add = function (
  dog,
  car1 = '',
  car2 = '',
  car3 = '',
  car4 = '',
  car5 = '',
  car6 = ''
) {
  let arrayCar = [car1, car2, car3, car4, car5, car6];

  for (let i = 0; i < arrayCar.length; i++) {
    if (arrayCar[i].length > 0) {
      document.querySelector(
        `.card-bottom-${dog}`
      ).innerHTML += `<li>${arrayCar[i]}</li>`;
    }
  }
};
add(1, 'Amoroso', 'Bom', 'Cachorro', 'Doido', 'Estranho', 'Furioso');
add(2, 'inteligente', 'amoroso', 'brincalhão', 'fogoso', 'faminto', 'felpudo');
add(3, 'fofinho', 'amoroso', 'brincalhão', 'fogoso', 'faminto', 'felpudo');

const input = document.querySelector('#userInput');
const button = document.querySelector('#buttonGo');
const reset = document.querySelector('#buttonReset');

reset.addEventListener('click', function () {
  console.log(`teste`);
  input.value = '';
  let caoA = document.querySelector('.card-individualA');
  let caoB = document.querySelector('.card-individualB');
  let caoC = document.querySelector('.card-individualC');
  caoA.style.opacity = '1';
  caoB.style.opacity = '1';
  caoC.style.opacity = '1';
});

button.addEventListener('click', function () {
  let userInput = input.value.toLowerCase();

  // cao 1 //
  if (userInput === 'boiadeiro australiano') {
    console.log(`ok`);
    const caoB = document.querySelector('.card-individualB');
    caoB.style.opacity = '0';
    const caoC = document.querySelector('.card-individualC');
    caoC.style.opacity = '0';
  } else if (userInput === 'dobermann') {
    console.log(`ok`);
    const caoB = document.querySelector('.card-individualA');
    caoB.style.opacity = '0';
    const caoC = document.querySelector('.card-individualC');
    caoC.style.opacity = '0';
  } else if (userInput === 'linguicinha') {
    console.log(`ok`);
    const caoA = document.querySelector('.card-individualA');
    caoA.style.opacity = '0';
    const caoB = document.querySelector('.card-individualB');
    caoB.style.opacity = '0';
  } else if (userInput === '') {
    alert('Digite uma raça de cão!');
  } else {
    alert('Cão não encontrado! Tente de novo');
  }
  return input.value;
});
