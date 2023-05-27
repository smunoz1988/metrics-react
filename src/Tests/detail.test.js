import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Detail from '../routes/detail';
import { getDetails } from '../redux/details/detailSlice';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
  useParams: jest.fn(),
}));

jest.mock('../redux/details/detailSlice', () => ({
  getDetails: jest.fn(),
}));

describe('Detail', () => {
  beforeEach(() => {
    useDispatch.mockReturnValue(jest.fn());
    useSelector.mockReturnValue({});
    useNavigate.mockReturnValue(jest.fn());
    useParams.mockReturnValue({ driverId: '1' });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('calls dispatch with getDetails action on component mount', () => {
    render(<Detail />);

    expect(getDetails).toHaveBeenCalledWith('1');
  });

  test('navigates to "/Drivers" when return button is clicked', () => {
    const navigate = jest.fn();
    useNavigate.mockReturnValue(navigate);

    render(<Detail />);

    fireEvent.click(screen.getByRole('button'));

    expect(navigate).toHaveBeenCalledWith('/Drivers');
  });

  test('renders correctly', () => {
    useSelector.mockReturnValueOnce(null);
    useSelector.mockReturnValueOnce(true);

    const { asFragment } = render(<Detail />);

    expect(asFragment()).toMatchSnapshot();
  });
});
