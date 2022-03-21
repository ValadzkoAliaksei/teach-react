import { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';

type WatchPropsType = {
  clearState: () => void;
};

export const Watch: React.FC<WatchPropsType> = ({ clearState }) => {
  const [seconds, setSeconds] = useState(10);
  const intervalRef = useRef<number>();

  const formatTime = (num: number) => {
    if (num < 10) return `0${num}`;
    return num;
  };

  useEffect(() => {
    if (seconds === 0) {
      clearState();
      window.clearInterval(intervalRef.current);
    }
  }, [seconds, clearState]);

  useEffect(() => {
    const timerId = window.setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);
    intervalRef.current = timerId;
    return () => {
      window.clearInterval(intervalRef.current);
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
