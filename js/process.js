const debug = false

var reR = /r([0-9])$/
var reC = /c([0-9])$/


$(document).ready(() => {
	var game = new Game({ name: 'Player' }, null); //this is defined within the jQuery scope so it cannot be altered from the commandline

	game.Challenger.grid[0][0] = TileState.SHIP

	$('#mmenu').click(function() {
		window.history.back()
	})

	$('td').click((event) => {
		let target = event.target
		let x = reC.exec(target.id)[1]
		let y = reR.exec(target.parentElement.id)[1]

		if(debug)
			console.log('click detected at x: ' + x + ', y: ' + y)

		let table = target.closest('table')

		if(table.id == 'pGrid') {
			game.playerMove(x, y)
		}
	})
})