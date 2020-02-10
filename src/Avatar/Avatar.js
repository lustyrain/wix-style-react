import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import IconButton from '../IconButton';
import deprecationLog from '../utils/deprecationLog';
import { avatarColorList, avatarShapes, dataHooks } from './constants';
import { Avatar as CoreAvatar } from 'wix-ui-core/dist/src/components/avatar';
import { placeholderSVGs } from './assets';
import styles from './Avatar.st.css';
import { capitalize } from '../utils/cssClassUtils';
import stringToColor from './string-to-color';

const getSizeNumber = size => Number(size.substring(4));
const minIndicationRenderSize = 36;
const minSmallIconButton = 60;
const deprecatedColorList = ['blue', 'green', 'grey', 'red', 'orange'];

/**
 * Avatar is a type of element that visually represents a user, either as an image, name initials or placeholder icon.
 */
const Avatar = props => {
  const {
    size,
    presence,
    indication,
    color: colorProp,
    onIndicationClick,
    dataHook,
    className,
    shape,
    text,
    placeholder,
    name,
    onClick,
    ...rest
  } = props;

  if (deprecatedColorList.indexOf(colorProp) > -1) {
    deprecationLog(
      `Avatar component prop "color" with the value ${colorProp} is deprecated, and will be removed in next major release, please use instead one of these color: [${avatarColorList.toString()}]`,
    );
  }
  const color = colorProp || stringToColor(text || name); //if color is provided as a prop use it, otherwise, generate a color based on the text
  const sizeNumber = getSizeNumber(size);
  const renderIndication = indication && sizeNumber > minIndicationRenderSize;

  return (
    <div
      data-hook={dataHook}
      className={classNames(className, styles.externalContainer)}
    >
      <div
        {...styles('avatarContainer', {
          shape,
          size,
          indication,
          presence,
          presenceType: presence,
          clickable: !!onClick,
        })}
      >
        <div className={styles.coreAvatar}>
          <CoreAvatar
            {...{
              ...rest,
              placeholder: placeholder ? (
                placeholder
              ) : (
                <AvatarDefaultPlaceholder shape={shape} size={size} />
              ),
              text,
              name,
              onClick,
            }}
            className={classNames(
              styles.avatar,
              color && styles[`color${capitalize(color)}`],
            )}
          />
        </div>
        {presence && <div className={styles.presence} />}
        {renderIndication && (
          <div className={styles.indication}>
            <IconButton
              className={styles.iconButtonShadow}
              dataHook={dataHooks.indication}
              onClick={onIndicationClick}
              skin="inverted"
              shape={shape}
              size={sizeNumber > minSmallIconButton ? 'small' : 'tiny'}
            >
              {indication}
            </IconButton>
          </div>
        )}
      </div>
    </div>
  );
};

Avatar.displayName = 'Avatar';

const CoreAvatarPropTypes = {
  /**
   * The name of the avatar user. Text initials will be generated from the name.
   * The name value will be used as default value for html `title` and `aria-label`
   * attributes. And also as default value for the image's `alt` attribute if
   * `imgProps` is provided.
   */
  name: PropTypes.string,
  /** Text to render as content. */
  text: PropTypes.string,
  /**
   * A node with a placeholder to be rendered as content. Will be displayed if no
   * `text`, `name` or `imgProps` are provided. Defaults to an generic Avatar user
   * icon.
   */
  placeholder: PropTypes.node,
  /** Props for an `<img>` tag to be rendered as content. */
  imgProps: PropTypes.object,
  /** HTML aria-label attribute value. To be applied on the root element. */
  ariaLabel: PropTypes.string,
  /** HTML title attribute value. To be applied on the root element. */
  title: PropTypes.string,
  /**
   * Click event handler (when this property is provided the component will be clickable
   * on hover and will have a pointer cursor).
   */
  onClick: PropTypes.func,
};

Avatar.propTypes = {
  ...CoreAvatarPropTypes,
  /** Avatar size. Options like 'size90' mean that the width and height are 90px. */
  size: PropTypes.oneOf([
    'size90',
    'size72',
    'size60',
    'size48',
    'size36',
    'size30',
    'size24',
    'size18',
  ]),
  /**
   * Background color of the avatar. When no color is provided the color is determined
   * by the provided text or name so that each name will receive a different color.
   */
  color: PropTypes.oneOf(['A1', 'A2', 'A3', 'A4', 'A5', 'A6']),
  /** Shape of the image, can be square or circle. */
  shape: PropTypes.oneOf(['circle', 'square']),
  /** Classes to be applied to the root element. */
  className: PropTypes.string,
  /** Applied as data-hook HTML attribute that can be used to create driver in testing. */
  dataHook: PropTypes.string,
  /** Avatar presence. Options like 'online' mean that the contact is online. */
  presence: PropTypes.oneOf(['online', 'offline', 'busy']),
  /** A node to be rendered as Indication. */
  indication: PropTypes.node,
  /** Function which triggers on indication click. */
  onIndicationClick: PropTypes.func,
};

const AvatarDefaultPlaceholder = ({ shape, size }) =>
  shape !== avatarShapes.square
    ? placeholderSVGs[size][avatarShapes.circle]
    : placeholderSVGs[size][avatarShapes.square];

Avatar.defaultProps = {
  size: 'size48',
  shape: 'circle',
};

export default Avatar;
