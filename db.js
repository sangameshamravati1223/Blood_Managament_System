
const {Client} = require('pg');
const {mapBloodGroup} = require('./map');
const client = new Client({
    host:"localhost",
    user:"postgres",
    port:5432,
    password:'Sangamesh@23',
    database:'BloodManagementSystem',
    ssl:false
})
client.connect(function(err){
    if(err)
        throw err;
    else
     console.log("connected");
});

module.exports = {
  insertData:async function (formData){
    let age =findAgeByYear(formData.dob.split("-")[0])
    let bloodGroup = mapBloodGroup(formData.bgroup);
    client.query(`INSERT INTO public."user"(
     username, mobile_number, age, blood_group,password)
     VALUES ('${formData.name}','${formData.mobile}','${age}','${bloodGroup}','${formData.password}');`,function(err,res){
     if(!err)
     {
       console.log("Data inserted Successfully")
     }
     else
     {
       console.log("not connected");
     }
   });
   },
 getData: async function(loginData){
  client.query(`SELECT * FROM public."user"`,function(err,res){
      if(!err)
      {
      //  console.log(res.rows.filter((data) => data.mobile_number == loginData.mobile))
      // console.log(res.rows.map(data=> data.password.trim()));
       console.log(res.rows.filter((data)=> loginData.password.trim() == data.password.trim() && data.mobile_number == loginData.mobile));
      }
      else
      {
        console.log("not connected");
      }
    });
  },
};
function filterData(loginData , data){
    return (loginData.mobile === data.mobile_number && loginData.mobile === data.mobile_number)
}
function findAgeByYear(year){
  return  new Date().getFullYear() - year ;
}






