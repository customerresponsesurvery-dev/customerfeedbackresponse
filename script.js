const form = document.getElementById("surveyForm");
const message = document.getElementById("message");

const scriptURL = "https://script.google.com/macros/s/AKfycby8C2JiJoUb7oyEdfm4cztjr-4aeci61SWCuSHLvwhQVHl0UOluF2NsYTbz1gQ1uHAG/exec

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const submitBtn = document.querySelector(".submit-btn");
    submitBtn.disabled = true;
    submitBtn.innerText = "Submitting...";

    // Convert form data to JSON
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    fetch(scriptURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        if (result.status === "success") {
            message.style.color = "green";
            message.innerText = "Survey submitted successfully!";
            form.reset();
        } else {
            message.style.color = "red";
            message.innerText = "Submission failed.";
        }
    })
    .catch(error => {
        console.error(error);
        message.style.color = "red";
        message.innerText = "Something went wrong. Please try again.";
    })
    .finally(() => {
        submitBtn.disabled = false;
        submitBtn.innerText = "Submit Survey";

        setTimeout(() => {
            message.innerText = "";
        }, 3000);
    });
});
