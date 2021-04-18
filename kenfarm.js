// //READING AND WRITING FILES IN NODE

 const  fs = require('fs');
 const http= require ('http');
 const url= require ('url');


//FILES

// //BLOCKING - SYNCHRONOUS WAY
// const textIn= fs.readFileSync('./hello.txt', 'utf-8') ;
// console.log(textIn);

// const textOut= `you probably already know: ${textIn}.\nCreated 0n $ {Date.now()} `;
// fs.writeFileSync('./Bye.txt', textOut);
// console.log('updated as shit!!!');

//NON- BLOCKING ASYNCHRONOUS WAY
//fs.readFile('./helloo.txt', 'utf-8', (err,data1)=>{

//     //error option
//     if (err) return console.log('ERROR2020 BRUH, CHECK AGAIN');


//     fs.readFile(`./${data1}.txt`, 'utf-8', (err,data2)=>{
//         console.log(data2);
//         fs.readFile(`./append.txt`, 'utf-8', (err,data3)=>{
//             console.log(data3);
//             //WRITING FILE
// fs.writeFile('./final.txt',` ${data2}\n${data3}`, 'utf-8', err=>{
//     console.log('your files have been merged/written');
//         });
//     });
// });
// console.log('READING and WRITING FILES ASYNCHRONOUSLY....%');


//SIMPLE SERVER

const ken0verview =fs.readFileSync(`${__dirname}/farm/templates/overview.html`, 'utf-8');
const kenCard =fs.readFileSync(`${__dirname}/farm/templates/card.html`, 'utf-8');
const kenproduct =fs.readFileSync(`${__dirname}/farm/templates/product.html`, 'utf-8');



const data =fs.readFileSync(`${__dirname}/devdata/data.json`, 'utf-8');
 const dataObj = JSON.parse(data);

const server= http.createServer((req,res)=> {
    const pathName = req.url;
    
//overview page
if (pathName === '/' || pathName ==='/overview'){
    res.setHeader('Content-Type','text/html');
    res.writeHead(200);

 res.end(ken0verview);
}
// nextpage
else if (pathName=== '/card'){
    res.setHeader('Content-Type','text/html');
    res.writeHead(200);


 res.end(kenCard);
}

//api page
else if(pathName=== '/api'){
    res.setHeader('Content-Type','text/html');
 res.writeHead(200);

res.end(kenproduct);
   
//error page
} else {
    res.writeHead(404,{'Content-Type':'text/html'

});
 res.end('<h1>PAGE NOT FOUND!!</h1>');
}
})


server.listen(8080, '127.0.0.1', ()=> {
    console.log('listening to request on port 8080')
});
