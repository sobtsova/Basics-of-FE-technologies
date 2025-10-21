document.getElementById('loadUsers').addEventListener('click', getUsers);

async function getUsers() {
  const usersContainer = document.getElementById('users');
  const status = document.getElementById('status');
  usersContainer.innerHTML = ''; // очищаємо попередній результат
  status.textContent = ''; // очищаємо попередній статус

  try {
    const response = await fetch('https://randomuser.me/api/?results=5');
    if (!response.ok) throw new Error('Помилка запиту до API');

    const data = await response.json();
    const users = data.results;

    users.forEach(user => {
      const picture = user.picture.large;
      const name = `${user.name.first} ${user.name.last}`;
      const city = user.location.city;
      const postcode = user.location.postcode;
      const phone = user.phone;

      const card = document.createElement('div');
      card.classList.add('user-card');
      card.innerHTML = `
        <img src="${picture}" alt="User photo" width="100">
        <h3>${name}</h3>
        <p><b>Місто:</b> ${city}</p>
        <p><b>Поштовий індекс:</b> ${postcode}</p>
        <p><b>Телефон:</b> ${phone}</p>
      `;
      usersContainer.appendChild(card);
    });

    // Після успішного завантаження:
    status.textContent = '✅ Успішне завантаження';

  } catch (error) {
    console.error('Помилка:', error);
    status.textContent = '❌ Помилка завантаження даних';
    status.style.color = 'red';
  }
}
