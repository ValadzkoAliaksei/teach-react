import PropTypes from 'prop-types';
import React from 'react';

export class Watch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 30,
    };
  }

  componentDidMount() {
    this.timerId = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  tick() {
    const { seconds } = this.state;
    const { clearState } = this.props;
    if (seconds !== 1) {
      this.setState((prevState) => ({
        seconds: prevState.seconds - 1,
      }));
    } else {
      this.setState((prevState) => ({
        seconds: prevState.seconds - 1,
      }));
      clearState();
      clearInterval(this.timerId);
    }
  }

  formatTime(num) {
    if (num < 10) return `0${num}`;
    return num;
  }

  render() {
    const { seconds } = this.state;
    return (
      <div>
        <span>{this.formatTime(Math.floor(seconds / 60))}:</span>
        <span>{this.formatTime(seconds % 60)}</span>
      </div>
    );
  }
}

Watch.propTypes = {
  clearState: PropTypes.func.isRequired,
};
