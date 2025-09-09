
     // create Diagnosis
//  let redirect = (path)=>{
//   window.open(path, "_blank")
// }
const diagnosisForm = document.querySelector("#diagnosisForm")
diagnosisForm.addEventListener("submit", (event)=>{
  event.preventDefault();

  let cardNumber = document.querySelector("#patientId").value;
let apiUrl = `http://localhost:3200/api/v1/patient/diagnosis/${cardNumber}`

  const formData = new FormData(diagnosisForm);

  const jsObject = {}
  for (const [key,value] of formData.entries()){
    jsObject[key] = value
  }
  const jsonString = JSON.stringify(jsObject)
  console.log(jsonString)
  //send form data to server
  fetch(apiUrl, {
    method: "POST",
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
      localStorage.setItem("fetchedData", JSON.stringify(data))
      redirect("./view/diagnosis.html");
    }
    
  })
  .catch(error=>console.error("error occured while fetching data: ", error))

})
 