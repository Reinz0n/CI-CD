/*
1. "for" loop
for (inisialisasi; kondisi; pengubah nilai)
console.log()
*/

//contoh1
// for (let i = 1; i <= 5; i++){
//     console.log(i);
// }

//contoh2
// for (let i = 5; i >= 1; i--){
//     console.log(i);
// }

/*
2. "while" loop
while (kondisi){
    perintah
}
console.log()
*/

//contoh
// let count = 5;
// while (count >=1){
//     console.log(count);
//     count--;
// }

/*
3. "do..while" loop
do {
    perintah
} while (kondisi);
console.log()
*/

//contoh1
// let count = 1;
// do {
//     console.log(count);
//     count++;
// } while (count <= 5);

//contoh2
// let count = 5;
// do {
//     console.log(count);
//     count--;
// } while (count >= 1);



// function countdown(i) {
//     console.log(i);
//     if (i <= 1){
//         //base case
//         return i;
//     } else {
//         //recursive procedure
//         countdown(i - 1);
//     }
// }

// countdown(3);


// 3! = 3 * 2 * 1;
// 3! = 6;
// 5! = 5 * 4 * 3 * 2 * 1;
// 5! = 120;

// function factorial(n) {
//     if (n === 1){
//         return n;
//     } else {
//         return n * factorial(n - 1);
//     }
// };

// console.log(factorial(3));



// function cetakBintang(n){
//         if (n === 1){
//         return n;
//     } else {
//         return n * cetakBintang(n - 1);
//     }
// }

// console.log(cetakBintang(3));



function cetakBintang(n){
    let pattern = ``;
    for (let i = 1; i <= n; i++) {
        for ( let j = 1; j <= i; j++){
            pattern += `* `;
        }
        pattern += `\n`;
    }
    return pattern;
}
console.log(cetakBintang(5));

function cetakBintang1(n){
    let pattern = ``;
    for (let i = 1; i <= n; i++) {
        for ( let j = n; j >= i; j--){
            pattern += `* `;
        }
        pattern += `\n`;
    }
    return pattern;
}
console.log(cetakBintang1(5));

function cetakBintang2(n) {
    let hasil = '';
    for (let i = n; i > 0; i--) {
      for (let j = 1; j <= n; j++) {
        if (j >= i) {
          hasil += '* ';
        } else {
          hasil += '  '
        }
      }
      hasil += '\n';
    }
    return hasil;
  }
  console.log(cetakBintang2(5));
  
  function cetakBintang3(n) {
    let hasil = '';
    for (let i = n; i > 0; i--) {
        for (let j = n; j > 0; j--) {
            if (j > i) {
                hasil += '  ';
            } else {
                hasil += '* '
            }
        }
        hasil += '\n';
    }
    return hasil;
  }
  console.log(cetakBintang3(5));



