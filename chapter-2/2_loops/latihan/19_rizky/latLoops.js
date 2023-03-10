//soal latihan
function printBintang(n) {
  let bintang = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      bintang += "*";
    }
    bintang += "\n";
  }
  return bintang;
}
console.log(printBintang(5));

//latihan1
function printBintang1(n) {
  let bintang = "";
  for (let i = 1; i <= n; i++) {
    for (let j = n; j >= i; j--) {
      bintang += "*";
    }
    bintang += "\n";
  }
  return bintang;
}
console.log(printBintang1(5));

//latihan 2
function printBintang2(n) {
  let bintang = "";
  for (let i = 1; i <= n; i++) {
    for (let j = i; j <= n; j++) {
      bintang += " ";
    }
    for (let j = 1; j <= i; j++) {
      bintang += "*";
    }
    bintang += "\n";
  }
  return bintang;
}
console.log(printBintang2(5));

//latihan 3

function printBintang3(n) {
  let bintang = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      bintang += " ";
    }
    for (let j = i; j <= n; j++) {
      bintang += "*";
    }
    bintang += "\n";
  }
  return bintang;
}
console.log(printBintang3(5));
