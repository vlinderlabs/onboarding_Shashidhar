class Player{
    private health: number;
    private speed: number;

    setHealth(health:number) {
        this.health = health;

    }
    getHealth() {
        return this.health;

    }
    setSpeed(speed:number) {
        this.speed = speed;

    }
    getSpeed() {
        return this.speed;

    }
}

let kohli = new Player();
// kohli.health = -3;      //Property 'health' is private and only accessible within class 'Player'
// kohli.speed = 2;        //Property 'speed' is private and only accessible within class 'Player'

kohli.setHealth(10);
kohli.setSpeed(10);

console.log(`The kohli's health is ${kohli.getHealth()}/10 and his speed is ${kohli.getSpeed()}`);
