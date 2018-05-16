var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
function addElementToBeginningOfArray(chocolateBars, newItem) {
  return [newItem, ...chocolateBars];
}
function destructivelyAddElementToBeginningOfArray(chocolateBars, newItem) {
  chocolateBars.unshift(newItem);
  return chocolateBars;
}