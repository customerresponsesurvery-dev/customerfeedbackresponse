const form = document.getElementById("surveyForm");

const scriptURL = "https://script.google.com/macros/s/AKfycbx1crjjUkqEJ6_VqjTpr__PkWkmzyXuGsOcSMS0BvZ22xdHouuBraJWszj3KffI7Ht2/exec";

const message = document.getElementById("message");


form.addEventListener("submit", function(e) {

    e.preventDefault();


    const submitBtn = document.querySelector(".submit-btn");


    submitBtn.disabled = true;
    submitBtn.innerText = "Submitting...";


    const formData = new FormData(form);


    fetch(scriptURL, {

        method: "POST",

        body: formData

    })


    .then(response => response.text())


    .then(data => {


        message.innerText = "Survey submitted successfully!";


        // Automatically clear the form for next customer
        form.reset();


        submitBtn.disabled = false;

        submitBtn.innerText = "Submit Survey";


        setTimeout(function() {

            message.innerText = "";

        }, 3000);


    })


    .catch(error => {


        console.error("Error:", error);


        message.innerText = "Something went wrong. Please try again.";


        submitBtn.disabled = false;

        submitBtn.innerText = "Submit Survey";


    });


});
