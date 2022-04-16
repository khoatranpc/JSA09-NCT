// khái niệm về hàm, function
// + cú pháp basic
// + cú pháp ES6

//tác dụng của hàm: Hàm sẽ là một đống các logic tập hợp với nhau
// và được sử dụng thông qua 1 cú pháp chung

// hàm là cách để thu gọn, tái sử dụng code 1 cách nhanh chóng, clean code

//basic

// function Sum(a, b) {
//     console.log('Ham duoc goi');
//     console.log(a + b); //NaN
// }
// không nhất thiết cần phải truyền tham số,
// khi đã khai báo tham số ở phần khởi tạo hàm

// Sum();

function Sum(n) {
    let s = 0;
    for (let i = 0; i <= n; i++){
        s += i
    }
    console.log(s);
}

// bài tập 1: Viết 1 hàm hiển thị phép tính cộng có 2 tham số đầu vào
// bài tập 2: Viết 1 hàm hiển thị phép tính trừ có 2 tham số đầu vào
// bài tập 3: Viết 1 hàm hiển thị phép tính nhân có 2 tham số đầu vào
// bài tập 4: Viết 1 hàm hiển thị phép tính chia có 2 tham số đầu vào


// bài tập 5: Tạo 1 biến student có kiểu dữ liệu đối tượng bao gồm: tên, tuổi, ngày tháng năm sinh, quê quán
// thực hiện viết hàm có tham số đầu vào là 1 đối tượng, thực hiện hiển thị ra tên của đối tượng được truyền

// bài tập 6: cho mảng sau

let arr = [4,1,6,2,67,1,87,0,0,12,54,876,10];

// thự hiện tạo hàm có tham số đầu vào là mảng:

// + sắp xếp từ nhỏ tới lớn của mảng được truyền
// + sắp xếp từ lớn tới nhỏ của mảng được truyền