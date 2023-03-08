// pola bintang segitiga siku-siku
function segitiga1(panjang) {
    let hasil = '';
    for (let i = 0; i < panjang; i++) {
        for (let j = 0; j <= i; j++) {
            hasil += '* ';
        }
        hasil += '\n';
    }
    return hasil;
}
console.log(segitiga1(5));




  // pola terbalik
  function segitiga2(panjang) {
    let hasil = '';
    for (let i = 0; i < panjang; i++) {
        for (let j = panjang; j > i; j--) {
            hasil += '* ';
        }
        hasil += '\n';
    }
    return hasil;
}
console.log(segitiga2(5));



  //pola bintang segitiga sama sisi
  for (let i = 1; i <= 5; i++) {
    let bintang = '';
    for (let j = 1; j <= 5 - i; j++) {
      bintang += ' ';
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      bintang += '*';
    }
    console.log(bintang);
  }


  // pola segitiga siku 

  function segitiga3(panjang) {
    let hasil = '';
    for (let i = panjang; i > 0; i--) {
        for (let j = 1; j <= panjang; j++) {
            if (j >= i) {
                hasil += '* ';
            } else {
                hasil += ' '
            }
        }
        hasil += '\n';
    }
    return hasil;
}
console.log(segitiga3(5));


// pola segitiga siku terbalik

function segitiga4(panjang) {
    let hasil = '';
    for (let i = panjang; i > 0; i--) {
        for (let j = panjang; j > 0; j--) {
            if (j > i) {
                hasil += ' ';
            } else {
                hasil += '* '
            }
        }
        hasil += '\n';
    }
    return hasil;
}
console.log(segitiga4(5));
  