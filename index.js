const Logger = require('./logger');
const fs = require('fs');
const path = require('path');

const logger = new Logger();

if (!fs.existsSync(path.join(__dirname,'/logs'))) {
    fs.mkdir(path.join(__dirname,'/logs'),{},err => {
		if (err) throw err ;
		console.log('Folder created ..');
	});
};



logger.on('message',(data) => {
	fs.writeFile(path.join(__dirname,'/logs','logs.txt'),'', err => {
		if (err) throw err ;
	
		// File append
		fs.appendFile(path.join(__dirname,'/logs','logs.txt'),JSON.stringify(data)+'\r\n',err => {
			if(err) throw err ;
			console.log('File Written to....');
		});
		console.log("successfully loged..");
	});
});
logger.log('hello world',new Date());
logger.log('hello',new Date());
