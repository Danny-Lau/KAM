$(document).ready(() => {

    SDK.loadNav();

    SDK.loadFiltering();

    SDK.Product.loadProduct((err, data) => {
        let $productList = $("#productList");
        let product = data;

        product.forEach((product) => {
            const productHTML =`
                <div class="box">
                <a><img class="shoeImg" value="${product.productID}" id="Specifik_Product_Btn" src="${product.url}"/><center><h5>${product.price}</p></h5></center></a>
               `;

            $productList.append(productHTML);
                
        })
    })

    $("#Specifik_Product_Btn").click(() => {
        let value = $(this).value ;
        window.alert(value)
    });

});