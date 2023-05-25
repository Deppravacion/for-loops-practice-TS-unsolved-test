/**
 * EXERCISE 14
 * ======================================================
 * @task
 * Make sure the BankAccount type is imported
 * Create the getClientsWithWrongBalance() function that follows:
 * * Takes an array of bank account objects as the argument
 * * Returns an array of bank accounts that have wrong balance value.
 * * The balance value is supposed to equal the difference of all deposits and all withdrawals, otherwise it's wrong
 * The for loop must be used
 * The function must be exported
 * Example: getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]
 */

import { BankAccount } from './e5';

export function getClientsWithWrongBalance(arr: BankAccount[]) {
  // Your code goes here...
  let result: BankAccount[] = []
  for (let i: number = 0; i < arr.length; i++) {
    let depsSum: number = 0
    let withSum: number = 0
    let balance: number = arr[i].balance
    if (arr[i].deposits != undefined) {
      for (let j: number = 0; j < arr[i].deposits.length; j++) {
        depsSum += arr[i].deposits[j]
      }
    }
    if (arr[i].withdrawals != undefined) {
      for (let t: number = 0; t < arr[i].withdrawals.length; t++) {
        withSum += arr[i].withdrawals[t]
      }
    }
    if ( (depsSum - withSum) != balance) {
      result.push(arr[i])
    }
  }
  return result
}


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
