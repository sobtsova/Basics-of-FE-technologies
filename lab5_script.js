document.getElementById('myForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name');
  const idCard = document.getElementById('idCard');
  const faculty = document.getElementById('faculty');
  const birthDate = document.getElementById('birthDate');
  const address = document.getElementById('address');

  const regexName = /^[А-ЯІЇЄ][а-яіїє]{1,}\s[А-ЯІЇЄ]\.[А-ЯІЇЄ]\.$/;
  const regexId = /^[А-ЯІЇЄ]{2}\s№\d{6}$/;
  const regexFaculty = /^[А-ЯІЇЄ]{4}$/;
  const regexDate = /^\d{2}\.\d{2}\.\d{4}$/;
  const regexAddress = /^м\.\s[А-ЯІЇЄа-яіїє]+$/;

  const fields = [
    {el: name, regex: regexName},
    {el: idCard, regex: regexId},
    {el: faculty, regex: regexFaculty},
    {el: birthDate, regex: regexDate},
    {el: address, regex: regexAddress},
  ];

  let valid = true;

  fields.forEach(f => f.el.classList.remove('error'));

  fields.forEach(f => {
    if (!f.regex.test(f.el.value)) {
      f.el.classList.add('error');
      valid = false;
    }
  });

  if (valid) {
    let output = `
      ПІБ: ${name.value}\n
      ID-card: ${idCard.value}\n
      Факультет: ${faculty.value}\n
      Дата народж.: ${birthDate.value}\n
      Адреса: ${address.value}
    `;
    // Вивід у новому вікні
    const newWin = window.open('', 'Result', 'width=400,height=300');
    newWin.document.write(`<pre>${output}</pre>`);
  } else {
    alert('Будь ласка, виправте помилки у червоних полях!');
  }
});

const table = document.getElementById('myTable');
const colorPicker = document.getElementById('colorPicker');
const rows = 6;
const cols = 6;
const variant = 4;

let count = 1;
for(let i=0; i<rows; i++){
    const tr = document.createElement('tr');
    for(let j=0; j<cols; j++){
        const td = document.createElement('td');
        td.textContent = count;
        td.dataset.row = i;
        td.dataset.col = j;
        const cellNumber = count; 
        tr.appendChild(td);

        td.addEventListener('mouseover', () => {
            if (cellNumber === variant) {
                td.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
            }
        });

        td.addEventListener('click', () => {
            if (cellNumber === variant) {
                td.style.backgroundColor = colorPicker.value;
            }
        });

        td.addEventListener('dblclick', () => {
            for(let r=0; r<rows; r++){
                for(let c=0; c<cols; c++){
                    if(r + c === cols - 1){
                        table.rows[r].cells[c].style.backgroundColor = colorPicker.value;
                    }
                }
            }
        });

        count++;
    }
    table.appendChild(tr);
}
