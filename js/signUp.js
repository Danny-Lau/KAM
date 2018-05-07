$(document).ready(() => {

    SDK.loadNav();

    $("#create-user-button").click(() => {


        //Sætter parameterne til det som står i felterne
        const username = $("#inputUsername").val();
        const password = $("#inputPassword").val();
        const mail = $("#inputMail").val();

        //Tjekker om der snår noget i alle felterne
        if(!username || !password || !mail) {
            alert("Please fill in all fields")
            //Kører opret bruger metoden
        } else {
            event.preventDefault();
            SDK.User.signup(username, password, mail, (err, data) => {

                if (err && err.xhr.status === 401) {
                    $(".form-group").addClass("There was a mistake");
                }
                else if (err) {
                    console.log("Fail")
                } else {
                    window.location.href  = "index.html";

                }
            });
        }

    });
});