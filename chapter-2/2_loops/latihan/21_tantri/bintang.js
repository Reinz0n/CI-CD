function segitiga1(n) {
    let pattern = '';
    for(let i = 0;i < n;i++) {
        for(let j = n;j > i;j--) {
            pattern += '* ';
        }
        pattern += '\n';
    }
    return pattern;
}
console.log(segitiga1(5));

function segitiga2(n) {
    let pattern = '';
    for (let i = n; i > 0; i--) {
        for (let j = 1; j <= n; j++) {
            if (j >= i) {
                pattern += '* ';
            } else {
                pattern += ' '
            }
        }
        pattern += '\n';
    }
    return pattern;
}
console.log(segitiga2(5));

function segitiga3(n) {
    let pattern = '';
    for(let i = n; i > 0; i--) {
        for(let j = n; j > 0; j--) {
            if(j > i) {
                pattern += '';
            } else {
                pattern += '* ';
            }
        }
        pattern += '\n';
    }
    return pattern;
}
console.log(segitiga3(5));