async function handleSearchClick() {
    try {
        const response = await fetch("http://localhost:8080/product/products");

        if(!response.ok) {
            throw await response.json();
        }

        const productData = await response.json();
        console.log(productData);
        const productList = document.querySelector(".product-list");
        productList.innerHTML = ``;

        for(let product of productData.data) {
            productList.innerHTML += `
            <tr>
                <td>${product.productId}</td>
                <td>${product.name}</td>
                <td>${product.price}</td>
                <td>${product.size}</td>
            </tr>
            `;
        }

    } catch(error) {

    }
}