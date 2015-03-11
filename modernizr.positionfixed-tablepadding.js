/**
 * Test if browser supports padding in elements which behave like tables
 * and are positioned fixed.
 */

Modernizr.addTest('positionfixed-tablepadding', function(){

	return Modernizr.testStyles('#modernizr', function(elem) {
		var
			doc = document,
			outer = doc.createElement('div'),
			inner = doc.createElement('div')
		;

		outer.style.position = 'fixed';
		outer.style.display = 'table';
		outer.style.padding = '100px 0';

		inner.style.display = 'table-cell';
		inner.style.height = '200px';
		inner.text = 'test';

		outer.appendChild(inner);
		elem.appendChild(outer);

		return outer.clientHeight === 400;
	});
});
