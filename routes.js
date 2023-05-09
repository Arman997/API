const express = require('express')
const router = express.Router();

router.get('/search',async (req,res)=>{
    try{
        
        
    }
    catch(err){
        res.status(500).json({message: err.message})
    }


})

module.exports = router