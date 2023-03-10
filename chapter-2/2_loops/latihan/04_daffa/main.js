function printStar1(jumlahRow) {
  for (let i = jumlahRow; i >= 1; i--) {
    let row = "";

    for (let j = i; j >= 1; j--) {
      row = row + "* ";
    }

    console.log(row);
  }
}

function printStar2(jumlahRow) {
  for (let i = 1; i <= jumlahRow; i++) {
    let row = "";

    for (let k = jumlahRow - i; k > 0; k--) {
      row += "  ";
    }

    for (let j = 1; j <= i; j++) {
      row = row + "* ";
    }

    console.log(row);
  }
}

function printStar3(jumlahRow) {
  for (let i = jumlahRow; i >= 1; i--) {
    let row = "";

    for (let k = jumlahRow - i; k > 0; k--) {
      row += "  ";
    }

    for (let j = i; j >= 1; j--) {
      row = row + "* ";
    }

    console.log(row);
  }
}

printStar1(5);
console.log("");
printStar2(5);
console.log("");
printStar3(5);
