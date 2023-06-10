const tableBodyElement = document.querySelector('#userTable tbody');

fetch('https://randomuser.me/api/?results=10&nat=BR')
  .then(response => response.json())
  .then(data => {
    const users = data.results;
    users.forEach(user => {
      const row = document.createElement('tr');
      const photoCell = document.createElement('td');
      const nameCell = document.createElement('td');
      const emailCell = document.createElement('td');
      const phoneCell = document.createElement('td');
      const cityCell = document.createElement('td');
      const countryCell = document.createElement('td');

      const photoImage = document.createElement('img');
      photoImage.src = user.picture.medium;
      photoCell.appendChild(photoImage);

      nameCell.textContent = `${user.name.first} ${user.name.last}`;
      emailCell.textContent = user.email;
      phoneCell.textContent = user.phone;
      cityCell.textContent = user.location.city;
      countryCell.textContent = user.location.country;

      row.appendChild(photoCell);
      row.appendChild(nameCell);
      row.appendChild(emailCell);
      row.appendChild(phoneCell);
      row.appendChild(cityCell);
      row.appendChild(countryCell);

      tableBodyElement.appendChild(row);
    });
  })

