import { Request,Response } from "express"
import { Todo } from "../models/todo"

const getTodo=  async (req:Request,res:Response) => {
    const todo = await Todo.find({})
    return res.status(200).send(todo)
    // return res.send('get is reached')
  }


const getTodoID= async(req:Request, res:Response) => {
      try {
        const {id:todoID}= req.params
       const todo=await Todo.findOne({_id:todoID}) //you missed under score 
       if(!todo)
       {
        return res.status(404).json({mssg:`NO TASK WITH ID: ${todoID}`})
       }

       res.status(200).json({todo})
        
      } catch (error) {
        res.status(500).json({mssg:error})
      } 
              
}

const createTodo= async (req:Request,res:Response) => {
    
    const {title,description}= req.body   // you did req.params
    const todo= Todo.build({title,description})
    await todo.save()
    return res.status(200).send(todo)

}


export {getTodoID,createTodo,getTodo}
    //    try {
    //     const {id:taskID}=req.params  //taskID is alias
    //     const task = await Task.findOne({_id:taskID})
    //         //time stamp 1:54 IMP to put return
    //     if(!task)
    //     {
    //         return res.status(404).json({mssg:`NO TASK WITH ID: ${taskID}`})
    //     }

    //     res.status(200).json({task})
    // } catch (error) {
    //     res.status(500).json({mssg:error})
    // }


    // const {title,description}= req.body

    // const todo= Todo.build({title,description})
    // await todo.save()
    // return res.status(200).send(todo)