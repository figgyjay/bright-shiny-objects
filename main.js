// ┌─────────────────┐
// │ Your code here! │
// └─────────────────┘

function createuser(firstName, lastName){
    let user ={
        firstName: firstName,
        lastName: lastName,
    }
    return user;

}
console.log(createuser("Mesi", "Kaleziq"))

function setAge(user, age){
    user.age = age;
    return user;
}

    console.log (setAge(createuser("Mesi", "Kaleziq"), 15 ))
    console.log (setAge({
        firstName: "Mesi",
        lastName: "Kaleziq"
    }, 33))

function fixCar(car){
    car.needsMaintenance = false;
    return car;
}
const car = {
    make: 'Ford',
    model: 'Mustang',
    year: 1969,
    needsMaintenance: true
};
console.log(fixCar(car))

function addGrades(student, grades){
    student.grades = student.grades.concat(grades);
    return student;
}
const student = {
    name: 'Anthony DeRosa',
    email: 'anthony.derosa@codeimmersives.com',
    grades: [80, 100, 95]
};


const newGrades = [88, 70, 90];

console.log(addGrades(student, newGrades));

const car2 = {
    make: 'Ford',
    model: 'Mustang',
    year: 1969,
    needsMaintenance: false
};

function getDataType(obj, key){
    obj.key = key;
    return obj;
};

console.log(getDataType(car2, 'make'));
console.log(getDataType(car2, 'model'));
console.log(getDataType(car2, 'year'));
console.log(getDataType(car2, 'needMaintenace'));


    const todos = [
        { 
            title: 'Get gas', 
            isComplete: false },
        { 
            title: 'Buy bread', 
            isComplete: true  
        }
    ];
const newToDo = {
    title: 'Call mom', 
    isComplete: false
};

function addToDo(todos, newToDo){
    todos.push(newToDo);
    return todos
 }

console.log(addToDo(todos, newToDo));




function addSong(playlist, newSong){
   playlist.songs.push(newSong);
   playlist.duration = playlist.duration + newSong.duration;
   return playlist
}

   
    const playlist = {
        title: 'My jams',
        duration: 10,
        songs:[
            {
                title: 'Texas Sun',
                artist: 'Khruangbin',
                duration: 4
            },
            {
                title: 'Malamente',
                artist: 'Rosalia',
                duration: 3
            }
        ]         
    }

    const newSong = {
        title: 'Old Friends',
        artist: 'Pinegrove',
        duration: 3
    };


console.log(addSong(playlist, newSong))


function updatedReportCard(reportCard, newGrade){
    let total = 0;
    reportCard.grades.push(newGrade);
    if(reportCard.lowestGrade > newGrade){
        reportCard.highestGrade = newGrade;
    }
    if(reportCard.highestGrade = newGrade){
        reportCard.highestGrade = newGrade;
    }
    for(let i = 0; i < reportCard.grades.length; i++){
        total += reportCard.grades[i];
    }
    reportCard.averageGrade = (total/reportCard.grades.length);
    
    return reportCard;

}
const reportCard = {
    lowestGrade: 70,
    highestGrade: 96,
    averageGrade: 82,
    grades: [70, 95, 80]
};

console.log(updatedReportCard(reportCard, 62));

console.log(updatedReportCard(reportCard, 100));




  
    











// ┌─────────────────────────────────────────────────────────────────────────┐
// │ Code used for testing. Do not modify!                                   │                         
// │                                                                         │
const isDef = (arg) => arg === 'function';
const pass = () => undefined;
// │                                                                         │
module.exports.createUser = isDef(typeof createUser) ? createUser : pass;
module.exports.setAge = isDef(typeof setAge) ? setAge : pass;
module.exports.incrementAge = isDef(typeof incrementAge) ? incrementAge : pass;
module.exports.fixCar = isDef(typeof fixCar) ? fixCar : pass;
module.exports.addGrades = isDef(typeof addGrades) ? addGrades : pass;
module.exports.getDataType = isDef(typeof getDataType) ? getDataType : pass;
module.exports.addTodo = isDef(typeof addTodo) ? addTodo : pass;
module.exports.addSong = isDef(typeof addSong) ? addSong : pass;
module.exports.updateReportCard = isDef(typeof updateReportCard) ? updateReportCard : pass;
// │                                                                         │
// └─────────────────────────────────────────────────────────────────────────┘
