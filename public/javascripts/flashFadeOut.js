document.addEventListener("DOMContentLoaded", function () {
    let flashMessage = document.querySelector(".flash-message");
    if (flashMessage) {
        setTimeout(function () {
            flashMessage.classList.add("fade-out");
        }, 3000);
        flashMessage.addEventListener("transitionend", function () {
            flashMessage.remove();
        })
    }
})