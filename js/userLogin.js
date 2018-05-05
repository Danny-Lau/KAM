$(document).ready(() => {

    SDK.loadNav();

    $("#login-button").click(() => {
        event.preventDefault();

        //Sætter parameterne til log-in oplysningerne
        const username = $("#inputUsername").val();
        const password = $("#inputPassword").val();

        //Felterne må ikke stå tomme
        if (!username || !password) {
            alert("Please fill in all required fields");
        }
        else {
            //Gennemngår de indtastede oplysninger
            SDK.User.login(username, password, (err) => {


                if (err && err.xhr.status === 401) {
                    $(".form-group").addClass("There was a mistake");
                }
                else if (err) {
                    console.log("Fail")
                }
                else {
                    alert("You are now logged in")
                    window.location.href = "index.html";
                }

            });
        }

    });

    $("#signup-button").click(() => {
        event.preventDefault();
       window.location.href = "signUp.html";
    });


});