 const fetchedData = localStorage.getItem("fetchedData");
			const apiData = JSON.parse(fetchedData);

			const tableBody = document.querySelector(".table-body");
			const newRow = document.createElement("tr");

			newRow.innerHTML = `
				<td>${apiData.pregnancyStatusMessage}</td>
				<td>${apiData.pregnancyStatusPercentage}</td>
			`;

			tableBody.appendChild(newRow)