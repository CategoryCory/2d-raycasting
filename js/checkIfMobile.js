function checkIfMobile() {
    if (
        navigator.userAgent.match(/iPad/i) ||
        navigator.userAgent.match(/iPhone/i) ||
        navigator.userAgent.match(/iPod/i) ||
        navigator.userAgent.match(/Android/i) ||
        navigator.userAgent.match(/webOS/i) ||
        navigator.userAgent.match(/Windows Phone/i) ||
        navigator.userAgent.match(/BlackBerry/i)
    ) {
        return true;
    } else {
        return false;
    }
}
