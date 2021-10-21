export const getWords = async () => {
  try {
    const data = await fetch('http://localhost:3004/words');
    return data.json();
  } catch (error) {
    throw error;
  }
};

export const addWord = async newWord => {
  try {
    const data = await fetch('http://localhost:3004/words', {
      method: 'POST',
      body: JSON.stringify({
        word: newWord,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return data.json();
  } catch (error) {
    throw error;
  }
};
