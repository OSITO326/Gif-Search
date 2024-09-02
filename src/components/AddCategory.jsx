import { useState } from 'react';
import PropTypes from 'prop-types';

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
    <form onSubmit={onSubmit} aria-label='form'>
      <input
        type='text'
        placeholder='Buscar gifs'
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};

AddCategory.protoTypes = {
  onNewCategory: PropTypes.func.isRequired,
};
