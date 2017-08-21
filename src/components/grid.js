class Grid {

	constructor(user) {
		this.placedShipCoordinates = {}
		//this.coordinates = coordinates;
		this.render();
	}

	render() {
		var board = "";
		var x = 0;
		var y = 0;
		for (var i = 0; i < 10; i++) {
			for (var j = 0; j < 10; j++) {
				y++;
				board += `<div class="grid-border" id="${x},${y}"> </div>`
			}
			x++;
			y = 0;
		}
		  // debugger
		document.getElementById('grid-container').innerHTML = board;
		Ship.insertShips()
	}

	placeShip(size) {
		document.getElementById('grid-container').addEventListener('click', function(event) {
			if (event.target.innerHTML === "") {
				document.getElementById(event.target.id)


			} else {

			}
		})
	}




	createEventListeners(){

	}

	updateRender(){

	}
}