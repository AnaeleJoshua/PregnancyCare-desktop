    // Update Ultrasound data
    let redirect = (path)=>{
      window.open(path, "_blank")
    }
    const updateUltrasound = document.querySelector("#updateUltrasound")
    updateUltrasound.addEventListener("submit", (event)=>{
      event.preventDefault();

      let cardNumber = document.querySelector("#patientId").value;
      let apiUrl = `http://localhost:3200/api/v1/patient/ultrasound/update/${cardNumber}`

      const formData = new FormData(updateUltrasound);

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

        if(data.status == false){
            alert("Oops! Patient does not have ultrasound data to update")
          } else if(data.status === true){
            alert(data.data)
          } else{
            alert(data.message)
          }

      })
      .catch(error=>console.error("error occured while fetching data: ", error))

    })
  