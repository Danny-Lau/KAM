$(document).ready(() => {

    SDK.loadNav();

    $("#Shoe").click(() => {
        SDK.Storage.persist("CAT", "Shoe");
        window.location.href  = "productsSection.html";
    });
    $("#Pants").click(() => {
        SDK.Storage.persist("CAT", "Pants");
        window.location.href  = "productsSection.html";
    });
    $("#Sweaters").click(() => {
        SDK.Storage.persist("CAT", "Sweaters");
        window.location.href  = "productsSection.html";
    });
    $("#Shirt").click(() => {
        SDK.Storage.persist("CAT", "Shirt");
        window.location.href  = "productsSection.html";
    });
    $("#T-shirt").click(() => {
        SDK.Storage.persist("CAT", "T-shirt");
        window.location.href  = "productsSection.html";
    });
    $("#Accesories").click(() => {
        SDK.Storage.persist("CAT", "Accesories")
        window.location.href  = "productsSection.html";
    });
    $("#Underwear").click(() => {
        SDK.Storage.persist("CAT", "Underwear")
        window.location.href  = "productsSection.html";
    });
    $("#Jacket").click(() => {
        SDK.Storage.persist("CAT", "Jacket")
        window.location.href  = "productsSection.html";
    });
    $("#Chinos").click(() => {
        SDK.Storage.persist("CAT", "Chinos")
        window.location.href  = "productsSection.html";
    });

});