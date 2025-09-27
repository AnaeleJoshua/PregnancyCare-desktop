
      const fetchedData = localStorage.getItem("fetchedData");
			const apiData = JSON.parse(fetchedData);
      console.log('api data',apiData)

			const tableBody = document.querySelector(".table-body");


      const row1 = document.createElement("tr");
      row1.innerHTML = `
      <td>Menstrual</td>
      <td>${apiData.data.menstrual}</td>
      `;
      tableBody.appendChild(row1);

      const row2 = document.createElement("tr");
      row2.innerHTML = `
      <td>Broad areola?</td>
      <td>${apiData.data.areola}</td>
      `;
      tableBody.appendChild(row2);

      const row3 = document.createElement("tr");
      row3.innerHTML = `
      <td>Enlarged Breast?</td>
      <td>${apiData.data.breastEnlargement}</td>
      `;
      tableBody.appendChild(row3);

      const row4 = document.createElement("tr");
      row4.innerHTML = `
      <td>Cyst</td>
      <td>${apiData.data.cyst}</td>
      `;
      tableBody.appendChild(row4);

      const row5 = document.createElement("tr");
      row5.innerHTML = `
      <td>Body out?</td>
      <td>${apiData.data.bodyOut}</td>
      `;
      tableBody.appendChild(row5);

      const row6 = document.createElement("tr");
      row6.innerHTML = `
      <td>tiredness?</td>
      <td>${apiData.data.tiredness}</td>
      `;
      tableBody.appendChild(row6);

      const row7 = document.createElement("tr");
      row7.innerHTML = `
      <td>Enlarged Bladder</td>
      <td>${apiData.data.enlargedBladder}</td>
      `;
      tableBody.appendChild(row7);

      const row8 = document.createElement("tr");
      row8.innerHTML = `
      <td>Morning Sickness</td>
      <td>${apiData.data.morningSickness}</td>
      `;
      tableBody.appendChild(row8);

      const row9 = document.createElement("tr");
      row9.innerHTML = `
      <td>Lab result</td>
      <td>${apiData.data.labResult}</td>
      `;
      tableBody.appendChild(row9);

      const row10 = document.createElement("tr");
      row10.innerHTML = `
      <td>Mood Swing</td>
      <td>${apiData.data.moodSwing}</td>
      `;
      tableBody.appendChild(row10);

      const row11 = document.createElement("tr");
      row11.innerHTML = `
      <td>Ultrasound</td>
      <td>${apiData.data.ultrasound}</td>
      `;
      tableBody.appendChild(row11);

    
