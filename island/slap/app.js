var app = require('express')();  
var io = require('socket.io').listen(25543);
var position_x = 0;
var position_y = 0;
var position_z = 0;
io.on('connection', function(socket) {  
    socket.emit('position', { pos: {x: position_x, y: position_y, z: position_z} });

    socket.on('update_position', function(data) {
    	if(data && data.position){
    		position_x = data.position.x;
    		position_y = data.position.y;
    		position_z = data.position.z;
    		io.emit('position', { pos: {x: position_x, y: position_y, z: position_z} });
    	}
    });

});