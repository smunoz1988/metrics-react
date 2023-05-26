import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Categories from '../routes/categories';
import { getCategories } from '../redux/categories/categoriesSlice';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

jest.mock('../redux/categories/categoriesSlice', () => ({
  getCategories: jest.fn(),
}));

describe('Categories Component', () => {
  beforeEach(() => {
    useDispatch.mockClear();
    useSelector.mockClear();
    useNavigate.mockClear();
    getCategories.mockClear();
  });

  test('renders the component with loaded drivers', () => {
    const dispatchMock = jest.fn();
    const navigateMock = jest.fn();
    const drivers = [
      { firstname: 'Lewis', lastname: 'Hamilton', rank: 1, points: 100 },
      { firstname: 'Max', lastname: 'Verstappen', rank: 2, points: 90 },
    ];
    useSelector.mockImplementation((selector) => selector({
      category: {
        categories: {
          drivers: drivers,
        },
      },
    }));
    useDispatch.mockReturnValue(dispatchMock);
    useNavigate.mockReturnValue(navigateMock);

    render(<Categories />);

    expect(screen.getByText('Driver Standings')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Search driver..')).toBeInTheDocument();
    expect(screen.getByText('Lewis Hamilton')).toBeInTheDocument();
    expect(screen.getByText('Max Verstappen')).toBeInTheDocument();

    expect(screen.getByText('Driver Standings')).toMatchSnapshot();
  });

  test('renders the component with loading state', () => {
    const dispatchMock = jest.fn();
    useSelector.mockImplementation((selector) => selector({
      category: {
        loading: true,
        categories: [],
        error: '',
      },
    }));
    useDispatch.mockReturnValue(dispatchMock);

    render(<Categories />);

    expect(screen.getByText('Loading...')).toBeInTheDocument();

    expect(screen.getByText('Loading...')).toMatchSnapshot();
  });
});
