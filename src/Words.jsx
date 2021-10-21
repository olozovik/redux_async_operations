import { fetchWords, addNewWord } from './redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

export const Words = () => {
  const dispatch = useDispatch();
  const words = useSelector(state => state.words.entities);
  const [newWord, setNewWord] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    setNewWord(e.currentTarget.elements.newWord.value);
    e.currentTarget.elements.newWord.value = '';
  };

  useEffect(() => {
    if (newWord.length === 0) return;
    dispatch(addNewWord(newWord));
  }, [dispatch, newWord]);

  useEffect(() => {
    dispatch(fetchWords());
  }, [dispatch]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="newWord" />
        <button type="submit">Add new word</button>
      </form>
      <ul>
        {words?.map(({ word, id }) => {
          return <li key={id}>{word}</li>;
        })}
      </ul>
    </>
  );
};
