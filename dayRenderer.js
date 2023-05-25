const renderNewExcerciseElement1 = (excerciseType) => {
    if (excerciseType !== '') {
      const newExcerciseElement = document.createElement('li');
      const newButtonElement = document.createElement('button');
      const newOrderedList = document.createElement('ol');
  
      newButtonElement.innerHTML = 'Delete';
      newOrderedList.id = `monday${excercisesDayOne.indexOf(excerciseType)}`;
      newExcerciseElement.innerHTML = `- ${excerciseType}`;
      const listRoot = document.getElementById('excercise-list1');
      newOrderedList.className = 'excercise-element';
  
      newButtonElement.className = `monday${excercisesDayOne.indexOf(excerciseType)}`;
      newButtonElement.addEventListener('click', deleteExcerciseButton);
      listRoot.append(newOrderedList);
      newOrderedList.append(newExcerciseElement);
      newOrderedList.append(newButtonElement);
    }
  };
  
  const renderNewExcerciseElement2 = (excerciseType) => {
    if (excerciseType !== '') {
      const newExcerciseElement = document.createElement('li');
      const newButtonElement = document.createElement('button');
      const newOrderedList = document.createElement('ol');
  
      newButtonElement.innerHTML = 'Delete';
      newOrderedList.id = `tuesday${excercisesDayTwo.indexOf(excerciseType)}`;
      newExcerciseElement.innerHTML = `- ${excerciseType}`;
      const listRoot = document.getElementById('excercise-list2');
      newOrderedList.className = 'excercise-element';
  
      newButtonElement.className = `tuesday${excercisesDayTwo.indexOf(excerciseType)}`;
      newButtonElement.addEventListener('click', deleteExcerciseButton);
      listRoot.append(newOrderedList);
      newOrderedList.append(newExcerciseElement);
      newOrderedList.append(newButtonElement);
    }
  };

  const renderNewExcerciseElement3 = (excerciseType) => {
    if (excerciseType !== '') {
      const newExcerciseElement = document.createElement('li');
      const newButtonElement = document.createElement('button');
      const newOrderedList = document.createElement('ol');
  
      newButtonElement.innerHTML = 'Delete';
      newOrderedList.id = `wednesday${excercisesDayThree.indexOf(excerciseType)}`;
      newExcerciseElement.innerHTML = `- ${excerciseType}`;
      const listRoot = document.getElementById('excercise-list3');
      newOrderedList.className = 'excercise-element';
  
      newButtonElement.className = `wednesday${excercisesDayThree.indexOf(excerciseType)}`;
      newButtonElement.addEventListener('click', deleteExcerciseButton);
      listRoot.append(newOrderedList);
      newOrderedList.append(newExcerciseElement);
      newOrderedList.append(newButtonElement);
    }
  };

  const renderNewExcerciseElement4 = (excerciseType) => {
    if (excerciseType !== '') {
      const newExcerciseElement = document.createElement('li');
      const newButtonElement = document.createElement('button');
      const newOrderedList = document.createElement('ol');
  
      newButtonElement.innerHTML = 'Delete';
      newOrderedList.id = `thursday${excercisesDayFour.indexOf(excerciseType)}`;
      newExcerciseElement.innerHTML = `- ${excerciseType}`;
      const listRoot = document.getElementById('excercise-list4');
      newOrderedList.className = 'excercise-element';
  
      newButtonElement.className = `thursday${excercisesDayFour.indexOf(excerciseType)}`;
      newButtonElement.addEventListener('click', deleteExcerciseButton);
      listRoot.append(newOrderedList);
      newOrderedList.append(newExcerciseElement);
      newOrderedList.append(newButtonElement);
    }
  };

  const renderNewExcerciseElement5 = (excerciseType) => {
    if (excerciseType !== '') {
      const newExcerciseElement = document.createElement('li');
      const newButtonElement = document.createElement('button');
      const newOrderedList = document.createElement('ol');
  
      newButtonElement.innerHTML = 'Delete';
      newOrderedList.id = `friday${excercisesDayFive.indexOf(excerciseType)}`;
      newExcerciseElement.innerHTML = `- ${excerciseType}`;
      const listRoot = document.getElementById('excercise-list5');
      newOrderedList.className = 'excercise-element';
  
      newButtonElement.className = `friday${excercisesDayFive.indexOf(excerciseType)}`;
      newButtonElement.addEventListener('click', deleteExcerciseButton);
      listRoot.append(newOrderedList);
      newOrderedList.append(newExcerciseElement);
      newOrderedList.append(newButtonElement);
    }
  };

  const renderNewExcerciseElement6 = (excerciseType) => {
    if (excerciseType !== '') {
      const newExcerciseElement = document.createElement('li');
      const newButtonElement = document.createElement('button');
      const newOrderedList = document.createElement('ol');
  
      newButtonElement.innerHTML = 'Delete';
      newOrderedList.id = `saturday${excercisesDaySix.indexOf(excerciseType)}`;
      newExcerciseElement.innerHTML = `- ${excerciseType}`;
      const listRoot = document.getElementById('excercise-list6');
      newOrderedList.className = 'excercise-element';
  
      newButtonElement.className = `saturday${excercisesDaySix.indexOf(excerciseType)}`;
      newButtonElement.addEventListener('click', deleteExcerciseButton);
      listRoot.append(newOrderedList);
      newOrderedList.append(newExcerciseElement);
      newOrderedList.append(newButtonElement);
    }
  };