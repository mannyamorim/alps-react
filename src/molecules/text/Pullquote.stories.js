import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, withKnobs } from '@storybook/addon-knobs'

import Pullquote from './Pullquote'

const propsTab = 'Props'
const defaults = {
  quote:
    'Mauris sit amet augue gravida, dignissim sem maximus, aliquam metus. Maecenas eu consectetur orci, id auctor dui.',
  author: 'Alvin Brodus',
}

storiesOf('molecules/text/Pullquote', module)
  .addDecorator(withKnobs)

  .addWithJSX('Default', () => {
    const quote = text('Quote', defaults.quote, propsTab)
    return <Pullquote>{quote}</Pullquote>
  })

  .addWithJSX('With Author', () => {
    const quote = text('Quote', defaults.quote, propsTab)
    const author = text('Author', defaults.author, propsTab)
    return <Pullquote author={author}>{quote}</Pullquote>
  })
