var check = document.querySelector(".check");
check.addEventListener('click', idioma);

function idioma() {
    let id = check.checked;
    if (id == true) {
        location.href = "eng/eng-index.html";
    } else {
        location.href = "../index.html";
    }
}