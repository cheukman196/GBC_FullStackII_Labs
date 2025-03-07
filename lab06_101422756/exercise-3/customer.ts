class Customer {
    private firstName: string;
    private lastName: string;

    constructor(fname: string, lname: string) {
        this.firstName = fname;
        this.lastName = lname;
    }

    public greeter() {
        console.log(`Hello, ${this.firstName} ${this.lastName}`);
    }
}

let customer = new Customer("John", "Green");
customer.greeter();