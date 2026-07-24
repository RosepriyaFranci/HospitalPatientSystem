// =========================================
// Task 9: Hospital Patient System
// Remove & Sort
// =========================================

// Create patient array.

let patients = [
    { name: "Anita", age: 22 },
    { name: "Rahul", age: 45 },
    { name: "Priya", age: 31 },
    { name: "John", age: 60 }
];

// Remove the last patient.

patients.pop();

// Sort by age.

patients.sort(function(a, b) {
    return a.age - b.age;
});

// Display sorted patients.

console.log("Patients after removing last record and sorting:");

for (let patient of patients) {
    console.log(patient.name, "-", patient.age);
}

/*
Expected Output:

Patients after removing last record and sorting:
Anita - 22
Priya - 31
Rahul - 45
*/