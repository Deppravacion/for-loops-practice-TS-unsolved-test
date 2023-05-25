/**
 * EXERCISE 19
 * ======================================================
 * @task
 * Create the reverseArray() function that re-assembles the array.reverse() method and follows:
 * * Takes an array of items of mixed types.
 * * Returns the reversed array.
 * HINT: You will need a GENERIC type
 * The for loop must be used
 * The function must be exported
 * Example: reverseArray([1, 2, 3 ,4]) => [4, 3, 2, 1]
 * Example: reverseArray([1, 2, 3, 'f', 'd', 4]) => [4, 'd', 'f', 3, 2, 1]
 */



export function reverseArray<T>(arr: T[]) {
  // Your code goes here...
  let result: T[] = []
  for (let i: number = 0; i < arr.length; i++) {
    result.unshift(arr[i])
  }
  return result
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-19"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
