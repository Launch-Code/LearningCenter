onready(function() {
    new Flow(new DataSource(window['launch-data'], ['key', 'from']), document.getElementById("choice-container"));
});