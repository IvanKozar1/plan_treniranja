const dayOneBtn = document.getElementById('btn1');
const dayTwoBtn = document.getElementById('btn2');
const dayThreeBtn = document.getElementById('btn3');
const dayFourBtn = document.getElementById('btn4');
const dayFiveBtn = document.getElementById('btn5');
const daySixBtn = document.getElementById('btn6');

const excercisesDayOne = [];
const excercisesDayTwo = [];
const excercisesDayThree = [];
const excercisesDayFour = [];
const excercisesDayFive = [];
const excercisesDaySix = [];

const addExcerciseModal = document.getElementById('add-modal');
const backdrop = document.getElementById('backdrop');
const cancelBtn = document.querySelector('.btn--passive');
const addBtn = document.querySelector('.btn--success');
const userInput = document.querySelector('input');
//
const entryTextDay1 = document.getElementById('day1');
const deleteExcerciseModal = document.getElementById('delete-modal');

const toggleBackdrop = () => {
  backdrop.classList.toggle('visible');
};

const toggleExcerciseModal = () => {
  addExcerciseModal.classList.toggle('visible');
  toggleBackdrop();
};

const clearExcerciseInput = () => {
  userInput.value = '';
};

const cancelExcerciseHandler = () => {
  toggleExcerciseModal();
  clearExcerciseInput();
};

const renderNewExcerciseElement = (excerciseType) => {
  if (excerciseType !== '') {
    const newExcerciseElement = document.createElement('li');
    const newButtonElement = document.createElement('button');
    const newOrderedList = document.createElement('ol');

    newButtonElement.innerHTML = 'Delete';
    newOrderedList.id = `${excercisesDayOne.indexOf(excerciseType)}`;
    newExcerciseElement.innerHTML = `- ${excerciseType}`;
    const listRoot = document.getElementById('excercise-list1');
    newOrderedList.className = 'excercise-element';

    newButtonElement.className = `${excercisesDayOne.indexOf(excerciseType)}`;
    newButtonElement.addEventListener('click', deleteExcerciseButton);
    listRoot.append(newOrderedList);
    newOrderedList.append(newExcerciseElement);
    newOrderedList.append(newButtonElement);
  }
};

const addExcerciseHandler = () => {
  const excerciseType = userInput.value;

  if (excerciseType.trim() === '') {
    alert('Enter Excercise!');
  }

  const newExcercise = {
    excercise: excerciseType,
  };

  if (excerciseType !== '') {
    excercisesDayOne.push(newExcercise.excercise);
  }
  toggleExcerciseModal();
  clearExcerciseInput();
  renderNewExcerciseElement(newExcercise.excercise);
};

const backdropClickHandler = () => {
  toggleExcerciseModal();
};

function deleteExcerciseButton(event) {
  const deleteElement = document.getElementById(`${event.target.className}`);
  if (event.target) {
    excercisesDayOne.splice(event.target.className, 1);

    deleteElement.remove();
  }
}

const addingOnRightDay = () => {
  addExcerciseHandler();
};

backdrop.addEventListener('click', backdropClickHandler);
cancelBtn.addEventListener('click', cancelExcerciseHandler);
addBtn.addEventListener('click', addingOnRightDay);

dayOneBtn.addEventListener('click', toggleExcerciseModal);
dayTwoBtn.addEventListener('click', toggleExcerciseModal);
