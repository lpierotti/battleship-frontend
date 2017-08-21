document.addEventListener('DOMContentLoaded', function(){
	var newGrid = new Grid;

	document.getElementById('insert-ships').addEventListener('click', function(event){
		var size = event.target.id 
		document.getElementById('ship-info').innerHTML = `This ship is ${size}, click on the grid to place the ship`
		var currentShip = new Ship(event.target.innerHTML, newGrid, size)
		Ship.removeShip(size)
		document.getElementById('grid-container').addEventListener('click', function(event) {
			var coordinates = event.target.id
			checkPosition(currentShip)
		})


	})

});

