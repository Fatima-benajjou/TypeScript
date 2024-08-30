export class Contact {
    constructor(firstName, lastName, birthDate, phoneNumber, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }
    getFirstName() {
        return this.firstName;
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
// const prenom = (document.getElementById('prenom') as HTMLInputElement).value;
// const nom = (document.getElementById('nom') as HTMLInputElement).value;
// const dateNaissance = (document.getElementById('dateNaissance') as HTMLInputElement).value;
// const telephone = (document.getElementById('telephone') as HTMLInputElement).value;
// const email = (document.getElementById('email') as HTMLInputElement).value;
const form = document.getElementById('formID');
const formData = new FormData(form);
console.log(formData.get("nom"));
console.log(formData.get("prenom"));
// const newContact: Contact = new Contact (formData.get("prenom"), formData.get("nom"), formData.get("dateNaissance"), formData.get("telephone"), formData.get("email")) 
class ContactManager {
    constructor(contactListElement) {
        this.contactListElement = contactListElement;
        this.contacts = [];
    }
    addContact(contact) {
        this.contacts.push(contact);
        // this.addContactList();
    }
}
