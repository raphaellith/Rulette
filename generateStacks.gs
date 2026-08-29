function shuffle(array) {
  const shuffled = [...array];  // Create copy
  
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));  // Pick a random index from 0 to i

    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  
  return shuffled;
}

function generateStacks() {
  /** 
   * Returns output of shape:
   * [
   *   {
   *      rule: "a rule",
   *      modifier: "a modifier"  [OR]  prompt: "a prompt"
   *   },
   *   ...
   * ]
   */

  let result = [];

  for (const [modifier, amount] of Object.entries(modifiers)) {
    for (let i = 0; i < amount; i++) {
      result.push({modifier});
    }
  }

  for (const prompt of prompts) {
    result.push({prompt});
  }

  result = shuffle(result);

  for (let i = 0; i < result.length; i++) {
    result[i].rule = rules[i];
  }

  result = shuffle(result);

  return result;
}
