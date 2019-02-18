const url = require('url');

const myUrl = new URL('http://mywebsite.com:8000/hello.html?id=100&status=active');

//Serialized URL
console.log(myUrl.href);
 //Host(root domain)
 console.log(myUrl.host);
 //Hostname (does not get port)
 console.log(myUrl.hostname);

 //Pathname 
 console.log(myUrl.pathname);

 //serialized query everything after ? mark
 console.log(myUrl.search);
 //params object

 console.log(myUrl.searchParams);

 //Add param
 myUrl.searchParams.append('abc','123');
console.log(myUrl.searchParams); 

myUrl.searchParams.forEach((value,name) => console.log(`${name}:${value}`));
