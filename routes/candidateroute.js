require('dotenv').config()
const express = require('express')
const router = express.Router()
const candidatemodel = require('../models/model')
const nodemailer = require('nodemailer') 

function runmailer( applicant )
{
    if(applicant.length === 0)
   {
     console.log('no mail specified')
     return
    }
    let transporter = nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:process.env.EMAIL,
            pass:process.env.PASSWORD
        }
    });

    let mailoptions = {
        from:process.env.EMAIL,
        to:applicant,
        subject:'notify',
        text:'Thank You for Registering with OLTU. Your Response has been recorded. Kindly wait for someone from the team to get back to you.'
    }

    transporter.sendMail(mailoptions, (err,data)=>{
     if(err)
     console.log('email not sent')
     else
     console.log('email sent')
    })
}
router.delete("/candidates/delete/:id",(req,res)=>{
    candidatemodel.findOne({_id:req.params.id}).
    then( ()=>{
    candidatemodel.deleteOne({_id:req.params.id})
    .then(()=>{console.log('deleted record successfully')})
    .catch((err)=>{console.log('unable to delete record')})
    })
    .catch(()=>{console.log('unable to find record')})
})
router.post("/candidates/add",(req,res)=>{
    console.log(req.body)
    const data=req.body
    const recepient=req.body.email
    const instance = new candidatemodel(data)
    instance.save()
    .then((data)=>{
        console.log('data added successfully')
        runmailer(recepient)
    })
    .catch((err)=>{console.log('error adding data to candidates : '+err)})

})

router.get("/candidates",(req,res)=>{
       candidatemodel.find()
       .then((data)=>{console.log('data successfully fetched' )
    res.json(data)
    })
       .catch((err)=>{console.log('error : '+err)})

})

router.get("/test",(req,res)=>{
          res.json({test:'successful'})
})

module.exports = router