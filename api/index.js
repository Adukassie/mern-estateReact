import express from "express";
const app = express();

app.listen(3000, () => {
  console.log("server listening on port 3000!!");
});
app.get("/", function(req, res) {
    res.end('Welcome')
});
