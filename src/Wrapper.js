import React, { Suspense } from 'react'
import PropTypes from 'prop-types'

import Body from './Body'
import { DrawerContextProvider } from './helpers/useDrawerContext'
import { LinkContextProvider } from './helpers/useLinkContext'

function Wrapper({ LinkWrapper, ...props }) {
  return (
    <LinkContextProvider LinkWrapper={LinkWrapper}>
      <DrawerContextProvider>
        <Suspense fallback={<span />}>
          <Body {...props} />
        </Suspense>
      </DrawerContextProvider>
    </LinkContextProvider>
  )
}

Wrapper.propTypes = {
  LinkWrapper: PropTypes.func,
  ...Body.propTypes,
}
Wrapper.defaultProps = Body.defaultProps

export { Body, DrawerContextProvider, LinkContextProvider }

export default Wrapper
