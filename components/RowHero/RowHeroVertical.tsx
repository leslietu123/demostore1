import React from 'react'
import Asset from 'components/Asset'
import clsx from 'clsx'
import { useHeaderSpacing } from 'components/Header'
import { Button } from 'components/Link'
import { ChevronRight } from 'components/Icons'
import { Container, makeStyles, Theme } from '@material-ui/core'
import RichText from 'components/RichText'
import ContactCta from 'components/ContactCta'
import useRowHeroVerticalStyles from './useRowHeroVerticalStyles'
import { RowHeroProps } from '.'

const RowHeroVertical: React.FC<RowHeroProps> = (props) => {
  const { text, asset, links, children } = props
  const classes = useRowHeroVerticalStyles()
  const headerSpacing = useHeaderSpacing()

  return (
    <div className={classes.wrapper}>
      <Container className={clsx(headerSpacing.paddingTop, classes.grid)}>
        {children ? (
          <div className={classes.colOne}>{children}</div>
        ) : (
          asset && (
            <div className={classes.assetContainer}>
              <div className={classes.vertical}>
                <Asset asset={asset} width={304} className={clsx(classes.video, classes.colOne)} />
              </div>
            </div>
          )
        )}
        <div className={classes.colTwo}>
          <RichText {...text} classes={{ h1: classes.title, paragraph: classes.paragraph }} />
          <div>
            {links.map((link) => {
              if (link.__typename === 'LinkInternal' && link.page && link.description)
                return (
                  <div key={link.id} className={classes.ctaBlock}>
                    <small>
                      <RichText {...link.description} classes={{ paragraph: classes.paragraph }} />
                    </small>
                    <Button
                      href={link.page.url}
                      metaRobots={link.page.metaRobots}
                      variant='contained'
                      color='default'
                      endIcon={<ChevronRight />}
                      size='large'
                      classes={{ root: classes.button }}
                      disableElevation
                    >
                      {link.title}
                    </Button>
                  </div>
                )
              if (link.__typename === 'LinkExternal')
                return (
                  <a
                    href={link.url}
                    target='_blank'
                    rel='noopener nofollow noreferrer'
                    key={link.id}
                  >
                    {link.title}
                  </a>
                )
              return undefined
            })}
          </div>
          <ContactCta {...props} />
        </div>
      </Container>
    </div>
  )
}

export default RowHeroVertical