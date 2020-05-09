const express = require("express");
var path = require("path");
const app = express();

const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});

app.use(express.urlencoded ({ extended: true }));
app.use(express.json());

app.get("/", function(request, response){
    response.sendFile(path.join(__dirname, "./public/home.html"));
}); 

app.get("/reserve", function(request, response){
    response.sendFile(path.join(__dirname, "./public/reserve.html"));
}); 

app.get("/tables", function(request, response){
    response.sendFile(path.join(__dirname, "./public/tables.html"));
}); 

app.get("/api/tables", function(request, response) {
    return response.json(tables); 
    
    for (let i = 0; i < tables.length; i++) {
        if (tables[i] === 6) {
            tables.push(waitingList);
            
        } else {
            tables.push(tables);
        }
    }

})



