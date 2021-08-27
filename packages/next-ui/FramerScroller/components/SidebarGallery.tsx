import { ContainerProps, Fab, makeStyles, Theme, useTheme } from '@material-ui/core'
import {
  ScrollerButton,
  ScrollerDots,
  ScrollerProvider,
  Scroller,
  MotionImageAspectProps,
  CenterSlide,
  MotionImageAspect,
} from '@reachdigital/framer-scroller'
import { clientSize } from '@reachdigital/framer-utils'
import clsx from 'clsx'
import { m, MotionValue, useTransform } from 'framer-motion'
import React, { useState } from 'react'
import { UseStyles } from '../../Styles'
import SvgImage from '../../SvgImage'
import SvgImageSimple from '../../SvgImage/SvgImageSimple'
import {
  iconChevronLeft,
  iconChevronRight,
  iconCollapseVertical,
  iconExpandVertical,
} from '../../icons'

export type StyleProps = {
  aspectRatio?: [number, number]
}

const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      display: 'grid',
      [theme.breakpoints.up('md')]: {
        gridTemplateColumns: '1fr auto',
      },
      background: theme.palette.background.highlight,
      paddingRight: `calc((100% - ${theme.breakpoints.values.lg}px) / 2)`,
    },
    rootZoomed: {
      position: 'relative',
      zIndex: theme.zIndex.modal,
      marginTop: 0,
      [theme.breakpoints.up('md')]: {
        marginTop: `calc(${theme.page.headerInnerHeight.sm} * -1  - ${theme.spacings.sm} * 2)`,
      },
      paddingRight: 0,
    },
    scrollerContainer: ({ aspectRatio: [width, height] = [1, 1] }: StyleProps) => {
      const headerHeight = `${theme.page.headerInnerHeight.sm} - ${theme.spacings.sm} * 2`
      const galleryMargin = theme.spacings.lg
      const extraSpacing = theme.spacings.md

      const maxHeight = `calc(100vh - ${headerHeight} - ${galleryMargin} - ${extraSpacing})`
      const ratio = `calc(${width} / ${height} * 100%)`
      return {
        width: '100vw',
        height: 0, // https://stackoverflow.com/questions/44770074/css-grid-row-height-safari-bug
        position: 'relative',
        minHeight: '100%',
        paddingTop: `min(${ratio}, ${maxHeight})`,
        borderRadius: 2,
      }
    },
    scrollerContainerZoomed: ({ aspectRatio: [width, height] = [1, 1] }: StyleProps) => {
      const headerHeight = `${theme.page.headerInnerHeight.sm} - ${theme.spacings.sm} * 2`
      const maxHeight = `calc(100vh - ${headerHeight})`
      const ratio = `calc(${width} / ${height} * 100%)`
      return {
        paddingTop: '100vh', // `min(${ratio}, ${maxHeight})`,
      }
    },
    scroller: {
      position: 'absolute',
      top: 0,
      width: '100%',
      height: '100%',
      display: `grid`,
      gridAutoFlow: `column`,
      gridTemplateColumns: `repeat(100, 100%)`,
      gridTemplateRows: `100%`,
    },

    sidebarWrapper: {
      boxSizing: 'content-box',
      display: 'grid',
      justifyItems: 'start',
      alignContent: 'center',
      position: 'relative',
      width: `calc(400px + ${theme.page.horizontal} * 2)`,
    },
    sidebarWrapperZoomed: {
      [theme.breakpoints.up('md')]: {
        // paddingLeft: theme.spacings.lg,
        marginLeft: `calc((400px + ${theme.page.horizontal} * 2) * -1)`,
        left: `calc(400px + ${theme.page.horizontal} * 2)`,
        // width: 400,
      },
    },
    sidebar: {
      padding: `${theme.spacings.md} ${theme.page.horizontal}`,
      [theme.breakpoints.up('md')]: {
        paddingLeft: theme.spacings.lg,
      },
    },
    bottomCenter: {
      display: 'grid',
      gridAutoFlow: 'column',
      gap: theme.spacings.xxs,
      position: 'absolute',
      bottom: theme.spacings.sm,
      justifyContent: 'center',
      width: '100%',
      pointerEvents: 'none',
      '& > *': {
        pointerEvents: 'all',
      },
    },
    sliderButtons: {
      boxShadow: theme.shadows[2],
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    },
    toggleIcon: {
      boxShadow: theme.shadows[2],
    },
    topRight: {
      display: 'grid',
      gridAutoFlow: 'column',
      top: theme.spacings.sm,
      gap: theme.spacings.xxs,
      position: 'absolute',
      right: theme.spacings.sm,
    },
  }),
  { name: 'SidebarGallery' },
)

type SidebarGalleryProps = {
  children: React.ReactNode
  sidebar: React.ReactNode
  images: MotionImageAspectProps[]
} & StyleProps &
  UseStyles<typeof useStyles>

export default function SidebarGallery(props: SidebarGalleryProps) {
  const { children, sidebar, images } = props
  const [zoomed, setZoomed] = useState(false)
  const classes = useStyles(props)

  const toggle = () => {
    setZoomed(!zoomed)
    document.body.style.overflow = !zoomed ? 'hidden' : ''
    if (!zoomed) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }
  // const height = useTransform([clientSize.y] as MotionValue[], ([y]: number[]) => {
  //   console.log(y)
  // })

  const clsxZoom = (key: string) => clsx(classes?.[key], zoomed && classes?.[`${key}Zoomed`])

  const theme = useTheme()

  return (
    <ScrollerProvider scrollSnapAlign='center'>
      <m.div layout className={clsxZoom('root')}>
        {/* <div className={clsxZoom('wrapper')}>
        <div className={clsxZoom('root')}>
          <m.div className={clsxZoom('scrollerContainer')}>
            <m.div layout className={clsxZoom('container')}> */}

        <m.div layout className={clsxZoom('scrollerContainer')}>
          <Scroller className={clsxZoom('scroller')} hideScrollbar>
            {images.map((image, idx) => (
              <CenterSlide key={typeof image.src === 'string' ? image.src : idx}>
                <MotionImageAspect
                  layout
                  src={image.src}
                  width={1532}
                  height={1678}
                  sizes={{
                    0: '100vw',
                    [theme.breakpoints.values.md]: zoomed ? '100vw' : '60vw',
                  }}
                  dontReportWronglySizedImages
                />
              </CenterSlide>
            ))}
          </Scroller>
          <m.div layout className={classes.topRight}>
            <Fab color='inherit' size='small' className={classes.toggleIcon} onClick={toggle}>
              {!zoomed ? (
                <SvgImage src={iconExpandVertical} alt='Zoom in' loading='eager' />
              ) : (
                <SvgImage src={iconCollapseVertical} alt='Zoom out' loading='eager' />
              )}
            </Fab>
          </m.div>
          <div className={classes.bottomCenter}>
            <ScrollerButton layout direction='left' size='small' className={classes.sliderButtons}>
              <SvgImageSimple src={iconChevronLeft} />
            </ScrollerButton>
            <ScrollerDots layout />
            <ScrollerButton layout direction='right' size='small' className={classes.sliderButtons}>
              <SvgImageSimple src={iconChevronRight} />
            </ScrollerButton>
          </div>
        </m.div>
        <div className={clsxZoom('sidebarWrapper')}>
          <m.div layout className={clsxZoom('sidebar')}>
            {sidebar}
          </m.div>
        </div>
      </m.div>
    </ScrollerProvider>
  )
}
