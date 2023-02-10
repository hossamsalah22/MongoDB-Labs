//1- Restore inventory database

mongorestore -d inventory "D:\ITI\01- Still\MongoDB\D03\inventory"

//2-Display employees fullname and department name for all employees

db.employee.aggregate([
   {
      $lookup: {
         from: "department",
         localField: "department_id",    // field in the orders collection
         foreignField: "department_id",  // field in the items collection
         as: "Depatrments"
      }
   },
   { $project: { _id: 0, full_name:1, "Depatrments.department_description":1 } }
]) // end of aggregate
.forEach((employee) => {
    let deptNames = employee.Depatrments.map((department)=> department.department_description);
    print (`fullName: ${employee.full_name} || Dpartments: ${deptNames}`)
});

//3- Display employees with position “VP Country Manager” (only display employee full name and salary).


db.employee.aggregate([
     {
         $match:
         {
             position_title:{$eq:"VP Country Manager"}
         }
     }
     ,
     {
         $project:
         {
               _id:0,
               fullName:"$full_name",
               salary:"$salary",
               position:"$position_title"
         }
     }
])


//4- Display customers full names and their regions.

db.customer.aggregate([
  {
        $lookup:{
            from:"region",
            localField:"address.customer_region_id",
            foreignField:"region_id",
            as :"region"}// lookup  
     }// stage1
     ,
      {
         $project:
         {
               _id:0,
               fullName:{$concat:["$fname"," ","$lname"]},
               regoins:"$region"
         }
     }// stage2
])
    
//5- In product find all products that was branded by “Washington“

db.product.aggregate([

    {
        $match:{
            brand_name:{$eq: "Washington"}
        }
    
    }// stage1
  
])
