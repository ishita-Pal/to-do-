export const sortTasksByPriority = (tasks) => {
  return tasks.sort((a, b) => b.rating - a.rating);
};

export const filterTasks = (tasks, searchTerm) => {
  if (!searchTerm) return tasks;
  return tasks.filter(task => task.task.toLowerCase().includes(searchTerm.toLowerCase()));
};

export const createRangeSlider = () => {
  const rangeDiv = document.createElement('div');
  rangeDiv.classList.add('range');

  const sliderValueDiv = document.createElement('div');
  sliderValueDiv.classList.add('sliderValue');
  const spanElement = document.createElement('span');
  spanElement.textContent = '50';
  sliderValueDiv.appendChild(spanElement);

  const fieldDiv = document.createElement('div');
  fieldDiv.classList.add('field');

  const leftValueDiv = document.createElement('div');
  leftValueDiv.classList.add('value', 'left');
  leftValueDiv.textContent = '0';

  const inputSlider = document.createElement('input');
  inputSlider.setAttribute('type', 'range');
  inputSlider.setAttribute('min', '0');
  inputSlider.setAttribute('max', '100');
  inputSlider.setAttribute('value', '50');
  inputSlider.setAttribute('steps', '1');

  const rightValueDiv = document.createElement('div');
  rightValueDiv.classList.add('value', 'right');
  rightValueDiv.textContent = '100';

  const checkIcon = document.createElement('i');
  checkIcon.classList.add('fa-solid', 'fa-check');
  checkIcon.style.display = 'none';

  fieldDiv.appendChild(leftValueDiv);
  fieldDiv.appendChild(inputSlider);
  fieldDiv.appendChild(rightValueDiv);
  fieldDiv.appendChild(checkIcon);

  rangeDiv.appendChild(sliderValueDiv);
  rangeDiv.appendChild(fieldDiv);

  inputSlider.oninput = () => {
    let value = inputSlider.value;
    spanElement.textContent = value;
    spanElement.style.left = `${value}%`;
    spanElement.classList.add('show');

    if (parseInt(value) === parseInt(inputSlider.max)) {
      inputSlider.style.display = 'none';
      leftValueDiv.style.display = 'none';
      rightValueDiv.textContent = '';
      checkIcon.style.display = 'inline-block';
    } else {
      inputSlider.style.display = 'inline-block';
      leftValueDiv.style.display = 'inline-block';
      rightValueDiv.textContent = '100';
      checkIcon.style.display = 'none';
    }
  };

  inputSlider.onblur = () => {
    spanElement.classList.remove('show');
  };

  return rangeDiv;
};
