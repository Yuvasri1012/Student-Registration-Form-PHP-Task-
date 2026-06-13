function showToast() {
    const toast = document.getElementById("toast");
    toast.classList.add("show");
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => toast.classList.remove("show"), 3000);
}

function clearErrors() {
    document.querySelectorAll(".field").forEach(field => {
        field.classList.remove("has-error");
    });
}

function showError(fieldId) {
    document.getElementById(fieldId).classList.add("has-error");
}

document.getElementById("studentForm").addEventListener("submit", function (e) {

    e.preventDefault();

    clearErrors();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let mobile = document.getElementById("mobile").value.trim();

    if (name === "") {
        showError("field-name");
        return;
    }

    if (email === "") {
        showError("field-email");
        return;
    }

    if (!/^[0-9]{10}$/.test(mobile)) {
        showError("field-mobile");
        return;
    }

    let xhr = new XMLHttpRequest();

    xhr.open("POST", "save.php", true);

    xhr.setRequestHeader(
        "Content-type",
        "application/x-www-form-urlencoded"
    );

    xhr.onload = function () {

        if (xhr.status === 200) {
            showToast();
            document.getElementById("studentForm").reset();
        } else {
            alert("Something went wrong");
        }

    };

    xhr.send(
        "name=" + encodeURIComponent(name) +
        "&email=" + encodeURIComponent(email) +
        "&mobile=" + encodeURIComponent(mobile)
    );
});