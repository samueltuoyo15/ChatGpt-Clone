import {createConversation, saveConversation, getConversations, deleteConversation, getConversationById, generate, } from '../controllers/chatController';
import express from 'express';
const router = express.Router();

router.post('/newChat', createConversation)
router.get('/fetchChats', getConversations);
router.post('/saveChats', saveConversation);
router.get('/fetchChatId/:id', getConversationById)
router.delete('/conversation', deleteConversation)
router.post('/gpt', generate)
export default router;