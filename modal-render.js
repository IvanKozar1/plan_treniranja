const listOfExcercises = [
  'Biceps',
  'Triceps',
  'Forearm',
  'Shoulders',
  'Chests',
  'Abbs',
  'Lower Back',
  'Upper Back',
  'Legs',
  'Other',
];

const mainDiv = document.getElementById('add-modal');

const listDiv = document.createElement('div');
const buttonDiv = document.createElement('div');
const label = document.createElement('label');
const selectedElement = document.createElement('select');
const userOtherInput = document.createElement('input');
const cancelBtn = document.createElement('button');
const addBtn = document.createElement('button');
const defaultOption = document.createElement('option');

listDiv.className = 'modal__content';
buttonDiv.className = 'modal__actions';
label.setAttribute('for', 'excercise');
label.innerHTML = 'Add an excercise';
selectedElement.id = 'excercise';
selectedElement.name = 'excercise';
userOtherInput.type = 'text';
userOtherInput.id = 'otherInput';
userOtherInput.style = 'display: none';
userOtherInput.placeholder = 'Enter your option';
cancelBtn.className = 'btn btn--passive';
cancelBtn.innerHTML = 'Cancel';
addBtn.className = 'btn btn--success';
addBtn.innerHTML = 'Add';

defaultOption.setAttribute('value', '');
defaultOption.setAttribute('selected', true);
defaultOption.disabled = 'true';
defaultOption.innerHTML = 'Select an option';
selectedElement.append(defaultOption);

for (const excercise of listOfExcercises) {
  const option = document.createElement('option');
  option.value = `${excercise}`;
  option.innerHTML = `${excercise}`;
  selectedElement.append(option);
}

mainDiv.appendChild(listDiv);
mainDiv.appendChild(buttonDiv);
listDiv.append(label);
listDiv.append(selectedElement);
listDiv.append(userOtherInput);
buttonDiv.append(cancelBtn);
buttonDiv.append(addBtn);


