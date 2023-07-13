const express = require('express')
const router = express.Router()
router.post('/displaydataB2020',(req,res)=>{
    try {
        res.send([global.Btech2020Data])
    } catch (error) {
        console.log(error)
    }
})
module.exports = router;