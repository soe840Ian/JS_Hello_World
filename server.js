var express = require ( 'express' ) ;
var app = express () ;

app.use ( express.static( __dirname + "/public" ) ) ; 

app.get('/contactlist',function(req,res){
    console.log("I received a GET request")
    
    person1 = {
        name : 'Ming',
        email : 'Ming@email.com',
        number : '01-1111-1111'
    };
    
    person2 = {
        name : 'Kai',
        email : 'Kai@email.com',
        number : '02-2222-2222' 
    };
    
    person3 ={
        name : 'J',
        email : 'J@email.com',
        number : '03-3333-3333'
    };
    
    var contactlist = [ person1 , person2 , person3 ];
    res.json(contactlist);
});
  
app.listen ( 3000 ) ;
console.log ( "Server running on port 3000" ) ;