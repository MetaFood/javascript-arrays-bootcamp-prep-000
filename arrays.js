var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
function addElementToBeginningOfArray(chocolateBars, newItem) {
chocolateBars = [...newItem, chocolateBars]
return chocolateBars
}
function destructivelyAddElemtnToBeginningOfArray() {
  return chocolateBars.unshift(newItem);
}