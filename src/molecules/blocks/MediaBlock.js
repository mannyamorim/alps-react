import React from 'react'
import PropTypes from 'prop-types'

import Button from '../../atoms/buttons/Button'
import Figure from '../../molecules/media/Figure'
import DateTimeFormat, { dateFormats } from '../../helpers/DateTimeFormat'
import Element, {
  Em,
  Div,
  HeadingFour,
  HeadingThree,
  Link,
} from '../../helpers/Element'
import useClasses from '../../helpers/useClasses'

import MediaImage from './MediaImage'
import presets from './MediaBlock.presets'

const blockClass = 'c-block'
const mediaBlockClass = 'c-media-block'

export const mediaBlocksTypes = Object.keys(presets)

/**
 * The MediaBlock Component
 */
function MediaBlock({
  asBackgroundImage,
  mediaIcon,
  blockProps,
  category,
  contentProps,
  cta,
  ctaIcon,
  date,
  dateFormat,
  dateStyle,
  description,
  image,
  imageProps,
  kicker,
  reversed,
  stackedUntilSmall,
  title,
  titlePrefix,
  type,
  video,
  url,
}) {
  // Get preset props current type
  const preset = presets[type || 'default']

  const isReversed = reversed !== undefined ? reversed : preset.reversed

  const blockType = preset.type || type

  const wrapClasses = useClasses(`${mediaBlockClass} ${blockClass}`, {
    [`${blockClass}__${blockType}`]: blockType,
    [`${blockClass}__stacked--until-small`]:
      blockType && (stackedUntilSmall || preset.stackedUntilSmall),
    [`${mediaBlockClass}--reversed`]: blockType && isReversed,
    [`${blockClass}--reversed`]: blockType && isReversed,
  })

  return (
    <Div className={wrapClasses} {...preset.block} {...blockProps}>
      {image && (
        <MediaImage
          icon={mediaIcon}
          asBackgroundImage={asBackgroundImage}
          {...preset.image}
          {...imageProps}
          image={image}
          url={url}
        />
      )}
      {video && (
        <div className="c-block__image-wrap" {...imageProps}>
          <Figure videoSrc={video} />
        </div>
      )}
      <Div
        className="c-media-block__content c-block__content"
        spacing
        {...preset.content}
        {...(isReversed ? preset.contentReversed : {})}
        {...contentProps}
      >
        <Div
          className="c-block__group c-media-block__group"
          spacing
          {...preset.group}
        >
          <Div className="u-width--100p" spacing>
            {kicker && (
              <HeadingFour
                className="c-media-block__kicker c-block__kicker"
                spaceSide="bottom"
                spaceSize="quarter"
                {...preset.kicker}
              >
                {kicker}
              </HeadingFour>
            )}
            {title && (
              <HeadingThree
                className="c-media-block__title c-block__title"
                spaceSize={kicker ? 'zero' : null}
                // themeColor="dark"
                fontType="primary"
                {...preset.title}
              >
                <Link
                  className="c-block__title-link"
                  href={url}
                  themeLinkHover="dark"
                  {...preset.titleLink}
                >
                  {titlePrefix && <Em themeColor="lighter">{titlePrefix}: </Em>}
                  {title}
                </Link>
              </HeadingThree>
            )}
            {description && (
              <p className="c-media-block__description c-block__description">
                {description}
              </p>
            )}
          </Div>
          {(category || date) && (
            <Div className="c-media-block__meta c-block__meta" {...preset.meta}>
              {category && <Div className="c-block__category">{category}</Div>}
              {date && (
                <Element
                  as="time"
                  className="c-block__date"
                  dateTime={date}
                  transform="upper"
                >
                  <DateTimeFormat
                    datetime={date}
                    format={dateFormat}
                    style={dateStyle}
                  />
                </Element>
              )}
            </Div>
          )}
          {cta && url && (
            <Button
              as="a"
              className="c-block__button"
              icon={ctaIcon}
              iconSize="m"
              outline
              text={cta}
              url={url}
            />
          )}
        </Div>
      </Div>
    </Div>
  )
}

MediaBlock.propTypes = {
  asBackgroundImage: PropTypes.bool,
  mediaIcon: PropTypes.oneOf(['audio', 'gallery', 'video']),
  blockProps: PropTypes.shape(Element.propTypes),
  category: PropTypes.string,
  column: PropTypes.bool,
  contentProps: PropTypes.shape(Element.propTypes),
  cta: PropTypes.string,
  ctaIcon: Button.propTypes.icon,
  description: PropTypes.string,
  date: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.string,
  ]),
  dateFormat: PropTypes.oneOf(dateFormats),
  dateStyle: PropTypes.object,
  image: MediaImage.propTypes.image,
  imageProps: PropTypes.shape(Element.propTypes),
  kicker: PropTypes.string,
  url: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  reversed: PropTypes.bool,
  stackedUntilSmall: PropTypes.bool,
  title: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  titlePrefix: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  type: PropTypes.oneOf(mediaBlocksTypes),
  video: PropTypes.node,
}

MediaBlock.defaultProps = {
  asBackgroundImage: false,
  ctaIcon: 'arrow-long-right',
  dateFormat: 'date',
  dateStyle: { date: 'long' },
}

export default MediaBlock
