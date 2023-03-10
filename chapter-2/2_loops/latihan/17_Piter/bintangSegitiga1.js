let star = '*',
    string = '';

for (let i = 5;i>=1;i--){
    for (let s = 1;s<=i;s++){
        string += star;    
    }
    string += '\n';
}
console.log(string);