describe('Person Service fixture', function() {
    var Person;

    beforeEach(module('starter'));
    beforeEach(inject(function(_Person_) {
        Person = _Person_;
    }));

    describe('Constructor', function() {
        expect(new Person('Ben')).to.have.property('name', 'Ben');
    });
});