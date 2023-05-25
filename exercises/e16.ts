/**
 * EXERCISE 16
 * ======================================================
 * @task
 * Create the flatArrays() function that re-assembles the array.flat() method and follows:
 * * Takes an array of items or of arrays of items of a single type or mixed types.
 * * Returns an single array with all nested arrays unwrapped.
 * HINT: You will need a GENERIC type and type casting knowledge
 * The for loop must be used
 * The function must be exported
 * Example: flatArrays([['d', 'r'], 'z', 'b', ['f', 'y']]) => ['d', 'r', 'z', 'b', 'f', 'y']
 * Example: flatArrays([[1, 'a', 3], 'b', ['c', 2], 5]) => [1, 'a', 3, 'b', 'c', 2, 5]
 * NOTE: You can NOT use the array.flat() method in your code
 */

export function flatArrays<T>(arr: T[]): T[] {
  // Your code goes here...
  let result: T[] = []
  for (let i: number = 0; i < arr.length; i++) {
    const elm = arr[i]
    if (Array.isArray(elm)) {
      const nestedArr = flatArrays(elm)
      for (let k: number = 0; k < nestedArr.length; k++) {
        result.push(nestedArr[k])
      }
    } else {
      result.push(elm)
    }
  }
  return result
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
