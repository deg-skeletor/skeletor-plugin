/*
	The run() method is the primary entry point for your plugin.
	The config parameter contains a configuration object specific to your plugin.
	The options paramter contains useful utilities and  
*/
const run = (config, options) => {

	/*
		If you need to know if your plugin is being run as a result of a change 
		to a file, you can access the file via options.source.filename
	*/
	const sourceFile = options.source ? options.source.filename : null;

	/* 
		If your plugin needs to display information to the user, you can use
		the logger instance via options.logger
	*/
	options.logger.log('Hello there!');

	/* run() must return a Promise */
	return new Promise((resolve, reject) => {
		try {
			/* Make your plugin do something useful here */

			/* Once your plugin is finished, return a complete status object */
			resolve({
				status: 'complete',
				message: 'Sample plugin complete'
			});
		} catch(e) {
			/* If anything goes wrong, return an error status object */
			reject({
				status: 'error',
				message: e.message
			});
		}
	});
};

/* Your plugin must expose a run() method */
module.exports = skeletorPluginSample = () => (
	{
		run
	}
);