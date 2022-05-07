console.log(`connceted!`);
// mảng: nó là một kiểu dữ liệu, là 1 tập hợp các phần tử ở chung 1 biến
// cú pháp

// https://phambinh.net/bai-viet/lam-viec-voi-array-trong-javascript/

// let arrNumber = [4, 2, 1, 5, 10, 2, 164, 2, 8, 1, 0];
// Phương thức thêm:
// let temparr = arrNumber.push(1)

// phương thức sửa || xóa
// arrNumber.splice(2, 1, 3, 4, 6)

// console.log(arrNumber);


// phương thức xóa

// arrNumber.pop();
// console.log(arrNumber);

// tìm kiếm

// let test = arrNumber.find((item) => {
//     return item % 2 == 0
// })
// console.log(test);

// let test = arrNumber.filter((item) => {
//     return item == 0;
// })
// console.log(test);


// let arrString = ["Ronaldo", "Messi", "Nhật Bản", "USA", "Việt Nam", "In-Đô", "India"];

// yc1:
// + thêm 2 tên nước là: ThaiLand, Capmuchia vào vị trí nước In-Đô
// yc2:
// + Tìm kiếm nước có tên là USA và hiển thị ra màn hình
// yc3:
// + Sắp xếp và in ra màn hình mảng đã sắp xếp

// yc1:

// arrString.splice(5, 1, "ThaiLand", "Campuchia");
// console.log(arrString);

// yc2:
// let find = arrString.filter((item) => {
//     return item == "USA"
// })
// console.log(find);

// yc3:
// arrString.sort();
// console.log(arrString);






//-----------------------------
// btvn:
let arrObject = [
    { name: "khoa", age: 10, height: 170 },
    { name: "manh", age: 6, height: 150 },
    { name: "Dam Vinh Biet", age: 2, height: 140 }
];
// yc1: Tìm kiếm và hiển thị ra tên của người có chiều cao lớn hơn 145
// yc2: Tìm và hiển thị người có độ tuổi chẵn
// yc3: Sắp xếp và hiển thị lại mảng object trên theo chiều cao từ bé tới lớn



// ôn tập DOM
// hiểu đơn giản: chúng ta có thể sử dụng mã nguồn js để thao túng các phần tử trong html
// document.querySelector("h1.intro").innerHTML = "----Đây là lớp học JSA09----";

// document.querySelector("h1.intro").onclick = ()=>{
//     console.log('heelo');
// }