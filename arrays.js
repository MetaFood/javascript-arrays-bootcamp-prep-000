var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
function addElementToBeginningOfArray(chocolateBars, newItem) {
var newChocolateBars = [...newItem, chocolateBars]
return newchocolateBars
}
function destructivelyAddElemtnToBeginningOfArray() {
  return chocolateBars.unshift(newItem);
}