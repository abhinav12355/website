const express = require('express');
const hbs = require('hbs');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/views'));
const MongoClient=require('mongodb').MongoClient;
app.get('/', (req, res) => {
  res.render('login_page.hbs');
});

app.post('/login',(req,res) =>{
//console.log(req.body.username);
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) =>{
  if(err){
    return console.log('unable to connect');
  }
  console.log('connected');
  db.collection('todo').find({username:req.body.username}).toArray().then((docs)=>
{
    if(!docs[0]){
        console.log('not valid username');}
  else
  {
    if(docs[0].password===req.body.password)
    {
      console.log("welcome");
      res.render('index.hbs');
    }else{
      console.log("invalid user");
    }
  }
 },(err)=>{
  console.log('unable to fetch',err);
});
});
});

// var sessionChecker = (req, res, next) => {
//     if (req.session.user && req.cookies.user_sid) {
//         res.redirect('/dashboard');
//     } else {
//         next();
//     }
// };
app.post('/signup',(req,res) =>{
  MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) =>{
  if(err){
    return console.log('unable to connect');
  }
  console.log('connected');
  db.collection('todo').insertOne(
    {
    username:req.body.username,
    password:req.body.password
  }
  ,(err,result)=>{
  if(err)
  return console.log('unable to connect');
  console.log(JSON.stringify(result.ops,undefined,2))
});
  res.render('login_page.hbs');
});
});

app.post('/feedback',(req,res) =>{
  MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) =>{
  if(err){
    return console.log('unable to connect');
  }
  console.log('connected');
  db.collection('feedback').insertOne(
    {
    email:req.body.email,
    firstname:req.body.firstname,
    username:req.body.username,
    lastname:req.body.lastname,
    branch:req.body.branch,
    feedback:req.body.feedback
  }

  ,(err,result)=>{
  if(err)
  return console.log('unable to connect');
  console.log(JSON.stringify(result.ops,undefined,2));
    res.redirect('/main.html');
});
});
});

app.get('/logout',(req,res)=>{

    res.render('/login_page.hbs');
  });

app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Unable to handle request'
  });
});

app.listen(3000, () => {
  console.log('Server is up on port 3000');
});
//mongod.exe --dbpath mongo_data
