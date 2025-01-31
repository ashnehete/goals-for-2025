function displayToday() {
    const today = new Date();
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    const formattedDate = today.toLocaleDateString('en-US', options);

    const dateDiv = document.querySelector('#today');
    dateDiv.appendChild(document.createTextNode(formattedDate));
}

function addExercise(exerciseCalendar) {
    const squaresDiv = document.querySelector('#exercise_graph');


    exerciseCalendar.forEach((exercise) => {
        const span = document.createElement('span');
        if (exercise) {
            span.setAttribute('data-level', '1');
        }
        squaresDiv.appendChild(span);
    });
}

function addWeeks(weeks) {
    const weeksDiv = document.querySelector('#exercise_weeks');

    for (let i = 1; i <= weeks; i++) {
        const span = document.createElement('span');
        span.textContent = i;
        weeksDiv.appendChild(span);
    }
}

// Use the window.onload event to call the function
window.onload = function () {
    displayToday();

    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            if (data.exercise && data.exercise.calendar) {
                addExercise(data.exercise.calendar);

                const weeks = Math.ceil((data.exercise.calendar.length + 3) / 7)
                addWeeks(weeks)
            }
        })
        .catch(error => console.error('Error fetching data:', error));
};
