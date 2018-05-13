$(document).ready(() => {

    SDK.loadNav();

    SDK.loadFiltering();

    SDK.Product.loadProductFromProductId((err, data) => {
        let specificProduct = $("#product");
        let product = data;

        product.forEach(product => {

            specificProduct.append(`
            <div class="normal-page-container"> 
            
            <h2 class="productTitle">${product.category} - ${product.gender}</h2>
            
                <div class="selectItemBox">
                    <img class="productImg" src="${product.url}"/>
                    
                  
                </div>
        
       
                <div class="productOptions">
                
                    <div class="dropdown">
                        <p><b>Numbers: &nbsp</b>
                            <select>
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                            </select>
                        </p>
                    </div>
                
                    <div class="dropdown">
                        <p><b>Size: &nbsp</b>
                
                        <select = id="sizes${product.productId}"></select>
                    
                    </div>
                    
                    <br/>
                    <br/>
                    <br/>
                    <button class="button addProduct-btn" data-add-product-id="${product.productId}">Add to basket</button>
               
                </div>
                 
               
            </div>
            
            <div class="information">
            
                <h4>Information</h4>

                <p>${product.productDescription} </p>
                
                <div class="endingDiv"></div>
                
            </div>
        `);

            SDK.Storage.persist(" currentProductId", product.productId);

            SDK.Size.loadSize((err, size) => {
                const sizeList = $("#sizes" + product.productId);
                let sizes = size;

                sizes.forEach((size) => {
                    sizeList.append(`
     
                    <option value="${size.size}">${size.size}</option>

                `);
                });
            });

        });

            $(".product-btn").click(function () {
                const productId = $(this).data("product-id");
                SDK.Storage.persist(" productID", productId);

            })

    });


});