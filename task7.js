// =========================================
// Task 7: Hospital Patient System
// Skip or Stop Early
// =========================================

// Skip patients whose age is below 30.

let patients = [
    { name: "Anita", age: 22 },
    { name: "Rahul", age: 45 },
    { name: "Priya", age: 31 },
    { name: "John", age: 60 }
];

for (let patient of patients) {

    if (patient.age < 30) {
        continue;
    }

    console.log(patient.name, "-", patient.age);
}

/*
Expected Output:

Rahul - 45
Priya - 31
John - 60
*/