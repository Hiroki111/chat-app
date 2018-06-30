var expect = require('expect');

var { generateMessage } = require('./message');

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