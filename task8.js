// =========================================
// Task 8: Hospital Patient System
// Add & Find
// =========================================

// Create patient array.

let patients = [
    { name: "Anita", age: 22 },
    { name: "Rahul", age: 45 },
    { name: "Priya", age: 31 }
];

// Add a new patient.

patients.push({ name: "John", age: 60 });

// Find the oldest patient.

let oldestPatient = patients[0];

for (let patient of patients) {
    if (patient.age > oldestPatient.age) {
        oldestPatient = patient;
    }
}

console.log("Oldest Patient:");
console.log("Name:", oldestPatient.name);
console.log("Age:", oldestPatient.age);

/*
Expected Output:

Oldest Patient:
Name: John
Age: 60
*/