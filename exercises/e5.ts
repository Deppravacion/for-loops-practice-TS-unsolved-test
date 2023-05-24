/**
 * EXERCISE 5
 * ======================================================
 * Make sure to solve both tasks beneath
 */

/**
 * @task
 * Create the type alias named 'BankAccount' that follows:
 * * Declares the types of bank accounts' properties from data/data.js (id, name, balance, etc...)
 * * The type must be exported. It will be imported in every next exercise file to reuse the type.
 */

// Declare a type here...
export type BankAccount = {
  id: number
  name: string
  balance: number
  deposits: number[]
  withdrawals: number[]
};

/**
 * @task
 * Create the getAllClientNames() function that follows:
 * * Takes an array of bank account objects
 * * Returns an array of all bank account holders names
 * The for loop must be used
 * The function must be exported
 * Example: getNumbersWithSquareRoots(17) => [0, 1, 4, 9, 16]
 */

export function getAllClientNames(arr: BankAccount[]) {
  // Your code goes here...
  let result: string[] = []
  for (const account of arr) {
    result.push(account.name) 
  }
  return result
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-5"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
