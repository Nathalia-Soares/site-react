import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../components/Header';

test('renders the header with correct text', () => {
    const { getByText } = render(<Header />);
    const headerElement = getByText(/Retro Games/i);
    expect(headerElement).toBeInTheDocument();
});

test('renders the header with correct class', () => {
    const { container } = render(<Header />);
    const headerElement = container.querySelector('header');
    expect(headerElement).toHaveClass('retro-header');
});