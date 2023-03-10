function segitiga(n) {
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
console.log(segitiga(5));

function segitiga2(n) {
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
console.log(segitiga2(5));

function segitiga3(n) {
    let hasil = '';
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= i; j++) {
        hasil += `* `;
      }
      hasil += '\n';
    }
    return hasil;
  }
  
  console.log(segitiga3(5));
  
  function segitiga4(n) {
    let hasil = '';
    for (let i = 0; i < n; i++) {
      for (let j = n; j > i; j--) {
        hasil += '* ';
      }
      hasil += '\n';
    }
    return hasil;
  }
  console.log(segitiga4(5));
  