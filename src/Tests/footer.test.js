import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '../components/Footer';

describe('Footer', () => {
  test('renders the footer text correctly', () => {
    render(<Footer />);
    const footerElement = screen.getByText('Created by Santiago Muñoz');
    expect(footerElement).toBeInTheDocument();

    expect(footerElement).toMatchSnapshot();
  });
});
