import mongoose, { mongo } from 'mongoose'


interface ITodo{
  title:string,
  description:string
}

interface todoModelInterface extends mongoose.Model<TodoDoc> {
  build(attr:ITodo):any
}


//the extend keyword means, 
// “take all properties of the existing mongoose.Document interface, add them to our new interface TodoDoc”,

interface TodoDoc extends mongoose.Document {
  title:string,
  description:string
}

//1st step

const  todoSchema= new mongoose.Schema({
  title:{
    type:String,
    required:true
  },
  description:{
    type:String,
    required:true
  }
})


todoSchema.statics.build= (attr:ITodo) => {     
  return new Todo(attr)
}


const Todo= mongoose.model<TodoDoc,todoModelInterface>('Todo',todoSchema)

Todo.build({
  title:'pseudo title',
  description:'describe'
})

//calling a function build to create an instance of our Todo model

// const build= (attr:ITodo) => {     // attr expects an objest which must conatin a title and descriptipn properties of type string
//   return new Todo(attr)
// }




export {Todo}

// interface ITodo {
//   title: string;
//   description: string;
// }

// interface todoModelInterface extends mongoose.Model<TodoDoc> {
//   build(attr: ITodo): TodoDoc
// }

// interface TodoDoc extends mongoose.Document {
//   title: string;
//   description: string;
// }

// const todoSchema = new mongoose.Schema({
//   title: {
//     type: String,
//     required: true
//   },
//   description: {
//     type: String, 
//     required: true
//   }
// })

// todoSchema.statics.build = (attr: ITodo) => {
//   return new Todo(attr)
// }

// const Todo = mongoose.model<TodoDoc, todoModelInterface>('Todo', todoSchema)

// Todo.build({
//   title: 'some title',
//   description: 'some description'
// })

// export { Todo }
