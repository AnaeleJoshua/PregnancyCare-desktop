let redirect = (path)=>{
  window.open(path, "_blank")
}


//Get reports
const getReport = (event)=>{
  event.preventDefault();

  let cardNumber = parseInt(document.querySelector("#patientId").value);
  let report = document.querySelector("#reportType").value;

 if(report === "fa"){
  let apiUrl = `http://localhost:3000/api/v1/patient/report/estimate/foetal_age/${cardNumber}`
  fetch(apiUrl)
  .then(res=>res.json())
  .then(data=>{
    if(data.status === "unauthorized"){
      alert(data.message)
    } else if(data.error === "unauthorized"){
      alert(data.message)
    }else{
      localStorage.setItem("fetchedData", JSON.stringify(data))
    redirect("../reports/foetalAge.rep.html");
    }
  })
  .catch(error=>console.error("error occured while fetching data: ", error))

 }else if(report === "fw"){
  let apiUrl = `http://localhost:3000/api/v1/patient/report/estimate/foetal_weight/${cardNumber}`
  fetch(apiUrl)
  .then(res=>res.json())
  .then(data=>{

    if(data.status === "unauthorized"){
      alert(data.message)
    } else if(data.error === "unauthorized"){
      alert(data.message)
    }else{
      localStorage.setItem("fetchedData", JSON.stringify(data))
      redirect("../reports/foetalWeight.rep.html");
    }
  })
  .catch(error=>console.error("error occured while fetching data: ", error))
  
 }else if(report === "cd"){

  let apiUrl = `http://localhost:3000/api/v1/patient/report/estimate/conception_date/${cardNumber}`
  fetch(apiUrl)
  .then(res=>res.json())
  .then(data=>{

    if(data.status === "unauthorized"){
      alert(data.message)
    } else if(data.error === "unauthorized"){
      alert(data.message)
    }else{
      localStorage.setItem("fetchedData", JSON.stringify(data))
      redirect("../reports/conception.rep.html");
    }
    
  })
  .catch(error=>console.error("error occured while fetching data: ", error))

 }else if(report === "preg"){

  let apiUrl = `http://localhost:3000/api/v1/patient/report/estimate/pregnancy/${cardNumber}`
  fetch(apiUrl)
  .then(res=>res.json())
  .then(data=>{
    if(data.status === "unauthorized"){
      alert(data.message)
    } else if(data.error === "unauthorized"){
      alert(data.message)
    }else{
      localStorage.setItem("fetchedData", JSON.stringify(data))
      redirect("../reports/pregnancy.rep.html");
    }
    
  })
  .catch(error=>console.error("error occured while fetching data: ", error))

 }else if(report === "ul"){

  let apiUrl = `http://localhost:3000/api/v1/patient/report/estimate/ultrasound/${cardNumber}`
  fetch(apiUrl)
  .then(res=>res.json())
  .then(data=>{

    if(data.status === "unauthorized"){
      alert(data.message)
    } else if(data.error === "unauthorized"){
      alert(data.message)
    }else{
      localStorage.setItem("fetchedData", JSON.stringify(data))
      redirect("../reports/ultrasound.rep.html");
    }
  })
  .catch(error=>console.error("error occured while fetching data: ", error))

 }else if(report === "del"){

  let apiUrl = `http://localhost:3000/api/v1/patient/report/estimate/delivery_date/${cardNumber}`
  fetch(apiUrl)
  .then(res=>res.json())
  .then(data=>{
    if(data.status === "unauthorized"){
      alert(data.message)
    } else if(data.error === "unauthorized"){
      alert(data.message)
    }else{
      console.log(data)
      localStorage.setItem("fetchedData", JSON.stringify(data))
      redirect("../reports/delivery.rep.html");
    }
    
  })
  .catch(error=>console.error("error occured while fetching data: ", error))

 }else{
  console.log("you entered an invalid report type")
 }

}


//View Patient
const getPatient = (event)=>{
  event.preventDefault();
  let cardNumber = parseInt(document.querySelector("#patientId").value);
 let apiUrl = `http://localhost:3000/api/v1/patient/${cardNumber}`
 fetch(apiUrl)
 .then(res=>res.json())
 .then(data=>{
  if(data.status !== "success"){
    alert(data.message)
  }else{
    localStorage.setItem("fetchedData", JSON.stringify(data))
   redirect("../view/patientViewer.html");
  }
   
 })
 .catch(error=>console.error("error occured while fetching data: ", error))
}


//View Diagnosis
const getDiagnosis = (event)=>{
  event.preventDefault();
  let cardNumber = parseInt(document.querySelector("#patientId").value);
 let apiUrl = `http://localhost:3000/api/v1/patient/diagnosis/${cardNumber}`
 fetch(apiUrl)
 .then(res=>res.json())
 .then(data=>{
  console.log(data)
  if(data.status !== "success"){
    alert(data.message)
  }else{
    localStorage.setItem("fetchedData", JSON.stringify(data))
    redirect("../view/diagnosisViewer.html");

  }
  
 })
 .catch(error=>console.error("error occured while fetching data: ", error))
}

//View Ultrasound
const getUltrasound = (event)=>{
  event.preventDefault();
  let cardNumber = parseInt(document.querySelector("#patientId").value);
 let apiUrl = `http://localhost:3000/api/v1/patient/ultrasound/${cardNumber}`
 fetch(apiUrl)
 .then(res=>res.json())
 .then(data=>{
  console.log(data)
  if(data.status == false){
    alert("Oops! Patient does not have ultrasound data")
  } else if(data.status === "success"){
    localStorage.setItem("fetchedData", JSON.stringify(data))
    redirect("../view/ultrasoundViewer.html");  
  } else{
    alert(data.message)
  }
  
 })
 .catch(error=>console.error("error occured while fetching data: ", error))
}


//view all patients
const viewAllPatients = (event)=>{
  event.preventDefault()
 fetch("http://localhost:3000/api/v1/patient/all")
 .then(res=>res.json())
 .then(data=>{
  let realData = data.data
  console.log(realData)

   localStorage.setItem("fetchedData", JSON.stringify(realData))
   redirect("../view/allpatients.html");
 })
 .catch(error=>console.error("error occured while fetching data: ", error))
}






































// Bensontocodechristophertocodeemuzotocode