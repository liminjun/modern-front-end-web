function whatsMyAge(person) {
    console.log(person.age);
}
;
var Person = (function () {
    function Person() {
    }
    return Person;
}());
var p = new Person;
p.age = 12;
whatsMyAge(p);
