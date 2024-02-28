main();

function main() {
    new Promise((resolve, reject) => {  
        console.log(1);
        console.log(2);
        setTimeout(() => {
            console.log(4);
            resolve(10000);
        }, 2000);
        
    }).then((num) => {
        console.log("then 실행");
    });
    console.log(3);
}