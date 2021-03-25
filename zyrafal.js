function init() {
    var keys = "1234567890";
}

function openWebsite() {
    var urlInput = document.getElementById("input");
    if (urlInput.checkValidity()) {
        window.open(urlInput.value, "_self");
    }
};
