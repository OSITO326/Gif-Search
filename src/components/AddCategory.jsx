import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, SetInputValue] = useState('');

  const onInputChange = ({ target }) => {
    SetInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const newInputValue = inputValue.trim();
    if (newInputValue.length <= 1) return;
    // onNewCategory((categories) => [inputValue, ...categories]);
    onNewCategory(newInputValue);
    SetInputValue('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type='text'
        placeholder='Buscar gifs'
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
