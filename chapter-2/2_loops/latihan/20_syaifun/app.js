// function cetakBintang(n){
//     let pattern = '';
//     for(let i = 1; i <= n; i ++){
//         // console.log(i);
//         for (let j = 1; j<= i; j++){
//             pattern += '*';
//         }
//         pattern += '\n';
//     }
//     return pattern;
// }

// console.log(cetakBintang(5));


// function segitgabesar(n){
//     let pattern = '';
//     for(let i= n; i > 0; i-- ){
//         for(let j = 0; j < i; j++){
//             pattern += '* ';
//         }
//         pattern += '\n';
//     }
//     return pattern;
// }

// console.log(segitgabesar(5));

// function BintangKanan(n){
//     let pattern = ""
//     for(i = 5; i > 0; i--){
//         for(j = 0; j<= 5; j++) {
//             if(j >= i){
//                 pattern += '* ';
//             } else {
//                 pattern += " ";
//             }
//         }
//         pattern += "\n";
//     }
//     return pattern;
// }

// console.log(BintangKanan(5));

function segitiga1(n) {
  for (let i = n; i >= 1; i--) {
    let pattren = '';
    for (let j = 1; j <= i; j++) {
      pattren += '* ';
    }
    console.log(pattren);
  }
}

console.log('');
segitiga1(5);


function segitiga2(n) {
  for (let i = n; i >= 1; i--) {
    let pattren = '';
    for (let j = 1; j <= n; j++) {
      pattren += j >= i ? ' *' : '  ';
    }
    console.log(pattren);
  }
}

console.log('');
segitiga2(5);

      
function segitiga3(n) {
  for (let i = n; i >= 1; i--) {
    let pattren = '';
    for (let j = 1; j <= n; j++) {
      pattren += j > i ? ' ' : ' *';
    }
    console.log(pattren);
  }
}

console.log('');
segitiga3(5);



