log(' --- ---');

// insert data text to selected text layer and name it label
// if select more than 1 - error
var data = 'thana data';
var label = 'thana label';


var selected = context.selection[0];
log(selected.className());
var frame = selected.frame()
log(frame.y());
log(selected.stringValue());


[selected setStringValue: data];
[selected setName: label];
