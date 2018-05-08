$(document).ready(() => {

    SDK.loadNav();

    SDK.loadFiltering();

    SDK.Product.loadProduct((err, data) => {
        let $productList = $("#productList");
        let product = data;

        product.forEach((product) => {

            const productHTML =`

        <div class="normal-page-container">
        <div class="box">
           <a><img class="productImg product-btn" data-product-id="${product.productID}"  src="${product.url}"/></a>
            <p class="text" >${product.price}</p>
        </div>
               `;

            $productList.append(productHTML);
                
        });
        $(".product-btn").click(function() {
            const productId = $(this).data("product-id");
            SDK.Storage.persist(" productID", productId);

        })


    });



});