var TileMap = function(path)
{
	var xmlhttp = new XMLHttpRequest()
	xmlhttp.open('GET', path, false)
	xmlhttp.send()

	// create array[rows][cols] of numbers
	this.map = xmlhttp.responseText.split(/\s+/).map(function(v)
	{
		return v.split('').map(function(v) { return parseInt(v) })
	})

	this.rows = this.map.length
	this.cols = this.map[0].length

	this.toString = function() { return xmlhttp.responseText }
}

var TileSet = function(tile_size)
{
	this.tile_size = tile_size
	this.tilemap = []
}

TileSet.prototype.load = function(path, callback)
{
	this.tileset = new Image()
	this.tileset.src = path
	this.tileset.onload = callback
}

TileSet.prototype.draw = function(ctx)
{
	var draw_b = ctx.drawImage.bind(ctx, this.tileset)
	this.tilemap.map.forEach(function(rv, rk)
	{
		rv.forEach(function(cv, ck)
		{
			var s = this.tile_size
			draw_b(s * this.tilemap.map[rk][ck], 0, s, s, s * ck, s * rk, s, s)
		}.bind(this))
	}.bind(this))
}

window.onload = function()
{
	var cvs = document.getElementById('canvas')
	var ctx = cvs.getContext('2d')

	var TILE_SIZE = 16
	var ts = new TileSet(TILE_SIZE)
	ts.tilemap = new TileMap('tilemap.txt')
	ts.load('tileset.png', ts.draw.bind(ts, ctx))
}
