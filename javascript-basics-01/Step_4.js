const name      = document.getElementById("name");
const surname   = document.getElementById("surname");
const city      = document.getElementById("city");
const Validate  = document.getElementById("validate");

Validate.addEventListener("click", function () {
        let nameValue    = name.value || "no Name";
        let surnameValue = surname.value || "no Surname";
        let cityValue    = city.value || "no City";

        alert(`
Nom : ${nameValue}
prénom : ${surnameValue}
Ville : ${cityValue}
`);
});