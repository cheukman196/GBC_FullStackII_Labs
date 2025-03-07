export class Customer {
    private firstName: string;
    private lastName: string;
    private age: number;

    constructor(fname: string, lname: string, age: number) {
        this.firstName = fname;
        this.lastName = lname;
        this.age = age;
    }

    public greeter() {
        console.log(`Hello, ${this.firstName} ${this.lastName}`);
    }

    public getAge() {
        console.log("Age: " + this.age);
        return this.age;
    }
}
