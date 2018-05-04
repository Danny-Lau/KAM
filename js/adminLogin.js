$(document).ready(() => {

    SDK.loadNav();

    $("#login-button").click(() => {

        //Sætter parameterne til log-in oplysningerne
        const username = $("#inputUsername").val();
        const password = $("#inputPassword").val();


        if (!username || !password) {
            alert("Please fill in all required fields");
        }
        else {
            event.preventDefault();
            SDK.Admin.adminLogin(username, password, (err) => {

                if (err && err.xhr.status === 401) {
                    $(".form-group").addClass("There was a mistake");
                }
                else if (err) {
                    console.log("fail")
                }
                else {
                    alert("You are now logged in as an admin");
                    window.location.href = "../index.html";
                }

            });
        }

    });


});