function calculateBMI() {
    let height = document.querySelector('.height').value;
    let heightUnit = document.querySelector('#heightUnit').value;
    let weight = document.querySelector('.weight').value;
    let weightUnit = document.querySelector('#weightUnit').value;

    if (height === '' || weight === '') {
        document.getElementById('result').innerHTML = 'Please fill in all the fields.';
        return;
    }

    if (isNaN(height) || isNaN(weight)) {
        document.getElementById('result').innerHTML = 'Please enter numeric values.';
        return;
    }

    if (heightUnit === 'ft') {
        height *= 30.48; // Convert feet to centimeters
    } else if (heightUnit === 'in') {
        height *= 2.54; // Convert inches to centimeters
    }

    if (weightUnit === 'lb') {
        weight *= 0.453592; // Convert pounds to kilograms
    }

    let heightInMeters = height / 100;
    let bmi = weight / Math.pow(heightInMeters, 2);

    let bmiCategory = '';
    if (bmi < 18.5) {
        bmiCategory = 'Underweight';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        bmiCategory = 'Normal';
    } else if (bmi >= 25 && bmi <= 29.9) {
        bmiCategory = 'Overweight';
    } else if (bmi >= 30) {
        bmiCategory = 'Obesity';
    }

    document.getElementById('result').innerHTML = 'Your Body Mass Index (BMI) is: ' + (Math.round(bmi * 100) / 100).toFixed(2) + '<br>Index Value is ' + bmiCategory;

    // Progress Bar
    let progressBar = document.querySelector('.progress');
    let progressPercentage = (bmi / 50) * 100;
    progressPercentage = Math.min(progressPercentage, 100); // Limit to 100%
    progressBar.style.width = progressPercentage + '%';
}

function clearFields() {
    document.querySelector('.height').value = '';
    document.querySelector('.weight').value = '';
    document.getElementById('result').innerHTML = '';
    document.querySelector('.progress').style.width = '0%';
}

document.querySelector('.btn.calculate').addEventListener('click', calculateBMI);
document.querySelector('.btn.clear').addEventListener('click', clearFields);
