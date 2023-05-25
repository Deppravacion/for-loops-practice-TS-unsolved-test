/**
 * EXERCISE 20
 * ======================================================
 * @task
 * Create the separateNamesWithAFromRest() function that follows:
 * * Takes an array of strings.
 * * Returns an array of two arrays:
 * * * the first array of strings from initial array that include 'a'
 * * * the second array of strings from initial array that DO NOT include 'a'
 * The function return type MUST be annotated
 * The for loop must be used
 * The function must be exported
 * Example: separateNamesWithAFromRest(["jon", "alice", "andrew", "mark", "jimmy"]) -> [["alice", "andrew", "mark"], ["jon", "jimmy"]]
 * NOTE: You MUST use double/nested FOR loop to solve this exercise. The array.includes() method is NOT allowed.
 */

export function separateNamesWithAFromRest(arr: string[]) {
  // Your code goes here...
  let result: string[][] = []
  let includesA: string[] = []
  let notA: string[] = []
  // loop through given Aray and build the includesA, and notA string Array
  for (let i: number = 0; i < arr.length;  i++) {
    const str: string = arr[i]
    let bool: boolean = false
    for (let f: number = 0 ; f < str.length; f++) {
      if (str[f].toLocaleLowerCase() === 'a') {
        bool = true
      }
    }
    if (bool) {
      includesA.push(str)
    } else {
      notA.push(str)
    }
  }
  result = [[...includesA], [...notA]]

return result
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-20"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
