const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: "phaser-container",
    backgroundColor: "#5f6e7a",
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    physics: {
        default: "arcade",
        arcade: {
            gravity: { y: 400 }
        }
    },
    scene: [
        
    ]
};

const game = new Phaser.Game(config);