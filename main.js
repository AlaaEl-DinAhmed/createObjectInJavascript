/*
    Creating object using Object.create()
*/
const personObj = Object.create({})
personObj.fname = 'Alaa';
personObj.lname = 'Ahmed';
personObj.fullName = function () {
    return `I'm ${personObj.fname} ${personObj.lname}.`
};

const personObjFullName = personObj.fullName()
console.log(personObjFullName)

/*
    Creating object using Object literal
*/
const person = {}
person.fname = 'Alaa';
person.lname = 'Ahmed';
person.fullName = function () {
    return `I'm ${person.fname} ${person.lname}.`
};

const personFullName = person.fullName()
console.log(personFullName)

/*
    Creating object using function
*/
function createPerson(fname, lname) {
    const person = {}
    person.fname = fname;
    person.lname = lname;
    person.fullName = function () {
        return `I'm ${person.fname} ${person.lname}.`
    };
    return person;
}

const personOne = createPerson('Alaa', 'Ahmed');
const personOneFullName = personOne.fullName();
console.log(personOneFullName);

/*
    Creating object using Classes
*/

class User {
    constructor(fname, lname) {
        this.fname = fname;
        this.lname = lname;
    }
    fullName() {
        return `I'm ${this.fname} ${this.lname}.` 
    }
}

const userOne = new User('Alaa', 'Ahmed')

console.log(userOne.fullName())