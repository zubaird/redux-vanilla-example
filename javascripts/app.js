// /* eslint-env browser, es6 */
import { createStore } from 'redux';
import { combineReducers } from 'redux';

// Part 1:
// Useless counter elements
const moreButtonElement = document.getElementById('more');
const fewerButtonElement = document.getElementById('fewer');
const uselessCounterElement = document.getElementById('uselessCounter');

// Part 2:
// Todo list elements
// const newTask = document.getElementById('newTask');
// const addTaskButton = document.getElementById('addTask');
// const taskList = document.getElementById('list');

// ====REDUCER======
// How to update the state based on action
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

// Create a new REDUX store, and register reducers
const store = createStore(combineReducers({ uselessCounterReducer }));

// ====ACTIONS======
// What to do when MORE is clicked:
// Send send the ACTION object to the REDUCER with type "MORE"
moreButtonElement.addEventListener('click', () => {
  store.dispatch({ type: 'MORE' });
});

// What to do when FEWER is clicked:
// Send send the ACTION object to the REDUCER with type "FEWER"
fewerButtonElement.addEventListener('click', () => {
  store.dispatch({ type: 'FEWER' });
});


// ====SUBSCRIBE======
// What to do when there is a new state
function updateTheDOM() {
  const currentState = store.getState();
  console.log(currentState);

  uselessCounterElement.textContent = currentState.uselessCounterReducer;
}

// Run updateTheDOM whenever there is a new state in store.
store.subscribe(updateTheDOM);
