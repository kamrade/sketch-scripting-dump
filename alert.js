function alert(msg, title) {
	title = title || "Ooops!!";
	var app = [NSApplication sharedApplication];
	[app displayDialog:msg withTitle:title];
}

alert('message','title');
