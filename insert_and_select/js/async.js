// const { reject } = require("async");

// 동기처리
console.log(1);
console.log(2);
console.log(3);

// 비동기처리
// setTimeout(() => {
//     console.log(4);
//     setTimeout(() => {
//         console.log(5)
//         setTimeout(() => {
//             console.log(6)
//             setTimeout(() => {
//                 console.log(7)
//             }, 2000);
//         }, 2000);
//     }, 2000);
// }, 3000);   // 3000 : 3초 뒤


// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("1번");
//     }, 2000);
//     resolve("3번"); 
// }).then((result) => {
//     console.log(result);
// });

// console.log("2번");


console.log("프로그램 시작");

// promise 자체가 비동기
const p = new Promise((resolve, reject) => {    
    console.log("여기서");
    console.log("여기까지");
    if(0 === 0) {
        resolve("?");
    } else {
        reject(new Error("오류입니다"));
    }
});

p.then((response) => {          // resolve가 호출 됐을 때 then 실행
    console.log("3초 뒤에 출력");
}).catch((errer) => {           // reject 호출 될 때 catch 실행
    console.log(errer);
}).finally(() => {

}); 

console.log("여기가 먼저");
