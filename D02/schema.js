// craete collection with schema
// db.createCollection("mangers",{
//     validator:{
//         $jsonSchema:{
//             
//             
//             }//jsonSchema
//         
//         }//validtor
//    
//     });//options
// 

db.instructors.runCommand("collMod",{
    
    validator:{
            $jsonSchema:{
                    bsonType:"object",
                    required:["firstName","lastName"],
                    additionalProperties:false,
                    properties:{
                        _id:{bsonType:"number"},
                        firstName:{bsonType:"string"},
                        lastName:{bsonType:"string"},
                        age:{bsonType:"number"}
                        
                        }//properties
                
                
                }//jsonSchma
        }//validator
    });

// db.instructors.insertOne({_id:29,firstName:"eman"
//     ,lastName:"ahmed",city:"xxx"});
//     
// db.getCollectionInfos({name:"instructors"})


