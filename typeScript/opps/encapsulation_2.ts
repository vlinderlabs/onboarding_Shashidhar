export class Actions{
    health: number= 10;
    name: string;

    constructor(name: string){
        this.name = name;

    }
    shoot(): void{
        console.log(`${this.name} is Shooting And has Health of ${this.health}/10`); 
    }
    
}
export class Player extends Actions{

}
export class Enemy extends Actions{

}

let player1 = new Player("Shashi");
player1.health = 30;
player1.shoot();

