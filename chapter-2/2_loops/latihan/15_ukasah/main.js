//nomor 1
console.log('\n')
function cetakBintang1() {
    for (let i = 5; i >= 1; i--) {
        let pola = '';
        for (let j = 1; j <= i; j++) {
          pola += '* ';
        }
        console.log(pola);
      }
}
cetakBintang1()


//nomor 2 
console.log('\n')
function cetakBintang2() {
    for (let i = 1; i <= 5; i++) {
        let pola = '';
        for (let j = 1; j <= 5; j++) {
          if (j <= 5 - i) {
            pola += '  ';
          } else {
            pola += '* ';
          }
        }
        console.log(pola);
       
      }
}
cetakBintang2()


//nomor 3
console.log('\n')
function cetakBintang3() {
    for (let i = 1; i <= 5; i++) {
        let pola = '';
        for (let j = 1; j <= 5; j++) {
          if (j < i) {
            pola += '  ';
          } else {
            pola += '* ';
          }
        }
        console.log(pola);
      }
}
cetakBintang3()
