var documentName = context.document.displayName();
log('The current document is named: ' + documentName);
var selectedLayers = context.selection;
var selectedCount = selectedLayers.count();

if (selectedCount == 0) {
  log('No layers are selected.');
} else {
  log('Selected layers:');
  for (var i = 0; i < selectedCount; i++) {
    var layer = selectedLayers[i];
    log((i+1) + '. ' + layer.name());
  }
};
