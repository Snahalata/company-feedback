const express = require('express');
const router = express.Router();

const Feedback = require('../model/feedback.model');
const objectId = require('mongoose').Types.ObjectId;

router.get('/',(req,res,next)=>{
    Feedback.find()
    .exec()
    .then(data => {
        res.json(data);
    })
    .catch(next);
});

router.post('/',(req,res,next)=>{
    const feedback = new Feedback({
        email:req.body.email,
        rate:req.body.rate,
        idea:req.body.idea,
        performance:req.body.performance
     });
     feedback.save()
     .then(data => {
        res.json({status:true,message:"Feedback added successfuklly"});
     })
     .catch(next);
});
//update a feedback
router.put('/:id',(req,res,next)=>{
    if(!objectId.isValid(req.params.id)){
        return res.json({status:false,message:"Invalid user id"});
    }else{
        const feedback = {
            email:req.body.email,
            rate:req.body.rate,
            idea:req.body.idea,
            performance:req.body.performance
         }
         Feedback.findByIdAndUpdate(req.params.id,{$set:feedback},{new:true})
         .exec()
         .then(data =>{
             return res.json({status:true,message:'Feedback updated successsfully'});
         })
         .catch(next);
        }

    
});
//delete a feedback
router.delete('/:id',(req,res,next)=>{
    if(!objectId.isValid(req.params.id)){
        return res.json({status:false,msg:"Invalid user id"});
    }else{
        Feedback.findByIdAndRemove(req.params.id)
        .exec()
        .then(data =>{
            return res.json({status:true,message:'Feedback deleted successsfully'});
        })
        .catch(next);
    }
});
module.exports = router;