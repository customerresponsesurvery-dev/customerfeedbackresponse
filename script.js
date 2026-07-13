const form = document.getElementById("surveyForm");

const scriptURL = "https://script.google.com/macros/s/AKfycbx1crjjUkqEJ6_VqjTpr__PkWkmzyXuGsOcSMS0BvZ22xdHouuBraJWszj3KffI7Ht2/exec";


form.addEventListener("submit", function(e) {

    e.preventDefault();


    const data = {

        name: document.getElementById("name").value,
        email: document.getElementById("email").value,

        reason: document.getElementById("reason").value,
        reasonOther: document.getElementById("reasonOther").value,

        quality: document.getElementById("quality").value,

        value: document.getElementById("value").value,

        price: document.getElementById("price").value,

        offers: document.getElementById("offers").value,

        service: document.getElementById("service").value,

        like: document.getElementById("like").value,
        likeOther: document.getElementById("likeOther").value,

        recommend: document.getElementById("recommend").value,
        recommendReason: document.getElementById("recommendReason").value,

        improvement: document.getElementById("improvement").value

    };


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

        console.error("Error:", error);

    });

});
