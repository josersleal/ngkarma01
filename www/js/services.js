angular.module('starter')
.factory('PersonService', Person);

function Person() {
    Person = function Person(name) {
        this.name = name;
    }
    var PersonService = {
        Person: Person
    };
    return PersonService;
}