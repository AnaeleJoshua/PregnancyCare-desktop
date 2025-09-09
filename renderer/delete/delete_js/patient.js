const deleteForm = document.querySelector("#deleteForm")
deleteForm.addEventListener("submit", (event)=>{
 event.preventDefault();
 let cardNumber = document.querySelector("#patientId").value;
let apiUrl = `http://localhost:3200/api/v1/patient/${cardNumber}`

 


 const formData = new FormData(deleteForm);

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
   }else{
    alert(data.data)
   }
   
 })
 .catch(error=>console.error("error occured while fetching data: ", error))

})
