// console.log(`connected`);


// let arr = [5, 32, 1, 6, 2, 8712, 90, 21, 10];

//yêu cầu 1: kiểm tra, có bao nhiêu phần tử chia hết cho 5 ở mảng arr trên

//toán tử % là phép chia lấy dư

//làm việc với mảng, chắc chắn ta sẽ sử dụng vòng lặp -> for
// làm việc với mảng, ta sẽ làm việc gián tiếp, thông qua vị trí của các phần tử
// vị trí bắt đầu là vị trí số 0
// cách lấy phần tử của mảng thông qua vị trí: arr[vị trí]

//Giải yêu cầu 1:

// let count = 0;

// for(let i = 0; i < arr.length; i++){
//     if(arr[i] % 5 == 0){
//         count++;
//         //count = count + 1;
//         // count += 1;
//     }
// }
// console.log(`So phan tu chia het cho 5 la : ${count}`);

// let arr = [5, 32, 1, 6, 2, 8712, 90, 21, 10];
//yêu cầu 2: sắp xếp mảng trên, theo 2 thứ tự: từ nhỏ -> lớn; lớn -> bé

// thuật toán sắp xếp nổi bọt
// chúng ta sẽ cần phải thực hiện phép gán: gán thằng đằng sau bằng thằng đằng trước và ngược lại

// https://www.youtube.com/watch?v=fID30q6UWGA&ab_channel=TNGroup


// for (let i = 0; i < arr.length; i++) {
//     for(let j = 0; j < arr.length; j++){
//         if(arr[j] > arr[j + 1]){
//                 let temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//         }
//     }
// }
// console.log(arr);

// yêu cầu 3:

// Math.sqrt();
// let n = 3;
// let sum = 0;
// for(let i = 1; i <= n ; i++){
//     sum  = Math.sqrt(i + sum);
// }
// console.log(sum);

// for(let i = n; i >= 1 ; i--){
//     sum  = Math.sqrt(i + sum);
// }
// console.log(sum);

// yêu cầu 4
let arr1 = [1.212, 2.5, 7.1, 6.9]

for(let i = 0; i < arr1.length; i++){
    console.log(Math.round(arr1[i]));
}
