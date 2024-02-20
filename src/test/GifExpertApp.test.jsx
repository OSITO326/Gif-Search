import { render } from '@testing-library/react';
import { GifExpertApp } from '../GifExpertApp';

describe('Test component <GifExpertApp />', () => {
  test('should be match to snapshot', () => {
    const title = 'Gif Search';
    const { container, getByText } = render(<GifExpertApp title={title} />);
    expect(getByText(title)).toBeTruthy();
    expect(container).toMatchSnapshot();
  });
});
