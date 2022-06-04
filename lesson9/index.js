console.log(`Connected!`);
// DOM là gì: DOM là thuật ngữ chỉ hành động thao túng các văn bản html, css bằng js
// https://camo.githubusercontent.com/3b1bb622c5f246470119eafa6b45589bf12a1d97637df4016c36b4c2d3b4b19f/68747470733a2f2f74696368756e672e636f6d2f696d672f626c6f672f32303231303332335f666c61736b2e706e67
// link design todo list
// lib bootstrap: https://getbootstrap.com/docs/5.2/getting-started/introduction/

let renderRow = (stt, taskName, taskStatus) => {
  return ` <tr>
    <th scope="row" class="stt">${stt}</th>
    <td class="task-name">${taskName}</td>
    <td class="task-status">${taskStatus}</td>
    <td class="td td-table ${stt}">
      <button class="btn btn-edit ${stt}">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-pencil"
          viewBox="0 0 16 16"
        >
          <path
            d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"
          />
        </svg>
      </button>
    </td>
    <td class="td td-table ${stt}">
      <button class="btn btn-remove ${stt}">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-trash"
          viewBox="0 0 16 16"
        >
          <path
            d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
          />
          <path
            fill-rule="evenodd"
            d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
          />
        </svg>
      </button>
    </td>
    </tr>`
}

let arrTask = [];



let btns;
let arrBtns;

let btnEdits;
let arrBtnEdits;

// thực hiện xóa task

// duyệt mảng, add sự kiện click cho từng nút
let removeBtn = () => {
  arrBtns.map((item, index) => {
    // classList[2], vị trí số thứ tự button, tương ứng với stt phần tử task trong mảng

    // console.log(item.classList[2]);
    item.addEventListener('click', (e) => {
      arrTask.splice(item.classList[2], 1);

      localStorage.setItem('ListTask', JSON.stringify(arrTask));
      console.log(arrTask);
      renderTable(arrTask);
    })
  })
}

// lesson 9

// function edit
let edit = (arr, indexItemUpdate, fieldUpdate) => {
  let foundItemByIndex = arr.filter((item, index) => {
    return item.stt == indexItemUpdate ? item : "";
  })

  // update once task
  foundItemByIndex[0].taskStatus = fieldUpdate;
  console.log(foundItemByIndex);
  // update default arr
  arr.splice(indexItemUpdate, 1, foundItemByIndex[0]);

  // đây là bước lưu trữ mảng task vào trong localStorage
  localStorage.setItem('ListTask', JSON.stringify(arr));

  renderTable(arr);
}

// hàm btn edit
let btnEdit = (e) => {

  arrBtnEdits.map((item, index) => {
    // classList[2], vị trí số thứ tự button, tương ứng với stt phần tử task trong mảng

    // console.log(item.classList[2]);
    item.addEventListener('click', (e) => {
      console.log(e.target.parentElement.classList[2]);
      let statusUpdate = prompt("Thay đổi trạng thái: ");
      // call functiong edit for update status
      console.log(statusUpdate);
      edit(arrTask, e.target.parentElement.classList[2], statusUpdate);
      renderTable(arrTask);
    })
  })
}

let getListTask = JSON.parse(localStorage.getItem('ListTask'));

// nếu tồn tại => true, ngược lại => false
if (getListTask) arrTask = getListTask;

// document.querySelector('tbody').innerHTML += renderRow(rowTask.stt, rowTask.taskName, rowTask.taskStatus);

let tbodyHTML = document.querySelector('tbody');


let renderTable = (array) => {
  // truoc khi hien thi, lam cho bang rong
  tbodyHTML.innerHTML = '';
  array.map((item, index) => {
    item.stt = index;
    tbodyHTML.innerHTML += renderRow(item.stt, item.taskName, item.taskStatus);
  })

  // step1: DOM all buttons in html
  btns = document.querySelectorAll('button.btn-remove');
  // step2: thực hiện dải mảng nodelist từ dom dòng 171, gắn vào mảng arrBtns
  arrBtns = [...btns];

  // step3 : DOM all btn edit
  btnEdits = document.querySelectorAll('button.btn-edit');
  // step4:
  arrBtnEdits = [...btnEdits];

  removeBtn();
  btnEdit();
}
// hiển thị bảng khi mở trang web
renderTable(arrTask);

let btnAddTask = document.querySelector('button.btn-add-task');

let inputTask = document.querySelector('input.input-task');

let tempTask
// hàm tìm kiếm

// nếu không tìm thấy => kết quả trả về mảng có độ dài = 0; ngược lại
// sẽ trả về mảng có động rộng bằng với số phần tử thỏa mãn điều kiện

let findItem = (array, findItem) => {
  let foundItem = array.filter((item, index) => {
    return item.taskName == findItem ? item : '';
  })
  return foundItem;
}

inputTask.addEventListener('change', (e) => {
  // console.log(e.target.value);
  let foundTaskByName = findItem(arrTask, e.target.value.trim());

  if (foundTaskByName.length != 0) {
    renderTable(foundTaskByName);
  }
  else {
    renderTable(arrTask);
  }


  tempTask = {
    stt: arrTask.length,
    taskName: '',
    taskStatus: 'Pending'
  }
  tempTask.taskName = e.target.value;
})

btnAddTask.onclick = (e) => {
  try {
    if (inputTask.value == '') throw new Error('Input must be not empty!');

    // kiểm tra task name đã tồn tại
    let counterItemFilter = findItem(arrTask, tempTask.taskName);
    // nếu đã tồn tại thì sex throw new Error
    if (counterItemFilter.length != 0) {
      for (let i = 0; i < counterItemFilter.length; i++) {
        try {
          if (counterItemFilter[i].taskStatus != 'Finished') throw new Error('Task name already existed!');
          // nếu chưa tồn tại
          // code ...
          let tempArrTask = [...arrTask];

          // day la logic them task
          tempArrTask.push(tempTask);

          arrTask = tempArrTask;

          // đây là bước lưu trữ mảng task vào trong localStorage
          localStorage.setItem('ListTask', JSON.stringify(arrTask));

          // day la ham hien thi bang task
          renderTable(arrTask);
        } catch (error) {
          alert(error.message)
        }
      }
    } else {
      // nếu chưa tồn tại
      // code ...
      let tempArrTask = [...arrTask];

      // day la logic them task
      tempArrTask.push(tempTask);

      arrTask = tempArrTask;

      // đây là bước lưu trữ mảng task vào trong localStorage
      localStorage.setItem('ListTask', JSON.stringify(arrTask));


      // day la ham hien thi bang task
      renderTable(arrTask);
    }
  } catch (error) {
    alert(error.message);
  }
}