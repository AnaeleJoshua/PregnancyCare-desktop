
const viewDiagnosisBtn = document.getElementById("viewDiagnosisBtn");


const getDiagnosis = (event)=>{
  event.preventDefault();
  let cardNumber = parseInt(document.querySelector("#patientId").value);
 let apiUrl = `http://localhost:3200/api/v1/patient/diagnosis/${cardNumber}`
 fetch(apiUrl)
 .then(res=>res.json())
 .then(data=>{
  console.log(data)
  if(data.status !== "success"){
    alert(data.message)
  }else{
    localStorage.setItem("fetchedData", JSON.stringify(data))
    console.log(JSON.stringify(data))
    redirect("../../view/diagnosis.html");

  }
  
 })
 .catch(error=>console.error("error occured while fetching data: ", error))
}
viewDiagnosisBtn.addEventListener("click", getDiagnosis);