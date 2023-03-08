function cetakBintang2(n){
    if(n == 0){
        return;
    }
    let x = '';
    for(let i = 0; i < n; i++){
        x += " *";
    }
    console.log(x);
    cetakBintang2(n - 1);
}

function cetakBintang3(n){
    let x = '';
    for(let i = 1; i <= n; i++){
        for(let j = n - i; j > 0; j--){
            x += "  ";
        }
        for(let k = 1; k <= i; k++){
            x += " *";
        }
        x += '\n';
    }
    console.log(x);
}

function cetakBintang4(n){
    let x = '';
    for(let i = n; i >= 1; i--){
        for(let j = n - i; j > 0; j--){
            x += "  ";
        }
        for(let k = i; k > 0; k--){
            x += " *";
        }
        x += '\n';
    }
    console.log(x);
}

cetakBintang2(5);
cetakBintang3(5);
cetakBintang4(5);