// 
// db.instructors.updateMany(
//     {
// //         _id:6, courses:"javascript" // condition for change value without knowing the index 
// //         _id:1
//      },
//     {
// //         $set:{firstName:"x",lastName:"y",salary:1000}
// //            $set:{address:{city:"cairo"}}
// //            $set:{"address.city":"cairo"}
// //         $inc:{salary:-100}
//         //**************arrays
//         //add elm
// //         $push:{courses:"es6"}
// //           $addToSet:{courses:"es6"}
//         //remove elm
// //         $pull:{courses:"es6"}
//         //change value for specifide index
// //         $set:{"courses.0":"javascript"}
//         //change inedx , 
// //         $set:{"courses.$":"js"}
//         
//     }
//     ,
//     {
// //         upsert:true
//     }
// );
    
/****************** delete ****************/
//deleteOne , deleteMany , delete
    
    
    
/**********************************************/

//autoIncrement


//1- get 
// db.instructors.count();
// 
// //2 get id
// db.instructors.find({}).sort({_id:-1})
// 
// //3 create collection for all ids --> collections
// 
// // counters {idStudents:1, idInstructors:1, idSubjects:1}
// 
// let instrcutorId=db.counters.findOne().idInstrcutors;
// db.instructors.insertOne(_id:instrcutorId );
// db.counters.updateOne({},{
//         $inc:{idInstructors:1}
//     })




















    
    
    
    
