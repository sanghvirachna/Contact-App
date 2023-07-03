const asyncHandler = require('express-async-handler');
const Contact = require('../models/contactModels');

//@desc Get all contacts
//@route GET /api/contacts
//@access private

const getContacts =asyncHandler(async (req,res) => {
    const contacts = await Contact.find({user_id:req.user.id});
    res.status(200).send(contacts)
})

//@desc Create New contacts
//@route POST /api/contacts
//@access private

const createContact = asyncHandler(async (req,res) => {
    console.log(req.body)
    const {name,email,phone} = req.body;

    if(!name || !email || !phone){
        res.status(400)
        throw new Error('Please fill all the fields')
    }
    const contact = await Contact.create({
        name,
        email,
        phone,
        user_id:req.user.id
    })
    res.status(201).json(contact)
})

//@desc Get contact by id
//@route Get /api/contacts/:id
//@access private

const getContact = asyncHandler(async (req,res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404).json({ error: 'Contact not found' })
        throw new Error('Contact not found')
    }

    res.status(200).json(contact)
})

//@desc Update contacts
//@route PUT /api/contacts/:id
//@access private

const updateContact = asyncHandler(async (req,res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404).json({error:'Contact not found'})
        throw new Error('Contact not found')
    }

    if(contact.user.__id.toString() !== req.user.id){
        res.status(401).json({error:'Not authorized'})
    }
    const updatedContact =  await Contact.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.status(200).json(updatedContact)
})





//@desc Delete contacts
//@route DELETE /api/contacts/:id
//@access private

const deleteContact = asyncHandler(async (req,res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404).json({error:'Contact not found'})
        throw new Error('Contact not found')
    }
    
    await Contact.deleteOne({ _id: req.params.id }); // Use deleteOne instead of remove
    res.status(200).json(contact)
})

module.exports = {getContacts ,createContact,getContact ,updateContact,deleteContact};