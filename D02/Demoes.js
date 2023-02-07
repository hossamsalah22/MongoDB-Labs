/******************************************
find({condition},{projection})
*******************************************/
// db.instructors.find({},{firstName:1,"address.city":1})
//****************** find by equallity  . anding 

// db.instructors.find({firstName:"mona"})
// db.instructors.find({firstName:"mazen",age:21})

//*********** embeded Object *****************
// age =21 and city=mansoura
// db.instructors.find({age:21,"address.city":"mansoura"});

//***********  comparisions Operators ******
//   gt ,lt, gte , lte , ne, in
//ages > 21
// db.instructors.find({age: {$gt:21} , lastName:"ahmed" });

// db.instructors.find({age:{$in:[22,23,28]}})

//************  Logical Operators 
//  $and , $or     top level operators   
// 
// db.instructors.find({
//             $or:[
//                     {age:{$gt:21}}
//                     ,
//                     {firstName:"mona"}
//             ]
//     });

/*******************  elements Operators*******/
//  $type $exists 

// db.instructors.find({age:{$exists:true}})
// db.instructors.find({age:{$type:"number"}})

/******************* array operators **********/

// db.instructors.find({courses:"js"},{courses:1})
// db.instructors.find({courses:{$all:["js","es6"]}},{courses:1})
// db.instructors.find({courses:{$size:3}})


/*****************************************************/
//    updateOne , updateMany , update
//    ({condition},{updates},{options})
// **************************************************

db.instructors.updateMany(
    //condition
    {
//        firstName:"Maha"
       _id:6 
    }
    ,
    //upadtes
    {
        //cahneg value for existing field 
//         $set:{lastName:"ali"}
        //add new field 
//         $set:{age:23}
        //add new filed fo all documents active:true
//         $set:{Active:true}
        //renaming for fileds
//         $rename:{Active:"active"}
        //remove filed 
//         $unset:{active:""}
        
        //*** delaing with embeded object 
        //change value 
//         $set:{"address.city":"mansoura"}
        //add property
//         $set :{"address.floor":10}
        //rename
//         $rename:{"address.floor":"address.floorNumber"}
        //remove property
//         $unset:{"address.floor":""}
        
    }
     ,
     //options
     {
         
     }
)










































































