var http = require('http');
var fs = require('fs');
var path = require('path');

var server = http.createServer((req,res)=>{
    if(req.url === '/anasayfa'){
        console.log(req.url);
        res.writeHead(200,{
            'Content-Type':'text/html; charset=utf-8'
        })
        fs.readFile(path.join(__dirname,'htmlweb','index.html'),'utf-8',(err,data) => {
            if(err){
                res.writeHead(500,{'Content-type':'text/html; charset=utf-8'})
                res.write("Sunucu Hatası!-Sever Error")
                res.end()
                return
            }
            res.write(data)
            res.end()
        });
    }
    else{
        res.writeHead(404, {
            'Content-Type':'text/html charset=utf-8'
        });
        res.write("404not found")
        res.end()
    }
})

server.listen(9985,()=>{
    console.log("Sunucu başarılı bir şekilde aktifleştirilmiştir!!");
})