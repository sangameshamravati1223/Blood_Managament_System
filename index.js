// const express = require('express');
// const app = express ();
// app.use(express.json());
// const PORT = process.env.PORT || 4200;

// app.get("/status", (request, response) => {
//     const status = {
//        "Status": "Running"
//     };
//     console.log(request)
//     response.send(status);
//  });
// app.listen(PORT, () => {
//     console.log("Server Listening on PORT:",PORT);
//   });
const express = require('express');
const { insertData , getData } = require('./db.js');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors()); 
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/upload', (req, res) => {
  const formData = req.body;
  insertData(formData).then((data)=>{
    console.log("connected",data)
  }).catch((err)=>{
    console.log("err",err)
  })
})

  app.post('/login', (req, res) => {
    const loginData = req.body;
    getData(loginData).then((data)=>{
      res.status(200).send('Form data received successfully');
    }).catch((err)=>{
      console.log("err",err)
    })
  // getData().then(res=>console.log(res)).catch(err=>console.log(err))
 
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
