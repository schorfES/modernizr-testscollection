Modernizr.addTest('cssvhunit-buggy', function(){
	return Modernizr.testStyles('#modernizr {height:50vh}', function(elem) {
		var
			expected = Math.round(window.innerHeight * 0.5),
			current = elem.clientHeight
		;

		// Test if element height is in range of relative window height, expect
		// some rendering rounding issues by testing +/-1 pixels...
		return !(expected - 1 < current && current < expected + 1);
	}, 2);
});
