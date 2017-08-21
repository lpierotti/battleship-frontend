function CreateShip() {
	var id = 0
	const all = []

	return class Ship {
		constructor(name, grid, size) {
			this.coordinates = [];
			this.id = id++
			this.grid = grid
			this.size = size
			this.name = name
			all.push(this)
		}

		static removeShip(id) {
			document.getElementById(`${id}`).remove()
		}

		static insertShips() {
			var insertArea = document.getElementById('insert-ships')
			insertArea.innerHTML = `
			<li id="1">Destroyer</li>
			<li id="2">Cruiser</li>
			<li id="3">Submarine</li>
			<li id="4">Carrier</li>
			`
		}


		checkPosition(selectedCoordinates) {
			let xy = selectedCoordinates.split(",").forEach(number => (parseInt(number)))
			if (!this.grid.placedShipCoordinates[selectedCoordinates] && this.coordinates.length === 0 ) {
				this.coordinates.push(xy)
			} else if (!this.grid.placedShipCoordinates[selectedCoordinates] && this.coordinates.length === 1) {
				if (xy[0] === this.coordinates[0][0] + 1 || xy[0] === this.coordinates[0][0] - 1 && xy[1] === this.coordinates[0][1]) {
					this.coordinates.push(xy)
				} else if (xy[1] === this.coordinates[0][1] + 1 || xy[1] === this.coordinates[0][1] - 1 && xy[0] === this.coordinates[0][0]) {
					this.coordinates.push(xy)
				} else {
					alert('this is an invalid position, please choose another.')
				}
			} else if (!this.grid.placedShipCoordinates[selectedCoordinates] && this.coordinates.length === 2) {
				
			}
		}

		placeShip(selectedCoordinates) {
			if (this.coordinates.length === this.size) {
				alert("You've already placed this ship")
			} elseif() {


				this.grid.ships[selectedCoordinates] = 1
			}
		}


	}
}

const Ship = CreateShip()