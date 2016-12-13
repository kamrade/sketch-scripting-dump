(function(){
		var length = context.selection.count();
		log('selected ' + length + ' items');
		var s = context.selection[0];
		var copy = s.duplicate();
		log(s);
		log(copy);
		var frame = copy.frame();
		frame.y = frame.y() + 10;
		copy.select_byExpandingSelection(true, false);
}());
