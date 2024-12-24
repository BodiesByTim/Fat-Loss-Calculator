function calculateFatLoss() {
    const weight = parseFloat(document.getElementById("weight").value);
    const activity = parseFloat(document.getElementById("activity").value);
    const goal = parseFloat(document.getElementById("goal").value);

    if (!weight || !activity || !goal) {
        document.getElementById("results").innerHTML = 
            "<p style='color: red;'>Please enter valid values for all fields!</p>";
        return;
    }

    // Step 1: Calculate Basal Metabolic Rate (BMR) using Mifflin-St Jeor Equation
    const bmr = 10 * weight + 6.25 * 68.18 - 5 * 30 + 5; // Assuming average height 5'8" (68.18) and age 30
    const tdee = bmr * activity; // Total Daily Energy Expenditure (TDEE)

    // Step 2: Subtract calories based on goal
    const weeklyCaloriesToBurn = goal * 3500;
    const dailyCaloriesToBurn = weeklyCaloriesToBurn / 7;
    const dailyCalories = tdee - dailyCaloriesToBurn;

    // Step 3: Macronutrient Breakdown
    const proteinCalories = dailyCalories * 0.5;
    const carbsCalories = dailyCalories * 0.25;
    const fatsCalories = dailyCalories * 0.25;

    const protein = (proteinCalories / 4).toFixed(1);
    const carbs = (carbsCalories / 4).toFixed(1);
    const fats = (fatsCalories / 9).toFixed(1);

    // Step 4: Display results
    document.getElementById("results").innerHTML = `
        <h3>Your Fat Loss Plan:</h3>
        <p><strong>Daily Calorie Goal:</strong> ${dailyCalories.toFixed(0)} calories</p>
        <p><strong>Weekly Fat Loss Target:</strong> ${goal} lbs</p>
        <p><strong>Total Calories to Burn in a Week:</strong> ${weeklyCaloriesToBurn} calories</p>
        <p><strong>Macronutrient Breakdown:</strong></p>
        <ul>
            <li>Protein: ${protein}g</li>
            <li>Carbs: ${carbs}g</li>
            <li>Fats: ${fats}g</li>
        </ul>
    `;
}
