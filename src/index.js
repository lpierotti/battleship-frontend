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

});
