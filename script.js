fetch("./data.json")
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('data-container');

        data.forEach(entry => {
            const table = document.createElement('table');

            // Encabezado de la tabla
            const thead = document.createElement('thead');
            const trHead = document.createElement('tr');
            ["Fecha", "Temperatura Registrada", "Temperatura", "Humedad Registrada", "Humedad"].forEach(header => {
                const th = document.createElement('th');
                th.innerText = header;
                trHead.appendChild(th);
            });
            thead.appendChild(trHead);
            table.appendChild(thead);

            // Datos de la tabla
            const tbody = document.createElement('tbody');
            const maxLen = Math.max(entry["Temperatura Registrada"].length, entry["Temperatura"].length, entry["Humedad Registrada"].length, entry["Humedad"].length);

            for (let i = 0; i < maxLen; i++) {
                const trBody = document.createElement('tr');

                const tdDate = document.createElement('td');
                tdDate.innerText = i === 0 ? entry.Fecha : '';
                trBody.appendChild(tdDate);

                const tdTempReg = document.createElement('td');
                tdTempReg.innerText = entry["Temperatura Registrada"][i] || '';
                trBody.appendChild(tdTempReg);

                const tdTemp = document.createElement('td');
                tdTemp.innerText = entry["Temperatura"][i] || '';
                trBody.appendChild(tdTemp);

                const tdHumReg = document.createElement('td');
                tdHumReg.innerText = entry["Humedad Registrada"][i] || '';
                trBody.appendChild(tdHumReg);

                const tdHum = document.createElement('td');
                tdHum.innerText = entry["Humedad"][i] || '';
                trBody.appendChild(tdHum);

                tbody.appendChild(trBody);
            }

            table.appendChild(tbody);
            container.appendChild(table);
        });
    });
