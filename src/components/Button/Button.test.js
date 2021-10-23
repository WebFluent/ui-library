import React from 'react';
import { render } from '@testing-library/react';
import Button from '.';

describe('Button', () => {
  it('renders a button', () => {
    const { getByText } = render(<Button>Test Button</Button>);

    expect(getByText('Test Button')).toBeTruthy();
  });
});
