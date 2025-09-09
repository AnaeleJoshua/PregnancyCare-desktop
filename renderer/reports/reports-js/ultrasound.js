const fetchedData = localStorage.getItem("fetchedData");
			const apiData = JSON.parse(fetchedData);
      console.log(apiData)

			const tableBody = document.querySelector(".table-body");

      const row1 = document.createElement("tr");
      row1.innerHTML = `
      <td>Head Circumference (m)</td>
      <td>${apiData.data.headCircumference}</td>
      `;
      tableBody.appendChild(row1);


      const row2 = document.createElement("tr");
      row2.innerHTML = `
      <td>Biparietal Diameter (m)</td>
      <td>${apiData.data.biparietalDiameter}</td>
      `;
      tableBody.appendChild(row2);

      const row3 = document.createElement("tr");
      row3.innerHTML = `
      <td>Date of Ultrasound(m)</td>
      <td>${apiData.data.dateOfUltrasound}</td>
      `;
      tableBody.appendChild(row3);

      const row4 = document.createElement("tr");
      row4.innerHTML = `
      <td>Femur Length (m)</td>
      <td>${apiData.data.femurLength}</td>
      `;
      tableBody.appendChild(row4);

      const row5 = document.createElement("tr");
      row5.innerHTML = `
      <td>Abdominal Circumference (m)</td>
      <td>${apiData.data.abdominalCircumference}</td>
      `;
      tableBody.appendChild(row5);
