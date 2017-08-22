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

		setCoordinates(selectedCoordinates) {
			if (parseInt(this.size) !== this.coordinates.length) {
				this.checkPosition(selectedCoordinates)
				if (Object.keys(this.grid.placedShipCoordinates).length === 10) {
					alert('you have completed placing this ship. please give the computer to your oponent')
				} else if (parseInt(this.size) === this.coordinates.length){
					alert('you have completed placing this ship')
				}
			}
		}




		checkPosition(selectedCoordinates) {
             let xy = selectedCoordinates.split(",").map(number => (parseInt(number)))
             var gridShipKeys = Object.keys(this.grid.placedShipCoordinates)
             if (!(gridShipKeys.includes(selectedCoordinates)) && this.coordinates.length === 0 ) {
                 this.coordinates.push(xy)
                 this.grid.addShip(selectedCoordinates)
                 this.grid.placedShipCoordinates[selectedCoordinates] = 1;

             } else if (!gridShipKeys.includes(selectedCoordinates) && this.coordinates.length === 1) {
                 if ((xy[0] === this.coordinates[0][0] + 1 || xy[0] === this.coordinates[0][0] - 1) && xy[1] === this.coordinates[0][1]) {
                     this.coordinates.push(xy)
                     this.grid.addShip(selectedCoordinates)
                     this.grid.placedShipCoordinates[selectedCoordinates] = 1;
                 } else if ((xy[1] === this.coordinates[0][1] + 1 || xy[1] === this.coordinates[0][1] - 1) && xy[0] === this.coordinates[0][0]) {
                     this.coordinates.push(xy)
                     this.grid.addShip(selectedCoordinates)
                     this.grid.placedShipCoordinates[selectedCoordinates] = 1;
                 }
             } else if (!gridShipKeys.includes(selectedCoordinates) && this.coordinates.length > 1) {
                 var lastCoordinates = this.coordinates[this.coordinates.length - 1];
                 var secondToLast = this.coordinates[this.coordinates.length - 2];
                 if (secondToLast[0] - lastCoordinates[0] === 0) {
                     if ((secondToLast[1] - lastCoordinates[1] > 0) && (xy[1] === lastCoordinates[1] - 1 && xy[0] === lastCoordinates[0])) {
                         this.coordinates.push(xy);
                         this.grid.addShip(selectedCoordinates)
                         this.grid.placedShipCoordinates[selectedCoordinates] = 1;
                     } else if ((secondToLast[1] - lastCoordinates[1] < 0) && (xy[1] === lastCoordinates[1] + 1 && xy[0] === lastCoordinates[0])) {
                         this.coordinates.push(xy);
                         this.grid.addShip(selectedCoordinates)
                         this.grid.placedShipCoordinates[selectedCoordinates] = 1;
                     }
                 } else if (secondToLast[1] - lastCoordinates[1] === 0) {
                     if ((secondToLast[0] - lastCoordinates[0] > 0) && (xy[0] === lastCoordinates[0] - 1 && xy[1] === lastCoordinates[1])) {
                         this.coordinates.push(xy);
                         this.grid.addShip(selectedCoordinates)
                         this.grid.placedShipCoordinates[selectedCoordinates] = 1;
                     } else if ((secondToLast[0] - lastCoordinates[0] < 0) && (xy[0] === lastCoordinates[0] + 1 && xy[1] === lastCoordinates[1])) {
                         this.coordinates.push(xy);
                         this.grid.addShip(selectedCoordinates)
                         this.grid.placedShipCoordinates[selectedCoordinates] = 1;
                     }
                 }
            }//   else {
            //      alert('this is an invalid position, please choose another.')
            //  }
         }
	}
}

const Ship = CreateShip()
