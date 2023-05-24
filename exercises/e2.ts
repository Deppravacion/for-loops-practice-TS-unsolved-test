/**
 * EXERCISE 2
 * ======================================================
 * @task
 * Create the getNumbersWithSquareRoots() function that follows:
 * * Takes the argument named 'max' (number)
 * * Returns: an array of numbers between 0 and max that have square roots that are integer
 * The function return type must be annotated
 * The for loop must be used
 * The function must be exported
 * Example: getNumbersWithSquareRoots(17) => [0, 1, 4, 9, 16]
 */

export function getNumbersWithSquareRoots(max:number) {
  // Your code goes here...
  let result: number[] = []
  for (let i:number = 0; i < max; i++) {
    if ((Math.sqrt(i) % 1 === 0)) {
      result.push(i)
    }
  }
  return result
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-2"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
