$(document).ready(() => {

    SDK.loadNav();

    $("#create-user-button").click(() => {


        //Sætter parameterne til det som står i felterne
        const address = $("#inputAddress").val();
        const postNumber = $("#inputPostNumber").val();
        const city = $("#inputCity").val();
        const username = $("#inputUsername").val();
        const password = $("#inputPassword").val();
        const mail = $("#inputMail").val();

        event.preventDefault()
        SDK.User.userInfo(address, postNumber, city,(err) => {

            if (!address || !postNumber || !city || !username || !password || !mail) {
                alert("Please fill in all required fields")

            } else if (err && err.xhr.status === 401) {
                $(".form-group").addClass("There was a mistake creating Customer information");

            } else {
                console.log ("Godkendt");

                let forsendelsesInformationerId = SDK.Storage.load("forsendelsesInformationerId");
                SDK.User.signup(username, password, mail, forsendelsesInformationerId, (err) => {

                if (err && err.xhr.status === 401) {
                    $(".form-group").addClass("There was a mistake creating user");
                }
                else if (err) {
                    console.log("Fail lol")

                } else {
                    alert("you are now created as a new customer");
                    window.location.href = "index.html"
                }
            });

        }
    });

    });
});