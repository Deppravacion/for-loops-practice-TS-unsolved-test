/**
 * EXERCISE 18
 * ======================================================
 * @task
 * Create the joinToString() function that re-assembles the array.join() method and follows:
 * * Takes an object of two key-value pairs as an argument:
 * * * 'arr', an array of strings (single characters)
 * * * 'separator', a string value
 * * Returns a string of concatenated array items with a separator BETWEEN every next item.
 * The for loop must be used
 * The function must be exported
 * Example: joinToString(['a', 'b', 'c'], '-') => 'a-b-c'
 * NOTE: You can NOT use the array.join(), array.toString(), and array.replace() methods in your code
 */

export interface Myface<T> {
  arr: T[];
  separator: string;
}

export function joinToString<T extends string>({ arr, separator }: Myface<T>): string {
  // Your code goes here...
  let subStrArr: string[] = []
  let result: string = ''

  for (let i: number = 0; i < arr.length; i ++ ) {
    subStrArr.push(arr[i])
    if (i < arr.length - 1) {
      subStrArr.push(separator)
    }
  }
  for (let f: number = 0; f < subStrArr.length; f++) {
    result += `${subStrArr[f]}`
  }
  return result
}


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
