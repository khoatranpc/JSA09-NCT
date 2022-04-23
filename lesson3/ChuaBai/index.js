// khái niệm về hàm
// hàm là một tổ hợp các logic trong 1 phạm vi
// có thể nhận hoặc không các tham số đầu vào
// tác dụng: có thể tái sử dụng, giúp clean code, giúp cho xử lý logic ngắn gọn hơn
// ví dụ hàm

// function Sum(a, b) {
//     console.log(a + b);
// }

// cách gọi
// Sum(10,12);
// Sum(100,1000);


// let student = {
//     ten: "Tran Dang Khoa",
//     tuoi: 10,
//     ngaySinh: "10/10/2010",
//     queQuan: "Bien Ca?"
// }

// function ShowName(abc){
//     console.log(abc.ten);
// }

// ShowName(student);
let arr = [4,1,6,2,67,1,87,0,0,12,54,876,10];
let arr1 = [1,23,1,24,2147,3,46,2,32,67];

function SXLtoB(arrayParam) {
    for (let i = 0; i < arrayParam.length; i++) {
        for (let j = 0; j < arrayParam.length; j++) {
            if (arrayParam[j] < arrayParam[j + 1]) {
                let temp = arrayParam[j];
                arrayParam[j] = arrayParam[j + 1];
                arrayParam[j + 1] = temp;
            }
        }
    }
    console.log(arrayParam);
}


SXLtoB(arr);
SXLtoB(arr1);

