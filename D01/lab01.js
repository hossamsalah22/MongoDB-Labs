//Create database with name ITI  by typing  use ITI
use ITI
//2- start create new collection named instructors  and start with following inserts  
db.createCollection("instructors")
//2.01- Insert your own data
db.instructors.insertOne({"_id":1,"firstName":"Hossam","lastName":"Salah","age":27})
//2.02- Insert instructor without firstName and LastName (mongo will raise an error or not ?) No Errors
db.instructors.insertOne({"_id":2,"age":27})
//2.03- Insert many using  array contained with lab folder instructors.txt file.
let instructorsArray=[{_id:6,firstName:"noha",lastName:"hesham",
                age:21,salary:3500,
                address:{city:"cairo",street:10,building:8},
                courses:["js","mvc","signalR","expressjs"]},
                
                {_id:7,firstName:"mona",lastName:"ahmed",
                age:21,salary:3600,
                address:{city:"cairo",street:20,building:8},
                courses:["es6","mvc","signalR","expressjs"]},
                
                {_id:8,firstName:"mazen",lastName:"mohammed",
                age:21,salary:7040,
                address:{city:"Ismailia",street:10,building:8},
                courses:["asp.net","mvc","EF"]},
                
                {_id:9,firstName:"ebtesam",lastName:"hesham",
                age:21,salary:7500,
                address:{city:"mansoura",street:14,building:3},
                courses:["js","html5","signalR","expressjs","bootstrap"]}
				
                ];
db.instructors.insertMany(instructorsArray);
//3- Try the following queries: (all queries should be run using find or findOne)
db.instructors.find({});
db.instructors.find();
db.instructors.findOne();
db.instructors.find().constructor.name
db.instructors.find({}, {firstName:1, address:1})

//4- Now try to display the min , max and average salary for all instructors (by javascript) don’t use any aggregate functions
let salaryArr = [];
let sum = 0;

db.instractors.find().forEach( instructor => {
    if(instructor.salary){
        salaryArr.push(instructor.salary)  
        sum += instructor.salary;
    }
});

print("Max Salary: " + Math.max(...salaryArr));
print("Min Salary: " + Math.min(...salaryArr));
print("Avrage Salary: " + sum / salaryArr.length);