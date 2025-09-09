  // Delete Ultrasound
const deleteUltrasound = document.querySelector("#deleteUltrasound")
deleteUltrasound.addEventListener("submit", (event)=>{
 event.preventDefault();
 let cardNumber = document.querySelector("#patientId").value;
let apiUrl = `http://localhost:3200/api/v1/patient/ultrasound/delete/${cardNumber}`

 


 const formData = new FormData(deleteUltrasound);

 const jsObject = {}
 for (const [key,value] of formData.entries()){
   jsObject[key] = value
 }
 const jsonString = JSON.stringify(jsObject)
 console.log(jsonString)

 //send form data to server
 fetch(apiUrl, {
   method: "DELETE",
   headers:{
     'Content-Type': "application/json"
   },
   body: jsonString
 })
 .then(res=>res.json())
 .then(data=>{
   console.log(data)
   if(data.error === "unauthorized"){
    alert(data.message)
   } else if(data.status === "unauthorized"){
     alert(data.message) 
   }else{
    alert(data.data)
   }
   
 })
 .catch(error=>console.error("error occured while fetching data: ", error))

})