type WinningCombinationsResult = [number, number[]][];

export default function call(lines: number[]): WinningCombinationsResult {
  const result: WinningCombinationsResult = [];

  // Check if the array has a sequence of 3 or more same numbers
  const hasSequence = lines.some(function (number, index) {
    // Check if the current element is part of a sequence of 3 or more same numbers
    return lines[index] === lines[index + 1] && lines[index + 1] === lines[index + 2];
  });

  if (hasSequence) {
    // Create an object to store the number of occurrences of each element
    const occurrences: any = {};

    // Iterate over the array
    for (const num of lines) {
    // Increment the number of occurrences of the current element
      if (num in occurrences) {
        occurrences[num] += 1;
      } else {
        occurrences[num] = 1;
      }
    }

    for (const num in occurrences) {
      if (occurrences[num] >= 3) {
        const number = Number(num);
        const indices = lines.map((x, i) => (x === Number(num) ? i : -1)).filter((i) => i !== -1);
        const newIndices = indices.filter((n, index) => {
        // Check if the current number is the second to last element in the array
          if (index !== indices.length - 1) {
          // If it is, check if the subtraction of the posterior with the inferior is equal to 1
            return indices[index + 1] - n === 1;
          }
          // Otherwise, return true to keep the current number in the array
          return true;
        });
        result.push([number, newIndices]);
      } else {
        null;
      }
    }
  } else {
    return result;
  }

  return result;
}
