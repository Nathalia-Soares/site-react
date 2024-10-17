import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Aside from '../components/Aside';

test('renders Aside component with correct text', () => {
    const { getByText } = render(<Aside />);
    
    expect(getByText('Os melhores')).toBeInTheDocument();
    expect(getByText('Aproveite para conhecer os jogos retrô!')).toBeInTheDocument();
});

test('renders Aside component with correct class', () => {
    const { container } = render(<Aside />);
    
    expect(container.firstChild).toHaveClass('retro-aside');
});