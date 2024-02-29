const menu1 = {
    path: "/test/menu",
    params: {
        page: 1,
        searchValue: "테스트"
    }
}

const result = "/test/menu?page=1&searchValue=테스트";

const result2 = menu1.path + "?";
console.log(result2);

const entries = Object.entries(menu1.params);  // entries 키, 밸류 둘다 가져옴
console.log(entries);
console.log(entries.map(entry => entry[0] + "=" + entry[1]));
console.log(entries.map(([key, value]) => key + "=" + value));  //비구조할당
console.log(entries.map(([key, value]) => key + "=" + value).join("&"));  

const names = ["김준일", "김준이", "김준삼"];
const names2 = names.join("&"); // join :배열 중간에 문자열 넣을수있음
console.log(names2);