$(document).ready(() => {

    SDK.loadNav();

    SDK.loadFiltering();

    SDK.Product.loadProduct((err, data) => {
        let $productList = $("#productList");
        let products = JSON.parse(data);

        products.forEach((product) => {
            const productHTML =`
                <div class="box">
                <p class="text"> ${product.price}</p>
               `;

            $productList.append(productHTML);
                
        })
    })

});