export class User {
    id: number;
    title: string;
    firstname: string;
    surname: string;
    isConfirmed: boolean;

    constructor(title: string, firstname: string, surname: string) {
        this.id = this.generateId();
        this.title = title;
        this.firstname = firstname;
        this.surname = surname;
    }

    isUserConfirmed() {
        return this.isConfirmed;
    }

    generateId(){
        return Math.floor((Math.random() * 10) + 1);
    }
}