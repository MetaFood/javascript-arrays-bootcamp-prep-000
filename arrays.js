var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
function addElementToBeginningOfArray(chocolateBars, newItem) {
  var newChocolateBars = chocolateBars;
  newChocolateBars = [...newItem, chocolateBars];
}
function destructivelyAddElemtnToBeginningOfArray() {
  return chocolateBars.unshift(newItem);
}