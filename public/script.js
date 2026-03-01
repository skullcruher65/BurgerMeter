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
  { name: "Pull-ups", met: 8.0, repsPerMinute: 8, image: "/ExerciseImages/Pullups.jpg" },
  { name: "Lunges", met: 4.0, repsPerMinute: 16, image: "/ExerciseImages/Lunges.jpg" },
  { name: "Sit-ups", met: 3.8, repsPerMinute: 25, image: "/ExerciseImages/Situps.jpg" },
  { name: "Plank (seconds)", met: 3.5, repsPerMinute: 60, image: "/ExerciseImages/Plank.jpg" },
];


function openTab(event, tabName){
      var i;
      

      const tabcontent = document.getElementsByClassName("tabcontent");
      const tablinks = document.getElementsByClassName("tablinks");
      for(i = 0; i < tabcontent.length; i++){
          tabcontent[i].style.display = "none";
      }

      
      for(i = 0; i <tablinks.length; i++){
          tablinks[i].className = tablinks[i].className.replace(" active", "");

      }
      document.getElementById(tabName).style.display = "block";
      event.currentTarget.className += " active";
}

  window.onload = function(){
    document.getElementById("defaultOpen").click();

    const dropdown = document.getElementById("exercises")
  exercises.forEach((exercise) => {
    const option = document.createElement("option");
    option.value = exercise.name;
    option.text = exercise.name;
    dropdown.appendChild(option);

});
}


  

function calculateReps(exercise, calories, weight) 
{
    let reps = calories / (exercise.met * weight * 3.5 / 200 / exercise.repsPerMinute);
    return {reps, image: exercise.image};
}

