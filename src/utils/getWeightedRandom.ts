export const getWeightedRandom = (
  arr: Array<{ value: number; weight: number }>
) => {
  const cumulativeWeights = [];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i].weight;
    cumulativeWeights[i] = sum;
  }

  // Generate a random number between 0 and the total sum of the weights
  const random = Math.random() * sum;

  // Determine the number based on the cumulative weights
  for (let i = 0; i < cumulativeWeights.length; i++) {
    if (random < cumulativeWeights[i]) {
      return arr[i].value;
    }
  }
  return -1;
};
