//define 10 student JSON
//store it in an array
const students = [
    {
        id: 1,
        name: "John",
        gender: "male",
        course: "IT",
        gpa: 3.8
    },
    {
        id: 2,
        name: "Emma",
        gender: "female", 
        course: "Business",
        gpa: 3.9
    },
    {
        id: 3,
        name: "Sarah",
        gender: "female",
        course: "IT",
        gpa: 3.7
    },
    {
        id: 4,
        name: "Mike",
        gender: "male",
        course: "Engineering",
        gpa: 3.5
    },
    {
        id: 5,
        name: "Lisa",
        gender: "female",
        course: "IT",
        gpa: 4.0
    },
    {
        id: 6,
        name: "Tom",
        gender: "male",
        course: "IT",
        gpa: 3.6
    },
    {
        id: 7,
        name: "Anna",
        gender: "female",
        course: "Medicine",
        gpa: 3.9
    },
    {
        id: 8,
        name: "David",
        gender: "male",
        course: "IT",
        gpa: 3.4
    },
    {
        id: 9,
        name: "Emily",
        gender: "female",
        course: "Arts",
        gpa: 3.8
    },
    {
        id: 10,
        name: "James",
        gender: "male",
        course: "IT",
        gpa: 3.7
    }
];

//find the female students
const femaleStudents = students.filter(student => student.gender === "female");
console.log("Female Students:", femaleStudents);

//find the students who are following IT course
const itStudents = students.filter(student => student.course === "IT");
console.log("IT Students:", itStudents);

//find the max and average GPA among the students
const maxGPA = Math.max(...students.map(student => student.gpa));
const averageGPA = students.reduce((sum, student) => sum + student.gpa, 0) / students.length;

console.log("Maximum GPA:", maxGPA);
console.log("Average GPA:", averageGPA.toFixed(2));
