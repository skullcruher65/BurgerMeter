

const exercises = [
  { name: "Running (6mph)", met: 9.8, repsPerMinute: 160, img: './ExerciseImages/Running.jpg' },
  { name: "Jumping Jacks", met: 8.0, repsPerMinute: 50, img: './ExerciseImages/JumpingJacks.jpg' },
  { name: "Burpees", met: 8.0, repsPerMinute: 15, img: './ExerciseImages/Burpees.jpg' },
  { name: "Jump Rope", met: 11.8, repsPerMinute: 120, img: './ExerciseImages/JumpRope.jpg' },
  { name: "High Knees", met: 8.0, repsPerMinute: 60, img: './ExerciseImages/HighKnees.jpg' },
  { name: "Mountain Climbers", met: 8.0, repsPerMinute: 40, img: './ExerciseImages/MountainClimbers.jpg' },
  { name: "Push-ups", met: 3.8, repsPerMinute: 20, img: './ExerciseImages/Push-ups.png' },
  { name: "Squats", met: 5.0, repsPerMinute: 20, img: './ExerciseImages/Squats.jpg' },
  { name: "Bench Press (135 lbs)", met: 3.5, repsPerMinute: 12, img: './ExerciseImages/BenchPress.jpg' },
  { name: "Deadlift (135 lbs)", met: 6.0, repsPerMinute: 10, img: './ExerciseImages/Deadlift.jpg' },
  { name: "Pull-ups", met: 8.0, repsPerMinute: 8, img: './ExerciseImages/Pull-ups.jpg' },
  { name: "Lunges", met: 4.0, repsPerMinute: 16, img: './ExerciseImages/Lunges.jpg' },
  { name: "Sit-ups", met: 3.8, repsPerMinute: 25, img: './ExerciseImages/situps.png' },
  { name: "Plank (seconds)", met: 3.5, repsPerMinute: 60, img: './ExerciseImages/Plank.jpg' },
];


function openTab(event, tabName) {
    const tabcontent = document.getElementsByClassName("tabcontent");
    const tablinks = document.getElementsByClassName("tablinks");

    for (let i = 0; i < tabcontent.length; i++) tabcontent[i].style.display = "none";
    for (let i = 0; i < tablinks.length; i++) tablinks[i].className = tablinks[i].className.replace(" active", "");
    
    document.getElementById(tabName).style.display = tabName === "BurgerMeter" ? "flex" : "block";
    
    event.currentTarget.className += " active";
}

window.addEventListener("DOMContentLoaded", function() {

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

    document.getElementById("formName").addEventListener("Submit", displayFood)
    document.getElementById("foodName").addEventListener("Submit", displayFood)
});

async function tryCalculate() {
    const weight = parseFloat(document.getElementById("fname").value);
    const selectedValue = document.getElementById("exercises").value;
    const exercise = exercises.find(ex => ex.name === selectedValue);

    const restaurant = document.getElementById("formName").value.trim();
    const food = document.getElementById("foodName").value.trim();

    if (!exercise || isNaN(weight) || weight <= 0) return;

    const calories = await getCalories(food, restaurant);
    const result = calculateReps(exercise, calories, weight);

    document.getElementById("reps").textContent = result.value + " " + result.unit;
    document.getElementById("calories").textContent = calories;
    document.getElementById("resultExercise").innerHTML =
        "<p>Selected Exercise: " + exercise.name + "</p>" +
        "<img src='" + exercise.img + "' alt='" + exercise.name + "' width='200'>";
}

async function displaySelection() {
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
            <img src="${exercise.img}" alt="${exercise.name}" width="200">
            `;

        tryCalculate();
    }

    const weightInput = document.getElementById("fname");
    const weight = parseFloat(weightInput.value);
    if (!isNaN(weight) && weight > 0){

        const restaurant = document.getElementById("formName").value.trim();
        const food = document.getElementById("foodName").value.trim();
        const calories = await getCalories(food, restaurant);
        const result = calculateReps(exercise, calories, weight);
        document.getElementById("reps").textContent = result.value + " " + result.unit;
        document.getElementById("calories").textContent = calories;
    }
}

  

function calculateReps(exercise, calories, weight) 
{
    if (exercise.name === "Plank (seconds)")
    {
      weight = weight / 2.205;
      let seconds = calories / (exercise.met * weight * 3.5 / 200 / 60);
      return { value: Math.round(seconds), unit: "seconds" };
    }

    if (exercise.name === "Running (6mph)") 
    {
      weight = weight / 2.205;
      let miles = calories / (exercise.met * weight * 3.5 / 200) / 6; // 6mph
      return { value: Math.round(miles * 100) / 100, unit: "miles" };
    }

    if (exercise.name === "Bench Press (135 lbs)" || exercise.name === "Deadlift (135 lbs)")
      weight = 61.2;
    else
      weight = weight/2.205;

    let reps = calories / ((exercise.met * weight * 3.5 / 200) / exercise.repsPerMinute);
    
    return { value: Math.round(reps), unit: "reps" };
}

// Burger rain animation
const canvas = document.getElementById("burgerCanvas");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const drops = [];
  const SIZE = 22;
  const SIDE = 180;
  const totalCols = Math.floor(canvas.width / SIZE);
  for (let i = 0; i < totalCols; i++) {
    const x = i * SIZE;
    drops.push((x < SIDE || x > canvas.width - SIDE) ? Math.random() * -50 : null);
  }
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = `${SIZE}px serif`;
    ctx.globalAlpha = 0.8;
    drops.forEach((d, i) => {
      if (d === null) return;
      ctx.fillText("🍔", i * SIZE, d * SIZE);
      drops[i] += 0.5;
      if (drops[i] * SIZE > canvas.height) drops[i] = Math.random() * -20;
    });
  }
  setInterval(draw, 40);


  // food and restaurant search

 async function getCalories(food, restaurant) {
    const response = await fetch('https://indiscriminate-noiselessly-scarlette.ngrok-free.dev/calories?food=' + food + '&restaurant=' + restaurant, {
    headers: {
        'ngrok-skip-browser-warning': 'true'
    }
});
    const data = await response.json();
    return data.calories;
}

  async function displayFood(){

    const restaurant = document.getElementById("formName").value.trim();
    const food = document.getElementById("foodName").value.trim();

    if (!(restaurant) || !(food)){
      return 0;
    }

    const displayInput = document.getElementById("displayInput");
    const calories = await getCalories(food, restaurant);

    if (restaurant === "" || food === ""){
      displayInput.textContent = "";
      return 0;
    }
    else{
        displayInput.textContent = `${restaurant} ${food} has ${calories} calories`;
    } 



  }



