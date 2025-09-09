const viewUltrasoundBtn = document.getElementById("viewUltrasoundBtn");

const getUltrasound = (event)=>{
  event.preventDefault();
  let cardNumber = parseInt(document.querySelector("#patientId").value);
 let apiUrl = `http://localhost:3200/api/v1/patient/ultrasound/${cardNumber}`
 fetch(apiUrl)
 .then(res=>res.json())
 .then(data=>{
  console.log(data)
  if(data.status == false){
    alert("Oops! Patient does not have ultrasound data")
  } else if(data.status === "success"){
    localStorage.setItem("fetchedData", JSON.stringify(data))
    redirect("../view/ultrasound.html");  
  } else{
    alert(data.message)
  }
  
 })
 .catch(error=>console.error("error occured while fetching data: ", error))
}
viewUltrasoundBtn.addEventListener("click", getUltrasound);