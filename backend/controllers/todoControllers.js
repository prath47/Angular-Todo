const todoModel = require('../models/todoModels');
const {verifyToken} = require("../helpers/authentication");

const handleToDoCreate = async (req, res) => {
    try {
        const {title, description, token} = req.body;
        // const getUser = await verifyToken(token);
        // if (!getUser) {
        //     return res.status(400).json({message: "Not authorized"});
        // }
        const newTodo = await todoModel.create({
            title,
            description,
            // userEmail: getUser.email
        });
        
        console.log(newTodo)
        return res.status(201).json(newTodo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const handleToDoGet = async (req, res) => {
    try {
        // const {token} = req.body;
        // const getUser = await verifyToken(token);
        // if (!getUser) {
        //     return res.status(400).json({message: "Not authorized"});
        // }
        const todos = await todoModel.find({});
        return res.status(200).json(todos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const deleteToDo = async (req, res) => {
    try {
        const {id, token} = req.body;
        // const getUser = await verifyToken(token);
        // if (!getUser) {
        //     return res.status(400).json({message: "Not authorized"});
        // }
        const todo = await todoModel.findByIdAndDelete({_id:id});
        if (!todo) {
            return res.status(404).json({message: "Todo not found"});
        }
        return res.status(200).json({message: "Todo deleted"});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {handleToDoCreate, handleToDoGet, deleteToDo};