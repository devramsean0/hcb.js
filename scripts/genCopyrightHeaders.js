const fs = require('fs').promises;
const path = require('path');
const { name, version } = require('../package.json');

const allowedExtensions = ['.js', '.mjs', '.ts'];
async function scanFileTree(directory, fileFunction) {
	try {
		// Read the contents of the directory
		const items = await fs.readdir(directory);

		// Iterate through each item (file or directory)
		for (const item of items) {
			const itemPath = path.join(directory, item);

			// Get the file stats
			const stats = await fs.stat(itemPath);

			if (stats.isFile()) {
				// Check if the file has an allowed extension
				const fileExtension = path.extname(itemPath);
				if (allowedExtensions.includes(fileExtension)) {
					// Execute the fileFunction on the file
					fileFunction(itemPath);
				}
			} else if (stats.isDirectory()) {
				// Recursively call the function on the subdirectory
				await scanFileTree(itemPath, fileFunction);
			}
		}
	} catch (err) {
		console.error('Error scanning file tree:', err);
	}
}

async function processFile(filePath) {
	const readfile = await fs.readFile(filePath, 'utf8');
	const header = `// Package Name: ${name}\n// Version: ${version}\n// Generated at: ${new Date().toISOString()}\n// Copyright: ${new Date().getFullYear()} Sean Outram`;
	const newFile = `${header}\n\n${readfile}`;
	await fs.writeFile(filePath, newFile);
	console.log(`Added header to: ${filePath}`);
}
(async () => {
	console.log('Began scanning the file tree');
	const startDirectory = `${process.cwd()}/dist`;
	await scanFileTree(startDirectory, processFile);
	console.log('Finished scanning the file tree');
})();
