var chocolateBars = ['snickers','hundred grand', 'kitkat', 'skittles']

<<<<<<< HEAD
function addElementToBeginningOfArray(array, element) {
  return [element, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element) {
  return [...array,element]
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}

function accessElementInArray(array, index){
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array, element){
  array.shift(element)
  return array
}

function removeElementFromBeginningOfArray(array){
  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array){
 array.pop()
 return array
}

function removeElementFromEndOfArray(array){
  return array.slice(0,array.length-1)
}
=======
var superheroines = ["catwoman", "she-hulk", "mystique"];
superheroines.push("wonder woman")
>>>>>>> 0b567d134eaa9f1898112d5d263960fbbbf2c4d5
