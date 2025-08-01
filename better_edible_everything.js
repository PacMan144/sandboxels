window.addEventListener('load', function() {
	for (var element in elements) {
		elements[element].isFood = true;
	}
	elements.head.isFood = true;
	elements.body.isFood = true;
});
