main();

function main() {
    let result = [];    
    
    // resolve 매개변수 하나 -배열로 묶어서
    new Promise((resolve, reject) => {
        // let result = []; // Promise 안에 있으면
        setTimeout(() => {
            resolve(1);     // 1 -> [result, 1]
        }, 3000);
    })
    .then(num => {        // num -> ([result, num])
        result = [...result, num];  //= result.push(num);
        new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(2);
            }, 2000);
        })
        .then(num => {
            result = [...result, num];
            new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(3);
                }, 1000);
            })
            .then(num => {
                result = [...result, num];
                return result;
            })
            .then(r => console.log(r));
        });
    });

}