document.addEventListener('DOMContentLoaded', function(){
	document.getElementById('grid-container').addEventListener('click', function(event) {
		if (event.target && event.target.matches("input.submit-button")) {
			event.preventDefault()
			newGrid = new Grid(document.getElementById('create-name').value)


		}
	})
	document.getElementById('insert-ships').addEventListener('click', function(event){
		size = event.target.id
		document.getElementById('ship-info').innerHTML = `This ship is ${size}, click on the grid to place the ship`
		currentShip = new Ship(event.target.innerHTML, newGrid, size)
		Ship.removeShip(size)



		document.getElementById('grid-container').addEventListener('click', function(event) {
			if (event.target && event.target.nodeName == `DIV`) {
				var coordinates = event.target.id
				currentShip.setCoordinates(coordinates)
				if (currentShip.coordinates.length === parseInt(size)) {
					newGrid.checkFinished()
				}
			}
		})

	})

	document.getElementById('firing-grid').addEventListener('click', function(event) {
		var firingCoordinate = event.target.id
		var currentGridId = document.querySelector('h2').id
		var currentGrid = Grid.all()[parseInt(currentGridId)]
		var opponentsGrid;
		Grid.all().forEach(function(grid) {
			if (grid.id !== currentGrid.id) {
				debugger
				opponentsGrid = grid
			}
		})
		
		currentGrid.fireTorpedo(firingCoordinate, opponentsGrid)

	})

});
