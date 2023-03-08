function cetakBintang(n) {
    for (let i = 1; i <= n; i++) {
      let bintang = "";
      for (let j = 1; j <= i; j++) {
        bintang += "* ";
      }
      console.log(bintang);
    }
  }
    console.log("Contoh");
    cetakBintang(5);
    console.log("");

function cetakBintang1(n) {
    for (let i = n; i >= 1; i--) {
      let bintang1 = "";
      for (let j = 1; j <= i; j++) {
        bintang1 += "* ";
      }
      console.log(bintang1);
    }
  }
    console.log("Output 1");
    cetakBintang1(5);
    console.log("");

function cetakBintang2(n) {
    for (let i = 1; i <= n; i++) {
        let bintang2 = "";
        for (let j = 1; j <= n; j++) {
            if (j <= n - i) {
              bintang2 += "  ";
            } else {
              bintang2 += "* ";
            }
          }
          console.log(bintang2);
        }
      }
    console.log("Output 2");
    cetakBintang2(5);
    console.log("");

function cetakBintang3(n) {
    for (let i = n; i >= 1; i--) {
        let bintang3 = "";
        for (let j = n; j >= 1; j--) {
            if (j > i) {
              bintang3 += "  ";
            } else {
              bintang3 += "* ";
            }
          }
          console.log(bintang3);
        }
      }
    console.log("Output 3");
    cetakBintang3(5);
      