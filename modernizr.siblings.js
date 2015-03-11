Modernizr.addTest('siblingadjacent', function(){
	return Modernizr.testStyles('#modernizr div {width:100px} #modernizr div + div {width:200px;display:block}', function(elem) {
		return elem.lastChild.offsetWidth == 200;
	}, 2);
});

Modernizr.addTest('siblinggeneral', function(){
	return Modernizr.testStyles('#modernizr div {width:100px} #modernizr div ~ div {width:200px;display:block}', function(elem) {
		return elem.lastChild.offsetWidth == 200;
	}, 2);
});
