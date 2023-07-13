const express = require('express')
const router = express.Router()


router.post('/displaydata',(req,res)=>{
    try {
        res.send([global.faculty])
    } catch (error) {
        console.log(error)
    }
})
router.post('/displaydataB2020',(req,res)=>{
    try {
        res.send([global.B2020Data])
    } catch (error) {
        console.log(error)
    }
})
router.post('/displaydataB2021',(req,res)=>{
    try {
        res.send([global.B2021Data])
    } catch (error) {
        console.log(error)
    }
})
router.post('/displaydataB2022',(req,res)=>{
    try {
        res.send([global.B2022Data])
    } catch (error) {
        console.log(error)
    }
})
router.post('/displaydataM2021',(req,res)=>{
    try {
        res.send([global.M2021Data])
    } catch (error) {
        console.log(error)
    }
})
router.post('/displaydataM2022',(req,res)=>{
    try {
        res.send([global.M2022Data])
    } catch (error) {
        console.log(error)
    }
})
router.post('/displaydatacompletedProject',(req,res)=>{
    try {
        res.send([global.cpdata])
    } catch (error) {
        console.log(error)
    }
})


module.exports = router;