import express from 'express';
import { verifyAdmin } from '../utils/VerifyToken.js';
import { createRoom, deleteRoom, getRoom, getRooms, updateRoom, updateRoomAvailability } from '../controllers/room.js';
import Room from '../models/Room.js';


const router = express.Router();


// CREATE
router.post("/:hotelid", verifyAdmin, createRoom);

// UPDATE
router.put("/availability/:id", updateRoomAvailability);
router.put("/:id", verifyAdmin, updateRoom); 


// DELETE
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom); 


// GET
router.get("/:id", getRoom); 

// GET ALL
router.get("/", getRooms);  



export default router