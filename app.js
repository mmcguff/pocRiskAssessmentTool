const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//POST method to suppliing data nd getting back calculated result
app.post('/risks', upload.array(), async (req, res) =>{
    let risk = 'risk was not assigned';
    
     //This is where the magic happens.
     //We call a function here with the data presented in JSON to us to return what will be needed.  
   switch(req.body.state) { 
       case 'tx': risk = 'Hurricane';
       break;
       case 'ca': risk = "Wild Fire";
       break;
       case 'id': risk = "Winter StorM";
       break;
       default: risk = "House Fire";  //no matter what there is a risk even if no location is presented.  
   }

    res.send(risk);
})

//GET to return logic of that data perhaps

//GET to return responses


const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening on port ${port}...`));