class Person{
    constructor(firstName,lastName,age,email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }

    toString(){
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
    }
}


function getPersons() {
    class Person{
        constructor(firstName,lastName,age,email){
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.email = email;
        }

        toString(){
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
        }
    }
    let maria = new Person('Maria', 'Petrova', 22, 'mp@yahoo.com');
    let softuni = new Person('SoftUni');
    let stephan = new Person('Stephan', 'Nikolov', 25);
    let peter = new Person('Peter', 'Kolev', 24, 'ptr@gmail.com');

    return [maria,softuni,stephan,peter];
}
let person = new Person('Maria', 'Petrova', 22, 'ptr@gmail.com');
console.log(getPersons());
