use: 'strict';

racas = [
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
function calculateDaysBetweenDate(date1, date2) {
  const oneDay = 24 * 60 * 60 * 1000;
  const diffDays = Math.round(Math.abs((date1 - date2) / oneDay));
  return diffDays;
}
console.log(
  calculateDaysBetweenDate(new Date(1900, 11, 1), new Date(2020, 11, 2))
);
