function polaSegitiga1(height){
  let bintang = ""
  for(let i = height; i >= 1; i--){
    for (let j = i; j >= 1; j--){
      bintang += "* "
    }
    bintang += "\n"
  }
  return bintang
}

function polaSegitiga2(height){
  let bintang =""
  for (let i = 1; i <= height; i++){
    for (let j = height; j >=1; j--){
      if (i < j){
        bintang += "  "
      }else{
        bintang += "* "
      }
    }
    bintang += "\n"
  }
  return bintang
}

function polaSegitiga3(height){
  let bintang = ""

  for (let i = height; i >= 1; i--){
    for(let j = height; j >= 1; j--){
      if (j > i){
        bintang += "  "
      }else{
        bintang += " *"
      }
    }
    bintang += "\n"
  }
  return bintang
}

console.log(polaSegitiga1(5))
console.log(polaSegitiga2(5))
console.log(polaSegitiga3(5))