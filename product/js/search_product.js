async function handleSearchClick() {
    try {
        const response = await fetch("http://localhost:8080/product/products");

        if(!response.ok) {
            throw await response.json();
        }

        const productData = await response.json();
        console.log(productData);
        const productList = document.querySelector(".product-list");
        productList.innerHTML = "";

        for(let product of productData) {
            productList.innerHTML += ProductInfoTr(product);
        }

    } catch(error) {

    }
}

function ProductInfoTr({ productId, name, price, size}) {
    return `
        <tr>
            <td>${productId}</td>
            <td>${name}</td>
            <td>${price}</td>
            <td>${size}</td>
        </tr>    
    `;

}