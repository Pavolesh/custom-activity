const Postmonger = require("postmonger");

var connection = new Postmonger.Session();

connection.trigger('ready');

connection.on('initActivity', function(data){
    document.getElementById('configuration').value = JSON.stringify(data, null, 2);
});

connection.on('clickedNext', function(){
    var configuration = document.getElementById('configuration').value;
    connection.trigger('updateActivity', configuration);
});