const exercises = [
  { name: "Running (6mph)", met: 9.8, repsPerMinute: 160, image: "Exercise images/Running.jpg" },
  { name: "Jumping Jacks", met: 8.0, repsPerMinute: 50, image: "Exercise images/JumpingJacks.jpg" },
  { name: "Burpees", met: 8.0, repsPerMinute: 15, image: "Exercise images/Burpees.jpg" },
  { name: "Jump Rope", met: 11.8, repsPerMinute: 120, image: "Exercise images/JumpRope.jpg" },
  { name: "High Knees", met: 8.0, repsPerMinute: 60, image: "Exercise images/HighKnees.jpg" },
  { name: "Mountain Climbers", met: 8.0, repsPerMinute: 40, image: "Exercise images/MountainClimbers.jpg" },
  { name: "Push-ups", met: 3.8, repsPerMinute: 20, image: "Exercise images/Push-ups.png" },
  { name: "Squats", met: 5.0, repsPerMinute: 20, image: "Exercise images/Squats.jpg" },
  { name: "Bench Press", met: 3.5, repsPerMinute: 12, image: "Exercise images/BenchPress.jpg" },
  { name: "Deadlift", met: 6.0, repsPerMinute: 10, image: "Exercise images/Deadlift.jpg" },
  { name: "Pull-ups", met: 8.0, repsPerMinute: 8, image: "Exercise images/Pullups.jpg" },
  { name: "Lunges", met: 4.0, repsPerMinute: 16, image: "Exercise images/Lunges.jpg" },
  { name: "Sit-ups", met: 3.8, repsPerMinute: 25, image: "Exercise images/Situps.jpg" },
  { name: "Plank (seconds)", met: 3.5, repsPerMinute: 60, image: "Exercise images/Plank.jpg" },
];

function calculateReps(exercise, calories, weight) 
{
    let reps = calories / (exercise.met * weight * 3.5 / 200 / exercise.repsPerMinute);
    return {reps, image: exercise.image};
}

