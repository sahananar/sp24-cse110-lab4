1. Line 9 prints 'values added: 20'
2. Line 13 prints 'final result: 20'
3. Line 9 prints 'values added: 20'
4. Line 13 returns an error. Since we used the `let` keyword and since line 13 referenced the `result` variable despite it being out of scope, it returned an error saying that `result` is not defined
5. Line 9 returns an error. The `const` keyword prevents the variable from being reassigned, so the `result = num1 + num2` line would cause this error since it attempts to reassign the `result` variable.
6. Line 13 is never reached due to this previous error, so nothing will be printed and it will just display the previous error
