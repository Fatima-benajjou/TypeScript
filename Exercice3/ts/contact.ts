export class Contact {
    constructor (private firsteName: string, private lastName: string, private birthDate: Date,
        private phoneNumber: string, private email: string) {}

        getFirstName () : string {
            return this.firsteName
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