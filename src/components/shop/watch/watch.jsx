import { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { clearProducts } from '../../../store/products/actions';

export const Watch = ({ dispatch }) => {
  const [seconds, setSeconds] = useState(10);
  const intervalRef = useRef();

  const formatTime = (num) => {
    if (num < 10) return `0${num}`;
    return num;
  };

  useEffect(() => {
    if (seconds === 0) {
      dispatch(clearProducts());
      clearInterval(intervalRef.current);
    }
  }, [seconds, dispatch]);

  useEffect(() => {
    const timerId = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);
    intervalRef.current = timerId;
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div>
      <span>{formatTime(Math.floor(seconds / 60))}:</span>
      <span>{formatTime(seconds % 60)}</span>
    </div>
  );
};

Watch.propTypes = {
  dispatch: PropTypes.func.isRequired,
};
