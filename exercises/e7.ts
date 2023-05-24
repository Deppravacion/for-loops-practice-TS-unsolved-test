/**
 * EXERCISE 7
 * ======================================================
 * @task
 * Make sure the BankAccount type is imported
 * Create the getClientWithLeastPositiveBalance() function that follows:
 * * Takes an array of bank account objects
 * * Returns
 * * * An array with a single bank account object with the lowest balance but not broke (balance > 0)
 * * * An empty array if there is no account that has balance greater than 0
 * The function return type MUST be annotated
 * The for loop must be used
 * The function must be exported
 * Example: getClientWithLeastBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]
 */

import { BankAccount } from './e5';

export function getClientWithLeastPositiveBalance(arr: BankAccount[]) {
  // Your code goes here...
  let positiveAccounts: BankAccount[] = []
  let result: BankAccount[] = []

  for (let i: number = 0; i < arr.length; i ++) {
    if (arr[i].balance > 0) {
      positiveAccounts.push(arr[i])
    }
  }
  if (positiveAccounts.length > 0) {
    result.push(positiveAccounts[0])
    for ( let i: number = 0; i < positiveAccounts.length; i++) {
      if ( positiveAccounts[i].balance < result[0].balance) {
        result.pop()
        result.push(positiveAccounts[i])
      }
    }
    return result
  }
  return result
}


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-7"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
