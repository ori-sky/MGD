var Rect = function(x, y, width, height)
{
	this.x = x
	this.y = y
	this.width = width
	this.height = height
}

Rect.prototype.moveTo = function(x, y)
{
	this.x = x
	this.y = y
}

Rect.prototype.moveBy = function(x, y)
{
	this.x += x
	this.y += y
}
