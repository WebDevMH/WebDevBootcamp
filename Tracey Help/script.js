console.log('hi');
/**Arrangement of Values is an array */
let myArray = [
  'choc',
  'coffee',
  'cake',
  'sweets',
  'burgers',
  'crisps',
  'biscuits',
  'toffee',
  'cheese',
  'liquid',
  'cake',
];

console.log(myArray.length);

/**Will output in the console, the index number of the value in the parenthesis, If it is not within the Array, it will always result in negative 1. The second line will do the same, but will start from index number 3 */
let myFoodIndexOne = myArray.indexOf('veg');
let myFoodIndex = myArray.indexOf('cake', 3);

console.log(myFoodIndex);

/**Pop removes the last value within the Array, for example it will remove cake in this instance, as such, the variable created iAte becomes "cake" due to having the method pop attached to it */
let iAte = myArray.pop();
console.log(iAte, 'result from popping my Array');
console.log(myArray, 'this is my original Array');

/** The Push method will add the value within the parenthesis on the new variable into the stated Array. The console log upon outputting your Array will show the value added to the end of the Array. In this instance, it will push the value 'veg' */
let iBought = myArray.push('veg');
console.log(myArray, 'I pushed to myArray');
console.log(myArray, 'this is my Array now after being pushed');

/** These two variables are either going to be true or false, for example, cake IS there (true) but vegatables (false) IS NOT. The console logs here is first a comment and the variable name, if the variable value is within your Array, it will output a 'true' value with the comment. If it is not within your array, it will output a false value */
let findItem = myArray.includes('cake');
let findNonItem = myArray.includes('vegatables');
console.log('found item', findItem);
console.log('not in my array', findNonItem);

/** Same as code on lines 20/21 */
let findIndexTrue = myArray.indexOf('cake');
let findIndexFalse = myArray.indexOf('vegtables');
console.log(findIndexTrue);
console.log(findIndexFalse);
