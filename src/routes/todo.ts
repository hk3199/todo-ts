import { json } from "body-parser"
import { Todo } from "../../models/todo"
import { Request, Response } from "express"
import { createTodo, getTodo, getTodoID } from '../../controllers/todo'
// import {getTodoID} from "../../controllers/todo"
const express= require('express')

const router=express.Router()

router.get('/api/todo',getTodo)
router.post('/api/todo',createTodo)
router.get('/api/todo/:id',getTodoID)

export {router as todoRouter}

// router.get('/api/todo', async (req: Request, res: Response) => {
//     const todo = await Todo.find({})
//     
//   })

