const express=require('express')
const {db,Tasks}=require('./db')

const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(__dirname+'/html'))

app.get('/tasks',async (req,res)=>{
    const tasks=await Tasks.findAll()
    res.json(tasks)
})
app.post('/tasks',async(req,res)=>{
    const newTask=await Tasks.create({
        name:req.body.name,
        description:req.body.desc,
        done:false,
    })
    console.log(newTask)
    res.json({success:true})
})
db.sync().then(()=>{
    app.listen(4444,()=>{
        console.log('Server started')
    })
})
.catch((err)=>{
    throw err
})