'use strict';

const createElem = (text) => {
  const elem = document.createElement('li');
  elem.textContent = text;
  return elem;
};

const getMainList = () => {
  const mainlist = document.querySelector('#main_list');
  return mainlist;
};

const addEntry = (text) => {
  getMainList().append(createElem(text));
};

const deleteLastEntry = () => {
  getMainList().lastElementChild.remove();
};

const clearAllEntries = () => {
  console.log('cleared');
  document.querySelectorAll('li').forEach((elem) => {
    elem.remove();
  });
};

const isNotNull = (input) => {
  if (input === null || input === 'exit') {
    return false;
  }
  return true;
};

const checkInput = (input) => {
  if (isNotNull(input)) {
    switch (input.trim()) {
      case 'del':
        deleteLastEntry();
        break;
      case 'clear':
        clearAllEntries();
        break;
      case '':
        break;
      default:
        addEntry(input);
        break;
    }
    return true;
  }
  return false;
};

const takeAndCheckInput = () => {
  const input = prompt('available commands: "del", "clear", "exit"');

  return checkInput(input);
};

const main = () => {
  if (takeAndCheckInput()) main();
};

main();
