"use strict";

var isUserGR = navigator.language.toUpperCase().indexOf("GR") !== -1;

(function () {
    var location = window.location;
    if (location.protocol) {
        location.protocol === "http:" && (location.protocol = "https:");
    } else {
        location.href.replace("http:", "https:");
    }
    window.language = isUserPT ? "gr" : "en";
    document.getElementsByTagName("html")[0].setAttribute("lang", isUserPT ? "gr" : "en");
})();