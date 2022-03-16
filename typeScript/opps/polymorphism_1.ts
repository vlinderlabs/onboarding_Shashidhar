/**************************Polymorphism******************************************************************/
/******************Objects (or) Methods are having more than one form***************************************/



class Animal {
    name: string;
    constructor (name: string){
        this.name = name;

    }
    eats() { 
                                                //method overriding
        console.log(`${this.name} eats grass`);

    }
}

class WildAnimal extends Animal {
    eats(){
        console.log(`${this.name} eats Non-Veg`);

    }
}

let animal1 = new Animal("cow");
animal1.eats();

let animal2 = new WildAnimal("Lion");
animal2.eats();