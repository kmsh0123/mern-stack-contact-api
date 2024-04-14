import express from "express";
import {deleteContactId, getContact, getContactId, postContact, putContactId}  from "../Controllers/ContactController.js";

const router = express.Router();

router.get("/api/contact",getContact);

router.get("/api/contact/:id",getContactId);

router.post("/api/contact",postContact);

router.put("/api/contact/:id",putContactId);

router.delete("/api/contact/:id",deleteContactId);

export default router;