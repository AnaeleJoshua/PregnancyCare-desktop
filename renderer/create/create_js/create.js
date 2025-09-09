  
     const createPatientForm = document.querySelector("#createForm")
createPatientForm.addEventListener("submit", (event)=>{
  event.preventDefault();

  const formData = new FormData(createPatientForm);

  const jsObject = {}
  for (const [key,value] of formData.entries()){
    jsObject[key] = value
  }
  const jsonString = JSON.stringify(jsObject)
  console.log(jsonString)
  //send form data to server
  fetch("http://localhost:3200/api/v1/patient/newPatient", {
    method: "POST",
    headers:{
      'Content-Type': "application/json"
    },
    body: jsonString
  })
  .then(res=>res.json())
  .then(data=>{
    console.log(data)
    localStorage.setItem("fetchedData", JSON.stringify(data))
    redirect("../view/createPatientView.html");
  })
  .catch(error=>console.error("error occured while fetching data: ", error))

})