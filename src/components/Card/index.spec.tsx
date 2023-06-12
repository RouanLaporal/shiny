import Card from ".";
import { fireEvent, render, screen } from "@testing-library/react";


describe('Card', () => {
    it('should render without crashing', () => {
        render(<Card title="Rouan Laporal" label="dev" picture="picture"/>);
    });

    it('should use the picture given', () => {
        render(<Card title="Rouan Laporal" label="dev" picture="picture"/>);
        const imgSelector = screen.getByRole('img');
        expect(imgSelector).toHaveAttribute('src', 'picture');
    });

    it('should display the title', () => {
        render(<Card title="Rouan Laporal" label="dev" picture="picture"/>);
        const cardTitle = screen.getByText('Rouan Laporal')
    });

    it('should add start when click', () => {
        render(<Card title="Rouan Laporal" label="dev" picture="picture"/>);
        const cardTitle = screen.getByText('Rouan Laporal');
        const parentNode = cardTitle.closest('div');
        parentNode ? fireEvent.click(parentNode) : '';
        expect(cardTitle.textContent).toBe('⭐️ Rouan Laporal ⭐️')
    });
})