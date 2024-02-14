/**
 * servlet 프로젝트명: product
 * group_Id: com.study
 * artifact_id: product
 * name: product
 * jdk: 11
 * dependencies
 *   1. lombok 2. jsp 3. Gson 4. mysql
 * 
 * package
 *  com.study.product
 *      config      - DBConfig
 *      dao         - ProductDao 
 *      entity      - Product
 *      filter      - CommonFilter
 *      servlet     
 *          - InsertProductServlet(/product, POST)
 *          - SearchProductServlet(/products, GET)
 * 
 * DB(db_study)
 * table(product_tb)
 * product_id, product_name(유니크), product_price, product_size(SS, S, M, L, XL, XXL)
 */


async function handleAddClick() {
    const productInput = document.querySelectorAll(".product-input");

    const data = {
        name: productInput[0].value,
        price: productInput[1].value,
        size: productInput[2].value
    }

    const jsonData = JSON.stringify(data);
    console.log(jsonData);

    const option = {
        method: "post",
        headers: {"content-Type": "appication/json"},
        body: jsonData
    }

    try {
        const response = await fetch("http://localhost:8080/product/product", option);

        if(!response.ok) {
            throw await response.json();
        }
        console.log(response);

        const json = await response.json();
        console.log(json);
        
    } catch(error) {
        alert(error);
    }

}