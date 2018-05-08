$(document).ready(() => {

    SDK.loadNav();

    $("#Shoe").click(() => {
        const value = "Shoe";
        SDK.Storage.persist("CAT", "Shoe");
        window.location.href  = "productsSection.html";
    });
    $("Pants").click(() => {
        const value = "Pants";
        SDK.Storage.persist("CAT", "Pants");
        window.location.href  = "productsSection.html";
    });
    $("#Sweaters").click(() => {
        const value = "Sweaters";
        SDK.Storage.persist("CAT", "Sweaters");
        window.location.href  = "productsSection.html";
    });
    $("#Shirt").click(() => {
        const value = "Shirt";
        SDK.Storage.persist("CAT", "Shirt");
        window.location.href  = "productsSection.html";
    });
    $("#T-shirt").click(() => {
        const value = "T-shirt";
        SDK.Storage.persist("CAT", "T-shirt");
        window.location.href  = "productsSection.html";
    });
    $("#Accesories").click(() => {
        const value = "Accesories";
        SDK.Storage.persist("CAT", "Accesories")
        window.location.href  = "productsSection.html";
    });
    $("#Underwear").click(() => {
        const value = "Underwear";
        SDK.Storage.persist("CAT", "Underwear")
        window.location.href  = "productsSection.html";
    });
    $("#Jacket").click(() => {
        const value = "Jacket";
        SDK.Storage.persist("CAT", "Jacket")
        window.location.href  = "productsSection.html";
    });
    $("#Chinos").click(() => {
        const value = "Chinos";
        SDK.Storage.persist("CAT", "Chinos")
        window.location.href  = "productsSection.html";
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