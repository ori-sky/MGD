var TILE_SIZE = 16

var drawtiles = function(ctx, tilemap, tileset)
{
	tilemap.forEach(function(rv, rk)
	{
		rv.forEach(function(cv, ck)
		{
			var srcx = tilemap[rk][ck] * TILE_SIZE
			var dstx = ck * TILE_SIZE
			var dsty = rk * TILE_SIZE
			ctx.drawImage(tileset, srcx, 0, TILE_SIZE, TILE_SIZE, dstx, dsty, TILE_SIZE, TILE_SIZE)
		})
	})
}

window.onload = function()
{
	var cvs = document.getElementById('canvas')
	var ctx = cvs.getContext('2d')

	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open('GET', 'tilemap.txt', false)
	xmlhttp.send()

	// create array[rows][cols] of numbers
	var tilemap = xmlhttp.responseText.split(/\s+/).map(function(v)
	{
		return v.split('').map(function(v) { return parseInt(v) })
	})

	var tileset = new Image();
	tileset.src = 'tileset.png'
	tileset.onload = drawtiles.bind(undefined, ctx, tilemap, tileset)
}
