 // const express=require('express');
 // var app=express();
 //
 // app.get('/',(req,res)=>{
 //   res.send('<h1>hello express!!!</h1>');
 // });
 // app.listen(3000);
//----------------------------------------------------------

// const express=require('express');
// var app=express();
// app.get('/',(req,res)=>{
//   res.send({
//     name : 'vivek',
//     age : 25,
//     likes: ['ridding','watching movie']
//   });
// });
//
// app.get('/about',(req,res)=>{
//   res.send('about page------');
// });
//
// app.get('/bad',(req,res)=>{
// res.send({
//   errorMessage: 'unable to handle request'
// })  ;
// });
//
// app.listen(3000,()=>{
//   console.log('server is up on port no 30000-----');
// });

//------------------------------------------

// const express=require('express');
// var app=express();
// app.use(express.static(__dirname + '/public'));
// app.listen(3001,()=>{
//   console.log('server is up---');
// });


//--------------------------------------------------------
// const express=require('express');
// const hbs=require('hbs');
// var app=express();
// app.set('view engine','hbs');
//
// app.get('/about',(req,res)=>{
//   res.render('about.hbs');
// })
//
// app.listen(3000),()=>{
//   console.log('server is up on port no 30000');
// });


//------------------------------------------------------------
// const express=require('express');
// const hbs=require('hbs');
// var app=express();
// app.set('view engine','hbs');
//
// app.get('/about',(req,res)=>{
//   res.render('about.hbs',{
//     pagetitle : 'about page',
//     currentYear : new Date().getFullYear(),
//     passingName:'sharma'
//   })
// })
//
// app.listen(3000,()=>{
//   console.log('running on port 3000-----')
// })

//----------------------------------------------------------------------------------
const express=require('express');
const hbs=require('hbs');
var app=express();
const port=process.env.PORT || 3000;
app.set('view engine','hbs');
app.get('/',(req,res)=>{
  res.render('home.hbs',{
    pagetitle:'welcome to new page',
    currentYear : new Date().getFullYear(),
    address : 'khanna kolkata',
    currentTime : new Date().toLocaleDateString()
  })
})

app.listen(port,()=>{
  console.log('listening on port no ----',port);
})
