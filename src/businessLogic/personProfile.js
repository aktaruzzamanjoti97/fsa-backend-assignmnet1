const { faker } = require('@faker-js/faker');
const getRandomNumber = require('./randomNumber');

const getPersonProfile = (arr) => {
    const values = Object.values(arr);
    const person = {};

    arr.forEach((property) => {
        if (values.includes(property)) {
            switch (property) {
                case 'firstName':
                    person.firstName = faker.person.firstName();
                    break;
                case 'lastName':
                    person.lastName = faker.person.lastName();
                    break;
                case 'email':
                    person.email = faker.internet.email();
                    break;
                case 'avatar':
                    person.avatar = faker.image.url();
                    break;
                case 'age':
                    person.age = getRandomNumber(18, 65);
                    break;
                case 'address':
                    person.address = faker.address.streetAddress();
                    break;
            }
        }
    });
    return person;
};

module.exports = getPersonProfile;