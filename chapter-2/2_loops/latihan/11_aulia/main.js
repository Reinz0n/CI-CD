// Aulia Nugraha

function cetakBintang1(n) {
  let pattern = "";
  //   baris
  for (let i = n; i >= 1; i--) {
    // kolom
    for (let j = 1; j <= i; j++) {
      pattern += "* ";
    }
    pattern += "\n";
  }
  return pattern;
}

function cetakBintang2(n) {
  let pattern = "";
  //   baris
  for (let i = 1; i <= n; i++) {
    // kolom kiri
    for (let j = n; j > i; j--) {
      pattern += "  ";
    }
    // kolom kanan
    for (let j = 1; j <= i; j++) {
      pattern += "* ";
    }
    pattern += "\n";
  }
  return pattern;
}

function cetakBintang3(n) {
  let pattern = "";
  //   baris
  for (let i = 1; i <= n; i++) {
    // kolom kiri
    for (let j = 1; j < i; j++) {
      pattern += "  ";
    }
    // kolom kanan
    for (let j = n; j >= i; j--) {
      pattern += "* ";
    }
    pattern += "\n";
  }
  return pattern;
}

console.log('==========POLA 1==========');
console.log(cetakBintang1(5));
console.log('==========POLA 2==========');
console.log(cetakBintang2(5));
console.log('==========POLA 3==========');
console.log(cetakBintang3(5));
