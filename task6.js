// =========================================
// Task 6: Hospital Patient System
// Iterate Over Records
// =========================================

// Create an array of patient objects.

let patients = [
    { name: "Anita", age: 22 },
    { name: "Rahul", age: 45 },
    { name: "Priya", age: 31 },
    { name: "John", age: 60 }
];

// Print patient details.

for (let patient of patients) {
    console.log("Name:", patient.name, "| Age:", patient.age);
}

/*
Expected Output:

Name: Anita | Age: 22
Name: Rahul | Age: 45
Name: Priya | Age: 31
Name: John | Age: 60
*/