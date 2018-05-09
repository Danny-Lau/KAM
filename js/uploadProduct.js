$(document).ready(() => {

    SDK.loadNav();




        $("#create-product-button").click(() => {

            const gender = $("#gender").val();
            const category = $("#category").val();
            const url = $("#inputURL").val();
            const productDescription = $("#inputDescription").val();
            const price = $("#inputPrice").val();
            const xxs = $("#inputXXS").val();
            const xs = $("#inputXS").val();

            const s = $("#inputS").val();
            const m = $("#inputM").val();
            const l = $("#inputL").val();
            const xl = $("#inputXL").val();
            const xxl = $("#inputXXL").val();
            const size35 = $("#input35").val();
            const size36 = $("#input36").val();
            const size37 = $("#input37").val();
            const size38 = $("#input38").val();
            const size39 = $("#input39").val();
            const size40 = $("#input40").val();
            const size41 = $("#input41").val();
            const size42 = $("#input42").val();
            const size43 = $("#input43").val();
            const size44 = $("#input44").val();
            const size45 = $("#input45").val();
            const size46 = $("#input46").val();

            if (!url || !productDescription ||  !price || !gender || !category) {
                alert("Please fill in all required fields");

            }
                else if (isNaN(xxs), (xs), (s), (m), (l), (xl), (xxl), (size35),
                    (size36), (size37), (size38), (size39), (size40), (size41),
                    (size42), (size42), (size43), (size44), (size45), (size46)){

                alert("The stock have to be a number!");

            } else if (xxs == 0 && xs==0 && s==0 && m==0 && l==0 && xl==0 && xxl==0 && siz35==0
                && size36==0 && size37==0 && size38==0 && size39==0 && size40==0 && size41==0
                && size42==0 && size42==0 && size43==0 && size44==0 && size45==0 && size46==0){


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