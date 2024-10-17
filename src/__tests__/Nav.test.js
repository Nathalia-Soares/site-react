import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Nav from '../components/Nav';

describe('Nav Component', () => {
    test('renders Nav component', () => {
        render(<Nav />);
        const navElement = screen.getByRole('navigation');
        expect(navElement).toBeInTheDocument();
    });

    test('renders Home link', () => {
        render(<Nav />);
        const homeLink = screen.getByText('Home');
        expect(homeLink).toBeInTheDocument();
        expect(homeLink).toHaveAttribute('href', '#home');
    });

    test('renders Jogos link', () => {
        render(<Nav />);
        const jogosLink = screen.getByText('Jogos');
        expect(jogosLink).toBeInTheDocument();
        expect(jogosLink).toHaveAttribute('href', '#games');
    });

    test('renders Sobre link', () => {
        render(<Nav />);
        const sobreLink = screen.getByText('Sobre');
        expect(sobreLink).toBeInTheDocument();
        expect(sobreLink).toHaveAttribute('href', '#sobre');
    });
});