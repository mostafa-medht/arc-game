// Enemies our player must avoid
var Enemy = function(x,y,speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    this.x = x ; 
    this.y= y ; 
    this.speed= speed;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed * dt;

    // reset the position of the enemies , they reappear randomly with different speeds 
    if (this.x>500){
        this.x -=100;
        this.speed = 100+Math.floor(Math.random() * 500);
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function( x , y , speed ) {
    this.x = x ;
    this.y = y ;
    this.speed ; 

    this.sprite = 'images/char-horn-girl.png';
}

Player.prototype.update = function(dt) {

}

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

Player.prototype.handleInput = function (keyPress) {
    if (keyPress='left' && this.x > 0 ) {
        this.x -= 102 ;
    }

    if (keyPress='right' && this.x < 405  ) {
        this.x += 102 ;
    }

    if (keyPress='up' && this.y > 0 ) {
        this.x -= 83 ;
    }

    if (keyPress='down' && this.y > 405 ) {
        this.x += 83 ;
    }
}
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var allEnemies = [];

// Location of the 3 enemies on the y axis located on the stone road
var enemyLocation = [63, 147, 230];

enemyLocation.forEach(function(posY) {
    enemy = new Enemy(0, posY, 100 + Math.floor(Math.random() * 499));
    allEnemies.push(enemy);
});


// The starting location of the player is located at x=200, y=405
var player = new Player(202, 405);


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
