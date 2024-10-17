import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'; // Import jest-dom matchers
import Main from '../components/Main';

describe('Main Component', () => {
    it('should render the main heading', () => {
        const { getByText } = render(<Main />);
        const headingElement = getByText(/Jogos em Destaque/i);
        expect(headingElement).toBeInTheDocument();
    });

    it('should render all game cards', () => {
        const { getAllByAltText } = render(<Main />);
        const gameImages = getAllByAltText(/Street Fighter 2/i);
        expect(gameImages.length).toBe(20);
    });

    it('should render specific game details', () => {
        const { getByText } = render(<Main />);
        
        const game1 = getByText(/Street Fighter 2/i);
        expect(game1).toBeInTheDocument();
        
        const game2 = getByText(/Sonic The Hedgehog 2/i);
        expect(game2).toBeInTheDocument();
        
        const game3 = getByText(/Super Mario Bros 2 - Yoshi`s Island/i);
        expect(game3).toBeInTheDocument();
        
        const game4 = getByText(/The Legend of Zelda - A Link to the Past/i);
        expect(game4).toBeInTheDocument();
        
        const game5 = getByText(/Chrono Trigger/i);
        expect(game5).toBeInTheDocument();
        
        const game6 = getByText(/Final Fight/i);
        expect(game6).toBeInTheDocument();
        
        const game7 = getByText(/Streets of Rage 2/i);
        expect(game7).toBeInTheDocument();
        
        const game8 = getByText(/Top Gear/i);
        expect(game8).toBeInTheDocument();
        
        const game9 = getByText(/Road Rash 3/i);
        expect(game9).toBeInTheDocument();
        
        const game10 = getByText(/Golden Axe/i);
        expect(game10).toBeInTheDocument();
        
        const game11 = getByText(/The Revenge of Shinobi/i);
        expect(game11).toBeInTheDocument();
        
        const game12 = getByText(/Alex Kidd in Miracle World/i);
        expect(game12).toBeInTheDocument();
        
        const game13 = getByText(/Super Castlevamia IV/i);
        expect(game13).toBeInTheDocument();
        
        const game14 = getByText(/Donkey Kong Country 2/i);
        expect(game14).toBeInTheDocument();
        
        const game15 = getByText(/Chakan - The Forever Man/i);
        expect(game15).toBeInTheDocument();
        
        const game16 = getByText(/Mega Man 2/i);
        expect(game16).toBeInTheDocument();
        
        const game17 = getByText(/Metroid/i);
        expect(game17).toBeInTheDocument();
        
        const game18 = getByText(/Phantasy Star II/i);
        expect(game18).toBeInTheDocument();
        
        const game19 = getByText(/Cadillacs and Dinosaurs/i);
        expect(game19).toBeInTheDocument();
        
        const game20 = getByText(/Raiden/i);
        expect(game20).toBeInTheDocument();
    });
});