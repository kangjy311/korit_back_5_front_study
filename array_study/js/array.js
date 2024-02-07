
function handleAddData() {
    const addInput = document.querySelector(".add-input");
    
    addInput.onkeyup = (e) => {
        if(e.keyCode === 13) {
            addInput.classList.add(".edit-text");
        }
    }
}
function addTextInput() {
    const addInput = document.querySelector(".add-input");

    let dataListJson = localStorage.getItem("dataList");
    let dataList = dataListJson !== null ? JSON.parse(dataListJson) : new Array();


    let dataObject = {
        id: 1,
        content: addInput.value
    } 
    dataList.push(dataObject);

    localStorage.setItem("dataList", JSON.stringify(dataList));
    getDataList();
}

function getDataList () {
    const dataContentList = document.querySelector(".data-content-list");

    const dataListJson = localStorage.getItem("dataList");
    const dataList = dataListJson !== null ? JSON.parse(dataListJson) : new Array();

    dataContentList.innerHTML = "";

    for(let data of dataList) {
        dataContentList.innerHTML += `
            <li>
                <span class="count">1번</span>
                <span class="edit-text">${data.content}</span>
                <input type="text" class="text-edit-input">
                <button class="edit-button">수정</button>
                <button class="remove-button">삭제</button>
            </li>
        `;
    }
}
