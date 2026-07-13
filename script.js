const form = document.getElementById("surveyForm");

const scriptURL = "https://script.google.com/macros/s/AKfycbzeX_l4b1CEmS7kI_jMAwX6_7cO7DTgSSsAa0vwsALfDzvPnXqjt8A-3_beTDlG6ueW/exec";


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
