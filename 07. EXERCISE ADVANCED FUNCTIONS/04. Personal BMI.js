function personalBMI(name, age, weight, height) {
    let currentObj = {
        name: name,
        personalInfo: {
            age: Math.round(age),
            weight: Math.round(weight),
            height: Math.round(height)
        },
        BMI: Math.round(weight / ((height / 100) ** 2)),
    };

    currentObj.status =
        currentObj.BMI < 18.5 ? 'underweight' :
            currentObj.BMI < 25 ? 'normal' :
                currentObj.BMI < 30 ? 'overweight' : 'obese';

    if (currentObj.BMI >= 30) {
        currentObj.recommendation = 'admission required';
    }

    return currentObj;
}

console.log(personalBMI('Peter', 29, 75, 182));
console.log(personalBMI('Honey Boo Boo', 9, 57, 137));