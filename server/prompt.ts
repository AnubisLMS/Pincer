export const constructPrompt = (
  code: string,
  context: string,
  language: string,
) => `Rules:
  1. Complete the code provided, using the code provided.
  2. DO NOT RE-INCLUDE THE CODE PROVIDED IN YOUR ANSWER.
  3. DO NOT EXPLAIN ANYTHING
  4. ONLY return code, do not explain anything
  5. Your completion should start with the character after the code provided
  6. Use the following language ${language}
  \n
  ${context ?? ""}\n

  CODE TO COMPLETE:\n
  
  ${code}
`;
