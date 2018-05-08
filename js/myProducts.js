$(document).ready(() => {


    SDK.loadNav();

    //Get all the sellers products
    SDK.Product.loadSellerProduct((err, data) => {

        let productsList = $("#products");
        let product = data;

        //For every product the specific information are shown
        product.forEach(product => {
          const sellerProductsHTML = `

            <div class="panel panel-default">
                <div class="panel-body">
                    <div class="col-lg-8">
                      <dl>
                      <div class="infoBox">
                        <a><img class="productImg product-btn"  src="${product.url}"/></a>
                       <div> 
                      </dl>
                    </div>
                    <dt>Description: ${product.productDescription}</dt>
                        <dt>Stock:  ${product.stock} </dt>    
                        <dt>Size: ${product.variant}</dt>
                        <dt>Gender: ${product.gender} </dt>
                        <br>
                        <br>
                    <button class="login-btn product-btn" data-product-id="${product.productID}">Edit product</button>
                    <button class="login-btn deleteproduct-btn" data-delete-product-id="${product.productID}">Delete product</button>
                </div>
       
            
        `;


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