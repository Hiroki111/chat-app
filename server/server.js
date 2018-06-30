const express = require('express');
const http = require('http');
const path = require('path');
const socketIO = require('socket.io');

const { generateMessage } = require('./utils/message');
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));
io.on('connection', (socket) => {
	socket.emit('newMessage', generateMessage('Admin', 'Welcome to my chat app'));
	socket.broadcast.emit('createMessage', generateMessage("Admin", "New user joined."));

	socket.on('createMessage', (message, callback) => {
		console.log('create message', message);

		io.emit('newMessage', generateMessage(message.from, message.text));
		callback('Your message was recieved by Admin');
	});
	socket.on('disconnect', () => {
		console.log('User was disconnected');
	});
});
server.listen(port, () => {
	console.log(`Server is up on ${port}`);
});
module.exports = {
	app
};