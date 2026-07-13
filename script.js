function submitSurvey(){

let name=document.getElementById("name").value;
let email=document.getElementById("email").value;
let rating=document.getElementById("rating").value;
let feedback=document.getElementById("feedback").value;


if(name=="" || email=="" || feedback==""){
document.getElementById("message").innerHTML="Please fill all details";
return;
}


document.getElementById("message").innerHTML=
"Thank you "+name+"! Your response has been submitted.";

console.log({
name,
email,
rating,
feedback
});