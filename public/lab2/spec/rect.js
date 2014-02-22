describe('Rect', function()
{
	it('can be created', function()
	{
		var r = new Rect(10, 20, 40, 30)
		expect(r).toBeDefined()
	})

	describe('once created', function()
	{
		var r

		beforeEach(function()
		{
			r = new Rect(10, 20, 40, 30)
		})

		it('has the correct value of `x`', function()
		{
			expect(r.x).toBe(10)
		})

		it('has the correct value of `y`', function()
		{
			expect(r.y).toBe(20)
		})

		it('has the correct value of `width`', function()
		{
			expect(r.width).toBe(40)
		})

		it('has the correct value of `height`', function()
		{
			expect(r.height).toBe(30)
		})

		it('can be moved to a new location', function()
		{
			r.moveTo(50, 30)
			expect(r.x).toBe(50)
			expect(r.y).toBe(30)
		})

		it('can be moved by a given amount', function()
		{
			r.moveBy(30, 10)
			expect(r.x).toBe(40)
			expect(r.y).toBe(30)
		})

		it('can be tested against a point for collision', function()
		{
			expect(r.contains(15, 30)).toBe(true)
			expect(r.contains(10, 30)).toBe(true)
			expect(r.contains(15, 20)).toBe(true)
			expect(r.contains(50, 30)).toBe(true)
			expect(r.contains(15, 50)).toBe(true)
			expect(r.contains(10, 20)).toBe(true)
			expect(r.contains(50, 50)).toBe(true)
			expect(r.contains( 9, 30)).toBe(false)
			expect(r.contains(15, 19)).toBe(false)
			expect(r.contains(51, 30)).toBe(false)
			expect(r.contains(15, 51)).toBe(false)
			expect(r.contains( 9, 19)).toBe(false)
			expect(r.contains( 9, 51)).toBe(false)
			expect(r.contains(51, 19)).toBe(false)
			expect(r.contains(51, 51)).toBe(false)
		})

		it('can be tested against a Rect for collision', function()
		{
			expect(r.overlaps(new Rect(20, 30, 20, 10))).toBe(true)
			expect(r.overlaps(new Rect(10, 20, 40, 30))).toBe(true)
			expect(r.overlaps(new Rect( 0, 10, 60, 50))).toBe(true)
			expect(r.overlaps(new Rect(20, 10, 20, 20))).toBe(true)
			expect(r.overlaps(new Rect(20, 40, 20, 20))).toBe(true)
			expect(r.overlaps(new Rect( 0, 30, 20, 10))).toBe(true)
			expect(r.overlaps(new Rect(40, 30, 20, 10))).toBe(true)
			expect(r.overlaps(new Rect( 0, 10, 20, 20))).toBe(true)
			expect(r.overlaps(new Rect( 0, 40, 20, 20))).toBe(true)
			expect(r.overlaps(new Rect(40, 10, 20, 20))).toBe(true)
			expect(r.overlaps(new Rect(40, 40, 20, 20))).toBe(true)
			expect(r.overlaps(new Rect(60, 70, 50, 40))).toBe(false)
			expect(r.overlaps(new Rect(20, 10, 20, 10))).toBe(false)
			expect(r.overlaps(new Rect(20, 50, 20, 10))).toBe(false)
			expect(r.overlaps(new Rect( 0, 30, 10, 10))).toBe(false)
			expect(r.overlaps(new Rect(50, 30, 10, 10))).toBe(false)
			expect(r.overlaps(new Rect( 0, 10, 10, 10))).toBe(false)
			expect(r.overlaps(new Rect( 0, 50, 10, 10))).toBe(false)
			expect(r.overlaps(new Rect(50, 10, 10, 10))).toBe(false)
			expect(r.overlaps(new Rect(50, 50, 10, 10))).toBe(false)
		})

		it('can be compared to a Rect for reference equality', function()
		{
			expect(r.is(r)).toBe(true)
			expect(r.is(new Rect(10, 20, 40, 30))).toBe(false)
			expect(r.is(new Rect(20, 10, 30, 40))).toBe(false)
			expect(r.is(undefined)).toBe(false)
			expect(r.is(null)).toBe(false)
		})

		it('can be compared to a Rect for value equality', function()
		{
			expect(r.isEqual(r)).toBe(true)
			expect(r.isEqual(new Rect(10, 20, 40, 30))).toBe(true)
			expect(r.isEqual(new Rect(20, 10, 30, 40))).toBe(false)
			expect(r.isEqual(undefined)).toBe(false)
			expect(r.isEqual(null)).toBe(false)
		})
	})
})
