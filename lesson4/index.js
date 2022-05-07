console.log('connected');
// cú pháp ES6
// cách khai báo hàm

// function Tenham(a, b) {
//     return (a + b);
// }

// console.log(Tenham(10, 5));

// 3 option: var, let, const;

// let Sum = (a, b) => {
//    return (a+b);
// }

// let Sum = (a, b) => (a + b);

// console.log(Sum(2,7));

let listToDo = [];

let domForm = document.querySelector('form');

let domParentItem = document.querySelector('div.container-item-form')

let removeItemBtn;
let arrBtnRemoveItem;


let showForm = (listToDo) => {
    domForm.onsubmit = (e) => {
        e.preventDefault();
        readData(listToDo);
    }
}


// mỗi khi đọc data, ta sẽ cho các data mới add sự kiện remove

let readData = (listToDo) => {
    let index = 0;
    domParentItem.innerHTML = "";
    listToDo.forEach(element => {
        domParentItem.innerHTML += `<div class="item ${index}">
        <span>${element}</span>
        <button class="remove-item ${index}">Remove</button>
    </div>`
        index++;
    });
    removeItemBtn = document.querySelectorAll('button.remove-item');
    arrBtnRemoveItem = [...removeItemBtn];
    arrBtnRemoveItem.forEach((element)=>{
        element.onclick = ()=>{
            //sử dụng hàm splice để xóa bắt đầu tại 1 vị trí và số phần tử muốn xóa
            listToDo = listToDo.splice(parseInt(element.classList[1]),1);
            console.log(listToDo);
        }
    })

}


let addTodoFnc = (listToDo) => {
    listToDo.push(domForm.addTodo.value);
}

let addBtn = document.querySelector('button.add-todo').onclick = () => {
    addTodoFnc(listToDo);
    showForm(listToDo);
}


