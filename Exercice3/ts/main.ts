export class Contact {
    constructor (private firstName: string, private lastName: string, private birthDate: Date,
        private phoneNumber: string, private email: string) {}

        getFirstName () : string {
            return this.firstName
        }

        getLastName () : string {
            return this.lastName
        }

        getPhoneNumber() : string {
            return this.phoneNumber
        }

        getBirthDate (): Date {
            return this.birthDate
        }

        getEmail (): string {
            return this.email
        }
 
}

// const prenom = (document.getElementById('prenom') as HTMLInputElement).value;
// const nom = (document.getElementById('nom') as HTMLInputElement).value;
// const dateNaissance = (document.getElementById('dateNaissance') as HTMLInputElement).value;
// const telephone = (document.getElementById('telephone') as HTMLInputElement).value;
// const email = (document.getElementById('email') as HTMLInputElement).value;

const form = document.getElementById('formID') as HTMLFormElement;
const formData = new FormData (form)
console.log(formData.get("nom"))
console.log(formData.get("prenom"))


// const newContact: Contact = new Contact (formData.get("prenom"), formData.get("nom"), formData.get("dateNaissance"), formData.get("telephone"), formData.get("email")) 


class ContactManager {
    private contacts: Contact[] = [];
    constructor(private contactListElement : HTMLElement) {}

    addContact (contact : Contact): void {
        this.contacts.push(contact);
        // this.addContactList();
    }

    
    }
