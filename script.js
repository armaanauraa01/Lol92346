document.addEventListener("DOMContentLoaded", () => {

    alert("🔥 Welcome To Arman Gaming AI Hub 🔥");

    console.log("Website Loaded Successfully");

    const links = document.querySelectorAll("a");

    links.forEach(link => {
        link.addEventListener("click", function () {
            console.log("Open:", this.innerText);
        });
    });

});