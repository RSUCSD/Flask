console.log("Hello from script.js!");

// Function to change the text color of an element
function changeTextColor(elementId, color) {
    var element = document.getElementById(elementId);
    if (element) {
        element.style.color = color;
    }
}

// Call the function to change the color when the page loads
window.onload = function() {
    changeTextColor("myHeading", "red"); 
};

function validateForm() {
       var valuesInput = document.getElementsByName("values")[0];
       var values = valuesInput.value.split(",");

       for (var i = 0; i < values.length; i++) {
           // Trim whitespace and check if the value is a number
           if (isNaN(parseFloat(values[i].trim())) || !isFinite(values[i].trim())) {
               alert("Please enter only numbers for values, separated by commas.");
               return false; // Prevent form submission
           }
       }

       return true; // Allow form submission
}