/**
 * EXERCISE 13
 * ======================================================
 * @task
 * Make sure the BankAccount type is imported
 * Create the getAllAccountsWithSumsOfDepositsLess2000() function that follows:
 * * Takes an array of bank account objects as the argument
 * * Returns an array of bank accounts that have a sum of deposits less than 2000 or no deposits at all
 * The for loop must be used
 * The function must be exported
 * Example: getAllAccountsWithSumsOfDepositsLess2000(bankAccounts) => [3432, 43242.34, 23432]
 */

import { BankAccount } from './e5';

export function getAllAccountsWithSumsOfDepositsLess2000(arr: BankAccount[]) {
  // Your code goes here...
  let result: BankAccount[] = []

  for (let i: number = 0; i < arr.length; i++) {
    if ( arr[i].deposits == undefined) {
      result.push(arr[i])
    } else {
      let sum: number = 0 
      for (let j: number = 0 ; j <arr[i].deposits.length; j++)  {
        sum += arr[i].deposits[j]
      }
    if (sum < 2000) {
      result.push(arr[i])
    }    
    }    
  }
  return result
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-13"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
