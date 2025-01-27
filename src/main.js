/*
Eric Lien
Rocket Patrol: Remastered!!!!!! (kinda)
Time to complete: like 3 hours lol
Mods: 
    Mouse Control (5)
    Particle Explosions (5)
    Dynamic Timing/Scoring Mechanism (5)
    Display Time Remaining (3)
    Control Rocket After it's Fired (1)
    Randomized Spaceship Speed (1)
Sources:
    Phaser Documentation
*/

let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [ Menu, Play ],
}
let game = new Phaser.Game(config);

let keyFIRE, keyRESET, keyLEFT, keyRIGHT;
let borderUISize = game.config.height / 15
let borderPadding = borderUISize / 3;

