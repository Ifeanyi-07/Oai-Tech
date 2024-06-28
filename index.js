let http=require("http")
let path=require("path")
let fs=require("fs")

let server=http.createServer(function(req,res){

    let filepath=path.join(__dirname,req.url=="/" ? "index.html":req.url)

    let extname=path.extname(filepath)

    let contentType="text/html"

    switch(extname){
        case ".js":
            contentType="text/javascript"
            break;

        case ".css":
            contentType="text/css"
            break;

        case ".jpg":
            contentType="image/jpg"
            break;

        case ".webp":
            contentType="image/webp"
            break;

        case ".png":
            contentType="image/png"
            break;

        case ".mp4":
            contentType="video/mp4"
            break;
    }

    fs.readFile(filepath,function(err,content){
        if(err){
            if(err.code=="ENOENT"){
                fs.readFile(path.join(__dirname,"404.html"),function(err,content){
                    res.writeHead(200,{"content-Type":"text/html"})
                    res.end(content,"utf8")
                })
            }else{
                res.writeHead(500)
                res.end("sorry! Internal server error")
            }
        }else{
            res.writeHead(200,{"Content-Type":contentType})
            res.end(content,"utf8")
        }
    })


})

let port=9000
server.listen(port,function(){
    console.log("server is running " + port)
})