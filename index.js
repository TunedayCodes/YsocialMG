// THIS RELOADS THE ENTIRE PAGE AS SOON AS A FORM IS SUBMITTED
function refreshPage(){
   console.log("Refreshing page");
   location.reload ? location.reload() : location = location;
}



// Form submission event listener
document.addEventListener("DOMContentLoaded", function() {
   const form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
     event.preventDefault(); // Prevent the default form submission behavior
     const formData = new FormData(form);
     // Handle the form data dynamically here
     console.log(formData);
     // Update the page dynamically here
     document.querySelector(".contact-form-response").innerHTML = "Form submitted successfully!";
   });
 });
