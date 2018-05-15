$(document).ready(() => {

    SDK.loadNav();

    $("#create-company-button").click(() => {


        //Sætter parameterne til det som står i felterne
        const companyName = $("#inputCompany").val();
        const mail = $("#inputCMail").val();
        const number = $("#inputCompanyNumber").val();
        const password = $("#inputCompanyPassword").val();
        const cvr = $("#inputCVR").val();


        //Tjekker om der snår noget i alle felterne
        if(!companyName || !password || !mail) {
            alert("Please fill in all fields")
            //Kører opret bruger metoden
        } else {
            event.preventDefault();
            SDK.Product.sellerSignup(companyName, password, cvr, mail, number, (err, data) => {

                if (err && err.xhr.status === 401) {
                    $(".form-group").addClass("There was a mistake");
                }
                else if (err) {
                    console.log("Fail")
                    alert("somthing went wrong pleas try agin")
                } else {
                    window.location.href  = "index.html";
                    alert("You are now singed in on kammode.dk")

                }
            });
        }

    });


});