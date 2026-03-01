

const exercises = [
  { name: "Running (6mph)", met: 9.8, repsPerMinute: 160 },
  { name: "Jumping Jacks", met: 8.0, repsPerMinute: 50 },
  { name: "Burpees", met: 8.0, repsPerMinute: 15 },
  { name: "Jump Rope", met: 11.8, repsPerMinute: 120 },
  { name: "High Knees", met: 8.0, repsPerMinute: 60 },
  { name: "Mountain Climbers", met: 8.0, repsPerMinute: 40 },
  { name: "Push-ups", met: 3.8, repsPerMinute: 20 },
  { name: "Squats", met: 5.0, repsPerMinute: 20 },
  { name: "Bench Press", met: 3.5, repsPerMinute: 12 },
  { name: "Deadlift", met: 6.0, repsPerMinute: 10 },
  { name: "Pull-ups", met: 8.0, repsPerMinute: 8 },
  { name: "Lunges", met: 4.0, repsPerMinute: 16 },
  { name: "Sit-ups", met: 3.8, repsPerMinute: 25 },
  { name: "Plank (seconds)", met: 3.5, repsPerMinute: 60 },
];

function calculateReps(exercise, calories, weight) 
{
    let reps = calories / (exercise.met * weight * 3.5 / 200 / exercise.repsPerMinute);
    return reps;
}