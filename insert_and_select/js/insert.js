async function handleSubmitClick() {
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
    
    //같은 코드
    // fetch("http://localhost:8080/insert_and_select/data/addition", option)
    // .then((response) => {
    //     response.json()
    //     .then((json) => {
    //         console.log(json);
    //         console.log("test");
    //     })
    // }).catch((error) => {
    //     console.log("프로미스 예외처리");
    //     console.log(error);
    // })
    
    // 같은 코드
    try{    // await 쓸 때 try , catch
        const response = await fetch("http://localhost:8080/insert_and_select/data/addition", option);
        
        if(!response.ok) {
            throw await response.json();
        }

        console.log(response);
    
        const json = await response.json();
    
        console.log(json);
    
        console.log("test");
        
    } catch(error) {
        // console.log("에러 처리");
        // console.log(error);
        alert(error.errorMessage);
    }
}