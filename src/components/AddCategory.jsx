import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState('');
  /* const onInputChange = (event) => {
    console.log(event.target.value);
    setInputValue(event.target.value);
  }; */
  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    // console.log(inputValue);
    const trimmedValue = inputValue.trim();
    if (trimmedValue.length <= 1) return;
    onNewCategory(trimmedValue);
    setInputValue('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type='text'
        placeholder='Buscar gifs...'
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
