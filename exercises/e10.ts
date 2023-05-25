/**
 * EXERCISE 10
 * ======================================================
 * @task
 * Make sure the BankAccount type is imported
 * Create the getClientsWithLetterInName() function that follows:
 * * Takes an object of two keys as an argument
 * * * 'arr' is an array of BankAccount objects
 * * * 'letter' is a string of a single character
 * * The argument object MUST be destructured into 'arr' and 'letter'
 * * Returns an array of account holders names that contains a given letter
 * The for loop must be used
 * The function must be exported
 * Example: getClientsWithLetterInName(bankAccounts, 'e') => ['Kevin', 'Steven', ...]
 */

import { BankAccount } from './e5';

export function getClientsWithLetterInName({ arr, letter }: {arr: BankAccount[], letter: string}) {
  // Your code goes here...
  let result: string[] = []
  for (let i: number = 0; i < arr.length; i++) {
    let bool: boolean = false
    for( let k: number = 0 ; k < arr[i].name.length; k++) {
      if (arr[i].name[k].toLocaleLowerCase() == letter.toLocaleLowerCase()) {
        bool = true
      }      
    }
    bool ? result.push(arr[i].name) : null
  }
  return result
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-10"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
