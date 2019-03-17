import React from 'react'
import PropTypes from 'prop-types'

import { themeBackgroundColors } from '../../atoms/global/colors'

import Icon from '../../atoms/icons/Icon'
import Element from '../../helpers/Element'

// Available icons sizes
export const iconSizes = ['xs', 's', 'm', 'l', 'xl']

export default function IconWrap({
  background,
  className,
  color,
  themeColor,
  fill,
  name,
  size,
  ...props
}) {
  const classes = ['u-icon', `u-icon--${size}`]
  if (className) classes.push(className)

  return (
    <Element
      className={classes.join(' ')}
      themeBackground={background}
      {...props}
    >
      <Icon name={name} color={color} fill={fill} themeColor={themeColor} />
    </Element>
  )
}

IconWrap.propTypes = {
  as: PropTypes.string,
  background: PropTypes.oneOf(themeBackgroundColors),
  className: PropTypes.string,
  color: Icon.propTypes.color,
  themeColor: Icon.propTypes.themeColor,
  fill: Icon.propTypes.fill,
  name: Icon.propTypes.name,
  size: PropTypes.oneOf(iconSizes),
  ...Element.propTypes,
}
IconWrap.defaultProps = {
  as: 'span',
  fill: 'white',
  size: 'm',
}
