//1- Restore ITIDB database

mongorestore -d ITIDB "D:\ITI\01- Still\MongoDB\D03\ITIDB"

//2- Display Instructors Full Name and Instructor Address.

//db.instructors.find({},{firstName:1,lastName:1,address:1,_id:0}).forEach(instructor=>{
//        print(`${instructor.firstName} ${instructor.lastName} : ${instructor.address.city} ${instructor.address.street} ${instructor.address.building}`)
//        })
        
db.instructors.aggregate([

{
$project:{

    address:{city:"$address.city",street:"$address.street",building:"$address.building"},
    fullName:{$concat:["$firstName"," ","$lastName"]}
    }//project
}
]);
        
//3- Display student full Name and Department Name for All Students

//let departmentResult = db.departments.find({},{name:1}).toArray(); 
//  
//db.students.find({},{firstName:1,lastName:1,_id:0,department:1}).forEach(student=>{
//     print(`${student.firstName} ${student.lastName} : ${departmentResult.find(department=>department._id==student.department).name}`)
//    })
  
  
db.students.aggregate([

{
    $lookup:{
        from:"departments",
        localField:"department",
        foreignField:"_id",
        as :"dept"
            }// lookup  
 }// stage
 ,
 {
     $project:
     {
           fullName:{$concat:["$firstName"," ","$lastName"]},
           dapartment:"$dept.name"
     }
 }// stage2
])
  
        
//4- Display student full Name and student Addresses City for All Students

//db.students.find({},{_id:0,firstName:1,lastName:1,addresses:1}).forEach(student=>{
//     let studentCities=student.addresses.map(address=>address.city);
//     print(`${student.firstName} ${student.lastName} : ${studentCities}`)
//})

db.students.aggregate([
    {
        $project:{
            address:{city:"$addresses.city"},
            fullName:{$concat:["$firstName"," ","$lastName"]}
            }//project
    }
]);


//5- Display student Name the students subjects

//let subjectsArray = db.subjects.find({}, { name: 1 }).toArray();
//
//db.students.find({}, { firstName: 1, lastName: 1, _id: 0, subjects: 1 })
//
//.forEach((student) => {
//    let studentSubjects = [];
//    student.subjects.forEach((subject) => {
//    studentSubjects.push(subjectsArray.find((element) => element._id == subject).name);
//    });
//    print(`${student.firstName} ${student.lastName} :` + studentSubjects);
//});

db.students.aggregate([
{
        $lookup:{
            from:"subjects",
            localField:"subjects",
            foreignField:"_id",
            as :"studentsubjects"          
            }// lookup  
 }// stage
 ,
 {
     $project:
     {
           fullName:{$concat:["$firstName"," ","$lastName"]},
           subjects:"$studentsubjects.name"
     }
 }// stage2
])

//6- Display student Names who study Jquery
db.students.aggregate([
    {
        $lookup:{
            from:"subjects",
            localField:"subjects",
            foreignField:"_id",
            as :"studentsubjects"           
        }// lookup  
     }// stage
     ,
     {
    $match:
         {
             "studentsubjects.name":{$all:["jquery"]}
         }           
    },
     {
         $project:
         {
               fullName:{$concat:["$firstName"," ","$lastName"]},
               subjects:"$studentsubjects.name"
         }
     }// stage2
])