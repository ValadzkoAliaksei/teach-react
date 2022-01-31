import { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';

export const Watch = ({ clearState }) => {
  const [seconds, setSeconds] = useState(10);
  const intervalRef = useRef();

  const formatTime = (num) => {
    if (num < 10) return `0${num}`;
    return num;
  };

  useEffect(() => {
    if (seconds === 0) {
      clearState();
      clearInterval(intervalRef.current);
    }
  }, [seconds, clearState]);

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
  clearState: PropTypes.func.isRequired,
};
