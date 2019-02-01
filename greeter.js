var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + ' ' + middleInitial + '  ' + lastName;
    }
    return Student;
}());
function greeter(person) {
    return 'Hello, ' + person.firstName + ' ' + person.lastName;
}
// let user = 'Jane User';
// let user = { firstName: 'Daniel', lastName: 'Gameros' };
var user = new Student('Hector', 'D.', 'Gameros');
document.body.innerHTML = greeter(user);
