// let names = ['Nancy','Blessing','Jorge','Svetlana','Bob'];

// const namesB = names.filter(name => name.charAt(0) == "B");
// console.log(namesB)

// const nameLen = names.map((name) => name.length);
// console.log(nameLen);

// const reduced = names.reduce((total, name) => total + name.length, 0) / names.length;
// console.log(reduced);

// const steps = ["one", "two", "three"];

// function listTemplate(step) {
//    return `<li>${step}</li>`;
// }

// const stepsHtml = steps.map(step => listTemplate(step));
// document.querySelector("#myList").innerHTML = stepsHtml.join();

const lettersList = ['A', 'B', 'A'];
function convertGradeToPoints(grade) {
    let points = 0;
    if (grade == "A") {
        points = 4;
    }
    else if (grade == "B") {
        points = 3;
    }
    return points;
}
const gpaPoints = lettersList.map(convertGradeToPoints);
console.log(gpaPoints);

const gpa = gpaPoints.reduce((total, item) => total + item) / gpaPoints.length;
console.log(gpa)

const fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
const shordWords = fruits.filter(word => word.length < 6);
console.log(shordWords);

const numbers = [12, 34, 21, 54];
const luckyNumber = 21;
let luckyIndex = numbers.indexOf(luckyNumber);
console.log(luckyIndex);