const mongoose = require('mongoose')

const connectDB=(url:string) => {
    return mongoose.connect(url,{})
    .then(()=>{console.log('connected to db...')})
    .catch((error:Error)=>{console.log(error)})
}

// const connectDB= (url:string) => {
//     return mongoose.connect(url,{
//         // useNewUrlParser: true,
//         // useCreateIndex: true,
//         // useUnifiedTopology: true,
//         // useFindAndModify:false,
//         })
//         .then(()=>{console.log('connected to db...')})
//         .catch((error:Error)=>{console.log(error)})

//     }

module.exports =connectDB

