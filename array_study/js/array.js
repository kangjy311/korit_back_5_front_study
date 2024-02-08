// // spread 연산
// let array = [1,2,3,4];
// array.push(5);
// array = [...array, 5, 6, ...array]; // [1,2,3,4]; array 배열 안에 있는 값들 그대로 복사, 뒤에 추가

// console.log(array);

// let obj = {
//     name: "김준일",
//     age: 31
// }
// let obj2 = {
//     ...obj,             // obj 객체 복사  
//     name: "김준이"      // 키 값은 복사 안됨 
// }

// console.log(obj);
// console.log(obj2);

// // 비구조할당
// let obj3 = {
//     id: 1,
//     name: "김준일",
//     age: 31
// }
// // let {id, name, age} = obj3;
// let {id, age} = obj3;
// console.log(id);

// -----------------------------------------------------------------

let dataList = [];
// let dataList = new Array();

window.onload = () => {
    getDataList();

    const addInput = document.querySelector(".add-input");

    addInput.onkeyup = (e) => {
        if(e.keyCode === 13) {
            const inputValue = addInput.value;
            // console.log(inputValue);
            
            const lastId = dataList.length === 0 ? 0 : dataList[dataList.length - 1].id;

            const dataObj = {
                id: lastId + 1,
                content: inputValue
            }

            fetch("http://localhost:8080/data_array/data/addition", {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(dataObj)
            });

            dataList = [...dataList, dataObj];

            addInput.value = "";    

            getDataList();  // 배열이 바껴서 새로 호출해줘야됨
        }
    }
}

// 컴포넌트 (대문자로 시작)
function ContentData({id, content}) {
    return `
        <li>
            <span>${id}번 </span>
            <span>${content}</span>
            <input type="text" class="edit-inputs" value="${content}">
            <button onclick="editData(${id})">수정</button>
            <button onclick="removeData(${id})">삭제</button>
        </li>
    `;
}

function getDataList () {
    const contentList = document.querySelector(".data-content-list");

    contentList.innerHTML = "";

    for(let dataObj of dataList) {
        contentList.innerHTML += ContentData(dataObj);  //컴포넌트
    }
}

function removeData(id) {
    // [ {id: 1, content: "test1"}, {id: 2, content: "test2"} ]

    dataList = dataList.filter((dataObj) => dataObj.id !== id);
    // filter 참인것들만 새 배열로 

    getDataList();
}

function editData(id) {
    let findIndex = -1;     

    // findIndex 찾기
    for(let i = 0; i < dataList.length; i++) {
        if(dataList[i].id === id) {
            findIndex = i;
            break;
        }
    }
    
    // findIndex 찾기
    let findObj = dataList.filter((dataObj) => dataObj.id ===id)[0];
    findIndex = dataList.indexOf(findObj);

    const editInputs = document.querySelectorAll(".edit-inputs");

    dataList[findIndex].content = editInputs[findIndex].value;

    getDataList();
}