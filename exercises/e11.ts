/**
 * EXERCISE 11
 * ======================================================
 * @task
 * Make sure the BankAccount type is imported
 * Create the getAllWithdrawals() function that follows:
 * * Takes an array of bank account objects as the argument
 * * Returns an array of withdrawal sums of each bank account if there are withdrawals.
 * * If the account doesn't have withdrawals, it's sum is 0.
 * The for loop must be used
 * The function must be exported
 * Example: getAllWithdrawals(bankAccounts) => [3432, 0, 43242.34, 0, 23432]
 */

import { BankAccount } from './e5';

export function getAllWithdrawals(arr: BankAccount[]) {
  // Your code goes here...

  let result: number[] = []
  for(let i: number = 0; i < arr.length; i++) {
    let sum: number = 0 
    if (arr[i].withdrawals == undefined ) {
      result.push(sum)
    } else {
      for (let j: number = 0 ; j < arr[i].withdrawals.length; j++) {
        sum += arr[i].withdrawals[j]
      }
      result.push(sum)
    }
  }
  return result
}


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-11"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
