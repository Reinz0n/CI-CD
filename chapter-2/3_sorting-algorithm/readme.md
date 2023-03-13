# Sorting Alhorithm

## 1. Bubble Sort

Example :

```js
/* bubbele sort */
function bubbleSort(arr) {
  for (let j = 0; j < arr.length - 1; j++) {
    for (let i = 0; i < arr.length - 1; i++) {
      let a = arr[i];
      let b = arr[i + 1];

      if (b < a) {
        let temp = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = temp;
      }
    }
  }

  return arr;
}
console.log(bubbleSort([12, 98, 23, 47, 65, 32, 49, 87, 71, 23, 12, 35]));
```

## 2. Merge Sort

Example :

```js
/* merge sort */
function mergeShort(arr) {
  var len = arr.length;
  if (len < 2) return arr;

  var mid = Math.floor(len / 2),
    left = arr.slice(0, mid),
    right = arr.slice(mid);

  console.log("kiri " + left);
  console.log("kanan " + right);
  console.log("\n");

  return merge(mergeShort(left), mergeShort(right));
}

function merge(left, right) {
  var result = [],
    lLen = left.length,
    rLen = right.length,
    l = 0,
    r = 0;

  while (l < lLen && r < rLen) {
    if (left[l] < right[r]) {
      result.push(left[l++]);
    } else {
      result.push(right[r++]);
    }
  }

  result = result.concat(left.slice(l).concat(right.slice(r)));
  console.log(result);
  return result;
}

console.log(mergeShort([7, 5, 2, 4, 3, 9]));
```

## 3. Quick Sort

Example :

```js
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let pivot = arr[0];
  let partisiKiri = [];
  let partisiKanan = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      partisiKiri.push(arr[i]);
    } else {
      partisiKanan.push(arr[i]);
    }
  }

  console.log(`pivot         : ${pivot}`);
  console.log(`partisi kiri  : ${partisiKiri}`);
  console.log(`partisi kanan : ${partisiKanan}`);
  console.log(`\n`);

  // return quickSort(partisiKiri).concat(pivot, quickSort(partisiKanan));
  return [...quickSort(partisiKiri), pivot, ...quickSort(partisiKanan)];
}

console.log(quickSort([5, 2, 3, 7, 8, 1, 4, 6]));
```
