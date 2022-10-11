const express= require('express')
const mongoose= require('mongoose')
const connectDB = require('./db/connect')
require('dotenv').config()
import {json} from 'body-parser'
import {todoRouter} from './routes/todo'

const app= express()

app.use(json())
app.use(todoRouter)

const port= process.env.PORT || 3000


const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start()
// type Person={
//     name:string
// };

// function assert(condition:unknown,message:string)
// {
//     if(!condition)
//     throw new Error(message)
// }
// function reverSorted(input: readonly number[]): number[]{
//     return input.slice().sort().reverse();
// }




// type Point= [number,number]

// function move(point:Point, x:number,y:number)
// {
//     point[0]+=x;
//     point[1]+=y;
//     return point;
// }

// const point: Point=[0,0];

// const moved= move(point,10,10)

// console.log(moved)


// function createPerson(first:string, last:string)
// {
//    return {
//     first,
//     last,
//     fullname:`${first} ${last}`,
//    }
// }

// function logPerson(person: ReturnType<typeof createPerson>)
// {
//     console.log(
//         person.first,
//         person.fullname,
//     )
// }


// type user= {
// x:string,
// y:string
// }

// const info:Readonly<user>={
//    x:'john',
//     y:'gem'
// }


// type Pages= Record<
// 'Home'|'Service'|'Contact',
// {id:string,
// title:string}
// >