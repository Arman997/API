const express = require('express')
const router = express.Router();
const axios = require('axios');


router.get('/search', async(req,res)=>{
    // content = req.body.message;
    try{
        // res.status(201).json(content)
        const data = {
            model: "gpt-3.5-turbo",
            messages: [
              {
                role: "user",
                content: req.body.message,
              }
            ]
          };
          
          await axios.post('https://api.openai.com/v1/chat/completions', data, {
            headers: {
              'Authorization': 'Bearer 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',
              'Content-Type': 'application/json'
            },
            // responseType: 'text' 
          }).then((response) => {
              res.status(200).send({
                bot: response.data.choices[0].message.content
            /* .put("/", async (req, res) => {
              const prompt = response.data.choices[0].message.content;
              // console.log('Пришел запрос:'+prompt);
              // console.log(JSON.stringify(response.data));
              }); */
             
          });
            
          }).catch((error) => {
            res.status(501).send({error})
          });

        
    }
    catch(err){
        res.status(500).json({message: err.message})
    }


})

module.exports = router