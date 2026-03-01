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


function openTab(event, tabName) {
    const tabcontent = document.getElementsByClassName("tabcontent");
    const tablinks = document.getElementsByClassName("tablinks");

    for (let i = 0; i < tabcontent.length; i++) tabcontent[i].style.display = "none";
    for (let i = 0; i < tablinks.length; i++) tablinks[i].className = tablinks[i].className.replace(" active", "");

    document.getElementById(tabName).style.display = "block";
    event.currentTarget.className += " active";
}

window.addEventListener("DOMContentLoaded", function() {

    const defaultTab = document.getElementById("defaultOpen");
    if (defaultTab) defaultTab.click();

    document.getElementById("weightForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const weight = parseFloat(document.getElementById("fname").value);
    const selectedValue = document.getElementById("exercises").value;
    const exercise = exercises.find(ex => ex.name === selectedValue);

    if (!exercise) {
        alert("Please select an exercise.");
        return;
    }

    if (isNaN(weight) || weight <= 0) {
        alert("Please enter a valid weight greater than 0.");
        return;
    }

    const calories = 100; 
    const reps = calculateReps(exercise, calories, weight);

    document.getElementById("reps").textContent = Math.round(reps);
    document.getElementById("calories").textContent = calories;

    
    });
    

    

    // Populate dropdown
    const dropdown = document.getElementById("exercises");
    exercises.forEach(ex => {
        const option = document.createElement("option");
        option.value = ex.name;
        option.text = ex.name;
        dropdown.appendChild(option);
    });
});



function displaySelection() {
    const selectElement = document.getElementById("exercises");
    const displayArea = document.getElementById("displayArea");
    const displayText = document.getElementById("displayText");

    const selectedValue = document.getElementById("exercises").value;
    const exercise = exercises.find(ex => ex.name === selectedValue);

    if(!exercise){
        return;
    }

 


    if (exercise) {

        displayText.textContent  = 'Selected Exercise: ';
        displayArea.innerHTML = `
            <h3>${exercise.name}</h3>
            <img src="${exercise.image}" alt="${exercise.name}" width="200">
            `

            
            ;
    }

    const weightInput = document.getElementById("fname");
    const weight = parseFloat(weightInput.value);
    if (!isNaN(weight) && weight > 0){
        const calories = 100;
        const reps = calculateReps(exercise, calories, weight);
        document.getElementById("reps").textContent = Math.round(reps);
        document.getElementById("calories").textContent = calories;
    }
}

  

function calculateReps(exercise, calories, weight) 
{
    weight = weight/2.205;
    let reps = calories / ((exercise.met * weight * 3.5 / 200) / exercise.repsPerMinute);
    
    return reps;
}




