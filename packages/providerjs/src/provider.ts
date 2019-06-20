export class Provider {
    id: string;
    firstName: string;
    middleName: string;
    lastName: string;

    constructor(id: string, firstName: string, middleName: string, lastName: string) {
        this.id = id;
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
    }

    toString() {
        return `${this.firstName} ${this.lastName}`;
    }
}
