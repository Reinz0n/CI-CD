function cetakBintang1(rows) {
  let star = "";
  for (let i = rows; i >= 1; i--) {
    for (let j = i; j >= 1; j--) {
      star += "* ";
    }
    star += "\n";
  }
  return star;
}

console.log(cetakBintang1(5));

function cetakBintang2(rows) {
  let star = "";
  for (let i = rows; i >= 1; i--) {
    for (let j = 1; j <= rows; j++) {
      if (j >= i) {
        star += "* ";
      } else {
        star += "  ";
      }
    }
    star += "\n";
  }
  return star;
}

console.log(cetakBintang2(5));

function cetakBintang3(rows) {
  let star = "";
  for (let i = rows; i >= 1; i--) {
    for (let j = rows; j >= 1; j--) {
      if (j > i) {
        star += "  ";
      } else {
        star += "* ";
      }
    }
    star += "\n";
  }
  return star;
}

console.log(cetakBintang3(5));
