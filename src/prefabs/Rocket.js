class Rocket extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        this.isFiring = false;
        this.moveSpeed = 2;
        this.sfxShot = scene.sound.add('sfx-shot');
    }

    update() {
        if (!this.isFiring) {
            this.x = game.input.mousePointer.x;
        }
        if (this.isFiring){
            if (this.y >= borderUISize * 3 + borderPadding) {
                this.y -= this.moveSpeed;
            }
            if (game.input.mousePointer.x > this.x) {
                this.x += this.moveSpeed;
            }
            if (game.input.mousePointer.x < this.x) {
                this.x -= this.moveSpeed;
            }
        }
        if (this.y <= borderUISize * 3 + borderPadding) {
            this.isFiring = false;
            this.y = game.config.height - borderUISize - borderPadding;
        }
    }

    fire() {
        this.isFiring = true;
        this.sfxShot.play;
    }
    
    reset() {
        this.isFiring = false;
        this.y = game.config.height - borderUISize - borderPadding;
    }
}