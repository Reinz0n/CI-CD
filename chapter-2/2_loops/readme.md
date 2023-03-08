# Perulangan

## 1. "for" loop

**format penulisan** :

```
for (inisialisasi; kondisi; pengubah nilai) {
    pernyataan atau perintah;
}
```

**contoh 1** :

```js
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

**contoh 2** :

```js
for (let i = 5; i >= 1; i--) {
  console.log(i);
}
```

## 2. "while" loop

**format penulisan :**

```
while(kondisi){
    pernyataan atau perintah;
}
```

**contoh 1** :

```js
let count = 1;
while (count <= 5) {
  console.log(count);
  count++;
}
```

**contoh 2** :

```js
let count = 5;
while (count >= 1) {
  console.log(count);
  count--;
}
```

## 3. "do...while" loop

**format penulisan :**

```
do {
    pernyataan atau perintah;
} while(kondisi)
```

**contoh 1** :

```js
let count = 1;
do {
  console.log(count);
  count++;
} while (count <= 5);
```

**contoh 2** :

```js
let count = 0;
do {
  console.log(count);
  count--;
} while (count >= 1);
```

## 4. recursive loop

**format penulisan :**

```
function namaFungsi(parameter){
    if (cek kondisi){
        base case
    } else {
        recursive method
    }
}
```

**contoh 1** :

```js
function countdown(n) {
  console.log(n);

  if (n <= 1) {
    return;
  } else {
    countdown(i - 1);
  }
}
countdown(5);
```

**contoh 2** :

```js
function factorial(n) {
  if (n === 1) {
    return n;
  } else {
    return n * factorial(n - 1);
  }
}
console.log(factorial(5));
```
