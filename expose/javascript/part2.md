1. Line 12 will print 3. The variable `i` gets incremented to the length of the input array (which is 3) during the loop, and once the loop is finished, the value of `i` will be printed to the console
2. Line 13 will print 150. This line will print the last stored value of `discountedPrice` from the loop, this is 0.5 * 300 = 150
3. Line 14 will print 150. This just rounds the last stored value of `discountedPrice`, that value was already 150 and doesn't need to be rounded so it will still be 150
4. It will return the `discounted` array which contains all the discounted prices, since these were being pushed to the array during the loop. This result would be `[50, 100, 150]`
5. This would result in an error. We are using the `let` keyword for `i`, meaning that `i` can't be referenced outside of the scope it was declared in (the loop). Trying to print it outside of the loop would throw an error saying `i` wasn't defined
6. Line 13 would return an error since `discountedPrice` was defined inside the for loop with the `let` keyword, so it can't be referenced outside of that scope
7. Line 14 would still print 150, as `finalPrice` was also defined with the `let` keyword however this was done at the beginning of the function and the print statement is in the same scope as this declaration so it would work
8. It will still return the `discounted` array which contains all the discounted prices, since these were being pushed to the array during the loop. This result would be `[50, 100, 150]`
9. This would result in an error. We are using the `let` keyword for `i`, meaning that `i` can't be referenced outside of the scope it was declared in (the loop). Trying to print it outside of the loop would throw an error saying `i` wasn't defined
10. This would print 3, which is the length of the array, as this was defined in the global scope
11. It will still return the `discounted` array which contains all the discounted prices, since these were being pushed to the array during the loop. This result would be `[50, 100, 150]`

12: 
  a. `student.name`
  b. `student['Grad Year']`
  c. `student.greeting()`
  d. `student['Favorite teacher'].name`
  e. `student.courseLoad[0]`

13:
  a. '32', since the integer was mapped to string
  b. 1, since the string was mapped to integer and it subtracted them
  c. 3, since the null is ignored
  d. '3' since the null is ignored
  e. 4, since true maps to 1
  f. 0, since false maps to 0
  g. '3undefined' since it adds the strings together
  h. undefined, since the operation can't be done

14:
  a. True, since it's treated like integer
  b. False, since it's comparing strings and alphabetically '2' comes before '12'
  c. True, since it does the type conversion first
  d. False, since it doesn't do conversion
  e. False, since true maps to 1
  f. True, since the boolean mapped to 2

15. The == operator does the type conversion of the operands before comparison. The === operator compares the values as well as the data types of the operands

17. It will return the array `[2, 4, 6]` since it is pushing the callback of the number to the new array, callback references the function which multiplies a number by 2, so it will be pushing the doubled input to the new array which will result in `[2, 4, 6]` since it's each value multiplied by 2

19. The output is:
    1
    4
    3
    2
Since it will go to both `console.log` statements before reaching the other 2 as they have a timeout limit. Since line 4's limit is shorter, it goes there and prints 3 first, then it finally goes back to line 3 and prints 2
