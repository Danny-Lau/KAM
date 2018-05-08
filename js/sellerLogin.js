$(document).ready(() => {

    SDK.loadNav();

    $("#login-button").click(() => {

        //Sætter parameterne til log-in oplysningerne
        const companyName = $("#inputUsername").val();
        const password = $("#inputPassword").val();


        if (!companyName || !password) {
            alert("Please fill in all required fields");
        }
        else {
            event.preventDefault();
            SDK.Seller.login(companyName, password, (err) => {

                if (err && err.xhr.status === 401) {
                    $(".form-group").addClass("There was a mistake");
                }
                else if (err) {
                    console.log("fail")
                }
                else {
                    alert("You are now logged in as a seller")
                    window.location.href = "myProducts.html";
                }

            });
        }

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