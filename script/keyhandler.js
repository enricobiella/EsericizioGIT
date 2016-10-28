/**
 * File keyhandler.js
 * implemented by Adelino Lobão
 * 20/01/2012
 * modified by Niccolò Perego, Leonardo Riva, Tomas Abbondi, Riccardo Merlo, Enrico Biella, Davide Atzeni.
 * 23/10/2016
 */

/**
 * Class KeyHandler
 */
function KeyHandler() {
	//define the Z key
 	this.Z_KEY = 122;
 	this.z_KEY = 37;
 	//define the X key
 	this.X_KEY = 120;
	this.x_KEY = 39;
 	//define the space key
 	this.SPACE_KEY = 32;
	//define arrow key

 	/**
 	 * Handle the events when a key is pressed
 	 * @param e - event
 	 * @param player - player
 	 */
 	this.keyPress = function(e) {
 		keyPressed = e.which ? e.which : window.event.keyCode;

 		switch(keyPressed) {
 			case this.Z_KEY:
 			case this.z_KEY:
 				player.movingLeft = true;
 				break;
 			case this.X_KEY:
 			case this.x_KEY:
 				player.movingRight = true;
 				break;
 		}
 	}

	/**
 	 * Handle events when key is released
 	 * @param e - event
 	 */
 	this.keyUp = function(e) {
 		keyPressed = e.which ? e.which : window.event.keyCode;

 		switch(keyPressed) {
 			case this.Z_KEY:
 			case this.z_KEY:
 				player.movingLeft = false;
 				break;
 			case this.X_KEY:
 			case this.x_KEY:
 				player.movingRight = false;
 				break;
			case this.SPACE_KEY:
				lasers[lasers.length] = new Laser(player);
				break;
 		}
 	}
}
