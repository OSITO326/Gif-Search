import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components';
import { useFetchGifs } from '../../src/hook/useFetchGifs';

jest.mock('../../src/hook/useFetchGifs');

describe('Pruebas en <GifGrid/>', () => {
  const category = 'One Punch';

  test('debe de mostrar el loading inicialmente', () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });
    render(<GifGrid category={category} />);
    // screen.debug();
    expect(screen.getByText('Cargando...'));
    expect(screen.getByText(category));
  });

  test('debe de mostrar items cuando se cargan las imágenes useFetchGifs', () => {
    const gifs = [
      {
        id: 'ABC',
        title: 'Saitama',
        url: 'https://localhost/saitama.jpg',
      },
      {
        id: 'XYZ',
        title: 'Goku',
        url: 'https://localhost/goku.jpg',
      },
    ];
    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: true,
    });
    render(<GifGrid category={category} />);
    // screen.debug();
    expect(screen.getAllByRole('img').length).toBe(2);
  });
});
