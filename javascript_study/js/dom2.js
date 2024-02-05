const submitButton = document.querySelector(".input-submit");

// 이벤트 속성 onclick
submitButton.onclick = () => {
    const input = document.querySelector(".inputs");
    const dataList = document.querySelector(".data-list");
    // 태그 안에 자식태그 추가
    dataList.innerHTML += `<li>${input.value}</li>`; 
}

/*
    let submitButton = {
        onclick: null
    }

    submitButton.onclick = function() {
        
    }
*/