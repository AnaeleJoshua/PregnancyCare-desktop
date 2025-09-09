const viewPatientBtn = document.getElementById("viewPatientBtn");
const getPatient = (event)=>{
  event.preventDefault();
  let cardNumber = parseInt(document.querySelector("#patientId").value);
 let apiUrl = `http://localhost:3200/api/v1/patient/${cardNumber}`
 fetch(apiUrl)
 .then(res=>res.json())
 .then(data=>{
  if(data.status !== "success"){
    alert(data.message)
  }else{
    localStorage.setItem("fetchedData", JSON.stringify(data))
   redirect("../view/patient.html");
  }
   
 })
 .catch(error=>console.error("error occured while fetching data: ", error))
}

viewPatientBtn.addEventListener("click", getPatient);
