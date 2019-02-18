const fs = require('fs');
const path = require('path');

//create folder 
// fs.mkdir(path.join(__dirname,'/test'),{},err => {
// 	if (err)  throw err;
// 	console.log('Folder created...')
// });
 // Create and write to file
 // fs.writeFile(path.join(__dirname,'/test','hello.txt'),'Hello world !',err => {
 // 	if(err) throw err ;
 // 	console.log('File Written to....');
 // File append
 // 	fs.appendFile(path.join(__dirname,'/test','hello.txt'),' I love Nodejs',err => {
 // 	if(err) throw err ;
 // 	console.log('File Written to....');
 // });
 // });
 
 //read file
//  fs.readFile(path.join(__dirname,'/test','hello.txt'),'utf8',(err,data) => {
// 	if (err)  throw err;
// 	console.log(data)
// });

 //rename 

  fs.rename(path.join(__dirname,'/test','hello.txt'),path.join(__dirname,'/test','helloWord.txt'),err => {
	if (err)  throw err;
	console.log('File renamed...')
});
