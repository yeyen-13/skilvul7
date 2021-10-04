// Soal - 01
// Kamu diminta untuk membuat sebuah fungsi reverse yang mana akan membalik sebuah array, fungsi reverse memiliki sepsifikasi sebagai berikut:

// memiliki 1 parameter yaitu:
// arr [Array] => array yang akan kita manipulasi nilainya
// return value [Number] berupa sebuah array baru yang sudah terbalik
// Untuk mempermudah proses pengerjaan kamu dapat menggunakan code template dibawah ini

const arr = [1, 2, 3];
const arr2 = [8, 1, 5, 7];

function reverse(arr) {
  let array = [];
  for (let i = 0; i < arr.length; i++) {
    array.push(arr[i]);
  }
  return array.reverse();
}

const newArr = reverse(arr);
const newArr2 = reverse(arr2);
console.log(arr, newArr);
console.log(arr2, newArr2);
