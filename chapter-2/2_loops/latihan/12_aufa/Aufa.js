// *
// * *
// * * *
// * * * *
// * * * * *

// function segitiga1(tinggi) {
//   for (let i = 1; i <= tinggi; i++) {
//     for (let j = 1; j <= i; j++) {
//       process.stdout.write('* ');
//     }
//     console.log('');
//   }
// }

// console.log('');
// segitiga1(5);

// * * * * *
// * * * *
// * * *
// * *
// *

function segitiga2(tinggi) {
  for (let i = tinggi; i >= 1; i--) {
    let pattren = '';
    for (let j = 1; j <= i; j++) {
      pattren += '* ';
    }
    console.log(pattren);
  }
}

console.log('');
segitiga2(5);

//         *
//       * *
//     * * *
//   * * * *
// * * * * *

function segitiga3(tinggi) {
  for (let i = tinggi; i >= 1; i--) {
    let pattren = '';
    for (let j = 1; j <= tinggi; j++) {
      pattren += j >= i ? ' *' : '  ';
    }
    console.log(pattren);
  }
}

console.log('');
segitiga3(5);

// * * * * *
//   * * * *
//     * * *
//       * *
//         *
      
function segitiga4(tinggi) {
  for (let i = tinggi; i >= 1; i--) {
    let pattren = '';
    for (let j = 1; j <= tinggi; j++) {
      pattren += j > i ? ' ' : ' *';
    }
    console.log(pattren);
  }
}

console.log('');
segitiga4(5);
