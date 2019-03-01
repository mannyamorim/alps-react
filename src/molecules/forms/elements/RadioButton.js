import React from 'react'
import PropTypes from 'prop-types'

import { sizes } from '../../../atoms/global/spacing'
import { fontSizes, fontTypes } from '../../../atoms/global/fonts'

import BaseInput from './BaseInput'
import FormLabel from './FormLabel'

function RadioButton({
  checked,
  error,
  id,
  label,
  labelOptional,
  labelFontSize,
  labelFontType,
  labelWrapperClass,
  labelWrapperSpacingSize,
  name,
  value,
  ...props
}) {
  return (
    <FormLabel
      error={error}
      fontSize={labelFontSize}
      fontType={labelFontType}
      htmlFor={id}
      position="bottom"
      text={label}
      textOptional={labelOptional}
      wrapperClass={labelWrapperClass}
      wrapperSpacingSize={labelWrapperSpacingSize}
    >
      <BaseInput
        checked={checked}
        error={error}
        id={id}
        name={name}
        type="radio"
        value={value}
        {...props}
      />
    </FormLabel>
  )
}

RadioButton.propTypes = {
  checked: PropTypes.bool,
  darkMode: PropTypes.bool,
  error: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  labelOptional: PropTypes.string,
  labelFontSize: PropTypes.oneOf(fontSizes),
  labelFontType: PropTypes.oneOf(fontTypes),
  labelWrapperClass: PropTypes.string,
  labelWrapperSpacingSize: PropTypes.oneOf(sizes),
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
}
RadioButton.defaultProps = {
  labelWrapperClass: null,
  labelWrapperSpacingSize: null,
}

export default RadioButton