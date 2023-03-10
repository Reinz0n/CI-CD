# Sorting Alhorithm

## 1. `Bubble Sort

Example :

```js
/* bubbele sort */
function bubbleSort(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    for (let j = 1; j <= i; j++) {
      console.log("");
      console.log(arr);
      console.log("Bandingkan " + arr[j - 1] + " dengan " + arr[j]);

      if (arr[j - 1] > arr[j]) {
        var temp = arr[j - 1];
        arr[j - 1] = arr[j];
        arr[j] = temp;
      }

      console.log(arr);
    }
  }
  // return arr;
}
console.log(bubbleSort([8, 6, 7, 20, 1]));
```
