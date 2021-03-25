function openWebsite() {
    var urlInput = document.getElementById("input");
    if (urlInput.checkValidity()) {
        window.open(urlInput.value, "_self");
    }
};
