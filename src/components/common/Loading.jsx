import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LoadingDots extends Component {
  state = { frame: 1 }

  componentDidMount() {
    const { interval } = this.props;
    this.interval = setInterval(() => {
      this.setState(prevState => ({ frame: prevState.frame + 1 }));
    }, interval);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { frame } = this.state;
    const { dots } = this.props;
    let w = frame % (dots + 1);
    let text = '';
    while (w > 0) {
      text += '.';
      w -= 1;
    }
    return (
      <span {...this.props}>
        {text}
        &nbsp;
      </span>
    );
  }
}

LoadingDots.defaultProps = {
  interval: 300,
  dots: 3,
};

LoadingDots.propTypes = {
  interval: PropTypes.number,
  dots: PropTypes.number,
};

export default LoadingDots;
