const http=require("http");
const routeHandler=require("./routes/routes.js");

http.createServer(routeHandler).listen(3000);
console.log("server is running on port 3000");