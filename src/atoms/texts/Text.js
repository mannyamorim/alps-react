import React from 'react'
import PropTypes from 'prop-types'

import Element from '../../helpers/Element'
import useDropcap from '../../helpers/useDropcap'
import { getSpacingClass, sides, sizes } from '../global/spacing'
import Dropcap from './Dropcap'

function Text({
  as,
  children,
  hasDropcap,
  hasSpacing,
  spacingSize,
  spacingSide,
}) {
  const content = useDropcap(children, { Dropcap, enabled: hasDropcap })
  const dropcap = hasDropcap ? 'has-dropcap' : ''
  const spacing = hasSpacing
    ? getSpacingClass({
        size: spacingSize,
        side: spacingSide,
      })
    : ''

  return (
    <Element tag={as} className={`text ${spacing} ${dropcap}`}>
      {content}
    </Element>
  )
}

Text.propTypes = {
  as: PropTypes.oneOf(['article', 'div', 'section']),
  children: PropTypes.node,
  hasDropcap: PropTypes.bool,
  hasSpacing: PropTypes.bool,
  spacingSide: PropTypes.oneOf(sides),
  spacingSize: PropTypes.oneOf(sizes),
}
Text.defaultProps = {
  as: 'div',
}

export default Text
