const run = config => {

	//return a Promise
	return new Promise((resolve, reject) => {
		try {
			//do something useful here and return a complete status object
			resolve({
				status: 'complete',
				message: 'Sample plugin complete'
			});
		} catch(e) {
			//if anything goes wrong, return an error status object
			reject({
				status: 'error',
				error: e
			});
		}
	});
};

//Our plugin must expose a 'run' method
module.exports = skeletorPluginSample = () => (
	{
		run
	}
);