$(document).ready(() => {

    SDK.loadNav();

    $("#login-button").click(() => {

        //Sætter parameterne til log-in oplysningerne
        const username = $("#inputUsername").val();
        const password = $("#inputPassword").val();

        //Felterne må ikke stå tomme
        if (!username || !password) {
            alert("Udfyld venligt alle felterne");
        }
        else {
            //Gennemngår de indtastede oplysninger
            event.preventDefault();
            SDK.User.login(username, password, (err) => {

                if (err && err.xhr.status === 401) {
                    $(".form-group").addClass("Der opstod en fejl");
                }
                else if (err) {
                    console.log("fejl")
                }
                else {
                    alert("Du er logget ind")
                    window.location.href = "index.html";
                }

            });
        }

    });


});