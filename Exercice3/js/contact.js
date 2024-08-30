export class Contact {
    constructor(firsteName, lastName, birthDate, phoneNumber, email) {
        this.firsteName = firsteName;
        this.lastName = lastName;
        this.birthDate = birthDate;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }
    getFirstName() {
        return this.firsteName;
    }
    getLastName() {
        return this.lastName;
    }
    getPhoneNumber() {
        return this.phoneNumber;
    }
    getBirthDate() {
        return this.birthDate;
    }
    getEmail() {
        return this.email;
    }
}
