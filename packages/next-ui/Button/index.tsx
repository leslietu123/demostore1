import { Button as MuiButton, ButtonClassKey as MuiButtonClassKey, Theme } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import clsx from 'clsx'
import React from 'react'

type BaseButtonProps = Omit<Parameters<typeof MuiButton>['0'], 'variant' | 'classes'> & {
  variant?: 'text' | 'outlined' | 'contained' | 'pill' | 'pill-link'
}

type ButtonClassKey =
  | 'pill'
  | 'pillLink'
  | 'pillPrimary'
  | 'pillSecondary'
  | 'pillSizeLarge'
  | 'pillSizeSmall'
  | 'pillNoElevation'
  | 'textBold'

type ClassKeys = ButtonClassKey | MuiButtonClassKey
type Text = 'normal' | 'bold'

export type ButtonProps = BaseButtonProps & {
  classes?: { [index in ClassKeys]?: string }
  loading?: boolean
  text?: Text
}

const useStyles = makeStyles<
  Theme,
  BaseButtonProps & { classes?: { [index in ButtonClassKey]?: string } },
  ButtonClassKey
>(
  (theme: Theme) => ({
    pill: {
      borderRadius: 40 / 2,
    },
    pillLink: {
      [theme.breakpoints.up('md')]: {
        background: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText,
        boxShadow: theme.shadows[2],
        borderRadius: 25,
        '&:hover': {
          background: theme.palette.secondary.dark,
        },
      },
    },
    pillPrimary: {
      //
    },
    pillSecondary: {
      //
    },
    pillSizeLarge: {
      borderRadius: 59 / 2,
    },
    pillSizeSmall: {
      borderRadius: 33 / 2,
    },
    pillNoElevation: {
      /* disableElevation does not stop adding box shadow on active... ?! */
      '&:active': {
        boxShadow: 'none',
      },
    },
    textBold: {
      fontWeight: theme.typography.fontWeightBold,
    },
  }),
  { name: 'MuiPillButton' },
)

export default React.forwardRef<any, ButtonProps>((props, ref) => {
  const { classes = {}, ...baseProps } = props
  const { variant, color, size, className, children, loading, disabled, text, ...buttonProps } =
    baseProps
  const {
    pill,
    pillPrimary,
    pillSecondary,
    pillSizeLarge,
    pillSizeSmall,
    pillLink,
    textBold,
    ...buttonClasses
  } = classes

  const pillClasses = useStyles({
    ...baseProps,
    classes: { pill, pillPrimary, pillSecondary, pillSizeLarge, pillSizeSmall, pillLink, textBold },
  })

  const variantMap = {
    pill: 'contained',
    'pill-link': 'text',
  }

  return (
    <MuiButton
      {...buttonProps}
      classes={buttonClasses}
      color={color}
      variant={variantMap[variant ?? ''] ?? variant}
      size={size}
      ref={ref}
      disabled={loading || disabled}
      className={clsx(
        {
          [pillClasses.pill]: variant === 'pill',
          [pillClasses.pillPrimary]: variant === 'pill' && color === 'primary',
          [pillClasses.pillSecondary]: variant === 'pill' && color === 'secondary',
          [pillClasses.pillSizeLarge]: variant === 'pill' && size === 'large',
          [pillClasses.pillSizeSmall]: variant === 'pill' && size === 'small',
          [pillClasses.pillNoElevation]: buttonProps.disableElevation,
          [pillClasses.pillLink]: variant === 'pill-link',
          [pillClasses.textBold]: text === 'bold',
        },
        className,
      )}
    >
      {loading ? <>Loading</> : children}
    </MuiButton>
  )
})
