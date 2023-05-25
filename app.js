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

let activeDay;
const toggleExcerciseModal = (event) => {
  if (event) {
    activeDay = event.target.id;
  }

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



const addExcerciseHandler = () => {
  const excerciseType = userInput.value;

  if (excerciseType.trim() === '') {
    alert('Enter Excercise!');
  }

  const newExcercise = {
    excercise: excerciseType,
  };

  if (excerciseType !== '' && activeDay === 'btn1') {
    excercisesDayOne.push(newExcercise.excercise);
    renderNewExcerciseElement1(newExcercise.excercise);
  } else if (excerciseType !== '' && activeDay === 'btn2') {
    excercisesDayTwo.push(newExcercise.excercise);
    renderNewExcerciseElement2(newExcercise.excercise);
  } else if (excerciseType !== '' && activeDay === 'btn3') {
    excercisesDayThree.push(newExcercise.excercise);
    renderNewExcerciseElement3(newExcercise.excercise);
  } else if (excerciseType !== '' && activeDay === 'btn4') {
    excercisesDayFour.push(newExcercise.excercise);
    renderNewExcerciseElement4(newExcercise.excercise);
  } else if (excerciseType !== '' && activeDay === 'btn5') {
    excercisesDayFive.push(newExcercise.excercise);
    renderNewExcerciseElement5(newExcercise.excercise);
  } else if (excerciseType !== '' && activeDay === 'btn6') {
    excercisesDaySix.push(newExcercise.excercise);
    renderNewExcerciseElement6(newExcercise.excercise);
  } else {
    return console.error('Error');
  }

  activeDay = null;
  toggleExcerciseModal();
  clearExcerciseInput();
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
dayThreeBtn.addEventListener('click', toggleExcerciseModal)
dayFourBtn.addEventListener('click', toggleExcerciseModal)
dayFiveBtn.addEventListener('click', toggleExcerciseModal)
daySixBtn.addEventListener('click', toggleExcerciseModal)
