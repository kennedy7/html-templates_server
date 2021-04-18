 app.get('/',(request,response)=>{
    
    readfile('./js.html', 'utf8',(err,html)=>{

        if(err){
            response.status(500).send('sorry,out of order')

        }
    
        response.send(html);
    })
});

app.listen(process.env.PORT || 3000, () => console.log('app available on http://localhost:3000'))