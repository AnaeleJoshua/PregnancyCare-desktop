 const fetchedData = localStorage.getItem("fetchedData");
			const apiData = JSON.parse(fetchedData);
  
      apiData.forEach(realData => {

      const tableBody = document.querySelector(".table-body");
			const newRow = document.createElement("tr");

			newRow.innerHTML = `
      <td>${realData.patientId}</td>
      <td>${realData.firstName}</td>
			<td>${realData.lastName}</td>
			<td>${realData.sex}</td>
			<td>${realData.address}</td>
			`;

			tableBody.appendChild(newRow)

        
      });
