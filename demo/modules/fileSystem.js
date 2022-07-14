class User {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    hello = () => {
        return `Salom ${this.name}!`;
    }
}
module.exports = User;