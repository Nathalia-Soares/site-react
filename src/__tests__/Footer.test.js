import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '../components/Footer';

test('renders Footer component', () => {
    const { getByText } = render(<Footer />);
    const footerElement = getByText(/Site desenvolvido em React - Nathália Soares \(Eni Essi\)/i);
    expect(footerElement).toBeInTheDocument();
});

test('Footer component has correct class', () => {
    const { container } = render(<Footer />);
    const footerElement = container.querySelector('footer');
    expect(footerElement).toHaveClass('retro-footer');
});