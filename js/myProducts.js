$(document).ready(() => {


    SDK.loadNav();

    //Get all the sellers products
    SDK.Product.loadSellerProduct((err, data) => {

        let productsList = $("#products");
        let product = data;

        //For every product the specific information are shown
        product.forEach(product => {
          const sellerProductsHTML = `
          <div class= "myProductBox">
          
            <dt>Description: </dt>
            <dd>${product.productDescription}</dd>
            <dt>Stock: </dt>
            <dd>${product.stock}</dd>
            <dt>Variant: </dt>
            <dd>${product.variant}</dd>
            <dt>Gender: </dt>
            <dt>${product.gender}</dt>
            
            <button class="login-btn product-btn" data-product-id="${product.productID}">Edit product</button>
            <button class="login-btn deleteproduct-btn" data-delete-product-id="${product.productID}">Delete product</button>
           
        </div>`;


          productsList.append(sellerProductsHTML);

        });
        //get the choosen product id
        $(".product-btn").click (function() {
            const currentProductId = $(this).data("product-id");
            SDK.Storage.persist("currentProductId", currentProductId);
            alert("Change product information");

        });
        
    });


});