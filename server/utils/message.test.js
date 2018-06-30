var expect = require('expect');

var { generateMessage, generateLocationMessage } = require('./message');

describe('generateMessage', () => {
	it('should generate correct message object', () => {
		var message = generateMessage('Hiroki', "Hey what\'s up");
		expect(message).toMatchObject({
			from: 'Hiroki',
			text: "Hey what\'s up"
		});
		expect(typeof message.createdAt).toBe('number');
	});
})

describe('generateLocationMessage', () => {

	it('should generate correct location object', () => {
		var from = 'Hiroki';
		var lat = '-20';
		var lon = '155';
		var location = generateLocationMessage(from, lat, lon);
		expect(location).toMatchObject({
			from,
			url: `https://www.google.com.au/maps?q=${lat},${lon}`
		});
		expect(typeof location.createdAt).toBe('number');
	});
})