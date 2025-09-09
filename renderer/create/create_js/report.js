const generateReportButton = document.querySelector("#generateReportButton");

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

generateReportButton.addEventListener("click", getReport);
