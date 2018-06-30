var socket = io();

socket.on('connect', function() {
	console.log('Connected to server');
});

socket.on('disconnect', function() {
	console.log('Disconnected from server');
});

socket.on('newMessage', function(message) {
	console.log('newMessage', message);
	var li = $('<li></li>');
	li.text(`${message.from}: ${message.text}`);

	$('#messages').append(li);
});

socket.on('createMessage', function(message) {
	console.log('createMessage', message);
});

socket.emit('createMessage', {
	from: 'Hiroki',
	text: 'Hey'
}, function(data) {
	console.log('From Server :', data);
});

$('#message-form').on('submit', function(e) {
	e.preventDefault();

	socket.emit('createMessage', {
		from: "User",
		text: $('[name=message]').val()
	}, function() {

	});
});