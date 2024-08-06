function getLength<t extends { length: number }>(arg: t): number {
  return arg.length;
}

console.log(getLength([1, 2, 3])); // 3
console.log(getLength('123')); // 3