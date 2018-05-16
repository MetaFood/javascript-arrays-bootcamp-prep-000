var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
function addElementToBeginningOfArray(chocolateBars, newItem) {
[...newItem, chocolateBars]
}
function destructivelyAddElemtnToBeginningOfArray() {
  return chocolateBars.unshift(newItem);
}