function displayToday() {
    const today = new Date();
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    const formattedDate = today.toLocaleDateString('en-US', options);

    const dateDiv = document.querySelector('#today');
    dateDiv.appendChild(document.createTextNode(formattedDate));
}

function addExercise() {
    
}

// Use the window.onload event to call the function
window.onload = function() {
    displayToday();
};
