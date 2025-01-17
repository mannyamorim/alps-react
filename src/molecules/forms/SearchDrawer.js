"use client"

import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types'

import Icon from '../../atoms/icons/Icon'
import Suggestions from '../components/Suggestions'
import Form from './elements/Form'
import SubmitButton from './elements/SubmitButton'
import TextField from './elements/TextField'

export default function SearchDrawer({
  clearLabel,
  filters,
  filtersLabel,
  hasFocus,
  name,
  onClear,
  onSearch,
  onSubmit,
  placeholder,
  suggestions,
  showClear,
  term,
  ...props
}) {
  const [showSuggestions, setShowSuggestions] = useState()

  const onTermChange = useCallback(
    e => {
      const term = e.target.value || ''
      setShowSuggestions(term.length > 0)

      if (typeof onSearch === 'function') onSearch(e)
    },
    [onSearch]
  )

  const onTermClear = useCallback(
    e => {
      e.preventDefault()

      if (typeof onClear === 'function') onClear(e)
    },
    [onClear]
  )

  return (
    <div className="c-search-drawer u-theme--dark u-theme--background-color--darker">
      <div className="c-search-drawer__filter c-filter">
        <Form
          className="c-filter__search"
          role="search"
          onSubmit={onSubmit}
          {...props}
        >
          <div className="c-filter__inline">
            <TextField
              id="drawer-search-input"
              type="search"
              className="u-font--secondary--s u-theme--color--darker can-be--white"
              name={name}
              placeholder={placeholder}
              hasFocus={hasFocus}
              onChange={onTermChange}
              value={term}
              required
              autoComplete="off"
            />
            <SubmitButton className="c-search-drawer__submit" vishidden />
            {showClear && (
              <button
                className="o-button o-button--simple can-be--white"
                onClick={onTermClear}
              >
                <font>{clearLabel}</font>
              </button>
            )}
          </div>

          {filters && (
            <button
              className="c-filter__toggle js-toggle o-button o-button--simple--gray"
              data-toggled="c-filter"
              data-prefix="c-filter"
            >
              <span className="u-icon u-icon--xs u-theme--path-fill--base">
                <Icon name="settings" />
              </span>
              <font>{filtersLabel}</font>
            </button>
          )}
        </Form>
        {filters}
      </div>

      {suggestions && (
        <Suggestions {...suggestions} visible={showSuggestions} />
      )}
    </div>
  )
}

SearchDrawer.propTypes = {
  clearLabel: PropTypes.string,
  hasFocus: PropTypes.bool,
  name: PropTypes.string,
  filters: PropTypes.node,
  filtersLabel: PropTypes.string,
  onClear: PropTypes.func,
  onSearch: PropTypes.func,
  onSubmit: PropTypes.func,
  placeholder: PropTypes.string,
  showClear: PropTypes.bool,
  suggestions: PropTypes.shape({
    items: PropTypes.array,
    itemsTitle: PropTypes.string,
    otherItems: PropTypes.array,
    otherTitle: PropTypes.string,
  }),
  term: PropTypes.string,
}

SearchDrawer.defaultProps = {
  clearLabel: 'Clear search',
  name: 'search',
  placeholder: 'Search...',
  showClear: true,
}
