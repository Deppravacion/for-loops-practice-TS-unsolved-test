/**
 * EXERCISE 8
 * ======================================================
 * @task
 * Make sure the BankAccount type is imported
 * Create the getClientWithGreatestBalance() function that follows:
 * * Takes an array of bank account objects
 * * Returns an array with a bank account object with the greatest balance value
 * The function return type MUST be annotated
 * The for loop must be used
 * The function must be exported
 * Example: getClientWithGreatestBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]
 */

import { BankAccount } from './e5';

export function getClientWithGreatestBalance(arr: BankAccount[]) {
  // Your code goes here...
  let result: BankAccount[] = [arr[0]]
  for (let i: number = 0; i < arr.length; i++) {
    if (arr[i].balance > result[0].balance) {
      result.pop()
      result.push(arr[i])
    }
  }
  return result
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
