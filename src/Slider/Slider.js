import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Slide from 'rc-slider';

import { generateID } from '../utils/generateId';
import SliderHandle from './SliderHandle';
import styles from './Slider.scss';

const range = ({ min, max, step }) => {
  const arr = [];
  for (let i = min; i <= max; i += step) {
    arr.push(i);
  }
  return arr;
};

/**
 * A slider component with multi-range support
 */
export default class Slider extends Component {
  _getMarks() {
    const marksLabels = {};

    if (this._isCustomMarks()) {
      const { marks } = this.props;

      Object.entries(marks).map(([key, value]) => {
        marksLabels[key] = {
          label: this._createMarkNode(value, true),
        };
      });
    } else {
      const { min, max, step } = this.props;

      range({ min, max, step }).map(entry => {
        marksLabels[entry] = {
          label: this._createMarkNode(entry, entry === min || entry === max),
        };
      });
    }

    return marksLabels;
  }

  _isCustomMarks() {
    const { marks } = this.props;
    return !(
      Object.entries(marks).length === 0 && marks.constructor === Object
    );
  }

  _createMarkNode(value, shouldRenderText) {
    return (
      <div>
        <div className={styles.markLine} />
        <div className={styles.markValue}>
          {shouldRenderText && <div className={styles.markText}>{value}</div>}
        </div>
      </div>
    );
  }

  _renderHandle = props => {
    const { displayTooltip, disabled } = this.props;
    const { index } = props;
    let tooltipValue;

    if (this._isCustomMarks()) {
      const { marks } = this.props;
      const { value: key } = props;
      if (marks.hasOwnProperty(key)) {
        tooltipValue = marks[key].toString();
      }
    } else {
      const { value } = props;
      tooltipValue = value.toString();
    }

    return (
      <SliderHandle
        key={index}
        displayTooltip={displayTooltip}
        disabled={disabled}
        {...props}
        value={tooltipValue}
      />
    );
  };

  _renderSlider = () => {
    const {
      pushable,
      allowCross,
      value,
      displayMarks,
      dataHook,
      id,
      ...rest
    } = this.props;
    return Array.isArray(value) && value.length > 1 ? (
      <Slide.Range
        {...rest}
        handle={this._renderHandle}
        marks={displayMarks ? this._getMarks() : {}}
        value={value}
        pushable={pushable}
        allowCros={allowCross}
      />
    ) : (
      <Slide
        {...rest}
        handle={this._renderHandle}
        marks={displayMarks ? this._getMarks() : {}}
        value={Array.isArray(value) ? value[0] : value}
      />
    );
  };

  render() {
    const { dataHook, id } = this.props;
    return (
      <div className="wix-style-react-slider" id={id} data-hook={dataHook}>
        {this._renderSlider()}
      </div>
    );
  }
}

Slider.displayName = 'Slider';

Slider.propTypes = {
  /** Allows the slider's handles to cross. */
  allowCross: PropTypes.bool,

  /** Applied as data-hook HTML attribute that can be used in the tests. */
  dataHook: PropTypes.string,

  /** Controls the visibility of the marks. */
  displayMarks: PropTypes.bool,

  /** Controls visibility of slide handle tooltip */
  displayTooltip: PropTypes.bool,

  /** Applied as id HTML attribute. */
  id: PropTypes.string,

  /** The absolute maximum of the slider's range */
  max: PropTypes.number,

  /** The absolute minimum of the slider's range */
  min: PropTypes.number,

  /** slider marks. The key determines the position, and the value determines what will show. The object structure should be either
   * ```{ number : number}``` / ```{ number : string }```
   * */
  marks: PropTypes.object,

  /** Called after every value change */
  onAfterChange: PropTypes.func,

  /** Called upon every value change */
  onChange: PropTypes.func.isRequired,

  /** Adjust for RTL dir. */
  rtl: PropTypes.bool,

  /** The slider's step */
  step: PropTypes.number,

  /** Allow pushing of surrounding handles when moving a handle. Number means a minimum distance between handles */
  pushable: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),

  /** The slider's selected range */
  value: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.number),
    PropTypes.number,
  ]),

  /** Make it disabled */
  disabled: PropTypes.bool,
};

Slider.defaultProps = {
  min: 1,
  max: 20,
  step: 1,
  value: [2, 7],
  allowCross: true,
  id: generateID(),
  displayTooltip: true,
  displayMarks: true,
  marks: {},
  rtl: false,
  disabled: false,
};
