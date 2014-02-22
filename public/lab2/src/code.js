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

Rect.prototype.contains = function(x, y)
{
	return !(
		x < this.x ||
		y < this.y ||
		x > this.x + this.width ||
		y > this.y + this.height
	)
}

Rect.prototype.overlaps = function(r)
{
	return !(
		r.width  + r.x <= this.x ||
		r.height + r.y <= this.y ||
		           r.x >= this.x + this.width ||
		           r.y >= this.y + this.height
	)
}

Rect.prototype.is = function(r)
{
	return r === this
}

Rect.prototype.isEqual = function(r)
{
	return (
		r.x      === this.x &&
		r.y      === this.y &&
		r.width  === this.width &&
		r.height === this.height
	)
}
