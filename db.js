const Sequelize=require('sequelize')
//create db config
const db=new Sequelize({
    dialect:'mysql',
    database:'challengedb',
    username:'newuser',
    password:'userpass',

})

//create models
const Tasks=db.define('task',{
      name:{
          type:Sequelize.STRING,
          allownull:false
      },
      id:{
         type:Sequelize.INTEGER,
          primaryKey:true,
          autoIncrement:true,
      },
      description:{
        type:Sequelize.TEXT,
      },
      done:{
          type:Sequelize.BOOLEAN,
          defaultValue:false,
      },



})
module.exports={
    db,Tasks
}
