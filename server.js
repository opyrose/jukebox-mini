const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/roots.js", require ("./api/roots"));

app.use((req, res, next)=>{
    next({ status: 404, message: "Endpoint not found."})
})

app.use((error, req, res, next)=>{
        console.log(error);
        res.status(error.status ?? 500);
        res.json(error.message ?? "Sorry, its broken.")
})

app.listen(PORT, ()=>{
    console.log("Listening on port ${PORT}")
});