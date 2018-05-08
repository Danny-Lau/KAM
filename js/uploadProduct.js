$(document).ready(() => {

    SDK.loadNav();

    $("#create-product-button").click(() => {

        const gender = $("#gender").val();
        const category = $("#category").val();
        const variant = $("#size") .val();
        const url = $("#inputURL").val();
        const productDescription = $("#inputDescription").val();
        const stock = $("#inputStock").val();
        const price = $("#inputPrice").val();

            if (!url || !productDescription || !stock || !price || !variant || !gender || !category) {
                alert("Please fill in all required fields");

            } else {
                event.preventDefault();
                const sellerID = SDK.Storage.load(" id");
                SDK.Product.createProduct(url, productDescription, stock, sellerID, price, variant, gender, category, (err, data) => {

                    if (err && err.xhr.status === 401) {
                        $(".form-group").addClass("There was a mistake");
                    }
                    else if (err) {
                        console.log("Fail")
                    } else {
                        alert(category);
                        window.location.href = "index.html";

                    }
                })
            }

    })


});