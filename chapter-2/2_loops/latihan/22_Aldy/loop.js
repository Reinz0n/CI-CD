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



