const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));

app.set("view engine","ejs");

let items = ["Buy Chicken", "Cooked the Chicken", "Inihaw the Chicken"];
let works = [];
app.get("/",(req,res) => {

  let day = date.getDay();
  res.render("list",{listTitle: day, newListItems: items });
});

//home route root route
app.post("/",(req,res) =>{
   let item = req.body.todo;
   let todoType = req.body.todoType;
   //console.log(req.body);
   if(todoType === "Work"){
     works.push(item);
     res.redirect("/work");
   }else{
     items.push(item);
    // console.log(items);
     res.redirect("/");
   }

});


app.get("/work",(req,res) => {
  res.render("list",{listTitle: "Work", newListItems: works });
});

app.get("/about",(req,res) => {
  res.render("about");
});


app.listen("3000",() => {
  console.log("Server started on port 3000");
})
