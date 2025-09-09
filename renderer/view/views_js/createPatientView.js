
      const fetchedData = localStorage.getItem("fetchedData");
			const apiData = JSON.parse(fetchedData);
      console.log(apiData)

			const tableBody = document.querySelector(".table-body");
			const newRow = document.createElement("tr");

			newRow.innerHTML = `
      <td>${apiData.data.patientId}</td>
      <td>${apiData.data.firstName}</td>
			<td>${apiData.data.lastName}</td>
			<td>${apiData.data.sex}</td>
			`;

			tableBody.appendChild(newRow)

  