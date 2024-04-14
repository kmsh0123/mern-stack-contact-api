import ContactModel from "../Models/ContactModel.js"

export const getContact = async(req,res)=>{
    try {
    const contact = await ContactModel.find({},{_id : 1,name : 1,email : 1,phone : 1,address : 1,image : 1,createdAt : 1,updatedAt : 1});
    res.status(200).json(contact)
    } catch (error) {
    res.status(500).json({message : error.message});
    }
}
export const getContactId = async(req,res)=>{
    try {
    const {id} = req.params;
    const contact = await ContactModel.findById(id,{_id : 1,name : 1,email : 1,phone : 1,address : 1,image : 1,createdAt : 1,updatedAt : 1});
    res.status(200).json(contact)
    } catch (error) {
    res.status(500).json({message : error.message});
    }
}
export const postContact = async(req,res)=>{
    try {
    const contact = new ContactModel(req.body);
    await contact.save();
    res.status(200).json(contact)
    } catch (error) {
    res.status(500).json({message : error.message});
    }
}

export const putContactId = async(req,res)=>{
    try {
        const {id} = req.params;
        const contact = await ContactModel.findByIdAndUpdate(id,req.body);
        if(!contact){
           res.status(404).json({message : `Cannot find by ${id}`})
        }
        const updateContact = await ContactModel.findById(id);
        res.status(200).json(updateContact);
    } catch (error) {
        res.status(500).json({message : error.message});
    }
}

export const deleteContactId = async(req,res)=>{
    try {
        const {id} = req.params;
        const contact = await ContactModel.findByIdAndDelete(id);
        res.status(200).json(contact);
    } catch (error) {
        res.status(500).json({message : error.message});
    }
}
    
