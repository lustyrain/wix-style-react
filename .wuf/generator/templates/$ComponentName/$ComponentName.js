import React from 'react';
import PropTypes from 'prop-types';

import Text from '../Text';
import Button from '../Button';
import styles from './<%= ComponentName %>.st.css';
import { dataHooks } from './constants';

/** <%= description %> */
class <%= ComponentName %> extends React.PureComponent {
  state = {
    count: 0,
  };

  _handleClick = () => {
    this.setState(({ count }) => ({
      count: count + 1,
    }));
  };

  render() {
    const { count } = this.state;
    const { dataHook, buttonText } = this.props;
    const isEven = count % 2 === 0;

    return (
      <div
        {...styles('root', { even: isEven, odd: !isEven }, this.props)}
        data-hook={dataHook}
      >
        <Text dataHook={dataHooks.<%= componentName %>Count}>
          You clicked this button {isEven ? 'even' : 'odd'} number (
          <span className={styles.number}>
            {count}
          </span>
          ) of times
        </Text>

        <div className={styles.button}>
          <Button
            onClick={this._handleClick}
            dataHook={dataHooks.<%= componentName %>Button}
          >
            {buttonText}
          </Button>
        </div>
      </div>
    );
  }
}

<%= ComponentName %>.displayName = '<%= ComponentName %>';

<%= ComponentName %>.propTypes = {
  /** Applied as data-hook HTML attribute that can be used in the tests */
  dataHook: PropTypes.string,

  /** A css class to be applied to the component's root element */
  className: PropTypes.string,

  /** Text for the button */
  buttonText: PropTypes.string,
};

<%= ComponentName %>.defaultProps = {
};

export default <%= ComponentName %>;
