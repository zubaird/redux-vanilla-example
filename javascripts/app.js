// /* eslint-env browser, es6 */
import { createStore } from 'redux';
import { combineReducers } from 'redux';
// Useless counter elements
const moreButtonElement = document.getElementById('more');
const fewerButtonElement = document.getElementById('fewer');
const uselessCounterElement = document.getElementById('uselessCounter');

// Todo list elements
const newTask = document.getElementById('newTask');
const addTaskButton = document.getElementById('addTask');
const taskList = document.getElementById('list');


function uselessCounterReducer(state = 0, action) {
  switch (action.type) {
    case 'MORE':
      return state + 1;
    case 'FEWER':
      return state < 1 ? 0 : state - 1;
    default:
      return state;
  }
}

function todoListReducer(state = [], action) {
  let newState;

  switch (action.type) {
    case 'ADD_TASK':
      newState = [...state, { text: action.task, completed: false }];
      return newState;
    case 'TOGGLE_TASK':
      newState = [...state];
      newState[action.id].completed = !newState[action.id].completed;
      return newState;
    default:
      return state;
  }
}


const store = createStore(combineReducers({ uselessCounterReducer, todoListReducer }));


moreButtonElement.addEventListener('click', () => {
  store.dispatch({ type: 'MORE' });
});

fewerButtonElement.addEventListener('click', () => {
  store.dispatch({ type: 'FEWER' });
});

addTaskButton.addEventListener('click', () => {
  const task = newTask.value;
  store.dispatch({ type: 'ADD_TASK', task });
});

taskList.addEventListener('click', (ev) => {
  if (ev.target.className === 'item') {
    const id = parseInt(ev.target.id);
    store.dispatch({ type: 'TOGGLE_TASK', id });
  }
});

function completedTask(completed) {
  return completed ? '√' : '';
}

function createTaskElement(task, i) {
  return ` <div id='${i}' class="item">
              ${task.text} ${completedTask(task.completed)}
            </div>`;
}

function updateTheDom() {
  const currentState = store.getState();
  console.log(currentState);

  uselessCounterElement.textContent = currentState.uselessCounterReducer;
  taskList.innerHTML = currentState.todoListReducer.map(createTaskElement).join('');
}

store.subscribe(updateTheDom);
