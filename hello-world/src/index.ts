interface HelloInterface {
    name: string,
    hello(message: string): string
}

class HelloWorld implements HelloInterface {
    name: string

    constructor(name: string) {
        this.name = name
    }

    hello(message: string): string {
        return `Hello, ${this.name}! ${message}`
    }
}

const greeting = new HelloWorld("name");
console.log(greeting.hello("Welcome to TypeScript!"))