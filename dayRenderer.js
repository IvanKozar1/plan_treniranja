const renderNewExcerciseElement = (excerciseType, day, num) => {
  const newExcerciseElement = document.createElement('li');
  const newButtonElement = document.createElement('button');
  const newOrderedList = document.createElement('ol');

  newButtonElement.innerHTML = 'Delete';
  newOrderedList.id = `${day}${excercisesDayThree.indexOf(excerciseType)}`;
  newExcerciseElement.innerHTML = `- ${excerciseType}`;
  const listRoot = document.getElementById(`excercise-list${num}`);
  newOrderedList.className = 'excercise-element';

  newButtonElement.className = `${day}${excercisesDayThree.indexOf(
    excerciseType
  )}`;
  newButtonElement.addEventListener('click', deleteExcerciseButton);
  listRoot.append(newOrderedList);
  newOrderedList.append(newExcerciseElement);
  newOrderedList.append(newButtonElement);
};
