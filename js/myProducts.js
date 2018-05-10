$(document).ready(() => {


    SDK.loadNav();

    //Get all the sellers products
    SDK.Product.loadSellerProduct((err, data) => {

        let productsList = $("#products");
        let product = data;

        //For every product the specific information are shown
        product.forEach(product => {

            productsList.append(`
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
                     <dt>Gender: ${product.gender} </dt>
                     <div = id="sizes${product.productId}"></div>
                     
                      <br>
                     <br>
                    <button class="login-btn product-btn" data-product-id="${product.productId}">Edit product</button>
                    <button class="login-btn deleteProduct-btn" data-delete-product-id="${product.productId}">Delete product</button>
                      
                </div>
        `);


          SDK.Storage.persist(" currentProductId", product.productId);

          SDK.Size.loadSize((err, size) => {
              const sizeList = $("#sizes" + product.productId);
              let sizes = size;

              sizes.forEach((size) => {
                  sizeList.append(`
                  <br>
                  <div class="size" name="${product.productId}">
                    <dt>Stock: &nbsp; ${size.stock} (${size.size}) </dt>    
                  </div>
                `);
              });
          });

        });

        //get the choosen product id
        $(".product-btn").click (function() {
            const currentProductId = $(this).data("product-id");
            SDK.Storage.persist(" currentProductId", currentProductId);
            const productId = SDK.Storage.load(" currentProductId");
            alert("Change product information for" + productId);

        });

        $(".deleteProduct-btn").click(function(){
            const deleteProductId = $(this).data("delete-product-id");
            SDK.Storage.persist(" deleteId", deleteProductId);


            SDK.Product.deleteProduct((err, data) => {

                if(err && err.xhr.status === 401) {
                    $(".form-group").addClass("There was a mistake");
                }
                else if (err) {
                    console.log("Fail")
                }
                else {
                    alert("Product deleted");
                }
            });

        });

    });
});

