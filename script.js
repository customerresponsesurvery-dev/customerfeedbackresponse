const form = document.getElementById("surveyForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    // Thank you message
    alert("Thank you for your valuable feedback!");

    // Clear the form for next customer
    form.reset();

});
