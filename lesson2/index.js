//cach khai bao bien, cac toan tu, cau lenh dieu kien

// let number1 = 5;
// let number2 = 11;
// if(number2/number1 == 2){
//     console.log(number2 +"/"+number1 +" = " + 2);
// }else{
//     console.log('Khong xac dinh ket qua');
// }

// let month = prompt("Nhap vao so thang ban muon!");

// switch (month) {
//     case "1":
//         console.log(`Day la thang ${month}`);
//         break;
//     case "2":
//         console.log(`Day la thang ${month}`);
//         break;
//     case "3":
//         console.log(`Day la thang ${month}`);
//         break;
//     case "4":
//         console.log(`Day la thang ${month}`);
//         break;
//     case "5":
//         console.log(`Day la thang ${month}`);
//         break;
//     case "6":
//         console.log(`Day la thang ${month}`);
//         break;
//     case "7":
//         console.log(`Day la thang ${month}`);
//         break;
//     case "8":
//         console.log(`Day la thang ${month}`);
//         break;
//     case "9":
//         console.log(`Day la thang ${month}`);
//         break;
//     case "10":
//         console.log(`Day la thang ${month}`);
//         break;
//     case "11":
//         console.log(`Day la thang ${month}`);
//         break;
//     case "12":
//         console.log(`Day la thang ${month}`);
//         break;
//     default:
//         console.log('Day khong phai thang trong nam');
//         break;
// }

//vong lap loop
// co 3 loai vong lap: for, while, do while

// for loop
// short hand cua cac phep toan: s = s + 1 ||  s+=1 || s++; 
//yeu cau: cho biet ket qua cua phep tinh: 1 + 2 + 3 +...+ 99 + 100
// let sum = 0;

// for (let i = 1; i <= 100; i++) {
//     sum = sum + i;
// }

// let i = 0;
// while (i <= 5) {
//     i++;
//     if(i == 2){
//         continue;
//     }
//     console.log(i);
// }

// do while

// let i = 0;
// do {
//     console.log(i);
//     i++;
// } while (i <= 5);


// 

// for (let i = 0; i <= 100; i++) {
//     //code
//     if (i % 2 == 0){
//         console.log(`So ${i} la so chan`);
//     }
// }

//kieu du lieu mang: mang la tap hop cac phan tu  co cung kieu du lieu hoac khac

//khai bao 1 mang du lieu:

// let arr1 = [1, 5, 2, 1, 243, 4, "khoa dep trai"];

//de lam viec voi mang, chung ta se lam viec thong qua cac vi tri cua cac phan tu

//doi voi mang, phan tu luon bat dau tai vi tri so 0
//cu pha de lay duoc cac phan tu cua mang
//them, sua, xoa, tim kiem
//CRUD

// arr1.push("Lop chung minh, rat rat vui");

// duyet mang
// for (let i = 0; i < arr1.length; i++) {
//     if((arr1[i] % 2) == 0 ){
//         console.log(`so chan ${arr1[i]}`);
//     }
// }


let arr = [5, 32, 1, 6, 2, 8712, 90, 21, 10];
// for(let i = 0;  i < arr.length; i++){
// }

//s??? d???ng v??ng l???p for

//y??u c???u 1: ki???m tra, c?? bao nhi??u ph???n t??? chia h???t cho 5 ??? m???ng arr tr??n
//y??u c???u 2: s???p x???p m???ng tr??n, theo 2 th??? t???: t??? nh??? -> l???n; l???n -> b??
//y??u c???u 3: gi???i quy???t b??i to??n ??? h??nh yc3.png

let arr1 = [1.212, 2.5, 7.1, 6.9]
//y??u c???u 4: cho m???ng arr1, l??m tr??n l??n v?? l??m tr??n xu???ng c??c ph???n t??? c???a m???ng arr1

//----- t???t c??? c??? y??u c???u tr??n, k???t qu??? c???n ph???i ???????c in ra m??n h??nh

// ki???u d??? li???u object (?????i t?????ng)
console.log(arr1);

let person = {
    name: "khoa dep trai",
    age: 10,
    address: "Nui non"
}
console.log(person);

console.log(person.name);
if (person.name == "khoa dep trai"){
    console.log(`Xin chao ${person.name}`);
}

