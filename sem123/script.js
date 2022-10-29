// semana 1 //
// 1,2

// const tema = '🐶 -> DOGS!';
// const raca = 'Boiadeiro Australiano';
// const tempoVida = 15;
// const docil = true;
// const brinquedos = ['bolinha', 'freesbie', 'graveto'];

// const tema2 = tema;
// const raca2 = 'Dobermann';
// const tempoVida2 = 13;
// const docil2 = false;
// const brinquedos2 = ['quadradinho', 'corda de nó', 'tug-rope'];

// const tema3 = tema;
// const raca3 = 'Dachshund';
// const tempoVida3 = 16;
// const docil3 = true;
// const brinquedos3 = ['outro linguicinha', 'cobertores e tecidos', 'cordinhas'];

// // 3
// const mediaVida = (tempoVida + tempoVida2 + tempoVida3) / 3;
// console.log(`'O tempo médio de vida de um cachorrinho é: ${mediaVida}`);

// // 4
// const verficaBoolean = docil && docil2 && docil3;
// console.log(verficaBoolean);

// // 5

// console.log(
//   `Olá! a raça do Cão é: ${raca.toLocaleUpperCase()}\n o tempo de vida é: ${tempoVida}, \n e ${
//     docil ? 'É um amor!' : 'É Nervoso'
//   }\n e os brinquedos favoritos são: ${brinquedos}`
// );

// console.log(
//   `Olá! a raça do Cão é: ${raca2.toLocaleUpperCase()}\n o tempo de vida é: ${tempoVida2}, \n e ${
//     docil2 ? 'É um amor!' : 'É Nervoso'
//   }\n e os brinquedos favoritos são: ${brinquedos2}`
// );

// console.log(
//   `Olá! a raça do Cão é: ${raca3.toLocaleUpperCase()}\n o tempo de vida é: ${tempoVida3}, \n e ${
//     docil3 ? 'É um amor!' : 'É Nervoso'
//   }\n e os brinquedos favoritos são: ${brinquedos3}`
// );
// console.log('----------------------------------------------------------------------------------');

// // semana 2 //

// // 1.0

// cao1 = {
//   raca: 'Boiadeiro-Australiano',
//   tempoVida: 15,
//   docil: true,
//   brinquedos: ['bolinha', 'freesbie', 'graveto'],
// };
// cao2 = {
//   raca: 'Dobermann',
//   tempoVida: 13,
//   docil: false,
//   brinquedos: ['quadradinho', 'corda de nó', 'tug-rope'],
// };
// cao3 = {
//   raca: 'Dachshund',
//   tempoVida: 16,
//   docil: false,
//   brinquedos: ['outro linguicinha', 'cobertores e tecidos', 'cordinhas'],
// };

// //2 e 3//

// let deposito = [];

// deposito.push(cao1, cao2);
// console.table(deposito);

// if (cao3.docil) {
//   deposito.push(cao3);
// } else {
//   alert('Não foi possível adicionar este cão!');
// }

// semana 3 //

//1//

// cao1 = {
//   raca: 'Boiadeiro-Australiano',
//   tempoVida: 15,
//   docil: true,
//   brinquedos: ['bolinha ', ' freesbie ', ' graveto '],
// };

// let brinquedosString1 = '';
// for (item of cao1.brinquedos) {
//   brinquedosString1 += `${item},`;
// }

// delete cao1.brinquedos;
// // console.table(cao1);
// cao1.brinquedos = brinquedosString1;

// for (itens in cao1) {
//   console.log(`${itens}:  ${cao1[itens]}`);
// }
// console.log('--------------------------------------------');

//2//

// cao2 = {
//   raca: 'Dobermann',
//   tempoVida: 13,
//   docil: false,
//   brinquedos: ['quadradinho', 'corda de nó', 'tug-rope'],
// };

// let brinquedosString2 = '';
// for (item of cao2.brinquedos) {
//   brinquedosString2 += `${item},`;
// }

// delete cao2.brinquedos;
// // console.table(cao2);
// cao2.brinquedos = brinquedosString2;
// // console.log(cao2);

// for (itens2 in cao2) {
//   console.log(`${itens2}:  ${cao2[itens2]}`);
// }
// console.log('--------------------------------------------');

//3//

// let objeto = { nome: 'Luiz', idade: 44, esporte: 'skydive' };
// console.table(objeto);

// let func1 = function (obj) {
//   let { nome, idade, esporte } = objeto;
//   console.log(`O objeto em formato string é: ${nome}, ${idade}, ${esporte}`);
// };
// console.log('--------------------------------------------');

// func1(objeto);

// console.log('--------------------------------------------');

// 4//

let cadastros = [
  { nome: 'Luiz', idade: 44, esporte: 'skydive' },
  { nome: 'Juliana', idade: 48, esporte: 'surf' },
  { nome: 'Maria Clara', idade: 15, esporte: 'musculação' },
];

// console.log(cadastros[1].nome);

// console.log(Object.keys(cadastros));

// let string = 'Marcos';
// let string2 = 'Luiz';

// let func3 = function (cadastros, string) {
//   for (itens of cadastros) {
//     if (itens.nome === string) {
//       console.log(`Encontrado!:`, itens);
//     } else {
//       alert(`O nome //${string}// é inexistente nos demais objetos`);
//     }
//   }
// };
// func3(cadastros, string2);

let todos = [
  (cao1 = {
    raca: 'Boiadeiro-Australiano',
    tempoVida: 15,
    docil: true,
    brinquedos: ['bolinha', 'freesbie', 'graveto'],
  }),
  (cao2 = {
    raca: 'Dobermann',
    tempoVida: 13,
    docil: false,
    brinquedos: ['quadradinho', 'corda de nó', 'tug-rope'],
  }),
  (cao3 = {
    raca: 'Dachshund',
    tempoVida: 16,
    docil: false,
    brinquedos: ['outro linguicinha', 'cobertores e tecidos', 'cordinhas'],
  }),
];

let string = 'Boiadeiro-Australiano';
let string2 = 'beagle';

let func3 = function (todos, string) {
  for (cao of todos) {
    for (info in cao) {
      if (cao[info] === string) {
        console.log(cao);
        return cao;
      } else {
        console.log(`Não foi encontrada a raça ${string}`);
      }
    }
  }
};
func3(todos, string2);
// final semanas 1, 2 e 3 //
