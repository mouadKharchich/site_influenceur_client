module.exports=(Sequelize,dataType)=>{

 //-----create table client 
  const Interet=Sequelize.define("Interet",{
    interetNom:{
      type:dataType.TEXT,
      allowNull:false,
      unique:true
     } 
  });
   
  
  return Interet;
}