$(document).ready(() => {

    SDK.loadNav();

    SDK.loadFiltering();

    SDK.Product.loadProduct((err, data) => {
        let $productList = $("#productList");
        let product = data;

        product.forEach((product) => {

            const productHTML =`

           
            <div class="box">
                <a><img class="productImg product-btn" data-product-id="${product.productId}"  src="${product.url}"/></a>
                <p class="text" >DKK ${product.price}</p>
  
            </div>
      
               `;

            $productList.append(productHTML);
                
        });
        $(".product-btn").click(function() {
            const productId = $(this).data("product-id");
            SDK.Storage.persist(" productID", productId);
            window.location.href  = "showSpecificProduct.html";

        })


    });



});