const viewAllPatientsBtn = document.getElementById("viewAllPatientsBtn");


const viewAllPatients = (event)=>{
  event.preventDefault()
 fetch("http://localhost:3200/api/v1/patient/all")
 .then(res=>res.json())
 .then(data=>{
  let realData = data.data
  console.log(realData)

   localStorage.setItem("fetchedData", JSON.stringify(realData))
   redirect("../view/allpatients.html");
 })
 .catch(error=>console.error("error occured while fetching data: ", error))
}
viewAllPatientsBtn.addEventListener("click", viewAllPatients);
 