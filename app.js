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
const userInput = document.querySelector('select');
const userOtherInput = document.querySelector('input');
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
  selectedElement.selectedIndex = 0;
  userOtherInput.value = '';
  otherInput.style.display = 'none';
};

const cancelExcerciseHandler = () => {
  toggleExcerciseModal();
  clearExcerciseInput();
};

const addExcerciseHandler = () => {
  const excerciseType = userInput.value;
  const otherExcercise = userOtherInput.value;

  if(otherExcercise.trim() !== '') {
    const newExcercise = {
      excercise: otherExcercise,
    };

    if (excerciseType.trim() === '' && otherInput.style.display == 'block') {
      alert('Enter Excercise!');
    } else if (excerciseType.trim() === '') {
      
    }
    if (otherExcercise !== '' && activeDay === 'btn1') {
      excercisesDayOne.push(newExcercise.excercise);
      renderNewExcerciseElement(
        newExcercise.excercise,
        'monday',
        '1',
        excercisesDayOne
      );
    } else if (otherExcercise !== '' && activeDay === 'btn2') {
      excercisesDayTwo.push(newExcercise.excercise);
      renderNewExcerciseElement(
        newExcercise.excercise,
        'tuesday',
        '2',
        excercisesDayTwo
      );
    } else if (otherExcercise !== '' && activeDay === 'btn3') {
      excercisesDayThree.push(newExcercise.excercise);
      renderNewExcerciseElement(
        newExcercise.excercise,
        'wednesday',
        '3',
        excercisesDayThree
      );
    } else if (otherExcercise !== '' && activeDay === 'btn4') {
      excercisesDayFour.push(newExcercise.excercise);
      renderNewExcerciseElement(
        newExcercise.excercise,
        'thursday',
        '4',
        excercisesDayFour
      );
    } else if (otherExcercise !== '' && activeDay === 'btn5') {
      excercisesDayFive.push(newExcercise.excercise);
      renderNewExcerciseElement(
        newExcercise.excercise,
        'friday',
        '5',
        excercisesDayFive
      );
    } else if (otherExcercise !== '' && activeDay === 'btn6') {
      excercisesDaySix.push(newExcercise.excercise);
      renderNewExcerciseElement(
        newExcercise.excercise,
        'saturday',
        '6',
        excercisesDaySix
      );
    }
  }else {
    const newExcercise = {
      excercise: excerciseType,
    };
  
    if (excerciseType !== '' && activeDay === 'btn1') {
      excercisesDayOne.push(newExcercise.excercise);
      renderNewExcerciseElement(
        newExcercise.excercise,
        'monday',
        '1',
        excercisesDayOne
      );
    } else if (excerciseType !== '' && activeDay === 'btn2') {
      excercisesDayTwo.push(newExcercise.excercise);
      renderNewExcerciseElement(
        newExcercise.excercise,
        'tuesday',
        '2',
        excercisesDayTwo
      );
    } else if (excerciseType !== '' && activeDay === 'btn3') {
      excercisesDayThree.push(newExcercise.excercise);
      renderNewExcerciseElement(
        newExcercise.excercise,
        'wednesday',
        '3',
        excercisesDayThree
      );
    } else if (excerciseType !== '' && activeDay === 'btn4') {
      excercisesDayFour.push(newExcercise.excercise);
      renderNewExcerciseElement(
        newExcercise.excercise,
        'thursday',
        '4',
        excercisesDayFour
      );
    } else if (excerciseType !== '' && activeDay === 'btn5') {
      excercisesDayFive.push(newExcercise.excercise);
      renderNewExcerciseElement(
        newExcercise.excercise,
        'friday',
        '5',
        excercisesDayFive
      );
    } else if (excerciseType !== '' && activeDay === 'btn6') {
      excercisesDaySix.push(newExcercise.excercise);
      renderNewExcerciseElement(
        newExcercise.excercise,
        'saturday',
        '6',
        excercisesDaySix
      );
    }
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

/////////////////////////////////////////////////////
const selectedElement = document.getElementById('excercise');
const otherInput = document.getElementById('otherInput');

function checkOption() {
  if (selectedElement.value === 'other') {
    otherInput.style.display = 'block';
  } else {
    otherInput.style.display = 'none';
  }
}
selectedElement.addEventListener('change', checkOption);

////////////////////////////////////////////////////////
backdrop.addEventListener('click', backdropClickHandler);
cancelBtn.addEventListener('click', cancelExcerciseHandler);
addBtn.addEventListener('click', addingOnRightDay);

dayOneBtn.addEventListener('click', toggleExcerciseModal);
dayTwoBtn.addEventListener('click', toggleExcerciseModal);
dayThreeBtn.addEventListener('click', toggleExcerciseModal);
dayFourBtn.addEventListener('click', toggleExcerciseModal);
dayFiveBtn.addEventListener('click', toggleExcerciseModal);
daySixBtn.addEventListener('click', toggleExcerciseModal);
