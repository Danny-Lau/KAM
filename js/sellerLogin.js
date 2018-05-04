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
            SDK.Seller.sellerLogin(companyName, password, (err) => {

                if (err && err.xhr.status === 401) {
                    $(".form-group").addClass("There was a mistake");
                }
                else if (err) {
                    console.log("fail")
                }
                else {
                    alert("You are now logged in as a seller")
                    window.location.href = "index.html";
                }

            });
        }

    });


});