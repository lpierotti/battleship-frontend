function CreateGrid() {
	let id = 0
	const all = []

	return class Grid {

		constructor(user) {
			this.id = id++
			this.user = user
			this.placedShipCoordinates = {}
			this.firingBoard = {}
			this.render();
			all.push(this)
		}

		render() {
			var board = "";
			var x = 0;
			var y = 0;
			for (var i = 0; i < 10; i++) {
				for (var j = 0; j < 10; j++) {
					board += `<div class="grid-border" id="${x},${y}"> </div>`
					y++;
				}
				x++;
				y = 0;
			}
			document.getElementById('grid-container').innerHTML = board;
			Ship.insertShips()
		}

		static renderBoards(playerName) {
			var currentPlayersGrid = Grid.all().find(grid => grid.user === playerName)
			document.getElementById('grid-container').remove()
			currentPlayersGrid.renderPlayingBoard()
		}

		renderPlayingBoard() {
			var ownCoordinates = this.placedShipCoordinates;
			var firingCoordinates = this.firingBoard;
			var board = `<h2 id="${this.id}"> ${this.user}'s Board </h2>`;
			var playingBoard = `<h2 id="${this.id}"> Firing Board </h2>`;
			var x = 0;
			var y = 0;
			for (var i = 0; i < 10; i++) {
				for (var j = 0; j < 10; j++) {
					board += `<div class="grid-border" data-id="${x},${y}"> </div>`
					playingBoard += `<div class="grid-border" id="${x},${y}"> </div>`
					y++;
				}
				x++;
				y = 0;
			}
			document.getElementById('firing-grid').innerHTML = playingBoard;
			document.getElementById('players-grid').innerHTML = board;
			for (var coordinate in ownCoordinates) {
				if (ownCoordinates[coordinate] === 1){

					document.querySelector(`div[data-id="${coordinate}"]`).style = "background-color: black;"
				} else if (ownCoordinates[coordinate] === 2) {
					document.querySelector(`div[data-id="${coordinate}"]`).style = "background-color: red;"
				} else if (ownCoordinates[coordinate] === 0) {
					document.querySelector(`div[data-id="${coordinate}"]`).style = "background-color: blue;"
				}
			}
			for (var coordinate in firingCoordinates) {
				if (firingCoordinates[coordinate] === 2) {
					document.getElementById(coordinate).style = "background-color: red;"
				} else if (firingCoordinates[coordinate] === 0) {
					document.getElementById(coordinate).style = "background-color: blue;"
				}
			}
		}

		checkFinished() {
			if (Object.keys(this.placedShipCoordinates).length === 10) {
				// alert('please give the computer to your oponent so they can place their ships')
				Grid.renderForm()
			}
			if (Grid.all().length === 2 && Object.keys(this.placedShipCoordinates).length === 10) {
				var firstPlayer = Grid.all()[0].user
				Grid.renderBoards(firstPlayer)
			}
		}

		static renderForm() {
			document.getElementById('ship-info').innerHTML = ''
			document.getElementById('grid-container').innerHTML = `
			<h2>Oponent, please enter your name here to start playing</h2>
			<form id="create-form">
			<input type="text" id="create-name">
			<input class="submit-button" type="submit" value="submit">
			</form>
			`
	}

	fireTorpedo(firingCoordinate, opponentsGrid) {
		debugger
		if (Object.keys(opponentsGrid.placedShipCoordinates).includes(firingCoordinate)) {
			opponentsGrid.placedShipCoordinates[firingCoordinate] = 2
			this.firingBoard[firingCoordinate] = 2
			alert('you have hit their ship!')
			document.getElementById(firingCoordinate).style = "background-color: red;"
		} else {
			debugger
			opponentsGrid.placedShipCoordinates[firingCoordinate] = 0
			this.firingBoard[firingCoordinate] = 0
			alert('you have missed')
			document.getElementById(firingCoordinate).style = "background-color: blue;"
		}
		opponentsGrid.renderPlayingBoard()
	}




	//
	// 	}
	// 	for (var coordinate in opponentsGrid.placedShipCoordinates) {
	// 		if (coordinate === firingCoordinate) {
	// 			opponentsGrid.placedShipCoordinates[coordinate] = 2
	// 			this.firingBoard[coordinate] = 2
	// 			debugger
	// 			document.getElementById(firingCoordinate).style = "background-color: red;"
	// 			alert('you have hit their ship!')
	// 		} else {
	// 			opponentsGrid.placedShipCoordinates[firingCoordinate] = 0
	// 			this.firingBoard[firingCoordinate] = 0
	// 			document.getElementById(firingCoordinate).style = "background-color: blue;"
	// 			alert('you have missed')
	// 		}
	// 	}
	// 	opponentsGrid.renderPlayingBoard()
	// }

	addShip(coordinates){
        document.getElementById(coordinates).style = "background-color: black;"
    }

		static all() {
			return all
		}



		createEventListeners(){

		}

		updateRender(){

		}
	}
}

const Grid = CreateGrid()
