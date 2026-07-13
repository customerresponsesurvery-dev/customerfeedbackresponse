const form = document.getElementById("surveyForm");

const scriptURL = "https://script.google.com/macros/s/AKfycbx1crjjUkqEJ6_VqjTpr__PkWkmzyXuGsOcSMS0BvZ22xdHouuBraJWszj3KffI7Ht2/exec";


form.addEventListener("submit", function(e) {

    e.preventDefault();


    const formData = new FormData(form);

    const data = {};

    formData.forEach((value, key) => {
        data[key] = value;
    });


    fetch(scriptURL, {

        method: "POST",

        body: JSON.stringify(data)

    })

    .then(response => {

        alert("Thank you for your valuable feedback!");

        form.reset();

    })

    .catch(error => {

        alert("Something went wrong. Please try again.");

        console.error(error);

    });

});
