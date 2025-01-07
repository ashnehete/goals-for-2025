function displayToday() {
    const today = new Date();
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    const formattedDate = today.toLocaleDateString('en-US', options);

    const dateDiv = document.querySelector('#today');
    dateDiv.appendChild(document.createTextNode(formattedDate));
}

function addExercise() {
    const squaresDiv = document.querySelector('#exercise_graph');
    const startDate = new Date('2025-01-01');
    const today = new Date();
    const timeDiff = today.getTime() - startDate.getTime();
    const dayCount = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)); // Calculate the number of days

    for (let i = 0; i < dayCount; i++) {
        const span = document.createElement('span');

        // Randomly decide whether to add `data-level="1"`
        if (Math.random() > 0.5) { // 50% chance to add the attribute
            span.setAttribute('data-level', '1');
        }

        squaresDiv.appendChild(span);
    }
}

// Use the window.onload event to call the function
window.onload = function() {
    displayToday();
    addExercise();
};
