const express = require('express')
const path = require("path");
const cors = require('cors')

const app = express();
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', "*",'http://localhost:3000','http://10.12.17.6:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});
app.use(express.json());
app.use(express.static("public"));

app.use(express.static("./styles"));



const createPath = (page) => {
  return path.resolve(__dirname, `index.html`);
};

const router = require('./routes')

app.use('/api',router);

app.get("/", (req, res) => {
    res.sendFile(createPath())
    });

const axios = require('axios');

/* const data = {
  model: "gpt-3.5-turbo",
  messages: [
    {
      role: "user",
      content: "test",
    }
  ]
};

axios.post('https://api.openai.com/v1/chat/completions', data, {
  headers: {
    'Authorization': 'Bearer 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',
    'Content-Type': 'application/json'
  },
  // responseType: 'text' 
}).then((response) => {
  app.put("/", async (req, res) => {
    const prompt = response.data.choices[0].message.content;
    // console.log('Пришел запрос:'+prompt);
    // console.log(JSON.stringify(response.data));
    res.status(200).send({
      bot: response.data.choices[0].message.content
    });
   
});
  
}).catch((error) => {
  console.log(error); 
}); */



app.listen(3001, () =>
  console.log("наш сервер работает на http://localhost:3001")
);
