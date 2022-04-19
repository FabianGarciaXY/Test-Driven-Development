
class Superhero {
    
    constructor(name, age, actor){
        this.name = name;
        this.age = age;
        this.actor = actor;
    }

    // Method to get more information about the superhero
    getInfo() {
        return `Hi my name is ${this.actor} from Marvel Studios`;

    }
}

module.exports = Superhero;
