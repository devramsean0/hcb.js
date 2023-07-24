const fs = require('fs/promises');

console.log('Adding headers to all files in DIST');
(async () => {
	const files = await fs.readdir('dist');
	for (const file of files) {
		const stats = await fs.stat(`dist/${file}`);
	}
	console.log(files);
})();
