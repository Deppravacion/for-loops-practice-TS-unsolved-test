/**
 * EXERCISE 12
 * ======================================================
 * @task
 * Make sure the BankAccount type is imported
 * Create the getAllDepositsGreaterThanOneHundred() function that follows:
 * * Takes an array of bank account objects as the argument
 * * Returns an array of all deposits greater than 100
 * The for loop must be used
 * The function must be exported
 * Example: getAllDepositsGreaterThanOneHundred(bankAccounts) => [3432, 43242.34, 23432]
 */

import { BankAccount } from './e5';

export function getAllDepositsGreaterThanOneHundred(arr: BankAccount[]) {
  // Your code goes here...
  let result: number[] = [] 
  for ( let i: number = 0 ; i < arr.length; i++) {
    if (arr[i].deposits != undefined ) {
      for ( const deposit of arr[i].deposits) {
        if ( deposit > 100) {
          result.push(deposit)
        }
      }
    }
  }
  return result
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-12"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
