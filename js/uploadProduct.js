$(document).ready(() => {

    SDK.loadSellerNav();

    $("#create-product-button").click(() => {

        const url = $("#inputURL").val();
        const productDescription = $("#inputDescription").val();
        const stock = $("#inputStock").val();
        const price = $("#inputPrice").val();
        const variant = $("#inputSize").val();
        const gender = $("#inputGender").val();

        if (!url ||!productDescription || !stock || !price || !variant || !gender) {
            alert("Please fill in all required fields");

        } else {
            event.preventDefault();
            const sellerID = SDK.Storage.load(" id");
            SDK.Product.createProduct(url, productDescription, stock, sellerID, price, variant, gender, (err, data) => {

                if (err && err.xhr.status === 401) {
                    $(".form-group").addClass("There was a mistake");
                }
                else if (err) {
                    console.log("Fail")
                } else {
                    alert("Product created");
                    window.location.href = "index.html";

                }
            })
        }
    })

    $("#logout-button").click(() => {
        SDK.Storage.remove(" Username");
        SDK.Storage.remove(" password");
        SDK.Storage.remove(" mail");
        SDK.Storage.remove(" UserId");
        SDK.Storage.remove(" type");
        SDK.Storage.remove(" shippingId");

    });
});