const express = require('express')
const router = express.Router()
const candidatemodel = require('../models/model')


router.get("/candidates/delete/:id",(req,res)=>{
    candidatemodel.findOne({__id:req.params.id}).
    then( ()=>{
    candidatemodel.deleteOne({__id:req.params.id})
    .then(()=>{console.log('deleted record successfully')})
    .catch((err)=>{console.log('unable to delete record')})
    })
    .catch(()=>{console.log('unable to find record')})
})
router.get("/candidates/add",(req,res)=>{
    console.log(req.body)
    const data={
        name:"student",
        gender:"male",
        email:"something@somemail.com",
        phone:"7432947123",
        organizaton:"fujitsu",
        timestamp: 1598874231230
    }

    const instance = new candidatemodel(data)
    instance.save()
    .then((data)=>{console.log('data added successfully: '+data)})
    .catch((err)=>{console.log('error adding data to candidates : '+err)})

})

router.get("/candidates",(req,res)=>{
       candidatemodel.find()
       .then((data)=>{console.log('data : '+data)})
       .catch((err)=>{console.log('error : '+err)})

})

router.get("/test",(req,res)=>{
          res.json({test:'successful'})
})

module.exports = router