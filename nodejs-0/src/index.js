"use strict";

const fibonacci = () => {
  let current = 1;
  let list = [0, 1];
  while (current <= 350) {
    current = current + list[list.length - 2];
    list.push(current);
  }
  return list;
};

const isFibonnaci = (num) => fibonacci().includes(num);

module.exports = {
  fibonacci,
  isFibonnaci,
};
