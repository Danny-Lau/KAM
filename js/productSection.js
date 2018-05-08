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
           <a><img class="shoeImg product-btn"  id="${product.productID}" src="${product.url}"/></a>
            <p class="text" >${product.price}</p>
        </div>
               `;

            $productList.append(productHTML);
                
        })

    });

    $("#logout-button").click(() => {
        SDK.Storage.remove(" Username");
        SDK.Storage.remove(" password");
        SDK.Storage.remove(" mail");
        SDK.Storage.remove(" UserId");
        SDK.Storage.remove(" type");
        SDK.Storage.remove(" shippingId");

    });

});