const url=require("url");
const querystring=require("querystring");
const fs=require("fs");

const renderHTML=(path,res,req)=>{
    fs.readFile(path,null,(err,data)=>{
    if(err){
        res.writeHead(404);
        res.write("File not found");
    }else{
        console.log(path);
        res.write(data);
    }
    res.end();
    });
};

const routeHandler=(req,res)=>{
    
    const path= url.parse(req.url).pathname;
    
    console.log(path);

    switch(path){
        case "/":{
            
            renderHTML("./views/home.html",res,req);
            break;
        }
        case "/packages":{
            renderHTML("./views/packages.html",res,req);
            break;
        }
        case "/online_booking":{
            renderHTML("./views/online_booking",res,req);
            break;
        }
        case "/media":{
            renderHTML("./views/media",res,req);
            break;
        }
        case "/contact_us":{
            renderHTML("./views/contact_us",res,req);
            break;
        }
        
        case "/admin":{
            renderHTML("./views/admin",res,req);
            break;
        }
        default:{
            res.write("Page not found");
            res.end();
        }
    }
        };
module.exports=routeHandler;