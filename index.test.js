const samplePlugin = require('./index');

test('run() returns a complete status object', () => {
	const config = {};

	const expectedResponse = {
		status: 'complete',
		message: 'Sample plugin complete'
	};

	expect.assertions(1);
	return samplePlugin().run(config)
		.then(response => {
			expect(response).toEqual(expectedResponse);
		});
});