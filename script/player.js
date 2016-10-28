/**
 * File player.js
 * implemented by Adelino Lobão
 * 20/01/2012
 * modified by Niccolò Perego, Leonardo Riva, Tomas Abbondi, Riccardo Merlo, Enrico Biella, Davide Atzeni.
 * 23/10/2016
 */

/**
 * Class Player
 */



function Player() {

    //image src
    var imgSrc = 'script/images/ship.png';
    //width
    this.width = 26;
    //height
    this.height = 16;

    var score = 0;

    //indicates if the sprite is moving left
    this.movingLeft = false;
    //indicates if the sprite is moving right
    this.movingRight = false;

    //create the player sprite
    var sprite = new Sprite(20);
    //set sprite image and size
    sprite.initImage(imgSrc, 26, 16);
    //set initial position of the sprite
    sprite.initPosition(WINDOW_WIDTH / 2, WINDOW_HEIGHT - 100);

    /**
     * Draw the player
     */
    this.draw = function () {
        sprite.draw();
    }

    /**
     * Moves the player character to left
     */
    this.moveLeft = function () {
        sprite.moveLeft();
    }

    /**
     * Moves the player character to right
     */
    this.moveRight = function () {
        sprite.moveRight();
    }

    /**
     * Return the position xx of the player
     */
    this.getPositionX = function () {
        return sprite.x;
    }

    /**
     * Return the position yy of the player
     */
    this.getPositionY = function () {
        return sprite.y;
    }

    this.incrementScore = function () {
        score += 25;
    }

    this.getScore = function () {
        return score;
    }
}
