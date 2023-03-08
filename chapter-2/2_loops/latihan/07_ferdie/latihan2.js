// Latihan 2 Chapter 2
// Ferdie Maulana


function Pola1(total){
    let bintang = "*"
    for (let i = 1; i <= total; i++){
        if(i==1){
            console.log(bintang)
        } else {
            bintang = bintang + "*";
            console.log(bintang);
        }
    }
}
Pola1(5);
console.log("\n");

function Pola2(total){
    let star = ''; 
    for(let i = total; i >= 1; i --){ 
    for(let j = 0; j <= i - 1; j ++){ 
        star += '*'; 
    } 
        star += '\n'; 
} 
console.log(star);
}
Pola2(5);

function Pola3(total){
    let star = "";
    for (let i = 1; i <= total; i++) {
        
        for (let j = 0; j < total - i; j++) {
            star += " ";
        }
        
        for (let k = 0; k < i; k++) {
            star += "*";
        }
            star += "\n";
      }
    console.log(star);
}
Pola3(5);

function Pola4(total){
    let star = "";
    for (let i = 0; i <= total - 1; i++) {
        
        for (let j = 0; j < i; j++) {
            star += " ";
        }
        
        for (let k = 0; k < total-i; k++) {
            star += "*";
        }
            star += "\n";
      }
    console.log(star);
}
Pola4(5);