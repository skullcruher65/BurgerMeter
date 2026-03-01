const exercises = [
  { name: "Running (6mph)", met: 9.8, repsPerMinute: 160, image: "/ExerciseImages/Running.jpg" },
  { name: "Jumping Jacks", met: 8.0, repsPerMinute: 50, image: "/ExerciseImages/JumpingJacks.jpg" },
  { name: "Burpees", met: 8.0, repsPerMinute: 15, image: "/ExerciseImages/Burpees.jpg" },
  { name: "Jump Rope", met: 11.8, repsPerMinute: 120, image: "/ExerciseImages/JumpRope.jpg" },
  { name: "High Knees", met: 8.0, repsPerMinute: 60, image: "/ExerciseImages/HighKnees.jpg" },
  { name: "Mountain Climbers", met: 8.0, repsPerMinute: 40, image: "/ExerciseImages/MountainClimbers.jpg" },
  { name: "Push-ups", met: 3.8, repsPerMinute: 20, image: "/ExerciseImages/Push-ups.png" },
  { name: "Squats", met: 5.0, repsPerMinute: 20, image: "/ExerciseImages/Squats.jpg" },
  { name: "Bench Press", met: 3.5, repsPerMinute: 12, image: "/ExerciseImages/BenchPress.jpg" },
  { name: "Deadlift", met: 6.0, repsPerMinute: 10, image: "/ExerciseImages/Deadlift.jpg" },
  { name: "Pull-ups", met: 8.0, repsPerMinute: 8, image: "/ExerciseImages/Pull-ups.jpg" },
  { name: "Lunges", met: 4.0, repsPerMinute: 16, image: "/ExerciseImages/Lunges.jpg" },
  { name: "Sit-ups", met: 3.8, repsPerMinute: 25, image: "./ExerciseImages/situps.jpg" },
  { name: "Plank (seconds)", met: 3.5, repsPerMinute: 60, image: "/ExerciseImages/Plank.jpg" },
];
function displaySelection() {
    const selectElement = document.getElementById("exercises");
    const displayArea = document.getElementById("displayArea");

    const selectedValue = selectElement.value; 
    const exercise = exercises.find(ex => ex.name === selectedValue);

    if (exercise) {
        displayArea.innerHTML = `
            <h3>${exercise.name}</h3>
            <img src="${exercise.image}" alt="${exercise.name}" width="200">
            <p>MET: ${exercise.met}</p>
            <p>Reps per minute: ${exercise.repsPerMinute}</p>
        `;
    }
}


function openTab(event, tabName) {
    const tabcontent = document.getElementsByClassName("tabcontent");
    const tablinks = document.getElementsByClassName("tablinks");

    for (let i = 0; i < tabcontent.length; i++) tabcontent[i].style.display = "none";
    for (let i = 0; i < tablinks.length; i++) tablinks[i].className = tablinks[i].className.replace(" active", "");

    document.getElementById(tabName).style.display = "block";
    event.currentTarget.className += " active";
}

window.addEventListener("DOMContentLoaded", function() {
    // Open default tab
    const defaultTab = document.getElementById("defaultOpen");
    if (defaultTab) defaultTab.click();

    // Populate dropdown
    const dropdown = document.getElementById("exercises");
    exercises.forEach(ex => {
        const option = document.createElement("option");
        option.value = ex.name;
        option.text = ex.name;
        dropdown.appendChild(option);
    });
});

  

function calculateReps(exercise, calories, weight) 
{
    let reps = calories / (exercise.met * weight * 3.5 / 200 / exercise.repsPerMinute);
    return {reps, image: exercise.image};
}



