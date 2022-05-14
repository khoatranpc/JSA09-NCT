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
console.log(`Connected`);

// yc1
// let filterHeight = arrObject.filter((item, index) => {
//     return item.height > 145 ? console.log(item.name) : "";
// });

// yc2
// let filterAge = arrObject.filter((item, index) => {
//     return item.age % 2 == 0 ? console.log(item.name) : "";
// })

// yc3

function SXBtoL(arrayParam) {
    for (let i = 0; i < arrayParam.length; i++) {
        for (let j = 0; j < arrayParam.length - 1; j++) {
            if ((arrayParam[j].height) > (arrayParam[j + 1].height)) {
                let temp = arrayParam[j];
                arrayParam[j] = arrayParam[j + 1];
                arrayParam[j + 1] = temp;
            }
        }
    }
    console.log(arrayParam);
}
// console.log(arrObject);
SXBtoL(arrObject);

