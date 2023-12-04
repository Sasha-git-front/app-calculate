import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducer';
import { operant1, operant2, sign, rez } from './actions';
import { calculate } from './calculate';

const store = configureStore({
  reducer: reducer,
});

const keys = document.querySelector('.keys');
const display = document.querySelector('.display');
const inputEl = display.querySelector('input');


keys.addEventListener('click', (e) => {
  if (/[0-9.]/.test(e.target.value)) {
    if (store.getState().sign) {
      const currentOperant2 = store.getState().number2 || "";
      store.dispatch(operant2(currentOperant2 + e.target.value));
      inputEl.value = store.getState().number2;
      document.querySelector('#eq').disabled = false;
    } else {
      const currentOperant1 = store.getState().number1 || "";
      store.dispatch(operant1(currentOperant1 + e.target.value));
      inputEl.value = store.getState().number1;
    }
  } else if (/[-*+/]/.test(e.target.value)) {
    store.dispatch(sign(e.target.value))
  }
  else if (e.target.value === "=") {
    store.dispatch(rez(calculate(store.getState())))
    inputEl.value = store.getState().rez;
    document.querySelector('#eq').disabled = true;
  }
})

store.subscribe(() => {
  console.log(store.getState())
})