'use strict';

/* Directives */


angular.module('chaocoolate.directives', []).directive('chao:click', function(expression, compiledElement) {
	var compiler = this;
	return function(linkElement) {
		var scope = this;
		linkElement.on('click', function(event) {
			console.log('aaa');
			event.stopPropagation();
		});
	};
});