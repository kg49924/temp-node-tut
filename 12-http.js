//http module

const http = require('http')

const server = http.createServer((req,res)=>{
if(req.url === '/'){
    
res.write('Welcome to our homepage');
res.end()}

else if(req.url === '/about'){
    res.write('This is about page');
    res.end()
}
else{
res.end('<h1>Oops!<h1> <p>We cant seem to find page youre looking for<p>.')
}

})

server.listen(5000);
