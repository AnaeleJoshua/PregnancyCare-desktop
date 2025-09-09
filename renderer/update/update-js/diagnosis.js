  // Update patient
  let redirect = (path)=>{
   window.open(path, "_blank")
 }
 
 
 const updateDiagnosis = document.querySelector("#updateDiagnosis")
 updateDiagnosis.addEventListener("submit", (event)=>{
   event.preventDefault();
   let cardNumber = document.querySelector("#patientId").value;
 let apiUrl = `http://localhost:3200/api/v1/patient/diagnosis/update/${cardNumber}`
 
   
 
 
   const formData = new FormData(updateDiagnosis);
 
   const jsObject = {}
   for (const [key,value] of formData.entries()){
     jsObject[key] = value
   }
   const jsonString = JSON.stringify(jsObject)
   console.log(jsonString)
 
   //send form data to server
   fetch(apiUrl, {
     method: "PUT",
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
     }else if(data.status === "unauthorized"){
      alert(data.message)
     }else{
      alert(data.data)
     }
    //  localStorage.setItem("fetchedData", JSON.stringify(data))
     // redirect("../view/createPatientView.html");
   })
   .catch(error=>console.error("error occured while fetching data: ", error))
 
 })