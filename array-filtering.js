let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let filtered = numbers.filter(
  function evenNumbers(number){
    return number % 2 === 0})
    console.log(filtered)

    // return number % 2 === 0 is all the even numbers?
    /* Test if an integer is (not) divisible by another number:

 x % 4 == 0 // true if x is divisible by 4
 x % 2 == 0 // true if x is even number
 x % 2 != 0 // true if x is odd number*/
