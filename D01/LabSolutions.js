//
//let instructorsArray=[{_id:6,firstName:"noha",lastName:"hesham",
//                age:21,salary:3500,
//                address:{city:"cairo",street:10,building:8},
//                courses:["js","mvc","signalR","expressjs"]},
//                
//                {_id:7,firstName:"mona",lastName:"ahmed",
//                age:21,salary:3600,
//                address:{city:"cairo",street:20,building:8},
//                courses:["es6","mvc","signalR","expressjs"]},
//                
//                {_id:8,firstName:"mazen",lastName:"mohammed",
//                age:21,salary:7040,
//                address:{city:"Ismailia",street:10,building:8},
//                courses:["asp.net","mvc","EF"]},
//                
//                {_id:9,firstName:"ebtesam",lastName:"hesham",
//                age:21,salary:7500,
//                address:{city:"mansoura",street:14,building:3},
//                courses:["js","html5","signalR","expressjs","bootstrap"]}
//				
//                ];
//
//db.instructors.insertMany(instructorsArray);


//1- Display all documents in instructors collection
db.instructors.find({})

//2-Display all instructors with salaries greater than 4000 (only show firstName and salary)
db.instructors.find({salary:{$gt:4000}},{firstName:1, salary:1})

//3- Display all instructors with ages less than or equal 25.
db.instructors.find({age:{$lte:25}})

//4- Display all instructors with city mansoura and sreet number 10 or 14 only display (firstname,address,salary). 
db.instructors.find({"address.city":"mansoura", "address.street":{$in:[10,14]}},{firstName:1, address:1, salary:1})

//5- Display all instructors that have js and jquery in their courses (both of them not one of them).
db.instructors.find({courses:{$all:["js","jquery"]}})

//6- Display number of courses for each instructor and display first name with number of courses.  
db.instructors.find({courses:{$exists:true}},{firstName:1,courses:1})
                    .forEach( instructor => {print(instructor.firstName+" "+instructor.courses.length)})
                    
//7-  Write mongodb query to get  all instructors that have firstName and lastName properties , 
//sort them by firstName ascending then by lastName descending and finally display their data FullName and age                

db.instructors.find({firstName:{$exists:true}, lastName:{$exists:true}},{firstName:1,lastName:1, age:1}).sort({firsName:1, lastName:-1})
                    .forEach( instructor => {print("FullName :" + instructor.firstName+" "+instructor.lastName + ", Age: " + instructor.age)})

//8- Delete instructor with first name “ebtesam” and has only  5 courses in courses array
db.instructors.deleteMany({firstName:"ebtesam", courses:{$size:5}})

//9- Add active property to all instructors and set its value to true. 
db.instructors.updateMany({},
{
    $set:{active:true}},
{})

//10- Change “EF” course to “jquery” for “mazen mohammed” instructor (without knowing EF Index in courses array)

db.instructors.updateMany(
{
    courses:"EF"},
{
    $set:{"courses.$":"jquery"}},
{
    })

//11- Add jquery course for “noha hesham”.

db.instructors.updateMany(
{
    firstName:"noha",
    lastName:"hesham"},
{
    $addToSet:{courses:"jquery"}},
{
    })

//12- Remove courses property for “ahmed mohammed ” instructor

db.instructors.updateMany({
    firstName:"ahmed",
    lastName:"mohammed"},{
    $unset:{courses:""}},{})

//13- Decrease salary by 500 for all instructors that has only 3 courses in their list ($inc) 

db.instructors.updateMany({
    courses:{$size:3}},{
    $inc:{salary:-500}},{})

//14-  Rename address field for all instructors to fullAddress.
db.instructors.updateMany({},{
    $rename:{address:"fullAddress"}},{})

//15- Change street number for noha hesham to 20 
db.instructors.updateMany({
    firstName:"noha",
    lastName:"hesham"},{
    $set:{"fullAddress.street":20}},{})

//16- 















