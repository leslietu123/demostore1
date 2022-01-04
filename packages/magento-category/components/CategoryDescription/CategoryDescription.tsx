import { UseStyles } from '@graphcommerce/next-ui'
import { Theme } from '@mui/material'
import { makeStyles } from '@graphcommerce/next-ui'
import React from 'react'
import { CategoryDescriptionFragment } from './CategoryDescription.gql'

type CategoryDescriptionProps = Omit<CategoryDescriptionFragment, 'uid'> &
  JSX.IntrinsicElements['div'] &
  UseStyles<typeof useStyles>

const useStyles = makeStyles()(
  (theme: Theme) => ({
    root: {
      gridArea: 'description',
      margin: `0 auto ${theme.spacings.sm}`,
      padding: `0 ${theme.page.horizontal}`,
      textAlign: 'center',
      [theme.breakpoints.up('md')]: {
        maxWidth: '50%',
      },
      [theme.breakpoints.up('xl')]: {
        maxWidth: '30%',
      },
      ...theme.typography.subtitle1,
    },
  }),
  { name: 'CategoryDescription' },
)

export default function CategoryDescription(props: CategoryDescriptionProps) {
  const { name, description, display_mode, ...divProps } = props
  const { classes } = useStyles(props)

  return description ? (
    // eslint-disable-next-line react/no-danger
    <div {...divProps} className={classes.root} dangerouslySetInnerHTML={{ __html: description }} />
  ) : null
}
