# Cetak bintang segitiga

## Contoh

output :

```
*
* *
* * *
* * * *
* * * * *
```

program :

```
function cetakBintang1(n) {
    let pattern = '';
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            pattern += '* ';
        }
        pattern += '\n';
    }
    return pattern;
}

console.log(cetakBintang1(5));
```

## Latihan

buatlah 3 fungsi untuk mencetak 3 bentuk segitiga bintang yang berbeda

1. output :

```
* * * * *
* * * *
* * *
* *
*
```

2. output :

```
        *
      * *
    * * *
  * * * *
* * * * *
```

3. output :

```
* * * * *
  * * * *
    * * *
      * *
        *
```
