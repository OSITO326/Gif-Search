import { fireEvent, render, screen } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';
import { AddCategory } from '../src/components';

describe('Pruebas en el componente <GifExpertApp />', () => {
  test('debe de cambiar el valor de la caja de texto', () => {
    const inputValue = 'Saitama';
    render(<GifExpertApp />);
    const input = screen.getByRole('textbox');
    fireEvent.input(input, { target: { value: inputValue } });
    expect(input.value).toBe(inputValue);
    // screen.debug();
  });

  test('no debe de llamar el onNewCategory si el input está vació', () => {
    const onNewCategory = jest.fn();
    render(<AddCategory onNewCategory={onNewCategory} />);
    const form = screen.getByRole('form');
    fireEvent.submit(form);

    expect(onNewCategory).toHaveBeenCalledTimes(0);
  });
});
