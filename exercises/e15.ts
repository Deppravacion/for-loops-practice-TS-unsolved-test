/**
 * EXERCISE 15
 * ======================================================
 * @task
 * Make sure the BankAccount type is imported
 * Create the concatArrays() function that follows:
 * * Takes two arrays as arguments.
 * * The arrays may contain items of any type but both have the items of the same type
 * * * (two arrays of numbers, or two arrays of strings, etc...)
 * * Returns an single array of two array concatenated.
 * HINT: You will need a GENERIC type
 * The function return type MUST be annotated
 * The for loop must be used
 * The function must be exported
 * Example: concatArrays(['d', 'r', 'a'], ['f', 'y']) => ['d', 'r', 'a', 'f', 'y']
 */

export function concatArrays(arr1: number[], arr2: number[]) {
  // Your code goes here...
  let result: number[] = []
  for (let i: number = 0; i < arr1.length; i ++) {
    result.push(arr1[i])
  }
  for (let p: number = 0; p < arr2.length; p ++) {
    result.push(arr2[p])
  }
  return result
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-15"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
