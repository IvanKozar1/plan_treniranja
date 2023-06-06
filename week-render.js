const days = [
  'Monday',
  'Thuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

const mainWeekDiv = document.getElementById('main-container');
let i = 1;

for (const day of days) {
  const div1 = document.createElement('div');
  const div2 = document.createElement('div');
  const div3 = document.createElement('div');
  const div4 = document.createElement('div');
  const paragraph = document.createElement('p');
  const addButton = document.createElement('button');
  const unOrderedList = document.createElement('ul');

  if (day !== 'Sunday') {
    div1.className = 'day-container';
    div3.className = 'anyday';
    div3.id = `day${i}`;
    paragraph.innerHTML = `${day}`;
    div4.className = 'btns';
    addButton.className = 'add-btn';
    addButton.id = `btn${i}`;
    addButton.innerHTML = 'Add';
    unOrderedList.id = `excercise-list${i}`;

    mainWeekDiv.appendChild(div1);
    div1.append(div2);
    div2.append(div3);
    div3.append(paragraph);
    div3.append(div4);
    div4.append(addButton);
    div1.append(unOrderedList);
  } else {
    div1.className = 'day-container';
    div3.className = 'anyday';
    div3.id = `day${i}`;
    paragraph.innerHTML = `${day}`;
    div4.className = 'btns';
    addButton.className = 'add-btn';
    addButton.disabled = 'true';
    addButton.innerHTML = 'Add';

    mainWeekDiv.appendChild(div1);
    div1.append(div2);
    div2.append(div3);
    div3.append(paragraph);
    div3.append(div4);
    div4.append(addButton);
  }

  i++;
}
