let index = 1;

const submitButton = document.querySelector(".input-submit");
submitButton.onclick = () => {
    const input = document.querySelectorAll(".inputs");

    const dataList = document.querySelector(".data-list");

    dataList.innerHTML += `
        <tr>
            <td>${index}</td>
            <td>${input[0].value}</td>
            <td>${input[1].value}</td>
            <td>${input[2].value}</td>
        </tr>
    `;
    index++;
    for(let input of textInput) {
        input.value = "";
    }
}