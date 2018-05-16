var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
function addElementToBeginningOfArray(chocolateBars, newItem) {
  return [newItem, ...chocolateBars];
}
function destructivelyAddElemenToBeginningOfArray() {
  return chocolateBars.unshift(newItem);
}