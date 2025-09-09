     // Update patient
 let redirect = (path)=>{
  window.open(path, "_blank")
}


const updatePatientForm = document.querySelector("#updatePatientForm")
updatePatientForm.addEventListener("submit", (event)=>{
  event.preventDefault();
  let cardNumber = document.querySelector("#patientId").value;
let apiUrl = `http://localhost:3200/api/v1/patient/${cardNumber}`

  


  const formData = new FormData(updatePatientForm);

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
    if(data.error === "unauthorized"){
      alert(data.message)
    }else{
      alert(data.data)
    }
  })
  .catch(error=>console.error("error occured while fetching data: ", error))

})