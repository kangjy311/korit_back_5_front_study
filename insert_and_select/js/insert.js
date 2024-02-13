function handleSubmitClick() {
    const dataInputs = document.querySelectorAll(".data-inputs");
    
    const data = {
        name: dataInputs[0].value,
        age: dataInputs[1].value
    };

    console.log(data);    

    const jsonData = JSON.stringify(data);
    console.log(jsonData);
    // const dataObj = JSON.parse(jsonData);
    // console.log(dataObj);

    const option = {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: jsonData
    }

    // fetch : 기본값 get 요청
    const p = fetch("http://localhost:8080/insert_and_select/data/addition", option);
    
    p.then((response) => {       // then: fetch 요청 처리 되고 실행
        response.json()
        .then((json) => {
            console.log(json)
        })
    });   

    console.log("test");

}