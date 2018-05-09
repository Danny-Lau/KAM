$(document).ready(() => {

    $("#logout-button").click(() => {
        SDK.Storage.remove(" Username");
        SDK.Storage.remove(" password");
        SDK.Storage.remove(" mail");
        SDK.Storage.remove(" UserId");
        SDK.Storage.remove(" type");
        SDK.Storage.remove(" id");
        SDK.Storage.remove(" Company");
        SDK.Storage.remove(" cvr");
        SDK.Storage.remove(" name");
        SDK.Storage.remove(" number");
        SDK.Storage.remove("CAT");
        SDK.Storage.remove(" deleteId");
        SDK.Storage.remove(" genderProduct");
        SDK.Storage.remove(" productCategory");


    });

});