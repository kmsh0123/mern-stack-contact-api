import express from "express";
import {deleteContactId, getContact, getContactId, postContact, putContactId}  from "../Controllers/ContactController.js";

const router = express.Router();

router.get("/",getContact);

router.get("/:id",getContactId);

router.post("/",postContact);

router.put("/:id",putContactId);

router.delete("/:id",deleteContactId);

export default router;